/**
 *
 *
 * OpenAPI spec version: 20200601
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
 * @example Click {@link https://docs.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/loganalytics/ListStorageWorkRequests.ts.html |here} to see how to use ListStorageWorkRequestsRequest.
 */
export interface ListStorageWorkRequestsRequest extends common.BaseRequest {
  /**
   * The ID of the compartment in which to list resources.
   */
  "compartmentId": string;
  /**
   * The Logging Analytics namespace used for the request.
   *
   */
  "namespaceName": string;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * The page token representing the page at which to start retrieving results. This is usually retrieved from a previous list call.
   */
  "page"?: string;
  /**
   * The sort order to use, either ascending ({@code ASC}) or descending ({@code DESC}).
   *
   */
  "sortOrder"?: ListStorageWorkRequestsRequest.SortOrder;
  /**
   * This is the query parameter of which field to sort by. Only one sort order may be provided. Default order for timeAccepted
   * is descending. If no value is specified timeAccepted is default.
   *
   */
  "sortBy"?: ListStorageWorkRequestsRequest.SortBy;
  /**
   * The is the work request type query parameter
   */
  "operationType"?: model.StorageOperationType;
  /**
   * The is the work request status query parameter
   */
  "status"?: model.WorkRequestStatus;
  /**
   * The is the query parameter of when the processing of work request was started
   */
  "timeStarted"?: Date;
  /**
   * The is the query parameter of when the processing of work request was finished
   */
  "timeFinished"?: Date;
  /**
   * This is the query parameter of purge policy name
   */
  "policyName"?: string;
  /**
   * This is the query parameter of purge policy ID
   */
  "policyId"?: string;
}

export namespace ListStorageWorkRequestsRequest {
  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }

  export enum SortBy {
    TimeAccepted = "timeAccepted",
    TimeExpires = "timeExpires",
    TimeFinished = "timeFinished"
  }
}
