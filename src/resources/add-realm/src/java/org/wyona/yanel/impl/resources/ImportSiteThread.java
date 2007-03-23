/*
 * Copyright 2006 Wyona
 */

package org.wyona.yanel.impl.resources;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.net.URL;
import java.util.HashMap;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;
import org.apache.lenya.search.crawler.DumpingCrawler;
import org.apache.log4j.Category;
import org.wyona.yanel.core.map.Realm;
import org.wyona.yarep.core.Node;
import org.wyona.yarep.core.NodeType;
import org.wyona.yarep.core.Repository;
import org.wyona.yarep.core.RepositoryException;

/**
 * 
 */
public class ImportSiteThread extends Thread {

    private static Category log = Category.getInstance(ImportSiteThread.class);
    private final static int INSIDE_TAG = 0;
    private final static int OUTSIDE_TAG = 1;
    
    private DumpingCrawler crawler;
    private String dumpDir;
    private String crawlStartURL;
    private String[] crawlScopeURLs;
    private Realm realm;
    private EventLog eventLog;
    
    private HashMap mimeTypeMap;
    private HashMap encodingMap;
    
    public ImportSiteThread(DumpingCrawler crawler, Realm realm, String dumpDir, 
            String crawlStartURL, String[] crawlScopeURLs, EventLog eventLog) {
        this.crawler = crawler;
        this.realm = realm;
        this.dumpDir = dumpDir;
        this.crawlStartURL = crawlStartURL;
        this.crawlScopeURLs = crawlScopeURLs;
        this.mimeTypeMap = new HashMap();
        this.encodingMap = new HashMap();
        this.eventLog = eventLog;
    }
    
    public void run() {
        try {
            // create dump:
            crawler.run();
            crawler.close();
            
            // import dump into realm:
            deleteRepositoryContent(realm.getRepository());
            deleteRepositoryContent(realm.getRTIRepository());
            Node root = realm.getRepository().getRootNode();
            readMeta();
            importContent(new File(dumpDir), root);
            
            // remove temp dump dir
            FileUtils.deleteDirectory(new File(dumpDir));
            
            fixRootNode(crawlStartURL, crawlScopeURLs[0], root);
            addResourceConfiguration(realm.getRTIRepository());
            
            eventLog.importFinished();
        } catch (Exception e) {
            log.error(e, e);
            throw new RuntimeException(e.toString(), e);
        }
    }
    
    /**
     * Reads the .meta file of the dump which contains the mimetypes
     * and the encoding of the dumped files.
     * @throws IOException
     */
    protected void readMeta() throws IOException {
        File meta = new File(this.dumpDir + File.separator + ".meta");
        BufferedReader reader = new BufferedReader(new FileReader(meta));
        String line;
        
        while ((line = reader.readLine()) != null) {
            String[] tokens = line.split(",");
            // pattern is: path,mimetype[,encoding]
            String path = tokens[0];
            String mimeType = tokens[1];
            this.mimeTypeMap.put(path, mimeType);
            if (tokens.length > 2) {
                String encoding = tokens[2];
                this.encodingMap.put(path, encoding);
            }
        }
    }
    
    /**
     * Imports the content of the given directory into the repository as child nodes
     * of the given node. This will recursively add the complete subtree.
     * If a Node already exists in the repository, it will be overwritten.
     * @param dir
     * @param node
     * @throws IOException
     * @throws RepositoryException
     */
    protected void importContent(File dir, Node node) throws IOException, RepositoryException{
        File[] children = dir.listFiles();
        for (int i=0; i<children.length; i++) {
            File file = children[i];
            String name = file.getName();
            Node childNode;
            if (file.isDirectory()) {
                if (node.hasNode(name)) {
                    childNode = node.getNode(name);
                } else {
                    childNode = node.addNode(name, NodeType.COLLECTION);
                }
                // recursion:
                importContent(file, childNode);
            } else {
                if (name.equals(".meta")) {
                    continue; // don't import the dump meta file
                }
                if (node.hasNode(name)) {
                    childNode = node.getNode(name);
                } else {
                    childNode = node.addNode(name, NodeType.RESOURCE);
                }
                String mimeType;
                String path = getLocalPath(file);
                if (this.mimeTypeMap.containsKey(path)) {
                    mimeType = (String)this.mimeTypeMap.get(path);
                } else {
                    mimeType = guessMimeType(FilenameUtils.getExtension(file.getName()));
                }
                InputStream is = new FileInputStream(file);
                OutputStream os = childNode.getOutputStream();
                if (mimeType.equals("text/html") || mimeType.equals("application/xhtml+xml")) {
                    String encoding = "utf-8";
                    if (this.encodingMap.containsKey(path)) {
                        encoding = (String)this.encodingMap.get(path);
                    }
                    addIntrospectionLink(is, os, encoding);
                    childNode.setEncoding(encoding);
                } else {
                    byte[] buf = new byte[8192];
                    int bytesRead;
                    while ((bytesRead = is.read(buf)) != -1) {
                        os.write(buf, 0, bytesRead);
                    }
                }
                os.flush();
                os.close();
                is.close();
                childNode.setMimeType(mimeType);
            }
        }
    }
    
    /**
     * Returns the local path of a dumped file, i.e. the path relative
     * to the root dir of the dump.
     * @param file
     * @return
     * @throws IOException
     */
    protected String getLocalPath(File file) throws IOException {
        String rootPath = new File(this.dumpDir).getCanonicalPath();
        String path = file.getCanonicalPath();
        if (!path.startsWith(rootPath)) {
            throw new IOException("Path " + path + " must be inside of " + rootPath);
        }
        return path.substring(rootPath.length()+1);
    }
    
