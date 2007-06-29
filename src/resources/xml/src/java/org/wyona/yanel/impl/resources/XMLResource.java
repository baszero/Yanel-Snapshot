/*
 * Copyright 2006 Wyona
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.wyona.org/licenses/APACHE-LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

package org.wyona.yanel.impl.resources;

import org.wyona.yanel.core.Path;
import org.wyona.yanel.core.Resource;
import org.wyona.yanel.core.ResourceConfiguration;
import org.wyona.yanel.core.Topic;
import org.wyona.yanel.core.Yanel;
import org.wyona.yanel.core.api.attributes.CreatableV2;
import org.wyona.yanel.core.api.attributes.IntrospectableV1;
import org.wyona.yanel.core.api.attributes.ModifiableV2;
import org.wyona.yanel.core.api.attributes.TranslatableV1;
import org.wyona.yanel.core.api.attributes.VersionableV2;
import org.wyona.yanel.core.api.attributes.ViewableV1;
import org.wyona.yanel.core.api.attributes.ViewableV2;
import org.wyona.yanel.core.api.attributes.WorkflowableV1;
import org.wyona.yanel.core.attributes.translatable.TranslationException;
import org.wyona.yanel.core.attributes.translatable.TranslationManager;
import org.wyona.yanel.core.attributes.versionable.RevisionInformation;
import org.wyona.yanel.core.attributes.viewable.View;
import org.wyona.yanel.core.attributes.viewable.ViewDescriptor;

import org.wyona.yanel.core.serialization.HTMLSerializer;
import org.wyona.yanel.core.serialization.SerializerFactory;
import org.wyona.yanel.core.source.ResourceResolver;
import org.wyona.yanel.core.transformation.I18nTransformer2;
import org.wyona.yanel.core.transformation.XIncludeTransformer;
import org.wyona.yanel.core.util.PathUtil;
import org.wyona.yanel.core.util.ResourceAttributeHelper;
import org.wyona.yanel.core.workflow.Workflow;
import org.wyona.yanel.core.workflow.WorkflowException;
import org.wyona.yanel.core.workflow.WorkflowHelper;

import org.wyona.yarep.core.NoSuchNodeException;
import org.wyona.yarep.core.NoSuchPropertyException;
import org.wyona.yarep.core.Node;
import org.wyona.yarep.core.Repository;
import org.wyona.yarep.core.RepositoryException;
import org.wyona.yarep.core.RepositoryFactory;
import org.wyona.yarep.core.Revision;
import org.wyona.yarep.util.RepoPath;
import org.xml.sax.InputSource;
import org.xml.sax.XMLReader;
import org.xml.sax.helpers.XMLReaderFactory;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import javax.xml.parsers.SAXParser;
import javax.xml.parsers.SAXParserFactory;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.sax.SAXResult;
import javax.xml.transform.sax.SAXSource;
import javax.xml.transform.sax.SAXTransformerFactory;
import javax.xml.transform.sax.TransformerHandler;
import javax.xml.transform.stream.StreamSource;
import javax.xml.transform.stream.StreamResult;

import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.Reader;
import java.io.Writer;
import java.util.Date;
import java.util.Properties;
import java.util.jar.JarEntry;
import java.util.jar.JarInputStream;

import org.apache.log4j.Category;
import org.apache.xml.resolver.tools.CatalogResolver;
import org.apache.xml.serializer.Serializer;

/**
 *
 */
public class XMLResource extends Resource implements ViewableV2, ModifiableV2, VersionableV2, CreatableV2, IntrospectableV1, TranslatableV1, WorkflowableV1 {

    private static Category log = Category.getInstance(XMLResource.class);
    
    /**
     *
     */
    public XMLResource() {
    }

    /**
     *
     */
    public ViewDescriptor[] getViewDescriptors() {
        ViewDescriptor[] vd = new ViewDescriptor[2];
        vd[0] = new ViewDescriptor("default");
        // NOTE: depends on XSLT ...
        vd[0].setMimeType(null);
        vd[1] = new ViewDescriptor("source");
        vd[1].setMimeType("application/xml");
        return vd;
    }

