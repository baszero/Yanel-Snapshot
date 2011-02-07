/*
 * Copyright 2007,2008,2009 Wyona
 */

package org.wyona.yanel.impl.resources.tinymce;

import java.io.BufferedInputStream;
import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.util.Enumeration;

import javax.servlet.http.HttpServletRequest;
import javax.xml.transform.Source;
import javax.xml.transform.stream.StreamSource;

import org.apache.log4j.Logger;
import org.w3c.dom.Document;
import org.w3c.tidy.Tidy;
import org.wyona.yanel.core.Environment;
import org.wyona.yanel.core.Resource;
import org.wyona.yanel.core.ResourceConfiguration;
import org.wyona.yanel.core.api.attributes.CreatableV2;
import org.wyona.yanel.core.api.attributes.ModifiableV2;
import org.wyona.yanel.core.api.attributes.VersionableV2;
import org.wyona.yanel.core.api.attributes.ViewableV2;
import org.wyona.yanel.core.attributes.viewable.View;
import org.wyona.yanel.core.map.Realm;
import org.wyona.yanel.core.navigation.Node;
import org.wyona.yanel.core.navigation.Sitetree;
import org.wyona.yanel.core.source.SourceResolver;
import org.wyona.yanel.core.util.PathUtil;
import org.wyona.yanel.core.util.ResourceAttributeHelper;

import org.wyona.yanel.core.attributes.viewable.ViewDescriptor;
import org.wyona.yanel.impl.resources.BasicXMLResource;
import org.wyona.yanel.impl.resources.usecase.ExecutableUsecaseResource;
import org.wyona.yanel.impl.resources.usecase.UsecaseException;
import org.wyona.yanel.impl.resources.xml.ConfigurableViewDescriptor;
import org.apache.commons.lang.StringEscapeUtils;
import org.apache.commons.io.IOUtils;
import org.apache.xml.resolver.tools.CatalogResolver;

/**
 * Resource to edit another modifiable resource with TinyMCE
 */
public class TinyMCEResource extends ExecutableUsecaseResource {
    
    private static Logger log = Logger.getLogger(TinyMCEResource.class);
    
    private static final String PARAMETER_EDIT_PATH = "edit-path";
    private static final String PARAMETER_CONTINUE_PATH = "continue-path";
    private static final String PARAM_SUBMIT_TIDY = "submit-tidy";
    private static final String PARAM_SUBMIT_TIDY_SAVE = "submit-tidy-save";
    private static final String VIEW_FIX_WELLFORMNESS = "fix-wellformness";
    private static final String CONFIG_PROPERTY_MATCHER_EXTENSION = "matcher-extension";    
    
    private String editorContent;
    private String resourceContent;
    private String editPath;
    private String contentToEdit;
    private Resource resToEdit;

    /* (non-Javadoc)
     * @see org.wyona.yanel.impl.resources.usecase.UsecaseResource#init()
     */
    protected void init() throws UsecaseException {
        log.debug("Init resource ...");
        try {
            String matcherExtension = getResourceConfigProperty(CONFIG_PROPERTY_MATCHER_EXTENSION);
            if (matcherExtension != null && matcherExtension.length() > 0) {
                editPath = getPath().substring(0, getPath().length() - matcherExtension.length());
            } else {
                log.warn("Could not get Resource Configuration Property 'matcher-extension'. Fallback to previous version ...");
                editPath = getParameterAsString(PARAMETER_EDIT_PATH); 
            }
        } catch(Exception e) {
            log.error(e, e);
            throw new UsecaseException(e.getMessage());
        }

        if (editPath == null || editPath.equals("")) {
            addError("Could not get paramter edit-path. Don't know what to edit.");
            return;
        } else {
        }

        try {
            resToEdit = getYanel().getResourceManager().getResource(getEnvironment(), getRealm(), editPath);
        } catch (Exception e) {
            log.error("Exception: " + e);
        }
        if (resToEdit == null) {
            addError("Could not get Resource-Type to edit.");
            return;
        }
        
        log.debug("Edit path: " + editPath);
        editorContent = getParameterAsString(editPath); 
        log.debug("Editor content: " + editorContent);

        if (ResourceAttributeHelper.hasAttributeImplemented(resToEdit, "Modifiable", "2")) {
            try {
                InputStream is = ((ModifiableV2) resToEdit).getInputStream();
                resourceContent = IOUtils.toString(is);
            } catch (Exception e) {
                log.error(e, e);
                addError("Could not get Resource-Type content: " + e.getMessage());
            }
        } else {
            addError("This resource can not be edited. ");
        }
    }
    
