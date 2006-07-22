package org.wyona.yanel.servlet;

import java.io.IOException;
import java.io.PrintWriter;
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
import org.wyona.yanel.core.api.attributes.ViewableV1;
import org.wyona.yanel.core.attributes.viewable.View;
import org.wyona.yanel.core.map.Map;
import org.wyona.yanel.core.map.MapFactory;

import org.wyona.yanel.util.ResourceAttributeHelper;

import org.wyona.security.core.PolicyManagerFactory;
import org.wyona.security.core.api.Identity;
import org.wyona.security.core.api.PolicyManager;
import org.wyona.security.core.api.Role;

import org.apache.log4j.Category;

import org.apache.avalon.framework.configuration.Configuration;
import org.apache.avalon.framework.configuration.DefaultConfigurationBuilder;

/**
 *
 */
public class YanelServlet extends HttpServlet {

    private static Category log = Category.getInstance(YanelServlet.class);

    private ServletConfig config;

    ResourceTypeRegistry rtr;

    PolicyManager pm;
    Map map;

    private static String IDENTITY_KEY = "identity";

    String proxyServerName = null;
    String proxyPort = null;
    String proxyPrefix = null;

    /**
     *
     */
    public void init(ServletConfig config) {
        this.config = config;
        rtr = new ResourceTypeRegistry();

        PolicyManagerFactory pmf = PolicyManagerFactory.newInstance();
        pm = pmf.newPolicyManager();

        MapFactory mf = MapFactory.newInstance();
        map = mf.newMap();

        //proxyServerName = "demo.phoenix.wyona.org";

        //proxyPort = "";
        //proxyPort = "3333";

        //proxyPrefix = "";
        //proxyPrefix = "/yanel";
    }

    /**
     *
     */
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String yanelUsecase = request.getParameter("yanel.usecase");

        // Logout from Yanel
        if(yanelUsecase != null && yanelUsecase.equals("logout")) {
            log.error("DEBUG: Logout from Yanel ...");
            HttpSession session = request.getSession(true);
            session.setAttribute(IDENTITY_KEY, null);
        }

        // TODO: Implement Authorization and Authentication: http://www.goldfish.org/books/O'Reilly%20Java%20Enterprise%20CD%20Bookshelf/servlet/ch08_01.htm
        if(!authorize(request, response)) {
            // HTTP Authorization/Authentication
            // TODO: Phoenix has not HTTP BASIC or DIGEST implemented yet!
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
            if (clientSupportedAuthScheme != null) {
                log.error("DEBUG: Neutron Versions supported by client: " + neutronVersions);
                log.error("DEBUG: Authentication Scheme supported by client: " + clientSupportedAuthScheme);
                sb.append("<?xml version=\"1.0\"?>");
                sb.append("<exception xmlns=\"http://www.wyona.org/neutron/1.0\" type=\"authorization\">");
                sb.append("<message>Authorization denied: " + getRequestURLQS(request, null, true) + "</message>");
                sb.append("<authentication>");
                sb.append("<original-request url=\"" + getRequestURLQS(request, null, true) + "\"/>");
                //TODO: Also support https ...
                sb.append("<login url=\"" + getRequestURLQS(request, "yanel.usecase=neutron-auth", true) + "\" method=\"POST\">");
                sb.append("<form>");
                sb.append("<message>Enter username and password for REALM at URL</message>");
                sb.append("<param description=\"Username\" name=\"username\"/>");
                sb.append("<param description=\"Password\" name=\"password\"/>");
                sb.append("</form>");
                sb.append("</login>");
                sb.append("<logout url=\"" + request.getContextPath() + "/?yanel.usecase=logout\" realm=\"REALM\"/>");
                sb.append("</authentication>");
                sb.append("</exception>");
                response.setContentType("application/xml");
                response.setStatus(javax.servlet.http.HttpServletResponse.SC_UNAUTHORIZED);
            } else {
                // Custom HTML Form authentication

                // TODO: Use configurable XSLT for layout, whereas each realm should be able to overwrite ...
                sb.append("<?xml version=\"1.0\"?>");
                sb.append("<html xmlns=\"http://www.w3.org/1999/xhtml\">");
                sb.append("<body>");
                sb.append("<p>Authorization denied: " + getRequestURLQS(request, null, true) + "</p>");
                org.wyona.yanel.core.map.Realm realm = map.getRealm(new Path(request.getServletPath()));
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
            return;
        }


        getContent(request, response);
    }

