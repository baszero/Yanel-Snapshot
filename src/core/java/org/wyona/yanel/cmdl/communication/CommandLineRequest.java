/*
 * Copyright 2006-2009 Wyona
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

package org.wyona.yanel.cmdl.communication;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.security.Principal;
import java.util.Enumeration;
import java.util.Locale;
import java.util.Map;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletInputStream;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;

/**
 * Not fully implemented yet.
 */
public class CommandLineRequest implements HttpServletRequest {

    private static Logger log = Logger.getLogger(CommandLineRequest.class);
    
    protected String url;

    /**
     *
     */
    private class ParameterNames implements Enumeration<String> {
        private java.util.Vector<String> names;
        public ParameterNames(Enumeration<?> names) {
            log.error("DEBUG: Copy parameters: " + names.getClass().getName());
            this.names = new java.util.Vector<String>();
            while (names.hasMoreElements()) {
                this.names.add((String)names.nextElement());
            }
        }

        // TODO: Isn't this implementation wrong, because it empties the vector and can only be used once!
        public String nextElement() {
            String name = (String) names.elementAt(0);
            names.removeElementAt(0);
            return name;
        }

        public boolean hasMoreElements() {
            if (names.size() > 0) return true;
            return false;
        }
    }

    ParameterNames parameterNames;
    java.util.HashMap<String, String[]> map = new java.util.HashMap<String, String[]>();
    
    public CommandLineRequest(String url) {
        this.url = url;
    }
    
    public CommandLineRequest(HttpServletRequest request) {
        log.error("DEBUG: Copy request: " + request.getClass().getName());
        Enumeration<?> pn = request.getParameterNames();
        while(pn.hasMoreElements()) {
            String name = (String) pn.nextElement();
            String[] values = request.getParameterValues(name);
            map.put(name, values);
        }
        parameterNames = new ParameterNames(request.getParameterNames());
    }
    
    public StringBuffer getRequestURL() {
        return new StringBuffer(url);
    }
    
    public String getParameter(String name) {
        Object param = map.get(name);
        if (param == null) {
            return null;
        } else {
            if (param instanceof String[]) {
                return ((String [])param)[0];
            } else {
                return param.toString();
            }
        }
    }

    public Object getAttribute(String arg0) {
        // TODO Auto-generated method stub
        return null;
    }

    public Enumeration<?> getAttributeNames() {
        // TODO Auto-generated method stub
        return null;
    }

    public String getCharacterEncoding() {
        // TODO Auto-generated method stub
        return null;
    }

    public int getContentLength() {
        // TODO Auto-generated method stub
        return 0;
    }

    public String getContentType() {
        // TODO Auto-generated method stub
        return null;
    }

    public ServletInputStream getInputStream() throws IOException {
        // TODO Auto-generated method stub
        return null;
    }

    public Locale getLocale() {
        // TODO Auto-generated method stub
        return null;
    }

    public Enumeration<?> getLocales() {
        // TODO Auto-generated method stub
        return null;
    }

    public Map<?, ?> getParameterMap() {
        log.error("Not implemented yet!");
        return null;
    }

    public Enumeration<?> getParameterNames() {
        return parameterNames;
    }

    public String[] getParameterValues(String arg0) {
        log.error("getParameterValues: " + (String[]) map.get(arg0));
        return (String[]) map.get(arg0);
    }

    public String getProtocol() {
        // TODO Auto-generated method stub
        return null;
    }

    public BufferedReader getReader() throws IOException {
        // TODO Auto-generated method stub
        return null;
    }

    public String getRealPath(String arg0) {
        // TODO Auto-generated method stub
        return null;
    }

    public String getRemoteAddr() {
        // TODO Auto-generated method stub
        return null;
    }

    public String getRemoteHost() {
        // TODO Auto-generated method stub
        return null;
    }

    public RequestDispatcher getRequestDispatcher(String arg0) {
        // TODO Auto-generated method stub
        return null;
    }

    public String getScheme() {
        // TODO Auto-generated method stub
        return null;
    }

    public String getServerName() {
        // TODO Auto-generated method stub
        return null;
    }

    public int getServerPort() {
        // TODO Auto-generated method stub
        return 0;
    }

    public boolean isSecure() {
        // TODO Auto-generated method stub
        return false;
    }

    public void removeAttribute(String arg0) {
        // TODO Auto-generated method stub
        
    }

    public void setAttribute(String arg0, Object arg1) {
        // TODO Auto-generated method stub
        
    }

    public void setCharacterEncoding(String arg0) throws UnsupportedEncodingException {
        // TODO Auto-generated method stub
        
    }

    public String getAuthType() {
        // TODO Auto-generated method stub
        return null;
    }

    public String getContextPath() {
        // TODO Auto-generated method stub
        return null;
    }

    public Cookie[] getCookies() {
        // TODO Auto-generated method stub
        return null;
    }

    public long getDateHeader(String arg0) {
        // TODO Auto-generated method stub
        return 0;
    }

    public String getHeader(String arg0) {
        // TODO Auto-generated method stub
        return null;
    }

    public Enumeration<?> getHeaderNames() {
        // TODO Auto-generated method stub
        return null;
    }

    public Enumeration<?> getHeaders(String arg0) {
        // TODO Auto-generated method stub
        return null;
    }

    public int getIntHeader(String arg0) {
        // TODO Auto-generated method stub
        return 0;
    }

    public String getMethod() {
        // TODO Auto-generated method stub
        return null;
    }

    public String getPathInfo() {
        // TODO Auto-generated method stub
        return null;
    }

    public String getPathTranslated() {
        // TODO Auto-generated method stub
        return null;
    }

    public String getQueryString() {
        // TODO Auto-generated method stub
        return null;
    }

    public String getRemoteUser() {
        // TODO Auto-generated method stub
        return null;
    }

    public String getRequestedSessionId() {
        // TODO Auto-generated method stub
        return null;
    }

    public String getRequestURI() {
        // TODO Auto-generated method stub
        return null;
    }

    public String getServletPath() {
        // TODO Auto-generated method stub
        return null;
    }

    public HttpSession getSession() {
        // TODO Auto-generated method stub
        return null;
    }

    public HttpSession getSession(boolean arg0) {
        // TODO Auto-generated method stub
        return null;
    }

    public Principal getUserPrincipal() {
        // TODO Auto-generated method stub
        return null;
    }

    public boolean isRequestedSessionIdFromCookie() {
        // TODO Auto-generated method stub
        return false;
    }

    public boolean isRequestedSessionIdFromUrl() {
        // TODO Auto-generated method stub
        return false;
    }

    public boolean isRequestedSessionIdFromURL() {
        // TODO Auto-generated method stub
        return false;
    }

    public boolean isRequestedSessionIdValid() {
        // TODO Auto-generated method stub
        return false;
    }

    public boolean isUserInRole(String arg0) {
        // TODO Auto-generated method stub
        return false;
    }

    // Servlet API 2.4
    public String getLocalAddr() {
        // TODO Auto-generated method stub
        return null;
    }

    // Servlet API 2.4
    public String getLocalName() {
        // TODO Auto-generated method stub
        return null;
    }

    // Servlet API 2.4
    public int getLocalPort() {
        // TODO Auto-generated method stub
        return 0;
    }

    // Servlet API 2.4
    public int getRemotePort() {
        // TODO Auto-generated method stub
        return 0;
    }

}