    public View getView(String viewId) throws Exception {
        return getView(viewId, null);
    }

    /**
     * Generates view
     */
    public View getView(String viewId, String revisionName) throws Exception {
        View defaultView = new View();
        String mimeType = getMimeType(viewId);
        defaultView.setMimeType(mimeType);

        String yanelPath = getResourceConfigProperty("yanel-path");
        //if (yanelPath == null) yanelPath = path.toString();

        try {
            Repository repo = getRealm().getRepository();

            if (viewId != null && viewId.equals("source")) {
                defaultView.setInputStream(getContentXML(repo, yanelPath, revisionName));
                defaultView.setMimeType("application/xml");
                return defaultView;
            }

            String[] xsltPath = getXSLTPath(getPath());
            if (xsltPath != null) {
                
                // create reader:
                XMLReader xmlReader = XMLReaderFactory.createXMLReader();
                CatalogResolver catalogResolver = new CatalogResolver();
                xmlReader.setEntityResolver(catalogResolver);
                
                // create xslt transformer:
                SAXTransformerFactory tf = (SAXTransformerFactory)TransformerFactory.newInstance();
                
                TransformerHandler[] xsltHandlers = new TransformerHandler[xsltPath.length];
                for (int i = 0; i < xsltPath.length; i++) {
                    xsltHandlers[i] = tf.newTransformerHandler(new StreamSource(repo.getNode(xsltPath[i]).getInputStream()));
                    xsltHandlers[i].getTransformer().setParameter("yanel.path.name", PathUtil.getName(getPath()));
                    xsltHandlers[i].getTransformer().setParameter("yanel.path", getPath());
                    xsltHandlers[i].getTransformer().setParameter("yanel.back2context", PathUtil.backToContext(realm, getPath()));
                    xsltHandlers[i].getTransformer().setParameter("yarep.back2realm", PathUtil.backToRealm(getPath()));
                    String userAgent = getRequest().getHeader("User-Agent");
                    String os = getOS(userAgent);
                    if (os != null) xsltHandlers[i].getTransformer().setParameter("os", os);
                    String client = getClient(userAgent);
                    if (client != null) xsltHandlers[i].getTransformer().setParameter("client", client);
                    xsltHandlers[i].getTransformer().setParameter("language", getRequestedLanguage());
                }
                
                // create i18n transformer:
                I18nTransformer2 i18nTransformer = new I18nTransformer2("global", getRequestedLanguage(), getRealm().getDefaultLanguage());
                i18nTransformer.setEntityResolver(catalogResolver);
                
                // create xinclude transformer:
                XIncludeTransformer xIncludeTransformer = new XIncludeTransformer();
                ResourceResolver resolver = new ResourceResolver(this);
                xIncludeTransformer.setResolver(resolver);
                
                // create serializer:
                Serializer serializer = SerializerFactory.getSerializer(SerializerFactory.XHTML_STRICT);
                ByteArrayOutputStream baos = new ByteArrayOutputStream();
                
                // chain everything together (create a pipeline):
                xmlReader.setContentHandler(xsltHandlers[0]);
                for (int i=0; i<xsltHandlers.length-1; i++) {
                    xsltHandlers[i].setResult(new SAXResult(xsltHandlers[i+1]));
                }
                xsltHandlers[xsltHandlers.length-1].setResult(new SAXResult(xIncludeTransformer));
                xIncludeTransformer.setResult(new SAXResult(i18nTransformer));
                i18nTransformer.setResult(new SAXResult(serializer.asContentHandler()));
                serializer.setOutputStream(baos);
                
                // execute pipeline:
                xmlReader.parse(new InputSource(getContentXML(repo, yanelPath, revisionName)));
                
                // write result into view:
                defaultView.setInputStream(new ByteArrayInputStream(baos.toByteArray()));
                return defaultView;
            } else {
                log.debug("Mime-Type: " + mimeType);
                defaultView.setInputStream(getContentXML(repo, yanelPath, revisionName));
            }
        } catch(Exception e) {
            log.error(e + " (" + getPath() + ", " + getRealm() + ")", e);
            throw new Exception(e);
        }

        return defaultView;
    }

