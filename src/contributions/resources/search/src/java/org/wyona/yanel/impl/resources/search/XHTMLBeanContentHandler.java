/**
 * Licensed to Wyona
 */
package org.wyona.yanel.impl.resources.search;

import org.xml.sax.Attributes;
import org.xml.sax.ContentHandler;
import org.xml.sax.Locator;
import org.xml.sax.SAXException;

import org.apache.log4j.Logger;

/**
 * Content handler for collecting the various typical XHTML content which has been generated by some parser implementation
 */
public class XHTMLBeanContentHandler implements ContentHandler {

    private static Logger log = Logger.getLogger(XHTMLBeanContentHandler.class);

    private XHTMLBean xhtmlBean;
    private boolean insideTitle = false;
    private boolean insideMeta = false;
    private boolean insidePara = false;

    /**
     * @param xhtmlBean XHTMLBean to set various content
     */
    public XHTMLBeanContentHandler(XHTMLBean xhtmlBean) {
        this.xhtmlBean = xhtmlBean;  
    }

    public void setDocumentLocator (Locator locator) { 
	  log.warn("Hello from setDocumentLocator()!"); 
	}

    /**
     *
     */
    public void startDocument () throws SAXException  { 
        //log.warn("DEBUG: Hello from startDocument()!"); 
    }

    public void endDocument() throws SAXException {  
        //log.warn("DEBUG: Hello from endDocument()!"); 
    }

    /**
     *
     */
    public void startPrefixMapping (String prefix, String uri) throws SAXException {  
/*
        log.warn("DEBUG: Prefix: " + prefix);
        log.warn("DEBUG: uri: " + uri);
*/
    }

    /**
     *
     */
    public void endPrefixMapping (String prefix) throws SAXException  {  
        //log.warn("DEBUG: Prefix: " + prefix);
    }

    /**
     *
     */
    public void startElement (String uri, String localName, String qName, Attributes atts) throws SAXException {  
/*
        log.warn("DEBUG: Local name: " + localName);
        log.warn("DEBUG: qName: " + qName);
        log.warn("DEBUG: uri: " + uri);
*/
        if (localName.equals("title")) {
            insideTitle = true;
        }
        if (localName.equals("meta")) {
            insideMeta = true;
        }
        if (localName.equals("p")) {
            insidePara = true;
        }
    }

    /**
     *
     */
    public void endElement (String uri, String localName, String qName) throws SAXException {  
        //log.warn("DEBUG: Local name: " + localName); 
        if (localName.equals("title")) {
            insideTitle = false;
        }
        if (localName.equals("meta")) {
            insideMeta = false;
        }
        if (localName.equals("p")) {
            insidePara = false;
        }
    }

    /**
     *
     */
    public void characters (char ch[], int start, int length) throws SAXException {  
        if (insideTitle) {
            xhtmlBean.setTitle(new String(ch));
            //log.warn("DEBUG: Title: " + new String(ch));
        }
        if (insideMeta) {
            //log.warn("DEBUG: Meta: " + new String(ch));
        }
        if (insidePara) {
            //log.warn("DEBUG: Paragraph: " + new String(ch));
        }
    }

    public void ignorableWhitespace (char ch[], int start, int length)
	throws SAXException {  
	  //log.warn("DEBUG: Hello from ignorableWhitespace()!"); 
	}

    public void processingInstruction (String target, String data)
	throws SAXException {  
	  log.warn("Hello from processingInstruction()!"); 
	}

    public void skippedEntity (String name)
	throws SAXException {  
	  log.warn("Hello from skippedEntity()!"); 
	}
}
