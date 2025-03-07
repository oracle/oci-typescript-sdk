/**
 * Logging Management API
 * Use the Logging Management API to create, read, list, update, move and delete
log groups, log objects, log saved searches, and agent configurations.

For more information, see [Logging Overview](https://docs.oracle.com/iaas/Content/Logging/Concepts/loggingoverview.htm).

 * OpenAPI spec version: 20200531
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
 * Monitoring filter object.
 */
export interface UnifiedAgentMonitoringFilter {
  /**
   * Unique name for the filter.
   */
  "name": string;

  "filterType": string;
}

export namespace UnifiedAgentMonitoringFilter {
  export function getJsonObj(obj: UnifiedAgentMonitoringFilter): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "filterType" in obj && obj.filterType) {
      switch (obj.filterType) {
        case "KUBERNETES_FILTER":
          return model.UnifiedAgentKubernetesFilter.getJsonObj(
            <model.UnifiedAgentKubernetesFilter>(<object>jsonObj),
            true
          );
        case "URL_FILTER":
          return model.UnifiedAgentUrlFilter.getJsonObj(
            <model.UnifiedAgentUrlFilter>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.filterType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UnifiedAgentMonitoringFilter): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "filterType" in obj && obj.filterType) {
      switch (obj.filterType) {
        case "KUBERNETES_FILTER":
          return model.UnifiedAgentKubernetesFilter.getDeserializedJsonObj(
            <model.UnifiedAgentKubernetesFilter>(<object>jsonObj),
            true
          );
        case "URL_FILTER":
          return model.UnifiedAgentUrlFilter.getDeserializedJsonObj(
            <model.UnifiedAgentUrlFilter>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.filterType}`);
      }
    }
    return jsonObj;
  }
}
