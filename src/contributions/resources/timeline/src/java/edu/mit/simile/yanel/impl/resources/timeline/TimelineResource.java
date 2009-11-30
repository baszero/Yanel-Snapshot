/*
 * Copyright 2007 Wyona
 */

package edu.mit.simile.yanel.impl.resources.timeline;

import org.wyona.yanel.core.Resource;
import org.wyona.yanel.core.api.attributes.ViewableV2;
import org.wyona.yanel.core.api.attributes.IntrospectableV1;
import org.wyona.yanel.core.attributes.viewable.View;
import org.wyona.yanel.core.attributes.viewable.ViewDescriptor;
import org.wyona.yanel.core.util.PathUtil;

import org.apache.log4j.Logger;

/**
 *
 */
public class TimelineResource extends Resource implements ViewableV2, IntrospectableV1 {

    private static Logger log = Logger.getLogger(TimelineResource.class);

    /**
     *
     */
    public TimelineResource() {
    }

    /**
     *
     */
    public boolean exists() {
        log.warn("Not really implemented yet! Needs to check if events XML exists.");
        try {
            log.warn("DEBUG: Path: " + getPath() + "/" + getResourceConfigProperty("href"));
        } catch(Exception e) {
            log.error(e, e);
        }
        return true;
    }

    /**
     *
     */
    public String getMimeType(String viewId) {
        if (viewId != null) {
            if (viewId.equals("xml")) return "application/xml";
        }
        //return "application/xhtml+xml";
        return "text/html";
    }

    /**
     *
     */
    public long getSize() {
        log.warn("Not implemented yet!");
        return -1;
    }

    /**
     *
     */
    public ViewDescriptor[] getViewDescriptors() {
        ViewDescriptor[] vd = new ViewDescriptor[2];
        vd[0] = new ViewDescriptor("default");
        vd[0].setMimeType(getMimeType(null));
        vd[1] = new ViewDescriptor("xml");
        vd[1].setMimeType(getMimeType("xml"));
        return vd;
    }

    /**
     *
     */
    public View getView(String viewId) {
        View view = new View();
        try {
            view.setInputStream(new java.io.StringBufferInputStream(getXHTML().toString()));
            //view.setInputStream(getRealm().getRepository().getNode("/timeline.xhtml").getInputStream());
            view.setMimeType(getMimeType(null));
        } catch (Exception e) {
            log.error(e.getMessage(), e);
        }
        return view;
    }

