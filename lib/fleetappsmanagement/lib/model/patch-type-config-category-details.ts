/**
 * Fleet Application Management Service API
 * Fleet Application Management provides a centralized platform to help you automate resource management tasks, validate patch compliance, and enhance operational efficiency across an enterprise.

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
 * Patch Type Config Category Details.
 * Defines software patch types as per product standards referred under available Patches for supported products.
 *
 */
export interface PatchTypeConfigCategoryDetails extends model.ConfigCategoryDetails {
  "configCategory": string;
}

export namespace PatchTypeConfigCategoryDetails {
  export function getJsonObj(
    obj: PatchTypeConfigCategoryDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ConfigCategoryDetails.getJsonObj(obj) as PatchTypeConfigCategoryDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const configCategory = "PATCH_TYPE";
  export function getDeserializedJsonObj(
    obj: PatchTypeConfigCategoryDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ConfigCategoryDetails.getDeserializedJsonObj(
            obj
          ) as PatchTypeConfigCategoryDetails)),
      ...{}
    };

    return jsonObj;
  }
}