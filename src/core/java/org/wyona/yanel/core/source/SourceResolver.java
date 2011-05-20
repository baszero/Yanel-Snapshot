package org.wyona.yanel.core.source;

import java.util.HashMap;

import javax.xml.transform.Source;
import javax.xml.transform.TransformerException;
import javax.xml.transform.URIResolver;

import org.apache.log4j.Logger;
import org.wyona.yanel.core.Resource;
import org.wyona.commons.io.PathUtil;

/**
 * Resolves a URI to a Source.
 * This class just checks the scheme and delegates to the scheme-specific resolver.
 * 
 * TODO: allow to configure schemes in a config file
 */
public class SourceResolver implements URIResolver {

    private static final Logger log = Logger.getLogger(SourceResolver.class);
    
    private HashMap<String, URIResolver> resolvers;
    private Resource resource;
    
    public SourceResolver(Resource resource) {
        this.resource = resource;
        this.resolvers = new HashMap<String, URIResolver>();
    }

    /**
     * Get source for a specific URL, e.g. 'rthtdocs:/xslt/foaf2xhtml.xsl' (whereas in this case base can be set to null)
     */
    public Source resolve(String uri, String base) throws SourceException {
        if (log.isDebugEnabled()) {
            log.debug("URI to be resolved: " + uri);
            log.debug("Base: "+ base);
        }

        // NOTE: One cannot use ":/" in order to find the protocol/scheme, because one can also specifiy the realm id and repository id, for example: yanelrepo:REALM_ID:REPO_ID:/foo/bar.gif
        int colonIndex = uri.indexOf(":");
        //int colonIndex = uri.indexOf(":/");
        String uriScheme = "";
        if (colonIndex <= 0) {//Check for scheme in URI, if true, then URI has no scheme
            if (log.isDebugEnabled()) log.debug("URI <" + uri + "> has no scheme.");
            if (base != null) {
                int colBaseIndex = base.indexOf(":");
                //int colBaseIndex = base.indexOf(":/");
                if(colBaseIndex <=0 ){//Check for scheme in Base
                    throw new SourceException("invalid url syntax (missing scheme): " + uri);//no scheme found in uri and base
                }
                uriScheme = base.substring(0, colBaseIndex);
                uri = PathUtil.concat(base,uri);                
                if (log.isDebugEnabled()) log.debug("Base URI <" + base + "> has scheme \"" + uriScheme + "\".");
            } else {
                log.error("Neither scheme for URI nor base specified for URI: " + uri);
                throw new SourceException("invalid url syntax (missing scheme): " + uri);//no scheme found in uri and base
            }
        } else {//uri contains scheme
            uriScheme = uri.substring(0, colonIndex);
        }
        if (log.isDebugEnabled()) log.debug("URI <" + uri + "> has scheme \"" + uriScheme + "\".");

        URIResolver resolver = getResolver(uriScheme);
        if (resolver != null) {
            try {
                Source s = resolver.resolve(uri, base);
                s.setSystemId(uri);
                return s;
            } catch (TransformerException e) {
                throw new SourceException(e.getMessage(), e);
            }
        }
        throw new SourceException("No resolver could be loaded for scheme: " + uriScheme);
    }
    
    /**
     * Get resolver for a particular scheme, e.g. rthtdocs (htdocs directory of a resource)
     * @param scheme Scheme/protocol
     */
    private URIResolver getResolver(String scheme) {
        URIResolver resolver = null;
        if (this.resolvers.containsKey(scheme)) {
            resolver = this.resolvers.get(scheme);
        } else {
            if (scheme.equals("yanelresource")) {
                resolver = new ResourceResolver(this.resource);
                this.resolvers.put(scheme, resolver);
            } else if (scheme.equals("yanelrepo")) {
                resolver = new YanelRepositoryResolver(this.resource);
                this.resolvers.put(scheme, resolver);
                //resolver = new RepositoryResolver(this.resource);
            } else if (scheme.equals("http")) {
                resolver = new HttpResolver(this.resource);
                this.resolvers.put(scheme, resolver);
            } else if (scheme.equals("rthtdocs")) {
                resolver = new RTHtdocsResolver(this.resource);
                this.resolvers.put(scheme, resolver);
            } else if (scheme.equals("rtyanelhtdocs")) {
                resolver = new RTYanelHtdocsResolver(this.resource);
                this.resolvers.put(scheme, resolver);
            } else if (scheme.equals("yanelhtdocs")) {
                resolver = new YanelHtdocsResolver(this.resource);
                this.resolvers.put(scheme, resolver);
            }
        }
        return resolver;
    }
}
