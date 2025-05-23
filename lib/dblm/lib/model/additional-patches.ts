/**
 * Dblm API
 * A description of the Dblm API
 * OpenAPI spec version: 20240102
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
 * Summary of patch recommendations for image.
 */
export interface AdditionalPatches {
  /**
   * Id for the patch recommendation. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "patchId"?: number;
  /**
   * Name for the patch recommendation.
   */
  "patchName"?: string;
  /**
   * Description of the patch recommendation.
   */
  "description"?: string;
  /**
   * Shows if patch is recommended or is an additional patch from an existing database.
   */
  "category"?: AdditionalPatches.Category;
}

export namespace AdditionalPatches {
  export enum Category {
    Recommended = "RECOMMENDED",
    AdditionalPatch = "ADDITIONAL_PATCH",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: AdditionalPatches): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AdditionalPatches): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