    /* (non-Javadoc)
     * @see org.wyona.yanel.impl.resources.usecase.UsecaseResource#processUsecase(java.lang.String)
     */
    protected View processUsecase(String viewID) throws UsecaseException {
        log.debug("Edit path: " + getEditPath());
        try {
        if (!getRealm().getPolicyManager().authorize(getEditPath(), getEnvironment().getIdentity(), new org.wyona.security.core.api.Usecase("write"))) {
            log.warn("Not authorized: " + getPath() + ", " + getEditPath());
            return null; // TODO: Fix the security issue, but not very nice ...
        }
        } catch(Exception e) {
            throw new UsecaseException(e);
        }

        String editorContent = getEditorContent();
        String resourceContent = getResourceContent();
        
        if (getParameter(PARAM_CANCEL) != null) {
            log.debug("Name: " + PARAM_CANCEL + ", Value: " + getParameterAsString(PARAM_CANCEL));
            cancel();
            log.debug("Original view ID: " + viewID + ", new view ID: " + VIEW_CANCEL);
            return generateView(VIEW_CANCEL);
        }

        if (hasErrors() || !checkPreconditions()) {
            if (getParameter(PARAMETER_CONTINUE_PATH) == null) {
                String editPath =  getEditPath();
                String continuePath;
                String referer = getEnvironment().getRequest().getHeader("referer");
                if (editPath != null && editPath.length() > 1) {
                    continuePath = PathUtil.backToRealm(getPath()) + editPath.substring(1);
                } else if (referer != null)  {
                    continuePath = referer;
                } else {
                    continuePath = PathUtil.backToRealm(getPath());
                }
                setParameter(PARAMETER_CONTINUE_PATH, continuePath);
            }
            return generateView(VIEW_CANCEL);
        }

        String userID = getEnvironment().getIdentity().getUsername();

        log.debug("Check if content of '" + getResToEdit().getPath() + "' is already checked out");
        if (isResToEditCheckedOut() && !(getParameter(PARAM_SUBMIT) != null || getParameter(PARAM_SUBMIT_TIDY_SAVE) != null)) {
            addError("Resource is checked out ");
            String checkoutUserID = getResToEditCheckoutUserID();
            if (checkoutUserID != null) {
                if(checkoutUserID.equals(userID)) {
                    addError("by you (User: " + userID + ")! ");
                } else if (!checkoutUserID.equals("null")) {
                    addError("by user: " + checkoutUserID + " ");
                    return generateView(VIEW_CANCEL);
                } else if (checkoutUserID.equals("null")) {
                    addError("by a not loged in user. ");
                }
            } else {
                addError("by 'null'.");
            }
        }

        if (getParameter(PARAM_SUBMIT_TIDY) != null) {
            contentToEdit = tidy(editorContent);
            if(!isWellformed(IOUtils.toInputStream(contentToEdit))) {
                addError("Tidy seems to have a problem to make the content wellformed. Please fix it manually!");
                return generateView(VIEW_FIX_WELLFORMNESS);
            }
            return generateView(DEFAULT_VIEW_ID);
        }

        if (getParameter(PARAM_SUBMIT_TIDY_SAVE) != null) {
            this.editorContent = tidy(editorContent);
            if(!isWellformed(IOUtils.toInputStream(this.editorContent))) {
                contentToEdit = this.editorContent;
                addError("Tidy seems to have a problem to make the content wellformed. Please fix it manually!");
                return generateView(VIEW_FIX_WELLFORMNESS);
            }
            execute();
            return generateView(VIEW_DONE);
        }

        if (editorContent != null && !isWellformed(IOUtils.toInputStream(editorContent))) {
            contentToEdit = getEditorContent();
            return generateView(VIEW_FIX_WELLFORMNESS);
        }

        if (getParameter(PARAM_SUBMIT) != null) {
            execute();
            return generateView(VIEW_DONE);
        }         

        contentToEdit = resourceContent;

        // Checkout resource to be edited
        try {
            if (isResToEditVersionableV2()) {
                if (!isResToEditCheckedOut()) {
                    ((VersionableV2) getResToEdit()).checkout(userID);
                    log.debug("Resource '" + getResToEdit().getPath() + "' has been checked out.");
                } else {
                    log.warn("Resource '" + getResToEdit().getPath() + "' is already checked out!");
                }
            } else {
                log.warn("Resource '" + getResToEdit().getPath() + "' is not VersionableV2 and hence cannot be checked out!");
            }
        } catch (Exception e) {
            log.warn("Could not checkout resource: " + getResToEdit().getPath() + " " + e.getMessage());
        }

        return generateView(viewID); // this will show the default view if the param is not set
    }
    
