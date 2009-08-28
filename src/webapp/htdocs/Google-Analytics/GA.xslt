<xsl:transform version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
 xmlns:yanel-xsl="http://www.wyona.org/yanel/xsl/1.0"
 xmlns:xhtml="http://www.w3.org/1999/xhtml"
>

<xsl:param name="GA-key" select="'UA-xxxxxx-x'"/>


<xsl:variable name="non-asset-URL-suffix" select="'.html'"/>


<xsl:template match="xhtml:a">
  <xsl:param name="URL" select="@href"/>
  <xsl:choose>
    <!--FIXME HACK: find a better method to differentiate document assets from pages: -->
    <xsl:when test="substring($URL, string-length($URL) - string-length($non-asset-URL-suffix)) != $non-asset-URL-suffix"><!--ends-with($URL, $non-asset-URL-suffix)...-->
      <xsl:call-template name="yanel-xsl:put-GA-asset-onclick-handler">
        <xsl:with-param name="URL" select="$URL"/>
      </xsl:call-template>
    </xsl:when>
    <xsl:otherwise>
      <xsl:apply-imports/>
    </xsl:otherwise>
  </xsl:choose>
</xsl:template>


<xsl:template name="yanel-xsl:insert-GA-code">
  <xsl:call-template name="yanel-xsl:insert-new-GA-code"/>
</xsl:template>


<xsl:template name="yanel-xsl:insert-new-GA-code">
<script type="text/javascript"><xsl:text>
var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
</xsl:text></script>
<script type="text/javascript"><xsl:text>
var pageTracker = _gat._getTracker("</xsl:text><xsl:value-of select="$GA-key"/><xsl:text>");
pageTracker._trackPageview();
</xsl:text></script>
</xsl:template>


<xsl:template name="yanel-xsl:put-GA-asset-onclick-handler">
  <xsl:param name="URL"/>
  <xsl:copy>
    <xsl:apply-templates select="@*[name()='onclick']"/>
    <xsl:attribute name="onclick">
      <xsl:text>pageTracker._trackPageview('</xsl:text>
      <xsl:call-template name="yanel-xsl:GA-asset-filename-from-URL">
        <xsl:with-param name="URL" select="$URL"/>
      </xsl:call-template>
      <xsl:text>');</xsl:text>
      <xsl:value-of select="@onclick"/>
    </xsl:attribute>
    <xsl:apply-templates select="node()"/>
  </xsl:copy>
</xsl:template>


<xsl:template name="yanel-xsl:GA-asset-filename-from-URL">
  <xsl:param name="URL"/>
  <xsl:value-of select="substring-after($URL, '://')"/><!--TODO: make it works with relative URLs as well!!! -->
</xsl:template>


</xsl:transform>
