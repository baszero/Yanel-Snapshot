/*
 * Copyright 2009 Wyona
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
import java.util.ArrayList;

import org.wyona.commons.io.FileUtil;
import org.wyona.security.core.IdentityManagerFactory;
import org.wyona.security.core.PolicyManagerFactory;
import org.wyona.security.core.api.IdentityManager;
import org.wyona.security.core.api.PolicyManager;
import org.wyona.yanel.core.LanguageHandler;
import org.wyona.yanel.core.Yanel;
import org.wyona.yanel.core.attributes.translatable.DefaultTranslationManager;
import org.wyona.yanel.core.attributes.translatable.TranslationManager;
import org.wyona.yanel.core.api.security.WebAuthenticator;
import org.wyona.yanel.core.navigation.Sitetree;
import org.wyona.yanel.core.util.ConfigurationUtil;
import org.wyona.yarep.core.Repository;
import org.wyona.yarep.core.RepositoryFactory;
import org.xml.sax.SAXException;

import org.apache.avalon.framework.configuration.Configuration;
import org.apache.avalon.framework.configuration.ConfigurationException;
import org.apache.avalon.framework.configuration.DefaultConfigurationBuilder;

import org.apache.log4j.Logger;

/**
 *
 */
public class RealmDefaultImpl implements Realm {

    public static String DEFAULT_REPOSITORY_FACTORY_BEAN_ID = "DefaultRepositoryFactory";
    private static String EXTRA_REPOSITORY_FACTORY_BEAN_ID = "ExtraRepositoryFactory";

    private static Logger log = Logger.getLogger(RealmDefaultImpl.class);

    private String name;
    private String id;
    private String mountPoint;
    private String defaultLanguage;
    private Repository repository = null;
    private Repository rtiRepository = null;
    private Repository identitiesRepository = null;
    private Repository policiesRepository = null;
    private PolicyManager privatePolicyManager;
    private IdentityManager privateIdentityManager;
    private WebAuthenticator privateWebAuthenticator;
    private TranslationManager translationManager;
    private LanguageHandler languageHandler;
    private Sitetree repoNavigation;
    private File configFile;
    private File rootDir;
    private String[] languages;
    private String i18nCatalogue;

    private boolean proxySet = false;
    private String proxyHostName;
    private int proxyPort = -1;
    private int proxySSLPort = -1;
    private String proxyPrefix;

    /**
     * Init realm
     */
    public RealmDefaultImpl(String name, String id, String mountPoint, File configFile) throws Exception {
        // TODO: Get realm name from config if name is null (see method configure())!
        this.name = name;

        this.id = id;
        this.mountPoint = mountPoint;
        this.configFile = configFile;

        log.info("Init realm: " + id + ", " + mountPoint + ", " + configFile);

        proxySet = false;

        if (configFile != null) {
            DefaultConfigurationBuilder builder = new DefaultConfigurationBuilder(true);
            Configuration config;
            try {
                config = builder.buildFromFile(configFile);
                configure(config);
            } catch (SAXException e) {
                // TODO: CascadingSAXException cse = new CascadingSAXException(e);
                log.error(e, e);
                String errorMsg = "Could not read config file: " + configFile + ": " + e.getMessage();
                throw new Exception(errorMsg, e);
            } catch (Exception e) {
                log.error(e, e);
                String errorMsg = "Could not configure realm [" + id + "] with config file: " + configFile + ": " + e.toString();
                throw new Exception(errorMsg, e);
            }
        }
    }

