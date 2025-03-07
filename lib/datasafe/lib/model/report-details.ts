/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
 * OpenAPI spec version: 20181201
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
 * The details of the report schedule.
 */
export interface ReportDetails {
  "reportType": string;
}

export namespace ReportDetails {
  export function getJsonObj(obj: ReportDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "reportType" in obj && obj.reportType) {
      switch (obj.reportType) {
        case "AUDIT":
          return model.ScheduleAuditReportDetails.getJsonObj(
            <model.ScheduleAuditReportDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.reportType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ReportDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "reportType" in obj && obj.reportType) {
      switch (obj.reportType) {
        case "AUDIT":
          return model.ScheduleAuditReportDetails.getDeserializedJsonObj(
            <model.ScheduleAuditReportDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.reportType}`);
      }
    }
    return jsonObj;
  }
}
