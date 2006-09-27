package org.wyona.yanel.servlet;

import java.io.InputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.io.Writer;
import java.net.URL;
import java.util.Enumeration;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.wyona.yanel.core.Path;
import org.wyona.yanel.core.Resource;
import org.wyona.yanel.core.ResourceTypeDefinition;
import org.wyona.yanel.core.ResourceTypeRegistry;
import org.wyona.yanel.core.api.attributes.ModifiableV1;
import org.wyona.yanel.core.api.attributes.ModifiableV2;
import org.wyona.yanel.core.api.attributes.ViewableV1;
import org.wyona.yanel.core.api.attributes.ViewableV2;
import org.wyona.yanel.core.attributes.viewable.View;
import org.wyona.yanel.core.map.Map;
import org.wyona.yanel.core.map.MapFactory;
import org.wyona.yanel.core.map.Realm;

import org.wyona.yanel.util.ResourceAttributeHelper;

import org.wyona.security.core.IdentityManagerFactory;
import org.wyona.security.core.PolicyManagerFactory;
import org.wyona.security.core.api.Identity;
import org.wyona.security.core.api.IdentityManager;
import org.wyona.security.core.api.PolicyManager;
import org.wyona.security.core.api.Role;

import org.apache.log4j.Category;

import org.apache.avalon.framework.configuration.Configuration;
import org.apache.avalon.framework.configuration.DefaultConfigurationBuilder;

import org.w3c.dom.Document;
import org.w3c.dom.Element;

/**
 *
 */
public class YanelServlet extends HttpServlet {

    private static Category log = Category.getInstance(YanelServlet.class);

    private ServletConfig config;

    ResourceTypeRegistry rtr;

    PolicyManager pm;
    IdentityManager im;
    Map map;

    private static String IDENTITY_KEY = "identity";

    private static final String METHOD_PROPFIND = "PROPFIND";
    private static final String METHOD_GET = "GET";
    private static final String METHOD_POST = "POST";
    private static final String METHOD_PUT = "PUT";
    private static final String METHOD_DELETE = "DELETE";

    /**
     *
     */
    public void init(ServletConfig config) {
        this.config = config;
        rtr = new ResourceTypeRegistry();

        PolicyManagerFactory pmf = PolicyManagerFactory.newInstance();
        pm = pmf.newPolicyManager();

        IdentityManagerFactory imf = IdentityManagerFactory.newInstance();
        im = imf.newIdentityManager();

        MapFactory mf = MapFactory.newInstance();
        map = mf.newMap();
    }

    /**
     *
     */
    public void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String httpAcceptMediaTypes = request.getHeader("Accept");
        log.debug("HTTP Accept Media Types: " + httpAcceptMediaTypes);
        String httpUserAgent = request.getHeader("User-Agent");
        log.debug("HTTP User Agent: " + httpUserAgent);
        String httpAcceptLanguage = request.getHeader("Accept-Language");
        log.debug("HTTP Accept Language: " + httpAcceptLanguage);

        // Logout from Yanel
        String yanelUsecase = request.getParameter("yanel.usecase");
        if(yanelUsecase != null && yanelUsecase.equals("logout")) {
            if(doLogout(request, response) != null) return;
        }

        // Authentication
        if(doAuthenticate(request, response) != null) return;

        // Check authorization
        if(doAuthorize(request, response) != null) return;

