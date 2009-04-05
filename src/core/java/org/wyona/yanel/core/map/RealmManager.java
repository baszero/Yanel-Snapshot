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

package org.wyona.yanel.core.map;

import java.io.File;
import java.io.IOException;
import java.lang.ClassNotFoundException;
import java.net.URI;
import java.net.URL;
import java.net.URLDecoder;
import java.util.LinkedHashMap;
import java.util.Properties;

import org.apache.log4j.Logger;

import org.apache.avalon.framework.configuration.Configuration;
import org.apache.avalon.framework.configuration.ConfigurationUtil;
import org.apache.avalon.framework.configuration.DefaultConfigurationBuilder;
import org.apache.avalon.framework.configuration.DefaultConfigurationSerializer;

import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.wyona.commons.io.FileUtil;
import org.wyona.yanel.core.ConfigurationException;
import org.wyona.yanel.core.Yanel;
import org.wyona.yarep.core.RepositoryFactory;

/**
 * Class managing registration of realms (adding, updating, copying, deleting, ...)
 */
public class RealmManager {

    private static Logger log = Logger.getLogger(RealmManager.class);

    private static String CONFIGURATION_FILE = Yanel.DEFAULT_CONFIGURATION_FILE;

    public static String REALM_DEFAULT_CONFIG_NAME = "realm.xml";

    private URL propertiesURL;
    private File yanelConfigFile;

    private File _realmsConfigFile; 

    private LinkedHashMap hm = new LinkedHashMap();
    private Realm rootRealm = null;

    /**
     *
     */
    public RealmManager() throws ConfigurationException {
        this(Yanel.DEFAULT_CONFIGURATION_FILE_XML);
    }

    /**
     * Initializes realms
     * @param yanelConfigurationFile Yanel configuration, something like yanel.xml or yanel.properties
     */
    public RealmManager(String yanelConfigurationFile) throws ConfigurationException {
        log.debug("Yanel Configuration: " + yanelConfigurationFile);
        File realmsConfigFile = getSetRealmsConfigFile(yanelConfigurationFile);
        log.debug("Realms Configuration: " + realmsConfigFile);
        readRealms(realmsConfigFile);
    }

    /**
     * Get realms configuration file
     * @param yanelConfigurationFile Yanel configuration, something like yanel.xml or yanel.properties
     * @return Something like realms.xml
     */
    public File getSetRealmsConfigFile(String yanelConfigurationFile) throws ConfigurationException {
        CONFIGURATION_FILE = yanelConfigurationFile;

        if (RealmManager.class.getClassLoader().getResource(CONFIGURATION_FILE) == null) {
            CONFIGURATION_FILE = Yanel.DEFAULT_CONFIGURATION_FILE;
        }

        File realmsConfigFile = null;
        if (RealmManager.class.getClassLoader().getResource(CONFIGURATION_FILE) != null) {
            if (CONFIGURATION_FILE.endsWith(".xml")) {

                try {
                    URI configFileUri = new URI(RealmManager.class.getClassLoader().getResource(CONFIGURATION_FILE).toString());
                    yanelConfigFile = new File(configFileUri.getPath());
                } catch (Exception e) {
                    String errorMsg = "Failure while reading configuration: " + e.getMessage();
                    log.error(errorMsg, e);
                    throw new ConfigurationException(errorMsg, e);
                }     
                
                try {
                    DefaultConfigurationBuilder builder = new DefaultConfigurationBuilder();
                    Configuration config;
                    config = builder.buildFromFile(yanelConfigFile);

                    realmsConfigFile = new File(config.getChild("realms-config").getAttribute("src"));
                } catch (Exception e) {
                    String errorMsg = "Failure while reading configuration: " + e.getMessage();
                    log.error(errorMsg, e);
                    throw new ConfigurationException(errorMsg, e);
                }
                if (!realmsConfigFile.isAbsolute()) {
                    realmsConfigFile = FileUtil.file(yanelConfigFile.getParentFile().getAbsolutePath(),
                            realmsConfigFile.toString());
                }
            } else if (CONFIGURATION_FILE.endsWith("properties")) {
                propertiesURL = RealmManager.class.getClassLoader()
                        .getResource(CONFIGURATION_FILE);
                if (propertiesURL == null) {
                    String errMessage = "No such resource: " + CONFIGURATION_FILE;
                    log.error(errMessage);
                    throw new ConfigurationException(errMessage);
                }
                Properties props = new Properties();
                try {
                    props.load(propertiesURL.openStream());
                    // use URLDecoder to avoid problems when the filename contains spaces, see
                    // http://bugzilla.wyona.com/cgi-bin/bugzilla/show_bug.cgi?id=5165
                    File propsFile = new File(URLDecoder.decode(propertiesURL.getFile()));

                    realmsConfigFile = new File(props.getProperty("realms-config"));
                    if (!realmsConfigFile.isAbsolute()) {
                        realmsConfigFile = FileUtil.file(propsFile.getParentFile()
                                .getAbsolutePath(), realmsConfigFile.toString());
                    }
                } catch (IOException e) {
                    log.error(e.getMessage(), e);
                    throw new ConfigurationException("Could not load realms configuration file: " + propertiesURL);
                }
            } else {
                log.error(CONFIGURATION_FILE + " has to be either .xml or .properties");
            }
        } else {
            log.error("No such configuration file: " + RealmManager.class.getClassLoader().getResource(CONFIGURATION_FILE));
        }
        if (realmsConfigFile == null) {
            throw new ConfigurationException("Realms configuration file could not be determined!");
        }
        _realmsConfigFile = realmsConfigFile;
        return realmsConfigFile;
    }

