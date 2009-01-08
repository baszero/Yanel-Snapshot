package org.wyona.yanel.impl.resources.calendar;

import org.apache.log4j.Category;

/**
 *
 */
public class CalendarEvent {
    private static Category log = Category.getInstance(CalendarEvent.class);

    private String uid;
    private String summary;
    private String location;
    private String _class;
    private String categories;
    private String created;
    private String lastModified;
    private String dtstamp;
    private String start;
    private String end;

    /**
     *
     */
    public String getUID() {
        return uid;
    }

    /**
     *
     */
    public void setUID(String uid) {
        this.uid = uid;
    }

    /**
     *
     */
    public void setSummary(String summary) {
        this.summary = summary;
    }

    /**
     *
     */
    public void setLocation(String location) {
        this.location = location;
    }

    /**
     *
     */
    public void setAccessClassification(String _class) {
        this._class = _class;
    }

    /**
     *
     */
    public String getAccessClassification() {
        return _class;
    }

    /**
     *
     */
    public void setCategories(String categories) {
        this.categories = categories;
    }

    /**
     *
     */
    public void setCreated(String created) {
        this.created = created;
    }

    /**
     *
     */
    public void setLastModified(String lastModified) {
        this.lastModified = lastModified;
    }

    /**
     *
     */
    public void setDtstamp(String dtstamp) {
        this.dtstamp = dtstamp;
    }

    /**
     *
     */
    public void setStart(String start) {
        this.start = start;
    }

    /**
     *
     */
    public void setEnd(String end) {
        this.end = end;
    }

    /**
     *
     */
    public String toString() {
        return "ICS Event: " + uid + ", " + summary;
    }

    /**
     *
     */
    public String toXML() {
        StringBuffer sb = new StringBuffer("<?xml version=\"1.0\"?>\n\n");
        sb.append("<cal:event xmlns:cal=\"http://...\" created=\"" + created + "\" last-modified=\"" + lastModified + "\" dtstamp=\"" + dtstamp + "\" uid=\"" + uid + "\"");
	if (_class != null) sb.append(" class=\"" + _class + "\"");
	if (categories != null) sb.append(" categories=\"" + categories + "\"");
	sb.append(">\n");
        sb.append("  <cal:summary>" + summary + "</cal:summary>\n");
        if (location != null) sb.append("  <cal:location>" + location + "</cal:location>\n");
        sb.append("  <cal:dtstart value=\"DATE\" tzid=\"" + start + "\"/>\n");
        sb.append("  <cal:dtend value=\"DATE\" tzid=\"" + end + "\"/>\n");
        sb.append("</cal:event>");
        return sb.toString();
    }

    /**
     * @param icsLine UID:..., CREATED:..., ...
     */
    public void setProperty(String icsLine) {
        if (icsLine.startsWith("UID:")) {
            setUID(icsLine.split(":")[1]);
        } else if (icsLine.startsWith("SUMMARY:")) {
            setSummary(icsLine.split(":")[1]);
        } else if (icsLine.startsWith("LOCATION:")) {
            setLocation(icsLine.split(":")[1]);
        } else if (icsLine.startsWith("CLASS:")) {
            setAccessClassification(icsLine.split(":")[1]);
        } else if (icsLine.startsWith("CATEGORIES:")) {
            setCategories(icsLine.split(":")[1]);
        } else if (icsLine.startsWith("CREATED:")) {
            setCreated(icsLine.split(":")[1]);
        } else if (icsLine.startsWith("LAST-MODIFIED:")) {
            setLastModified(icsLine.split(":")[1]);
        } else if (icsLine.startsWith("DTSTAMP:")) {
            setDtstamp(icsLine.split(":")[1]);
        } else if (icsLine.startsWith("DTSTART;")) {
            setStart(icsLine.substring(icsLine.indexOf("TZID=") + 5));
        } else if (icsLine.startsWith("DTEND;")) {
            setEnd(icsLine.substring(icsLine.indexOf("TZID=") + 5));
        } else if (icsLine.startsWith("DESCRIPTION:")) {
            log.warn("DESCRIPTION tag not implemented yet: " + icsLine.split(":")[1]);
        } else if (icsLine.startsWith("ATTENDEE:")) {
            log.warn("ATTENDEE tag not implemented yet: " + icsLine.split(":")[1]);
        } else if (icsLine.startsWith("PRIORITY:")) {
            log.warn("PRIORITY tag not implemented yet: " + icsLine.split(":")[1]);
        } else if (icsLine.startsWith("STATUS:")) {
            log.warn("STATUS tag not implemented yet: " + icsLine.split(":")[1]);
        } else {
            log.warn("Not implemented yet (probably some text with line-breaks!): " + icsLine);
        }
    }
}