    /**
     * Configure realm based on configuration
     */
    protected void configure(Configuration config) throws Exception {
        Yanel yanel = Yanel.getInstance();

        // Set name if not already set by yanel realms registration config
        Configuration nameConfigElement = config.getChild("name", false);
        if (name == null && nameConfigElement != null) {
            name = nameConfigElement.getValue();
        }


        initIdentityManager(config, yanel);
        initPolicyManager(config, yanel);

        // Set WebAuthenticator for this realm
        Configuration waConfigElement = config.getChild("web-authenticator", false);
        WebAuthenticator wa = null;
        if (waConfigElement != null) {
            try {
            	String customWebAuthenticatorImplClassName = waConfigElement.getAttribute("class");
            	wa = (WebAuthenticator) Class.forName(customWebAuthenticatorImplClassName).newInstance();
                wa.init(ConfigurationUtil.getCustomConfiguration(waConfigElement, "web-authenticator-config", "http://www.wyona.org/security/1.0"), new RealmConfigPathResolver(this));
                log.info("Custom WebAuthenticator (" + customWebAuthenticatorImplClassName + ") will be used!");
            } catch (ConfigurationException e) {
                log.error(e, e);
                log.warn("Default WebAuthenticator will be used!");
                wa = getDefaultWebAuthenticator();
                wa.init(null, new RealmConfigPathResolver(this));
            }
        } else {
            wa = getDefaultWebAuthenticator();
            wa.init(null, new RealmConfigPathResolver(this));
        }
        setWebAuthenticator(wa);



        RepositoryFactory repoFactory = yanel.getRepositoryFactory(DEFAULT_REPOSITORY_FACTORY_BEAN_ID);
        RepositoryFactory rtiRepoFactory = yanel.getRepositoryFactory("RTIRepositoryFactory");
        RepositoryFactory extraRepoFactory = yanel.getRepositoryFactory(EXTRA_REPOSITORY_FACTORY_BEAN_ID);

        String repoConfigSrc = config.getChild("data", false).getValue();
        File repoConfig = FileUtil.resolve(getConfigFile(), new File(repoConfigSrc));
        log.info("Set data repository: " + getID() + ", " + repoConfig);
        setRepository(repoFactory.newRepository(getID(), repoConfig));

        repoConfigSrc = config.getChild("rti", false).getValue();
        repoConfig = FileUtil.resolve(getConfigFile(), new File(repoConfigSrc));
        setRTIRepository(rtiRepoFactory.newRepository(getID(), repoConfig));




        Configuration configElement = config.getChild("default-language", false);
        if (configElement != null) {
            setDefaultLanguage(configElement.getValue());
        } else {
            //Maintain backwards compatibility with realms
            setDefaultLanguage("en");
        }

        Configuration languagesElement = config.getChild("languages", false);
        ArrayList languages = new ArrayList();
        if (languagesElement != null) {
            Configuration[] langElements = languagesElement.getChildren("language");
            for (int i = 0; i < langElements.length; i++) {
                String language = langElements[i].getValue();
                languages.add(language);
            }
        }
        setLanguages((String[])languages.toArray(new String[languages.size()]));

        configElement = config.getChild("translation-manager", false);
        TranslationManager translationManager = null;
        if (configElement != null) {
            String className = configElement.getAttribute("class");
            translationManager = (TranslationManager)Class.forName(className).newInstance();
        } else {
            translationManager = new DefaultTranslationManager();
        }
        translationManager.init(this);
        setTranslationManager(translationManager);

        configElement = config.getChild("language-handler", false);
        LanguageHandler languageHandler = null;
        if (configElement != null) {
            String className = configElement.getAttribute("class");
            languageHandler = (LanguageHandler)Class.forName(className).newInstance();
        } else {
            languageHandler = (LanguageHandler)Class.forName("org.wyona.yanel.impl.DefaultLanguageHandler").newInstance();
        }
        setLanguageHandler(languageHandler);


        Configuration rootDirConfig = config.getChild("root-dir", false);
        if (rootDirConfig != null) {
            setRootDir(FileUtil.resolve(getConfigFile(), new File(rootDirConfig.getValue())));
        }

        Configuration reposElement = config.getChild("yarep-repositories", false);
        if (reposElement != null) {
            Configuration[] repoElements = reposElement.getChildren("repository");
            for (int i = 0; i < repoElements.length; i++) {
                String id = repoElements[i].getAttribute("id");
                String repoConfigPath = repoElements[i].getAttribute("config");
                repoConfig = FileUtil.resolve(getConfigFile(), new File(repoConfigPath));
                if (!extraRepoFactory.exists(getID() + "_" + id)) {
                    extraRepoFactory.newRepository(getID() + "_" + id, repoConfig);
                } else {
                    log.error("Extra repository with ID '" + id + "' already exists (Realm ID: '" + getID() + "')!");
                }
            }
        }
        
        // Set i18n catalogue
        configElement = config.getChild("i18n-catalogue", false);
        if (configElement != null) {
            this.i18nCatalogue = configElement.getValue();
        }

        // Set repo-navigation
        configElement = config.getChild("repo-navigation", false);
        if (configElement != null) {
            try {
                String customRepoNavigationImplClassName = configElement.getAttribute("class");
                repoNavigation = (Sitetree) Class.forName(customRepoNavigationImplClassName).newInstance();
                repoNavigation.init(ConfigurationUtil.getCustomConfiguration(configElement, "repo-navigation-config", "http://www.wyona.org/yanel/realm/1.0"), new RealmConfigPathResolver(this));
                log.info("Custom repo navigation implementation will be used for realm: " + getName());
            } catch (ConfigurationException e) {
                log.error(e, e);
                repoNavigation = yanel.getSitetreeImpl("repo-navigation");
                log.warn("Default repo navigation implementation will be used for realm: " + getName());
            }
        } else {
            log.info("Default repo navigation implementation will be used for realm: " + getName());
            repoNavigation = yanel.getSitetreeImpl("repo-navigation");
        }
    }