    /**
     *
     */
    private void getContent(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        View view = null;

        StringBuffer sb = new StringBuffer("");

        sb.append("<?xml version=\"1.0\"?>");

        String servletContextRealPath = config.getServletContext().getRealPath("/");
        sb.append("<yanel servlet-context-real-path=\""+servletContextRealPath+"\" xmlns=\"http://www.wyona.org/yanel/1.0\">");

        sb.append("<request uri=\""+request.getRequestURI()+"\" servlet-path=\""+request.getServletPath()+"\"/>");

	HttpSession session = request.getSession(true);
        sb.append("<session id=\""+session.getId()+"\">");
	Enumeration enum = session.getAttributeNames();
        if (!enum.hasMoreElements()) {
            sb.append("<no-attributes/>");
        }
        while (enum.hasMoreElements()) {
            String name = (String)enum.nextElement();
            String value = session.getAttribute(name).toString();
            sb.append("<attribute name=\"" + name + "\">" + value + "</attribute>");
        }
        sb.append("</session>");

        String rti = map.getResourceTypeIdentifier(new Path(request.getServletPath()));
        if (rti != null) {
            ResourceTypeDefinition rtd = rtr.getResourceTypeDefinition(rti);
            sb.append("<resource-type-identifier namespace=\"" + rtd.getResourceTypeNamespace() + "\" local-name=\"" + rtd.getResourceTypeLocalName() + "\"/>");

            try {
                Resource res = rtr.newResource(rti);
                res.setRTD(rtd);
                if (ResourceAttributeHelper.hasAttributeImplemented(res, "Viewable", "1")) {
                    sb.append("<resource>View Descriptors: " + ((ViewableV1) res).getViewDescriptors() + "</resource>");
                    String viewId = request.getParameter("yanel.resource.viewid");
                    view = ((ViewableV1) res).getView(request, viewId);
                } else {
                    sb.append("<resource>" + res.getClass().getName() + " is not viewable!</resource>");
                }
            } catch(Exception e) {
                sb.append("<exception>" + e + "</exception>");
                log.error(e.getMessage(), e);
            }
        } else {
            sb.append("<no-resource-type-identifier-found servlet-path=\""+request.getServletPath()+"\"/>");
        }


        String value = request.getParameter("yanel.resource.usecase");

        if (value != null && value.equals("checkout")) {
            log.error("DEBUG: Checkout data ...");
            // TODO: Implement checkout ...
            // acquireLock();
        }


        if (view != null) {
            response.setContentType(view.getMimeType());
            java.io.InputStream is = view.getInputStream();

            byte buffer[] = new byte[8192];
            int bytesRead;
           
            if (is != null) {
                // TODO: Yarep does not set returned Stream to null resp. is missing Exception Handling for the constructor. Exceptions should be handled here, but rather within Yarep or whatever repositary layer is being used ...
                bytesRead = is.read(buffer);
	        if (bytesRead == -1) {
                    sb.append("<exception>InputStream of view does not seem to contain any data!</exception>");
                    sb.append("</yanel>");
                    response.setContentType("application/xml");
                    PrintWriter writer = response.getWriter();
                    writer.print(sb);
                    return;
                }
                java.io.OutputStream os = response.getOutputStream();
                os.write(buffer, 0, bytesRead);
                while ((bytesRead = is.read(buffer)) != -1) {
                    os.write(buffer, 0, bytesRead);
                }
                return;
            } else {
                sb.append("<exception>InputStream of view is null!</exception>");
            }
        } else {
            sb.append("<exception>View is null!</exception>");
        }

        sb.append("</yanel>");
        response.setContentType("application/xml");
        PrintWriter writer = response.getWriter();
        writer.print(sb);
        return;
    }

    /**
     *
     */
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String yanelUsecase = request.getParameter("yanel.usecase");

        // HTML Form based authentication
        String loginUsername = request.getParameter("yanel.login.username");
        if(loginUsername != null) {
            log.error("DEBUG: Trying to login with " + loginUsername);
            HttpSession session = request.getSession(true);
            // TODO: Implement Authentication
            session.setAttribute(IDENTITY_KEY, new Identity(loginUsername, null));
        }

