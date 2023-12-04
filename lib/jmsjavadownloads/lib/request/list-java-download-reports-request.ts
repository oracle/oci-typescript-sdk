/**
 *
 *
 * OpenAPI spec version: 20230601
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/jmsjavadownloads/ListJavaDownloadReports.ts.html |here} to see how to use ListJavaDownloadReportsRequest.
 */
export interface ListJavaDownloadReportsRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the tenancy.
   *
   */
  "compartmentId": string;
  /**
   * A filter to return only resources their lifecycleState matches the given lifecycleState.
   */
  "lifecycleState"?: model.LifecycleState;
  /**
   * A filter to return only resources that match the display name.
   */
  "displayName"?: string;
  /**
   * Unique Java download report identifier.
   */
  "javaDownloadReportId"?: string;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * The page token representing the page at which to start retrieving results. The token is usually retrieved from a previous list call.
   */
  "page"?: string;
  /**
   * The sort order, either 'asc' or 'desc'.
   */
  "sortOrder"?: model.SortOrder;
  /**
   * The field to sort by. If no value is specified, _timeCreated_ is the default.
   *
   */
  "sortBy"?: model.JavaDownloadReportSortBy;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}