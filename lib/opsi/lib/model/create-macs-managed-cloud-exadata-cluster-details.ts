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
 * The information of the VM Cluster which contains databases.
 */
export interface CreateMacsManagedCloudExadataClusterDetails {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the VM Cluster.
   */
  "vmclusterId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId": string;

  "vmClusterType": string;
}

export namespace CreateMacsManagedCloudExadataClusterDetails {
  export function getJsonObj(obj: CreateMacsManagedCloudExadataClusterDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "vmClusterType" in obj && obj.vmClusterType) {
      switch (obj.vmClusterType) {
        case "vmCluster":
          return model.CreateMacsManagedCloudExadataVmclusterDetails.getJsonObj(
            <model.CreateMacsManagedCloudExadataVmclusterDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.vmClusterType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateMacsManagedCloudExadataClusterDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "vmClusterType" in obj && obj.vmClusterType) {
      switch (obj.vmClusterType) {
        case "vmCluster":
          return model.CreateMacsManagedCloudExadataVmclusterDetails.getDeserializedJsonObj(
            <model.CreateMacsManagedCloudExadataVmclusterDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.vmClusterType}`);
      }
    }
    return jsonObj;
  }
}