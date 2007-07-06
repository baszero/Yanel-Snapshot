/*
 * Copyright 2006 Wyona
 */

package org.wyona.yanel.impl.resources.updatefinder;

import org.apache.log4j.Category;
import org.apache.xml.resolver.tools.CatalogResolver;
import org.apache.xml.serializer.Serializer;
import org.wyona.yanel.core.Path;
import org.wyona.yanel.core.Resource;
import org.wyona.yanel.core.ResourceConfiguration;
import org.wyona.yanel.core.api.attributes.ViewableV2;
import org.wyona.yanel.core.attributes.viewable.View;
import org.wyona.yanel.core.attributes.viewable.ViewDescriptor;
import javax.servlet.http.HttpServletRequest;

import org.wyona.yanel.core.serialization.SerializerFactory;
import org.wyona.yanel.core.source.ResourceResolver;
import org.wyona.yanel.core.transformation.I18nTransformer;
import org.wyona.yanel.core.transformation.I18nTransformer2;
import org.wyona.yanel.core.transformation.XIncludeTransformer;
import org.wyona.yanel.core.util.PathUtil;
import org.wyona.yanel.impl.resources.updatefinder.utils.*;

import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerConfigurationException;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.TransformerFactoryConfigurationError;
import javax.xml.transform.dom.DOMSource;
import java.io.ByteArrayOutputStream;
import java.io.ByteArrayInputStream;
import java.io.FileInputStream;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Map;
import java.util.Iterator;
import java.util.Collections;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.SAXParser;
import javax.xml.parsers.SAXParserFactory;
import java.io.File;

import javax.xml.transform.sax.SAXResult;
import javax.xml.transform.sax.SAXTransformerFactory;
import javax.xml.transform.sax.TransformerHandler;
import javax.xml.transform.stream.StreamResult;
import javax.xml.transform.stream.StreamSource;
import java.net.URL;
import java.io.InputStream;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;
import org.w3c.dom.Node;
import org.xml.sax.InputSource;
import org.xml.sax.XMLReader;
import org.xml.sax.helpers.XMLReaderFactory;


import com.hp.hpl.jena.rdf.model.*;

/**
 * 
 */
public class UpdateFinder extends Resource implements ViewableV2 {

    private static Category log = Category.getInstance(UpdateFinder.class);
    private String defaultLanguage;
    private String language = null;
    private StringBuffer htmlHeadContent = new StringBuffer();
    private StringBuffer htmlBodyContent = new StringBuffer();

    /**
     * 
     */
    public UpdateFinder() {
    }

    /**
     * 
     */
    public boolean exists() {
        return true;
    }

    /**
     * 
     */
    public long getSize() {
        return -1;
    }

    /**
     * 
     */
    public String getMimeType(String viewId) {
        if (viewId != null && viewId.equals("source"))
            return "application/xml";
        return "application/xhtml+xml";
    }

