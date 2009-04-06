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

package org.wyona.yanel.core.navigation;

import org.wyona.yanel.core.navigation.Node;
import org.wyona.yanel.core.map.Realm;

import org.w3c.dom.Document;

/**
 * Sitetree interface
 */
public interface Sitetree {

    /**
     * @param document Implementation specific configuration (for example snippet of realm.xml or .yanel-rc)
     * @param resolver In case the configuration contains implementation specific paths (for example relative to realm.xml or .yanel-rc), then these paths can be resolved accordingly
     */
    public void init(Document document, javax.xml.transform.URIResolver resolver);

    /**
     *
     */
    public Node getSitetreeNode();

    /**
     *
     */
    public Node getNode(Realm realm, String path);

    /**
     * Create new node
     * @param name Name of node, for example "hello-world"
     * @param label Label of node, for example "Hello World!"
     */
    public Node createNode(String name, String label);
}