    /**
     * Get yanel configuration file
     */
    public String getConfigurationFile() {
        return CONFIGURATION_FILE;
    }

    /**
     * Read realms configuration
     */
    public void readRealms() throws ConfigurationException {
        readRealms(_realmsConfigFile);
    }

    /**
     * Read realms configuration
     * @param realmsConfigFile Realms configuration file
     */
    public void readRealms(File realmsConfigFile) throws ConfigurationException {
        hm = new LinkedHashMap();
        rootRealm = null;

        DefaultConfigurationBuilder builder = new DefaultConfigurationBuilder();
        Configuration config;

        Yanel yanel;
        try {
            yanel = Yanel.getInstance();
        } catch (Exception e) {
            String errorMsg = "Could not initialize yanel: " + e.getMessage();
            log.error(errorMsg, e);
            throw new ConfigurationException(errorMsg, e);
        }
        
        try {
            log.debug("Get default repo factory ...");
            RepositoryFactory defaultRepoFactory = yanel.getRepositoryFactory(Realm.DEFAULT_REPOSITORY_FACTORY_BEAN_ID);
            defaultRepoFactory.reset();
            log.debug("Get default repo factory DONE.");

            RepositoryFactory rtiRepoFactory = yanel.getRepositoryFactory("RTIRepositoryFactory");
            rtiRepoFactory.reset();

            RepositoryFactory policiesRepoFactory = yanel.getRepositoryFactory("ACPoliciesRepositoryFactory");
            policiesRepoFactory.reset();

            RepositoryFactory identitiesRepoFactory = yanel.getRepositoryFactory("ACIdentitiesRepositoryFactory");
            identitiesRepoFactory.reset();

            log.info("Read realms configuration: " + realmsConfigFile);
            config = builder.buildFromFile(realmsConfigFile);
            Configuration[] realmElements = config.getChildren("realm");
            for (int i = 0;i < realmElements.length; i++) {
                String mountPoint = realmElements[i].getAttribute("mount-point", null);
                String realmId = realmElements[i].getAttribute("id", null);
                String rootFlag = realmElements[i].getAttribute("root", "false");
                Configuration nameConfig = realmElements[i].getChild("name", false);
                String name = null;
                if (nameConfig != null) name = nameConfig.getValue();
                Configuration configElement = realmElements[i].getChild("config", false);
                if (configElement == null) {
                    throw new ConfigurationException("Missing <config src=\"...\"/> child element for realm " + realmId);
                }
                String configSrc = configElement.getAttribute("src", null);
                
                File realmConfigFile = resolveFile(new File(configSrc), realmsConfigFile);
                if (realmConfigFile.isDirectory()) {
                    realmConfigFile = new File(realmConfigFile, REALM_DEFAULT_CONFIG_NAME);
                }

                try {
                    log.info("Reading realm config file for [" + realmId + "]: " + realmConfigFile);
                    Configuration realmConfig = builder.buildFromFile(realmConfigFile);
                    Realm realm;
                    try {
                        String customRealmImplClassName = realmConfig.getAttribute("class");
                        Class[] classArgs = new Class[]{String.class, String.class, String.class, File.class};
                        Object[] values = new Object[4];
                        values[0] = name;
                        values[1] = realmId;
                        values[2] = mountPoint;
                        values[3] = realmConfigFile;
                        java.lang.reflect.Constructor ct = Class.forName(customRealmImplClassName).getConstructor(classArgs);
                        realm = (Realm) ct.newInstance(values);
                    } catch(ClassNotFoundException e) {
                        log.error("Class not found: " + e.getMessage() + ". Fallback to default realm implementation!");
                        realm = new Realm(name, realmId, mountPoint, realmConfigFile);
                    } catch(Exception e) {
                        log.info("Default realm implementation will be used.");
                        realm = new Realm(name, realmId, mountPoint, realmConfigFile);
                    }
                    
                    Configuration proxy = realmElements[i].getChild("reverse-proxy", false);
                    if (proxy != null) {
                        int proxyPort = new Integer(proxy.getChild("port").getValue("-1")).intValue();
                        int proxySSLPort = new Integer(proxy.getChild("ssl-port").getValue("-1")).intValue();
                        String prefixValue = proxy.getChild("prefix").getValue("");
                        if (prefixValue.length() == 0) prefixValue = null;
                        log.debug("Prefix value: " + prefixValue);
                        realm.setProxy(proxy.getChild("host-name").getValue(), proxyPort, proxySSLPort, prefixValue);
                    }
                    
                    log.info("Realm: " + realm);
                    
                    hm.put(realmId, realm);
                    if (rootFlag.equals("true")) {
                        log.debug("Root realm found: " + realm.getID());
                        if (rootRealm == null) {
                            log.debug("Root realm set: " + realm.getID());
                            rootRealm = realm;
                        } else {
                            log.error("Root realm has already been set: " + realmId);
                        }
                    }
                } catch (Exception e) {
                    String errorMsg = "Error setting up realm [" + realmId + "]: " + realmConfigFile + ": " + e;
                    log.error(errorMsg, e);
                    // NOTE: Do not throw an exception, because otherwise all other realms are not being loaded either
                    // TODO/TBD: Maybe one should enhance Realm by a method such as setStatus() and getStatus() in order to check if a realm has been registered successfully or not!
                    //throw new ConfigurationException(errorMsg, e);
                }
            }
        } catch (Exception e) {
            log.error(e.getMessage(), e);
            throw new ConfigurationException("Error setting up realms from file " + 
                    realmsConfigFile + ": " + e, e);
        }
        inheritRootRealmProperties();
    }
    
