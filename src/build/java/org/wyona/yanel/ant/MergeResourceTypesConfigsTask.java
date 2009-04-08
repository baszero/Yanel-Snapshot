/*
 * ALSO SEE: build/lenya/src-tools/org/apache/lenya/cms/ant/CopyJavaSourcesTask.java
 */
package org.wyona.yanel.ant;

import org.apache.tools.ant.BuildException;
import org.apache.tools.ant.Task;
import org.apache.tools.ant.types.Path;

import java.io.File;

import org.wyona.yanel.core.map.Realm;
import org.wyona.yanel.core.map.RealmContextConfig;
import org.wyona.yanel.core.map.RealmManagerConfig;

import org.apache.log4j.Logger;

/**
 * Merge resource-types.xml config files of the various realms and core
 */
public class MergeResourceTypesConfigsTask extends Task {

    private static Logger log = Logger.getLogger(MergeResourceTypesConfigsTask.class);

    private Path defaultRealmsConfigDir;
    private Path localRealmsConfigDir;

    /**
     *
     */
    public void execute() throws BuildException {
        log.info("Merge ...");
        log("INFO: Default realms config directory: " + defaultRealmsConfigDir);
        log("INFO: Local realms config directory: " + localRealmsConfigDir);
        File defaultRealmsConfig = new File(defaultRealmsConfigDir.toString(), "realms.xml");
        File localRealmsConfig = new File(localRealmsConfigDir.toString(), "local.realms.xml");
        RealmManagerConfig realmManagerConfig = new RealmManagerConfig();
        RealmContextConfig[] realmContextConfigs;
        try {
            if (localRealmsConfig.isFile()) {
                log("INFO: Local realms config exists: " + localRealmsConfig.getAbsolutePath());
                // TODO: Unfortunately the class RealmManager consumes at the moment a yanel configuration rather than a realms configuration ...
                //realmManager = new RealmManager("yanel.xml");
                realmContextConfigs = realmManagerConfig.getRealmContextConfigs(localRealmsConfig);
            } else {
                log("WARN: No local realms config '" + localRealmsConfig.getAbsolutePath() + "' exists, hence use default one '" + defaultRealmsConfig.getAbsolutePath() + "'");
                // TODO: ...
                //realmManager = new RealmManager("yanel.xml");
                realmContextConfigs = realmManagerConfig.getRealmContextConfigs(defaultRealmsConfig);
            }
        } catch (Exception e) {
            log("ERROR: " + e.getMessage());
            throw new BuildException(e.getMessage(), e);
        }

        log("Number of realms: " + realmContextConfigs.length);
        for (int i = 0; i < realmContextConfigs.length; i++) {
            log("Realm context config: " + realmContextConfigs[i]);
        }
    }

    /**
     *
     */
    public void setDefaultRealmsConfigDir(Path defaultRealmsConfigDir) {
        this.defaultRealmsConfigDir = defaultRealmsConfigDir;
    }

    /**
     *
     */
    public void setLocalRealmsConfigDir(Path localRealmsConfigDir) {
        this.localRealmsConfigDir = localRealmsConfigDir;
    }
}
