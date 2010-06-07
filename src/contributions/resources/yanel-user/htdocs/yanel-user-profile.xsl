<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xhtml="http://www.w3.org/1999/xhtml"
    xmlns="http://www.w3.org/1999/xhtml"
    xmlns:xalan="http://xml.apache.org/xalan">

  <xsl:output method="xhtml" encoding="UTF-8"/>

  <xsl:param name="userId" select="''"/>
  <xsl:param name="userName" select="''"/>
<!-- DEPRECATED
  <xsl:param name="email" select="''"/>
-->
  <xsl:param name="user-profile-language" select="'IS_NULL'"/>
  <xsl:param name="expiration-date" select="'IS_NULL'"/>
  <xsl:param name="description" select="'TODO'"/>
  <xsl:param name="userGroupsString" select="'IS_NULL'"/>
  <xsl:param name="allGroupsString" select="'IS_NULL'"/>
  <xsl:param name="success" select="''"/>
  <xsl:param name="error" select="''"/>
  <xsl:param name="deletion" select="'false'"/>
  <xsl:param name="yanel.back2realm" select="'BACK2REALM_IS_NULL'"/>
  <xsl:param name="yanel.reservedPrefix" select="'RESERVEDPREFIX_IS_NULL'"/>

  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <xsl:choose>
        <xsl:when test="contains('true',$deletion)">
          <head>
            <link type="text/css" href="{$yanel.back2realm}{$yanel.reservedPrefix}/yanel-css/global.css" rel="stylesheet"></link>
          </head>
          <body>
            <xsl:call-template name="show-message"/>
          </body>
        </xsl:when>
        <xsl:otherwise>
          <head>
            <title>Edit user profile</title>
            <link type="text/css" href="{$yanel.back2realm}{$yanel.reservedPrefix}/yanel-css/global.css" rel="stylesheet"></link>
          </head>
          <body>
            <table id="bodytable" cellpadding="0" cellspacing="0"><tr><td id="title">
              Edit user profile of <xsl:value-of select="$userId"/>
            </td><td id="logo"><img src="{$yanel.back2realm}{$yanel.reservedPrefix}/yanel-img/yanel_header.png"/></td></tr><tr><td colspan="2" valign="top" width="100%"><div id="content">
            <h1> 
              User Profile of <xsl:value-of select="$userId"/>
            </h1>
              <xsl:call-template name="show-message"/>     
<!--
              <xsl:apply-templates select="form"/>
-->
              <xsl:apply-templates select="user"/>
            </div></td></tr></table>
          </body>
        </xsl:otherwise>
      </xsl:choose>
    </html>
  </xsl:template>  

  <xsl:template match="user">
<!--
  <xsl:template match="form">
-->
    <h2>Change Password</h2>
    <form name="user-password-form" method="post" action="#">
      <p>
        <table cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td>Current password:</td>
            <td>
              <input type="password" name="oldPassword"/>
            </td>
          </tr>
          <tr>
            <td>New password:</td>
            <td>
              <input type="password" name="newPassword"/>
            </td>
          </tr>
          <tr>
            <td>Confirm new password:</td>
            <td>
              <input type="password" name="newPasswordConfirmation"/>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <input type="submit" name="submitPassword" value="Apply"/>
            </td>
          </tr>
        </table>
      </p>
    </form>

    <h2>Change Identity</h2>
    <form name="user-profile-form" method="post" action="#">
      <p>
        <table>
          <tr>
            <td>Name:</td>
            <td>
              <input type="text" name="userName" value="{$userName}"/>
            </td>
          </tr>
          <tr>
            <td>E-Mail:</td>
            <td>
              <input type="text" name="email" value="{@email}"/>
<!-- DEPRECATED
              <input type="text" name="email" value="{$email}"/>
-->
            </td>
          </tr>
          <tr>
            <td>Language:</td>
            <td><!-- TODO: Display languages only which are supported by this realm! What about identity managers used by more than one realm with different languages?! -->
              <select name="user-profile-language">
                <option value="de"><xsl:if test="$user-profile-language = 'de'"><xsl:attribute name="selected">selected</xsl:attribute></xsl:if>de</option>
                <option value="en"><xsl:if test="$user-profile-language = 'en'"><xsl:attribute name="selected">selected</xsl:attribute></xsl:if>en</option>
                <option value="fr"><xsl:if test="$user-profile-language = 'fr'"><xsl:attribute name="selected">selected</xsl:attribute></xsl:if>fr</option>
              </select>
            </td>
<!--
            <td>
              <input type="text" name="user-profile-language" value="{$user-profile-language}"/>
            </td>
-->
          </tr>
          <tr>
            <td colspan="2">
              <input type="submit" name="submitProfile" value="Apply"/>
            </td>
          </tr>
        </table>
      </p>
    </form>

    <h2>Additional Account info</h2>
      <p>
        <table>
<!--
          <tr>
            <td>Language:</td>
            <td><xsl:value-of select="$user-profile-language"/></td>
          </tr>
