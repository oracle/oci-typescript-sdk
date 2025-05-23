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
 * Log-Analytics entity counts summary.
 *
 */
export interface LogAnalyticsEntitySummaryReport {
  /**
   * Total number of ACTIVE entities
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "activeEntitiesCount": number;
  /**
   * Entities with log collection enabled
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "entitiesWithHasLogsCollectedCount": number;
  /**
   * Entities with management agent
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "entitiesWithManagementAgentCount": number;
  /**
   * Compartment Identifier [OCID] (https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm).
   */
  "compartmentId": string;
}

export namespace LogAnalyticsEntitySummaryReport {
  export function getJsonObj(obj: LogAnalyticsEntitySummaryReport): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: LogAnalyticsEntitySummaryReport): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
