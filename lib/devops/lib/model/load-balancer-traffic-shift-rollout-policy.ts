/**
 * DevOps API
 * Use the DevOps API to create DevOps projects, configure code repositories,  add artifacts to deploy, build and test software applications, configure  target deployment environments, and deploy software applications.  For more information, see [DevOps](https://docs.oracle.com/iaas/Content/devops/using/home.htm).
 * OpenAPI spec version: 20210630
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
 * Description of rollout policy for load balancer traffic shift stage.
 */
export interface LoadBalancerTrafficShiftRolloutPolicy {
  /**
   * Specifies number of batches for this stage. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "batchCount": number;
  /**
   * Specifies delay in seconds between batches. The default delay is 1 minute. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "batchDelayInSeconds"?: number;
  /**
   * Indicates the criteria to stop. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "rampLimitPercent"?: number;
}

export namespace LoadBalancerTrafficShiftRolloutPolicy {
  export function getJsonObj(obj: LoadBalancerTrafficShiftRolloutPolicy): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: LoadBalancerTrafficShiftRolloutPolicy): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
