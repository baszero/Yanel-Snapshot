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

import org.wyona.yarep.core.Repository;
import org.wyona.yarep.core.RepositoryFactory;

import org.apache.log4j.Category;

import java.io.File;

import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.stream.StreamSource;
import javax.xml.transform.stream.StreamResult;

/**
 *
 */
public class DirectoryResource extends Resource implements ViewableV1 {

    private static Category log = Category.getInstance(DirectoryResource.class);

    /**
     *
     */
    public DirectoryResource() {
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
	StringBuffer sb = new StringBuffer("<?xml version=\"1.0\"?>");

	//sb.append("<?xml-stylesheet type=\"text/xsl\" href=\"yanel/resources/directory/xslt/dir2xhtml.xsl\"?>");


        try {
            org.wyona.yarep.util.RepoPath rp = new org.wyona.yarep.util.YarepUtil().getRepositoryPath(new org.wyona.yarep.core.Path(path.toString()), new RepositoryFactory());
            Repository repo = rp.getRepo();
            org.wyona.yarep.core.Path p = rp.getPath();

            // NOTE: The schema is according to http://cocoon.apache.org/2.1/userdocs/directory-generator.html
	    sb.append("<dir:directory yanel:path=\"" + path + "\" name=\"" + p.getName() + "\" xmlns:dir=\"http://apache.org/cocoon/directory/2.0\" xmlns:yanel=\"http://www.wyona.org/yanel/resource/directory/1.0\">");
            // TODO: Do not show the children with suffix .yanel-rti resp. make this configurable!
	    // NOTE: Do not hardcode the .yanel-rti, but rather use Path.getRTIPath ...
            org.wyona.yarep.core.Path[] children = repo.getChildren(p);
            for (int i = 0; i < children.length; i++) {
                if (repo.isResource(children[i])) {
	            sb.append("<dir:file path=\"" + children[i] + "\" name=\"" + children[i].getName() + "\"/>");
                } else if (repo.isCollection(children[i])) {
	            sb.append("<dir:directory path=\"" + children[i] + "\" name=\"" + children[i].getName() + "\"/>");
                } else {
	            sb.append("<yanel:exception yanel:path=\"" + children[i] + "\"/>");
                }
            }
        } catch(Exception e) {
            log.error(e);
        }
	sb.append("</dir:directory>");

        if (viewId != null && viewId.equals("source")) {
            defaultView.setMimeType("application/xml");
	    defaultView.setInputStream(new java.io.StringBufferInputStream(sb.toString()));
            return defaultView;
        }

        File xsltFile = org.wyona.commons.io.FileUtil.file(rtd.getConfigFile().getParentFile().getAbsolutePath(), "xslt" + File.separator + "dir2xhtml.xsl");
        log.debug("XSLT file: " + xsltFile);
        try {
        Transformer transformer = TransformerFactory.newInstance().newTransformer(new StreamSource(xsltFile));
        // TODO: Is this the best way to generate an InputStream from an OutputStream?
        java.io.ByteArrayOutputStream baos = new java.io.ByteArrayOutputStream();
        transformer.transform(new StreamSource(new java.io.StringBufferInputStream(sb.toString())), new StreamResult(baos));
        defaultView.setInputStream(new java.io.ByteArrayInputStream(baos.toByteArray()));
        defaultView.setMimeType("application/xhtml+xml");
	defaultView.setInputStream(new java.io.ByteArrayInputStream(baos.toByteArray()));
        } catch (Exception e) {
            log.error(e);
        }

        return defaultView;
    }

    /**
     *
     */
    public View getView(HttpServletRequest request, String viewId) {
        return getView(new Path(request.getServletPath()), viewId);
    }
}
