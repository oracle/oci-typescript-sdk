/**
 * Stack Monitoring API
 * Stack Monitoring API.
 * OpenAPI spec version: 20210330
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
 * Summary of an AUTO_PROMOTE config.
 *
 */
export interface AutoPromoteConfigSummary extends model.ConfigSummary {
  /**
   * The type of resource to configure for automatic promotion.
   */
  "resourceType": AutoPromoteConfigSummary.ResourceType;
  /**
   * True if automatic promotion is enabled, false if it is not enabled.
   */
  "isEnabled": boolean;

  "configType": string;
}

export namespace AutoPromoteConfigSummary {
  export enum ResourceType {
    Host = "HOST",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: AutoPromoteConfigSummary, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ConfigSummary.getJsonObj(obj) as AutoPromoteConfigSummary)),
      ...{}
    };

    return jsonObj;
  }
  export const configType = "AUTO_PROMOTE";
  export function getDeserializedJsonObj(
    obj: AutoPromoteConfigSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ConfigSummary.getDeserializedJsonObj(obj) as AutoPromoteConfigSummary)),
      ...{}
    };

    return jsonObj;
  }
}
