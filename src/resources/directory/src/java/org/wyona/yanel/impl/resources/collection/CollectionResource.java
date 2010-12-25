/*
 * Copyright 2007 Wyona
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

package org.wyona.yanel.impl.resources.collection;

import org.wyona.yanel.core.Environment;
import org.wyona.yanel.core.ResourceConfiguration;
import org.wyona.yanel.core.api.attributes.CreatableV2;
import org.wyona.yanel.core.api.attributes.ViewableV2;
import org.wyona.yanel.core.attributes.viewable.View;
import org.wyona.yanel.impl.resources.BasicXMLResource;

import javax.servlet.http.HttpServletRequest;

import org.wyona.yarep.core.Repository;
import org.wyona.yarep.core.Node;
import org.wyona.yanel.core.util.DateUtil;
import org.wyona.yanel.core.util.PathUtil;

import org.apache.log4j.Category;

import java.io.File;
import java.io.InputStream;

import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.stream.StreamSource;
import javax.xml.transform.stream.StreamResult;

import java.util.Calendar;

/**
 *
 */
public class CollectionResource extends BasicXMLResource implements ViewableV2, CreatableV2 {

    private static Category log = Category.getInstance(CollectionResource.class);

    private Environment environment;

    /**
     * @see org.wyona.yanel.core.api.attributes.ViewableV2#getView(java.lang.String)
     */
    public View getView(String viewId) throws Exception {
        return getXMLView(viewId, getContentXML());
    }

    /**
     * Get collection (directory listing) as XML
     */
    private InputStream getContentXML() throws Exception {
        String yanelPath = getResourceConfigProperty("yanel-path");
        Repository repo = getRealm().getRepository();
        environment = getEnvironment();
        StringBuilder sb = new StringBuilder("<?xml version=\"1.0\"?>");
        String path = getPath();
        try {
            if (yanelPath != null) {
                path = yanelPath;
            }
            log.debug("Selected path: " + path);

            // TODO: This doesn't seem to work ... (check on Yarep ...)
            if (repo.getNode(path).isResource()) {
                log.warn("Path is a resource instead of a collection: " + path);
                // p = p.getParent();
            }
            // TODO: Implement org.wyona.yarep.core.Path.getParent()
            if (!repo.getNode(path).isCollection()) {
                log.warn("Path is not a collection: " + path);
                log.warn("Use parent of path: " + repo.getNode(path).getParent().getPath());
            }
            // TODO: Add realm prefix, e.g. realm-prefix="ulysses-demo"
            // NOTE: The schema is according to
            // http://cocoon.apache.org/2.1/userdocs/directory-generator.html
            sb.append("<dir:directory yanel:repository-configuration-file=\"" + repo.getConfigFile() + "\" yanel:path=\"" + getPath() + "\" dir:name=\"" + repo.getNode(path).getName() + "\" dir:path=\"" + path + "\" xmlns:dir=\"http://apache.org/cocoon/directory/2.0\" xmlns:yanel=\"http://www.wyona.org/yanel/resource/directory/1.0\">");
            // TODO: Do not show the children with suffix .yanel-rti resp. make
            // this configurable!
            // NOTE: Do not hardcode the .yanel-rti, but rather use
            // Path.getRTIPath ...
            Node[] children = repo.getNode(path).getNodes();
            Calendar calendar = Calendar.getInstance();
            if (children != null) {
                for (int i = 0; i < children.length; i++) {
                    if (children[i].isResource()) {
                        calendar.setTimeInMillis(children[i].getLastModified());
                        String lastModified = DateUtil.format(calendar.getTime());
                        sb.append("<dir:file path=\"" + children[i].getPath() + "\" name=\"" + children[i].getName() + "\" lastModified=\"" + children[i].getLastModified() + "\" date=\"" + lastModified + "\" size=\"" + children[i].getSize() + "\"/>");
                    } else if (children[i].isCollection()) {
                        sb.append("<dir:directory path=\"" + children[i].getPath() + "\" name=\"" + children[i].getName() + "\"/>");
                    } else {
                        sb.append("<yanel:exception yanel:path=\"" + children[i] + "\"/>");
                    }
                }
                if (children.length < 1) {
                    sb.append("<yanel:no-children/>");
                }
            } else {
                sb.append("<yanel:no-children/>");
            }
        } catch (Exception e) {
            log.error(e.getMessage(), e);
        }
        sb.append("</dir:directory>");
        return new java.io.StringBufferInputStream(sb.toString());
    }