    /**
     * Adds a yanel introspection link element to the head element of the current page.
     * @param is stream of the source html page
     * @param os stream of the result html page
     * @param encoding the encoding of the input stream
     * @throws IOException
     */
    protected void addIntrospectionLink(InputStream is, OutputStream os, String encoding) throws IOException {
        int c;
        int state = OUTSIDE_TAG;
        InputStreamReader reader = new InputStreamReader(is, encoding);
        OutputStreamWriter writer = new OutputStreamWriter(os, encoding);

        StringBuffer tagBuf = null;
        while ((c = reader.read()) != -1) {
            switch (state) {
            case OUTSIDE_TAG:
                if (c == '<') {
                    tagBuf = new StringBuffer("<");
                    state = INSIDE_TAG;
                } else {
                    writer.write(c);
                }
                break;
            case INSIDE_TAG:
                tagBuf.append((char)c);
                if (c == '>') {
                    state = OUTSIDE_TAG;
                    String tag = tagBuf.toString();
                    if (!tag.startsWith("<link") || tag.indexOf("neutron-introspection") == -1) {
                        writer.write(tag, 0, tag.length());
                    }
                    if (tag.startsWith("<head")) {
                        String introspectionLink = "<link rel=\"neutron-introspection\" type=\"application/neutron+xml\" href=\"?yanel.resource.usecase=introspection\"/>";
                        writer.write(introspectionLink, 0, introspectionLink.length());
                    }
                }
                break;
            }
        }
        writer.flush();
        writer.close();
        reader.close();
    }
    
    /**
     * Creates a redirect from the repository root node to the crawl root page.
     * This is necessary to make the root page of the crawl 
     * accessible at root url of the new realm.
     * Example: 
     * crawlStartURL: http://foo.bar/start.html
     * new realm id:  foo-realm
     * -> /foo-realm/ will redirect to /foo-realm/start.html 
     * @param crawlStartURL
     * @param root
     * @throws RepositoryException 
     */
    protected void fixRootNode(String crawlStartURL, String crawlScopeURL, Node root) {
        try {
            URL url = new URL(crawlStartURL);
            String path = url.getPath();
            String crawlRoot = crawlStartURL.substring(crawlScopeURL.length());
            if (path.length() == 0 || path.endsWith("/")) {
                crawlRoot = "index.html";
            }
            if (crawlRoot.startsWith("/")) {
                crawlRoot = crawlRoot.substring(1);
            }
            
            log.debug("crawlRoot: " + crawlRoot);
            if (crawlRoot != null && root.hasNode(crawlRoot)) {
                PrintWriter writer = new PrintWriter(new OutputStreamWriter(root.getOutputStream()));
                writer.println("<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01//EN\" \"http://www.w3.org/TR/html4/strict.dtd\">");
                writer.println("<html>");
                writer.println("<head>");
                writer.println("<meta http-equiv=\"refresh\" content=\"0; url=" + crawlRoot + "\"/>");
                writer.println("</head>");
                writer.println("<body/>");
                writer.println("</html>");
                writer.flush();
                writer.close();
            } else {
                log.error("crawl root node " + crawlRoot + " does not exist");
            }
        } catch (Exception e) {
            log.error(e, e);
            // ignore 
        }
    }
    
    /**
     * Adds a resource configuration file for the root node of the repository.
     * @param repository
     * @throws RepositoryException
     */
    protected void addResourceConfiguration(Repository repository) throws RepositoryException {
        Node node = repository.getRootNode().addNode(".yanel-rc", NodeType.RESOURCE);
        PrintWriter writer = new PrintWriter(new OutputStreamWriter(node.getOutputStream()));
        writer.println("<?xml version=\"1.0\"?>");
        writer.println("<yanel:resource-config xmlns:yanel=\"http://www.wyona.org/yanel/rti/1.0\">");
        writer.println("<yanel:rti name=\"file\" namespace=\"http://www.wyona.org/yanel/resource/1.0\"/>");
        writer.println("<yanel:property name=\"mime-type\" value=\"text/html\"/>");
        writer.println("</yanel:resource-config>");
        writer.flush();
        writer.close();
    }

    /**
     * Delete all nodes from the repository except the root node.
     * @param repository
     * @throws RepositoryException
     */
    protected void deleteRepositoryContent(Repository repository) throws RepositoryException {
        Node[] children = repository.getRootNode().getNodes();
        for (int i=0; i<children.length; i++) {
            children[i].delete();
        }
    }
    
    /**
     * Returns the mime-type according to the given file extension.
     * Default is application/octet-stream.
     * @param extension
     * @return
     */
    protected String guessMimeType(String extension) {
        String ext = extension.toLowerCase();
        if (ext.equals("html") || ext.equals("htm")) return "text/html";
        if (ext.equals("css")) return "text/css";
        if (ext.equals("txt")) return "text/plain";
        if (ext.equals("js")) return "application/x-javascript";
        if (ext.equals("jpg") || ext.equals("jpg")) return "image/jpeg";
        if (ext.equals("gif")) return "image/gif";
        if (ext.equals("pdf")) return "application/pdf";
        if (ext.equals("zip")) return "application/zip";
        //TODO: add more
        return "application/octet-stream"; // default
    }
    

}
