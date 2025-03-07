/**
 * Core Services API
 * Use the Core Services API to manage resources such as virtual cloud networks (VCNs),
compute instances, and block storage volumes. For more information, see the console
documentation for the [Networking](https://docs.oracle.com/iaas/Content/Network/Concepts/overview.htm),
[Compute](https://docs.oracle.com/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](https://docs.oracle.com/iaas/Content/Block/Concepts/overview.htm) services.
The required permissions are documented in the
[Details for the Core Services](https://docs.oracle.com/iaas/Content/Identity/Reference/corepolicyreference.htm) article.

 * OpenAPI spec version: 20160918
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
 * An autotune policy automatically tunes the volume's performace based on the type of the policy.
 */
export interface InstanceConfigurationAutotunePolicy {
  "autotuneType": string;
}

export namespace InstanceConfigurationAutotunePolicy {
  export function getJsonObj(obj: InstanceConfigurationAutotunePolicy): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "autotuneType" in obj && obj.autotuneType) {
      switch (obj.autotuneType) {
        case "PERFORMANCE_BASED":
          return model.InstanceConfigurationPerformanceBasedAutotunePolicy.getJsonObj(
            <model.InstanceConfigurationPerformanceBasedAutotunePolicy>(<object>jsonObj),
            true
          );
        case "DETACHED_VOLUME":
          return model.InstanceConfigurationDetachedVolumeAutotunePolicy.getJsonObj(
            <model.InstanceConfigurationDetachedVolumeAutotunePolicy>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.autotuneType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: InstanceConfigurationAutotunePolicy): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "autotuneType" in obj && obj.autotuneType) {
      switch (obj.autotuneType) {
        case "PERFORMANCE_BASED":
          return model.InstanceConfigurationPerformanceBasedAutotunePolicy.getDeserializedJsonObj(
            <model.InstanceConfigurationPerformanceBasedAutotunePolicy>(<object>jsonObj),
            true
          );
        case "DETACHED_VOLUME":
          return model.InstanceConfigurationDetachedVolumeAutotunePolicy.getDeserializedJsonObj(
            <model.InstanceConfigurationDetachedVolumeAutotunePolicy>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.autotuneType}`);
      }
    }
    return jsonObj;
  }
}
