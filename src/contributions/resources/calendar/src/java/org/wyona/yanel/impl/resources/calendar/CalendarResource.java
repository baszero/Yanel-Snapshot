/*
 * Copyright 2006 Wyona
 */

package org.wyona.yanel.impl.resources.calendar;

import org.wyona.yanel.core.Resource;
import org.wyona.yanel.core.api.attributes.CreatableV2;
import org.wyona.yanel.core.api.attributes.ModifiableV2;
import org.wyona.yanel.core.api.attributes.ViewableV2;
import org.wyona.yanel.core.attributes.viewable.View;
import org.wyona.yanel.core.attributes.viewable.ViewDescriptor;

import org.wyona.yarep.core.Repository;

import org.wyona.yanel.impl.resources.calendar.CalendarEvent;

import org.apache.log4j.Logger;

import java.io.File;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.Reader;
import java.io.Writer;
import java.util.HashMap;

import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.stream.StreamSource;
import javax.xml.transform.stream.StreamResult;

import javax.servlet.http.HttpServletRequest;

/**
 * Calendar resource based on the ICS format
 */
public class CalendarResource extends Resource implements ViewableV2, ModifiableV2, CreatableV2 {

    private static Logger log = Logger.getLogger(CalendarResource.class);

    /**
     *
     */
    public CalendarResource() {
    }

    /**
     * @see
     */
    public long getSize() throws Exception {
        Repository dataRepo = getRealm().getRepository();
        if (dataRepo.existsNode(getPath()) && dataRepo.isResource(new org.wyona.yarep.core.Path(getPath()))) {
            return dataRepo.getNode(getPath()).getSize();
        } else {
            log.warn("Not implemented yet!");
            return -1;
        }
    }

    /**
     *
     */
    public String getMimeType(String viewId) {
        if(viewId == null) {
            String mimeType = null;
            try {
                mimeType = getResourceConfigProperty("mime-type");
            } catch (Exception e) {
                log.error(e, e);
            }
            if (mimeType != null) {
                return mimeType;
            }
            return "text/calendar";
        }
        if( viewId.equals("xml")) {
            return "application/xml";
        }
        if ( viewId.equals("xhtml")) {
            return "application/xhtml+xml";
        }
        log.warn("No mime type for view id: " + viewId);
        return null;
    }

    /**
     * @see
     */
    public boolean exists() throws Exception {
        Repository dataRepo = getRealm().getRepository();
        if (dataRepo.existsNode(getPath()) && dataRepo.isResource(new org.wyona.yarep.core.Path(getPath()))) {
            return true;
        } else {
            log.warn("Not implemented yet!");
            return false;
        }
    }

