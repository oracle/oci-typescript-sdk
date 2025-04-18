/**
 * Exadata Fleet Update service API
 * Use the Exadata Fleet Update service to patch large collections of components directly,
as a single entity, orchestrating the maintenance actions to update all chosen components in the stack in a single cycle.

 * OpenAPI spec version: 20220528
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
 * Start time details for the Exadata Fleet Update Action.
 * The specified time should not conflict with existing Exadata Infrastructure maintenance windows.
 * If Stage and Apply Actions are created with a timeToStart specified during Exadata Fleet Update Cycle
 * creation, Apply should be scheduled at least 24 hours after the start time of the Stage Action.
 *
 */
export interface StartTimeScheduleDetails extends model.ScheduleDetails {
  /**
   * The date and time the Exadata Fleet Update Action is expected to start.
   * [RFC 3339](https://tools.ietf.org/rfc/rfc3339), section 14.29.
   *
   */
  "timeToStart": Date;

  "type": string;
}

export namespace StartTimeScheduleDetails {
  export function getJsonObj(obj: StartTimeScheduleDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ScheduleDetails.getJsonObj(obj) as StartTimeScheduleDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "START_TIME";
  export function getDeserializedJsonObj(
    obj: StartTimeScheduleDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ScheduleDetails.getDeserializedJsonObj(obj) as StartTimeScheduleDetails)),
      ...{}
    };

    return jsonObj;
  }
}
