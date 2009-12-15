/*
 * Copyright 2008 Wyona
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

package org.wyona.yanel.impl.navigation;

import org.wyona.yanel.core.navigation.Node;

import org.apache.log4j.Logger;

import org.w3c.dom.Element;

import java.util.Vector;

/**
 * Also see org.w3c.dom.Node
 */
public class NodeDOMImpl implements Node {

    private static Logger log = Logger.getLogger(NodeDOMImpl.class);

    org.w3c.dom.Element element;
    SitetreeDOMImpl sitetree;

    public NodeDOMImpl(org.w3c.dom.Element element, SitetreeDOMImpl sitetree) {
        this.element = element;
        this.sitetree = sitetree;
    }

    /**
     * @return new child
     */
    public Node insertAsFirstChild(Node child) {
        log.error("TODO: Implementation not finished yet!");
        return null;
    }

    /**
     * @return new child
     */
    public Node insertBeforeChild(Node newChild, Node refChild) {
        log.error("TODO: Implementation not finished yet!");
        return null;
    }

    /**
     * @return new child
     */
    public Node insertAfterChild(Node newChild, Node refChild) {
        log.error("TODO: Implementation not finished yet!");
        return null;
    }

    /**
     * @return new child
     */
    public Node appendChild(Node child) {
        this.element.appendChild(((NodeDOMImpl) child).getElement());
        sitetree.save();
        return child;
    }

    /**
     * Remove child
     */
    public void removeChild(Node child) {
        this.element.removeChild( ((NodeDOMImpl) child).getElement() );
        this.sitetree.save();
    }

    /**
     * @see org.wyona.yanel.core.navigation.Node#isResource()
     */
    public boolean isResource() {
        // TODO: Compare with isCollection()!
        org.w3c.dom.NodeList nl = element.getElementsByTagName("node");
        if (nl == null)
            return true;
        if (nl.getLength() > 0) 
            return false;
        return true;
    }

    /**
     * @see org.wyona.yanel.core.navigation.Node#isCollection()
     */
    public boolean isCollection() {
        // TODO: It's possible that a node does not have any child nodes yet, but nevertheless should be treated as collection
        org.w3c.dom.NodeList nl = element.getElementsByTagName("node");
        if (nl != null) {
            if (nl.getLength() > 0) {
                return true;
            }
            return false;
        }
        return false;
    }

    /**
     * @see org.wyona.yanel.core.navigation.Node#getChildren()
     */
    public Node[] getChildren() {
        org.w3c.dom.NodeList nl = element.getChildNodes();
        Vector nodes = new Vector();
        //log.debug("Children of: " + getName());
        for (int i = 0; i < nl.getLength(); i++) {
            if (nl.item(i).getNodeType() == org.w3c.dom.Node.ELEMENT_NODE && nl.item(i).getNodeName().equals("node")) {
                nodes.add(nl.item(i));
            }
        }

        NodeDOMImpl[] children = new NodeDOMImpl[nodes.size()];
        for (int i = 0; i < children.length; i++) {
            children[i] = new NodeDOMImpl((Element) nodes.elementAt(i), sitetree);
            //log.debug("Child: " + children[i].getName());
        }
        return children;
    }

    /**
     *
     */
    public Node getParent() {
        if (!element.getNodeName().equals("sitetree")) {
            return new NodeDOMImpl((org.w3c.dom.Element) element.getParentNode(), sitetree);
        }
        return null;
    }

    /**
     *
     */
    public Node getNextSibling() {
        log.error("TODO: Implementation not finished yet!");
        return null;
    }

    /**
     *
     */
    public Node getPreviousSibling() {
        log.error("TODO: Implementation not finished yet!");
        return null;
    }

    /**
     * Get path of this node
     */
    public String getPath() {
        if (getParent() != null) {
            String name = getName();
            if (isCollection()) { // add trailing slash if node is a collection
                name = name + "/";
            }
            return getParent().getPath() + name;
        }
        return "/";
    }

    /**
     * @see
     */
    public String getName() {
        if (element.getNodeName().equals("sitetree")) {
            log.warn("Sitetree node has no name");
            return "/";
        }
        return element.getAttribute("name");
    }

    /**
     * @see
     */
    public String getLabel() {
        if (element.getNodeName().equals("sitetree")) {
            log.warn("Sitetree node has no label");
            return null;
        }
        return element.getElementsByTagName("label").item(0).getFirstChild().getNodeValue();
    }

    /**
     * @see
     */
    public void setLabel(String label) {
        if (element.getNodeName().equals("sitetree")) {
            log.warn("Sitetree node has no label");
        } else {
            element.getElementsByTagName("label").item(0).getFirstChild().setNodeValue(label);
        }
    }

    /**
     *
     */
    public Element getElement() {
        return this.element;
    }
}
