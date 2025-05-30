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
 * Summary of resources and their patch compliance.
 */
export interface ResourcesPatchComplianceSummary {
  /**
   * Total number of resources. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalResourcesCount"?: number;
  /**
   * Total number of resources that are up to date. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "upToDateResourcesCount"?: number;
  /**
   * Total number of  non-compliant resources. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "nonCompliantResourcesCount"?: number;
  /**
   * Total number of resources that are not subscribed. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "notSubscribedResourcesCount"?: number;
  /**
   * Total number of resources that are not registered to DBLM. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "notDblmRegisteredResourcesCount"?: number;
}

export namespace ResourcesPatchComplianceSummary {
  export function getJsonObj(obj: ResourcesPatchComplianceSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ResourcesPatchComplianceSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