    /* (non-Javadoc)
     * @see org.wyona.yanel.impl.resources.usecase.ExecutableUsecaseResource#checkPreconditions()
     */
    public boolean checkPreconditions() throws UsecaseException {
        Resource resToEdit = getResToEdit();
        if (!ResourceAttributeHelper.hasAttributeImplemented(resToEdit, "Modifiable", "2")) {
            addError("The resource you wanted to edit does not implement ModifiableV2 and is therefor not editable with this editor. ");
            return false;
        }
        if (ResourceAttributeHelper.hasAttributeImplemented(resToEdit, "Viewable", "2")) {
            try {
                View view = ((ViewableV2)resToEdit).getView(DEFAULT_VIEW_ID);
                if (!view.getMimeType().contains("html")) {
                    addError("Mime-Type not supported: " + view.getMimeType() + ". Only edit html documents with tinyMCE. ");
                    return false;
                }
            } catch (Exception e) {
                addError("Could not find out mime-type. " + e.getMessage() + " ");
                return false;
            }
        } else {
            addError("Could not find out mime-type. ");
            return false;
        }
        return true;
    }
    
    /* (non-Javadoc)
     * @see org.wyona.yanel.impl.resources.usecase.ExecutableUsecaseResource#execute()
     */
    public void execute() throws UsecaseException {
        final Resource resToEdit = getResToEdit();
        if (ResourceAttributeHelper.hasAttributeImplemented(resToEdit, "Modifiable", "2")) {
            try {
                final String content = getEditorContent();
                if (log.isDebugEnabled()) log.debug("saving content: " + content);
                log.debug("Saving content: " + content);
                OutputStream os = ((ModifiableV2) resToEdit).getOutputStream();
                IOUtils.write(content, os);
                os.close();
                addInfoMessage("Succesfully saved resource " + resToEdit.getPath() + ". ");


                log.debug("Try to checkin resource: " + resToEdit.getPath());
                if (isResToEditVersionableV2()) {
                    VersionableV2 versionable  = (VersionableV2)resToEdit;
                    try {
                        log.debug("Checkin: " + resToEdit.getPath());
                        versionable.checkin("Updated with tinyMCE");
                        addInfoMessage("Succesfully checked in resource '" + resToEdit.getPath() + "'.");
                    } catch (Exception e) {
                        String msg = "Could not check in resource: " + resToEdit.getPath() + " " + e.getMessage() + ". ";
                        log.error(msg, e);
                        addError(msg);
                        throw new UsecaseException(msg, e);
                    }
                } else {
                    log.warn("Resource '" + getResToEdit().getPath() + "' is not VersionableV2 and hence cannot be checked out!");
                }
            } catch (Exception e) {
                log.error(e, e);
                throw new UsecaseException(e.getMessage(), e);
            }
        } else {
            addError("Could not save the document, because resource is not ModifiableV2!");
        }
        if (getParameter(PARAMETER_CONTINUE_PATH) == null) {
            setParameter(PARAMETER_CONTINUE_PATH, PathUtil.backToRealm(getPath()) + getEditPath().substring(1)); // allow jelly template to show link to new event
        }
    }
    
    /* (non-Javadoc)
     * @see org.wyona.yanel.impl.resources.usecase.ExecutableUsecaseResource#cancel()
     */
    public void cancel() throws UsecaseException {
        addInfoMessage("Canceled. ");
        final Resource resToEdit = getResToEdit();
        if (isResToEditVersionableV2()) {
            VersionableV2 versionable  = (VersionableV2)resToEdit;
            try {
                versionable.cancelCheckout();
                addInfoMessage("Released lock for: " + resToEdit.getPath() + ". ");
            } catch (Exception e) {
                log.error(e.getMessage(), e);
                addInfoMessage("Releasing of lock failed because of: " + resToEdit.getPath() + " " + e.getMessage() + ". ");
            }
        }
        if (getParameter(PARAMETER_CONTINUE_PATH) == null) {
            setParameter(PARAMETER_CONTINUE_PATH, PathUtil.backToRealm(getPath()) + getEditPath().substring(1)); // allow jelly template to show link to new event
        }
    }
    
    /**
     * Get the String containing the path to the resource which is going to be edited
     * @return String
     */
    public String getEditPath() {
        return editPath;
    }

