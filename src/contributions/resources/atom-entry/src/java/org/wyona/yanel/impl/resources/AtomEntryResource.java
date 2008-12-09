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
import org.wyona.yanel.core.api.attributes.ModifiableV2;
import org.wyona.yanel.core.api.attributes.ViewableV2;
import org.wyona.yanel.core.attributes.viewable.View;
import org.wyona.yanel.core.attributes.viewable.ViewDescriptor;
import org.wyona.yanel.core.util.PathUtil;

import org.wyona.yarep.core.Repository;
import org.wyona.yarep.core.RepositoryFactory;

import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.sax.SAXSource;
import javax.xml.transform.stream.StreamSource;
import javax.xml.transform.stream.StreamResult;

import java.io.InputStream;
import java.io.OutputStream;
import java.io.Reader;
import java.io.Writer;

import org.apache.abdera.model.Document;
import org.apache.abdera.model.Entry;
import org.apache.abdera.parser.Parser;
import org.apache.log4j.Category;

/**
 *
 */
public class AtomEntryResource extends Resource implements ViewableV2, ModifiableV2 {

    private static Category log = Category.getInstance(AtomEntryResource.class);

    /**
     *
     */
    public AtomEntryResource() {
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
        String mimeType = getMimeType(viewId);
        defaultView.setMimeType(mimeType);

        try {
            if (mimeType.equals("application/xml")) {
                defaultView.setInputStream(getContentXML());
                return defaultView;
	    } else if (mimeType.equals("application/xhtml+xml") || mimeType.equals("text/html")) {
                TransformerFactory tf = TransformerFactory.newInstance();
                //tf.setURIResolver(null);
                Transformer transformer = tf.newTransformer(new StreamSource(getRealm().getRepository().getInputStream(new org.wyona.yarep.core.Path(getXSLTPath().toString()))));
                transformer.setParameter("yanel.path.name", org.wyona.commons.io.PathUtil.getName(getPath()));
                transformer.setParameter("yanel.path", getPath());
                transformer.setParameter("yanel.back2context", PathUtil.backToContext(realm, getPath()));
                transformer.setParameter("yarep.back2realm", PathUtil.backToRealm(getPath()));
                // TODO: Is this the best way to generate an InputStream from an OutputStream?
                java.io.ByteArrayOutputStream baos = new java.io.ByteArrayOutputStream();


                org.xml.sax.XMLReader xmlReader = org.xml.sax.helpers.XMLReaderFactory.createXMLReader();
                xmlReader.setEntityResolver(new org.apache.xml.resolver.tools.CatalogResolver());
                transformer.transform(new SAXSource(xmlReader, new org.xml.sax.InputSource(getContentXML())), new StreamResult(baos));
                defaultView.setInputStream(new java.io.ByteArrayInputStream(baos.toByteArray()));

                return defaultView;
            } else {
                log.debug("Mime-Type: " + mimeType);
                defaultView.setInputStream(getContentXML());
                //defaultView.setInputStream(rp.getRepo().getInputStream(new org.wyona.yarep.core.Path(rp.getPath().toString())));
            }
        } catch(Exception e) {
            log.error(e);
        }

        return defaultView;
    }

    /**
     *
     */
    private InputStream getContentXML() throws Exception {
        return getRealm().getRepository().getInputStream(new org.wyona.yarep.core.Path(getPath().toString()));
    }

    /**
     *
     */
    public String getMimeType(String viewId) {
        String mimeType = getRTI().getProperty("mime-type");
        if (mimeType != null) return mimeType;

        String suffix = org.wyona.commons.io.PathUtil.getSuffix(getPath());
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
        return getRealm().getRepository().getReader(new org.wyona.yarep.core.Path(getPath()));
    }

    /**
     *
     */
    public InputStream getInputStream() throws Exception {
        return getRealm().getRepository().getInputStream(new org.wyona.yarep.core.Path(getPath()));
    }

    /**
     *
     */
    public Writer getWriter() {
        log.error("Not implemented yet!");
        return null;
    }

    /**
     *
     */
    public OutputStream getOutputStream() throws Exception {
        return getRealm().getRepository().getOutputStream(new org.wyona.yarep.core.Path(getPath()));
    }

    /**
     *
     */
    public void write(InputStream in) throws Exception {
        org.apache.abdera.Abdera abdera = new org.apache.abdera.Abdera();
        Parser parser = abdera.getParser();
        Document doc = parser.parse(in);
        Entry entry = (Entry) doc.getRoot();
        java.util.Date date = new java.util.Date();
        entry.setUpdated(date);
        java.util.Date publishedDate = entry.getPublished();
        if (publishedDate == null) {
            log.error("No published date!");
            entry.setPublished(date);
        }

        Repository repo = getRealm().getRepository();
        org.wyona.commons.io.Path atomEntryPath = new org.wyona.commons.io.Path(getPath());
        if (!repo.existsNode(getPath())) {
            // TODO: Create node recursively in case parent does not exist!
            repo.getNode(atomEntryPath.getParent().toString()).addNode(atomEntryPath.getName(), org.wyona.yarep.core.NodeType.RESOURCE);
        }
        OutputStream out = repo.getOutputStream(new org.wyona.yarep.core.Path(getPath()));

        org.apache.abdera.writer.Writer writer = abdera.getWriter();
        writer.writeTo(entry, out);

        log.error("DEBUG: Atom entry has been written: " + getPath());
    }

    /**
     * Get last modified
     */
    public long getLastModified() throws Exception {
        return getRealm().getRepository().getLastModified(new org.wyona.yarep.core.Path(getPath()));
    }

    /**
     *
     */
    private String getXSLTPath() {
        String xslt = getRTI().getProperty("xslt");
        if (xslt != null) {
            return xslt;
        }
        log.error("No XSLT Path within: " + PathUtil.getRTIPath(getPath()));
        return null;
    }

    /**
     *
     */
    public boolean delete() throws Exception {
        return getRealm().getRepository().delete(new org.wyona.yarep.core.Path(getPath()));
    }
    
    protected RepositoryFactory getRepositoryFactory() {
        return yanel.getRepositoryFactory("DefaultRepositoryFactory");
    }
    
    public boolean exists() throws Exception {
        log.warn("Not implemented yet!");
        return true;
    }

    /**
     * 
     */
     public long getSize() throws Exception {
         return getRealm().getRepository().getSize(new Path(getPath()));
     }
       
}
