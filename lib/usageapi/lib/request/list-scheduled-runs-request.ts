/**
 *
 *
 * OpenAPI spec version: 20200107
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
 * @example Click {@link https://docs.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/usageapi/ListScheduledRuns.ts.html |here} to see how to use ListScheduledRunsRequest.
 */
export interface ListScheduledRunsRequest extends common.BaseRequest {
  /**
   * The schedule unique ID.
   */
  "scheduleId": string;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a
   * particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
  /**
   * The page token representing the page at which to start retrieving results.
   * This is usually retrieved from a previous list call.
   *
   */
  "page"?: string;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * The field to sort by. If not specified, the default is timeCreated.
   *
   */
  "sortBy"?: ListScheduledRunsRequest.SortBy;
  /**
   * The sort order to use, whether 'asc' or 'desc'.
   */
  "sortOrder"?: ListScheduledRunsRequest.SortOrder;
}

export namespace ListScheduledRunsRequest {
  export enum SortBy {
    TimeCreated = "timeCreated"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }
}
