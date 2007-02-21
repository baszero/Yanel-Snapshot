package org.wyona.yanel.core.serialization;

import java.io.IOException;
import java.io.OutputStream;
import java.io.Writer;
import java.util.Properties;
import org.apache.log4j.Category;
import org.apache.xml.serializer.Serializer;
import org.apache.xml.serializer.DOMSerializer;
import org.xml.sax.Attributes;
import org.xml.sax.ContentHandler;
import org.xml.sax.EntityResolver;
import org.xml.sax.InputSource;
import org.xml.sax.SAXException;
import org.xml.sax.ext.LexicalHandler;
import org.xml.sax.helpers.DefaultHandler;

public class HTMLSerializer extends DefaultHandler implements Serializer, LexicalHandler {

    private static Category log = Category.getInstance(HTMLSerializer.class);
    private EntityResolver entityResolver;
    private String pendingElement;
    private boolean doIndent;
    
    private String[] nonCollapsableElements = { "textarea", "script", "style" };

    public HTMLSerializer() {
    }
    
    public void startDocument() throws SAXException {
        try {
            String omitXMLDeclaration = this.properties.getProperty("omit-xml-declaration", "no");
            if (omitXMLDeclaration != null && !omitXMLDeclaration.equals("yes")) {
                print("<?xml version=\"1.0\"?>\n");
            }
            String doctypePublic = this.properties.getProperty("doctype-public");
            String doctypeSystem = this.properties.getProperty("doctype-system");
            String method = this.properties.getProperty("method", "xml");
            if (doctypePublic != null) {
                print("<!DOCTYPE " + method + " PUBLIC \"" + doctypePublic);
                if (doctypeSystem != null) {
                    print("\" \"" + doctypeSystem);
                }
                print("\">\n");
            }
            this.doIndent = this.properties.getProperty("indent", "no").equals("yes");
        } catch (RuntimeException e) {
            log.error(e.getMessage(), e);
            throw e;
        }
    }

    public void endDocument() throws SAXException {
        try {
            os.flush();
            os.close();
        } catch (IOException e) {
            log.error(e.getMessage(), e);
            throw new SAXException(e);
        }
    }
    
    public void startElement(String namespaceURI, String localName, String qName, Attributes attrs) throws SAXException {
        handlePendingElement();
        String eName = ("".equals(localName)) ? qName : localName;
        
        StringBuffer element = new StringBuffer();
        element.append("<" + eName);
        for(int i = 0; i < attrs.getLength(); i++) {
            String aName = attrs.getQName(i);
            String aValue = attrs.getValue(i);
            element.append(" " + aName + "=\"" + aValue + "\"");
        }
        // NOTE: the element will not be closed yet because we don't know if the
        // element has to be collapsed.
        
        this.pendingElement = element.toString();
    }

    public void endElement(String namespaceURI, String localName, String qName) throws SAXException {
        String eName = ("".equals(localName)) ? qName : localName;
        if (this.pendingElement != null) {
            if (isCollapsableElement(eName)) {
                print(this.pendingElement + "/>");
            } else {
                print(this.pendingElement + "></" + eName + ">");
            }
            this.pendingElement = null;
        } else {
            print("</" + eName + ">");
        }
        if (this.doIndent) {
            // not a real indent yet, just add linebreaks
            print("\n");
        }
    }
    
    /**
     * Writes the pending element if there is one.
     * This method is called when we know that the element is either non-empty
     * or non-collapsable.
     * @throws SAXException
     */
    protected void handlePendingElement() throws SAXException {
        if (this.pendingElement != null) {
            print(this.pendingElement + ">");
            this.pendingElement = null;
        }
    }

    /**
     * Indicates whether an element may be collapsed in the output if it is empty.
     * Some browsers (e.g. IE) have problems with <textarea/>.
     * @param elementName
     * @return
     */
    private boolean isCollapsableElement(String elementName) {
        for (int i=0; i< this.nonCollapsableElements.length; i++) {
            if (nonCollapsableElements[i].equals(elementName)) {
                return false;
            }
        }
        return true;
    }

    public void characters(char[] buf, int offset, int len) throws SAXException {
        handlePendingElement();
        String s = new String(buf, offset, len);
        print(s);
    }

   
    public InputSource resolveEntity(String publicId, String systemId) throws SAXException {
        try {
            if (this.entityResolver != null) {
                    return this.entityResolver.resolveEntity(publicId, systemId);
            } else {
                return super.resolveEntity(publicId, systemId);
            }
        } catch (IOException e) {
            log.error(e.getMessage(), e);
            throw new SAXException(e);
        }
    }

    public void setEntityResolver(EntityResolver entityResolver) {
        this.entityResolver = entityResolver;
    }

    public ContentHandler asContentHandler() throws IOException {
        return this;
    }

    public DOMSerializer asDOMSerializer() throws IOException {
        return null;
    }


    protected OutputStream os;
    
    public void setOutputStream(OutputStream os) {
        this.os = os;
    }
    
    public OutputStream getOutputStream() {
        return this.os;
    }
    
    protected void print(String s) throws SAXException {
        try {
            this.os.write(replaceAmpersand(s).getBytes());
        } catch (IOException e) {
            log.error(e.getMessage(), e);
            throw new SAXException(e);
        }
    }
    
    /**
     * Replaces all occurences of '&' but not '&amp;' with '&amp;'.
     * TODO: fix this in the reader.
     * @param inputString with or without '&'
     * @return replaced ampersands as string
     */
    private String replaceAmpersand(String inputString) {
        String [] tokens = inputString.split("&amp;");
        String replacedAmpersand = null;
        if(inputString.indexOf("&amp;") == -1) {
            replacedAmpersand = inputString.replaceAll("&", "&amp;");
        } else {
            replacedAmpersand = "";
            for(int i = 0; i < tokens.length; i++) {
                replacedAmpersand += tokens[i].replaceAll("&", "&amp;") + "&amp;";
            }
        }
        log.debug("[" + inputString + "] replaced with [" + replacedAmpersand + "]");
        return replacedAmpersand;
    }

    public void setWriter(Writer writer) {
        // TODO Auto-generated method stub
    }
    
    public Writer getWriter() {
        return null;
    }

    protected Properties properties;
    
    public void setOutputFormat(Properties properties) {
        this.properties = properties;
    }
    
    public Properties getOutputFormat() {
        return properties;
    }
    
    public boolean reset() {
        return true;
    }

    public void comment(char[] buf, int offset, int length) throws SAXException {
        handlePendingElement();
        String s = new String(buf, offset, length);
        print("<!-- " + s + " -->");
    }

    public void endCDATA() throws SAXException {
        // TODO Auto-generated method stub
    }

    public void endDTD() throws SAXException {
        // TODO Auto-generated method stub
    }

    public void endEntity(String name) throws SAXException {
        System.out.println("start entity: " + name);
        // TODO Auto-generated method stub
    }

    public void startCDATA() throws SAXException {
        // TODO Auto-generated method stub
    }

    public void startDTD(String arg0, String arg1, String arg2) throws SAXException {
        // TODO Auto-generated method stub
    }

    public void startEntity(String name) throws SAXException {
        // TODO Auto-generated method stub
    }
}
