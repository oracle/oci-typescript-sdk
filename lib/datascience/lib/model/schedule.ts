/**
 * Data Science API
 * Use the Data Science API to organize your data science work, access data and computing resources, and build, train, deploy and manage models and model deployments. For more information, see [Data Science](https://docs.oracle.com/iaas/data-science/using/data-science.htm).

 * OpenAPI spec version: 20190101
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
 * A repeating action. Examples:
 * * Invoke a ML Pipeline Run once an hour.
 * * Call ML Job Run every night at midnight.
 *
 */
export interface Schedule {
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the schedule.
   */
  "id": string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment where you want to create the schedule.
   */
  "compartmentId": string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the project associated with the schedule.
   */
  "projectId": string;
  /**
   * A user-friendly display name for the resource. Avoid entering confidential information.
   */
  "displayName": string;
  /**
   * A short description of the schedule.
   */
  "description"?: string;
  /**
   * The last schedule execution time.
   * Format is defined by RFC3339.
   * Example: {@code 2022-08-05T01:02:29.600Z}
   *
   */
  "timeLastScheduleRun"?: Date;
  /**
   * The next scheduled execution time for the schedule.
   * Format is defined by RFC3339.
   * Example: {@code 2022-08-05T01:02:29.600Z}
   *
   */
  "timeNextScheduledRun"?: Date;
  /**
   * The date and time the schedule was created.
   * Format is defined by RFC3339.
   * Example: {@code 2022-08-05T01:02:29.600Z}
   *
   */
  "timeCreated": Date;
  /**
   * The date and time the schedule was updated.
   * Format is defined by RFC3339.
   * Example: {@code 2022-09-05T01:02:29.600Z}
   *
   */
  "timeUpdated"?: Date;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the user who created the schedule.
   */
  "createdBy": string;
  /**
   * The current state of the schedule.
   * Example: {@code ACTIVE}
   *
   */
  "lifecycleState": model.ScheduleLifecycleState;
  /**
   * A message describing the current state in more detail.
   */
  "lifecycleDetails"?: string;
  /**
   * Details about the action performed by the last schedule execution.
   * Example: {@code Invoked ML Application trigger.}
   *
   */
  "lastScheduleRunDetails"?: string;
  "trigger": model.ScheduleICalTrigger | model.ScheduleIntervalTrigger | model.ScheduleCronTrigger;
  "action": model.ScheduleHttpAction;
  "logDetails"?: model.ScheduleLogDetails;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. See [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {\"Department\": \"Finance\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace. See [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces.
   * Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace Schedule {
  export function getJsonObj(obj: Schedule): object {
    const jsonObj = {
      ...obj,
      ...{
        "trigger": obj.trigger ? model.ScheduleTrigger.getJsonObj(obj.trigger) : undefined,
        "action": obj.action ? model.ScheduleAction.getJsonObj(obj.action) : undefined,
        "logDetails": obj.logDetails
          ? model.ScheduleLogDetails.getJsonObj(obj.logDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Schedule): object {
    const jsonObj = {
      ...obj,
      ...{
        "trigger": obj.trigger
          ? model.ScheduleTrigger.getDeserializedJsonObj(obj.trigger)
          : undefined,
        "action": obj.action ? model.ScheduleAction.getDeserializedJsonObj(obj.action) : undefined,
        "logDetails": obj.logDetails
          ? model.ScheduleLogDetails.getDeserializedJsonObj(obj.logDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
