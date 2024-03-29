/*
 * Copyright 2007-2009 Wyona
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

package org.wyona.yanel.impl.resources.usecase;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.InputStream;

import javax.xml.transform.Source;
import javax.xml.transform.stream.StreamSource;

import org.apache.commons.jelly.JellyContext;
import org.apache.commons.jelly.XMLOutput;
import org.apache.log4j.Logger;
import org.wyona.yanel.core.attributes.viewable.View;
import org.wyona.yanel.core.source.SourceResolver;
import org.wyona.yanel.core.util.PathUtil;
import org.wyona.yanel.impl.resources.xml.ConfigurableViewDescriptor;
import org.wyona.yanel.impl.resources.BasicXMLResource;
import org.wyona.yarep.core.Repository;
import org.xml.sax.InputSource;

public class UsecaseResource extends BasicXMLResource {

    private static Logger log = Logger.getLogger(UsecaseResource.class);

    @Override
    public View getView(String viewID) throws Exception {
        init();
        return processUsecase(viewID);
    }
    
    protected void init() throws UsecaseException {
        // implement in subclass
    }
    
    protected View processUsecase(String viewID) throws UsecaseException {
        return generateView(viewID);
    }
    
    protected View generateView(String viewID) throws UsecaseException {
        if (viewID == null || viewID.length() == 0) {
            viewID = DEFAULT_VIEW_ID;
        }
        try {
            ConfigurableViewDescriptor viewDescriptor = (ConfigurableViewDescriptor)getViewDescriptor(viewID);
            View view = null;
           
            if (viewDescriptor == null) {
                throw new UsecaseException("Usecase resource '" + getName() + "' has no view with id: " + viewID);
            }
            
            if (viewDescriptor.getType().equals(ConfigurableViewDescriptor.TYPE_JELLY)) {
                String viewTemplateURI = viewDescriptor.getTemplate();
                InputStream xmlInputStream = getJellyTextInputStream(viewID, viewTemplateURI);
                view = getXMLView(viewID, xmlInputStream);
            } else if (viewDescriptor.getType().equals(ConfigurableViewDescriptor.TYPE_JELLY_XML)) {
                String viewTemplateURI = viewDescriptor.getTemplate();
                InputStream xmlInputStream = getJellyXMLInputStream(viewID, viewTemplateURI);
                view = getXMLView(viewID, xmlInputStream);
            } else if (viewDescriptor.getType().equals(ConfigurableViewDescriptor.TYPE_JELLY_TEXT)) {
                String viewTemplateURI = viewDescriptor.getTemplate();
                InputStream xmlInputStream = getJellyTextInputStream(viewID, viewTemplateURI);
                view = getXMLView(viewID, xmlInputStream);
            // TODO: Why is this commented? It would be useful in some cases if one could redirect directly to the original referer instead sending a DONE screen.
            /*} else if (viewDescriptor.getType().equals(ViewDescriptor.TYPE_REDIRECT)) {
                String redirectURL = getRedirectURL(viewDescriptor);
                UsecaseView view = new UsecaseView(viewDescriptor.getId(), UsecaseView.TYPE_REDIRECT);
                view.setRedirectURL(redirectURL);
                return view;*/
            } else if (viewDescriptor.getType().equals(ConfigurableViewDescriptor.TYPE_CUSTOM)) {
                view = renderCustomView(viewDescriptor);
            } else {
                throw new UsecaseException("No such type '" + viewDescriptor.getType() + "' of view '" + viewID + "' of usecase resource " + getName() + " implemented!");
            }
            view.setHttpHeaders(viewDescriptor.getHttpHeaders());
            return view;
        } catch (Exception e) {
            String errorMsg = "Error generating view '" + viewID + "' of usecase resource: " + getName() + ": " + e;
            log.error(errorMsg, e);
            throw new UsecaseException(errorMsg, e);
        }
    }
    
    /**
     * TODO: What exactly is the name?
     */
    protected String getName() {
        try {
            return getConfiguration().getNode().getPath() + " (" + getResourceTypeUniversalName() +")";
        } catch(Exception e) {
            return  "(" + getResourceTypeUniversalName() +")";
        }
    }

    /**
     * Generate jelly view
     * @deprecated Use {@link #getJelly(String, boolean)} instead.
     */
    @Deprecated
    protected InputStream getJellyXML(ConfigurableViewDescriptor viewDescriptor) throws UsecaseException {
        String viewTemplateURI = viewDescriptor.getTemplate();
        String viewID = viewDescriptor.getId();
        return getJellyInputStream(viewID, viewTemplateURI, false);
    }

    /**
     * Generate jelly view.
     */
    private InputStream getJellyInputStream(String viewID, String viewTemplate, boolean XMLoutput) throws UsecaseException {
        try {

            if (log.isDebugEnabled()) log.debug("viewTemplate: "+viewTemplate);
            Repository repo = this.getRealm().getRepository();
            
            JellyContext jellyContext = new JellyContext();
            jellyContext.setVariable("resource", this);
            jellyContext.setVariable("yanel.back2context", PathUtil.backToContext(realm, getPath()));
            jellyContext.setVariable("yanel.back2realm", PathUtil.backToRealm(getPath()));
            jellyContext.setVariable("yanel.globalHtdocsPath", PathUtil.getGlobalHtdocsPath(this));
            jellyContext.setVariable("yanel.resourcesHtdocsPath", PathUtil.getResourcesHtdocsPathURLencoded(this));
            jellyContext.setVariable("yanel.reservedPrefix", this.getYanel().getReservedPrefix());
            //jellyContext.setVariable("request", request);

            ByteArrayOutputStream jellyResultStream = new ByteArrayOutputStream();
            XMLOutput jellyOutput = XMLOutput.createXMLOutput(jellyResultStream, XMLoutput);
            InputStream templateInputStream;
            String templatePublicId;
            String templateSystemId;
            if (viewTemplate.startsWith("/")) {
                if (log.isDebugEnabled()) log.debug("Accessing view template directly from the repo (no protocol specified). View Template: " + viewTemplate);
                // for backwards compatibility. when not using a protocol
                templateInputStream = repo.getNode(viewTemplate).getInputStream();
                templatePublicId = "yanelrepo:"+viewTemplate;
                /*XXX HACK the following does not work: Jelly wants URLs => protocol must be registered by the JVM!
                templateSystemId = "yanelrepo:"+viewTemplate;
                */
                templateSystemId = "file:///yanelrepo"+viewTemplate;

            } else {
                if (log.isDebugEnabled()) log.debug("Accessing view template through the source-resolver (protocol specified). View Template: " + viewTemplate);
                SourceResolver resolver = new SourceResolver(this);
                Source templateSource = resolver.resolve(viewTemplate, null);
                templateInputStream = ((StreamSource)templateSource).getInputStream();
                templatePublicId = templateSource.getSystemId();
                /*XXX HACK the following does not work: Jelly wants URLs => protocol must be registered by the JVM!
                templateSystemId = templateSource.getSystemId();
                */
                templateSystemId = "file:///"+viewTemplate.replaceFirst(":", "/");
            }
            InputSource inputSource = new InputSource(templateInputStream);
            inputSource.setPublicId(templatePublicId);
            inputSource.setSystemId(templateSystemId);
            jellyContext.runScript(inputSource, jellyOutput);
            //XXX should we close templateInputStream here?!?
            
            jellyOutput.flush();
            byte[] result = jellyResultStream.toByteArray();
            //System.out.println(new String(result, "utf-8"));
            return new ByteArrayInputStream(result);
        } catch (Exception e) {
            String errorMsg = "Error creating 'jelly' view '" + viewID + "' of usecase resource: " + getName() + ": " + e;
            log.error(errorMsg, e);
            throw new UsecaseException(errorMsg, e);
        }
    }
        
    private InputStream getJellyTextInputStream(String viewID, String viewTemplateURI) throws UsecaseException {
                return getJellyInputStream(viewID, viewTemplateURI, false);
    }

    private InputStream getJellyXMLInputStream(String viewID, String viewTemplateURI) throws UsecaseException {
                return getJellyInputStream(viewID, viewTemplateURI, true);
    }

    protected String getRedirectURL(ConfigurableViewDescriptor viewDescriptor) {
        return viewDescriptor.getRedirectURL();
    }
    
    /**
     * Allows to implement subclasses a custom view, which is executed if TYPE_CUSTOM
     */
    protected View renderCustomView(ConfigurableViewDescriptor viewDescriptor) throws UsecaseException {
        log.error("Not implemented! Please make sure to implement this method on your subclass when using TYPE_CUSTOM, because type '" + viewDescriptor.getType() + "' seems to be a custom type!");
        return null;
    }
    
    @Override
    public boolean exists() throws Exception {
        return true;
    }
}