    /**
     * Get initial content as XML
     */
    private InputStream getContentXML(Repository repo, String yanelPath, String revisionName) throws Exception {
        if (yanelPath != null) {
            log.debug("Yanel Path: " + yanelPath);
            Resource res = yanel.getResourceManager().getResource(getEnvironment(), 
                    getRealm(), yanelPath);
            if (ResourceAttributeHelper.hasAttributeImplemented(res, "Viewable", "1")) {
                // TODO: Pass the request ...
                String viewV1path = getRealm().getMountPoint() + yanelPath.substring(1);
                log.debug("including document: " + viewV1path);
                View view = ((ViewableV1) res).getView(new Path(viewV1path), null);
                if (view.getMimeType().indexOf("xml") >= 0) {
                    // TODO: Shall the mime-type be transfered?
                    return view.getInputStream();
                } else {
                    log.error("No XML like mime-type: " + getPath() + " (yanel-path: " + yanelPath + ")");
                }
	    } else if (ResourceAttributeHelper.hasAttributeImplemented(res, "Viewable", "2")) {
                // TODO: Pass the request ...
                View view = ((ViewableV2) res).getView(null);
                if (view.getMimeType().indexOf("xml") >= 0) {
                    // TODO: Shall the mime-type be transfered?
                    return view.getInputStream();
                } else {
                    log.error("No XML like mime-type: " + getPath() + " (yanel-path: " + yanelPath + ")");
                }
            } else {
                log.error("Resource is not ViewableV1: " + getPath() + " (yanel-path: " + yanelPath + ")");
            }
            return null;
        }
        
        Node node;
        if (revisionName != null) {
            node = repo.getNode(getPath()).getRevision(revisionName);
        } else {
            node = repo.getNode(getPath());
        }
        return node.getInputStream();
    }

    /**
     * Get mime type
     */
    public String getMimeType(String viewId) throws Exception {
        String mimeType = getResourceConfigProperty("mime-type");
        if (mimeType != null) return mimeType;

        String suffix = PathUtil.getSuffix(getPath());
        if (suffix != null) {
            log.debug("SUFFIX: " + suffix);
            if (suffix.equals("html")) {
                //mimeType = "text/html";
                mimeType = "application/xhtml+xml";
            } else if (suffix.equals("xhtml")) {
                mimeType = "application/xhtml+xml";
            } else if (suffix.equals("xml")) {
                mimeType = "application/xml";
            } else {
                mimeType = "application/xml";
            }
        } else {
            mimeType = "application/xml";
        }
        return mimeType;
    }

    /**
     *
     */
    public Reader getReader() throws Exception {
        return new InputStreamReader(getInputStream(), "UTF-8");
    }

    /**
     *
     */
    public InputStream getInputStream() throws Exception {
        return getRealm().getRepository().getNode(getPath()).getInputStream();
    }

    /**
     *
     */
    public Writer getWriter() throws Exception {
        log.error("Not implemented yet!");
        return null;
    }

    /**
     *
     */
    public OutputStream getOutputStream() throws Exception {
        return getRealm().getRepository().getNode(getPath()).getOutputStream();
    }

    /**
     *
     */
    public void write(InputStream in) throws Exception {
        log.warn("Not implemented yet!");
    }

    /**
     *
     */
    public long getLastModified() throws Exception {
        Node node = getRealm().getRepository().getNode(getPath());
        long lastModified;
        if (node.isResource()) {
            lastModified = node.getLastModified();
        } else {
            lastModified = 0;
        }

        return lastModified;
    }

