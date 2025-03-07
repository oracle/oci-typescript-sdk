/**
 * OS Management Hub API
 * Use the OS Management Hub API to manage and monitor updates and patches for instances in OCI, your private data center, or 3rd-party clouds. 
For more information, see [Overview of OS Management Hub](https://docs.oracle.com/iaas/osmh/doc/overview.htm).

 * OpenAPI spec version: 20220901
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
 * Provides the information used to update a scheduled job.
 */
export interface UpdateScheduledJobDetails {
  /**
   * User-friendly name for the scheduled job. Avoid entering confidential information.
   */
  "displayName"?: string;
  /**
   * User-specified description for the scheduled job. Avoid entering confidential information.
   */
  "description"?: string;
  /**
   * The type of scheduling frequency for the job.
   */
  "scheduleType"?: model.ScheduleTypes;
  /**
   * The time of the next execution of this scheduled job (in [RFC 3339](https://tools.ietf.org/rfc/rfc3339) format).
   */
  "timeNextExecution"?: Date;
  /**
   * The frequency schedule for a recurring scheduled job.
   */
  "recurringRule"?: string;
  /**
   * The list of operations this scheduled job needs to perform.
   * A scheduled job supports only one operation type, unless it is one of the following:
   * * UPDATE_PACKAGES
   * * UPDATE_ALL
   * * UPDATE_SECURITY
   * * UPDATE_BUGFIX
   * * UPDATE_ENHANCEMENT
   * * UPDATE_OTHER
   * * UPDATE_KSPLICE_USERSPACE
   * * UPDATE_KSPLICE_KERNEL
   *
   */
  "operations"?: Array<model.ScheduledJobOperation>;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {\"Department\": \"Finance\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * The amount of time in minutes to wait until retrying the scheduled job. If set, the service will automatically
   * retry a failed scheduled job after the interval. For example, you could set the interval to [2,5,10]. If the
   * initial execution of the job fails, the service waits 2 minutes and then retries. If that fails, the service
   * waits 5 minutes and then retries. If that fails, the service waits 10 minutes and then retries.
   *
   */
  "retryIntervals"?: Array<number>;
}

export namespace UpdateScheduledJobDetails {
  export function getJsonObj(obj: UpdateScheduledJobDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "operations": obj.operations
          ? obj.operations.map(item => {
              return model.ScheduledJobOperation.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateScheduledJobDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "operations": obj.operations
          ? obj.operations.map(item => {
              return model.ScheduledJobOperation.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
