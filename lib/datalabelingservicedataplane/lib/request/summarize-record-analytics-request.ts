/**
 *
 *
 * OpenAPI spec version: 20211001
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
 * @example Click {@link https://docs.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/datalabelingservicedataplane/SummarizeRecordAnalytics.ts.html |here} to see how to use SummarizeRecordAnalyticsRequest.
 */
export interface SummarizeRecordAnalyticsRequest extends common.BaseRequest {
  /**
   * The ID of the compartment in which to list resources.
   */
  "compartmentId": string;
  /**
   * Filter the results by the OCID of the dataset.
   */
  "datasetId": string;
  /**
   * A filter to return only resources whose lifecycleState matches the given lifecycleState.
   */
  "lifecycleState"?: string;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * The page token representing the page at which to start retrieving results. This is usually retrieved from a previous list call.
   */
  "page"?: string;
  /**
   * The sort order to use, either 'asc' or 'desc'.
   */
  "sortOrder"?: model.SortOrders;
  /**
   * The field to group by. If no value is specified isLabeled is used by default.
   *
   */
  "recordGroupBy"?: SummarizeRecordAnalyticsRequest.RecordGroupBy;
  /**
   * The field to sort by. Only one sort order may be provided. The default order is descending. If no value is specified, count is used by default.
   */
  "sortBy"?: SummarizeRecordAnalyticsRequest.SortBy;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}

export namespace SummarizeRecordAnalyticsRequest {
  export enum RecordGroupBy {
    IsLabeled = "isLabeled",
    AnnotationLabelContains = "annotationLabelContains"
  }

  export enum SortBy {
    Count = "count",
    IsLabeled = "isLabeled"
  }
}
