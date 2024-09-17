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
 * Workflow Group Layout.
 */
export interface WorkflowGroup {
  /**
   * Provide the name of the group.
   */
  "groupName": string;
  /**
   * Workflow Group  Details.
   *
   */
  "type": WorkflowGroup.Type;
  /**
   * Steps within the Group.
   */
  "steps": Array<model.WorkflowComponent>;
}

export namespace WorkflowGroup {
  export enum Type {
    ParallelResourceGroup = "PARALLEL_RESOURCE_GROUP",
    RollingResourceGroup = "ROLLING_RESOURCE_GROUP",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: WorkflowGroup): object {
    const jsonObj = {
      ...obj,
      ...{
        "steps": obj.steps
          ? obj.steps.map(item => {
              return model.WorkflowComponent.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: WorkflowGroup): object {
    const jsonObj = {
      ...obj,
      ...{
        "steps": obj.steps
          ? obj.steps.map(item => {
              return model.WorkflowComponent.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}