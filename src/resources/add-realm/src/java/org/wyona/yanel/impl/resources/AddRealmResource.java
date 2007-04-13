/*
 * Copyright 2006 Wyona
 */

package org.wyona.yanel.impl.resources;

import org.wyona.yanel.core.Path;
import org.wyona.yanel.core.Resource;
import org.wyona.yanel.core.ResourceConfiguration;
import org.wyona.yanel.core.api.attributes.ViewableV2;
import org.wyona.yanel.core.attributes.viewable.View;
import org.wyona.yanel.core.attributes.viewable.ViewDescriptor;
import org.wyona.yanel.core.map.Realm;
import org.wyona.yanel.core.transformation.I18nTransformer;
import org.wyona.yanel.core.util.HttpServletRequestHelper;
import org.wyona.yarep.core.Node;
import org.wyona.yarep.core.NodeType;
import org.wyona.yarep.core.Repository;
import org.wyona.yarep.core.RepositoryException;
import org.wyona.yanel.core.util.PathUtil;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;
import org.apache.lenya.search.crawler.DumpingCrawler;
import websphinx.DownloadParameters;
import org.apache.log4j.Category;

import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.net.URL;
import java.util.HashMap;
import java.util.Enumeration;
import java.util.Iterator;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.SAXParser;
import javax.xml.parsers.SAXParserFactory;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerConfigurationException;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.TransformerFactoryConfigurationError;
import javax.xml.transform.stream.StreamResult;
import javax.xml.transform.stream.StreamSource;

import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;
import org.w3c.dom.NamedNodeMap;

/**
 *
 */
public class AddRealmResource extends Resource implements ViewableV2 {

    private static Category log = Category.getInstance(AddRealmResource.class);
    private final static String SESSION_ATTR_EVENT_LOG = "org.wyona.yanel.addrealm.eventlog";
    private final static String SESSION_ATTR_CRAWLER = "org.wyona.yanel.addrealm.crawler";
    private final static String SESSION_ATTR_REALM_ID = "org.wyona.yanel.addrealm.realm.id";
    private final static String SESSION_ATTR_REALM_NAME = "org.wyona.yanel.addrealm.realm.name";
    
    private String parameterName = null;
    private String parameter = null;
    private String parameterErrorName = null;
    private String parameterError = null;

    private HashMap parameters = new HashMap();
    
    /**
     *
     */
    public AddRealmResource() {  
    }

    /**
     *
     */
    public ViewDescriptor[] getViewDescriptors() {
        return null;
    }

