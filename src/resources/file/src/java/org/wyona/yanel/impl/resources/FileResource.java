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

import org.wyona.yanel.core.Path;
import org.wyona.yanel.core.Resource;
import org.wyona.yanel.core.api.attributes.ViewableV1;
import org.wyona.yanel.core.attributes.viewable.View;
import org.wyona.yanel.core.attributes.viewable.ViewDescriptor;

import org.wyona.yarep.core.Repository;
import org.wyona.yarep.core.RepositoryFactory;

import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Category;

/**
 *
 */
public class FileResource extends Resource implements ViewableV1 {

    private static Category log = Category.getInstance(FileResource.class);

    /**
     *
     */
    public FileResource() {
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
        View defaultView = new View();
        try {
            org.wyona.yarep.util.RepoPath rp = new org.wyona.yarep.util.YarepUtil().getRepositoryPath(new org.wyona.yarep.core.Path(path.toString()), new RepositoryFactory());
            defaultView.setInputStream(rp.getRepo().getInputStream(new org.wyona.yarep.core.Path(rp.getPath().toString())));

            defaultView.setMimeType(getMimeType(path, viewId));
        } catch(Exception e) {
            log.error(e);
        }

        return defaultView;
    }

    /**
     *
     */
    private String getMimeType(Path path, String viewId) {
        String mimeType = null;
        try {
            // TODO: Get yanel RTI yarep properties file name from framework resp. use MapFactory ...!
            org.wyona.yarep.util.RepoPath rpRTI = new org.wyona.yarep.util.YarepUtil().getRepositoryPath(new org.wyona.yarep.core.Path(path.toString()), new RepositoryFactory("yanel-rti-yarep.properties"));
            java.io.BufferedReader br = new java.io.BufferedReader(rpRTI.getRepo().getReader(new org.wyona.yarep.core.Path(new Path(rpRTI.getPath().toString()).getRTIPath().toString())));
            br.readLine();
            mimeType = br.readLine();
            if (mimeType != null) {
                if (mimeType.indexOf("mime-type:") == 0) {
                    mimeType = mimeType.substring(11);
                    log.info("*" + mimeType + "*");
                    // TODO: Maybe validate mime-type based on mime.types config ...
                    return mimeType;
                }
            }
        } catch(Exception e) {
            log.warn(e);
        }

        // TODO: Load config mime.types ...
        String suffix = path.getSuffix();
        if (suffix != null) {
            log.debug("SUFFIX: " + suffix);
            if (suffix.equals("html")) {
                mimeType = "text/html";
            } else if (suffix.equals("xhtml")) {
                mimeType = "application/xhtml+xml";
            } else if (suffix.equals("xml")) {
                mimeType = "application/xml";
            } else if (suffix.equals("css")) {
                mimeType = "text/css";
            } else if (suffix.equals("png")) {
                mimeType = "image/png";
            } else if (suffix.equals("jpg")) {
                mimeType = "image/jpeg";
	    } else if (suffix.equals("gif")) {
                mimeType = "image/gif";
	    } else if (suffix.equals("pdf")) {
                mimeType = "application/pdf";
	    } else if (suffix.equals("doc")) {
                mimeType = "application/msword";
	    } else if (suffix.equals("odt")) {
                mimeType = "application/vnd.oasis.opendocument.text";
	    } else if (suffix.equals("sxc")) {
                mimeType = "application/vnd.sun.xml.calc";
            } else {
                mimeType = "application/octet-stream";
            }
        } else {
            log.warn("mime-type will be set to application/octet-stream, because no suffix for " + path);
            mimeType = "application/octet-stream";
        }
        return mimeType;
    }

    /**
     *
     */
    public View getView(HttpServletRequest request, String viewId) {
        return getView(new Path(request.getServletPath()), viewId);
    }
}
