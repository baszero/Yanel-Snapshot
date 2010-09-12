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

package org.wyona.yanel.core;

import org.wyona.yanel.core.map.Map;
import org.wyona.yanel.core.map.Realm;
import org.wyona.yanel.core.map.RealmManager;
import org.wyona.yarep.core.RepositoryFactory;

import org.springframework.beans.factory.BeanFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.io.File;

import org.apache.avalon.framework.configuration.Configuration;
import org.apache.avalon.framework.configuration.DefaultConfigurationBuilder;
import org.apache.log4j.Logger;

/**
 * This class is a singleton.
 */
public class Yanel {

    private Map map = null;
    private ResourceTypeRegistry rtr = null;
    private ApplicationContext applicationContext;
    private RealmManager realmConfig;
    private ResourceManager resourceManager;
    private boolean isInitialized = false;
    
    private static final String SPRING_CONFIG_FILE = "spring-*-config.xml";

    public static final String DEFAULT_CONFIGURATION_FILE = "yanel.properties";
    public static final String DEFAULT_CONFIGURATION_FILE_XML = "yanel.xml";

    private static Yanel yanel = null;

    private String smtpHost = null;
    private int smtpPort = -1;

    private String version = null;
    private String revision = null;
    private String reservedPrefix = null;
    private boolean schedulerEnabled;

    private String smtpUsername, smtpPassword;

    private static Logger log = Logger.getLogger(Yanel.class);

    /**
     * Private constructor
     */
    private Yanel() throws Exception {
        log.info("Spring config file: " + SPRING_CONFIG_FILE);
        applicationContext = new ClassPathXmlApplicationContext(SPRING_CONFIG_FILE);
    } 

   /**
    * Initialize Yanel
    */
   public void init() throws Exception {
       if (isInitialized) {
           return;
       }
       
       map = (Map) applicationContext.getBean("map");
       realmConfig = new RealmManager();
       map.setRealmConfiguration(realmConfig);

       rtr = new ResourceTypeRegistry();
       resourceManager = new ResourceManager();
       resourceManager.setResourceTypeRegistry(rtr);
       
       File configFile = new File(Yanel.class.getClassLoader().getResource(DEFAULT_CONFIGURATION_FILE_XML).getFile());
       DefaultConfigurationBuilder builder = new DefaultConfigurationBuilder();
       Configuration config = builder.buildFromFile(configFile);
       Configuration versionConfig = config.getChild("version");
       version = versionConfig.getAttribute("version");
       revision = versionConfig.getAttribute("revision");
       reservedPrefix = config.getChild("reserved-prefix").getValue();

       if (config.getChild("scheduler", false) != null) {
           schedulerEnabled = config.getChild("scheduler").getAttributeAsBoolean("enabled");
       } else {
           log.warn("Scheduler not configured within configuration: " + configFile);
           schedulerEnabled = false;
       }

       if (config.getChild("smtp", false) != null) {

           String smtpPortSt = config.getChild("smtp").getAttribute("port");
           try {
               smtpPort = Integer.parseInt(smtpPortSt);
           } catch(NumberFormatException e) {
               log.warn("Mail server not configured, because SMTP port '" + smtpPortSt + "' does not seem to be a number! Check within configuration: " + configFile);
           }

           smtpHost = config.getChild("smtp").getAttribute("host");

           // INFO: SMTP Authentication (optional), which is normally necessary in order to relay messages to other hosts/domains
           smtpUsername = config.getChild("smtp").getAttribute("username", null);
           smtpPassword = config.getChild("smtp").getAttribute("password", null);

           java.util.Properties props = new java.util.Properties();
           props.put("mail.smtp.host", smtpHost);
           props.put("mail.smtp.port", smtpPortSt);
           // http://java.sun.com/products/javamail/javadocs/javax/mail/Session.html
           javax.mail.Session session = null;
           if (smtpUsername != null && smtpPassword != null) {
               log.info("SMTP authentication enabled using username: " + smtpUsername);
               props.put("mail.smtp.auth", "true");
               session = javax.mail.Session.getDefaultInstance(props, new YanelMailAuthenticator(smtpUsername, smtpPassword));
           } else {
               log.info("No SMTP authentication configured.");
               session = javax.mail.Session.getDefaultInstance(props, null);
           }
           log.info("Mailserver default session (available to all code executing in the same JVM): " + session.getProperty("mail.smtp.host") + ":" + session.getProperty("mail.smtp.port"));
       } else {
           log.warn("Mail server not configured within configuration: " + configFile);
       }

       isInitialized = true;
    }

