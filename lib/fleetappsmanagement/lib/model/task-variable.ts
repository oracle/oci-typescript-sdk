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
 * The variable of the task.
 * At least one of the dynamicArguments or output needs to be provided.
 *
 */
export interface TaskVariable {
  /**
   * The input variables for the task.
   */
  "inputVariables"?: Array<model.InputArgument>;
  /**
   * The list of output variables.
   */
  "outputVariables"?: Array<string>;
}

export namespace TaskVariable {
  export function getJsonObj(obj: TaskVariable): object {
    const jsonObj = {
      ...obj,
      ...{
        "inputVariables": obj.inputVariables
          ? obj.inputVariables.map(item => {
              return model.InputArgument.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TaskVariable): object {
    const jsonObj = {
      ...obj,
      ...{
        "inputVariables": obj.inputVariables
          ? obj.inputVariables.map(item => {
              return model.InputArgument.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