    /**
     * Get XSLT path
     */
    private String[] getXSLTPath(String path) throws Exception {
        String[] xsltPath = getResourceConfigProperties("xslt");
        if (xsltPath != null) return xsltPath;
        log.info("No XSLT Path within: " + path);
        return null;
    }


    /**
     *
     */
    public boolean delete() throws Exception {
        getRealm().getRepository().getNode(getPath()).delete();
        return true;
    }

    /**
     * @see org.wyona.yanel.core.api.attributes.VersionableV2#getRevisions()
     */
    public RevisionInformation[] getRevisions() throws Exception {
        Revision[] revisions = getRealm().getRepository().getNode(getPath()).getRevisions();
        RevisionInformation[] revisionInfos = new RevisionInformation[revisions.length];
       
        for (int i = 0; i < revisions.length; i++) {
            revisionInfos[i] = new RevisionInformation(revisions[i]);
        }
        return revisionInfos; 
    }
    
    public void checkin(String comment) throws Exception {
        Node node = getRealm().getRepository().getNode(getPath());
        Revision revision = node.checkin(comment);
        // set initial workflow state and date:
        Workflow workflow = WorkflowHelper.getWorkflow(this);
        if (workflow != null) {
            setWorkflowState(workflow.getInitialState(), revision.getRevisionName());
        }
        /*
        if (node.isCheckedOut()) {
            String checkoutUserID = node.getCheckoutUserID(); 
            if (checkoutUserID.equals(userID)) {
                node.checkin();
            } else {
                throw new Exception("Resource is checked out by another user: " + checkoutUserID);
            }
        } else {
            throw new Exception("Resource is not checked out.");
        }
        */
    }

    public void checkout(String userID) throws Exception {
        Node node = getRealm().getRepository().getNode(getPath());
        node.checkout(userID);
        /*
        if (node.isCheckedOut()) {
            String checkoutUserID = node.getCheckoutUserID(); 
            if (checkoutUserID.equals(userID)) {
                log.warn("Resource " + getPath() + " is already checked out by this user: " + checkoutUserID);
            } else {
                throw new Exception("Resource is already checked out by another user: " + checkoutUserID);
            }
        } else {
            node.checkout(userID);
        }
        */
    }
    
    public void cancelCheckout() throws Exception {
        Node node = getRealm().getRepository().getNode(getPath());
        node.cancelCheckout();
    }

    public void restore(String revisionName) throws Exception {
        getRealm().getRepository().getNode(getPath()).restore(revisionName);
    }

    public Date getCheckoutDate() throws Exception {
        Node node = getRealm().getRepository().getNode(getPath());
        // return node.getCheckoutDate();
        return null;
    }

    public String getCheckoutUserID() throws Exception {
        Node node = getRealm().getRepository().getNode(getPath());
        return node.getCheckoutUserID();
    }

    public boolean isCheckedOut() throws Exception {
        Node node = getRealm().getRepository().getNode(getPath());
        return node.isCheckedOut();
    }


    public boolean exists() throws Exception {
        return getRealm().getRepository().existsNode(getPath());
    }

    /**
     * Get size of generated page
     */
    public long getSize() throws Exception {
        // TODO: If the XML is being transformed then the size will not be the same as the size of the node!
/*
        Node node = getRealm().getRepository().getNode(getPath());
        long size;
        if (node.isResource()) {
            size = node.getSize();
        } else {
            size = 0;
        }
        return size;
*/
        return -1;
    }

    /**
     * Get operating system
     */
    public String getOS(String userAgent) {
        if (userAgent.indexOf("Linux") > 0) {
            return "unix";
        } else if (userAgent.indexOf("Mac OS X") > 0) {
            return "unix";
        } else if (userAgent.indexOf("Windows") > 0) {
            return "windows";
        } else {
            log.warn("Operating System could not be recognized: " + userAgent);
            return null;
        }
    }