    /**
     * Shutdown Yanel
     */
    public void destroy() {
       Realm[] realms = realmConfig.getRealms();
       for (int i = 0; i < realms.length; i++) {
           try {
               realms[i].destroy();
           } catch(Exception e) {
               log.error(e, e);
           }
       }
    }

    /**
     *
     */
    public static Yanel getInstance() throws Exception {
        if (yanel == null) {
            yanel = new Yanel();
        } 
        return yanel;
    }
   
    /**
     * Some resources are still using this, such as for example src/contributions/resources/wiki/src/java/org/wyona/yanel/impl/resources/WikiResource.java
     * @deprecated
     */
    public BeanFactory getBeanFactory() {
        log.warn("DEPRECATED");
        return applicationContext;
    }
    
    /**
     * Get repository factory
     * @param id Repository factory bean ID
     */
    public RepositoryFactory getRepositoryFactory(String id) {
        //log.debug("Repository factory bean id: " + id);
        return (RepositoryFactory)applicationContext.getBean(id);
    }
    
    /**
     * Get policy manager factory
     * @param id Policy manager factory bean ID
     */
    public org.wyona.security.core.PolicyManagerFactory getPolicyManagerFactory(String id) {
        return (org.wyona.security.core.PolicyManagerFactory)applicationContext.getBean(id);
    }
    
    /**
     * Get identity manager factory
     * @param id Identity manager factory bean ID
     */
    public org.wyona.security.core.IdentityManagerFactory getIdentityManagerFactory(String id) {
        return (org.wyona.security.core.IdentityManagerFactory)applicationContext.getBean(id);
    }
    
    /**
     * Get sitetree implementation
     * @param id Sitetree implementation bean ID
     */
    public org.wyona.yanel.core.navigation.Sitetree getSitetreeImpl(String id) {
        return (org.wyona.yanel.core.navigation.Sitetree)applicationContext.getBean(id);
    }
    
    /**
     * Get map implementation
     * @param id Map implementation bean ID
     */
    public org.wyona.yanel.core.map.Map getMapImpl(String id) {
        return (org.wyona.yanel.core.map.Map)applicationContext.getBean(id);
    }
    
    /**
     *
     */
    public Map getMap() throws Exception {
        return map;
    }
    
    public ResourceTypeRegistry getResourceTypeRegistry() {
        return rtr;
    }
    
    /**
     * Get resource manager
     */
    public ResourceManager getResourceManager() {
        return resourceManager;
    }
    
    /**
     * Get realm manager
     */
    public RealmManager getRealmConfiguration() {
        return realmConfig;
    }
    
    /**
     * @deprecated
     * use getResourceManager().getResource() instead 
     */
    public Resource getResource(Realm realm, String path) throws Exception {
        return resourceManager.getResource(null, realm, path);
    }

    /**
     * Get Yanel version
     */
    public String getVersion() {
        return version;
    }

    /**
     * Get Yanel revision
     */
    public String getRevision() {
        return revision;
    }

    /**
     * Get SMTP host
     */
    public String getSMTPHost() {
        return smtpHost;
    }

    /**
     * Get SMTP port
     */
    public int getSMTPPort() {
        return smtpPort;
    }

    /**
     * Get Yanel reserved prefix
     */
    public String getReservedPrefix() {
        return reservedPrefix;
    }

    /**
     * Check whether scheduler is enabled
     */
    public boolean isSchedulerEnabled() {
        return schedulerEnabled;
    }

    /**
     * Check whether SMTP authentication is set
     */
    public boolean isSMTPAuthSet() {
        if (smtpUsername != null && smtpPassword != null) {
            return true;
        }
        return false;
    }
}

/**
 * Simple authenticator used for SMTP
 */
class YanelMailAuthenticator extends javax.mail.Authenticator {

    private String username, password;

    /**
     *
     */
    public YanelMailAuthenticator(String username, String password) {
        this.username = username;
        this.password = password;
    }

    /**
     * @see javax.mail.Authenticator#getPasswordAuthentication()
     */
    protected javax.mail.PasswordAuthentication getPasswordAuthentication() {
        return new javax.mail.PasswordAuthentication(this.username, this.password);
    }
}