    /**
     * 
     */
    public View getView(String viewId) {
        View view = new View();
        String mimeType = getMimeType(viewId);
        view.setMimeType(mimeType);

        try {
            org.wyona.yarep.core.Repository repo = getRealm().getRepository();

            if (viewId != null && viewId.equals("source")) {
                view.setInputStream(new java.io.StringBufferInputStream(getScreen()));
                view.setMimeType("application/xml");
                return view;
            }

            String[] xsltPath = getXSLTPath(getPath());
            if (xsltPath != null) {

                // create reader:
                XMLReader xmlReader = XMLReaderFactory.createXMLReader();
                CatalogResolver catalogResolver = new CatalogResolver();
                xmlReader.setEntityResolver(catalogResolver);

                // create xslt transformer:
                SAXTransformerFactory tf = (SAXTransformerFactory) TransformerFactory.newInstance();

                TransformerHandler[] xsltHandlers = new TransformerHandler[xsltPath.length];
                for (int i = 0; i < xsltPath.length; i++) {
                    xsltHandlers[i] = tf.newTransformerHandler(new StreamSource(repo.getNode(xsltPath[i])
                            .getInputStream()));
                    xsltHandlers[i].getTransformer().setParameter("yanel.path.name",
                            PathUtil.getName(getPath()));
                    xsltHandlers[i].getTransformer().setParameter("yanel.path", getPath());
                    xsltHandlers[i].getTransformer().setParameter("yanel.back2context",
                            PathUtil.backToContext(realm, getPath()));
                    xsltHandlers[i].getTransformer().setParameter("yarep.back2realm",
                            PathUtil.backToRealm(getPath()));

                    xsltHandlers[i].getTransformer().setParameter("language",
                            getRequestedLanguage());
                }

                // create i18n transformer:
                I18nTransformer2 i18nTransformer = new I18nTransformer2("global",
                        getRequestedLanguage(),
                        getRealm().getDefaultLanguage());
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
                for (int i = 0; i < xsltHandlers.length - 1; i++) {
                    xsltHandlers[i].setResult(new SAXResult(xsltHandlers[i + 1]));
                }
                xsltHandlers[xsltHandlers.length - 1].setResult(new SAXResult(xIncludeTransformer));
                xIncludeTransformer.setResult(new SAXResult(i18nTransformer));
                i18nTransformer.setResult(new SAXResult(serializer.asContentHandler()));
                serializer.setOutputStream(baos);

                // execute pipeline:
                xmlReader.parse(new InputSource(new java.io.StringBufferInputStream(getScreen())));

                // write result into view:
                view.setInputStream(new ByteArrayInputStream(baos.toByteArray()));
                return view;
            } else {
                log.debug("Mime-Type: " + mimeType);
                view.setInputStream(new java.io.StringBufferInputStream(getScreen()));
                return view;
            }
        } catch (Exception e) {
            log.error(e + " (" + getPath() + ", " + getRealm() + ")", e);
        }

        view.setInputStream(new java.io.StringBufferInputStream(getScreen()));
        return view;
    }

    /**
     * 
     */
    public ViewDescriptor[] getViewDescriptors() {
        ViewDescriptor[] vd = new ViewDescriptor[2];
        vd[0] = new ViewDescriptor("default");
        vd[0].setMimeType(getMimeType(null));
        vd[1] = new ViewDescriptor("source");
        vd[1].setMimeType(getMimeType("source"));
        return vd;
    }

    /**
     * 
     */
    private String getScreen() {
        Enumeration parameters = request.getParameterNames();
        if (!parameters.hasMoreElements()) {
            plainRequest();
        } else {
            if (request.getParameter("save-as") != null) {
                plainRequest();
            } else if (request.getParameter("update") != null && request.getParameter("update").equals("update")) {
                getUpdateConfirmScreen();
            } else if (request.getParameter("updateconfirmed") != null && request.getParameter("updateconfirmed").equals("updateconfirmed")) {    
                getUpdateScreen();
            } else {
                log.info("Fallback ...");
                plainRequest();
            }
        }

        StringBuffer sb = new StringBuffer("<?xml version=\"1.0\"?>");
        sb.append("<html xmlns=\"http://www.w3.org/1999/xhtml\">");
        sb.append("<head><title>Yanel Updater</title>");
        sb.append("<link rel=\"stylesheet\" type=\"text/css\" href=\""
                + PathUtil.getResourcesHtdocsPath(this) + "css/resource-creator.css\"/>");
        sb.append("<link rel=\"stylesheet\" type=\"text/css\" href=\""
                + PathUtil.getGlobalHtdocsPath(this) + "yanel-css/progressBar.css\"/>");
        sb.append("<script src=\"" + PathUtil.getGlobalHtdocsPath(this)
                + "yanel-js/prototype.js\" type=\"text/javascript\"></script>");
        sb.append("<script src=\"" + PathUtil.getGlobalHtdocsPath(this)
                + "yanel-js/progressBar.js\" type=\"text/javascript\"></script>");
        sb.append("<script src=\"" + PathUtil.getGlobalHtdocsPath(this)
                + "yanel-js/sorttable.js\" type=\"text/javascript\"></script>");
        sb.append("<script src=\"" + PathUtil.getResourcesHtdocsPath(this)
                + "js/ajaxlookup.js\" type=\"text/javascript\"></script>");
        sb.append(htmlHeadContent);
        sb.append("</head>");
        sb.append("<body>");
        sb.append(htmlBodyContent);
        sb.append("</body>");
        sb.append("</html>");
        return sb.toString();
    }

