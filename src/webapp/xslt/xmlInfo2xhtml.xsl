<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:i18n="http://apache.org/cocoon/i18n/2.1"
  xmlns="http://www.w3.org/1999/xhtml"
>

  <xsl:output method="xhtml" encoding="UTF-8"/>

  <xsl:template match="/">
        <html>
          <head>
            <title>
              Yanel
              <xsl:choose>
                <xsl:when test="child::node()/exception">
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
                <xsl:when test="child::node()/exception">
                  <i18n:text>- An error occurred</i18n:text>
                </xsl:when>
                <xsl:otherwise>
                  <i18n:text>- Page Info</i18n:text>
                </xsl:otherwise>
              </xsl:choose>
              </h1>

              <xsl:choose>
                <xsl:when test="child::node()/exception">
                  <p><a href="?yanel.format=xml">Show XML source</a> </p>
                </xsl:when>
                <xsl:otherwise>
                  <p><a href="?yanel.resource.meta&amp;yanel.format=xml">Show XML source</a> </p>
                </xsl:otherwise>
              </xsl:choose>

              <xsl:apply-templates select="child::node()/exception"/>

            <p>
              <h4>Servlet Context Real Path</h4>
              <xsl:value-of select="child::node()/@servlet-context-real-path"/>
            </p>

            <xsl:apply-templates select="child::node()/request"/>
            <xsl:apply-templates select="child::node()/session"/>
            <xsl:apply-templates select="child::node()/resource-type-identifier"/>
            <xsl:apply-templates select="child::node()/no-resource-type-identifier"/>
            <xsl:apply-templates select="child::node()/resource"/>
            <xsl:apply-templates select="child::node()/revisions"/>
          </body>
        </html>
  </xsl:template>
  
  <xsl:template match="request">
    <p>
    <h4>Request:</h4>
    <ul>
      <li>Servlet Path: <xsl:value-of select="@servlet-path"/></li>
      <li>URI: <xsl:value-of select="@uri"/></li>
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
        <li>View: <xsl:value-of select="view"/></li>
        <xsl:if test="last-modified">
          <li>Last Modified: <xsl:value-of select="last-modified"/></li>
        </xsl:if>
        <xsl:if test="size">
          <li>Size: <xsl:value-of select="size"/></li>
        </xsl:if>
        <xsl:if test="revisions">
          <li>Revisions: <xsl:apply-templates select="revisions"/></li>
         </xsl:if>
      </ul>
      <xsl:apply-templates/>
    </p>    
  </xsl:template>
  
  <xsl:template match="not-viewable">
    <p>
      Resource is not viewable: <xsl:apply-templates/>
    </p>
  </xsl:template>

  <xsl:template match="revisions">
    <p>
      <ul>
        <xsl:for-each select="revision">
          <li>Revision: <xsl:value-of select="."/></li>
        </xsl:for-each>
      </ul>
    </p>
  </xsl:template>
  
  <xsl:template match="no-resource-type-identifier">
    <p>
      <h4>No Resource Type Identifier:</h4>
      <ul>
        <li>Servlet Path: <xsl:value-of select="@servlet-path"/></li>
      </ul>
      </p>     
  </xsl:template>
  
  <xsl:template match="exception">
    <p>
      <h4>Exception</h4>
      <ul>
        <xsl:if test="@status"><li>Status: <xsl:value-of select="@status"/></li></xsl:if>
        <li>Error Message: 
          <ul>
            <li><xsl:value-of select="."/></li>
          </ul>
        </li>
      </ul>
    </p>
  </xsl:template> 

</xsl:stylesheet>