    public View getXMLView(String viewId, InputStream xmlInputStream) throws Exception {
        if (viewId == null || !viewId.equals("source")) {
            TransformerFactory tfactory = TransformerFactory.newInstance();
            Transformer transformerIntern = tfactory.newTransformer(getXSLTStreamSource());

            transformerIntern.setParameter("yanel.path.name", org.wyona.commons.io.PathUtil.getName(getPath()));
            transformerIntern.setParameter("yanel.path", getPath().toString());
            transformerIntern.setParameter("yanel.back2context", backToContext()+backToRoot());
            transformerIntern.setParameter("yarep.back2realm", backToRoot());
            transformerIntern.setParameter("yarep.parent", getParent(getPath()));
            transformerIntern.setParameter("yanel.htdocs", PathUtil.getGlobalHtdocsPath(this));

            java.io.ByteArrayOutputStream baos = new java.io.ByteArrayOutputStream();
            transformerIntern.transform(new StreamSource(xmlInputStream), new StreamResult(baos));

            return super.getXMLView(viewId, new java.io.ByteArrayInputStream(baos.toByteArray()));
        }
        return super.getXMLView(viewId, xmlInputStream);

    }

    /**
     * Gets the names of the i18n message catalogues used for the i18n transformation.
     * Looks for an rc config property named 'i18n-catalogue'. Defaults to 'global'.
     * @return i18n catalogue name
     */
    protected String[] getI18NCatalogueNames() throws Exception {
        String[] array = {"global","directory"};
        return array;
    }

    /**
     *
     */
    public boolean exists() throws Exception {
        log.warn("Not implemented yet!");
        return true;
    }

    /**
     *
     */
    public long getSize() throws Exception {
        // TODO: not implemented yet
        log.warn("TODO: Method is not implemented yet");
        return -1;
    }

    /**
     *
     */
    private StreamSource getXSLTStreamSource() throws Exception {
        String customDefaultXSLT = getResourceConfigProperty("default-xslt");
        if (customDefaultXSLT != null) {
            return new StreamSource(getRealm().getRepository().getNode(customDefaultXSLT).getInputStream());
        }

        File defaultXSLTFile = org.wyona.commons.io.FileUtil.file(rtd.getConfigFile().getParentFile().getAbsolutePath(), "xslt" + File.separator + "dir2xhtml.xsl");
        if (log.isDebugEnabled()) log.debug("XSLT file: " + defaultXSLTFile);
        return new StreamSource(defaultXSLTFile);
    }

    /**
     * Get mime type
     */
    public String getMimeType(String viewId) throws Exception {
        String mimeType = null;
        ResourceConfiguration rc = getConfiguration();
        if (rc != null) {
            mimeType = rc.getProperty("mime-type");
        } else {
            mimeType = getRTI().getProperty("mime-type");
        }
        if (mimeType != null) return mimeType;

        // NOTE: Assuming fallback re dir2xhtml.xsl ...
        return "application/xhtml+xml";
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

        // TODO: Wouldn't it make more sense to use "tokens" and use a URL rewriter at the very end (also see the portlet specificatio http://jcp.org/aboutJava/communityprocess/review/jsr168/)
        String resourceContainerPath = environment.getResourceContainerPath();
        if (log.isDebugEnabled()) {
            log.debug("Resource container path: " + resourceContainerPath);
            log.debug("Resource path: " + getPath());
        }
        if (resourceContainerPath != null) {
            if (resourceContainerPath.endsWith("/") && !resourceContainerPath.equals("/")) {
                steps = resourceContainerPath.split("/").length - 1;
            } else {
                steps = resourceContainerPath.split("/").length - 2;
            }
        } else {
            if (getPath().endsWith("/") && !getPath().equals("/")) {
                steps = getPath().split("/").length - 1;
            } else {
                steps = getPath().split("/").length - 2;
            }
        }

        for (int i = 0; i < steps; i++) {
            backToRoot = backToRoot + "../";
        }
        return backToRoot;
    }

    /**
     * @return a String ../ if path ends with a trailing slash. Otherwise a String ./
     */
    private String getParent(String path) {
        String parentPath = "./";
        if (path.endsWith("/")) {
            parentPath = "../";
        }
        return parentPath;
    }

    /**
     * @see
     */
   public void create(HttpServletRequest request) {
       try {
           Repository repo = getRealm().getRepository();
           org.wyona.yanel.core.util.YarepUtil.addNodes(repo, getPath().toString(), org.wyona.yarep.core.NodeType.COLLECTION);
       } catch (Exception e) {
           log.error(e.getMessage(), e);
       }
   }

   /**
    *
    */
   public java.util.HashMap createRTIProperties(HttpServletRequest request) {
       java.util.HashMap map = new java.util.HashMap();
       map.put("xslt", request.getParameter("rp.xslt"));
       map.put("mime-type", request.getParameter("rp.mime-type"));
       return map;
   }

   public String getCreateName(String suggestedName) {
       return suggestedName;
   }

   /**
    *
    */
   public String getPropertyType(String name) {
       log.warn("Not implemented yet!");
       return null;
   }

   /**
    *
    */
   public Object getProperty(String name) {
       log.warn("Not implemented yet!");
       return null;
   }

   /**
    *
    */
   public String[] getPropertyNames() {
       log.warn("Not implemented yet!");
       return null;
   }

   /**
    *
    */
   public void setProperty(String name, Object value) {
       log.warn("Not implemented yet!");
   }
}
