/**
 *
 *
 * OpenAPI spec version: 20160918
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
 * @example Click {@link https://docs.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/core/ListAppCatalogListings.ts.html |here} to see how to use ListAppCatalogListingsRequest.
 */
export interface ListAppCatalogListingsRequest extends common.BaseRequest {
  /**
 * For list pagination. The maximum number of results per page, or items to return in a paginated
* \"List\" call. For important details about how pagination works, see
* [List Pagination](https://docs.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
* <p>
Example: {@code 50}
* 
 */
  "limit"?: number;
  /**
   * For list pagination. The value of the {@code opc-next-page} response header from the previous \"List\"
   * call. For important details about how pagination works, see
   * [List Pagination](https://docs.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
   *
   */
  "page"?: string;
  /**
   * The sort order to use, either ascending ({@code ASC}) or descending ({@code DESC}). The DISPLAYNAME sort order
   * is case sensitive.
   *
   */
  "sortOrder"?: ListAppCatalogListingsRequest.SortOrder;
  /**
   * A filter to return only the publisher that matches the given publisher name exactly.
   *
   */
  "publisherName"?: string;
  /**
   * A filter to return only publishers that match the given publisher type exactly. Valid types are OCI, ORACLE, TRUSTED, STANDARD.
   *
   */
  "publisherType"?: string;
  /**
   * A filter to return only resources that match the given display name exactly.
   *
   */
  "displayName"?: string;
}

export namespace ListAppCatalogListingsRequest {
  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }
}
