/**
 * Resource Scheduler API
 * Use the Resource scheduler API to manage schedules, to perform actions on a collection of resources.
 * OpenAPI spec version: 20240430
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
 * This is the data to create a schedule.
 */
export interface CreateScheduleDetails {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment in which the schedule is created
   */
  "compartmentId": string;
  /**
   * This is a user-friendly name for the schedule. It does not have to be unique, and it's changeable.
   */
  "displayName"?: string;
  /**
   * This is the description of the schedule.
   */
  "description"?: string;
  /**
   * This is the action that will be executed by the schedule.
   */
  "action": CreateScheduleDetails.Action;
  /**
   * This is the frequency of recurrence of a schedule. The frequency field can either conform to RFC-5545 formatting
   * or UNIX cron formatting for recurrences, based on the value specified by the recurrenceType field.
   *
   */
  "recurrenceDetails": string;
  /**
   * Type of recurrence of a schedule
   */
  "recurrenceType": CreateScheduleDetails.RecurrenceType;
  /**
   * This is a list of resources filters.  The schedule will be applied to resources matching all of them.
   */
  "resourceFilters"?: Array<model.ResourceFilter>;
  /**
   * This is the list of resources to which the scheduled operation is applied.
   */
  "resources"?: Array<model.Resource>;
  /**
    * This is the date and time the schedule starts, in the format defined by [RFC 3339](https://tools.ietf.org/html/rfc3339)
* <p>
Example: {@code 2016-08-25T21:10:29.600Z}
* 
    */
  "timeStarts"?: Date;
  /**
    * This is the date and time the schedule ends, in the format defined by [RFC 3339](https://tools.ietf.org/html/rfc3339)
* <p>
Example: {@code 2016-08-25T21:10:29.600Z}
* 
    */
  "timeEnds"?: Date;
  /**
    * These are free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Department\": \"Finance\"}}
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * These are defined tags for this resource. Each key is predefined and scoped to a namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateScheduleDetails {
  export enum Action {
    StartResource = "START_RESOURCE",
    StopResource = "STOP_RESOURCE"
  }

  export enum RecurrenceType {
    Cron = "CRON",
    Ical = "ICAL"
  }

  export function getJsonObj(obj: CreateScheduleDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "resourceFilters": obj.resourceFilters
          ? obj.resourceFilters.map(item => {
              return model.ResourceFilter.getJsonObj(item);
            })
          : undefined,
        "resources": obj.resources
          ? obj.resources.map(item => {
              return model.Resource.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateScheduleDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "resourceFilters": obj.resourceFilters
          ? obj.resourceFilters.map(item => {
              return model.ResourceFilter.getDeserializedJsonObj(item);
            })
          : undefined,
        "resources": obj.resources
          ? obj.resources.map(item => {
              return model.Resource.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}