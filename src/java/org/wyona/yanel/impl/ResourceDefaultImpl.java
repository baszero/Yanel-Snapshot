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

package org.wyona.yanel.impl;

import org.wyona.yanel.core.Resource;
import org.wyona.yanel.core.ResourceTypeDefinition;
import org.wyona.yanel.core.attributes.CreatableV1;
import org.wyona.yanel.core.attributes.View;
import org.wyona.yanel.core.attributes.ViewableV1;
import org.wyona.yanel.core.attributes.ViewDescriptor;

/**
 *
 */
public class ResourceDefaultImpl extends Resource implements CreatableV1, ViewableV1 {

    /**
     *
     */
    public ResourceDefaultImpl() {
        super();
    }

    /**
     *
     */
    public String[] getPropertyNames() {
        String[] pn = {"name", "content"};
        return pn;
    }

    /**
     *
     */
    public Object getProperty(String name) {
        return null;
    }

    /**
     *
     */
    public void setProperty(String name, Object value) {
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
    public View getView(String suffix, String viewId) {
        return null;
    }
}