    private void plainRequest() {
        UpdateInfo updateInfo = null;
        InstallInfo installInfo = null;
        try {
            installInfo = getInstallInfo();
        } catch (Exception e) {
            log.error(e.getMessage(), e);
            htmlBodyContent.append("<p>Failed to get install information. Exception: " + e.getMessage() + "</p>");
        }
        
        if (!installInfo.getInstalltype().equals("bin-snapshot")) {

            htmlBodyContent.append("<p>");
            htmlBodyContent.append("This Yanel was not installed from binary. You can only use the updater if you installed yanel from binary. Please use svn up, build.sh");
            htmlBodyContent.append("</p>");
        } else {
            try {
                updateInfo = getUpdateInfo();
            } catch (Exception e) {
                log.error(e.getMessage(), e);
                htmlBodyContent.append("<p>Failed to get update information. Exception: " + e.getMessage() + "</p>");                // TODO: handle exception
            }
            String idVersionRevisionCurent = installInfo.getId() + "-v-" + installInfo.getVersion() + "-r-" + installInfo.getRevision();
            
            htmlBodyContent.append("<p>");
            htmlBodyContent.append("Your installed yanel is: " + installInfo.getId() + "-v-" + installInfo.getVersion() + "-r-" + installInfo.getRevision());
            htmlBodyContent.append("</p>");
            HashMap newestYanel = updateInfo.getNewestUpdateVersionsOf("id", "wyona-yanel-webapp");
            String idVersionRevisionNewest = (String) newestYanel.get("id") + "-v-" + (String) newestYanel.get("version") + "-r-" + (String) newestYanel.get("revision");
            if (idVersionRevisionNewest.equals(idVersionRevisionCurent)) {
                htmlBodyContent.append("<p>");
                htmlBodyContent.append("Your yanel is already the newest version.");
                htmlBodyContent.append("</p>");
            }else {
                htmlBodyContent.append("<p>");
                htmlBodyContent.append("Newest yanel is: " + idVersionRevisionNewest);
                htmlBodyContent.append("<form method=\"post\"><input type=\"submit\" name=\"button\" value=\"update\"></input><input type=\"hidden\" name=\"update\" value=\"update\"></input><input type=\"hidden\" name=\"updatelink\" value=\""
                        + newestYanel.get("updateLink") + "\"/></form>");
                htmlBodyContent.append("</p>");
            }

            htmlBodyContent.append("<p>");
            htmlBodyContent.append("Other versions you can get:");
            htmlBodyContent.append("</p>");
            htmlBodyContent.append("<ul>");
            for (int i = 0; i < updateInfo.getUpdateVersions().size(); i++) {
                HashMap versionDetails = (HashMap) updateInfo.getUpdateVersionsOf("id", "wyona-yanel-webapp").get(i);
                String idVersionRevisionItem = (String) versionDetails.get("id") + "-v-" + (String) versionDetails.get("version") + "-r-" + (String) versionDetails.get("revision");
                
                if ( !idVersionRevisionItem.equals(idVersionRevisionCurent) && !idVersionRevisionItem.equals(idVersionRevisionNewest)) {
                    htmlBodyContent.append("<li>"
                            + versionDetails.get("title")
                            + "<ul>"
                            + "<li>Version: "
                            + idVersionRevisionItem
                            + "</li>"
                            + "<li>Type: "
                            + versionDetails.get("type")
                            + "</li>"
                            + "<li> ChangeLog: "
                            + versionDetails.get("changeLog")
                            + "</li>"
                            + "<li> <form method=\"post\"><input type=\"submit\" name=\"button\" value=\"update\"></input><input type=\"hidden\" name=\"update\" value=\"update\"/><input type=\"hidden\" name=\"updatelink\" value=\""
                            + versionDetails.get("updateLink") + "\"/></form></li>" + "</ul></li>");
                }
            }
            htmlBodyContent.append("</ul>");
            
            htmlBodyContent.append("<p>");
            htmlBodyContent.append("Installed versions:");
            htmlBodyContent.append("</p>");
            TomcatContextHandler tomcatContextHandler = null;
            Map contextAndWebapp = null;
            try {
                tomcatContextHandler = new TomcatContextHandler(request);
                contextAndWebapp = tomcatContextHandler.getContextAndWebapp();
            } catch (Exception e) {
                log.error(e.getMessage(), e);
                htmlBodyContent.append("<p>Lookup for context and webabs failed. Exception: " + e.getMessage() + "</p>");
            }

            htmlBodyContent.append("<table class=\"sortable\">");
            htmlBodyContent.append("<thead>");
            htmlBodyContent.append("<tr><th>Context</th><th>Webapp</th></tr>");
            htmlBodyContent.append("</thead>");
            htmlBodyContent.append("<tbody>");
            Iterator iterator = contextAndWebapp.keySet().iterator();
            
            while (iterator.hasNext()) {
                String context = (String) iterator.next();
                String webapp = (String) contextAndWebapp.get(context);
                htmlBodyContent.append("<tr><td><a href=\"" + "http://" + request.getServerName() + ":"
                    + request.getServerPort() + "/" + context.replaceAll("/", "") + "\">" + context + "</a></td><td>" + webapp + "</td></tr>");
            }
            htmlBodyContent.append("</tbody>");
            htmlBodyContent.append("</table>");
        }
    }

