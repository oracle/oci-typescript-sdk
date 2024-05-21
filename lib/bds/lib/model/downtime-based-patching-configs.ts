/**
 * Big Data Service API
 * REST API for Oracle Big Data Service. Use this API to build, deploy, and manage fully elastic Big Data Service clusters. Build on Hadoop, Spark and Data Science distributions, which can be fully integrated with existing enterprise data in Oracle Database and Oracle applications.

 * OpenAPI spec version: 20190531
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
 * Patching configurations which allows downtime. This patching config will patch and reboot all the nodes in parallel.
 */
export interface DowntimeBasedPatchingConfigs extends model.PatchingConfigs {
  "patchingConfigStrategy": string;
}

export namespace DowntimeBasedPatchingConfigs {
  export function getJsonObj(obj: DowntimeBasedPatchingConfigs, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.PatchingConfigs.getJsonObj(obj) as DowntimeBasedPatchingConfigs)),
      ...{}
    };

    return jsonObj;
  }
  export const patchingConfigStrategy = "DOWNTIME_BASED";
  export function getDeserializedJsonObj(
    obj: DowntimeBasedPatchingConfigs,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.PatchingConfigs.getDeserializedJsonObj(obj) as DowntimeBasedPatchingConfigs)),
      ...{}
    };

    return jsonObj;
  }
}