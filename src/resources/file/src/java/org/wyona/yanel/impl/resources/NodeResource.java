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
import org.wyona.yanel.core.Topic;
import org.wyona.yanel.core.api.attributes.CreatableV2;
import org.wyona.yanel.core.api.attributes.ModifiableV2;
import org.wyona.yanel.core.api.attributes.VersionableV2;
import org.wyona.yanel.core.api.attributes.ViewableV2;
import org.wyona.yanel.core.attributes.viewable.View;
import org.wyona.yanel.core.attributes.viewable.ViewDescriptor;

import org.wyona.yarep.core.Repository;
import org.wyona.yarep.core.RepositoryFactory;
import org.wyona.yarep.util.RepoPath;

import javax.servlet.http.HttpServletRequest;

import java.io.InputStream;
import java.io.OutputStream;
import java.io.Reader;
import java.io.Writer;

import org.apache.log4j.Category;

/**
 * Generic Node Resource
 */
public class NodeResource extends Resource implements ViewableV2, ModifiableV2, VersionableV2 {
//public class NodeResource extends Resource implements ViewableV2, ModifiableV2, VersionableV2, CreatableV2 {

    private static Category log = Category.getInstance(NodeResource.class);

    /**
     *
     */
    public NodeResource() {
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
    public View getView(String viewId) throws Exception {
        View defaultView = new View();
        
        defaultView.setInputStream(getRealm().getRepository().getInputStream(getPath()));
        defaultView.setMimeType(getMimeType(viewId));

        return defaultView;
    }

    /**
     *
     */
    private String getMimeType(String viewId) throws Exception {
        
        String mimeType = getRTI().getProperty("mime-type");
        
        if (mimeType != null) return mimeType;

        // TODO: Load config mime.types ...
        String suffix = getPath().getSuffix();
        if (suffix != null) {
            log.debug("SUFFIX: " + suffix);
            if (suffix.equals("html")) {
                mimeType = "text/html";
            } else if (suffix.equals("htm")) {
                mimeType = "text/html";
            } else if (suffix.equals("xhtml")) {
                mimeType = "application/xhtml+xml";
            } else if (suffix.equals("xml")) {
                mimeType = "application/xml";
            } else if (suffix.equals("css")) {
                mimeType = "text/css";
            } else if (suffix.equals("js")) {
                mimeType = "application/x-javascript";
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
	    } else if (suffix.equals("xpi")) {
                mimeType = "application/x-xpinstall";
	    } else if (suffix.equals("txt")) {
                mimeType = "text/plain";
	    } else if (suffix.equals("mov")) {
                mimeType = "video/quicktime";
            } else {
                log.warn("Could not determine mime-type from suffix (suffix: " + suffix + ")!");
                mimeType = "application/octet-stream";
            }
        } else {
            log.warn("mime-type will be set to application/octet-stream, because no suffix for " + getPath());
            mimeType = "application/octet-stream";
        }
        return mimeType;
    }

    /**
     *
     */
    public Reader getReader() throws Exception {
        return getRealm().getRepository().getReader(getPath());
    }

    /**
     *
     */
    public InputStream getInputStream() throws Exception {
        return getRealm().getRepository().getInputStream(getPath());
    }

    /**
     *
     */
    public Writer getWriter() throws Exception {
        log.error("Not implemented yet!");
        return null;
    }

    /**
     *
     */
    public OutputStream getOutputStream() throws Exception {
        return getRealm().getRepository().getOutputStream(getPath());
    }

    /**
     *
     */
    public void write(InputStream in) throws Exception {
        log.warn("Not implemented yet!");
    }

    /**
     *
     */
    public long getLastModified() throws Exception {
        return getRealm().getRepository().getLastModified(getPath());
    }

    /**
     * Delete data of node resource
     */
    public boolean delete() throws Exception {
        return getRealm().getRepository().delete(getPath());
    }
    
    /**
     *
     */
    public String[] getRevisions() throws Exception {
        return getRealm().getRepository().getRevisions(getPath());
    }
    
    public boolean exists() throws Exception {
        log.warn("Not implemented yet!");
        return true; 
    }

    /**
     * 
     */
    public long getSize() throws Exception {
         return getRealm().getRepository().getSize(getPath());
    }

    /**
     *
     */
    public Object getProperty(String name) {
        log.warn("No implemented yet!");
        return null;
    }

    /**
     *
     */
    public String[] getPropertyNames() {
        log.warn("No implemented yet!");
        return null;
    }

    /**
     *
     */
    public void setProperty(String name, Object value) {
        log.warn("No implemented yet!");
    }

    /**
     *
     */
    public void create(HttpServletRequest request) {
        log.warn("No implemented yet!");
    }

    /**
     *
     */
    public java.util.HashMap createRTIProperties(HttpServletRequest request) {
        log.warn("No implemented yet!");
        return null;
    }

    /**
     *
     */
    public String getPropertyType(String name) {
        log.warn("No implemented yet!");
        return null;
    }
}