    /**
     * Get client
     */
    public String getClient(String userAgent) {
        if (userAgent.indexOf("Firefox") > 0) {
            return "firefox";
        } else if (userAgent.indexOf("MSIE") > 0) {
            return "msie";
        } else {
            log.warn("Client could not be recognized: " + userAgent);
            return null;
        }
    }
    

    /**
     *
     */
    public void create(HttpServletRequest request) {
        try {
            // TODO: XHTML template should not be hardcoded!
            Repository repo = getRealm().getRepository();

            org.wyona.yanel.core.util.YarepUtil.addNodes(repo, getPath().toString(), org.wyona.yarep.core.NodeType.RESOURCE);
            Writer writer = new java.io.OutputStreamWriter(repo.getNode(getPath()).getOutputStream());
            writer.write("<?xml version=\"1.0\"?>");
            writer.write("<html xmlns=\"http://www.w3.org/1999/xhtml\">");
            writer.write("<head>");
            writer.write("  <title>Created from template ...</title>");
            writer.write("  <link rel=\"neutron-introspection\" type=\"application/neutron+xml\" href=\"?yanel.resource.usecase=introspection\"/>");
            writer.write("</head>");
            writer.write("<body>");
            writer.write("  <p>Created from template ...</p>");
            writer.write("</body>");
            writer.write("</html>");
            writer.close();

            // TODO: Introspection should not be hardcoded!
            String name = new org.wyona.commons.io.Path(getPath()).getName();
            String parent = new org.wyona.commons.io.Path(getPath()).getParent().toString();
            String nameWithoutSuffix = name;
            int lastIndex = name.lastIndexOf(".");
            if (lastIndex > 0) nameWithoutSuffix = name.substring(0, lastIndex);
            String introspectionPath = parent + "/introspection-" + nameWithoutSuffix + ".xml";

            org.wyona.yanel.core.util.YarepUtil.addNodes(repo, introspectionPath, org.wyona.yarep.core.NodeType.RESOURCE);
            writer = new java.io.OutputStreamWriter(repo.getNode(introspectionPath).getOutputStream());
            writer.write(getIntrospection(name));
            writer.close();
        } catch (Exception e) {
            log.error(e.getMessage(), e);
        }
    }

    /**
     *
     */
    public java.util.HashMap createRTIProperties(HttpServletRequest request) {
        java.util.HashMap map = new java.util.HashMap();
        map.put("xslt", request.getParameter("rp.xslt"));
        map.put("mime-type", request.getParameter("rp.mime-type"));
        map.put("workflow-schema", request.getParameter("rp.workflow-schema"));
        return map;
    }

    /**
     *
     */
    public String getPropertyType(String name) {
        log.warn("Not implemented yet!");
        return null;
    }

    /**
     *
     */
    public Object getProperty(String name) {
        log.warn("Not implemented yet!");
        return null;
    }

    /**
     *
     */
    public String[] getPropertyNames() {
        log.warn("Not implemented yet!");
        return null;
    }

    /**
     *
     */
    public void setProperty(String name, Object value) {
        log.warn("Not implemented yet!");
    }
    
    /**
     * Create introspection for XHTML documents used by the creator (WARNING: Mime type is hardcoded!)
     * @param name
     * @return introspection as string
     */
    private String getIntrospection(String name) {
        StringBuffer sb = new StringBuffer();
        sb.append("<?xml version=\"1.0\"?>");
        sb.append("\n");
        sb.append("\n<introspection xmlns=\"http://www.wyona.org/neutron/2.0\">");
        sb.append("\n");

        sb.append("<navigation>");
        sb.append("  <sitetree href=\"./\" method=\"PROPFIND\"/>");
        sb.append("</navigation>");


        sb.append("\n  <resource name=\"" + name + "\">");
        sb.append("\n  <edit mime-type=\"application/xhtml+xml\">");
        sb.append("\n    <checkout url=\"" + name + "?yanel.resource.viewid=source&amp;yanel.resource.usecase=checkout\" method=\"GET\"/>");
        sb.append("\n    <checkin  url=\"" + name + "?yanel.resource.usecase=checkin\" method=\"PUT\"/>");
        sb.append("\n    <release-lock url=\"" + name + "?yanel.resource.usecase=release-lock\" method=\"GET\"/>");
        sb.append("\n  </edit>");
        sb.append("\n  </resource>");
        sb.append("\n</introspection>");
        
        return sb.toString();
    }

