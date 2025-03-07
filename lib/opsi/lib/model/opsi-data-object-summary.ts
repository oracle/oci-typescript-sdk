/**
 * Ops Insights API
 * Use the Ops Insights API to perform data extraction operations to obtain database
resource utilization, performance statistics, and reference information. For more information,
see [About Oracle Cloud Infrastructure Ops Insights](https://docs.oracle.com/iaas/en-us/iaas/operations-insights/doc/operations-insights.html).

 * OpenAPI spec version: 20200630
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
 * Summary of an OPSI data object.
 */
export interface OpsiDataObjectSummary {
  /**
   * Unique identifier of OPSI data object.
   */
  "identifier": string;
  /**
   * User-friendly name of OPSI data object.
   */
  "displayName": string;
  /**
   * Description of OPSI data object.
   */
  "description"?: string;
  /**
   * Name of the data object, which can be used in data object queries just like how view names are used in a query.
   */
  "name"?: string;
  /**
   * Names of all the groups to which the data object belongs to.
   */
  "groupNames"?: Array<string>;

  "dataObjectType": string;
}

export namespace OpsiDataObjectSummary {
  export function getJsonObj(obj: OpsiDataObjectSummary): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "dataObjectType" in obj && obj.dataObjectType) {
      switch (obj.dataObjectType) {
        case "HOST_INSIGHTS_DATA_OBJECT":
          return model.HostInsightsDataObjectSummary.getJsonObj(
            <model.HostInsightsDataObjectSummary>(<object>jsonObj),
            true
          );
        case "DATABASE_INSIGHTS_DATA_OBJECT":
          return model.DatabaseInsightsDataObjectSummary.getJsonObj(
            <model.DatabaseInsightsDataObjectSummary>(<object>jsonObj),
            true
          );
        case "EXADATA_INSIGHTS_DATA_OBJECT":
          return model.ExadataInsightsDataObjectSummary.getJsonObj(
            <model.ExadataInsightsDataObjectSummary>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.dataObjectType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: OpsiDataObjectSummary): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "dataObjectType" in obj && obj.dataObjectType) {
      switch (obj.dataObjectType) {
        case "HOST_INSIGHTS_DATA_OBJECT":
          return model.HostInsightsDataObjectSummary.getDeserializedJsonObj(
            <model.HostInsightsDataObjectSummary>(<object>jsonObj),
            true
          );
        case "DATABASE_INSIGHTS_DATA_OBJECT":
          return model.DatabaseInsightsDataObjectSummary.getDeserializedJsonObj(
            <model.DatabaseInsightsDataObjectSummary>(<object>jsonObj),
            true
          );
        case "EXADATA_INSIGHTS_DATA_OBJECT":
          return model.ExadataInsightsDataObjectSummary.getDeserializedJsonObj(
            <model.ExadataInsightsDataObjectSummary>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.dataObjectType}`);
      }
    }
    return jsonObj;
  }
}
