/*
 * Copyright 2007 Wyona
 */

package org.wyona.yanel.impl.resources.policymanager;

import org.wyona.security.core.api.AccessManagementException;
import org.wyona.security.core.api.IdentityManager;
import org.wyona.security.core.api.Item;
import org.wyona.security.core.api.Policy;
import org.wyona.security.core.api.PolicyManager;
import org.wyona.security.core.api.User;
import org.wyona.yanel.core.attributes.viewable.View;
import org.wyona.yanel.core.util.PathUtil;
import org.wyona.yanel.impl.resources.BasicXMLResource;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.util.Arrays;
import java.util.Comparator;
import java.util.Vector;

import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;


/**
 * 
 */
public class PolicyManagerResource extends BasicXMLResource {
    
    private static Logger log = Logger.getLogger(PolicyManagerResource.class);
    
    private static String PARAMETER_EDIT_PATH = "policy-path";
    private static String PARAMETER_USECASE = "yanel.policy";

    /**
     * See src/webapp/global-resource-configs/policy-manager_yanel-rc.xml or realm specific
     */
    public View getView(String viewId) throws Exception {
        String policyRequestPara = getEnvironment().getRequest().getParameter("yanel.policy");
        if (policyRequestPara.equals("update")) {
            String getXML = getEnvironment().getRequest().getParameter("get");
            String postXML = getEnvironment().getRequest().getParameter("post");
            if (getXML != null) {
                viewId = "get-xml";
            } else if (postXML != null) {
                viewId = "post-xml";
            } else {
                viewId = "editor";
            }
        } else {
            viewId = "default"; // default is default anyway!
        }
        
        return getXMLView(viewId, getContentXML(viewId));
    }
    
    /**
     *
     */
    protected InputStream getContentXML(String viewId) throws Exception {
        // For example ?policy-path=/foo/bar.html
        String policyPath = request.getParameter(PARAMETER_EDIT_PATH);
        if (policyPath == null) {
            log.info("No policy path specified (e.g. ?policy-path=/foo/bar.html). Request path used as default: " + getPath());
            policyPath = getPath();
        }
        // For example ?yanel.policy=read
        String policyUsecase = "read";
        if (request.getParameter(PARAMETER_USECASE) != null) {
            policyUsecase = request.getParameter(PARAMETER_USECASE);
        }
        
        String backToRealm = org.wyona.yanel.core.util.PathUtil.backToRealm(getPath());
        StringBuilder sb = new StringBuilder("");
        try {
            if (policyUsecase.equals("read")) {

                // Either order by usecases or identities
                String orderedByParam = request.getParameter("orderedBy");
                int orderedBy = 0;
                if (orderedByParam != null) orderedBy = new java.lang.Integer(orderedByParam).intValue();
                // Either show parent policies or do not show them
                boolean showParents = false;
                String showParentsParam = request.getParameter("showParents");
                if (showParentsParam != null) showParents = new java.lang.Boolean(showParentsParam).booleanValue();

                // Either show tabs or do not show them
                boolean showTabs = true;
                String showTabsParam = request.getParameter("showTabs");
                if (showTabsParam != null) showTabs = new java.lang.Boolean(showTabsParam).booleanValue();

                boolean showAbbreviatedLabels = false;
                if (getResourceConfigProperty("show-abbreviated-labels") != null) showAbbreviatedLabels = Boolean.valueOf(getResourceConfigProperty("show-abbreviated-labels"));
                sb.append(PolicyViewer.getXHTMLView(getRealm().getPolicyManager(), getRealm().getIdentityManager().getGroupManager(), getPath(), null, orderedBy, showParents, showTabs, showAbbreviatedLabels));
	    } else if (policyUsecase.equals("update")) {
                String getXML = request.getParameter("get");
                String postXML = request.getParameter("post");
                if (getXML != null && getXML.equals("identities")) {
                    //response.setContentType("application/xml; charset=" + DEFAULT_ENCODING);
                    sb.append(getIdentitiesAndRightsAsXML(getRealm().getIdentityManager(), getRealm().getPolicyManager(), getRequestedLanguage()));
                } else if (getXML != null && getXML.equals("policy")) {
                    //response.setContentType("application/xml; charset=" + DEFAULT_ENCODING);
                    sb.append(getPolicyAsXML(getRealm().getPolicyManager(), getPath()));
                } else if (postXML != null && postXML.equals("policy")) {
                    //response.setContentType("application/xml; charset=" + DEFAULT_ENCODING);
                    try {
                        writePolicy(getEnvironment().getRequest().getInputStream(), getRealm().getPolicyManager(), getPath());
                        sb.append("<?xml version=\"1.0\"?><saved/>");
                    } catch(Exception e) {
                        log.error(e,e);
                        //response.setStatus(response.SC_NOT_IMPLEMENTED);
                        log.warn("TODO: Fix HTTP status code: " + HttpServletResponse.SC_NOT_IMPLEMENTED);
                        sb.append("<?xml version=\"1.0\"?><not-saved>" + e.getMessage() + "</not-saved>");
                    }
                } else {
                    //response.setContentType("text/html; charset=" + DEFAULT_ENCODING);
                    String identitiesURL = backToRealm + getPath().substring(1) + "?yanel.policy=update&amp;get=identities";
                    String policyURL = backToRealm + getPath().substring(1) + "?yanel.policy=update&amp;get=policy";
                    String saveURL = backToRealm + getPath().substring(1) + "?yanel.policy=update&amp;post=policy"; // This doesn't seem to work with all browsers!
                    String cancelURL = backToRealm + getPath().substring(1);

                    sb.append("<?xml version=\"1.0\"?>");
                    sb.append("<html xmlns=\"http://www.w3.org/1999/xhtml\">");
                    sb.append("<head>");
                    sb.append("<title>Update Access Policy</title>");
		    sb.append("<meta name=\"generator\" content=\"" + this.getClass().getName() + "\"/>");

	            sb.append("<link rel=\"stylesheet\" href=\"" + PathUtil.getResourcesHtdocsPath(this) + "js/accesspolicyeditor/style.css\" type=\"text/css\"/>");

                    sb.append("<script language=\"javascript\">var getURLs = {\"identities-url\": \"" + identitiesURL + "\", \"policy-url\": \"" + policyURL + "\", \"cancel-url\": \"" + cancelURL + "\", \"save-url\": \"" + saveURL + "\"};</script><script language=\"javascript\" src=\"" +  PathUtil.getResourcesHtdocsPath(this) + "js/accesspolicyeditor/org.wyona.security.gwt.accesspolicyeditor.AccessPolicyEditor.nocache.js\"></script>");

                    sb.append("</head>");
                    sb.append("<body><h1>Update Access Policy</h1><p><div id=\"access-policy-editor-hook\"></div></p></body></html>");
                }
            } else {
                //response.setContentType("text/html; charset=" + DEFAULT_ENCODING);
                //response.setStatus(response.SC_NOT_IMPLEMENTED);
                sb.append("<html><body>Policy usecase not implemented yet: " + policyUsecase + "</body></html>");
                log.error("Policy usecase not implemented yet: " + policyUsecase);
            }
        } catch(Exception e) {
            log.error(e, e);
            throw new Exception(e.getMessage());
        }
        return new ByteArrayInputStream(sb.toString().getBytes("utf-8"));
    }
    