        // Delegate ...
        String method = request.getMethod();
        if (method.equals(METHOD_PROPFIND)) {
            doPropfind(request, response);
	} else if (method.equals(METHOD_GET)) {
            doGet(request, response);
	} else if (method.equals(METHOD_POST)) {
            doPost(request, response);
	} else if (method.equals(METHOD_PUT)) {
            doPut(request, response);
	} else if (method.equals(METHOD_DELETE)) {
            doDelete(request, response);
        } else {
            log.error("No such method implemented: " + method);
        }
    }

    /**
     *
     */
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        getContent(request, response);
    }

    /**
     *
     */
    private void getContent(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        View view = null;

        org.w3c.dom.Document doc = null;
        javax.xml.parsers.DocumentBuilderFactory dbf= javax.xml.parsers.DocumentBuilderFactory.newInstance();
        try {
            javax.xml.parsers.DocumentBuilder parser = dbf.newDocumentBuilder();
            org.w3c.dom.DOMImplementation impl = parser.getDOMImplementation();
            org.w3c.dom.DocumentType doctype = null;
            doc = impl.createDocument("http://www.wyona.org/yanel/1.0", "yanel", doctype);
        } catch(Exception e) {
            log.error(e.getMessage(), e);
            throw new ServletException(e.getMessage());
        }

        Element rootElement = doc.getDocumentElement();


        String servletContextRealPath = config.getServletContext().getRealPath("/");
        rootElement.setAttribute("servlet-context-real-path", servletContextRealPath);

        Element requestElement = (Element) rootElement.appendChild(doc.createElement("request"));
        requestElement.setAttribute("uri", request.getRequestURI());
        requestElement.setAttribute("servlet-path", request.getServletPath());

	HttpSession session = request.getSession(true);
        Element sessionElement = (Element) rootElement.appendChild(doc.createElement("session"));
        sessionElement.setAttribute("id", session.getId());
	Enumeration attrNames = session.getAttributeNames();
        if (!attrNames.hasMoreElements()) {
            Element sessionNoAttributesElement = (Element) sessionElement.appendChild(doc.createElement("no-attributes"));
        }
        while (attrNames.hasMoreElements()) {
            String name = (String)attrNames.nextElement();
            String value = session.getAttribute(name).toString();
            Element sessionAttributeElement = (Element) sessionElement.appendChild(doc.createElement("attribute"));
            sessionAttributeElement.setAttribute("name", name);
            sessionAttributeElement.appendChild(doc.createTextNode(value));
        }

        String rti = map.getResourceTypeIdentifier(new Path(request.getServletPath()));
        Resource res = null;
        long lastModified = -1;
        if (rti != null) {
            ResourceTypeDefinition rtd = rtr.getResourceTypeDefinition(rti);
            if (rtd == null) {
                String message = "No such resource type registered: " + rti + ", check " + rtr.getConfigurationFile();
                log.error(message);
                Element exceptionElement = (Element) rootElement.appendChild(doc.createElement("exception"));
                exceptionElement.appendChild(doc.createTextNode(message));

                setYanelOutput(response, doc);
                response.setStatus(javax.servlet.http.HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
                return;
            }

            Element rtiElement = (Element) rootElement.appendChild(doc.createElement("resource-type-identifier"));
            rtiElement.setAttribute("namespace",  rtd.getResourceTypeNamespace());
            rtiElement.setAttribute("local-name",  rtd.getResourceTypeLocalName());

            try {
                res = rtr.newResource(rti);
                if (res != null) {
                    res.setRTD(rtd);
                    Element resourceElement = (Element) rootElement.appendChild(doc.createElement("resource"));
                    if (ResourceAttributeHelper.hasAttributeImplemented(res, "Viewable", "1")) {
                        Element viewElement = (Element) resourceElement.appendChild(doc.createElement("view"));
                        viewElement.appendChild(doc.createTextNode("View Descriptors: " + ((ViewableV1) res).getViewDescriptors()));
                        String viewId = request.getParameter("yanel.resource.viewid");
                        try {
                            view = ((ViewableV1) res).getView(request, viewId);
                        } catch(org.wyona.yarep.core.NoSuchNodeException e) {
                            // TODO: Log all 404 within a dedicated file (with client info attached) such that an admin can react to it ...
                            String message = "No such node exception: " + e;
                            log.warn(e);
                            //log.error(e.getMessage(), e);
                            Element exceptionElement = (Element) rootElement.appendChild(doc.createElement("exception"));
                            exceptionElement.appendChild(doc.createTextNode(message));
                            exceptionElement.setAttribute("status", "404");
                            response.setStatus(javax.servlet.http.HttpServletResponse.SC_NOT_FOUND);
                            setYanelOutput(response, doc);
                            return;
                        } catch(Exception e) {
                            log.error(e.getMessage(), e);
                            String message = e.toString();
                            log.error(e.getMessage(), e);
                            Element exceptionElement = (Element) rootElement.appendChild(doc.createElement("exception"));
                            exceptionElement.appendChild(doc.createTextNode(message));
                            exceptionElement.setAttribute("status", "500");
                            response.setStatus(javax.servlet.http.HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
                            setYanelOutput(response, doc);
                            return;
                        }
                    } else if (ResourceAttributeHelper.hasAttributeImplemented(res, "Viewable", "2")) {
                        log.error("DEBUG: Resource is viewable V2");
                        String viewId = request.getParameter("yanel.resource.viewid");
                        ((ViewableV2) res).getView(request, response, viewId);
                        return;
                    } else {
                         Element noViewElement = (Element) resourceElement.appendChild(doc.createElement("no-view"));
                         noViewElement.appendChild(doc.createTextNode(res.getClass().getName() + " is not viewable!"));
                    }
                    if (ResourceAttributeHelper.hasAttributeImplemented(res, "Modifiable", "2")) {
                        lastModified = ((ModifiableV2) res).getLastModified(new Path(request.getServletPath()));
                        Element lastModifiedElement = (Element) resourceElement.appendChild(doc.createElement("last-modified"));
                        lastModifiedElement.appendChild(doc.createTextNode(new java.util.Date(lastModified).toString()));
                    } else {
                        Element noLastModifiedElement = (Element) resourceElement.appendChild(doc.createElement("no-last-modified"));
                    }
                } else {
                        Element resourceIsNullElement = (Element) rootElement.appendChild(doc.createElement("resource-is-null"));
                }
            } catch(Exception e) {
                log.error(e.getMessage(), e);
                String message = e.toString();
                log.error(e.getMessage(), e);
                Element exceptionElement = (Element) rootElement.appendChild(doc.createElement("exception"));
                exceptionElement.appendChild(doc.createTextNode(message));
                setYanelOutput(response, doc);
                response.setStatus(javax.servlet.http.HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
                return;
            }
        } else {
            Element noRTIFoundElement = (Element) rootElement.appendChild(doc.createElement("no-resource-type-identifier-found"));
            noRTIFoundElement.setAttribute("servlet-path", request.getServletPath());
        }


        String usecase = request.getParameter("yanel.resource.usecase");

        if (usecase != null && usecase.equals("checkout")) {
            log.debug("Checkout data ...");
            // TODO: Implement checkout ...
            log.warn("Acquire lock has not been implemented yet ...!");
            // acquireLock();
        }

        String meta = request.getParameter("yanel.resource.meta");
        if (meta != null) {
            if (meta.length() > 0) {
                log.error("DEBUG: meta length: " + meta.length());
            } else {
                log.error("DEBUG: Show all meta");
            }
            response.setStatus(javax.servlet.http.HttpServletResponse.SC_OK);
            setYanelOutput(response, doc);
            return;
        }


        if (view != null) {
            response.setContentType(patchContentType(view.getMimeType(), request));
            InputStream is = view.getInputStream();

            byte buffer[] = new byte[8192];
            int bytesRead;
           
            if (is != null) {
                // TODO: Yarep does not set returned Stream to null resp. is missing Exception Handling for the constructor. Exceptions should be handled here, but rather within Yarep or whatever repositary layer is being used ...
                bytesRead = is.read(buffer);
	        if (bytesRead == -1) {
                    String message = "InputStream of view does not seem to contain any data!";

                    Element exceptionElement = (Element) rootElement.appendChild(doc.createElement("exception"));
                    exceptionElement.appendChild(doc.createTextNode(message));
                    setYanelOutput(response, doc);
                    response.setStatus(javax.servlet.http.HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
                    return;
                }

                // TODO: Compare If-Modified-Since with lastModified and return 304 without content resp. check on ETag
                String ifModifiedSince = request.getHeader("If-Modified-Since");
                if (ifModifiedSince != null) {
                    log.error("DEBUG: TODO: Implement 304 ...");
                }

                java.io.OutputStream os = response.getOutputStream();
                os.write(buffer, 0, bytesRead);
                while ((bytesRead = is.read(buffer)) != -1) {
                    os.write(buffer, 0, bytesRead);
                }
                if(lastModified >= 0) response.setDateHeader("Last-Modified", lastModified);
                return;
            } else {
                String message = "InputStream of view is null!";
                Element exceptionElement = (Element) rootElement.appendChild(doc.createElement("exception"));
                exceptionElement.appendChild(doc.createTextNode(message));
            }
        } else {
            String message = "View is null!";
            Element exceptionElement = (Element) rootElement.appendChild(doc.createElement("exception"));
            exceptionElement.appendChild(doc.createTextNode(message));
        }

        setYanelOutput(response, doc);
        response.setStatus(javax.servlet.http.HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
        return;
    }

    /**
     *
     */
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String value = request.getParameter("yanel.resource.usecase");

        if (value != null && value.equals("save")) {
            log.debug("Save data ...");
            save(request, response);
            return;
	} else if (value != null && value.equals("checkin")) {
            log.debug("Checkin data ...");
            save(request, response);
            // TODO: Implement checkin ...
            log.warn("Release lock has not been implemented yet ...");
            // releaseLock();
            return;
        } else {
            log.info("No parameter yanel.resource.usecase!");

            String contentType = request.getContentType();
            if (contentType.indexOf("application/atom+xml") >= 0) {
                InputStream in = intercept(request.getInputStream());
                try {
                    Resource atomEntry = rtr.newResource("<{http://www.wyona.org/yanel/resource/1.0}atom-entry/>");
                    // TODO: Initiate Atom Feed Resource Type to get actual path for saving ...
                    log.error("DEBUG: Atom Feed: " + request.getServletPath() + " " + request.getRequestURI());
                    Path entryPath = new Path(request.getServletPath() + "/" + new java.util.Date().getTime() + ".xml");

                    Path p = ((ModifiableV2)atomEntry).write(entryPath, in);
                    if (p != null) {
                        log.error("DEBUG: Atom entry has been created: " + p);
                    } else {
                        log.error("Atom entry has NOT been created!");
                        // TODO: Return HTTP ...
                    }

                    byte buffer[] = new byte[8192];
                    int bytesRead;
                    InputStream resourceIn = ((ModifiableV2)atomEntry).getInputStream(entryPath);
                    OutputStream responseOut = response.getOutputStream();
                    while ((bytesRead = resourceIn.read(buffer)) != -1) {
                        responseOut.write(buffer, 0, bytesRead);
                    }

                    // TODO: Fix Location ...
                    response.setHeader("Location", "http://ulysses.wyona.org" + entryPath);
                    response.setStatus(javax.servlet.http.HttpServletResponse.SC_CREATED);
                    return;
                } catch (Exception e) {
                    log.error(e.getMessage(), e);
                    throw new IOException(e.getMessage());
                }
            }

            getContent(request, response);
        }
    }

    /**
     * HTTP PUT implementation
     */
    public void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // TODO: Reuse code doPost resp. share code with doPut

        String value = request.getParameter("yanel.resource.usecase");

        if (value != null && value.equals("save")) {
            log.debug("Save data ...");
            save(request, response);
            return;
	} else if (value != null && value.equals("checkin")) {
            log.debug("Checkin data ...");
            save(request, response);
            // TODO: Implement checkin ...
            log.warn("Release lock has not been implemented yet ...!");
            // releaseLock();
            return;
        } else {
            log.warn("No parameter yanel.resource.usecase!");

            String contentType = request.getContentType();
            if (contentType.indexOf("application/atom+xml") >= 0) {
                InputStream in = intercept(request.getInputStream());
                try {
                    Resource atomEntry = rtr.newResource("<{http://www.wyona.org/yanel/resource/1.0}atom-entry/>");
                    log.error("DEBUG: Atom Entry: " + request.getServletPath() + " " + request.getRequestURI());
                    Path entryPath = new Path(request.getServletPath());
                    // TODO: There seems to be a problem ...
                    Path p = ((ModifiableV2)atomEntry).write(entryPath, in);

                    // NOTE: This method does not update updated date
/*
                    OutputStream out = ((ModifiableV2)atomEntry).getOutputStream(entryPath);
                    byte buffer[] = new byte[8192];
                    int bytesRead;
                    while ((bytesRead = in.read(buffer)) != -1) {
                        out.write(buffer, 0, bytesRead);
                    }
*/

                    log.error("DEBUG: Atom entry has been saved: " + entryPath);

                    response.setStatus(javax.servlet.http.HttpServletResponse.SC_OK);
                    return;
                } catch (Exception e) {
                    log.error(e.getMessage(), e);
                    throw new IOException(e.getMessage());
                }
            }

            getContent(request, response);
        }
    }

    /**
     * HTTP DELETE implementation
     */
    public void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        Resource res = getResource(request);
        if (ResourceAttributeHelper.hasAttributeImplemented(res, "Modifiable", "2")) {
            if (((ModifiableV2) res).delete(new Path(request.getServletPath()))) {
                log.debug("Resource has been deleted: " + res);
                response.setStatus(response.SC_OK);
                return;
            } else {
                log.warn("Resource could not be deleted: " + res);
                response.setStatus(response.SC_FORBIDDEN);
                return;
            }
        } else {
            log.error("Resource '" + res + "' has interface ModifiableV2 not implemented." );
            response.sendError(response.SC_NOT_IMPLEMENTED);
            return;
        }
    }

    /**
     *
     */
    private Resource getResource(HttpServletRequest request) {
        String rti = map.getResourceTypeIdentifier(new Path(request.getServletPath()));
        if (rti != null) {
            ResourceTypeDefinition rtd = rtr.getResourceTypeDefinition(rti);

            try {
                Resource res = rtr.newResource(rti);
                res.setRTD(rtd);
                return res;
            } catch(Exception e) {
                log.error(e.getMessage(), e);
                return null;
            }
        } else {
            log.error("<no-resource-type-identifier-found servlet-path=\""+request.getServletPath()+"\"/>");
            return null;
        }
    }

    /**
     *
     */
    private void save(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        log.debug("Save data ...");

        InputStream in = request.getInputStream();
        java.io.ByteArrayOutputStream baos  = new java.io.ByteArrayOutputStream();
        byte[] buf = new byte[8192];
        int bytesR;
        while ((bytesR = in.read(buf)) != -1) {
            baos.write(buf, 0, bytesR);
        }

        // Buffer within memory (TODO: Maybe replace with File-buffering ...)
        // http://www-128.ibm.com/developerworks/java/library/j-io1/
        byte[] memBuffer = baos.toByteArray();

            // TODO: Should be delegated to resource type, e.g. <{http://...}xml/>!
            // Check on well-formedness ...
            String contentType = request.getContentType();
            log.debug("Content-Type: " + contentType);
            if (contentType.indexOf("application/xml") >= 0 || contentType.indexOf("application/xhtml+xml") >= 0) {
                log.info("Check well-formedness ...");
                javax.xml.parsers.DocumentBuilderFactory dbf= javax.xml.parsers.DocumentBuilderFactory.newInstance();
                try {
                    javax.xml.parsers.DocumentBuilder parser = dbf.newDocumentBuilder();

                    // TODO: Get log messages into log4j ...
                    //parser.setErrorHandler(...);

                    // NOTE: DOCTYPE is being resolved/retrieved (e.g. xhtml schema from w3.org) also
                    //       if isValidating is set to false.
                    //       Hence, for performance and network reasons we use a local catalog ...
                    //       Also see http://www.xml.com/pub/a/2004/03/03/catalogs.html
                    //       resp. http://xml.apache.org/commons/components/resolver/
                    // TODO: What about a resolver factory?
                    parser.setEntityResolver(new org.apache.xml.resolver.tools.CatalogResolver());

                    parser.parse(new java.io.ByteArrayInputStream(memBuffer));
                    //org.w3c.dom.Document document = parser.parse(new ByteArrayInputStream(memBuffer));
                } catch (org.xml.sax.SAXException e) {
                    log.warn("Data is not well-formed: "+e.getMessage());

                    StringBuffer sb = new StringBuffer();
                    sb.append("<?xml version=\"1.0\"?>");
                    sb.append("<exception xmlns=\"http://www.wyona.org/neutron/1.0\" type=\"data-not-well-formed\">");
                    sb.append("<message>Data is not well-formed: "+e.getMessage()+"</message>");
                    sb.append("</exception>");
                    response.setContentType("application/xml");
                    response.setStatus(javax.servlet.http.HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
                    PrintWriter w = response.getWriter();
                    w.print(sb);
                    return;
                } catch (Exception e) {
                    log.error(e.getMessage(), e);

                    StringBuffer sb = new StringBuffer();
                    sb.append("<?xml version=\"1.0\"?>");
                    sb.append("<exception xmlns=\"http://www.wyona.org/neutron/1.0\" type=\"neutron\">");
                    //sb.append("<message>" + e.getStackTrace() + "</message>");
                    //sb.append("<message>" + e.getMessage() + "</message>");
                    sb.append("<message>" + e + "</message>");
                    sb.append("</exception>");
                    response.setContentType("application/xml");
                    response.setStatus(javax.servlet.http.HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
                    PrintWriter w = response.getWriter();
                    w.print(sb);
                    return;
                }

                log.info("Data seems to be well-formed :-)");
            } else {
                log.info("No well-formedness check required for content type: " + contentType);
            }

/*
	    if (bytesRead == -1) {
                response.setContentType("text/plain");
                PrintWriter writer = response.getWriter();
                writer.print("No content!");
                return;
            }
*/

        OutputStream out = null;
        Resource res = getResource(request);
        if (ResourceAttributeHelper.hasAttributeImplemented(res, "Modifiable", "1")) {
            out = ((ModifiableV1) res).getOutputStream(new Path(request.getServletPath()));
        } else if (ResourceAttributeHelper.hasAttributeImplemented(res, "Modifiable", "2")) {
            out = ((ModifiableV2) res).getOutputStream(new Path(request.getServletPath()));
        } else {
            String message = res.getClass().getName() + " is not modifiable (neither V1 nor V2)!";
            log.warn(message);
 
            StringBuffer sb = new StringBuffer();

            // TODO: Differentiate between Neutron based and other clients ...
/*
            sb.append("<?xml version=\"1.0\"?>");
            sb.append("<html>");
            sb.append("<body>");
            sb.append("<resource>" + message + "</resource>");
            sb.append("</body>");
            sb.append("</html>");
            response.setContentType("application/xhtml+xml");
*/

            sb.append("<?xml version=\"1.0\"?>");
            sb.append("<exception xmlns=\"http://www.wyona.org/neutron/1.0\" type=\"neutron\">");
            sb.append("<message>" + message + "</message>");
            sb.append("</exception>");
            response.setContentType("application/xml");
            PrintWriter w = response.getWriter();
            w.print(sb);

            response.setStatus(javax.servlet.http.HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            return;
        }

        if (out != null) {
            log.debug("Content-Type: " + contentType);
            // TODO: Compare mime-type from response with mime-type of resource
            //if (contentType.equals("text/xml")) { ... }

            byte[] buffer = new byte[8192];
            int bytesRead;
            java.io.ByteArrayInputStream memIn = new java.io.ByteArrayInputStream(memBuffer);
            while ((bytesRead = memIn.read(buffer)) != -1) {
                out.write(buffer, 0, bytesRead);
            }

            StringBuffer sb = new StringBuffer();
            sb.append("<?xml version=\"1.0\"?>");
            sb.append("<html>");
            sb.append("<body>");
            sb.append("<p>Data has been saved ...</p>");
            sb.append("</body>");
            sb.append("</html>");


            response.setStatus(javax.servlet.http.HttpServletResponse.SC_OK);
            response.setContentType("application/xhtml+xml");
            PrintWriter w = response.getWriter();
            w.print(sb);

            log.info("Data has been saved ...");
            return;
        } else {
            log.error("OutputStream is null!");
 
            StringBuffer sb = new StringBuffer();
            sb.append("<?xml version=\"1.0\"?>");
            sb.append("<html>");
            sb.append("<body>");
            sb.append("<p>Exception: OutputStream is null!</p>");
            sb.append("</body>");
            sb.append("</html>");
            PrintWriter w = response.getWriter();
            w.print(sb);
            response.setContentType("application/xhtml+xml");
            response.setStatus(javax.servlet.http.HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            return;
        }
    }

    /**
     * Authorize request
     */
    private HttpServletResponse doAuthorize(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

	Role role = null;

        // TODO: Replace hardcoded roles by mapping between roles amd query strings ...
        String value = request.getParameter("yanel.resource.usecase");
        String contentType = request.getContentType();
        String method = request.getMethod();
        if (value != null && value.equals("save")) {
            log.debug("Save data ...");
            role = new Role("write");
	} else if (value != null && value.equals("checkin")) {
            log.debug("Checkin data ...");
            role = new Role("write");
	} else if (value != null && value.equals("checkout")) {
            log.debug("Checkout data ...");
            role = new Role("open");
	} else if (contentType != null && contentType.indexOf("application/atom+xml") >= 0 && (method.equals(METHOD_PUT) || method.equals(METHOD_POST))) {
            log.error("DEBUG: Write/Checkin Atom entry ...");
            role = new Role("write");
	} else if (method.equals(METHOD_DELETE)) {
            log.error("DEBUG: Delete resource ...");
            role = new Role("delete");
        } else {
            log.debug("Role will be 'view'!");
            role = new Role("view");
        }

        boolean authorized = false;

        // HTTP BASIC Authorization (For clients without session handling, e.g. OpenOffice or cadaver)
        String authorization = request.getHeader("Authorization");
        log.debug("Checking for Authorization Header: " + authorization);
        if (authorization != null) {
            if (authorization.toUpperCase().startsWith("BASIC")) {
                log.debug("Using BASIC authorization ...");
                // Get encoded user and password, comes after "BASIC "
                String userpassEncoded = authorization.substring(6);
                // Decode it, using any base 64 decoder
                sun.misc.BASE64Decoder dec = new sun.misc.BASE64Decoder();
                String userpassDecoded = new String(dec.decodeBuffer(userpassEncoded));
                log.error("DEBUG: userpassDecoded: " + userpassDecoded);
                // TODO: Use security package and remove hardcoded ...
		// Authenticate every request ...
                //if (im.authenticate(...)) {
                if (userpassDecoded.equals("lenya:levi")) {
                    //return pm.authorize(new org.wyona.commons.io.Path(request.getServletPath()), new Identity(...), new Role("view"));
                    authorized = true;
                    return null;
                }
                authorized = false;

                response.setHeader("WWW-Authenticate", "BASIC realm=\"yanel\"");
                response.sendError(response.SC_UNAUTHORIZED);
                PrintWriter writer = response.getWriter();
                writer.print("BASIC Authorization/Authentication Failed!");
                return response;
	    } else if (authorization.toUpperCase().startsWith("DIGEST")) {
                log.error("DIGEST is not implemented");
                authorized = false;
                response.sendError(response.SC_UNAUTHORIZED);
                response.setHeader("WWW-Authenticate", "DIGEST realm=\"yanel\"");
                PrintWriter writer = response.getWriter();
                writer.print("DIGEST is not implemented!");
                return response;
            } else {
                log.warn("No such authorization implemented resp. handled by session based authorization: " + authorization);
                authorized = false;
            }
        }


        // Custom Authorization
        log.debug("Do session based custom authorization");
        //String[] groupnames = {"null", "null"};
        HttpSession session = request.getSession(true);
        Identity identity = (Identity) session.getAttribute(IDENTITY_KEY);
        if (identity == null) {
            log.debug("Identity is WORLD");
            identity = new Identity();
        }
        authorized = pm.authorize(new org.wyona.commons.io.Path(request.getServletPath()), identity, role);

        if(!authorized) {
            log.warn("Access denied: " + getRequestURLQS(request, null, false));

            // TODO: Shouldn't this be here instead at the beginning of service() ...?
            //if(doAuthenticate(request, response) != null) return response;

            // HTTP Authorization/Authentication
            // TODO: Ulysses has not HTTP BASIC or DIGEST implemented yet!
/*
            response.setHeader("WWW-Authenticate", "BASIC realm=\"yanel\"");
	    response.sendError(response.SC_UNAUTHORIZED);
*/
            // Custom Authorization/Authentication
            // ...

            // TODO: Check if this is a neutron request or just a common GET request
            StringBuffer sb = new StringBuffer("");
            String neutronVersions = request.getHeader("Neutron");
            // http://lists.w3.org/Archives/Public/w3c-dist-auth/2006AprJun/0064.html
            String clientSupportedAuthScheme = request.getHeader("WWW-Authenticate");
            Realm realm = map.getRealm(new Path(request.getServletPath()));
            if (clientSupportedAuthScheme != null && clientSupportedAuthScheme.equals("Neutron-Auth")) {
                log.debug("Neutron Versions supported by client: " + neutronVersions);
                log.debug("Authentication Scheme supported by client: " + clientSupportedAuthScheme);
                sb.append("<?xml version=\"1.0\"?>");
                sb.append("<exception xmlns=\"http://www.wyona.org/neutron/1.0\" type=\"authorization\">");
                sb.append("<message>Authorization denied: " + getRequestURLQS(request, null, true) + "</message>");
                sb.append("<authentication>");
                sb.append("<original-request url=\"" + getRequestURLQS(request, null, true) + "\"/>");
                //TODO: Also support https ...
                sb.append("<login url=\"" + getRequestURLQS(request, "yanel.usecase=neutron-auth", true) + "\" method=\"POST\">");
                sb.append("<form>");
                sb.append("<message>Enter username and password for \"" + realm.getName() + "\" at \"" + realm.getMountPoint() + "\"</message>");
                sb.append("<param description=\"Username\" name=\"username\"/>");
                sb.append("<param description=\"Password\" name=\"password\"/>");
                sb.append("</form>");
                sb.append("</login>");
                // NOTE: Needs to be a full URL, because user might switch the server ...
                sb.append("<logout url=\"" + getRequestURLQS(request, "yanel.usecase=logout", true) + "\" realm=\"" + realm.getName() + "\"/>");
                sb.append("</authentication>");
                sb.append("</exception>");

                log.debug("Neutron-Auth response: " + sb);
                response.setContentType("application/xml");
                response.setStatus(javax.servlet.http.HttpServletResponse.SC_UNAUTHORIZED);
                response.setHeader("WWW-Authenticate", "NEUTRON-AUTH");
            } else {
                // Custom HTML Form authentication

                // TODO: Use configurable XSLT for layout, whereas each realm should be able to overwrite ...
                sb.append("<?xml version=\"1.0\"?>");
                sb.append("<html xmlns=\"http://www.w3.org/1999/xhtml\">");
                sb.append("<body>");
                sb.append("<p>Authorization denied: " + getRequestURLQS(request, null, true) + "</p>");
                sb.append("<p>Enter username and password for realm \"" +  realm.getName()  + "\" at \"" + realm.getMountPoint() + "\" (Context Path: " + request.getContextPath() + ")</p>");
                sb.append("<form method=\"POST\">");
                sb.append("<p>");
                sb.append("<table>");
                sb.append("<tr><td>Username:</td><td>&#160;</td><td><input type=\"text\" name=\"yanel.login.username\"/></td></tr>");
                sb.append("<tr><td>Password:</td><td>&#160;</td><td><input type=\"password\" name=\"yanel.login.password\"/></td></tr>");
                sb.append("<tr><td colspan=\"2\">&#160;</td><td align=\"right\"><input type=\"submit\" value=\"Login\"/></td></tr>");
                sb.append("</table>");
                sb.append("</p>");
                sb.append("</form>");
                sb.append("</body>");
                sb.append("</html>");
                response.setContentType("application/xhtml+xml");
            }
            PrintWriter w = response.getWriter();
            w.print(sb);
            return response;
        } else {
            log.info("Access granted: " + getRequestURLQS(request, null, false));
            return null;
        }
    }

    /**
     *
     */
    private String getRequestURLQS(HttpServletRequest request, String addQS, boolean xml) {
        Realm realm = map.getRealm(new Path(request.getServletPath()));
        String proxyHostName = realm.getProxyHostName();
        String proxyPort = realm.getProxyPort();
        String proxyPrefix = realm.getProxyPrefix();

        URL url = null;
	
        try {
	    url = new URL(request.getRequestURL().toString());

            if (proxyHostName != null) {
                url = new URL(url.getProtocol(), proxyHostName, url.getPort(), url.getFile());
            }

            if (proxyPort != null) {
                if (proxyPort.length() > 0) {
                    url = new URL(url.getProtocol(), url.getHost(), new Integer(proxyPort).intValue(), url.getFile());
                } else {
                    url = new URL(url.getProtocol(), url.getHost(), url.getDefaultPort(), url.getFile());
                }
            }

            if (proxyPrefix != null) {
                url = new URL(url.getProtocol(), url.getHost(), url.getPort(), url.getFile().substring(proxyPrefix.length()));
            }

            if(proxyHostName != null || proxyPort != null || proxyPrefix != null) {
                log.debug("Proxy enabled request: " + url);
            }
        } catch (Exception e) {
            log.error(e);
        }

        String urlQS = url.toString();
        if (request.getQueryString() != null) {
            urlQS = urlQS + "?" + request.getQueryString();
            if (addQS != null) urlQS = urlQS + "&" + addQS;
        } else {
            if (addQS != null) urlQS = urlQS + "?" + addQS;
        }

        if (xml) urlQS = urlQS.replaceAll("&", "&amp;");

        log.debug("Request: " + urlQS);

        return urlQS;
    }

    /**
     * Also see https://svn.apache.org/repos/asf/tomcat/container/branches/tc5.0.x/catalina/src/share/org/apache/catalina/servlets/WebdavServlet.java
     * Also maybe interesting http://sourceforge.net/projects/openharmonise
     */
    public void doPropfind(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        getContent(request, response);
    }

    /**
     *
     */
    public HttpServletResponse doAuthenticate(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        Realm realm = map.getRealm(new Path(request.getServletPath()));

        // HTML Form based authentication
        String loginUsername = request.getParameter("yanel.login.username");
        if(loginUsername != null) {
            HttpSession session = request.getSession(true);
            if (im.authenticate(loginUsername, request.getParameter("yanel.login.password"), realm.getID())) {
                log.debug("Realm: " + realm);
                session.setAttribute(IDENTITY_KEY, new Identity(loginUsername, null));
                return null;
            } else {
                log.warn("Login failed: " + loginUsername);
                // TODO: Implement form based response ...
                response.setHeader("WWW-Authenticate", "BASIC realm=\"yanel\"");
	        response.sendError(response.SC_UNAUTHORIZED);
                return response;
            }
        }

        // Neutron-Auth based authentication
        String yanelUsecase = request.getParameter("yanel.usecase");
        if(yanelUsecase != null && yanelUsecase.equals("neutron-auth")) {
            log.debug("Neutron Authentication ...");

            String username = null;
            String password = null;
            String originalRequest = null;
            DefaultConfigurationBuilder builder = new DefaultConfigurationBuilder();
            try {
                Configuration config = builder.build(request.getInputStream());

                Configuration originalRequestConfig = config.getChild("original-request");
                originalRequest = originalRequestConfig.getAttribute("url", null);

                Configuration[] paramConfig = config.getChildren("param");
                for (int i = 0; i < paramConfig.length; i++) {
                    String paramName = paramConfig[i].getAttribute("name", null);
                    if (paramName != null) {
                        if (paramName.equals("username")) {
                            username = paramConfig[i].getValue();
                        } else if (paramName.equals("password")) {
                            password = paramConfig[i].getValue();
                        }
                    }
                }
            } catch(Exception e) {
                log.warn(e);
            }

            log.debug("Username: " + username);

            if (username != null) {
                HttpSession session = request.getSession(true);
                log.debug("Realm ID: " + realm.getID());
                if (im.authenticate(username, password, realm.getID())) {
                    log.info("Authentication successful: " + username);
                    session.setAttribute(IDENTITY_KEY, new Identity(username, null));

                    // TODO: send some XML content, e.g. <authentication-successful/>
                    response.setContentType("text/plain");
                    response.setStatus(response.SC_OK);

                    PrintWriter writer = response.getWriter();
                    writer.print("Neutron Authentication Successful!");
                    return response;
                } else {
                    log.warn("Neutron Authentication failed: " + username);

                    // TODO: Refactor this code with the one from doAuthenticate ...
                    log.debug("Original Request: " + originalRequest);

                    StringBuffer sb = new StringBuffer("");
                    sb.append("<?xml version=\"1.0\"?>");
                    sb.append("<exception xmlns=\"http://www.wyona.org/neutron/1.0\" type=\"authentication\">");
                    sb.append("<message>Authentication failed!</message>");
                    sb.append("<authentication>");
                    // TODO: ...
                    sb.append("<original-request url=\"" + originalRequest + "\"/>");
                    //sb.append("<original-request url=\"" + getRequestURLQS(request, null, true) + "\"/>");
                    //TODO: Also support https ...
                    // TODO: ...
                    sb.append("<login url=\"" + originalRequest + "&amp;yanel.usecase=neutron-auth" + "\" method=\"POST\">");
                    //sb.append("<login url=\"" + getRequestURLQS(request, "yanel.usecase=neutron-auth", true) + "\" method=\"POST\">");
                    sb.append("<form>");
                    sb.append("<message>Enter username and password for \"" + realm.getName() + "\" at \"" + realm.getMountPoint() + "\"</message>");
                    sb.append("<param description=\"Username\" name=\"username\"/>");
                    sb.append("<param description=\"Password\" name=\"password\"/>");
                    sb.append("</form>");
                    sb.append("</login>");
                    // NOTE: Needs to be a full URL, because user might switch the server ...
                    // TODO: ...
                    sb.append("<logout url=\"" + originalRequest + "&amp;yanel.usecase=logout" + "\" realm=\"" + realm.getName() + "\"/>");
                    sb.append("</authentication>");
                    sb.append("</exception>");

                    log.debug("Neutron-Auth response: " + sb);

                    response.setContentType("application/xml");
                    response.setStatus(javax.servlet.http.HttpServletResponse.SC_UNAUTHORIZED);
                    response.setHeader("WWW-Authenticate", "NEUTRON-AUTH");

                    PrintWriter w = response.getWriter();
                    w.print(sb);
                    return response;
                }
            } else {
                // TODO: Refactor resp. reuse response from above ...
                log.warn("Neutron Authentication failed because username is NULL!");

                StringBuffer sb = new StringBuffer("");
                sb.append("<?xml version=\"1.0\"?>");
                sb.append("<exception xmlns=\"http://www.wyona.org/neutron/1.0\" type=\"authentication\">");
                sb.append("<message>Authentication failed because no username was sent!</message>");
                sb.append("<authentication>");
                // TODO: ...
                sb.append("<original-request url=\"" + originalRequest + "\"/>");
                //sb.append("<original-request url=\"" + getRequestURLQS(request, null, true) + "\"/>");
                //TODO: Also support https ...
                // TODO: ...
                sb.append("<login url=\"" + originalRequest + "&amp;yanel.usecase=neutron-auth" + "\" method=\"POST\">");
                //sb.append("<login url=\"" + getRequestURLQS(request, "yanel.usecase=neutron-auth", true) + "\" method=\"POST\">");
                sb.append("<form>");
                sb.append("<message>Enter username and password for \"" + realm.getName() + "\" at \"" + realm.getMountPoint() + "\"</message>");
                sb.append("<param description=\"Username\" name=\"username\"/>");
                sb.append("<param description=\"Password\" name=\"password\"/>");
                sb.append("</form>");
                sb.append("</login>");
                // NOTE: Needs to be a full URL, because user might switch the server ...
                // TODO: ...
                sb.append("<logout url=\"" + originalRequest + "&amp;yanel.usecase=logout" + "\" realm=\"" + realm.getName() + "\"/>");
                sb.append("</authentication>");
                sb.append("</exception>");

                response.setContentType("application/xml");
                response.setStatus(javax.servlet.http.HttpServletResponse.SC_UNAUTHORIZED);
                response.setHeader("WWW-Authenticate", "NEUTRON-AUTH");

                PrintWriter writer = response.getWriter();
                writer.print(sb);
                return response;
            }
        } else {
            log.debug("Neutron Authentication successful.");
            return null;
        }
    }

    /**
     *
     */
    public HttpServletResponse doLogout(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        log.info("Logout from Yanel ...");
        HttpSession session = request.getSession(true);
        session.setAttribute(IDENTITY_KEY, null);
        String clientSupportedAuthScheme = request.getHeader("WWW-Authenticate");
        if (clientSupportedAuthScheme != null && clientSupportedAuthScheme.equals("Neutron-Auth")) {
            // TODO: send some XML content, e.g. <logout-successful/>
            response.setContentType("text/plain");
            response.setStatus(response.SC_OK);
            PrintWriter writer = response.getWriter();
            writer.print("Neutron Logout Successful!");
            return response;
        }
        return null;
    }

    /**
     * Microsoft Internet Explorer does not understand application/xhtml+xml
     * See http://en.wikipedia.org/wiki/Criticisms_of_Internet_Explorer#XHTML
     */
    public String patchContentType(String contentType, HttpServletRequest request) throws ServletException, IOException {
        String httpAcceptMediaTypes = request.getHeader("Accept");
        log.debug("HTTP Accept Media Types: " + httpAcceptMediaTypes);
        if (contentType != null && contentType.equals("application/xhtml+xml") && httpAcceptMediaTypes != null && httpAcceptMediaTypes.indexOf("application/xhtml+xml") < 0) {
            log.error("DEBUG: Patch contentType with text/html because client (" + request.getHeader("User-Agent") + ") does not seem to understand application/xhtml+xml");
            return "text/html";
        }
        return contentType;
    }

    /**
     * Intercept InputStream and log content ...
     */
    public InputStream intercept(InputStream in) throws IOException {
        java.io.ByteArrayOutputStream baos  = new java.io.ByteArrayOutputStream();
        byte[] buf = new byte[8192];
        int bytesR;
        while ((bytesR = in.read(buf)) != -1) {
            baos.write(buf, 0, bytesR);
        }

        // Buffer within memory (TODO: Maybe replace with File-buffering ...)
        // http://www-128.ibm.com/developerworks/java/library/j-io1/
        byte[] memBuffer = baos.toByteArray();

        log.error("DEBUG: InputStream: " + baos);

        return new java.io.ByteArrayInputStream(memBuffer);
    }

    /**
     *
     */
    private void setYanelOutput(HttpServletResponse response, Document doc) throws ServletException {
        response.setContentType("application/xml");
        try {
            javax.xml.transform.TransformerFactory.newInstance().newTransformer().transform(new javax.xml.transform.dom.DOMSource(doc), new javax.xml.transform.stream.StreamResult(response.getWriter()));

/*
            OutputStream out = response.getOutputStream();
            javax.xml.transform.TransformerFactory.newInstance().newTransformer().transform(new javax.xml.transform.dom.DOMSource(doc), new javax.xml.transform.stream.StreamResult(out));
            out.close();
*/

        } catch (Exception e) {
            log.error(e.getMessage(), e);
            throw new ServletException(e.getMessage());
        }
    }
}