    /**
     * Name of realm
     */
    public String getName() {
        return name;
    }

    /**
     * Id of realm
     */
    public String getID() {
        return id;
    }

    /**
     * Mount point of realm
     */
    public String getMountPoint() {
        return mountPoint;
    }

    /**
     * Configuration file of realm.
     */
    public File getConfigFile() {
        return configFile;
    }

    /**
     *
     */
    public void setProxy(String hostName, int port, int sslPort, String prefix) {
        proxySet = true;
        proxyHostName = hostName;
        proxyPort = port;
        proxySSLPort = sslPort;
        proxyPrefix = prefix;
    }

    /**
     *
     */
    public boolean isProxySet() {
        return proxySet;
    }

    /**
     *
     */
    public String getProxyHostName() {
        return proxyHostName;
    }

    /**
     *
     */
    public int getProxyPort() {
        return proxyPort;
    }

    /**
     *
     */
    public int getProxySSLPort() {
        return proxySSLPort;
    }

    /**
     *
     */
    public String getProxyPrefix() {
        return proxyPrefix;
    }

    /**
     *
     */
    public String toString() {
        String descr = "Name: " + name + ", ID: " + id + ", Mount-Point: " + mountPoint;
        if (isProxySet()) {
            if (proxyHostName != null) {
                descr = descr + ", Reverse Proxy Host Name: " + proxyHostName;
            }
            if (proxyPort >= 0) {
                descr = descr + ", Reverse Proxy Port: " + proxyPort;
            } else {
                descr = descr + ", Reverse Proxy Port is set to default 80 (resp. -1)";
            }
            if (proxySSLPort >= 0) {
                descr = descr + ", Reverse Proxy SSL Port: " + proxySSLPort;
            } else {
                descr = descr + ", Reverse Proxy SSL Port is set to default 443 (resp. -1)";
            }
            if (proxyPrefix != null) {
               descr = descr + ", Reverse Proxy Prefix: " + proxyPrefix;
            }
        } else {
            descr = descr + ", No reverse proxy set";
        }
        return descr;
    }

    /**
     * Get data repository of realm
     */
    public Repository getRepository() throws Exception {
        return repository;
    }

    public void setRepository(Repository repository) throws Exception {
        this.repository = repository;
    }

    /**
     * Get RTI (Resource Type Identifier) repository of realm
     */
    public Repository getRTIRepository() throws Exception {
        return rtiRepository;
    }

    public void setRTIRepository(Repository repository) throws Exception {
        this.rtiRepository = repository;
    }

