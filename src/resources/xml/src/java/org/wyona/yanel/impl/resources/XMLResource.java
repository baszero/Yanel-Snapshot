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
import org.wyona.yanel.core.Yanel;
import org.wyona.yanel.core.api.attributes.ModifiableV2;
import org.wyona.yanel.core.api.attributes.VersionableV2;
import org.wyona.yanel.core.api.attributes.ViewableV1;
import org.wyona.yanel.core.api.attributes.ViewableV2;
import org.wyona.yanel.core.attributes.viewable.View;
import org.wyona.yanel.core.attributes.viewable.ViewDescriptor;

import org.wyona.yanel.core.transformation.I18nTransformer;
import org.wyona.yanel.core.util.ResourceAttributeHelper;

import org.wyona.yarep.core.Repository;
import org.wyona.yarep.core.RepositoryFactory;
import org.wyona.yarep.util.RepoPath;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import javax.xml.parsers.SAXParser;
import javax.xml.parsers.SAXParserFactory;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.sax.SAXSource;
import javax.xml.transform.stream.StreamSource;
import javax.xml.transform.stream.StreamResult;

import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.Reader;
import java.io.Writer;
import java.util.jar.JarEntry;
import java.util.jar.JarInputStream;

import org.apache.log4j.Category;

/**
 *
 */
public class XMLResource extends Resource implements ViewableV2, ModifiableV2, VersionableV2 {

    private static Category log = Category.getInstance(XMLResource.class);

    /**
     *
     */
    public XMLResource() {
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
    public View getView(String viewId) {
        View defaultView = new View();
        String mimeType = getMimeType(path, viewId);
        defaultView.setMimeType(mimeType);

        String yanelPath = getRTI().getProperty("yanel-path");
        //if (yanelPath == null) yanelPath = path.toString();

        Path xsltPath = getXSLTPath(path);

        try {
            Repository repo = getRealm().getRepository();

            if (xsltPath != null) {
                TransformerFactory tf = TransformerFactory.newInstance();
                //tf.setURIResolver(null);
                Transformer transformer = tf.newTransformer(new StreamSource(repo.getInputStream(xsltPath)));
                transformer.setParameter("yanel.path.name", path.getName());
                transformer.setParameter("yanel.path", path.toString());
                transformer.setParameter("yanel.back2context", backToRoot(path, ""));
                transformer.setParameter("yarep.back2realm", backToRoot(path, ""));
                // TODO: Is this the best way to generate an InputStream from an OutputStream?
                java.io.ByteArrayOutputStream baos = new java.io.ByteArrayOutputStream();

                org.xml.sax.XMLReader xmlReader = org.xml.sax.helpers.XMLReaderFactory.createXMLReader();
                xmlReader.setEntityResolver(new org.apache.xml.resolver.tools.CatalogResolver());
                transformer.transform(new SAXSource(xmlReader, new org.xml.sax.InputSource(getContentXML(repo, yanelPath))), new StreamResult(baos));
                
                InputStream inputStream = new ByteArrayInputStream(baos.toByteArray());
/*
                I18nTransformer i18nTransformer = new I18nTransformer("global", language);
                SAXParser saxParser = SAXParserFactory.newInstance().newSAXParser();
                saxParser.parse(inputStream, i18nTransformer);

                defaultView.setInputStream(i18nTransformer.getInputStream());
*/
                defaultView.setInputStream(inputStream);

                return defaultView;
            } else {
                log.debug("Mime-Type: " + mimeType);
                defaultView.setInputStream(getContentXML(repo, yanelPath));
            }
        } catch(Exception e) {
            log.error(e);
        }

        return defaultView;
    }

   /**
    *
    */
   public View getView(HttpServletRequest request, HttpServletResponse response, String viewid) {
       return getView(viewid);
   
   }

    private String getLanguage() {
        String language = "en";
        try {
            language = getRequest().getParameter("yanel.meta.language");
        } catch(Exception e) {
            //use fallback language
            language = "en";
        }
        if(language != null && language.length() > 0) return language;
        return "en";
    }


    /**
     *
     */
    private InputStream getContentXML(Repository repo, String yanelPath) throws Exception {
        if (yanelPath != null) {
            log.debug("Yanel Path: " + yanelPath);
            Resource res = yanel.getResourceManager().getResource(getRequest(), getResponse(), 
                    getRealm(), new Path(yanelPath));
            if (ResourceAttributeHelper.hasAttributeImplemented(res, "Viewable", "1")) {
                // TODO: Pass the request ...
                String viewV1path = getRealm().getMountPoint() + yanelPath.substring(1);
                log.debug("including document: " + viewV1path);
                View view = ((ViewableV1) res).getView(new Path(viewV1path), null);
                if (view.getMimeType().indexOf("xml") >= 0) {
                    // TODO: Shall the mime-type be transfered?
                    return view.getInputStream();
                } else {
                    log.warn("No XML like mime-type: " + path);
                }
            } else {
                log.warn("Resource is not ViewableV1: " + path);
            }
        }
        
        return repo.getInputStream(path);
    }

    /**
     * Get mime type
     */
    private String getMimeType(Path path, String viewId) {
        String mimeType = getRTI().getProperty("mime-type");
        if (mimeType != null) return mimeType;

        String suffix = path.getSuffix();
        if (suffix != null) {
            log.debug("SUFFIX: " + suffix);
            if (suffix.equals("html")) {
                //mimeType = "text/html";
                mimeType = "application/xhtml+xml";
            } else if (suffix.equals("xhtml")) {
                mimeType = "application/xhtml+xml";
            } else if (suffix.equals("xml")) {
                mimeType = "application/xml";
            } else {
                mimeType = "application/xml";
            }
        } else {
            mimeType = "application/xml";
        }
        return mimeType;
    }

    /**
     *
     */
    public Reader getReader() throws Exception {
        return getRealm().getRepository().getReader(path);
    }

    /**
     *
     */
    public InputStream getInputStream() throws Exception {
        return getRealm().getRepository().getInputStream(path);
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
        return getRealm().getRepository().getOutputStream(path);
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
        return getRealm().getRepository().getLastModified(path);
    }

    /**
     * Get XSLT path
     */
    private Path getXSLTPath(Path path) {
        String xsltPath = getRTI().getProperty("xslt");
        if (xsltPath != null) return new Path(xsltPath);
        log.info("No XSLT Path within: " + path);
        return null;
    }

    /**
     *
     */
    private String backToRoot(Path path, String backToRoot) {
        org.wyona.commons.io.Path parent = path.getParent();
        if (parent != null && !isRoot(parent)) {
            return backToRoot(new Path(parent.toString()), backToRoot + "../");
        }
        return backToRoot;
    }

    /**
     *
     */
    private boolean isRoot(org.wyona.commons.io.Path path) {
        if (path.toString().equals(File.separator)) return true;
        return false;
    }

    /**
     *
     */
    public boolean delete() throws Exception {
        return getRealm().getRepository().delete(path);
    }

    public String[] getRevisions() throws Exception {
        return getRealm().getRepository().getRevisions(path);
    }

    public boolean exists() throws Exception {
        log.warn("Not implemented yet!");
        return true; 
    }

    public long getSize() throws Exception {
        // TODO not implemented yet
        log.error("Method is not implemented yet");
        return -1;
    }
}
