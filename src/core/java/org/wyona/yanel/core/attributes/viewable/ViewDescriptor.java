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

package org.wyona.yanel.core.attributes.viewable;

/**
 * Each view has an ID and a mime type. The view descriptor cointains these values.
 */
public class ViewDescriptor {

    private String id;
    private String mt;

    /**
     *
     */
    public ViewDescriptor() {
    }

    /**
     *
     */
    public ViewDescriptor(String id) {
        this.id = id;
    }

    /**
     *
     */
    public void setMimeType(String mt) {
        this.mt = mt;
    }

    /**
     *
     */
    public String getMimeType() {
        return mt;
    }

    /**
     *
     */
    public String getId() {
        return id;
    }
}