    /**
     * Generate view
     */
    public View getView(String viewId) throws Exception {
        String path = getPath();
        HttpServletRequest request = getRequest();
        String language = getLanguage();

        Transformer transformer = null;
        I18nTransformer i18nTransformer = new I18nTransformer("add-realm", language, getRealm().getDefaultLanguage());
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        View defaultView = new View();

        try {
            
             // Check if data was sumbitted (realm ID, realm Name, URL to be dumped, depth of crawling, max number of pages)
            boolean submit = false;
            boolean stop = false;
            Enumeration enumeration = request.getParameterNames();
            while(enumeration.hasMoreElements()){
                String param = enumeration.nextElement().toString(); 
                if (param.equals("submit")) submit = true;
                if (param.equals("stop")) stop = true;
            }
            
            File XSLTFile = org.wyona.commons.io.FileUtil.file(getRTD().getConfigFile().getParentFile().getAbsolutePath(), "xslt" + File.separator + "add-realm.xsl");
            transformer = TransformerFactory.newInstance().newTransformer(new StreamSource(XSLTFile));
            
            HttpSession session = getRequest().getSession(true); 
            
            if(submit) {
                
                Enumeration enumeration2 = request.getParameterNames();
                while(enumeration2.hasMoreElements()){
                    parameterName = enumeration2.nextElement().toString();
                    parameter = HttpServletRequestHelper.getParameter(request, parameterName);
                    if (parameterName.equals("fslocation") || parameterName.equals("scope")) {
                        parameters.put(parameterName, parameter);
                        transformer.setParameter(parameterName, parameters.get(parameterName).toString());
                    } else if (parameter == null || ("").equals(parameter)) {
                        parameterErrorName = "error-" + parameterName;
                        parameterError = "Please enter correct value for '" + parameterName + "'";
                        transformer.setParameter(parameterName, "ERROR:" + parameterError);
                    } else {
                        parameters.put(parameterName, parameter);
                        transformer.setParameter(parameterName, parameters.get(parameterName).toString());
                    }
                }
                
                if (parameterError == null || ("").equals(parameterError)) {
                    // Explicitly check whether fslocation is null and set to null (rather than the empty string).
                    // File() (and copyRealm()) needs null to be passed.
                    File fslocationValue = null;
                    if (parameters.get("fslocation") == null || ("").equals(parameters.get("fslocation").toString())) {
                        fslocationValue = null;
                    } else {
                        fslocationValue = new File(parameters.get("fslocation").toString());
                    }
                    getYanel().getRealmConfiguration().copyRealm("from-scratch-realm-template", 
                            parameters.get("realmid").toString(), 
                            parameters.get("realmname").toString(),
                            "/" + parameters.get("realmid").toString() + "/", 
                            fslocationValue);
                    transformer.setParameter("submitted", "true");
                    transformer.setParameter("yanel.back2context", PathUtil.backToContext(realm, getPath()));
                    
                    String crawlStartURL = (String)parameters.get("url"); 
                    if (crawlStartURL != null && crawlStartURL.length() > 0) {

                        int maxPages = 0;
/*
                        if (parameters.get("crawlmaxpages") != null) {
                            maxPages = Integer.parseInt((String)parameters.get("crawlmaxpages"));
                        } else if () {
                            maxPages = Integer.parseInt((String)parameters.get("crawlmaxpages"));
                        } else {
                            log.error("Max number of pages has not been set!");
                        }
*/

                        int maxDepth = Integer.parseInt((String)parameters.get("crawldepth"));
                        int maxFileSize = 0;
                        String tmpMaxFileSize = (String)parameters.get("crawlmaxfilesize");
                        if (tmpMaxFileSize != null || !("").equals(tmpMaxFileSize)) {
                        	maxFileSize = Integer.parseInt(tmpMaxFileSize);
                        } else {
                        	maxFileSize = -1;
                        }
                        String crawlScopeURL = (String)parameters.get("scope");
                        String realmID = parameters.get("realmid").toString();
                        
                        importSite(crawlStartURL, crawlScopeURL, maxPages, maxDepth, maxFileSize, realmID);
                        
                        EventLog eventLog = (EventLog)session.getAttribute(SESSION_ATTR_EVENT_LOG);
                        if (eventLog != null) {
                            transformer.setParameter("downloadevents", eventLog.getDownloadEvents());
                            transformer.setParameter("errorevents", eventLog.getErrorEvents());
                            transformer.setParameter("nofdownloads", String.valueOf(eventLog.getNofDownloads()));
                            transformer.setParameter("isdone", String.valueOf(eventLog.isDone()));
                        }

                    }
                }
                
                Document document = getInputDocument();
                
                transformer.transform(new javax.xml.transform.dom.DOMSource(document), new StreamResult(byteArrayOutputStream));
            
            } else if (session.getAttribute(SESSION_ATTR_EVENT_LOG) != null) {
                
                // the crawler is running
                if (stop) {
                    DumpingCrawler crawler = (DumpingCrawler)session.getAttribute(SESSION_ATTR_CRAWLER);
                    if (crawler != null) {
                        crawler.stop();
                    }
                }

                // show progress
                EventLog eventLog = (EventLog)session.getAttribute(SESSION_ATTR_EVENT_LOG);
                if (eventLog != null) {
                    transformer.setParameter("downloadevents", eventLog.getDownloadEvents());
                    transformer.setParameter("errorevents", eventLog.getErrorEvents());
                    transformer.setParameter("nofdownloads", String.valueOf(eventLog.getNofDownloads()));
                    transformer.setParameter("submitted", "true");
                    transformer.setParameter("isdone", String.valueOf(eventLog.isDone()));
                    
                    transformer.setParameter("yanel.back2context", PathUtil.backToContext(realm, getPath()));
                    transformer.setParameter("realmid", session.getAttribute(SESSION_ATTR_REALM_ID));
                    transformer.setParameter("realmname", session.getAttribute(SESSION_ATTR_REALM_NAME));
                    
                    if (eventLog.isDone()) {
                        session.removeAttribute(SESSION_ATTR_EVENT_LOG);
                        session.removeAttribute(SESSION_ATTR_CRAWLER);
                        session.removeAttribute(SESSION_ATTR_REALM_ID);
                        session.removeAttribute(SESSION_ATTR_REALM_NAME);
                    }
                }
                Document document = getInputDocument();
                
                transformer.transform(new javax.xml.transform.dom.DOMSource(document), new StreamResult(byteArrayOutputStream));
                
            } else {

                Document document = getInputDocument();
                
                transformer.transform(new javax.xml.transform.dom.DOMSource(document), new StreamResult(byteArrayOutputStream));
                
            }
            
            SAXParser saxParser = SAXParserFactory.newInstance().newSAXParser();
            saxParser.parse(new ByteArrayInputStream(byteArrayOutputStream.toByteArray()), i18nTransformer);
            
        } catch (Exception e) {
            log.error(e.getMessage(), e);
            throw e;
        }
        
        defaultView.setMimeType(getMimeType(viewId));
        defaultView.setInputStream(i18nTransformer.getInputStream());
        return defaultView;
    }
    
