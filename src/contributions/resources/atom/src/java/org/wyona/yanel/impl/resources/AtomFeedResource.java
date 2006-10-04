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

import javax.servlet.http.HttpServletRequest;

import org.wyona.yarep.core.NoSuchNodeException;
import org.wyona.yarep.core.Repository;
import org.wyona.yarep.core.RepositoryFactory;
import org.wyona.yarep.util.RepoPath;

import org.apache.abdera.model.AtomDate;
import org.apache.abdera.model.Entry;
import org.apache.log4j.Category;

import java.io.File;
import java.util.Date;
import java.util.Vector;

import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.stream.StreamSource;
import javax.xml.transform.stream.StreamResult;

/**
 *
 */
public class AtomFeedResource extends Resource implements ViewableV1 {

    private static Category log = Category.getInstance(AtomFeedResource.class);

    Date feedUpdated = null;

    /**
     *
     */
    public AtomFeedResource() {
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
    public View getView(Path path, String viewId, String requestURL) {
        View defaultView = new View();
	StringBuffer sb = new StringBuffer("<?xml version=\"1.0\"?>");

	//sb.append("<?xml-stylesheet type=\"text/xsl\" href=\"yanel/resources/directory/xslt/dir2xhtml.xsl\"?>");

        org.wyona.yarep.core.Path entriesPath = getEntriesPath(path);

        Repository contentRepo = null;
        try {
            RepoPath rp = new org.wyona.yarep.util.YarepUtil().getRepositoryPath(new org.wyona.yarep.core.Path(path.toString()), new RepositoryFactory());
            contentRepo = rp.getRepo();

            // TODO: Do not show the children with suffix .yanel-rti resp. make this configurable!
	    // NOTE: Do not hardcode the .yanel-rti, but rather use Path.getRTIPath ...
            org.wyona.yarep.core.Path[] children = contentRepo.getChildren(entriesPath);

            Vector orderedEntries = new Vector();
            org.apache.abdera.Abdera abdera = new org.apache.abdera.Abdera();
            org.apache.abdera.parser.Parser parser = abdera.getParser();
            if (parser != null) {
                for (int i = 0; i < children.length; i++) {
                    if (contentRepo.isResource(children[i])) {
                        org.apache.abdera.model.Document doc = parser.parse(contentRepo.getInputStream(children[i]));
                        if (doc != null) {
                            try {
                                Entry entry = (Entry) doc.getRoot();
                                if (entry != null) {
                                    entry.addLink(children[i].getName(), "edit");
                                    orderedEntries = addEntry(orderedEntries, entry);
                                } else {
                                    log.error("Atom entry is null!" + children[i]);
                                }
                            } catch(ClassCastException e) {
                                log.warn(e + ": Does not seem to be an atom entry: " + children[i]);
                            }
                        } else {
                            log.error("Atom doc is null!" + children[i]);
                        }
                    }
                }
            } else {
                log.error("Atom Parser is null!");
            }

            // TODO: Add realm prefix, e.g. realm-prefix="ulysses-demo"
            // NOTE: The schema is according to http://cocoon.apache.org/2.1/userdocs/directory-generator.html
	    sb.append("<atom:feed yanel:path=\"" + path + "\" dir:name=\"" + entriesPath.getName() + "\" dir:path=\"" + entriesPath + "\" xmlns:dir=\"http://apache.org/cocoon/directory/2.0\" xmlns:yanel=\"http://www.wyona.org/yanel/resource/directory/1.0\" xmlns:atom=\"http://www.w3.org/2005/Atom\">");

            sb.append("<atom:title>" + getFeedTitle(path) + "</atom:title>");
            log.error("DEBUG: Realm: " + getYanel().getMap().getRealm(path).getProxyHostName());
            sb.append("<atom:link rel=\"self\" href=\"" + requestURL + "\"/>");
            // TODO: Calculate date ...
            sb.append("<atom:updated>" + AtomDate.format(feedUpdated) + "</atom:updated>");
            sb.append("<atom:author><atom:name>" + getProperty(path, "author", "WARNING: No author specified!") + "</atom:name></atom:author>");
            sb.append("<atom:id>urn:uuid:TODO</atom:id>");

            for (int i = 0; i < orderedEntries.size(); i++) {
                Entry entry = (Entry) orderedEntries.elementAt(i);

	        sb.append("<dir:file name=\"" + entry.getLink("edit").getHref() + "\"/>");

                java.io.StringWriter sw = new java.io.StringWriter();
                //org.apache.abdera.writer.Writer writer = org.apache.abdera.writer.Writer.INSTANCE;
                //writer.writeTo(entry, sw);
                entry.writeTo(sw);
                sb.append(sw.toString());
            }
        } catch(Exception e) {
            log.error(e, e);
        }
	sb.append("</atom:feed>");

        if (viewId != null && viewId.equals("source")) {
            defaultView.setMimeType("application/xml");
	    defaultView.setInputStream(new java.io.StringBufferInputStream(sb.toString()));
            return defaultView;
        }

        if (viewId != null && viewId.equals("atom")) {
            defaultView.setMimeType("application/atom+xml");
	    defaultView.setInputStream(new java.io.StringBufferInputStream(sb.toString()));
            return defaultView;
        }

        try {
            Transformer transformer = TransformerFactory.newInstance().newTransformer(getXSLTStreamSource(path, contentRepo));
            transformer.setParameter("yanel.path.name", path.getName());
            transformer.setParameter("yanel.path", path.toString());
            //transformer.setParameter("yanel.back2context", backToRoot(path, ""));
            //transformer.setParameter("yarep.back2realm", backToRoot(new org.wyona.yanel.core.Path(rp.getPath().toString()), ""));
            // TODO: Is this the best way to generate an InputStream from an OutputStream?
            java.io.ByteArrayOutputStream baos = new java.io.ByteArrayOutputStream();
            transformer.transform(new StreamSource(new java.io.StringBufferInputStream(sb.toString())), new StreamResult(baos));
            defaultView.setInputStream(new java.io.ByteArrayInputStream(baos.toByteArray()));
            defaultView.setMimeType(getMimeType(path));
	    defaultView.setInputStream(new java.io.ByteArrayInputStream(baos.toByteArray()));
        } catch (Exception e) {
            log.error(e);
        }

        return defaultView;
    }

    /**
     *
     */
    public View getView(Path path, String viewId) {
        return getView(path, viewId, null);
    }

    /**
     *
     */
    public View getView(HttpServletRequest request, String viewId) {
        // TODO: Patch requestURL with proxy config (see also YanelServlet ...)
        return getView(new Path(request.getServletPath()), viewId, request.getRequestURL().toString());
    }

    /**
     *
     */
    private StreamSource getXSLTStreamSource(Path path, Repository repo) throws NoSuchNodeException {
        Path xsltPath = getXSLTPath(path);
        if(xsltPath != null) {
            return new StreamSource(repo.getInputStream(new org.wyona.yarep.core.Path(getXSLTPath(path).toString())));
        } else {
            File xsltFile = org.wyona.commons.io.FileUtil.file(rtd.getConfigFile().getParentFile().getAbsolutePath(), "xslt" + File.separator + "atomfeed2xhtml.xsl");
            log.debug("XSLT file: " + xsltFile);
            return new StreamSource(xsltFile);
        }
    }

    /**
     *
     */
    private Path getXSLTPath(Path path) {
        String xsltPath = getProperty(path, "xslt", null);
        if (xsltPath != null) return new Path(xsltPath);
        log.info("No XSLT Path within: " + path);
        return null;
    }

    /**
     *
     */
    private String getMimeType(Path path) {
        String mimeType = getProperty(path, "mime-type", null);
        if (mimeType != null) return mimeType;

        // NOTE: Assuming fallback re dir2xhtml.xsl ...
        return "application/xhtml+xml";
    }

    /**
     *
     */
    private String getFeedTitle(Path path) {
        return getProperty(path, "feed-title", "WARNING: No feed title specified!");
    }

    /**
     * Get property from RTI
     */
    private String getProperty(Path path, String name, String defaultValue) {
        String propertyValue = defaultValue;
        try {
            // TODO: Get yanel RTI yarep properties file name from framework resp. use MapFactory ...!
            RepoPath rpRTI = new org.wyona.yarep.util.YarepUtil().getRepositoryPath(new org.wyona.yarep.core.Path(path.toString()), new RepositoryFactory("yanel-rti-yarep.properties"));
            java.io.BufferedReader br = new java.io.BufferedReader(rpRTI.getRepo().getReader(new org.wyona.yarep.core.Path(new Path(rpRTI.getPath().toString()).getRTIPath().toString())));

            String property = null;
            while ((property = br.readLine()) != null) {
                if (property.indexOf(name + ":") == 0) {
                    propertyValue = property.substring(name.length() + 2);
                    log.info("*" + propertyValue + "*");
                    return propertyValue;
                }
            }
        } catch(Exception e) {
            log.warn(e);
        }

        return propertyValue;
    }

    /**
     *
     */
    private org.wyona.yarep.core.Path getEntriesPath(Path feedPath) {
        String entriesPathString = getProperty(feedPath, "entries-path", null);

	if (entriesPathString != null) {
            return new org.wyona.yarep.core.Path(entriesPathString);
        } else {
            try {
            RepoPath rp = new org.wyona.yarep.util.YarepUtil().getRepositoryPath(new org.wyona.yarep.core.Path(feedPath.toString()), new RepositoryFactory());
            Repository repo = rp.getRepo();
            org.wyona.yarep.core.Path entriesPath = rp.getPath();

            // TODO: This doesn't seem to work ... (check on Yarep ...)
            if (repo.isResource(entriesPath)) {
                log.warn("Path is a resource instead of a collection: " + entriesPath);
                //entriesPath = entriesPath.getParent();
            }

            // TODO: Implement org.wyona.yarep.core.Path.getParent()
            if (!repo.isCollection(entriesPath)) {
                log.warn("Path is not a collection: " + entriesPath);
                entriesPath = new org.wyona.yarep.core.Path(new org.wyona.commons.io.Path(entriesPath.toString()).getParent().toString());
                log.warn("Use parent of path: " + entriesPath);
            }
            return entriesPath;
            } catch(Exception e) {
                log.error(e);
                return null;
            }
        }
    }

    /**
     * Is this method obsolete?
     * @param path feed path
     * @param in entry content
     * @return entry path
     */
    public Path createEntry(Path path, java.io.InputStream in) {
        try {
            RepoPath rp = new org.wyona.yarep.util.YarepUtil().getRepositoryPath(new org.wyona.yarep.core.Path(path.toString()), new RepositoryFactory());

            org.wyona.yarep.core.Path entryPath = new org.wyona.yarep.core.Path(getEntriesPath(path).toString() + "/" + new Date().getTime() + ".xml");
            java.io.OutputStream out = rp.getRepo().getOutputStream(entryPath);
            byte buffer[] = new byte[8192];
            int bytesRead;
            while ((bytesRead = in.read(buffer)) != -1) {
               out.write(buffer, 0, bytesRead);
            }
            log.info("Atom entry has been created: " + entryPath);

            return new Path(entryPath.toString());
        } catch(Exception e) {
            log.error(e);
        }
        return null;
    }

    /**
     * Order entries by published date and set feed updated
     */
    private Vector addEntry(Vector orderedEntries, Entry entry) throws Exception {
        Date datePublished = entry.getPublished();
        if (datePublished != null) {
            long timePublished = datePublished.getTime();
            int pos = 0;
            for (int i = 0; i < orderedEntries.size(); i++) {
                Entry current = (Entry) orderedEntries.elementAt(i);
                if (timePublished > current.getPublished().getTime()) {
                    break;
                }
                pos++;
            }
            orderedEntries.add(pos, entry);
        } else {
            log.error("Entry will be ignored because entry does not have a published date: " + entry.getLink("edit").getHref());
        }

        Date entryUpdated = entry.getUpdated();
        if (entryUpdated != null) {
            long timeUpdated = entryUpdated.getTime();
            if (feedUpdated == null) feedUpdated = entryUpdated;
            if (timeUpdated > feedUpdated.getTime()) {
                feedUpdated = entryUpdated;
            }
        }

        return orderedEntries;
    }
}
