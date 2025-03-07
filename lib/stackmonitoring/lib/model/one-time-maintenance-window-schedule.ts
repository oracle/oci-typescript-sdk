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
 * Schedule information for the Maintenance Window that is executed only once.
 *
 */
export interface OneTimeMaintenanceWindowSchedule extends model.MaintenanceWindowSchedule {
  /**
   * Start time of Maintenance window. A RFC3339 formatted datetime string
   *
   */
  "timeMaintenanceWindowStart"?: Date;
  /**
   * Start time of Maintenance window. A RFC3339 formatted datetime string
   *
   */
  "timeMaintenanceWindowEnd"?: Date;

  "scheduleType": string;
}

export namespace OneTimeMaintenanceWindowSchedule {
  export function getJsonObj(
    obj: OneTimeMaintenanceWindowSchedule,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.MaintenanceWindowSchedule.getJsonObj(obj) as OneTimeMaintenanceWindowSchedule)),
      ...{}
    };

    return jsonObj;
  }
  export const scheduleType = "ONE_TIME";
  export function getDeserializedJsonObj(
    obj: OneTimeMaintenanceWindowSchedule,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.MaintenanceWindowSchedule.getDeserializedJsonObj(
            obj
          ) as OneTimeMaintenanceWindowSchedule)),
      ...{}
    };

    return jsonObj;
  }
}