        // Neutron-Auth based authentication
        if(yanelUsecase != null && yanelUsecase.equals("neutron-auth")) {
            log.debug("Neutron Authentication ...");

            String username = null;
            String password = null;
	    DefaultConfigurationBuilder builder = new DefaultConfigurationBuilder();
            try {
                Configuration config = builder.build(request.getInputStream());
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
                log.error(e);
            }

            log.debug("Username: " + username);

            if (username != null) {
                HttpSession session = request.getSession(true);
                // TODO: Implement Authentication
                session.setAttribute(IDENTITY_KEY, new Identity(username, null));
                // TODO: send some XML content, e.g. <authentication-successful/>
                response.setContentType("text/plain");
                PrintWriter writer = response.getWriter();
                writer.print("Neutron Authentication Successful!");
	        response.setStatus(response.SC_OK);
                return;
            } else {
                // TODO: Resend login information ...
                log.warn("Authentication failed ...");
                response.setContentType("text/plain");
                PrintWriter writer = response.getWriter();
                writer.print("Authentication Failed!");
	        response.sendError(response.SC_UNAUTHORIZED);
                return;
            }
        }

        if(!authorize(request, response)) {
            // HTTP Authorization/Authentication
            response.setHeader("WWW-Authenticate", "BASIC realm=\"yanel\"");
	    response.sendError(response.SC_UNAUTHORIZED);
            // Custom Authorization/Authentication
            // TODO: Reuse stuff from doGet ...
            return;
        }

        String value = request.getParameter("yanel.resource.usecase");