    /**
     *
     */
    public WebAuthenticator getWebAuthenticator() {
        return privateWebAuthenticator;
    }
    /**
     *
     */
    public void setWebAuthenticator(WebAuthenticator wa) {
        privateWebAuthenticator = wa;
    }

    public IdentityManager getIdentityManager() {
        return privateIdentityManager;
    }

    public void setIdentityManager(IdentityManager identityManager) {
        this.privateIdentityManager = identityManager;
    }

    /**
     * Get policy manager
     */
    public PolicyManager getPolicyManager() {
        return privatePolicyManager;
    }

    public void setPolicyManager(PolicyManager policyManager) {
        this.privatePolicyManager = policyManager;
    }

    /**
     * Get repository navigation
     */
    public Sitetree getRepoNavigation() {
        return repoNavigation;
    }

    /**
     * Get default language of this realm re content
     */
    public String getDefaultLanguage() {
        return defaultLanguage;
    }

    public void setDefaultLanguage(String language) {
        this.defaultLanguage = language;
    }

    /**
     * Please note that the root-dir element is optional
     * @deprecated
     */
    public File getRootDir() {
        log.warn("TODO: Try to avoid using the getRootDir() method because this method is deprecated!");
        return this.rootDir;
    }

    public void setRootDir(File rootDir) {
        this.rootDir = rootDir;
    }

    /**
     * Please note that the menu element is optional
     */
    public String getMenuClass() {
        try {
            Configuration realmConfig = new DefaultConfigurationBuilder().buildFromFile(getConfigFile());
            Configuration menuClassConfig = realmConfig.getChild("menu", false);
            if (menuClassConfig != null) {
                return menuClassConfig.getAttribute("class");
            }
        } catch (Exception e) {
            log.error(e.getMessage(), e);
        }
        return null;
    }

    /**
     * Gets a list of all languages supported by this realm.
     * @return list of languages. may be empty.
     */
    public String[] getLanguages() {
        return languages;
    }

    public void setLanguages(String[] languages) {
        //TODO: the cast should not be necessary. but under strange circumstances build fails without.
        this.languages = (String[]) languages.clone();
    }

    public TranslationManager getTranslationManager() {
        //log.debug("Translation Manager: " + translationManager.getClass().getName());
        return translationManager;
    }

    public void setTranslationManager(TranslationManager translationManager) {
        this.translationManager = translationManager;
    }

    /**
     * Get repository, whereas default repositories can be retrieved by 'yanel_data', 'yanel_ac-policies', 'yanel_ac-identities' and 'yanel_res-configs'.
     * @param id Repository id
     */
    public Repository getRepository(String id) throws Exception {
        if("yanel_data".equals(id)) {
            return repository;
        } else if("yanel_ac-policies".equals(id)) {
            return policiesRepository;
        } else if("yanel_ac-identities".equals(id)) {
            return identitiesRepository;
        } else if("yanel_res-configs".equals(id)) {
            return rtiRepository;
        } else {
            Yanel yanel = Yanel.getInstance();
            RepositoryFactory extraRepoFactory = yanel.getRepositoryFactory(EXTRA_REPOSITORY_FACTORY_BEAN_ID);
            if (extraRepoFactory.exists(getID() + "_" + id)) {
                return extraRepoFactory.newRepository(getID() + "_" + id);
            } else {
                log.warn("No such extra repository: " + id + " (Realm: " + getID() + ")");
            } 
        }

        return null;
    }

    public LanguageHandler getLanguageHandler() {
        return languageHandler;
    }

    public void setLanguageHandler(LanguageHandler languageHandler) {
        this.languageHandler = languageHandler;
    }

    /**
     * Destroy/shutdown realm
     */
    public void destroy() throws Exception {
        log.warn("Shutdown realm (and its repositories): " + getName());

        repository.close();

        rtiRepository.close();

        if (identitiesRepository != null) {
            identitiesRepository.close();
        } else {
            log.warn("No identities repository to close for realm: " + getID());
        }

        if (policiesRepository != null) {
            policiesRepository.close();
        } else {
            log.warn("No policies repository to close for realm: " + getID());
        }

        // TODO: Close extra repositories
    }

