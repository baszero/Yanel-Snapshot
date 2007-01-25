<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:yanel="http://www.wyona.org/yanel/1.0"
  xmlns:i18n="http://apache.org/cocoon/i18n/2.1"
>

  <!-- TODO: Isn't there a more standardized i18n namespace? -->

  <xsl:output method="xhtml" encoding="UTF-8"/>

  <xsl:template match="/">
        <html>
          <head>
            <title>
              Yanel
              <xsl:choose>
                <xsl:when test="/yanel:yanel/yanel:exception/@yanel:status = '404'">
                  - 404
                </xsl:when>
                <xsl:when test="child::node()/yanel:exception">
                  <i18n:text>- An error occurred</i18n:text>
                </xsl:when>
                <xsl:otherwise>
                  <i18n:text>- Page Info</i18n:text>
                </xsl:otherwise>
              </xsl:choose>
            </title>
          </head>
          <body>

              <h1>Yanel
              <xsl:choose>
                <xsl:when test="/yanel:yanel/yanel:exception/@yanel:status = '404'">
                  <i18n:text>- 404</i18n:text>
                </xsl:when>
                <xsl:when test="child::node()/yanel:exception">
                  <i18n:text>- An error occurred</i18n:text>
                </xsl:when>
                <xsl:otherwise>
                  <i18n:text>- Page Info</i18n:text>
                </xsl:otherwise>
              </xsl:choose>
              </h1>

              <xsl:choose>
                <xsl:when test="child::node()/yanel:exception">
                  <p><a href="?yanel.format=xml">Show XML source</a> </p>
                </xsl:when>
                <xsl:otherwise>
                  <p><a href="?yanel.resource.meta&amp;yanel.format=xml">Show XML source</a> </p>
                </xsl:otherwise>
              </xsl:choose>

              <xsl:apply-templates select="child::node()/yanel:exception"/>

            <p>
              <h4>Servlet Context Real Path</h4>
              <xsl:value-of select="child::node()/@servlet-context-real-path"/>
            </p>

            <xsl:apply-templates select="child::node()/yanel:request"/>
            <xsl:apply-templates select="child::node()/session"/>
            <xsl:apply-templates select="child::node()/resource-type-identifier"/>
            <xsl:apply-templates select="child::node()/no-resource-type-identifier"/>
            <xsl:apply-templates select="child::node()/resource"/>
            <xsl:apply-templates select="child::node()/revisions"/>
          </body>
        </html>
  </xsl:template>
  
  <xsl:template match="yanel:request">
    <p>
    <h4>Request:</h4>
    <ul>
      <li>Servlet Path: <xsl:value-of select="@yanel:servlet-path"/></li>
      <li>URI: <xsl:value-of select="@yanel:uri"/></li>
    </ul>
    </p>
  </xsl:template>
  
  <xsl:template match="session">
    <p>
      <h4>Session:</h4>
      <ul>
        <li>Session ID: <xsl:value-of select="@id"/></li>
        <xsl:for-each select="attribute">
          <li><xsl:value-of select="@name"/><xsl:text>: </xsl:text> <xsl:value-of select="."/></li>
        </xsl:for-each>
      </ul>
    </p>
  </xsl:template>
  
  <xsl:template match="resource-type-identifier">
    <p>
      <h4> Resource Type Identifier:</h4>
      <ul> 
        <li>Namespace: <xsl:value-of select="@namespace"/></li>
        <li>Local Name: <xsl:value-of select="@local-name"/></li>
      </ul>
    </p>   
  </xsl:template>
  
  <xsl:template match="resource">
    <p>
      <h4>Resource:</h4>
      <ul>
      <xsl:apply-templates/>
      </ul>
    </p>    
  </xsl:template>
  
  <xsl:template match="not-viewable">
    <li>Resource is not viewable: <xsl:apply-templates/></li>
  </xsl:template>
  
  <xsl:template match="not-versionable">
    <li>Resource has no versions</li>
  </xsl:template>
  
  <xsl:template match="no-last-modified">
    <li>Resource has no last modified</li>
  </xsl:template>
  
  <xsl:template match="size">
    <li>Size: <xsl:apply-templates/></li>
  </xsl:template>
  
  <xsl:template match="view">
    <li>View (Version <xsl:value-of select="@yanel:version"/>): <xsl:apply-templates/></li>
  </xsl:template>
  
  <xsl:template match="last-modified">
    <li>Last modified: <xsl:apply-templates/></li>
  </xsl:template>

  <xsl:template match="revisions">
    <li>Revisions:
      <ul>
        <xsl:for-each select="revision">
          <li>Revision: <xsl:value-of select="."/></li>
        </xsl:for-each>
      </ul>
    </li>
  </xsl:template>
  
  <xsl:template match="no-resource-type-identifier">
    <p>
      <h4>No Resource Type Identifier:</h4>
      <ul>
        <li>Servlet Path: <xsl:value-of select="@servlet-path"/></li>
      </ul>
      </p>     
  </xsl:template>
  
  <xsl:template match="yanel:exception">
    <p>
      <xsl:choose>
        <xsl:when test="@yanel:status = '404'">
        No such page:  <xsl:value-of select="/yanel:yanel/yanel:request/@yanel:uri"/>
        </xsl:when>
        <xsl:otherwise>
      <h4>Exception</h4>
      <ul>
        <xsl:if test="@yanel:status"><li>Status: <xsl:value-of select="@yanel:status"/></li></xsl:if>
        <li>Error Message: 
          <ul>
            <li><xsl:value-of select="."/></li>
          </ul>
        </li>
      </ul>
        </xsl:otherwise>
      </xsl:choose>
    </p>
  </xsl:template> 

  <xsl:template match="descriptor">
    <br/>Descriptor: <a href="?yanel.resource.viewid={@yanel:id}"><xsl:value-of select="."/></a>
  </xsl:template> 

</xsl:stylesheet>
