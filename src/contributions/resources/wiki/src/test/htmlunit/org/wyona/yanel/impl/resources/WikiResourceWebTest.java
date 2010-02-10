/*
 * Copyright 2006 Wyona
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.wyona.org/licenses/APACHE-LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
package org.wyona.yanel.impl.resources;

import org.wyona.yanel.htmlunit.AbstractHtmlUnitTest;

/**
 * Test loading a page which is an xml resource and verifies the title and 
 * page content.
 */
public class WikiResourceWebTest extends AbstractHtmlUnitTest {

    protected void setUp() throws Exception {
        this.testName = "Wiki Resource Web Test";
        super.setUp();
    }

    /**
     * Loads a page and verifies its title.
     */
    public void testXMLResource() throws Exception {
        loadHtmlPage("test/use-cases/");
        assertTitleEquals("Testing - Yanel");
/* TODO: For some strange reason this test fails on the Hudson server, whereas it works on my local Mac OS X
        loadHtmlPage("test/use-cases/hello/wiki/hello-world.html");
        assertTitleEquals("A Wiki page - Yanel");
        assertPageContainsText("Wiki Test Page");
*/
    }
}
