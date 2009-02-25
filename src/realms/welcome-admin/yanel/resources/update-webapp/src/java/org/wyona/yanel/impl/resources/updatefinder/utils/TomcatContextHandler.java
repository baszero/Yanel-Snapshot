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

import java.io.BufferedInputStream;
import java.io.BufferedWriter;
import java.io.DataInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.io.FileUtils;
import javax.servlet.http.HttpServletRequest;



public class TomcatContextHandler {
    private static Logger log = Logger.getLogger(TomcatContextHandler.class);
    private String webappsDirectoryPath;
    private File webappsDirectory;
    private String contextConfPath;
    private File contextConfDirectory;
    
    public TomcatContextHandler(HttpServletRequest request) throws Exception {
        this.webappsDirectoryPath = request.getSession().getServletContext().getRealPath(".") + File.separator + ".." + File.separator;
        this.webappsDirectory = new File(webappsDirectoryPath);

        // TODO: This directory should not be hardcoded here, but rather configurable somewhere!
        // resp. see
        // http://svn.apache.org/repos/asf/tomcat/trunk/java/org/apache/catalina/manager/ManagerServlet.java
        // http://svn.apache.org/repos/asf/tomcat/trunk/java/org/apache/catalina/manager/HTMLManagerServlet.java
        // which generates the context overview: http://127.0.0.1:8080/manager/html (whereas add roles manager to conf/tomcat-users.xml and restart Tomcat)
        // NOTE: this is done by classes provided by catalina.jar which means we would have to deliver this as well.
        this.contextConfPath = webappsDirectoryPath  + ".." + File.separator + "conf" + File.separator + "Catalina" + File.separator + "localhost" + File.separator;
        this.contextConfDirectory = new File(contextConfPath);
    }
    
    public String[] getWebappNames() {
        String[] webapps = new String[this.webappsDirectory.listFiles().length];
        for (int i = 0; i < this.webappsDirectory.listFiles().length; i++) {
            webapps[i] = this.webappsDirectory.listFiles()[i].getName();
        }
        return webapps;
    }
    
    public String[] getContextNames() {
        String[] contexts = new String[this.contextConfDirectory.listFiles().length];
        for (int i = 0; i < this.contextConfDirectory.listFiles().length; i++) {
            contexts[i] = this.contextConfDirectory.listFiles()[i].getName().replaceAll(".xml", "");
            if (contexts[i].equals("ROOT")) {
                contexts[i] = "/";
            }
        }
        return contexts;
    }
    
    public Map<String, String> getContextAndWebapp() throws Exception {
        Map<String, String> contextAndWebapps = new HashMap<String, String>();
        for (int i = 0; i < this.contextConfDirectory.listFiles().length; i++) {
            String context = this.contextConfDirectory.listFiles()[i].getName().replaceAll(".xml", "");;
            String webapp = getWebappOfContext(context);
            if (context.equals("ROOT")) {
                context = "/";
            }
            if (webapp != "") {
                contextAndWebapps.put(context, webapp);
            }
        }
        return contextAndWebapps;
    }
    
    /**
     * @param String context
     * @return String webapp or null if webapp not exists or null if context points to webapp which does not exist
     */
    public String getWebappOfContext (String context) throws FileNotFoundException, IOException {
        File file = new File( contextConfPath +  context + ".xml");
        if(!file.exists()) {
            return null;
        }
        String line = "";
        String webapp = "";

        FileInputStream fis = new FileInputStream(file);
        BufferedInputStream  bis = new BufferedInputStream(fis);
        DataInputStream  dis = new DataInputStream(bis);
        while (dis.available() != 0) {
          line = line + dis.readLine();
        }
        fis.close();
        bis.close();
        dis.close();
        if (line.indexOf("yanel-webapps") <= 0) {
            return "";
        }
        line = line.replaceAll("[ ]+", " ");
        line = line.replaceAll("\"/>", "");
        webapp = line.split("/")[line.split("/").length -1 ];
        
        if (!new File( webappsDirectoryPath +  webapp ).exists()) {
            return null;
        }
        return webapp;
    }

    /**
    * @param ArrayList contexts
    * @return ArrayList with all contexts which pionts to the webapp or null if webapp not exists or no conext points to this webapp (will never return ROOT as context)
    */
    public List<String> getContextsOfWebapp (String webapp) throws FileNotFoundException, IOException {
        List<String> contexts = new ArrayList<String>();
        for (int i = 0; i < this.contextConfDirectory.listFiles().length; i++) {
            String line = "";
            FileInputStream fis = new FileInputStream(contextConfDirectory.listFiles()[i]);
            BufferedInputStream  bis = new BufferedInputStream(fis);
            DataInputStream  dis = new DataInputStream(bis);
            while (dis.available() != 0) {
              line = line + dis.readLine();
            }
            fis.close();
            bis.close();
            dis.close();
            if (line.indexOf(webapp) > 0){
                contexts.add(contextConfDirectory.listFiles()[i].getName().replaceAll(".xml", ""));
            }
        }
        if (contexts.size() < 1) {
            return null;
        }
        return contexts;
    }    
    
    public void setContext (String context, String webapp) throws Exception, IOException {
        if (context.equals("/")) {
            context = "ROOT";
        }
//        if (!context.equals(webapp) && new  File(contextConfPath + context + ".xml").exists()){
//            log.debug("Its prohibited to modify a context if context name and webapp name are the same.");
//            throw new Exception("Its prohibited to modify a context if context name and webapp name are the same."); 
//        }
        String contextEntry = "<Context docBase=\"${catalina.home}/yanel-webapps/" + webapp + "\"/>";
        BufferedWriter out = new BufferedWriter(new FileWriter(contextConfPath + context + ".xml"));
        out.write(contextEntry);
        out.close();
    }

    public void setWebappAsRoot(String webapp) throws Exception {
        try {
            setContext ("ROOT", webapp);
        } catch (Exception e) {
            log.error("Setting of webapp (" +  webapp + ") as root failed.");
            throw new Exception("Setting of webapp (" +  webapp + ") as root failed.");
        }
    }
    
    public void removeWebapp (String webapp, String context) throws Exception {
        if (context.equals("/") || context.equals("ROOT")) {
            log.error("Deletion of root context prohibited");
            throw new Exception("Deletion of root context prohibited. Use setWebappAsRoot(String webapp) instead");
        }
        if (!getWebappOfContext(context).equals(webapp)) {
            log.error("This context (" + context + ") does not point to this webapp (" + webapp + ")");
            throw new Exception("This context (" + context + ") does not point to this webapp (" + webapp + ")");
        }
        boolean success = (new File(contextConfPath + context)).delete();
        if (!success) {
            log.error("Deletion of contex file not successful!");
            throw new Exception("Deletion of contex file (" + contextConfPath + context + ") not successful!");
        }
        try {
            FileUtils.deleteDirectory(new File(webappsDirectoryPath + webapp));
        } catch (Exception e) {
            log.error("Deletion of webapp not successful!");
            throw new Exception("Deletion of webapp (" + webappsDirectoryPath + webapp + ") not successful!" + e);
        }
    }
}
