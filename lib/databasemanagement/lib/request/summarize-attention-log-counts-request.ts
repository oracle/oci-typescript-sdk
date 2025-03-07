/**
 *
 *
 * OpenAPI spec version: 20201101
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
 * @example Click {@link https://docs.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/databasemanagement/SummarizeAttentionLogCounts.ts.html |here} to see how to use SummarizeAttentionLogCountsRequest.
 */
export interface SummarizeAttentionLogCountsRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the Managed Database.
   */
  "managedDatabaseId": string;
  /**
   * The optional greater than or equal to timestamp to filter the logs.
   */
  "timeGreaterThanOrEqualTo"?: Date;
  /**
   * The optional less than or equal to timestamp to filter the logs.
   */
  "timeLessThanOrEqualTo"?: Date;
  /**
   * The optional parameter to filter the attention logs by urgency.
   */
  "urgencyFilter"?: SummarizeAttentionLogCountsRequest.UrgencyFilter;
  /**
   * The optional parameter used to group different attention logs.
   */
  "groupBy"?: SummarizeAttentionLogCountsRequest.GroupBy;
  /**
   * The optional parameter to filter the attention or alert logs by type.
   */
  "typeFilter"?: SummarizeAttentionLogCountsRequest.TypeFilter;
  /**
   * The optional query parameter to filter the attention or alert logs by search text.
   */
  "logSearchText"?: string;
  /**
   * The flag to indicate whether the search text is regular expression or not.
   */
  "isRegularExpression"?: boolean;
  /**
   * The page token representing the page from where the next set of paginated results
   * are retrieved. This is usually retrieved from a previous list call.
   *
   */
  "page"?: string;
  /**
   * The maximum number of records returned in the paginated response.
   */
  "limit"?: number;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
  /**
   * The OCID of the Named Credential.
   */
  "opcNamedCredentialId"?: string;
}

export namespace SummarizeAttentionLogCountsRequest {
  export enum UrgencyFilter {
    Immediate = "IMMEDIATE",
    Soon = "SOON",
    Deferrable = "DEFERRABLE",
    Info = "INFO",
    All = "ALL"
  }

  export enum GroupBy {
    Urgency = "URGENCY",
    Type = "TYPE"
  }

  export enum TypeFilter {
    Unknown = "UNKNOWN",
    IncidentError = "INCIDENT_ERROR",
    Error = "ERROR",
    Warning = "WARNING",
    Notification = "NOTIFICATION",
    Trace = "TRACE",
    All = "ALL"
  }
}