    /**
     * Crawls and external site and imports it into a realm.
     * @param crawlStartURL
     * @param crawlScopeURL comma-separated list of scope urls
     * @param maxPages
     * @param maxDepth
     * @param realmID
     * @throws Exception
     */
    protected void importSite(String crawlStartURL, String crawlScopeURL, int maxPages, int maxDepth, int maxPageSize, String realmID) throws Exception {
        String[] crawlScopeURLs = null;
        if (crawlScopeURL == null || crawlScopeURL.length() == 0) {
            String path = new URL(crawlStartURL).getPath();
            crawlScopeURLs = new String[1];
            if (path.length() != 0 && !path.endsWith("/") && path.indexOf("/") > -1) {
                crawlScopeURLs[0] = crawlStartURL.substring(0, crawlStartURL.lastIndexOf("/"));
            } else {
                crawlScopeURLs[0] = crawlStartURL;
            }
        } else {
            crawlScopeURLs = crawlScopeURL.split(",");
        }
        
        String dumpDir = System.getProperty("java.io.tmpdir") + File.separator + "import_" + System.currentTimeMillis();
        DumpingCrawler crawler = new DumpingCrawler(crawlStartURL, crawlScopeURLs, dumpDir);
        crawler.setMaxPages(maxPages);
        crawler.setMaxDepth(maxDepth);
        
        DownloadParameters downloadParams = new DownloadParameters();
        downloadParams = downloadParams.changeMaxPageSize(maxPageSize);
        crawler.setDownloadParameters(downloadParams);
        
        
        EventLog eventLog = new EventLog();
        crawler.addLinkListener(eventLog);
        crawler.addCrawlListener(eventLog);
        
        Realm realm = getYanel().getRealmConfiguration().getRealm(realmID);
       
        HttpSession session = getRequest().getSession(true); 
        session.setAttribute(SESSION_ATTR_EVENT_LOG, eventLog);
        session.setAttribute(SESSION_ATTR_CRAWLER, crawler);
        session.setAttribute(SESSION_ATTR_REALM_ID, realm.getID());
        session.setAttribute(SESSION_ATTR_REALM_NAME, realm.getName());
        
        // start crawler in new thread to be able to show progress:
        ImportSiteThread thread = new ImportSiteThread(crawler, realm, dumpDir, crawlStartURL, 
                crawlScopeURLs, eventLog);
        thread.start();
    }
    
   
    /**
     * 
     */
    public boolean exists() throws Exception {
       log.warn("Not implemented yet!");
       return true; 
    }

    /**
     * 
     */
    public long getSize() throws Exception {
        return getRealm().getRepository().getSize(new Path(getPath()));
    }

    /**
     *
     */
    public String getMimeType(String viewId) {
        return "application/xhtml+xml";
    }

    /**
     *
     */
    public Document getInputDocument() {
        DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
        dbf.setNamespaceAware(true);
        String NAMESPACE = "http://www.wyona.org/yanel/1.0";
        Document document = null;
        try {
            DocumentBuilder parser = dbf.newDocumentBuilder();
            document = parser.parse(new java.io.StringBufferInputStream("<yanel:form xmlns:yanel=\""+NAMESPACE+"\" xmlns=\""+NAMESPACE+"\"/>"));
        } catch (Exception e) {
            log.error(e.getMessage(), e);
        }
        Element rootElement = document.getDocumentElement();
        Element inputFieldsElement = (Element) rootElement.appendChild(document.createElementNS(NAMESPACE, "inputfields"));
        
        // get add-realm custom config parameters from rc file, use attributes to generate form input fields
        String[] attributesArray = { "name", "value", "samplevalue", "required", "hidden" };
        ResourceConfiguration rc = getConfiguration();
        Document customConfigDoc = rc.getCustomConfiguration();
        Element rootCustomConfigDocElement = customConfigDoc.getDocumentElement();
        NodeList nodeList = rootCustomConfigDocElement.getChildNodes();
        for (int i = 0; i < nodeList.getLength(); i++) {
            org.w3c.dom.Node node = nodeList.item(i);
            Element fieldElement = (Element) inputFieldsElement.appendChild(document.createElementNS(NAMESPACE, "input"));
            NamedNodeMap attributes = node.getAttributes();
            org.w3c.dom.Node attribute = null;
            String nameAttribute = null;
            for (int j = 0; j < attributesArray.length; j++) {
            	attribute = attributes.getNamedItem(attributesArray[j]);
            	if (attribute != null) {
            		if (("name").equals(attributesArray[j])) {
            			nameAttribute = attribute.getNodeValue();
                	}
            		fieldElement.setAttributeNS(NAMESPACE, attributesArray[j], attribute.getNodeValue());
            	}
            	attribute = null;
            }
            fieldElement.appendChild(document.createTextNode(nameAttribute));
            nameAttribute = null;
        }
        return document;
    }

    /**
     * Get language
     */
    private String getLanguage() {
        String defaultLanguage = getRealm().getDefaultLanguage();
        
        String language = null;
        try {
            language = request.getParameter("yanel.meta.language");
        } catch(Exception e) {
            log.debug("language param is not found will use default : " + language);
            language = defaultLanguage;
        }
        if(language == null || ("").equals(language)) {
            log.debug("language param is empty or null : " + language);
            language = defaultLanguage;
        }
        return language;
        }
}
