/**
 *
 *
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
 * @example Click {@link https://docs.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/datasafe/ListSchemas.ts.html |here} to see how to use ListSchemasRequest.
 */
export interface ListSchemasRequest extends common.BaseRequest {
  /**
   * The OCID of the Data Safe target database.
   */
  "targetDatabaseId": string;
  /**
   * Unique identifier for the request.
   */
  "opcRequestId"?: string;
  /**
   * For list pagination. The maximum number of items to return per page in a paginated \"List\" call. For details about how pagination works, see [List Pagination](https://docs.oracle.com/iaas/en-us/iaas/Content/API/Concepts/usingapi.htm#nine).
   */
  "limit"?: number;
  /**
   * For list pagination. The page token representing the page at which to start retrieving results. It is usually retrieved from a previous \"List\" call. For details about how pagination works, see [List Pagination](https://docs.oracle.com/iaas/en-us/iaas/Content/API/Concepts/usingapi.htm#nine).
   */
  "page"?: string;
  /**
   * A filter to return only items related to specific schema name.
   */
  "schemaName"?: Array<string>;
  /**
   * The sort order to use, either ascending (ASC) or descending (DESC).
   */
  "sortOrder"?: ListSchemasRequest.SortOrder;
  /**
   * The field used for sorting. Only one sorting order (sortOrder) can be specified.
   *
   */
  "sortBy"?: ListSchemasRequest.SortBy;
  /**
   * A filter to return only items related to specific type of schema.
   */
  "isOracleMaintained"?: boolean;
  /**
   * A filter to return only items if schema name contains a specific string.
   */
  "schemaNameContains"?: string;
}

export namespace ListSchemasRequest {
  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }

  export enum SortBy {
    Schemaname = "SCHEMANAME"
  }
}