    /**
     * If the given file has a relative path, resolve it relative to the given dir.
     * If dir is in fact a file, the resolving will use the parent dir of that file.  
     * @param file Realm configuration specified within realms.xml
     * @param dir Path of realms.xml
     */
    protected File resolveFile(File file, File dir) {
        // TODO: Replace this method by some method from org.wyona.commons.io.FileUtil ...
        if (!file.isAbsolute()) {
            if (dir.isDirectory()) {
                file = new File(org.apache.commons.io.FilenameUtils.concat(dir.getAbsolutePath(), file.getPath()));
            } else {
                file = new File(org.apache.commons.io.FilenameUtils.concat(dir.getParent(), file.getPath()));
            }
        }
        return file;
    }

    /**
     *
     */
    public Realm getRealm(String id) {
        return (Realm) hm.get(id);
    }

    /**
     * Get all realms in the order they given in the (local.)yanel.properties file.
     */
    public Realm[] getRealms() {
        Realm[] realms = new Realm[hm.size()];
        return realms = (Realm[])hm.values().toArray(realms);
    }

    /**
     *
     */
    public Realm getRootRealm() {
        return rootRealm;
    }

    /**
     * Adds a new realm which already physically exists in the filesystem.
     * The new realm will be added to realms.xml and registered in this RealmManager.
     * @param realmID Realm ID
     * @param realmName Realm name
     */
    public void addRealm(String realmID, String realmName, String mountPoint, String configFileSrc) throws Exception {
        if (getRealm(realmID) != null) {
            log.warn("Cannot add realm: " + realmID + " (realm with this ID exists already)");
            throw new Exception("Cannot add realm: " + realmID + " (realm with this ID exists already)");
        }
        log.debug("adding realm: " + realmID);
        DefaultConfigurationBuilder builder = new DefaultConfigurationBuilder();
        Configuration config = builder.buildFromFile(_realmsConfigFile);
        Element documentElement = ConfigurationUtil.toElement(config);
        Document document = documentElement.getOwnerDocument(); 
        
        Element newRealmElement = document.createElementNS("http://www.wyona.org/yanel/1.0", "realm");
        newRealmElement.setAttribute("id", realmID);
        newRealmElement.setAttribute("mount-point", mountPoint);
        Element newNameElement = document.createElementNS("http://www.wyona.org/yanel/1.0", "name");
        newNameElement.appendChild(document.createTextNode(realmName));
        newRealmElement.appendChild(newNameElement);
        Element newConfigElement = document.createElementNS("http://www.wyona.org/yanel/1.0", "config");
        newConfigElement.setAttribute("src", configFileSrc);
        newRealmElement.appendChild(newConfigElement);
        
        documentElement.appendChild(newRealmElement);
        config = ConfigurationUtil.toConfiguration(documentElement);
        
        DefaultConfigurationSerializer configSerializer = new DefaultConfigurationSerializer();
        configSerializer.setIndent(true);
        configSerializer.serializeToFile(_realmsConfigFile, config);
        
        // reload the realm configuration:
        readRealms();
    }

