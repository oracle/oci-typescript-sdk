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
 * The details of the Input argument.
 */
export interface InputArgument {
  /**
   * The name of the argument
   */
  "name": string;
  /**
   * The description of the argument.
   */
  "description"?: string;

  "type": string;
}

export namespace InputArgument {
  export function getJsonObj(obj: InputArgument): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "OUTPUT_VARIABLE":
          return model.OutputVariableInputArgument.getJsonObj(
            <model.OutputVariableInputArgument>(<object>jsonObj),
            true
          );
        case "STRING":
          return model.StringInputArgument.getJsonObj(
            <model.StringInputArgument>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: InputArgument): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "OUTPUT_VARIABLE":
          return model.OutputVariableInputArgument.getDeserializedJsonObj(
            <model.OutputVariableInputArgument>(<object>jsonObj),
            true
          );
        case "STRING":
          return model.StringInputArgument.getDeserializedJsonObj(
            <model.StringInputArgument>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
}