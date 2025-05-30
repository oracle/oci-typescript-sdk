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
 * The details of the String Input argument.
 */
export interface StringInputArgument extends model.InputArgument {
  "type": string;
}

export namespace StringInputArgument {
  export function getJsonObj(obj: StringInputArgument, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.InputArgument.getJsonObj(obj) as StringInputArgument)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "STRING";
  export function getDeserializedJsonObj(
    obj: StringInputArgument,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.InputArgument.getDeserializedJsonObj(obj) as StringInputArgument)),
      ...{}
    };

    return jsonObj;
  }
}