        if (value != null && value.equals("save")) {
            log.error("DEBUG: Save data ...");
            save(request, response);
            return;
	} else if (value != null && value.equals("checkin")) {
            log.error("DEBUG: Checkin data ...");
            save(request, response);
            // TODO: Implement checkin ...
            // releaseLock();
            return;
        } else {
            log.warn("No parameter yanel.resource.usecase!");

            getContent(request, response);
        }
    }

    /**
     * HTTP PUT implementation
     */
    public void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        // TODO: Reuse code doPost resp. share code with doPut
        if(!authorize(request, response)) {
            // HTTP Authorization/Authentication
            response.setHeader("WWW-Authenticate", "BASIC realm=\"yanel\"");
	    response.sendError(response.SC_UNAUTHORIZED);
            // Custom Authorization/Authentication
            // ...
            return;
        }

        String value = request.getParameter("yanel.resource.usecase");

        if (value != null && value.equals("save")) {
            log.error("DEBUG: Save data ...");
            save(request, response);
            return;
	} else if (value != null && value.equals("checkin")) {
            log.error("DEBUG: Checkin data ...");
            save(request, response);
            // TODO: Implement checkin ...
            // releaseLock();
            return;
        } else {
            log.warn("No parameter yanel.resource.usecase!");

            getContent(request, response);
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
        StringBuffer sb = new StringBuffer();
        log.error("DEBUG: Save data ...");

            java.io.InputStream in = request.getInputStream();
            java.io.ByteArrayOutputStream baos  = new java.io.ByteArrayOutputStream();
            byte[] buf = new byte[8192];
            int bytesR;
            while ((bytesR = in.read(buf)) != -1) {
                baos.write(buf, 0, bytesR);
            }

            // Buffer within memory (TODO: Maybe replace with File-buffering ...)
            // http://www-128.ibm.com/developerworks/java/library/j-io1/
            byte[] memBuffer = baos.toByteArray();

            // TODO: This should NOT be checked necessarily ...
            // Check on well-formedness ...
            if (false) {
                // TODO: Does not work when offline, because tries to resolve www.w3.org ...
                javax.xml.parsers.DocumentBuilderFactory dbf= javax.xml.parsers.DocumentBuilderFactory.newInstance();
                try {
                    javax.xml.parsers.DocumentBuilder parser = dbf.newDocumentBuilder();
                    parser.parse(new java.io.ByteArrayInputStream(memBuffer));
                    //org.w3c.dom.Document document = parser.parse(new ByteArrayInputStream(memBuffer));
                } catch (org.xml.sax.SAXException e) {
                    log.warn("Data is not well-formed: "+e.getMessage());

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

            log.error("INFO: Data seems to be well-formed :-)");
            }



/*
	    if (bytesRead == -1) {
                response.setContentType("text/plain");
                PrintWriter writer = response.getWriter();
                writer.print("No content!");
                return;
            }
*/

/*
            java.io.ByteArrayOutputStream out = new java.io.ByteArrayOutputStream();
            out.write(buffer, 0, bytesRead);
            while ((bytesRead = in.read(buffer)) != -1) {
                out.write(buffer, 0, bytesRead);
            }
            log.error("DEBUG: Received Data: " + out.toString());
*/

            Resource res = getResource(request);
            if (ResourceAttributeHelper.hasAttributeImplemented(res, "Modifiable", "1")) {

                String contentType = request.getContentType();
                log.error("DEBUG: Content-Type: " + contentType);
                // TODO: Compare mime-type from response with mime-type of resource
                //if (contentType.equals("text/xml")) { ... }

                byte[] buffer = new byte[8192];
                int bytesRead;
                java.io.ByteArrayInputStream memIn = new java.io.ByteArrayInputStream(memBuffer);
                java.io.OutputStream out = ((ModifiableV1) res).getOutputStream(new Path(request.getServletPath()));
                while ((bytesRead = memIn.read(buffer)) != -1) {
                    out.write(buffer, 0, bytesRead);
                }

                sb.append("<?xml version=\"1.0\"?>");
                sb.append("<html>");
                sb.append("<body>");
                sb.append("<p>Data has been saved ...</p>");
                sb.append("</body>");
                sb.append("</html>");
                response.setStatus(javax.servlet.http.HttpServletResponse.SC_OK);
                response.setContentType("application/xhtml+xml");

                log.error("INFO: Data has been saved ...");
            } else {
                log.warn(res.getClass().getName() + " is not modifiable!");

                sb.append("<?xml version=\"1.0\"?>");
                sb.append("<html>");
                sb.append("<body>");
                sb.append("<resource>" + res.getClass().getName() + " is not modifiable!</resource>");
                sb.append("</body>");
                sb.append("</html>");
                response.setContentType("application/xhtml+xml");
            }
    }

    /**
     * Authorize request
     * TODO: Replace hardcoded roles by mapping between roles amd query strings ...
     */
    private boolean authorize(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        //String[] groupnames = {"null", "null"};
        HttpSession session = request.getSession(true);
        Identity identity = (Identity) session.getAttribute(IDENTITY_KEY);
        if (identity == null) {
            log.error("DEBUG: identity is WORLD");
            identity = new Identity();
        }

        String value = request.getParameter("yanel.resource.usecase");
        if (value != null && value.equals("save")) {
            log.error("DEBUG: Save data ...");
            return pm.authorize(new org.wyona.commons.io.Path(request.getServletPath()), identity, new Role("write"));
	} else if (value != null && value.equals("checkin")) {
            log.error("DEBUG: Checkin data ...");
            return pm.authorize(new org.wyona.commons.io.Path(request.getServletPath()), identity, new Role("write"));
	} else if (value != null && value.equals("checkout")) {
            log.error("DEBUG: Checkout data ...");
            return pm.authorize(new org.wyona.commons.io.Path(request.getServletPath()), identity, new Role("open"));
        } else {
            log.debug("No parameter yanel.resource.usecase!");
        }

        // HTTP Authorization
        String authorization = request.getHeader("Authorization");
        log.error("DEBUG: Authorization Header: " + authorization);
        if (authorization != null &&  authorization.toUpperCase().startsWith("BASIC")) {
            // Get encoded user and password, comes after "BASIC "
            String userpassEncoded = authorization.substring(6);
            // Decode it, using any base 64 decoder
            sun.misc.BASE64Decoder dec = new sun.misc.BASE64Decoder();
            String userpassDecoded = new String(dec.decodeBuffer(userpassEncoded));
            log.error("DEBUG: userpassDecoded: " + userpassDecoded);
            if (userpassDecoded.equals("lenya:levi")) {
                return true;
            }
            log.warn("Authorization denied: " + request.getRequestURL() + "?" + request.getQueryString());
            return false;
        }

        // Custom Authorization
        // ...
        return pm.authorize(new org.wyona.commons.io.Path(request.getServletPath()), identity, new Role("view"));
    }

    /**
     *
     */
    private String getRequestURLQS(HttpServletRequest request, String addQS, boolean xml) {

        URL url = null;
	
        try {
	    url = new URL(request.getRequestURL().toString());

            if (proxyServerName != null) {
                url = new URL(url.getProtocol(), proxyServerName, url.getPort(), url.getFile());
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

            if(proxyServerName != null || proxyPort != null || proxyPrefix != null) {
                log.debug("Proxy enabled request: " + url);
            }
        } catch (Exception e) {
            log.error(e);
        }

        String urlQS = url.toString();
        //String urlQS = request.getRequestURL().toString();
        if (request.getQueryString() != null) {
            urlQS = urlQS + "?" + request.getQueryString();
            if (addQS != null) urlQS = urlQS + "&" + addQS;
        } else {
            if (addQS != null) urlQS = urlQS + "?" + addQS;
        }

        if (xml) return urlQS.replaceAll("&", "&amp;");
        return urlQS;
    }
}