    /**
     * Generate view
     * @param viewId xml, ics, xhtml
     */
    public View getView(String viewId) throws Exception {
        String categories = getResourceConfigProperty("categories");
        String classes = getResourceConfigProperty("classes");
        String userIds = getResourceConfigProperty("user-ids");
        log.debug("Categories, classes and user IDs: " + categories + " " + classes + " " + userIds);

        Repository dataRepo = getRealm().getRepository();

        if (dataRepo.existsNode(getPath()) && dataRepo.isResource(new org.wyona.yarep.core.Path(getPath()))) {
            log.warn("DEBUG: ICS exists: " + new org.wyona.yarep.core.Path(getPath()));
            if(viewId == null) {
                View view = new View();
                view.setMimeType(getMimeType(null));
                view.setInputStream(dataRepo.getNode(getPath()).getInputStream());
                log.warn("DEBUG: Return ICS!");
                return view;
            }
        }


        String eventsPath = getResourceConfigProperty("events-path");
        if (eventsPath == null) {
            eventsPath = getPath();
        }
        log.warn("DEBUG: Generate calendar from XML based events: " + eventsPath);

        org.wyona.yarep.core.Path[] children = dataRepo.getChildren(new org.wyona.yarep.core.Path(eventsPath));
        //org.wyona.yarep.core.Path[] children = dataRepo.search("categories", categories);

        String calendarAsXML = getCalendarAsXML(children);
        try {
            org.wyona.commons.xml.XMLHelper.isWellFormed(new java.io.StringBufferInputStream(calendarAsXML));
        } catch(Exception e) {
            String errorMessage = "Calendar as XML is not well-formed!";
            log.error(errorMessage);
            View view = new View();
            view.setMimeType("text/plain");
            view.setInputStream(new java.io.StringBufferInputStream(errorMessage));
            return view;
        }

        if(viewId != null && viewId.equals("xml")) {
            //response.getOutputStream();

            View view = new View();
            view.setMimeType(getMimeType(viewId));
            view.setInputStream(new java.io.StringBufferInputStream(calendarAsXML));
            return view;
        } else if (viewId != null && viewId.equals("xhtml")) {
            String xslt = getRTD().getConfigFile().getParent() + File.separator + "xslt" + File.separator + "xml2xhtml.xsl";
            java.io.ByteArrayOutputStream out = new java.io.ByteArrayOutputStream();
            try {
                Transformer transformer = TransformerFactory.newInstance().newTransformer(new StreamSource(new File(xslt)));
                transformer.transform(new StreamSource(new java.io.StringBufferInputStream(calendarAsXML)), new StreamResult(out));
            } catch(Exception e) {
                log.error(e.getMessage(), e);
            }

            View view = new View();
            view.setMimeType(getMimeType(viewId));

            view.setInputStream(new java.io.ByteArrayInputStream(out.toByteArray()));
            return view;
        } else {
            String xslt = getRTD().getConfigFile().getParent() + File.separator + "xslt" + File.separator + "xml2ics.xsl";
            java.io.ByteArrayOutputStream out = new java.io.ByteArrayOutputStream();
            try {
                Transformer transformer = TransformerFactory.newInstance().newTransformer(new StreamSource(new File(xslt)));

                // TODO: This will cause encoding problems. See for instance http://skew.org/xml/tutorial/
                transformer.transform(new StreamSource(new java.io.StringBufferInputStream(calendarAsXML)), new StreamResult(out));
            } catch(Exception e) {
                log.error(e.getMessage(), e);
                throw new Exception(e);
            }

            //response.getOutputStream();

            View view = new View();
            view.setMimeType(getMimeType(null));
            view.setInputStream(new java.io.ByteArrayInputStream(out.toByteArray()));
            return view;
        }
    }

    /**
     * @see
     */
    public ViewDescriptor[] getViewDescriptors() {
        log.warn("Not implemented yet!");
        return null;
    }

    /**
     *
     */
    public boolean delete() throws Exception {
        log.warn("Not implemented yet!");
        return false;
    }

    /**
     * @see
     */
    public long getLastModified() throws Exception {
        Repository dataRepo = getRealm().getRepository();
        if (dataRepo.existsNode(getPath()) && dataRepo.isResource(new org.wyona.yarep.core.Path(getPath()))) {
            return dataRepo.getNode(getPath()).getLastModified();
        } else {
            log.warn("Not implemented yet!");
            return -1;
        }
    }

    /**
     * Parse ICS and write events as XML into repository
     */
    public void write(InputStream in) throws Exception {
        java.io.BufferedReader br = new java.io.BufferedReader(new java.io.InputStreamReader(writeICS(in)));
        //java.io.BufferedReader br = new java.io.BufferedReader(new java.io.InputStreamReader(in));
        String line;
        CalendarEvent event = null;
        log.error("DEBUG: Parse ICS and write events as XML into repository ...");
        while ((line = br.readLine()) != null) {
            if (line.startsWith("BEGIN:VEVENT")) {
                event = new CalendarEvent();
            } else if (line.startsWith("END:VEVENT")) {
                //log.error("DEBUG: Write event " + event.getUID() + ", " + event.toXML());
                Writer out = getRealm().getRepository().getWriter(new org.wyona.yarep.core.Path(getResourceConfigProperty("events-path") + "/" + event.getUID() + ".xml"));
                out.write(event.toXML());
                out.close();
                event = null;
            } else {
                if (event != null) {
                    event.setProperty(line);
                } else {
                    //log.warn("Not implemented yet: " + line);
                }
            }
        }
        br.close();
    }

