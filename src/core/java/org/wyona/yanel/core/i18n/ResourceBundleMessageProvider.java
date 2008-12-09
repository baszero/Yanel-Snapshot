/*
* Licensed to the Apache Software Foundation (ASF) under one or more
* contributor license agreements.  See the NOTICE file distributed with
* this work for additional information regarding copyright ownership.
* The ASF licenses this file to You under the Apache License, Version 2.0
* (the "License"); you may not use this file except in compliance with
* the License.  You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*/
package org.wyona.yanel.core.i18n;

import java.util.Locale;
import java.util.MissingResourceException;
import java.util.ResourceBundle;

/**
 * The <code>ResourceBundleMessageProvider</code> deals with messages defined in 
 * resource bundles.
 */
public class ResourceBundleMessageProvider implements MessageProvider {
    private final String baseName;

    /**
     *
     */
    public ResourceBundleMessageProvider(String baseName) {
        this.baseName = baseName;
    }

    public String getText(String key, Locale locale, Locale defaultLocale) {
        ResourceBundle resourceBundle;
        String text = null;
        try {
            resourceBundle = ResourceBundle.getBundle(baseName, locale);
            text = resourceBundle.getObject(key).toString();
            return text;
        } catch (MissingResourceException e) {
            // ignore
        }
        try {
            resourceBundle = ResourceBundle.getBundle(baseName, defaultLocale);
            text = resourceBundle.getObject(key).toString();
        } catch (MissingResourceException e) {
            // ignore
        }
        return text;
    }
}