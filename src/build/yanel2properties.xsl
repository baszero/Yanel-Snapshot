<?xml version="1.0"?>

<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:yanel="http://www.wyona.org/yanel/1.0"
>

<xsl:output method="text" indent="yes"/>

<xsl:param name="servlet.context.prefix" select="'NULL'"/>

<xsl:template match="/">
# NOTE: This file has been generated automatically from conf/yanel.xml!

# Registered resources
resources=<xsl:for-each select="/yanel:yanel/yanel:resources/yanel:resource"><xsl:value-of select="@src"/>resource.xml<xsl:if test="position() != last()">,</xsl:if></xsl:for-each>

<xsl:apply-templates select="/yanel:yanel/yanel:reverse-proxy"/>

<xsl:apply-templates select="/yanel:yanel/yanel:realms-config"/>
</xsl:template>

<xsl:template match="yanel:reverse-proxy">
# Reverse Proxy Configuration
  <xsl:apply-templates select="yanel:host-name"/>
</xsl:template>

<xsl:template match="yanel:host-name">
proxy-host-name=<xsl:value-of select="."/>
</xsl:template>

<xsl:template match="yanel:realms-config">
# Realms configuration
realms-config=<xsl:value-of select="@src"/>
</xsl:template>

</xsl:stylesheet>
