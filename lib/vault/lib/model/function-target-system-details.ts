/**
 * Vault Secret Management API
 * Use the Secret Management API to manage secrets and secret versions. For more information, see [Managing Secrets](https://docs.oracle.com/iaas/Content/KeyManagement/Tasks/managingsecrets.htm).
 * OpenAPI spec version: 20180608
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
 * Details of the OCI function that vault secret connects to.
 *
 */
export interface FunctionTargetSystemDetails extends model.TargetSystemDetails {
  /**
   * The unique identifier (OCID) of the OCI Functions that vault secret connects to.
   *
   */
  "functionId": string;

  "targetSystemType": string;
}

export namespace FunctionTargetSystemDetails {
  export function getJsonObj(obj: FunctionTargetSystemDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.TargetSystemDetails.getJsonObj(obj) as FunctionTargetSystemDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const targetSystemType = "FUNCTION";
  export function getDeserializedJsonObj(
    obj: FunctionTargetSystemDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.TargetSystemDetails.getDeserializedJsonObj(obj) as FunctionTargetSystemDetails)),
      ...{}
    };

    return jsonObj;
  }
}
