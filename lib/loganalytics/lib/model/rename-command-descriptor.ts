/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
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
 * Command descriptor for querylanguage RENAME command.
 *
 */
export interface RenameCommandDescriptor extends model.AbstractCommandDescriptor {
  "name": string;
}

export namespace RenameCommandDescriptor {
  export function getJsonObj(obj: RenameCommandDescriptor, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AbstractCommandDescriptor.getJsonObj(obj) as RenameCommandDescriptor)),
      ...{}
    };

    return jsonObj;
  }
  export const name = "RENAME";
  export function getDeserializedJsonObj(
    obj: RenameCommandDescriptor,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AbstractCommandDescriptor.getDeserializedJsonObj(obj) as RenameCommandDescriptor)),
      ...{}
    };

    return jsonObj;
  }
}
