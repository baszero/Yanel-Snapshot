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

import java.io.BufferedReader;
import java.io.File;
import java.io.StringReader;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Map;
import java.util.regex.Pattern;
import java.util.regex.Matcher;
import javax.mail.MessagingException;
import javax.mail.internet.AddressException;
import javax.servlet.http.HttpServletRequest;
import javax.xml.parsers.SAXParser;
import javax.xml.parsers.SAXParserFactory;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerConfigurationException;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.TransformerFactoryConfigurationError;
import javax.xml.transform.stream.StreamResult;
import javax.xml.transform.stream.StreamSource;

import org.apache.log4j.Category;
import org.wyona.yanel.core.Path;
import org.wyona.yanel.core.Resource;
import org.wyona.yanel.core.api.attributes.ViewableV1;
import org.wyona.yanel.core.api.attributes.CreatableV2;
import org.wyona.yanel.core.attributes.viewable.View;
import org.wyona.yanel.core.attributes.viewable.ViewDescriptor;
import org.wyona.yarep.core.NoSuchNodeException;
import org.wyona.yarep.core.Repository;
import org.wyona.yarep.core.RepositoryException;
import org.wyona.yarep.core.RepositoryFactory;
import org.wyona.yanel.core.transformation.I18nTransformer;
import org.wyona.yarep.util.RepoPath;
import org.wyona.yarep.util.YarepUtil;
import org.wyona.yanel.core.util.HttpServletRequestHelper;import org.wyona.yanel.core.util.PathUtil;
;

/**
 * 
 */
public class ContactResource extends Resource implements ViewableV1, CreatableV2 {

    private static final String SMTP_HOST = "smtpHost:";
    private static final String SMTP_PORT = "smtpPort:";
    private static final String TO = "to:";
    private static final String SUBJECT = "subject:";
    private static Category log = Category.getInstance(ContactResource.class);
    private String smtpHost = "";
    private int smtpPort = 25;
    private String to = "";
    private String from = "";
    private String subject = "YANEL FEEDBACK";
    private String content = "";
    private ContactBean contact = null;
    private String defaultLanguage = "en";
    private String messageBundle = "contact-form";
    
    private HashMap properties = new HashMap();
    private Repository repository  = null;
    private RepoPath rp = null;
    private Path path = null;
    private String language = null;
    
    /**
     * 
     */
    public ContactResource() {
	properties.put("smtpHost", smtpHost);
	properties.put("to", to);
	properties.put("smtpPort", String.valueOf(smtpPort));
	properties.put("subject", subject);
	
    }

    /**
     * 
     */
    public ViewDescriptor[] getViewDescriptors() {
        return null;
    }
    
    /**
     * 
     */
    public View getView(Path path, String viewId) {
        return null;
    }

    /**
     * 
     */
    public View getView(HttpServletRequest request, String viewId)
            throws Exception {
        path = new Path(request.getServletPath());
        rp = new org.wyona.yarep.util.YarepUtil().getRepositoryPath(new org.wyona.yarep.core.Path(path.toString()), getRepositoryFactory());
        repository = rp.getRepo();
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
        Transformer transformer = null;
        I18nTransformer i18nTransformer = null;
        File xslFile = org.wyona.commons.io.FileUtil.file(rtd.getConfigFile().getParentFile().getAbsolutePath(), "xslt" + File.separator + "contact-form.xsl");
        File xmlFile = org.wyona.commons.io.FileUtil.file(rtd.getConfigFile().getParentFile().getAbsolutePath(), "xml" + File.separator + "contact-form.xml");        
        try {
            transformer = TransformerFactory.newInstance().newTransformer(new StreamSource(xslFile));
            boolean submit = false;
            Enumeration enumeration = request.getParameterNames();
            while(enumeration.hasMoreElements()){
                if(enumeration.nextElement().toString().equals("submit")) 
                    submit = true;
            }
            if(submit) {
                sendMail(request, transformer);
                transformer.setParameter("company", HttpServletRequestHelper.getParameter(request, "company"));
                transformer.setParameter("firstName", HttpServletRequestHelper.getParameter(request, "firstName"));
                transformer.setParameter("lastName", HttpServletRequestHelper.getParameter(request, "lastName"));
                transformer.setParameter("email", HttpServletRequestHelper.getParameter(request, "email"));
                transformer.setParameter("address", HttpServletRequestHelper.getParameter(request, "address"));
                transformer.setParameter("zipCity", HttpServletRequestHelper.getParameter(request, "zipCity"));
                transformer.setParameter("message", HttpServletRequestHelper.getParameter(request, "message"));
            }
            ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
            transformer.transform(new javax.xml.transform.stream.StreamSource(xmlFile), new StreamResult(byteArrayOutputStream));
            //translate the form
            i18nTransformer = new I18nTransformer(messageBundle, language);
            SAXParser saxParser = SAXParserFactory.newInstance().newSAXParser();
            saxParser = SAXParserFactory.newInstance().newSAXParser();
            saxParser.parse(new ByteArrayInputStream(byteArrayOutputStream.toByteArray()), i18nTransformer);
            
            transformer = TransformerFactory.newInstance().newTransformer(getXSLTStreamSource(path, repository));
            transformer.setParameter("yanel.path.name", path.getName());
            transformer.setParameter("yanel.path", path.toString());
            transformer.setParameter("yanel.back2context", backToContext()+backToRoot());
            transformer.setParameter("yarep.back2realm", backToRoot());
 
            byteArrayOutputStream = new ByteArrayOutputStream();
            transformer.transform(new StreamSource(i18nTransformer.getInputStream()), new StreamResult(byteArrayOutputStream));
            //tranlate the page
            i18nTransformer = new I18nTransformer("global", language);
            saxParser = SAXParserFactory.newInstance().newSAXParser();
            saxParser.parse(new ByteArrayInputStream(byteArrayOutputStream.toByteArray()), i18nTransformer);
            
        } catch (Exception e) {
            log.error(e.getMessage(), e);
        }
        View defaultView = new View();
        defaultView.setMimeType(getMimeType());
        defaultView.setInputStream(i18nTransformer.getInputStream());
        return defaultView;
    }