    /**
     * Get the content proposed to edit
     * used by tinyMCE.jelly
     * @return String
     */
    public String getContentToEdit() {
        return contentToEdit;
    }

    /**
     * escape xml
     * @param String to escape
     * @return String escaped
     */
    public String escapeXML(String string) {
        return StringEscapeUtils.escapeXml(string);
    }
    
    /**
     * Tidy content
     * @return String wellformed by tidy
     * @param String to be cleaned
     * @throws UsecaseException
     */
    private String tidy(String content) throws UsecaseException {
        //TODO: tidy should be configured via an external file (e.g. in htdocs)
        ByteArrayOutputStream os = new ByteArrayOutputStream();
        String out = "";
        Tidy tidy = new Tidy();
        tidy.setXHTML(true);
        tidy.setNumEntities(true);
        tidy.setTidyMark(false);
        tidy.setInputEncoding("utf-8");
        tidy.setOutputEncoding("utf-8");
        tidy.parse(IOUtils.toInputStream(content), os);
        try {
            out = os.toString("utf-8");
        } catch (Exception e) {
            throw new UsecaseException(e.getMessage(), e);
        }
        addInfoMessage("Content cleaned with tidy. ");
        return out;
    }

    /**
     * Checks if InputStream is wellformed
     * @return boolean true if wellformed, false if not
     * @param InputStream which is checked if wellformed
     * @throws UsecaseException
     */
    private boolean isWellformed(InputStream is) throws UsecaseException {
        try {
            //TODO: code borrowed from YanelServlet.java r40436. see line 902. 1. maybe there is a better way to do so. 2. this code could maybe be refactored into a some xml.util lib. 
            javax.xml.parsers.DocumentBuilderFactory dbf= javax.xml.parsers.DocumentBuilderFactory.newInstance();
            javax.xml.parsers.DocumentBuilder parser = dbf.newDocumentBuilder();
            // NOTE: DOCTYPE is being resolved/retrieved (e.g. xhtml schema from w3.org) also
            //       if isValidating is set to false.
            //       Hence, for performance and network reasons we use a local catalog ...
            //       Also see http://www.xml.com/pub/a/2004/03/03/catalogs.html
            //       resp. http://xml.apache.org/commons/components/resolver/
            // TODO: What about a resolver factory?
            parser.setEntityResolver(new CatalogResolver());
            parser.parse(is);
            return true;
        } catch (org.xml.sax.SAXException e) {
            addError("Document is not wellformed: " + e.getMessage() + " ");
            return false;
        } catch (Exception e) {
            addError(e.getMessage());
            return false;
        }
    }
    
    /**
     * Get the String with the content of the resource which is going to be edited
     * @return String 
     */
    private String getResourceContent() throws UsecaseException {
        return resourceContent;
    }
    
    /**
     * Get the String with the content of the editor
     * @return String 
     */
    private String getEditorContent() {
        return editorContent;
    }
    
    /**
     * Get the Resource which is going to be edited
     * @return Resource
     */
    private Resource getResToEdit() throws UsecaseException {
        return resToEdit;
    }

    /**
     * Check if resource is VersionableV2
     */
    private boolean isResToEditVersionableV2() {
        try {
            if (ResourceAttributeHelper.hasAttributeImplemented(getResToEdit(), "Versionable", "2")) {
                return true;     
            }
        } catch (Exception e) {
            return false;     
        }
        return false;     
    }

    /**
     * Check wheter resource is checked-out
     */
    private boolean isResToEditCheckedOut()  {
        try {
            if (isResToEditVersionableV2()) {
                VersionableV2 versionable = (VersionableV2) getResToEdit();
                if (versionable.isCheckedOut()) {
                    log.warn("Resource '" + getResToEdit().getPath() + "' is checked-out.");
                    return true;
                }
            }     
            return false;
        } catch (Exception e) {
            log.error(e, e);
            return false;
        }
    }

    
    /**
     * Returns the user id which was supplied when calling checkout(). can be null if not known, or the resource doesn't implement VersionableV2, or resource is not checked out yet. or no way to find out.
     * @return String
     */
    private String getResToEditCheckoutUserID() {
        try {
            if (isResToEditVersionableV2() && isResToEditCheckedOut()) {
                final Resource resToEdit = getResToEdit();
                VersionableV2 versionable = (VersionableV2)resToEdit;
                if (versionable.isCheckedOut()) {
                    return versionable.getCheckoutUserID();
                }
            }
        } catch (Exception e) {
            return null;
        }
        return null;
    }
    
}
