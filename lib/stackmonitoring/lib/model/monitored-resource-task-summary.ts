/**
 * Stack Monitoring API
 * Stack Monitoring API.
 * OpenAPI spec version: 20210330
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The summary details for the task.
 */
export interface MonitoredResourceTaskSummary {
  /**
   * Task identifier [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   *
   */
  "id": string;
  /**
   * Name of the task.
   */
  "name": string;
  "taskDetails": model.ImportOciTelemetryResourcesTaskDetails;
  /**
   * Identifiers [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) for work requests submitted for this task.
   *
   */
  "workRequestIds"?: Array<string>;
  /**
   * The date and time when the stack monitoring resource task was created, expressed in
   * [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format.
   *
   */
  "timeCreated"?: Date;
  /**
   * The date and time when the stack monitoring resource task was last updated, expressed in
   * [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format.
   *
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the stack monitoring resource task.
   */
  "lifecycleState"?: model.MonitoredResourceTaskLifecycleState;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces.
   * Example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace MonitoredResourceTaskSummary {
  export function getJsonObj(obj: MonitoredResourceTaskSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "taskDetails": obj.taskDetails
          ? model.MonitoredResourceTaskDetails.getJsonObj(obj.taskDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: MonitoredResourceTaskSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "taskDetails": obj.taskDetails
          ? model.MonitoredResourceTaskDetails.getDeserializedJsonObj(obj.taskDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}