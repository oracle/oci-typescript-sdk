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
 * The information about the host to be analyzed.
 */
export interface CreateHostInsightDetails {
  /**
   * Compartment Identifier of host
   */
  "compartmentId": string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };

  "entitySource": string;
}

export namespace CreateHostInsightDetails {
  export function getJsonObj(obj: CreateHostInsightDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "entitySource" in obj && obj.entitySource) {
      switch (obj.entitySource) {
        case "MACS_MANAGED_CLOUD_HOST":
          return model.CreateMacsManagedCloudHostInsightDetails.getJsonObj(
            <model.CreateMacsManagedCloudHostInsightDetails>(<object>jsonObj),
            true
          );
        case "MACS_MANAGED_EXTERNAL_HOST":
          return model.CreateMacsManagedExternalHostInsightDetails.getJsonObj(
            <model.CreateMacsManagedExternalHostInsightDetails>(<object>jsonObj),
            true
          );
        case "EM_MANAGED_EXTERNAL_HOST":
          return model.CreateEmManagedExternalHostInsightDetails.getJsonObj(
            <model.CreateEmManagedExternalHostInsightDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.entitySource}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateHostInsightDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "entitySource" in obj && obj.entitySource) {
      switch (obj.entitySource) {
        case "MACS_MANAGED_CLOUD_HOST":
          return model.CreateMacsManagedCloudHostInsightDetails.getDeserializedJsonObj(
            <model.CreateMacsManagedCloudHostInsightDetails>(<object>jsonObj),
            true
          );
        case "MACS_MANAGED_EXTERNAL_HOST":
          return model.CreateMacsManagedExternalHostInsightDetails.getDeserializedJsonObj(
            <model.CreateMacsManagedExternalHostInsightDetails>(<object>jsonObj),
            true
          );
        case "EM_MANAGED_EXTERNAL_HOST":
          return model.CreateEmManagedExternalHostInsightDetails.getDeserializedJsonObj(
            <model.CreateEmManagedExternalHostInsightDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.entitySource}`);
      }
    }
    return jsonObj;
  }
}
