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
 * The details of the task.
 */
export interface AssociatedLocalTaskDetails extends model.AssociatedTaskDetails {
  "executionDetails": model.ScriptBasedExecutionDetails | model.ApiBasedExecutionDetails;
  /**
   * The description of the task.
   */
  "description"?: string;
  /**
   * The platform of the runbook.
   */
  "platform"?: string;
  /**
   * Make a copy of this task in Library
   */
  "isCopyToLibraryEnabled"?: boolean;
  /**
   * The OS for the task.
   */
  "osType": model.OsType;
  "properties"?: model.Properties;
  /**
   * The name of the task
   */
  "name"?: string;

  "scope": string;
}

export namespace AssociatedLocalTaskDetails {
  export function getJsonObj(obj: AssociatedLocalTaskDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AssociatedTaskDetails.getJsonObj(obj) as AssociatedLocalTaskDetails)),
      ...{
        "executionDetails": obj.executionDetails
          ? model.ExecutionDetails.getJsonObj(obj.executionDetails)
          : undefined,

        "properties": obj.properties ? model.Properties.getJsonObj(obj.properties) : undefined
      }
    };

    return jsonObj;
  }
  export const scope = "LOCAL";
  export function getDeserializedJsonObj(
    obj: AssociatedLocalTaskDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AssociatedTaskDetails.getDeserializedJsonObj(obj) as AssociatedLocalTaskDetails)),
      ...{
        "executionDetails": obj.executionDetails
          ? model.ExecutionDetails.getDeserializedJsonObj(obj.executionDetails)
          : undefined,

        "properties": obj.properties
          ? model.Properties.getDeserializedJsonObj(obj.properties)
          : undefined
      }
    };

    return jsonObj;
  }
}