/**
 *
 *
 * OpenAPI spec version: 20210610
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
 * @example Click {@link https://docs.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/jms/ListJavaMigrationAnalysisResults.ts.html |here} to see how to use ListJavaMigrationAnalysisResultsRequest.
 */
export interface ListJavaMigrationAnalysisResultsRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the Fleet.
   */
  "fleetId": string;
  /**
   * The Fleet-unique identifier of the related managed instance.
   */
  "managedInstanceId"?: string;
  /**
   * The host [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the managed instance.
   */
  "hostName"?: string;
  /**
   * The name of the application.
   */
  "applicationName"?: string;
  /**
   * The start of the time period during which resources are searched (formatted according to [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339)).
   */
  "timeStart"?: Date;
  /**
   * The end of the time period during which resources are searched (formatted according to [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339)).
   */
  "timeEnd"?: Date;
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
   * The field that sorts the Java migration analysis results. Only one sort order can be provided.
   * The default order for _timeCreated_, _managedInstanceId_ and _workRequestId_ is **descending**.
   * If no value is specified, then _timeCreated_ is default.
   *
   */
  "sortBy"?: model.JavaMigrationAnalysisResultSortBy;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}
