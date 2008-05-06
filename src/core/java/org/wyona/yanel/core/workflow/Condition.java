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
package org.wyona.yanel.core.workflow;

import org.wyona.yanel.core.api.attributes.WorkflowableV1;

/**
 * Workflow condition in order to implement if a transition shall be executed/displayed
 */
public interface Condition {

    /**
     * Check if condition is fullfilled or not (TODO: It would be nice if one could specify a reason if it is not fullfilled!)
     */
    boolean isComplied(WorkflowableV1 workflowable, Workflow workflow, String revision) throws WorkflowException;

    /**
     *
     */
    void setExpression(String expression) throws WorkflowException;
}
