/**
 * Compute Cloud@Customer API
 * Use the Compute Cloud@Customer API to manage Compute Cloud@Customer infrastructures and upgrade schedules.
For more information see [Compute Cloud@Customer documentation](https://docs.oracle.com/iaas/compute-cloud-at-customer/home.htm).

 * OpenAPI spec version: 20221208
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
 * A period where upgrades may be applied to Compute Cloud@Customer infrastructures
 * associated with the schedule. All upgrade windows may not be used.
 *
 */
export interface UpdateCccScheduleEvent {
  /**
   * A description of the Compute Cloud@Customer upgrade schedule time block.
   */
  "description": string;
  /**
   * The date and time when the Compute Cloud@Customer upgrade schedule event starts,
   * inclusive. An RFC3339 formatted UTC datetime string. For an event with recurrences,
   * this is the date that a recurrence can start being applied.
   *
   */
  "timeStart": Date;
  /**
   * The duration of this block of time. The duration must be specified and be of the
   * ISO-8601 format for durations.
   *
   */
  "scheduleEventDuration": string;
  /**
   * Frequency of recurrence of schedule block. When this field is not included, the event
   * is assumed to be a one time occurrence. The frequency field is strictly parsed and must
   * conform to RFC-5545 formatting for recurrences.
   *
   */
  "scheduleEventRecurrences"?: string;
}

export namespace UpdateCccScheduleEvent {
  export function getJsonObj(obj: UpdateCccScheduleEvent): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateCccScheduleEvent): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
