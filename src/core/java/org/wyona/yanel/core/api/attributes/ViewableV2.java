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

package org.wyona.yanel.core.api.attributes;

import org.wyona.yanel.core.Path;
import org.wyona.yanel.core.attributes.viewable.View;
import org.wyona.yanel.core.attributes.viewable.ViewDescriptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.io.OutputStream;

/**
 *
 */
public interface ViewableV2 {

    /**
     *
     */
    public ViewDescriptor[] getViewDescriptors();

    /**
     * NOTE: A resource does not necessarily have a path
     */
    public View getView(Path path, OutputStream out, String viewId) throws Exception;

    /**
     *
     */
    public void getView(HttpServletRequest request, HttpServletResponse response, String viewId) throws Exception;
}
