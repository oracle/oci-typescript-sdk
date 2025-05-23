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
 * @example Click {@link https://docs.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/database/ListExternalDatabaseConnectors.ts.html |here} to see how to use ListExternalDatabaseConnectorsRequest.
 */
export interface ListExternalDatabaseConnectorsRequest extends common.BaseRequest {
  /**
   * The compartment [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm).
   */
  "compartmentId": string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the external database whose connectors will be listed.
   *
   */
  "externalDatabaseId": string;
  /**
   * Unique identifier for the request.
   *
   */
  "opcRequestId"?: string;
  /**
   * The maximum number of items to return per page.
   */
  "limit"?: number;
  /**
   * The pagination token to continue listing from.
   */
  "page"?: string;
  /**
   * The field to sort by. You can provide one sort order ({@code sortOrder}).
   * Default order for TIMECREATED is descending.
   * Default order for DISPLAYNAME is ascending.
   * The DISPLAYNAME sort order is case sensitive.
   *
   */
  "sortBy"?: ListExternalDatabaseConnectorsRequest.SortBy;
  /**
   * The sort order to use, either ascending ({@code ASC}) or descending ({@code DESC}).
   */
  "sortOrder"?: ListExternalDatabaseConnectorsRequest.SortOrder;
  /**
   * A filter to return only resources that match the specified lifecycle state.
   */
  "lifecycleState"?: string;
  /**
   * A filter to return only resources that match the entire display name given. The match is not case sensitive.
   */
  "displayName"?: string;
}

export namespace ListExternalDatabaseConnectorsRequest {
  export enum SortBy {
    Displayname = "DISPLAYNAME",
    Timecreated = "TIMECREATED"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }
}