    /**
     *
     */
    private String getIdentitiesAndRightsAsXML(IdentityManager im, PolicyManager pm, String language) {
        org.wyona.security.core.api.UserManager um = im.getUserManager();
        org.wyona.security.core.api.GroupManager gm = im.getGroupManager();

        StringBuffer sb = new StringBuffer("<?xml version=\"1.0\"?>");
        sb.append("<access-control xmlns=\"http://www.wyona.org/security/1.0\">");

        try {
            User[] users = um.getUsers();
            Arrays.sort(users, new ItemIDComparator());
            sb.append("<users>");
            for (int i = 0; i < users.length; i++) {
                sb.append("<user id=\"" + users[i].getID() + "\">" + users[i].getName() + "</user>");
            }
            sb.append("</users>");

            org.wyona.security.core.api.Group[] groups = gm.getGroups();
            Arrays.sort(groups, new ItemIDComparator());
            sb.append("<groups>");
            for (int i = 0; i < groups.length; i++) {
                sb.append("<group id=\"" + groups[i].getID() + "\">" + groups[i].getName() + "</group>");
            }
            sb.append("</groups>");

            sb.append("<rights>");
            String[] rights = pm.getUsecases();
            if (rights != null) {
                for (int i = 0; i < rights.length; i++) {
                    sb.append("<right id=\"" + rights[i] + "\">" + rights[i] + " (" + pm.getUsecaseLabel(rights[i], language) + ")</right>");
                }
            }
            sb.append("</rights>");
        } catch (Exception e) {
            log.error(e, e);
            sb.append("<exception>" + e.getMessage() + "</exception>");
        }
        sb.append("</access-control>");
        return sb.toString();
    }
    
    public class ItemIDComparator implements Comparator {
        public int compare(Object o1, Object o2) {
            try {
                String id1 = ((Item)o1).getID();
                String id2 = ((Item)o2).getID();
                return id1.compareToIgnoreCase(id2);
            } catch (AccessManagementException e) {
                throw new RuntimeException(e.getMessage(), e);
            }
        }
    }

