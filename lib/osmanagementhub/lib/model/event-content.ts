/**
 * OS Management Hub API
 * Use the OS Management Hub API to manage and monitor updates and patches for instances in OCI, your private data center, or 3rd-party clouds. 
For more information, see [Overview of OS Management Hub](https://docs.cloud.oracle.com/iaas/osmh/doc/overview.htm).

 * OpenAPI spec version: 20220901
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
 * Information collected during the event, such as logs.
 */
export interface EventContent {
  "type": string;
}

export namespace EventContent {
  export function getJsonObj(obj: EventContent): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "KERNEL":
          return model.KernelEventContent.getJsonObj(
            <model.KernelEventContent>(<object>jsonObj),
            true
          );
        case "EXPLOIT_ATTEMPT":
          return model.ExploitAttemptEventContent.getJsonObj(
            <model.ExploitAttemptEventContent>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: EventContent): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "KERNEL":
          return model.KernelEventContent.getDeserializedJsonObj(
            <model.KernelEventContent>(<object>jsonObj),
            true
          );
        case "EXPLOIT_ATTEMPT":
          return model.ExploitAttemptEventContent.getDeserializedJsonObj(
            <model.ExploitAttemptEventContent>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
}