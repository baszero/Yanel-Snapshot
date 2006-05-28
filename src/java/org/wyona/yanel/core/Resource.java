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

package org.wyona.yanel.core;

/**
 *
 */
public abstract class Resource {

    private String uname;

    /**
     *
     */
    public Resource(String universalName) {
        this.uname = universalName;
    }

    /**
     *
     */
    public String getResourceTypeUniversalName() {
        return uname;
    }

    /**
     *
     */
    public String getResourceTypeLocalName() {
        return uname.substring(uname.indexOf("}") + 1, uname.length() -2);
    }

    /**
     *
     */
    public String getResourceTypeNamespace() {
        return uname.substring(uname.indexOf("{") + 1, uname.indexOf("}"));
    }
}