    /**
     *
     */
    private String getPolicyAsXML(PolicyManager pm, String path) {

        StringBuffer sb = new StringBuffer("<?xml version=\"1.0\"?>");

        try {
            Policy policy = pm.getPolicy(path, false);
            if (policy == null) {
                sb.append("<policy xmlns=\"http://www.wyona.org/security/1.0\" use-inherited-policies=\"false\">");
                log.warn("No policy yet for path: " + path + " (Return empty policy)");
            } else {
                sb.append("<policy xmlns=\"http://www.wyona.org/security/1.0\" use-inherited-policies=\"" + policy.useInheritedPolicies() + "\">");
                sb.append(getPolicyIdentities(policy));
                sb.append(getPolicyGroups(policy));
            }
        } catch(Exception e) {
            log.error(e, e);
            sb.append("<policy xmlns=\"http://www.wyona.org/security/1.0\">");
            sb.append("<exception>" + e.getMessage() + "</exception>");
        }

        sb.append("</policy>");
        return sb.toString();
    }

    /**
     * Get users (TODO: Move this code into the security package)
     */
    static public StringBuffer getPolicyIdentities(Policy p) {
        Vector world = new Vector();
        java.util.HashMap users = new java.util.HashMap();
        org.wyona.security.core.UsecasePolicy[] up = p.getUsecasePolicies();
        if (up != null && up.length > 0) {
            for (int i = 0; i < up.length; i++) {
                org.wyona.security.core.IdentityPolicy[] idps = up[i].getIdentityPolicies();
                for (int j = 0; j < idps.length; j++) {
                    //log.debug("Usecase Identity Policy: " + up[i].getName() + ", " + idps[j].getIdentity().getUsername() + ", " + idps[j].getPermission());

                    if (idps[j].getIdentity().isWorld()) {
                        world.add(up[i].getName());
                    } else {
                        Vector userRights;
                        if ((userRights = (Vector) users.get(idps[j].getIdentity().getUsername())) != null) {
                            log.debug("User has already been added: " + idps[j].getIdentity().getUsername());
                        } else {
                            userRights = new Vector();
                            users.put(idps[j].getIdentity().getUsername(), userRights);
                        }
                        if (idps[j].getPermission()) {
                            userRights.add(up[i].getName());
                        }
                    }
                }
            }
        } else {
            log.warn("No policy usecases!");
        }

        StringBuffer sb = new StringBuffer();
        //sb.append("<li>WORLD (" + getCommaSeparatedList(world) + ")</li>");

        java.util.Iterator userIterator = users.keySet().iterator();
        while (userIterator.hasNext()) {
            String userName = (String) userIterator.next();
            sb.append("<user id=\""+userName+"\">");
            Vector rights = (Vector) users.get(userName);
            for (int k = 0; k < rights.size(); k++) {
                // TODO: Do not hardcode permission
                sb.append("<right id=\"" + (String) rights.elementAt(k) + "\" permission=\"true\"/>");
            }
            sb.append("</user>");
        }
        return sb;
    }

    /**
     * Get groups (TODO: Move this code into the security package)
     */
    static public StringBuffer getPolicyGroups(Policy p) {
        java.util.HashMap groups = new java.util.HashMap();
        org.wyona.security.core.UsecasePolicy[] up = p.getUsecasePolicies();
        if (up != null && up.length > 0) {
            for (int i = 0; i < up.length; i++) {
                org.wyona.security.core.GroupPolicy[] ids = up[i].getGroupPolicies();
                for (int j = 0; j < ids.length; j++) {
                    Vector groupRights;
                    if ((groupRights = (Vector) groups.get(ids[j].getId())) != null) {
                        log.debug("Group has already been added: " + ids[j].getId());
                    } else {
                        groupRights = new Vector();
                        groups.put(ids[j].getId(), groupRights);
                    }
                    if (ids[j].getPermission()) {
                        groupRights.add(up[i].getName());
                    }
                }
            }
        } else {
            log.warn("No policy usecases!");
        }

        StringBuffer sb = new StringBuffer();

        java.util.Iterator userIterator = groups.keySet().iterator();
        while (userIterator.hasNext()) {
            String userName = (String) userIterator.next();
            sb.append("<group id=\""+userName+"\">");
            Vector rights = (Vector) groups.get(userName);
            for (int k = 0; k < rights.size(); k++) {
                //TODO: Do not hardcode permission!
                sb.append("<right id=\"" + (String) rights.elementAt(k) + "\" permission=\"true\"/>");
            }
            sb.append("</group>");
        }
        return sb;
    }

    /**
     * Write/Save policy
     */
    private void writePolicy(InputStream policyAsInputStream, PolicyManager pm, String path) throws Exception {
        Policy policy = new org.wyona.security.util.PolicyParser().parseXML(policyAsInputStream);
        pm.setPolicy(path, policy);
    }
}
