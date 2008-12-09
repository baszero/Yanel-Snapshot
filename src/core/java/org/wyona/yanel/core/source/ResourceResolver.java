package org.wyona.yanel.core.source;

import java.util.HashMap;

import org.apache.log4j.Category;
import org.wyona.yanel.core.Constants;
import org.wyona.yanel.core.Path;
import org.wyona.yanel.core.Resource;
import org.wyona.yanel.core.ResourceManager;
import org.wyona.yanel.core.Yanel;
import org.wyona.yanel.core.api.attributes.ViewableV1;
import org.wyona.yanel.core.api.attributes.ViewableV2;
import org.wyona.yanel.core.attributes.viewable.View;
import org.wyona.yanel.core.util.ResourceAttributeHelper;
import javax.xml.transform.URIResolver;
import javax.xml.transform.Source;
import javax.xml.transform.stream.StreamSource;


/**
 * Source resolver for yanel resources.
 * It returns an Source made from the view of the resource with
 * the given uri. It will look for the resource in the realm of the resource
 * which is passed to the constructor of this ResourceResolver.
 * 
 * It uses the following URI syntax:
 * yanelresource:/path/to/resource
 * 
 * TODO: support access to other realms, e.g. yanelresource:realmid:path/to/resource
 * TODO: support relative uris?
 */
public class ResourceResolver implements URIResolver {

    private static Category log = Category.getInstance(ResourceResolver.class);
    
    private static final String SCHEME = "yanelresource";

    private Resource resource;
    
    public ResourceResolver(Resource resource) {
        this.resource = resource;
    }
    
    /**
     */
    public Source resolve(String uri, String base) throws SourceException {
        String prefix = SCHEME + ":";
        if (!uri.startsWith(prefix)) {
            log.error("unknown scheme: " + uri);
            return null;
        }
        try {
            uri = uri.substring(prefix.length());
            HashMap parameters = readParameters(uri);
            if (uri.indexOf("?")>-1) {
                uri = uri.substring(0, uri.indexOf("?"));
            }
            ResourceManager manager = Yanel.getInstance().getResourceManager();
            Resource targetResource = manager.getResource(resource.getEnvironment(), 
                    resource.getRealm(), uri);
            // TODO: don't overwrite existing parameters, but add the new ones
            targetResource.setParameters(parameters);
            
            // Check which if there is a view requested for the resource
            String viewid = (String)parameters.get(Constants.Request.YANEL_RESOURCE_VIEWID);
            
            if (ResourceAttributeHelper.hasAttributeImplemented(targetResource, "Viewable", "1")) {
                String viewV1path = resource.getRealm().getMountPoint() + uri.substring(1);
                if (log.isDebugEnabled()) {
                    log.debug("including document: " + viewV1path);
                }
                View view = ((ViewableV1) targetResource).getView(new Path(viewV1path), viewid);
                return new StreamSource(view.getInputStream());
            } else if (ResourceAttributeHelper.hasAttributeImplemented(targetResource, "Viewable", "2")) {
                View view = ((ViewableV2) targetResource).getView(viewid);
                if (!view.isResponse()) {
                    throw new Exception("Reading from the response has not been implemented yet!");
                }
                return new StreamSource(view.getInputStream());
            } else {
                log.warn("Resource is not viewable: " + uri);
                return null;
            }
        } catch (Exception e) {
            String errorMsg = "Could not resolve URI: " + uri + ": " + e.toString();
            log.error(errorMsg, e);
            throw new SourceException(errorMsg, e);
        }
    }
    
    protected HashMap readParameters(String uri) {
        HashMap parameters = new HashMap();
        int queryIndex = uri.indexOf("?"); 
        if (queryIndex > -1 && queryIndex < uri.length()) {
            String query = uri.substring(uri.indexOf("?") + 1);
            String[] paramPairs = query.split("&");
            for (int i=0; i<paramPairs.length; i++) {
                String[] tokens = paramPairs[i].split("=");
                String name = tokens[0];
                // TODO: accept empty value
                String value = tokens[1];
                if (log.isDebugEnabled()) {
                    log.debug("adding parameter: name: " + name + " value: " + value);
                }
                parameters.put(name, value);
            }
        }
        return parameters;
    }
}
