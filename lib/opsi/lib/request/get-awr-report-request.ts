/**
 *
 *
 * OpenAPI spec version: 20200630
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
 * @example Click {@link https://docs.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/opsi/GetAwrReport.ts.html |here} to see how to use GetAwrReportRequest.
 */
export interface GetAwrReportRequest extends common.BaseRequest {
  /**
   * Unique Awr Hub identifier
   */
  "awrHubId": string;
  /**
   * AWR source database identifier.
   */
  "awrSourceDatabaseIdentifier": string;
  /**
   * The format of the AWR report. Default report format is HTML.
   */
  "reportFormat"?: model.AwrReportFormatType;
  /**
   * The optional single value query parameter to filter by database instance number.
   */
  "instanceNumber"?: string;
  /**
   * The optional greater than or equal to filter on the snapshot ID.
   *
   */
  "beginSnapshotIdentifierGreaterThanOrEqualTo"?: number;
  /**
   * The optional less than or equal to query parameter to filter the snapshot Identifier.
   *
   */
  "endSnapshotIdentifierLessThanOrEqualTo"?: number;
  /**
   * The optional greater than or equal to query parameter to filter the timestamp. The timestamp format to be followed is: YYYY-MM-DDTHH:MM:SSZ, example 2020-12-03T19:00:53Z
   *
   */
  "timeGreaterThanOrEqualTo"?: Date;
  /**
   * The optional less than or equal to query parameter to filter the timestamp. The timestamp format to be followed is: YYYY-MM-DDTHH:MM:SSZ, example 2020-12-03T19:00:53Z
   *
   */
  "timeLessThanOrEqualTo"?: Date;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact
   * Oracle about a particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
}