    /**
     * Generate XHTML
     */
    private StringBuilder getXHTML() throws Exception {
        java.text.SimpleDateFormat sdf = new java.text.SimpleDateFormat("MMM dd yyyy HH:mm:ss Z");
        String date = sdf.format(new java.util.Date());
        //java.text.SimpleDateFormat sdf = new java.text.SimpleDateFormat("MMM dd yyyy");
        //String date = sdf.format(new java.util.Date()) + " 00:00:00 GMT";
        if (getResourceConfigProperty("date") != null) {
            date = getResourceConfigProperty("date");
        }

        StringBuilder sb = new StringBuilder();
        sb.append("<?xml version=\"1.0\"?>");

        sb.append("<html xmlns=\"http://www.w3.org/1999/xhtml\">");
        sb.append("<head>");
        sb.append("<title>" + getResourceConfigProperty("title") + "</title>\n");
        if (getResourceConfigProperty("introspection-url") != null) {
            sb.append("<link rel=\"neutron-introspection\" type=\"application/neutron+xml\" href=\"" + getResourceConfigProperty("introspection-url") + "\"/>");
        } else {
            sb.append("<link rel=\"neutron-introspection\" type=\"application/neutron+xml\" href=\"?yanel.resource.usecase=introspection\"/>");
        }
        //sb.append("<script src=\"http://simile.mit.edu/timeline/api/timeline-api.js\" type=\"text/javascript\"></script>");
        //sb.append("<script src=\"" + PathUtil.getResourcesHtdocsPathURLencoded(this) + "timeline-api.js\" type=\"text/javascript\"></script>");
        sb.append("<script src=\"" + PathUtil.getResourcesHtdocsPathURLencoded(this) + "timeline_2.3.0/timeline_js/timeline-api.js?bundle=true\" type=\"text/javascript\"></script>\n\n");

        sb.append("<script type=\"text/javascript\">\n");

        sb.append("var eventSource = new Timeline.DefaultEventSource();\n");
        sb.append("function onLoad() {\n");
        sb.append("  var bandInfos = [");
        sb.append("    Timeline.createBandInfo({");
        sb.append("        eventSource:    eventSource,");
        sb.append("        date:           \"" + date + "\",");
        sb.append("        width:          \"70%\",");
        sb.append("        intervalUnit:   Timeline.DateTime.MONTH,");
        sb.append("        intervalPixels: 100");
        sb.append("    }),");
        sb.append("    Timeline.createBandInfo({");
        //sb.append("showEventText:  false,");
        //sb.append("        trackHeight:    0.5,");
        //sb.append("        trackGap:       0.2,");
        sb.append("        overview:       true,");
        sb.append("        eventSource:    eventSource,");
        sb.append("        date:           \"" + date + "\",");
        sb.append("        width:          \"30%\",");
        sb.append("        intervalUnit:   Timeline.DateTime.DECADE,"); 
        sb.append("        intervalPixels: 200");
        sb.append("    })");
        sb.append("  ];");

        sb.append("var tl;\n");
        sb.append("var resizeTimerID = null;");
        sb.append("function onResize() {");
        sb.append("    if (resizeTimerID == null) {");
        sb.append("        resizeTimerID = window.setTimeout(function() {");
        sb.append("            resizeTimerID = null;");
        sb.append("            tl.layout();");
        sb.append("        }, 500);");
        sb.append("    }");
        sb.append("}");
        sb.append("  bandInfos[1].syncWith = 0;");
        sb.append("  bandInfos[1].highlight = true;");
  
        sb.append("  tl = Timeline.create(document.getElementById(\"my-timeline\"), bandInfos);");
        // TODO: Check first if a query string already exists!
        sb.append("  Timeline.loadXML(\"" + getResourceConfigProperty("href") + "?do-not-cache-timestamp=" + new java.util.Date().getTime() + "\", function(xml, url) { eventSource.loadXML(xml, url); });");
        sb.append("}\n");

        sb.append("</script>\n");
        sb.append("</head>\n\n");

        sb.append("<body onload=\"onLoad();\" onresize=\"onResize();\">");
        sb.append("<h3>" + getResourceConfigProperty("title") + "</h3>");
        sb.append("<p>Start Date: " + date + "</p>");
        sb.append("<p>XML: <a href=\"" + getResourceConfigProperty("href") + "?do-not-cache-timestamp=" + new java.util.Date().getTime() + "\">" + getResourceConfigProperty("href") + "</a></p>");

        String height = getResourceConfigProperty("height");
        if (height == null) height = "250px";
        sb.append("<div id=\"my-timeline\" style=\"height: " + height + "; border: 1px solid #aaa\"></div>");
        sb.append("</body>");
        sb.append("</html>");
        return sb;
    }
    
    /**
     * Get introspection for Introspectable interface
     */
    public String getIntrospection() throws Exception {
        String name = org.wyona.commons.io.PathUtil.getName(getPath());
        StringBuffer sb = new StringBuffer("<?xml version=\"1.0\"?>");
        sb.append("<introspection xmlns=\"http://www.wyona.org/neutron/2.0\">");
    
        sb.append("<navigation>");
        sb.append("  <sitetree href=\"./\" method=\"PROPFIND\"/>");
        sb.append("</navigation>");
    
        sb.append("<resource name=\"" + name + "\">");
        sb.append("<edit mime-type=\"application/xml\">");
        sb.append("<checkout url=\"" + getResourceConfigProperty("href") + "?yanel.resource.usecase=checkout\" method=\"GET\"/>");
        sb.append("<checkin  url=\"" + getResourceConfigProperty("href") + "?yanel.resource.usecase=checkin\"  method=\"PUT\"/>");
        sb.append("<release-lock url=\"" + getResourceConfigProperty("href") + "?yanel.resource.usecase=release-lock\" method=\"GET\"/>");
        sb.append("</edit>");
        sb.append("</resource>");
        sb.append("</introspection>");
        
        return sb.toString();
    }
}
