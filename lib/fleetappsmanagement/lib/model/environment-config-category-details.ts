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
 * Environment Config Category Details.
 * Defines the supported prioritization associated with resources based on the implementation phase of the applications hosted by them.
 * For example, your organization might support development, beta, or production environment types.
 *
 */
export interface EnvironmentConfigCategoryDetails extends model.ConfigCategoryDetails {
  "configCategory": string;
}

export namespace EnvironmentConfigCategoryDetails {
  export function getJsonObj(
    obj: EnvironmentConfigCategoryDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ConfigCategoryDetails.getJsonObj(obj) as EnvironmentConfigCategoryDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const configCategory = "ENVIRONMENT";
  export function getDeserializedJsonObj(
    obj: EnvironmentConfigCategoryDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ConfigCategoryDetails.getDeserializedJsonObj(
            obj
          ) as EnvironmentConfigCategoryDetails)),
      ...{}
    };

    return jsonObj;
  }
}