    private void getUpdateConfirmScreen() {
        try {
            UpdateInfo updateInfo = getUpdateInfo();
            Map bestUpdater = getBestUpdater();
            TomcatContextHandler tomcatContextHandler = new TomcatContextHandler(request);
            
            HashMap versionDetails = updateInfo.getUpdateVersionDetail("updateLink", request.getParameter("updatelink"));
            String version = (String) versionDetails.get("version");
            String revision = (String) versionDetails.get("revision");
            String id = (String) versionDetails.get("id");
            
            if (tomcatContextHandler.getWebappOfContext(bestUpdater.get("id") + "-v-" + bestUpdater.get("version") + "-r-" + bestUpdater.get("revision")) != null) {
                htmlBodyContent.append("<p>Yanel will redirect you to the update-manager which will download and install " + id + "-v-" + version + "-r-" + revision  + "</p>");
                htmlBodyContent.append("<p>Do you want to continue?</p>");
                htmlBodyContent.append("<p>");
                htmlBodyContent.append("<form method=\"post\" action=\"" + "http://" + request.getServerName() + ":" + request.getServerPort() + "/" + bestUpdater.get("id") + "-v-" + bestUpdater.get("version") + "-r-" + bestUpdater.get("revision") + "/\">");
                htmlBodyContent.append("<input type=\"submit\" name=\"button\" value=\"YES\"/>");
                htmlBodyContent.append("<input type=\"hidden\" name=\"updateconfirmed\" value=\"updateconfirmed\"/>");
                htmlBodyContent.append("<input type=\"hidden\" name=\"updatelink\" value=\"" + request.getParameter("updatelink") + "\"/>");
                htmlBodyContent.append("</form>");
                htmlBodyContent.append("<form method=\"post\">");
                htmlBodyContent.append("<input type=\"submit\" name=\"button\" value=\"Cancel\"></input>");
                htmlBodyContent.append("</form>");
                htmlBodyContent.append("</p>");
            } else {
                htmlBodyContent.append("<p>Yanel will download the update-manager (" + tomcatContextHandler.getWebappOfContext(bestUpdater.get("id") + "-v-" + bestUpdater.get("version") + "-r-" + bestUpdater.get("revision")) + ") which will download and install " + id + "-v-" + version + "-r-" + revision  + "</p>");
                htmlBodyContent.append("<p>Do you want to continue?</p>");
                htmlBodyContent.append("<p>");
                htmlBodyContent.append("<form method=\"post\">");
                htmlBodyContent.append("<input type=\"submit\" name=\"button\" value=\"YES\"/>");
                htmlBodyContent.append("<input type=\"hidden\" name=\"updateconfirmed\" value=\"updateconfirmed\"/>");
                htmlBodyContent.append("<input type=\"hidden\" name=\"updatelink\" value=\"" + request.getParameter("updatelink") + "\"/>");
                htmlBodyContent.append("</form>");
                htmlBodyContent.append("<form method=\"post\">");
                htmlBodyContent.append("<input type=\"submit\" name=\"button\" value=\"Cancel\"></input>");
                htmlBodyContent.append("</form>");
                htmlBodyContent.append("</p>");
            }
        }  catch (Exception e) {
            log.error(e.getMessage(), e);
            htmlBodyContent.append("<p>An error occoured. Exception: " + e.getMessage() + "</p>");
        }

    }
    
