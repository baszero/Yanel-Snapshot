package org.wyona.yanel.servlet.menu;

import org.wyona.yanel.core.Resource;
import org.wyona.yanel.core.map.Map;
import org.wyona.yanel.core.map.Realm;
import org.wyona.yanel.servlet.IdentityMap;
import org.wyona.yanel.servlet.YanelServlet;

import org.wyona.security.core.api.Identity;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import java.io.IOException;

/**
 *
 */
abstract public class Menu {

    /**
     * Get custom menus. Implement this method in order to introduce custom menus.
     */
    abstract public String getMenus(Resource resource, HttpServletRequest request, Map map, String reservedPrefix) throws ServletException, IOException, Exception;

    /**
     * Aggregate all menus (used by YanelServlet). Overwrite this method if Yanel or Help menu not needed.
     */
    public String getAllMenus(Resource resource, HttpServletRequest request, Map map, String reservedPrefix) throws ServletException, IOException, Exception {
        return getYanelMenu(resource, request, map, reservedPrefix) + getMenus(resource, request, map, reservedPrefix) + getAdminMenu(resource, request, map, reservedPrefix) + getHelpMenu(resource, request, map, reservedPrefix);
    }

    /**
     * Get yanel menu
     */
    public String getYanelMenu(Resource resource, HttpServletRequest request, Map map, String reservedPrefix) throws ServletException, IOException, Exception {
        String backToRealm = org.wyona.yanel.core.util.PathUtil.backToRealm(resource.getPath());

        StringBuilder sb= new StringBuilder();
        sb.append("<ul><li>");
        sb.append("<div id=\"yaneltoolbar_menutitle\">Yanel</div><ul>");

        sb.append("<li><a href=\"?yanel.toolbar=off\">Turn off toolbar</a></li>");
        Identity identity = getIdentity(request, map);
        if (identity != null) {
            sb.append("<li><a href=\"" + backToRealm + reservedPrefix + "/users/" + identity.getUsername() + ".html\">My profile</a></li>");
            // TODO: Also consider additional query strings!
            sb.append("<li><a href=\"?yanel.usecase=logout\"><img class=\"yaneltoolbar_menuicon\" src=\"" + backToRealm + reservedPrefix + "/yanel-img/icons/system-log-out.png\" border=\"0\"/>Logout</a></li>");
        }
        sb.append("</ul>");

        sb.append("</li></ul>");

        return sb.toString();
    }

    /**
     * Get admin menu
     */
    public String getAdminMenu(Resource resource, HttpServletRequest request, Map map, String reservedPrefix) throws ServletException, IOException, Exception {
        String backToRealm = org.wyona.yanel.core.util.PathUtil.backToRealm(resource.getPath());

        StringBuilder sb= new StringBuilder();
        sb.append("<ul><li>");
        sb.append("<div id=\"yaneltoolbar_menutitle\">Admin</div><ul>");

        // View page info moved to getFileMenu() of default implementation
        //sb.append("<li><a href=\"?yanel.resource.meta\">View page info</a></li>");
        sb.append("<li><a href=\"" + backToRealm + reservedPrefix + "/data-repository-sitetree.html\">Browse Data Repository Sitetree</a></li>");
        sb.append("<li class=\"haschild\">Page");
        sb.append("<ul>");
        sb.append("<li><a href=\"?yanel.resource.meta\">Info</a></li>");
        sb.append("<li><a href=\"?yanel.policy=read&amp;orderedBy=1&amp;showParents=false&amp;showTabs=true\">View Access Policy</a></li>");
        sb.append("<li><a href=\"?yanel.policy=update\">Edit Access Policy</a></li>");
        sb.append("</ul>");
        sb.append("</li>");

        if (isAuthorized("/" + reservedPrefix + "/admin/list-users.html", resource)) {
            sb.append("<li><a href=\"" + backToRealm + reservedPrefix + "/admin/list-users.html\">User Management</a></li>");
        } else {
            sb.append("<li>User Management</li>");
        }

        if (isAuthorized("/" + reservedPrefix + "/admin/list-groups.html", resource)) {
            sb.append("<li><a href=\"" + backToRealm + reservedPrefix + "/admin/list-groups.html\">Group Management</a></li>");
        } else {
            sb.append("<li>Group Management</li>");
        }
        sb.append("<li>About Realm</li>");
        sb.append("</ul>");

        sb.append("</li></ul>");

        return sb.toString();
    }

    /**
     * Get help menu
     * Get toolbar menus
     */
    public String getHelpMenu(Resource resource, HttpServletRequest request, Map map, String reservedPrefix) throws ServletException, IOException, Exception {
        String backToRealm = org.wyona.yanel.core.util.PathUtil.backToRealm(resource.getPath());

        StringBuffer sb= new StringBuffer();
        sb.append("<ul><li>");
        sb.append("<div id=\"yaneltoolbar_menutitle\">Help</div>");
        sb.append("<ul>");
        sb.append("<li><a href=\"" + backToRealm + reservedPrefix+ "/about.html\">About Yanel</a></li>");
        sb.append("</ul>");
        sb.append("</li></ul>");
        return sb.toString();
    }
    
    /**
     * Gets the identity from the session associated with the given request.
     * @param request
     * @return identity or null if there is no identity in the session for the current
     *                  realm or if there is no session at all
     */
    public Identity getIdentity(HttpServletRequest request, Map map) throws Exception {
        Realm realm = map.getRealm(request.getServletPath());
        HttpSession session = request.getSession(false);
        if (session != null) {
            IdentityMap identityMap = (IdentityMap)session.getAttribute(YanelServlet.IDENTITY_MAP_KEY);
            if (identityMap != null) {
                return (Identity)identityMap.get(realm.getID());
            }
        }
        return null;
    }

    /**
     * Check if user is authorized to access resource (IMPORTANT NOTE: Using isAuthorized() can lead to performance/scalabilty issues)
     * @param path Resource path
     */
    private boolean isAuthorized(String path, Resource resource) throws Exception {
        org.wyona.security.core.api.PolicyManager pm = resource.getRealm().getPolicyManager();
        return pm.authorize(path, resource.getEnvironment().getIdentity(), new org.wyona.security.core.api.Usecase("view"));
    }
}
