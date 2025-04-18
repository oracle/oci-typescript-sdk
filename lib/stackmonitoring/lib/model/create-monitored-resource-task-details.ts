/**
 * Stack Monitoring API
 * Stack Monitoring API.
 * OpenAPI spec version: 20210330
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
 * The request details for the stack monitoring resource task.
 */
export interface CreateMonitoredResourceTaskDetails {
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment identifier.
   *
   */
  "compartmentId": string;
  /**
   * Name of the task. If not provided by default the following names will be taken
   * OCI tasks - namespace plus timestamp.
   *
   */
  "name"?: string;
  "taskDetails":
    | model.ImportOciTelemetryResourcesTaskDetails
    | model.UpdateAgentReceiverTaskDetails
    | model.UpdateResourceTypeConfigTaskDetails;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateMonitoredResourceTaskDetails {
  export function getJsonObj(obj: CreateMonitoredResourceTaskDetails): object {
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
  export function getDeserializedJsonObj(obj: CreateMonitoredResourceTaskDetails): object {
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