    /**
    *
    */
   public String getPropertyType(String propertyName){
       //TODO not implemented yet
       return null;
   }

   /**
    * Creates the resource
    */
   public void create(HttpServletRequest request){
       log.warn("Not implemented yet!");
   }

   /**
    * Creates RTI properties
    */
   public HashMap createRTIProperties(HttpServletRequest request){
       HashMap map = new HashMap();
       // TODO: Do not hardcode xslt ...
       map.put("#xslt", "/xslt/global.xsl");
       // TODO: Make mime-type configurable (depending on global XSLT) ...
       map.put("mime-type", "application/xhtml+xml");       
       map.put("smtpHost",request.getParameter("rp.smtpHost"));
       map.put("smtpPort",request.getParameter("rp.smtpPort"));
       map.put("to",request.getParameter("rp.to"));
       map.put("subject", request.getParameter("rp.subject"));
       
       return map;
   }

   /**
     * 
     */
   public String[] getPropertyNames() {
       String[] propertyNames = (String[])properties.keySet().toArray(new String[properties.keySet().size()]);
       return propertyNames;
   }

   /**
    * 
    */
   public void setProperty(String name, Object value){
       properties.put(name, value);
   }

   /**
    * 
    */
   public Object getProperty(String name){
       Object property = properties.get(name);
       return property;
   }


    
    /**
     * 
     * @param request
     * @param transformer
     */
    private void sendMail(HttpServletRequest request, Transformer transformer) {
        String email = request.getParameter("email");
        if(email == null || ("").equals(email)) {
            transformer.setParameter("error", "emailNotSet");
        } else if(!validateEmail(email)) {
            transformer.setParameter("error", "emailNotValid");
        } else {
            contact = new ContactBean(request);
            smtpHost = getRTIProperty(SMTP_HOST);
            try {
                smtpPort = Integer.parseInt(getRTIProperty(SMTP_PORT));
            } catch(NumberFormatException nfe) {
                log.error(nfe);
                transformer.setParameter("error", "smtpPortNotCorrect");
                smtpPort = 0;
            }
            subject = getRTIProperty(SUBJECT);
            to = getRTIProperty(TO);
            from = email;
            content = "Company: " + contact.getCompany() + "\n" + "Firstname: "
                    + contact.getFirstName() + "\n" + "Lastname: "
                    + contact.getLastName() + "\n" + "Address: "
                    + contact.getAddress() + "\n" + "City: " + contact.getCity()
                    + "\n" + "Email: " + contact.getEmail() + "\n" + "\n"
                    + "Message:\n" + contact.message;
            
            if(smtpHost != null && smtpPort != 0 && to != null) {
                try {
                    SendMail.send(smtpHost, smtpPort, from, to, subject, content);
                    transformer.setParameter("sent", "true");
                } catch(javax.mail.MessagingException me) {
                    log.error("#" + me + "#");
                    if(("" + me).startsWith("javax.mail.MessagingException: Unknown SMTP")) {
                        transformer.setParameter("error", "unknownHost");
                    } else if(("" + me).startsWith("javax.mail.SendFailedException: Invalid Addresses")) {
                        transformer.setParameter("error", "invalidAddress");
                    } else {
                        transformer.setParameter("error", "couldNotSendMail");
                    }
                }
            } else {
                transformer.setParameter("error", "smtpConfigError");
            }
        }
    }
    
