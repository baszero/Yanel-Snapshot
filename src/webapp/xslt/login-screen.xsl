<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:yanel="http://www.wyona.org/yanel/1.0"
>

<!--
  <xsl:output method="xhtml" encoding="UTF-8"/>
-->

  <xsl:param name="yanel.back2realm" select="'BACK2REALM_IS_NULL'"/>
  <xsl:param name="yanel.reservedPrefix" select="'RESERVEDPREFIX_IS_NULL'"/>

  <xsl:template match="/">
    <html>
      <head>
        <title>Yanel - Login</title>
        <link rel="stylesheet" href="{$yanel.back2realm}{$yanel.reservedPrefix}/yanel-css/global.css" type="text/css"/>
      </head>
      <body>
        <h1>Login to realm "<xsl:value-of select="/yanel:yanel/yanel:realm/@yanel:name"/>"</h1>
        <p>Authorization was denied. Please, enter your username and password.</p>
        <xsl:apply-templates select="/yanel:yanel/yanel:message"/>
        <table>
          <tr><td>
            <form method="POST">
              <p>
                <table>
                  <tr>
                    <td>Username:</td>
                    <td>&#160;</td>
                    <td><input type="text" name="yanel.login.username"/></td>
                  </tr>
                  <tr>
                    <td>Password:</td>
                    <td>&#160;</td>
                    <td><input type="password" name="yanel.login.password"/></td>
                  </tr>
                  <tr>
                    <td colspan="2">&#160;</td>
                    <td align="right"><input type="submit" value="Login"/></td>
                  </tr>
                </table>
              </p>
            </form>
          </td></tr>
        </table>
        <xsl:apply-templates select="/yanel:yanel/yanel:ssl"/>


        <hr/>
        <p>
        <xsl:choose>
          <xsl:when test="/yanel:yanel/yanel:request/@yanel:qs">
            <a href="?{/yanel:yanel/yanel:request/@yanel:qs}&amp;yanel.format=xml">Show XML source</a>
          </xsl:when>
          <xsl:otherwise>
            <a href="?&amp;yanel.format=xml">Show XML source</a>
          </xsl:otherwise>
        </xsl:choose>
        </p>
        <xsl:apply-templates select="/yanel:yanel/yanel:request"/>
        <xsl:apply-templates select="/yanel:yanel/yanel:realm"/>
      </body>
    </html>
  </xsl:template>
  
  <xsl:template match="yanel:message">
      <div id="message"><xsl:value-of select="."/></div>
  </xsl:template>

  <xsl:template match="yanel:request">
    Request: <xsl:value-of select="@yanel:urlqs"/>
  </xsl:template>

  <xsl:template match="yanel:ssl">
    <li>
      <xsl:choose>
        <xsl:when test="contains(@yanel:status, 'ON')">
          <p>SSL support is ON</p>
        </xsl:when>
        <xsl:otherwise>
          <h4>Warning: SSL support is OFF. Your username and password will be sent as plain text.</h4>
        </xsl:otherwise>
      </xsl:choose>
    </li>
  </xsl:template>

  <xsl:template match="yanel:realm">
    <p>
    Realm info:
       <ul>
        <li>Name: <xsl:value-of select="@yanel:name"/></li>
        <li>Mount Point: <xsl:value-of select="@yanel:mount-point"/></li>
       </ul>
    </p>
  </xsl:template>

</xsl:stylesheet>
