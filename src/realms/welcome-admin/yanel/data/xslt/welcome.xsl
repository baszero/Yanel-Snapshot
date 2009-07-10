<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns="http://www.w3.org/1999/xhtml"
  >
  
  <xsl:output method="xhtml" encoding="UTF-8" doctype-system="http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd" doctype-public="-//W3C//DTD XHTML 1.0 Strict//EN"/>
  
<!--
  <xsl:param name="servlet.context"/>
-->
  
  <xsl:template match="/">
    <html>
      <head>
        <base target="_top"/>
<!--
        <base target="_parent"/>
-->
        <meta http-equiv="Content-Type" content="application/xhtml+xml; charset=UTF-8"/>
        <link rel="shortcut icon" href="favicon.ico" type="image/vnd.microsoft.icon" />
        <link rel="stylesheet" href="css/global.css" type="text/css"/>
        <title>Welcome to Yanel</title>
        <!-- TODO: This page should be generated dynamically! -->
        <!--
        <link rel="neutron-introspection" type="application/neutron+xml" href="introspection-homepage.xml"/>
        -->
      </head>
      <body>
        <img src="img/yanel.png" alt="yanel" id="yanellogo"/>
        <img src="img/everything_is_content.png" alt="everything is content" id="everythingiscontent"/>
        <h1>Welcome to Yanel</h1>
        <p>
        If you can see this, it means that the installation of Yanel software on this system was successful. Thanks for using Yanel!
        </p>

        <p>
        Certain links below are for security reasons protected. In order to login use the Username <b>lenya</b> and the Password <b>levi</b>.
        <br/>
        <br/>
        <b>IMPORTANT:</b> If you are running Yanel within a publicly accessible environment, then please make sure to change at least the password of the user <a href="yanel/users/lenya.html">lenya</a>. More information on how to further <a href="yanel-website/en/documentation/security/overview.html">protect</a> this realm or even <a href="yanel-website/en/documentation/how-to-add-a-new-realm.html">remove</a> it completely can be found within the Yanel <a href="yanel-website/en/documentation/index.html">documentation</a>.
        </p>

        <h2>Getting Started</h2>
        <p>
          <ul>
            <li><a href="yanel-website/en/documentation/what-is-a-realm.html">What is a realm?</a></li>
            <li>Add a realm
	      <ul>
                <li><a href="add-realm-from-scratch.html">Create a realm from scratch.</a></li>
                <li><a href="add-realm-from-existing-website.html">Import an existing website as a new realm.</a> resp. how one can do this <a href="yanel-website/en/documentation/import-existing-website-as-new-realm.html">manually</a>.</li>
                <li><a href="yanel-website/en/documentation/how-to-add-a-new-realm.html">Add an existing third-party realm.</a></li>
              </ul>
            </li>
            <li>More information can be found within the Yanel <a href="yanel-website/en/documentation/index.html">documentation</a>.</li>
            <li>Turn on <a href="?yanel.toolbar=on">toolbar</a> </li>
            <li>Download <a href="http://www.yulup.org">Yulup</a></li>
            <li><a href="update-webapp.html">Find Updates</a></li>
            <li><a href="session-manager.html">Session Manager</a></li>

<!--
            <li>What is a resource resp. resource type?</li>
            <li><a href="yanel-website/en/documentation/create-new-resource.html">Create a new resource type from scratch.</a></li>
            <li>Add an existing third-party resource type.</li>
-->

<!-- TODO: Move this into Yanel tool bar -->
<!--
            <li>Find Updates.</li>
-->
          </ul>
        </p>
        <h2>Registered Realms within this Yanel instance</h2>
        <xsl:apply-templates select="/yanel-info/realms"/>

        <h2>Registered Resources within this Yanel instance</h2>
        <xsl:apply-templates select="/yanel-info/resourcetypes"/>
      </body>
    </html>
  </xsl:template>
  
  <xsl:template match="realms">
    <ul>
      <xsl:apply-templates select="realm"/>
    </ul>
  </xsl:template>
  
  <xsl:template match="realm">
    <li>
      <a href=".{mountpoint}">
<!--
        <xsl:attribute name="href">
          <xsl:value-of select="$servlet.context"/><xsl:value-of select="./mountpoint" />
        </xsl:attribute> 
-->
        <xsl:value-of select="./name"/>
      </a>
    </li>
  </xsl:template>
  
  <xsl:template match="resourcetypes">
    <ul>
      <xsl:apply-templates select="resourcetype"/>
    </ul>
  </xsl:template>
  
  <xsl:template match="resourcetype">
    <li>
      <img src="{icon}" alt="{./icon/@alt}"/> &#160; <xsl:value-of select="./localname"/>
      (<xsl:value-of select="./description"/>)&#160;<a href="{./docu}">docu</a>
    </li>
  </xsl:template>

</xsl:stylesheet>