    /**
     * Save/Write the actual ICS
     */
    private InputStream writeICS(InputStream in) throws Exception {
        log.error("DEBUG: Write ICS as a whole to the repository: " + getPath());
        org.wyona.yarep.core.Path path = new org.wyona.yarep.core.Path(getPath());

        OutputStream out;
        byte[] buf = new byte[8192];
        int bytesR;
        bytesR = in.read(buf);
        if (bytesR <= 0) {
            throw new Exception("InputStream seems to be empty! Current calendar will not be overwritten!");
        }
        out = getRealm().getRepository().getOutputStream(path);
        out.write(buf, 0, bytesR);

        while ((bytesR = in.read(buf)) != -1) {
            out.write(buf, 0, bytesR);
        }
        out.close();
        in.close();
        return getRealm().getRepository().getInputStream(path);
    }

    /**
     *
     */
    public OutputStream getOutputStream() throws Exception {
        log.warn("Do not use this method but rather write(InputStream)!");
        return null;
        //return getRealm().getRepository().getOutputStream(new org.wyona.yarep.core.Path("/calendarTODO.ics"));
    }

    /**
     *
     */
    public InputStream getInputStream() throws Exception {
        log.warn("Not implemented yet!");
        return null;
    }

    /**
     *
     */
    public Reader getReader() throws Exception {
        log.warn("Not implemented yet!");
        return null;
    }

    /**
     *
     */
    public Writer getWriter() throws Exception {
        log.warn("Not implemented yet!");
        return null;
    }

    /**
     *
     */
    public HashMap createRTIProperties(HttpServletRequest request) {
        HashMap map = new HashMap();
        map.put("events-path","/new-calendar");
        map.put("categories","none");
        map.put("class","none");
        map.put("user-ids","none");
        return map;
    }

    public String getCreateName(String suggestedName) {
        return suggestedName;
    }

    /**
     *
     */
    public void create(HttpServletRequest request) {
        String newPath = getPath();
        log.error("DEBUG: New path: " + newPath);
    }

    /**
     *
     */
    public String getPropertyType(String propertyName) {
        if (propertyName.equals("classes")) {
            return CreatableV2.TYPE_SELECT;
        } else if (propertyName.equals("categories")) {
            return CreatableV2.TYPE_SELECT;
        } else {
            return null;
        }
    }

    /**
     * Get default values
     */
    public Object getProperty(String name) {
        if (name.equals("classes")) {
            HashMap map = new HashMap();
            map.put("*","*");
            map.put("public","PUBLIC");
            map.put("private","PRIVATE");
            return map;
        }
        return null;
    }

    /**
     *
     */
    public void setProperty(String name, Object value) {
        log.warn("Not implemented yet!");
    }

    /**
     *
     */
    public String[] getPropertyNames() {
        String[] props = {"classes", "categories"};
        return props;
    }

    /**
     * Get calendar as XML string
     */
    private String getCalendarAsXML(org.wyona.yarep.core.Path[] children) throws Exception {
        Repository dataRepo = getRealm().getRepository();
        StringBuilder calendar = new StringBuilder("<?xml version=\"1.0\"?>\n<calendar>");
        for (int i = 0; i < children.length; i++) {
            if (dataRepo.isResource(children[i])) {
                InputStream in = dataRepo.getInputStream(children[i]);
                java.io.ByteArrayOutputStream baos  = new java.io.ByteArrayOutputStream();
                //StringBuffer event = new StringBuffer();

                byte[] buffer = new byte[8192];
                int bytesRead;
                while ((bytesRead = in.read(buffer)) != -1) {
                    //event.append(new String(buffer));
                    baos.write(buffer, 0, bytesRead);
                }

                String event = baos.toString();
                int endOfProcessingInstruction = event.indexOf("?>");
                if (endOfProcessingInstruction > 0) {
                    calendar.append(event.toString().substring(endOfProcessingInstruction + 2));
                } else {
                    log.error("No processing instruction: " + children[i]);
                }
            }
        }
        calendar.append("</calendar>");
        return calendar.toString();
    }
}
