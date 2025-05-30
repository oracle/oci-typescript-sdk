/**
 * Fleet Application Management Service API
 * Fleet Application Management provides a centralized platform to help you automate resource management tasks, validate patch compliance, and enhance operational efficiency across an enterprise.

 * OpenAPI spec version: 20250228
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
 * Maintenance Window information to be updated.
 */
export interface UpdateMaintenanceWindowDetails {
  /**
    * A user-friendly name. Does not have to be unique, and it's changeable.
* Avoid entering confidential information.
* <p>
Example: {@code My new resource}
* 
    */
  "displayName"?: string;
  /**
   * A user-friendly description. To provide some insight about the resource.
   * Avoid entering confidential information.
   *
   */
  "description"?: string;
  /**
   * Does the maintenenace window cause outage?
   * An outage indicates whether a maintenance window can consider operations that require downtime.
   * It means a period when the application is not accessible.
   *
   */
  "isOutage"?: boolean;
  /**
   * Specify the date and time of the day that the maintenance window starts.
   */
  "timeScheduleStart"?: Date;
  /**
   * Duration of the maintenance window.
   * Specify how long the maintenance window remains open.
   *
   */
  "duration"?: string;
  /**
   * Is this a recurring maintenance window?
   */
  "isRecurring"?: boolean;
  /**
   * Recurrence rule specification if maintenance window recurring.
   * Specify the frequency of running the maintenance window.
   *
   */
  "recurrences"?: string;
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

export namespace UpdateMaintenanceWindowDetails {
  export function getJsonObj(obj: UpdateMaintenanceWindowDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateMaintenanceWindowDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
