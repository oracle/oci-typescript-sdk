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
 * Kubernetes filter object
 */
export interface UnifiedAgentKubernetesFilter extends model.UnifiedAgentMonitoringFilter {
  /**
   * List of metrics regex to be allowed.
   */
  "allowList"?: Array<string>;
  /**
   * List of metrics regex to be denied.
   */
  "denyList"?: Array<string>;

  "filterType": string;
}

export namespace UnifiedAgentKubernetesFilter {
  export function getJsonObj(obj: UnifiedAgentKubernetesFilter, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UnifiedAgentMonitoringFilter.getJsonObj(obj) as UnifiedAgentKubernetesFilter)),
      ...{}
    };

    return jsonObj;
  }
  export const filterType = "KUBERNETES_FILTER";
  export function getDeserializedJsonObj(
    obj: UnifiedAgentKubernetesFilter,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UnifiedAgentMonitoringFilter.getDeserializedJsonObj(
            obj
          ) as UnifiedAgentKubernetesFilter)),
      ...{}
    };

    return jsonObj;
  }
}
