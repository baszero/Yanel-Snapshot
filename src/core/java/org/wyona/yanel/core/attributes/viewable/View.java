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

import java.io.InputStream;

/**
 *
 */
public class View {

    private String mt;
    private String encoding = null;
    private InputStream is;
    private boolean isResponse = true;

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
    public void setEncoding(String encoding) {
        this.encoding = encoding;
    }

    /**
     *
     */
    public String getEncoding() {
        return encoding;
    }

    /**
     *
     */
    public void setInputStream(InputStream is) {
        this.is = is;
    }

    /**
     *
     */
    public InputStream getInputStream() {
        return is;
    }

    /**
     * Checks if this view will be used by Yanel to write the response.
     * The default is true, and may be turned off for resources which want to 
     * write the response themselves.
     */
    public boolean isResponse() {
        return isResponse;
    }

    /**
     * Choose whether this view will be used by Yanel to write the response.
     * The default is true, and may be turned off for resources which want to 
     * write the response themselves.
     */
    public void setResponse(boolean isResponse) {
        this.isResponse = isResponse;
    }
}
