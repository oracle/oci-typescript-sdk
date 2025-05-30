/**
 * Fleet Application Management Service API
 * Fleet Application Management provides a centralized platform to help you automate resource management tasks, validate patch compliance, and enhance operational efficiency across an enterprise.

 * OpenAPI spec version: 20250228
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2025, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Input Parameters for the Task
 */
export interface InputParameter {
  /**
   * stepName for which the input parameters are provided
   */
  "stepName": string;
  /**
   * Arguments for the Task
   */
  "arguments"?: Array<model.TaskArgument>;
}

export namespace InputParameter {
  export function getJsonObj(obj: InputParameter): object {
    const jsonObj = {
      ...obj,
      ...{
        "arguments": obj.arguments
          ? obj.arguments.map(item => {
              return model.TaskArgument.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: InputParameter): object {
    const jsonObj = {
      ...obj,
      ...{
        "arguments": obj.arguments
          ? obj.arguments.map(item => {
              return model.TaskArgument.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
