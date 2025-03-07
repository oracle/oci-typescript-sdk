/**
 * Notifications API
 * Use the Notifications API to broadcast messages to distributed components by topic, using a publish-subscribe pattern.
For information about managing topics, subscriptions, and messages, see [Notifications Overview](https://docs.oracle.com/iaas/Content/Notification/Concepts/notificationoverview.htm).

 * OpenAPI spec version: 20181201
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
 * The backoff retry portion of the subscription delivery policy. For information about retry durations for subscriptions, see
 * [How Notifications Works](https://docs.oracle.com/iaas/Content/Notification/Concepts/notificationoverview.htm#how).
 *
 */
export interface BackoffRetryPolicy {
  /**
   * The maximum retry duration in milliseconds. Default value is {@code 7200000} (2 hours). Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxRetryDuration": number;
  /**
   * The type of delivery policy.
   *
   */
  "policyType": BackoffRetryPolicy.PolicyType;
}

export namespace BackoffRetryPolicy {
  export enum PolicyType {
    Exponential = "EXPONENTIAL",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: BackoffRetryPolicy): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: BackoffRetryPolicy): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
