/**
 * Ops Insights API
 * Use the Ops Insights API to perform data extraction operations to obtain database
resource utilization, performance statistics, and reference information. For more information,
see [About Oracle Cloud Infrastructure Ops Insights](https://docs.cloud.oracle.com/en-us/iaas/operations-insights/doc/operations-insights.html).

 * OpenAPI spec version: 20200630
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
 * Summary of a Cloud MACS-managed Exadata insight resource (ExaCC).
 */
export interface MacsManagedCloudExadataInsightSummary extends model.ExadataInsightSummary {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the Exadata Infrastructure.
   */
  "exadataInfraId": string;
  /**
   * OCI exadata infrastructure resource type
   */
  "exadataInfraResourceType": model.ExadataResourceType;
  /**
   * The shape of the Exadata Infrastructure.
   */
  "exadataShape": string;

  "entitySource": string;
}

export namespace MacsManagedCloudExadataInsightSummary {
  export function getJsonObj(
    obj: MacsManagedCloudExadataInsightSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ExadataInsightSummary.getJsonObj(obj) as MacsManagedCloudExadataInsightSummary)),
      ...{}
    };

    return jsonObj;
  }
  export const entitySource = "MACS_MANAGED_CLOUD_EXADATA";
  export function getDeserializedJsonObj(
    obj: MacsManagedCloudExadataInsightSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ExadataInsightSummary.getDeserializedJsonObj(
            obj
          ) as MacsManagedCloudExadataInsightSummary)),
      ...{}
    };

    return jsonObj;
  }
}