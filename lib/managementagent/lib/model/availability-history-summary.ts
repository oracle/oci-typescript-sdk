/**
 * Management Agent API
 * Use the Management Agent API to manage your infrastructure's management agents, including their plugins and install keys.
For more information, see [Management Agent](https://docs.oracle.com/iaas/management-agents/index.html).

 * OpenAPI spec version: 20200202
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
 * Availability history of Management Agent.
 */
export interface AvailabilityHistorySummary {
  /**
   * agent identifier
   */
  "managementAgentId": string;
  /**
   * The availability status of managementAgent
   */
  "availabilityStatus": model.AvailabilityStatus;
  /**
   * The time at which the Management Agent moved to the availability status. An RFC3339 formatted datetime string
   */
  "timeAvailabilityStatusStarted"?: Date;
  /**
   * The time till which the Management Agent was known to be in the availability status. An RFC3339 formatted datetime string
   */
  "timeAvailabilityStatusEnded"?: Date;
}

export namespace AvailabilityHistorySummary {
  export function getJsonObj(obj: AvailabilityHistorySummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AvailabilityHistorySummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
