/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](https://docs.oracle.com/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
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
 * The estimated total time required in minutes for all patching operations (database server, storage server, and network switch patching).
 *
 */
export interface EstimatedPatchingTime {
  /**
   * The estimated total time required in minutes for all patching operations. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalEstimatedPatchingTime"?: number;
  /**
   * The estimated time required in minutes for database server patching. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "estimatedDbServerPatchingTime"?: number;
  /**
   * The estimated time required in minutes for storage server patching. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "estimatedStorageServerPatchingTime"?: number;
  /**
   * The estimated time required in minutes for network switch patching. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "estimatedNetworkSwitchesPatchingTime"?: number;
}

export namespace EstimatedPatchingTime {
  export function getJsonObj(obj: EstimatedPatchingTime): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: EstimatedPatchingTime): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
