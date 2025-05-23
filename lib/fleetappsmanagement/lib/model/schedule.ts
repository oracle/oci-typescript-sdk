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
 * Schedule Information.
 */
export interface Schedule {
  /**
   * Start Date for the schedule. An RFC3339 formatted datetime string
   */
  "executionStartdate": Date;

  "type": string;
}

export namespace Schedule {
  export function getJsonObj(obj: Schedule): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "CUSTOM":
          return model.CustomSchedule.getJsonObj(<model.CustomSchedule>(<object>jsonObj), true);
        case "MAINTENANCE_WINDOW":
          return model.MaintenanceWindowSchedule.getJsonObj(
            <model.MaintenanceWindowSchedule>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Schedule): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "CUSTOM":
          return model.CustomSchedule.getDeserializedJsonObj(
            <model.CustomSchedule>(<object>jsonObj),
            true
          );
        case "MAINTENANCE_WINDOW":
          return model.MaintenanceWindowSchedule.getDeserializedJsonObj(
            <model.MaintenanceWindowSchedule>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
}