    /**
     *
     */
    private void inheritRootRealmProperties() {
        java.util.Iterator keyIterator = hm.keySet().iterator();
        while(keyIterator.hasNext()) {
            String key = (String)keyIterator.next();
            Realm realm = (Realm)hm.get(key);
            if ((realm.getProxyHostName() == null) && (!key.equals(rootRealm.getID())) && rootRealm.isProxySet()) {
                realm.setProxy(rootRealm.getProxyHostName(), rootRealm.getProxyPort(), rootRealm.getProxySSLPort(), rootRealm.getProxyPrefix());
                log.debug("Inherit root realm properties to realm: " + key);
            }
            if (realm.getIdentityManager() == null) {
                log.info("Realm \"" + realm.getName() + "\" will inherit IdentityManager of root realm!");
                realm.setIdentityManager(rootRealm.getIdentityManager());
            }
            if (realm.getPolicyManager() == null) {
                log.warn("Realm \"" + realm.getName() + "\" will inherit PolicyManager of root realm!");
                realm.setPolicyManager(rootRealm.getPolicyManager());
            }
        }
    }
    
    /**
     * Copies a realm by creating a physical copy of the realm, changing its name/id,
     * and registering it in this RealmManager.
     * A realm can only be copied if it has a <root-dir> element in its config file and
     * if this directory contains the complete realm. 
     * @param srcRealmID
     * @param destRealmID
     * @param destRealmName
     * @param destMountPoint
     * @param destDir directory where the new realm will be created (if null, the realm
     *                will be created in the same directory as the src realm).
     * @throws Exception
     */
    public void copyRealm(String srcRealmID, String destRealmID, String destRealmName, 
            String destMountPoint, File destDir) throws Exception {
        if (getRealm(destRealmID) != null) {
            log.warn("Cannot add realm: " + destRealmID + " (realm with this ID exists already)");
            throw new Exception("Cannot add realm: " + destRealmID + " (realm with this ID exists already)");
        }
        DefaultConfigurationBuilder builder = new DefaultConfigurationBuilder();

        Realm srcRealm = getRealm(srcRealmID);
        if (srcRealm == null) {
            throw new Exception("cannot create realm '" + destRealmID + "': source realm '" + 
                    srcRealmID + "' does not exist.");
        }
        String srcConfigSrc = srcRealm.getConfigFile().getAbsolutePath();
        
        File realmConfigFile = resolveFile(new File(srcConfigSrc), _realmsConfigFile);
        Configuration realmConfig = builder.buildFromFile(realmConfigFile);
        Configuration srcRootConfig = realmConfig.getChild("root-dir", false);
        if (srcRootConfig == null) {
            throw new Exception("cannot copy realm '" + srcRealmID + "' no root dir specified in config file");
        }
        File srcRootDir = new File(srcRootConfig.getValue());
        if (!srcRootDir.isAbsolute()) {
            srcRootDir = resolveFile(srcRootDir, realmConfigFile).getCanonicalFile();
        }
        
        // copy realm directory:
        File destRootDir;
        if (destDir != null) {
            if (!destDir.exists() || !destDir.isDirectory()) {
                if (!new File(destDir.getAbsolutePath()).mkdirs()) {
                    throw new Exception("cannot create directory: " + destDir);
                }
            }
            destRootDir = new File(destDir, destRealmID);
        } else {
            destRootDir = new File(srcRootDir.getParentFile(), destRealmID);
        }
        log.debug("copying realm " + srcRootDir + " to " + destRootDir);
        byte[] buffer = new byte[8192];
        String[] filter = { ".svn", ".cvs" };
        FileUtil.copyDirectory(srcRootDir, destRootDir, buffer, filter);

        // patch new realm:
        if (!srcConfigSrc.startsWith(srcRootDir.getAbsolutePath())) {
            throw new Exception(srcConfigSrc + " does not start with " + srcRootDir);
        }
        
        String configPath = srcConfigSrc.substring(srcRootDir.getAbsolutePath().length());
        if (!configPath.startsWith(File.separator)) {
            configPath = File.separator + configPath;
        }
        String destConfigSrc = destRootDir.getAbsolutePath() + configPath;
        log.debug("destConfigSrc: " + destConfigSrc);
        
        realmConfigFile = resolveFile(new File(destConfigSrc), _realmsConfigFile);
        realmConfig = builder.buildFromFile(realmConfigFile);
        Element realmDocument = ConfigurationUtil.toElement(realmConfig);
        
        Element nameElement = (Element)realmDocument.getElementsByTagName("name").item(0);
        Node text = realmDocument.getOwnerDocument().createTextNode(destRealmName);
        nameElement.removeChild(nameElement.getFirstChild());
        nameElement.appendChild(text);
        Element rootDirElement = (Element)realmDocument.getElementsByTagName("root-dir").item(0);
        text = realmDocument.getOwnerDocument().createTextNode(destRootDir.getAbsolutePath());
        rootDirElement.removeChild(rootDirElement.getFirstChild());
        rootDirElement.appendChild(text);

        realmConfig = ConfigurationUtil.toConfiguration(realmDocument);
        DefaultConfigurationSerializer configSerializer = new DefaultConfigurationSerializer();
        configSerializer.setIndent(true);
        configSerializer.serializeToFile(realmConfigFile, realmConfig);

        // add realm to realms.xml and register it:
        addRealm(destRealmID, destRealmName, destMountPoint, destConfigSrc);
    }

}
