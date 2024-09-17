/**
 * Fleet Application Management Service API
 * Fleet Application Management Service API. Use this API to for all FAMS related activities.
To manage fleets,view complaince report for the Fleet,scedule patches and other lifecycle activities

 * OpenAPI spec version: 20230831
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Workflow Group Component Details.
 */
export interface WorkflowGroupComponent extends model.WorkflowComponent {
  /**
   * Provide the name of the group.
   */
  "groupName": string;
  /**
   * Tasks within the Group.
   * Provide the stepName for all tasks that are applicable
   *
   */
  "steps"?: Array<string>;

  "type": string;
}

export namespace WorkflowGroupComponent {
  export function getJsonObj(obj: WorkflowGroupComponent, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.WorkflowComponent.getJsonObj(obj) as WorkflowGroupComponent)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "PARALLEL_TASK_GROUP";
  export function getDeserializedJsonObj(
    obj: WorkflowGroupComponent,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.WorkflowComponent.getDeserializedJsonObj(obj) as WorkflowGroupComponent)),
      ...{}
    };

    return jsonObj;
  }
}