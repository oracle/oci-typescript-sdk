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
 * Custom schedule details.
 */
export interface CustomSchedule extends model.Schedule {
  /**
   * Recurrence rule specification if recurring
   */
  "recurrences"?: string;
  /**
   * Duration of the schedule.
   */
  "duration": string;

  "type": string;
}

export namespace CustomSchedule {
  export function getJsonObj(obj: CustomSchedule, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Schedule.getJsonObj(obj) as CustomSchedule)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "CUSTOM";
  export function getDeserializedJsonObj(obj: CustomSchedule, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Schedule.getDeserializedJsonObj(obj) as CustomSchedule)),
      ...{}
    };

    return jsonObj;
  }
}