    /**
     * Get Default WebAuthenticator
     */
    private WebAuthenticator getDefaultWebAuthenticator() throws Exception {
        // TODO: Get this setting from spring config
        String defaultWebAuthenticatorImplClassName = "org.wyona.yanel.servlet.security.impl.DefaultWebAuthenticatorImpl";
        return (WebAuthenticator) Class.forName(defaultWebAuthenticatorImplClassName).newInstance();
    }
    
    /**
     * Gets the value of the i18n-catalogue config element.
     * This value normally is a URI pointing to an i18n message catalogue. 
     * @return i18n catalogue
     */
    public String getI18nCatalogue() {
        return this.i18nCatalogue;
    }

    /**
     * Init policy manager
     */
    protected void initPolicyManager(Configuration config, Yanel yanel) throws Exception {
        Configuration repoConfigElement = config.getChild("ac-policies", false);
        if (repoConfigElement != null) {
            PolicyManagerFactory pmFactory = null;
            PolicyManager policyManager = null;
            try {
                String customPolicyManagerFactoryImplClassName = repoConfigElement.getAttribute("class");
                pmFactory = (PolicyManagerFactory) Class.forName(customPolicyManagerFactoryImplClassName).newInstance();
                policyManager = pmFactory.newPolicyManager(ConfigurationUtil.getCustomConfiguration(repoConfigElement, "policy-manager-config", "http://www.wyona.org/security/1.0"), new RealmConfigPathResolver(this));
            } catch (ConfigurationException e) {
                pmFactory = yanel.getPolicyManagerFactory("PolicyManagerFactory");
                log.info("Default PolicyManager will be used for realm: " + getName());
                File repoConfig = FileUtil.resolve(getConfigFile(), new File(repoConfigElement.getValue()));
                RepositoryFactory policiesRepoFactory = yanel.getRepositoryFactory("ACPoliciesRepositoryFactory");
                policiesRepository = policiesRepoFactory.newRepository(getID(), repoConfig);
                policyManager = pmFactory.newPolicyManager(policiesRepository);
            }
            setPolicyManager(policyManager);
        }
    }

    /**
     * Init identity manager
     */
    protected void initIdentityManager(Configuration config, Yanel yanel) throws Exception {
        Configuration repoConfigElement = config.getChild("ac-identities", false);
        if (repoConfigElement != null) {

            IdentityManagerFactory imFactory = null;
            IdentityManager identityManager = null;
            try {
            	String customIdentityManagerFactoryImplClassName = repoConfigElement.getAttribute("class");
                log.debug("Set custom identity manager " + customIdentityManagerFactoryImplClassName + " for realm: " + getName());
            	imFactory = (IdentityManagerFactory) Class.forName(customIdentityManagerFactoryImplClassName).newInstance();

                // INFO: ConfigurationUtil generates a DOM Document with the root node called "identity-manager-config" which wraps/contains the custom indentities configuration
                identityManager = imFactory.newIdentityManager(ConfigurationUtil.getCustomConfiguration(repoConfigElement, "identity-manager-config", "http://www.wyona.org/security/1.0"), new RealmConfigPathResolver(this));

                log.debug("Custom identity manager " + identityManager.getClass().getName() + " has been set for realm: " + getName());
            } catch (ConfigurationException e) {
            	imFactory = yanel.getIdentityManagerFactory("IdentityManagerFactory");
            	log.info("Default IdentityManager will be used for realm: " + getName());
            	File repoConfig = FileUtil.resolve(getConfigFile(), new File(repoConfigElement.getValue()));
                RepositoryFactory identitiesRepoFactory = yanel.getRepositoryFactory("ACIdentitiesRepositoryFactory");
                identitiesRepository = identitiesRepoFactory.newRepository(getID(), repoConfig);
                identityManager = imFactory.newIdentityManager(identitiesRepository);
            }
            setIdentityManager(identityManager);
        }
    }
}
