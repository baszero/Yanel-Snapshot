/*
 * Copyright 2009 Wyona
 */

package org.wyona.yanel.impl.resources.search;

import org.wyona.yanel.impl.resources.BasicXMLResource;

import java.io.ByteArrayInputStream;
import java.io.InputStream;

import org.apache.log4j.Logger;

/**
 * Search resource
 */
public class SearchResource extends BasicXMLResource {
    
    private static Logger log = Logger.getLogger(SearchResource.class);
    
    /*
     * @see org.wyona.yanel.impl.resources.BasicXMLResource#getContentXML(String)
     */
    protected InputStream getContentXML(String viewId) throws Exception {
        if (log.isDebugEnabled()) {
            log.debug("requested viewId: " + viewId);
        }
        StringBuilder sb = new StringBuilder("<?xml version=\"1.0\"?>");
        sb.append("<y:search xmlns:y=\"http://www.wyona.org/yanel/search/1.0\">");

        String query = getRequest().getParameter("q");
        String provider = getRequest().getParameter("provider");
        if (query != null) {
            sb.append("<y:query>" + query + "</y:query>");
            try {
                Result[] results;
                if (provider != null) {
                    if (provider.equals("yanel")) {
                        results = getLocalResults(query);
                    } else if (provider.equals("google")) {
                        log.warn("Provider '" + provider + "' not implemented yet!");
                        results = new Result[0];
                        log.warn("Provider '" + provider + "' not implemented yet!");
                    } else if (provider.equals("bing")) {
                        results = new Result[0];
                        log.warn("Provider '" + provider + "' not implemented yet!");
                    } else {
                        results = getLocalResults(query);
                        log.warn("No such provider: " + provider);
                    }
                } else {
                    results = getLocalResults(query);
                    provider = "yanel";
                    log.warn("No search provider specified!");
                }

                sb.append("<y:provider>" + provider + "</y:provider>");

                if (results != null && results.length > 0) {
                    sb.append("<y:results>");
                    for (int i = 0; i < results.length; i++) {
                        sb.append("<y:result url=\"" + results[i].getURL() + "\">");
                        if (results[i].getTitle() != null) {
                            sb.append("  <y:title>" + results[i].getTitle() + "</y:title>");
                        } else {
                            sb.append("  <y:no-title/>");
                        }
                        sb.append("</y:result>");
                    }
                    sb.append("</y:results>");
                }
            } catch(org.wyona.yarep.core.search.SearchException e) {
                log.error(e, e);
                sb.append("<y:exception>" + e.getMessage() + "</y:exception>");
            }
        }
        sb.append("</y:search>");
        return new ByteArrayInputStream(sb.toString().getBytes());
    }

    /**
     *
     */
    private Result[] getLocalResults(String query) throws Exception {
        org.wyona.yarep.core.Node[] nodes = getRealm().getRepository().getSearcher().search(query);
        if (nodes != null && nodes.length > 0) {
            Result[] results = new Result[nodes.length];
            for (int i = 0; i < nodes.length; i++) {
                results[i] = new Result(nodes[i].getPath(), null, null, nodes[i].getMimeType());
            }
            return results;
        } else {
            return new Result[0];
        }
    }

    /**
     * @see ViewableV2#exists()
     */
    public boolean exists() {
        return true;
    }
}