    private void getUpdateScreen() {
        try {
            String destDir = request.getSession().getServletContext().getRealPath(".") + File.separator + "..";
            Map bestUpdater = getBestUpdater();
            
            WarFetcher warFetcher = new WarFetcher(request, (String) bestUpdater.get("updateLink"), destDir);
            warFetcher.fetch();
            
            TomcatContextHandler tomcatContextHandler = new TomcatContextHandler(request);
            tomcatContextHandler.setContext(bestUpdater.get("id") + "-v-" + bestUpdater.get("version") + "-r-" + bestUpdater.get("revision"), bestUpdater.get("id") + "-v-" + bestUpdater.get("version") + "-r-" + bestUpdater.get("revision"));
            
            htmlBodyContent.append("<p>");
            htmlBodyContent.append("Update done.<br/>");
            htmlBodyContent.append("You will be redirected to the updater which will automaticaly download and install the requested yanel.");
            htmlBodyContent.append("</p>");
            
            htmlHeadContent.append("<meta http-equiv=\"refresh\" content=\"10; URL=" + "http://" + request.getServerName() + ":" + request.getServerPort() + "/" + bestUpdater.get("id") + "-v-" + bestUpdater.get("version") + "-r-" + bestUpdater.get("revision") + "/" + "?updatelink=" + request.getParameter("updatelink") + "\"/>");
        } catch (Exception e) {
            log.error(e.getMessage(), e);
            htmlBodyContent.append("<p>Update failed. Exception: " + e.getMessage() + "</p>");
        }
    }

    private InstallInfo getInstallInfo() throws Exception {
        InstallInfo installInfo = null;
        return installInfo = new InstallInfo(request);

    }

    private UpdateInfo getUpdateInfo() throws Exception {
        UpdateInfo updateInfo = null;
        URL UpdateRdfUrl = new URL(getInstallInfo().getUpdateURL());
        InputStream updateRdfIn = UpdateRdfUrl.openStream();
        return updateInfo = new UpdateInfo(updateRdfIn, getInstallInfo());
    }
    
    private HashMap getBestUpdater() throws Exception {
        InstallInfo installInfo = getInstallInfo();
        UpdateInfo updateInfo = getUpdateInfo();
        
        HashMap updateVersionDetails = updateInfo.getUpdateVersionDetail("updateLink",
                request.getParameter("updatelink"));
        VersionComparator versionComparator = new VersionComparator();
        String updateId = (String) updateVersionDetails.get("id");
        String updateVersion = (String) updateVersionDetails.get("version");
        String updateRevision = (String) updateVersionDetails.get("revision");
        ArrayList bestUpdater = updateInfo.getUpdateVersionsOf("type", "updater", installInfo.getRevision());
        for (int i = 0; i < bestUpdater.size(); i++) {
            HashMap versionDetail = (HashMap) bestUpdater.get(i);
            if (versionComparator.compare((String) versionDetail.get("targetApllicationMinRevision"), updateRevision) > 0 ) {
                bestUpdater.remove(i);
            }
            if (versionComparator.compare((String) versionDetail.get("targetApllicationMaxRevision"), updateRevision) < 0 ) {
                bestUpdater.remove(i);
            }
        }
        Collections.sort(bestUpdater, new UpdateInfoVersionComparator());
        if (bestUpdater.size() < 1) {
            throw new Exception("No updater found for updating your current version(" + installInfo.getId() + "-v-" + installInfo.getVersion() + "-r-" + installInfo.getRevision() + ") to your requested version (" + updateId + "-v-" + updateVersion + "-r-" + updateRevision + ")");
        }
        return (HashMap) bestUpdater.get(bestUpdater.size() - 1);
    }

    /**
     * Get XSLT path
     */
    private String[] getXSLTPath(String path) throws Exception {
        String[] xsltPath = getResourceConfigProperties("xslt");
        if (xsltPath != null)
            return xsltPath;
        log.info("No XSLT Path within: " + path);
        return null;
    }
}
