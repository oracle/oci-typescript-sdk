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
 * Details about an installed patch on the target
 */
export interface InventoryRecordPatchDetails {
  /**
   * OCID of the installed patch
   */
  "patchId"?: string;
  /**
   * Name of the installed patch
   */
  "patchName": string;
  /**
   * Description for the installed patch
   */
  "patchDescription": string;
  /**
   * Date on which the patch was applied to the target
   */
  "timeApplied": Date;
  /**
   * Type of patch applied
   */
  "patchType": string;
}

export namespace InventoryRecordPatchDetails {
  export function getJsonObj(obj: InventoryRecordPatchDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: InventoryRecordPatchDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
