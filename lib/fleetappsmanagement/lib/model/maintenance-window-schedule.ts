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
 * MaintenanceWindow Information for Schedule.
 */
export interface MaintenanceWindowSchedule extends model.Schedule {
  /**
   * Provide MaintenanceWindowId
   */
  "maintenanceWindowId": string;

  "type": string;
}

export namespace MaintenanceWindowSchedule {
  export function getJsonObj(obj: MaintenanceWindowSchedule, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Schedule.getJsonObj(obj) as MaintenanceWindowSchedule)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "MAINTENANCE_WINDOW";
  export function getDeserializedJsonObj(
    obj: MaintenanceWindowSchedule,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.Schedule.getDeserializedJsonObj(obj) as MaintenanceWindowSchedule)),
      ...{}
    };

    return jsonObj;
  }
}
