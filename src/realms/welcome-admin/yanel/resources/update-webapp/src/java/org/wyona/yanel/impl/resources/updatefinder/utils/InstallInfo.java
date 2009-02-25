/*
 * Copyright 2007-2009 Wyona
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

package org.wyona.yanel.impl.resources.updatefinder.utils;

import org.apache.log4j.Logger;

import java.io.File;
import java.io.InputStream;
import java.io.FileInputStream;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import com.hp.hpl.jena.rdf.model.*;
import com.hp.hpl.jena.rdf.model.impl.PropertyImpl;

/**
 * 
 */
public class InstallInfo {
    
    private static Logger log = Logger.getLogger(InstallInfo.class);
    private String id;
    private String version;
    private String revision;
    private String installtype;
    private String contextPrefix;
    private String webappName;
    private String updateURL;
    private String osName; //platform
    private String javaVersion;
    private String targetApplicationId;
    private String targetApplicationVersion;
    private List<String> protectedFiles = new ArrayList<String>();
    
    private String updateManagerNS = "http://www.wyona.org/update-manager/1.0#"; 

    private File installRdfFile;
    
    /**
     *
     */
    public InstallInfo(HttpServletRequest request)  throws java.io.FileNotFoundException{
        String WEBINFPath = request.getSession().getServletContext().getRealPath("WEB-INF");
        webappName = new File(request.getSession().getServletContext().getRealPath(".")).getParentFile().getName();
        contextPrefix = request.getSession().getServletContext().getServletContextName();
        if (contextPrefix.equalsIgnoreCase("ROOT")) {
            contextPrefix = "ROOT";
        } else {
            contextPrefix = contextPrefix.toLowerCase();
        }
        installRdfFile = new File(WEBINFPath + File.separator + "classes" + File.separator + "install.rdf");
        InputStream installRdfIn = new FileInputStream(installRdfFile);
        Model model = ModelFactory.createDefaultModel();
        //read the RDF/XML file
        model.read(installRdfIn, "");
        parseModel(model);
        
        setServerInfoDetail(request);
        
        osName = System.getProperty("os.name");
        javaVersion = System.getProperty("java.version");
    }

    public InstallInfo(HttpServletRequest request, String webapp)  throws java.io.FileNotFoundException, Exception{
        String webappsDirectoryPath = request.getSession().getServletContext().getRealPath(".") + File.separator + ".." + File.separator;
        TomcatContextHandler tomcatContextHandler = new TomcatContextHandler(request);
        webappName = webapp;
        contextPrefix = tomcatContextHandler.getContextsOfWebapp(webapp).get(0);
        
        if (contextPrefix.equalsIgnoreCase("ROOT")) {
            contextPrefix = "ROOT";
        } else {
            contextPrefix = contextPrefix.toLowerCase();
        }
        installRdfFile = new File(webappsDirectoryPath + webapp + File.separator + "WEB-INF" + File.separator + "classes" + File.separator + "install.rdf");
        InputStream installRdfIn = new FileInputStream(installRdfFile);
        Model model = ModelFactory.createDefaultModel();
        //read the RDF/XML file
        model.read(installRdfIn, "");
        parseModel(model);
        
        setServerInfoDetail(request);
        
        osName = System.getProperty("os.name");
        javaVersion = System.getProperty("java.version");
    }

    private void parseModel(Model model) {
        Resource install = model.getResource("urn:wyona:application:install");
        
        Property idProperty = new PropertyImpl(updateManagerNS, "id");
        id = install.getRequiredProperty(idProperty).getString();
        Property versionProperty = new PropertyImpl(updateManagerNS, "version");
        version = install.getRequiredProperty(versionProperty).getString();
        Property revisionProperty = new PropertyImpl(updateManagerNS, "revision");
        revision = install.getRequiredProperty(revisionProperty).getString();
        Property installtypeProperty = new PropertyImpl(updateManagerNS, "installtype");
        installtype = install.getRequiredProperty(installtypeProperty).getString();
        //Property contextPrefixProperty = new PropertyImpl(updateManagerNS, "contextprefix");
        //contextPrefix = install.getRequiredProperty(contextPrefixProperty).getString();

        Property updateURLProperty = new PropertyImpl(updateManagerNS, "updateURL");
        updateURL = install.getRequiredProperty(updateURLProperty).getString();

        Property protectedFilesProperty = new PropertyImpl(updateManagerNS, "protectedFiles");
        Seq protectedFilesSeq = install.getRequiredProperty(protectedFilesProperty).getSeq();
        
        NodeIterator protectedFilesIter = protectedFilesSeq.iterator();
        while (protectedFilesIter.hasNext()) {
            protectedFiles.add(protectedFilesIter.next().toString());
        }
        
        /*Property targetApplicationProperty = new PropertyImpl(updateManagerNS, "targetApplication");
        Resource targetApplication = install.getProperty(targetApplicationProperty).getResource();
        
        Property targetApplicationIdProperty = new PropertyImpl(updateManagerNS, "id");
        targetApplicationId = targetApplication.getRequiredProperty(targetApplicationIdProperty).getString();
        Property targetApplicationVersionProperty = new PropertyImpl(updateManagerNS, "version");
        targetApplicationVersion = targetApplication.getRequiredProperty(targetApplicationVersionProperty).getString();*/
        
    }

    private void setServerInfoDetail(HttpServletRequest request) {
        //this needs to be implemented for each servlet container since it doesn't seem the string of getServerInfo() is standardized
        String serverInfo = request.getSession().getServletContext().getServerInfo();
        
        if (serverInfo.startsWith("Apache Tomcat")) {
            targetApplicationId  = serverInfo.split("/")[0];
            targetApplicationVersion  = serverInfo.split("/")[1];
        } else {
            targetApplicationId  = serverInfo.split("/")[0];
            targetApplicationVersion  = serverInfo.split("/")[1];
            log.info("the dedection of the servlet container name and version is just a guess. if there is something wrong please implement your servlets getServerInfo() string. thanks :)");
        }
        
    }
    

    public String getId() {
        return id;
    }

    public String getInstalltype() {
        return installtype;
    }
    
    public String getContextPrefix() {
        return contextPrefix;
    }
    
    public String getWebaName() {
        return webappName;
    }

    public String getUpdateURL() {
        return updateURL;
    }

    public String getVersion() {
        return version;
    }

    public String getRevision() {
        return revision;
    }

    public String getJavaVersion() {
        return javaVersion;
    }

    public String getOsName() {
        return osName;
    }

    public String getTargetApplicationId() {
        return targetApplicationId;
    }

    public String getTargetApplicationVersion() {
        return targetApplicationVersion;
    }

    public List<String> getProtectedFiles() {
        return protectedFiles;
    }

    /**
     * Get filename of install RDF
     */
    public String getInstallRdfFilename() {
        return installRdfFile.getAbsolutePath();
    }
}
