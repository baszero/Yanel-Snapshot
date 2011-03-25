/*
 * Copyright 2011 Wyona
 */

package org.wyona.yanel.impl.resources.boost;

import org.wyona.yanel.impl.resources.BasicXMLResource;

import org.wyona.commons.xml.XMLHelper;

import java.io.ByteArrayInputStream;
import java.io.InputStream;

import org.apache.log4j.Logger;

/**
 * Generate personalized content based on user's interests
 */
public class PersonalizedContentResource extends BasicXMLResource {
    
    private static Logger log = Logger.getLogger(PersonalizedContentResource.class);
    
    /**
     * @see org.wyona.yanel.impl.resources.BasicXMLResource#getContentXML(String)
     */
    protected InputStream getContentXML(String viewId) throws Exception {
        if (log.isDebugEnabled()) {
            log.debug("requested viewId: " + viewId);
        }

        final String NAMESPACE = "http://www.wyona.org/yanel/boost/1.0";
        org.w3c.dom.Document doc = XMLHelper.createDocument(NAMESPACE, "personalized-content");

        String username = getEnvironment().getIdentity().getUsername();
        if (username != null) {
            doc.getDocumentElement().setAttributeNS(NAMESPACE, "user-id", username);
        } else {
            doc.getDocumentElement().appendChild(doc.createElementNS(NAMESPACE, "no-username-yet"));
        }

        javax.servlet.http.Cookie cookie = org.wyona.yanel.servlet.AccessLog.getYanelAnalyticsCookie(getEnvironment().getRequest(), getEnvironment().getResponse());
        if (cookie != null) {
            doc.getDocumentElement().setAttributeNS(NAMESPACE, "cookie-id", cookie.getValue());
            String[] userInterests = getUserInterests(cookie.getValue());
            if (userInterests != null && userInterests.length > 0) {
                for (int k = 0; k < userInterests.length; k++) {
                    org.wyona.yarep.core.Node[] nodes = getRealm().getRepository().getSearcher().search(userInterests[k]);
                    if (nodes != null && nodes.length > 0) {
                        for (int i = 0; i < nodes.length; i++) {
                            org.w3c.dom.Element result = doc.createElementNS(NAMESPACE, "result");
                            result.setAttributeNS(NAMESPACE, "node-path", nodes[i].getPath());
                            result.setAttributeNS(NAMESPACE, "interest", userInterests[k]);
                            doc.getDocumentElement().appendChild(result);
                        }
                    } else {
                        org.w3c.dom.Element noResults = doc.createElementNS(NAMESPACE, "no-results");
                        noResults.setAttributeNS(NAMESPACE, "interest", userInterests[k]);
                        doc.getDocumentElement().appendChild(noResults);
                    }
                }
            } else {
                doc.getDocumentElement().appendChild(doc.createElementNS(NAMESPACE, "no-user-interests"));
            }
        } else {
            doc.getDocumentElement().appendChild(doc.createElementNS(NAMESPACE, "no-cookie-yet"));
        }

        return XMLHelper.getInputStream(doc, false, false, null);
    }

    /**
     * Get user's interests (TODO: Use org.wyona.boost.client...)
     */
    private String[] getUserInterests(String cookieID) {
        String[] interests = new String[3];
        interests[0] = "Lucene";
        interests[1] = "OSGi";
        interests[2] = "Switzerland";
        return interests;
    }
}