    /**
     * this method checks if the specified email is valid against a regex
     * @param email
     * @return true if email is valid
     */
    private boolean validateEmail(String email) {
        String emailRegEx = "(\\w+)@(\\w+\\.)(\\w+)(\\.\\w+)*";
        Pattern pattern = Pattern.compile(emailRegEx);
        Matcher matcher = pattern.matcher(email);
        return matcher.find();
    }
    
    /**
     * 
     * @param path
     * @return
     * @throws Exception
     */
    private RepoPath contentRepo(Path path) throws Exception {
        return new YarepUtil().getRepositoryPath(new org.wyona.yarep.core.Path(
                path.toString()), getRepositoryFactory());
    }

    
    /**
     * 
     * @param path
     * @param repo
     * @return
     * @throws NoSuchNodeException
     */
    private StreamSource getXSLTStreamSource(Path path, Repository repo)
            throws NoSuchNodeException, RepositoryException {
        Path xsltPath = getXSLTPath(path);
        if (xsltPath != null) {
            return new StreamSource(repo
                    .getInputStream(new org.wyona.yarep.core.Path(getXSLTPath(
                            path).toString())));
        } else {
            File xsltFile = org.wyona.commons.io.FileUtil.file(rtd
                    .getConfigFile().getParentFile().getAbsolutePath(), "xslt"
                    + File.separator + "dir2xhtml.xsl");
            log.error("DEBUG: XSLT file: " + xsltFile);
            return new StreamSource(xsltFile);
        }
    }
    
    /**
     * 
     * @param path
     * @return
     */
    private Path getXSLTPath(Path path) {
        String xsltPath = null;
        try {
            java.io.BufferedReader br = new java.io.BufferedReader(rp
                    .getRepo().getReader(
                            new org.wyona.yarep.core.Path(new Path(rp
                                    .getPath().toString()).getRTIPath()
                                    .toString())));

            while ((xsltPath = br.readLine()) != null) {
                if (xsltPath.indexOf("xslt:") == 0) {
                    xsltPath = xsltPath.substring(6);
                    log.debug("XSLT Path: " + xsltPath);
                    return new Path(xsltPath);
                }
            }
            log.error("No XSLT Path within: " + rp.getPath());
        } catch (Exception e) {
            log.warn(e);
        }
        return null;
    }
    
    /**
     * this method reads out the specified key from rti file 
     * if key cannot be found return null
     * @param key
     * @return value
     */
    private String getRTIProperty(String key) {
        try {
            java.io.BufferedReader bufferedReader = new java.io.BufferedReader(rp.getRepo().getReader(new org.wyona.yarep.core.Path(new Path(rp.getPath().toString()).getRTIPath().toString())));
            String line = null;
            while((line = bufferedReader.readLine()) != null) {
                if(line.indexOf(key) == 0) {
                    return line.substring(key.length() + 1);
                }
            }
        } catch (Exception e) {
            log.error(e);
        }
        return null;
    }
    
    /**
     * Get mime type
     */
    private String getMimeType() {
        String mimeType = getRTI().getProperty("mime-type");
        if (mimeType != null) return mimeType;

        return "application/xhtml+xml";
    }
   
   /**
    * 
    * @return
    */
   protected RepositoryFactory getRepositoryFactory() {
       return yanel.getRepositoryFactory("DefaultRepositoryFactory");
   }
   
   /**
    * @return a String with as many ../ as it needs to go back to from current realm to context
    */
   private String backToContext() {
       String backToContext = "";
       int steps = realm.getMountPoint().split("/").length - 1;

       for (int i = 0; i < steps; i++) {
           backToContext = backToContext + "../";
       }
       return backToContext;
   }
    
   /**
    * @return a String with as many ../ as it needs to go back to from current resource to the realm-root
    */
   private String backToRoot() {
       String backToRoot = "";
       int steps;
       
       if (getPath().endsWith("/") && !getPath().equals("/")) {
           steps =  getPath().split("/").length - 1;
       } else {
           steps =  getPath().split("/").length - 2;
       }
       for (int i = 0; i < steps; i++) {
           backToRoot = backToRoot + "../";
       }
       return backToRoot;
   }
}