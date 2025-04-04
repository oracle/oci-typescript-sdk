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
 * Base Metric Group for Host configuration metrics
 *
 */
export interface HostConfigurationMetricGroup {
  /**
   * Collection timestamp
   * Example: {@code \"2020-05-06T00:00:00.000Z\"}
   *
   */
  "timeCollected": Date;

  "metricName": string;
}

export namespace HostConfigurationMetricGroup {
  export function getJsonObj(obj: HostConfigurationMetricGroup): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "metricName" in obj && obj.metricName) {
      switch (obj.metricName) {
        case "HOST_RESOURCE_ALLOCATION":
          return model.HostResourceAllocation.getJsonObj(
            <model.HostResourceAllocation>(<object>jsonObj),
            true
          );
        case "HOST_PRODUCT":
          return model.HostProduct.getJsonObj(<model.HostProduct>(<object>jsonObj), true);
        case "HOST_FILESYSTEM_CONFIGURATION":
          return model.HostFilesystemConfiguration.getJsonObj(
            <model.HostFilesystemConfiguration>(<object>jsonObj),
            true
          );
        case "HOST_CONTAINERS":
          return model.HostContainers.getJsonObj(<model.HostContainers>(<object>jsonObj), true);
        case "HOST_NETWORK_CONFIGURATION":
          return model.HostNetworkConfiguration.getJsonObj(
            <model.HostNetworkConfiguration>(<object>jsonObj),
            true
          );
        case "HOST_ENTITIES":
          return model.HostEntities.getJsonObj(<model.HostEntities>(<object>jsonObj), true);
        case "HOST_MEMORY_CONFIGURATION":
          return model.HostMemoryConfiguration.getJsonObj(
            <model.HostMemoryConfiguration>(<object>jsonObj),
            true
          );
        case "HOST_CPU_HARDWARE_CONFIGURATION":
          return model.HostCpuHardwareConfiguration.getJsonObj(
            <model.HostCpuHardwareConfiguration>(<object>jsonObj),
            true
          );
        case "HOST_GPU_CONFIGURATION":
          return model.HostGpuConfiguration.getJsonObj(
            <model.HostGpuConfiguration>(<object>jsonObj),
            true
          );
        case "HOST_HARDWARE_CONFIGURATION":
          return model.HostHardwareConfiguration.getJsonObj(
            <model.HostHardwareConfiguration>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.metricName}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: HostConfigurationMetricGroup): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "metricName" in obj && obj.metricName) {
      switch (obj.metricName) {
        case "HOST_RESOURCE_ALLOCATION":
          return model.HostResourceAllocation.getDeserializedJsonObj(
            <model.HostResourceAllocation>(<object>jsonObj),
            true
          );
        case "HOST_PRODUCT":
          return model.HostProduct.getDeserializedJsonObj(
            <model.HostProduct>(<object>jsonObj),
            true
          );
        case "HOST_FILESYSTEM_CONFIGURATION":
          return model.HostFilesystemConfiguration.getDeserializedJsonObj(
            <model.HostFilesystemConfiguration>(<object>jsonObj),
            true
          );
        case "HOST_CONTAINERS":
          return model.HostContainers.getDeserializedJsonObj(
            <model.HostContainers>(<object>jsonObj),
            true
          );
        case "HOST_NETWORK_CONFIGURATION":
          return model.HostNetworkConfiguration.getDeserializedJsonObj(
            <model.HostNetworkConfiguration>(<object>jsonObj),
            true
          );
        case "HOST_ENTITIES":
          return model.HostEntities.getDeserializedJsonObj(
            <model.HostEntities>(<object>jsonObj),
            true
          );
        case "HOST_MEMORY_CONFIGURATION":
          return model.HostMemoryConfiguration.getDeserializedJsonObj(
            <model.HostMemoryConfiguration>(<object>jsonObj),
            true
          );
        case "HOST_CPU_HARDWARE_CONFIGURATION":
          return model.HostCpuHardwareConfiguration.getDeserializedJsonObj(
            <model.HostCpuHardwareConfiguration>(<object>jsonObj),
            true
          );
        case "HOST_GPU_CONFIGURATION":
          return model.HostGpuConfiguration.getDeserializedJsonObj(
            <model.HostGpuConfiguration>(<object>jsonObj),
            true
          );
        case "HOST_HARDWARE_CONFIGURATION":
          return model.HostHardwareConfiguration.getDeserializedJsonObj(
            <model.HostHardwareConfiguration>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.metricName}`);
      }
    }
    return jsonObj;
  }
}
