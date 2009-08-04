/*
 * Copyright 2009 Wyona
 */

package org.wyona.yanel.impl.resources.search;

import org.wyona.yanel.core.attributes.viewable.View;
import org.wyona.yanel.impl.resources.BasicXMLResource;

import java.io.ByteArrayInputStream;
import java.io.InputStream;

import org.apache.log4j.Logger;

import org.wyona.meguni.parser.Parser;
import org.wyona.meguni.util.ResultSet;

import org.apache.avalon.framework.configuration.Configuration;
import org.apache.avalon.framework.configuration.ConfigurationUtil;

/**
 * Search resource
 */
public class SearchResource extends BasicXMLResource {
    
    private static Logger log = Logger.getLogger(SearchResource.class);

    /**
     * @see org.wyona.yanel.core.api.attributes.ViewableV2#getView(String)
     */
    public View getView(String viewId) throws Exception {
        String provider = getRequest().getParameter("provider");
        if (provider != null && !provider.equals("yanel")) {
            ExternalSearchProvider esp = getExternalSearchProvider(provider);
            if (esp != null) {
                View view = new View();
                view.setResponse(false); // this resource writes the response itself

                javax.servlet.http.HttpServletResponse response = getResponse();
                response.setStatus(307);
                String query = getRequest().getParameter("q");
                response.setHeader("Location", esp.getURL() + query);
                return view;
            }
        }
        return super.getView(viewId);
    }
    
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
                        results = getGoogleResults(query);
                    } else if (provider.equals("bing")) {
                        results = getMSNResults(query);
                    } else {
                        results = getLocalResults(query);
                        log.warn("No such provider: " + provider);
                    }
                } else {
                    results = getLocalResults(query);
                    provider = "yanel";
                    log.warn("No search provider specified!");
                }

                sb.append("<y:provider id=\"" + provider + "\">" + provider + "</y:provider>");

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
     *
     */
    private Result[] getGoogleResults(String query) throws Exception {
        String className = getResourceConfigProperty("parser");
        if (className == null) className = "org.wyona.meguni.parser.impl.GoogleParser";
        //if (className == null) className = "org.wyona.meguni.parser.impl.MSNParser";
        Parser parser = (Parser) Class.forName(className).newInstance();
        ResultSet rs = parser.parse(query);

        if (rs != null && rs.size() > 0) {
            Result[] results = new Result[rs.size()];
            for (int i = 0; i < rs.size(); i++) {
                results[i] = new Result(rs.get(i).url.toString(), null, null, null);
            }
            return results;
        } else {
            return new Result[0];
        }
    }

    /**
     *
     */
    private Result[] getMSNResults(String query) throws Exception {
        String className = getResourceConfigProperty("parser");
        if (className == null) className = "org.wyona.meguni.parser.impl.MSNParser";
        Parser parser = (Parser) Class.forName(className).newInstance();
        ResultSet rs = parser.parse(query);

        if (rs != null && rs.size() > 0) {
            Result[] results = new Result[rs.size()];
            for (int i = 0; i < rs.size(); i++) {
                results[i] = new Result(rs.get(i).url.toString(), null, null, null);
            }
            return results;
        } else {
            return new Result[0];
        }
    }

    /**
     * @see org.wyona.yanel.core.api.attributes.ViewableV2#exists()
     */
    public boolean exists() throws Exception {
        return true;
    }

    /**
     *
     */
    private ExternalSearchProvider getExternalSearchProvider(String providerId) throws Exception {
        org.w3c.dom.Document customConfigDoc = getConfiguration().getCustomConfiguration();
        if (customConfigDoc != null) {
            Configuration config = ConfigurationUtil.toConfiguration(customConfigDoc.getDocumentElement());
            Configuration externalSearchProvidersConfig = config.getChild("external-search-providers");
            Configuration[] searchProviders = externalSearchProvidersConfig.getChildren("provider");
            for (int i = 0; i < searchProviders.length; i++) {
                if (searchProviders[i].getAttribute("id").equals(providerId)) {
                    return new ExternalSearchProvider(providerId, searchProviders[i].getAttribute("url"), null);
                }
            }
        }
        return null;
    }
}

/**
 *
 */
class ExternalSearchProvider {

    private String url;
    
    /**
     *
     */
    public ExternalSearchProvider(String id, String url, String label) {
        this.url = url;
    }

    /**
     *
     */
    public String getURL() {
        return url;
    }
}
