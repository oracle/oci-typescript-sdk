/**
 *
 *
 * OpenAPI spec version: release
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
 * @example Click {@link https://docs.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/keymanagement/ListHsmPartitions.ts.html |here} to see how to use ListHsmPartitionsRequest.
 */
export interface ListHsmPartitionsRequest extends common.BaseRequest {
  /**
   * The OCID of the HSM Cluster. This is a unique identifier assigned to each hsmCluster.
   */
  "hsmClusterId": string;
  /**
   * The maximum number of items to return in a paginated \"List\" call.
   *
   */
  "limit"?: number;
  /**
   * The value of the {@code opc-next-page} response header
   * from the previous \"List\" call.
   *
   */
  "page"?: string;
  /**
   * Unique identifier for the request. If provided, the returned request ID
   * will include this value. Otherwise, a random request ID will be
   * generated by the service.
   *
   */
  "opcRequestId"?: string;
  /**
   * The field to sort by. You can specify only one sort order. The default
   * order for {@code TIMECREATED} is descending. The default order for {@code DISPLAYNAME}
   * is ascending.
   *
   */
  "sortBy"?: ListHsmPartitionsRequest.SortBy;
  /**
   * The sort order to use, either ascending ({@code ASC}) or descending ({@code DESC}).
   *
   */
  "sortOrder"?: ListHsmPartitionsRequest.SortOrder;
  /**
   * A filter that returns only resources that match the specified lifecycle state. The state value is case-insensitive.
   */
  "lifecycleState"?: string;
}

export namespace ListHsmPartitionsRequest {
  export enum SortBy {
    Timecreated = "TIMECREATED",
    Displayname = "DISPLAYNAME"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }
}