    /**
     * Get introspection for Introspectable interface
     */
    public String getIntrospection() throws Exception {
        String name = PathUtil.getName(getPath());
        StringBuffer sb = new StringBuffer("<?xml version=\"1.0\"?>");
        sb.append("<introspection xmlns=\"http://www.wyona.org/neutron/2.0\">");

        sb.append("<navigation>");
        sb.append("  <sitetree href=\"./\" method=\"PROPFIND\"/>");
        sb.append("</navigation>");

        sb.append("<resource name=\"" + name + "\">");
        //sb.append("<edit mime-type=\"application/xml\">");
        sb.append("<edit mime-type=\"" + this.getMimeType(null) + "\">");
        sb.append("<checkout url=\"?yanel.resource.viewid=source&amp;yanel.resource.usecase=checkout\" method=\"GET\"/>");
        sb.append("<checkin  url=\"?yanel.resource.usecase=checkin\"  method=\"PUT\"/>");
        sb.append("<release-lock url=\"?yanel.resource.usecase=release-lock\" method=\"GET\"/>");
        sb.append("</edit>");

        sb.append(getWorkflowIntrospection());
        
        sb.append("</resource>");
        sb.append("</introspection>");
        return sb.toString();
    }

    protected TranslationManager getTranslationManager() throws TranslationException {
        return getRealm().getTranslationManager();
    }

    public String getLanguage() throws TranslationException {
        return getTranslationManager().getLanguage(this);
    }

    public String[] getLanguages() throws TranslationException {
        return getTranslationManager().getLanguages(this);
    }
    
    public Resource getTranslation(String language) throws TranslationException {
        return getTranslationManager().getTranslation(this, language);
    }

    public void addTranslation(Resource resource, String language) throws TranslationException {
        getTranslationManager().addTranslation(this, resource, language);
    }

    public boolean hasTranslation(String language) throws TranslationException {
        return getTranslationManager().hasTranslation(this, language);
    }

    public void removeTranslation(String language) throws TranslationException {
        getTranslationManager().removeTranslation(this, language);
    }

    /************************************************
     * Workflow                                     *
     ************************************************/
    
    public void doTransition(String transitionID, String revision) throws WorkflowException {
        WorkflowHelper.doTransition(this, transitionID, revision);
    }
    
    public View getLiveView(String viewid) throws Exception {
        return WorkflowHelper.getLiveView(this, viewid);
    }

    public boolean isLive() throws WorkflowException {
        return WorkflowHelper.isLive(this);
    }

    public String getWorkflowVariable(String name) throws WorkflowException {
        return WorkflowHelper.getWorkflowVariable(this, name);
    }

    public void setWorkflowVariable(String name, String value) throws WorkflowException {
        WorkflowHelper.setWorkflowVariable(this, name, value);
    }
    
    public void removeWorkflowVariable(String name) throws WorkflowException {
        WorkflowHelper.removeWorkflowVariable(this, name);
    }

    public String getWorkflowState(String revision) throws WorkflowException {
        return WorkflowHelper.getWorkflowState(this, revision);
    }

    public void setWorkflowState(String state, String revision) throws WorkflowException {
        WorkflowHelper.setWorkflowState(this, state, revision);
    }

    public Date getWorkflowDate(String revision) throws WorkflowException {
        return WorkflowHelper.getWorkflowDate(this, revision);
    }
    
    public String getWorkflowIntrospection() throws WorkflowException {
        return WorkflowHelper.getWorkflowIntrospection(this);
    }

}