-->
          <tr>
            <td>Expiration Date:</td>
            <td><xsl:value-of select="$expiration-date"/></td>
          </tr>
          <tr>
            <td>Description:</td>
            <td><xsl:value-of select="$description"/></td>
          </tr>
        </table>
      </p>

    <h2>Groups</h2>
    Groups which this user belongs to: <xsl:value-of select="$userGroupsString"/>
    <br/>
    All groups of this realm: <xsl:value-of select="$allGroupsString"/>


<!-- TODO: Is this actually working? -->
<!--
    <h2>Change Groups</h2>

    <h4>Remove from group</h4>
    <p>
      <table>
        <xsl:call-template name="process-user-groups"/>
      </table>
    </p>    
     
    <xsl:call-template name="process-all-groups"/>         
-->
  

<!-- One shouldn't be able to delete oneself! -->
<!--
    <h2>Delete User</h2>
    <form name="user-deletion-form" method="post" action="#">
      <p>
        <table>
          <tr>
            <td colspan="2">
              <input type="submit" name="submitDelete" value="Delete"/>
            </td>
          </tr>
        </table>
      </p>
    </form>
-->
  </xsl:template>

  <xsl:template name="show-message">    
    <xsl:choose>       
      <xsl:when test="$success != ''">            
        <h4>
          <xsl:value-of select="$success"/>
        </h4>           
      </xsl:when>
      <xsl:when test="$error != ''">          
        <h4>
          An error occurred: <xsl:value-of select="$error"/>
        </h4>            
      </xsl:when>        
   </xsl:choose> 
  </xsl:template>

  <xsl:template name="tokenize">
    <xsl:param name="inputString"/>
    <xsl:param name="separator" select="' '"/>
    <xsl:param name="resultElement" select="'item'"/>
    <xsl:variable
        name="token"
        select="substring-before($inputString, $separator)" />
    <xsl:variable
        name="nextToken"
        select="substring-after($inputString, $separator)" />
    <xsl:if test="$token">
      <xsl:element name="{$resultElement}">
        <xsl:value-of select="$token"/>
      </xsl:element>
    </xsl:if>
    <xsl:if test="$nextToken">
      <xsl:call-template name="tokenize">
        <xsl:with-param name="inputString" select="$nextToken"/>
        <xsl:with-param name="separator" select="$separator"/>
        <xsl:with-param name="resultElement" select="$resultElement"/>
      </xsl:call-template>
    </xsl:if>
  </xsl:template>
  
  <xsl:template name="process-all-groups">
    <xsl:variable name="groups">
      <xsl:call-template name="tokenize">
        <xsl:with-param name="inputString" select="$allGroupsString"/>
        <xsl:with-param name="separator" select="';'"/>
        <xsl:with-param name="resultElement" select="'group'"/>
      </xsl:call-template>
    </xsl:variable>
    <h4> Add to group </h4>
    <xsl:choose>
      <xsl:when test="xalan:nodeset($groups)/node()">
        <p>
          <table>
            <tr>
              <td/>
              <td>
                <form name="add-user-to-group" method="post" action="#">
                  <select name="Group">
                    <xsl:for-each select="xalan:nodeset($groups)/node()">
                      <option>
                        <xsl:attribute name="value">
                          <xsl:value-of select="."/>
                        </xsl:attribute>
                        <xsl:value-of select="."/>
                      </option>
                    </xsl:for-each>
                  </select>
                  <input type="submit" value="Add">
                    <xsl:attribute name="name">
                      <xsl:text>submitAddToGroup</xsl:text>                
                    </xsl:attribute>
                  </input>
                </form>
             </td>
           </tr>
         </table>
       </p>
     </xsl:when>
     <xsl:otherwise>
       <p>User already belongs to all existing groups</p>
     </xsl:otherwise>
   </xsl:choose>

  </xsl:template>

  <xsl:template name="process-user-groups">
    <xsl:variable name="groups">
      <xsl:call-template name="tokenize">
        <xsl:with-param name="inputString" select="$userGroupsString"/>
        <xsl:with-param name="separator" select="';'"/>
        <xsl:with-param name="resultElement" select="'group'"/>
      </xsl:call-template>
    </xsl:variable>

    <xsl:for-each select="xalan:nodeset($groups)/node()">
      <xsl:variable name="uniqueID">
        <xsl:text>Group_</xsl:text>
        <xsl:value-of select="."/>
      </xsl:variable>
      <tr>
        <td/>
        <td>
          <form method="post" action="#">
            <xsl:attribute name="name">
              <xsl:value-of select="$uniqueID"/>
            </xsl:attribute>
            <h4>
              <xsl:value-of select="."/>
            </h4>
            <input type="submit" value="Unsubscribe">
              <xsl:attribute name="name">
                <xsl:text>submitDeleteFrom</xsl:text>
                <xsl:value-of select="$uniqueID"/>
              </xsl:attribute>
            </input>
          </form>
        </td>
      </tr>
    </xsl:for-each>
  </xsl:template>

</xsl:stylesheet>

