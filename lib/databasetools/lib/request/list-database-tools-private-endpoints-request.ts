/**
 *
 *
 * OpenAPI spec version: 20201005
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
 * @example Click {@link https://docs.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/databasetools/ListDatabaseToolsPrivateEndpoints.ts.html |here} to see how to use ListDatabaseToolsPrivateEndpointsRequest.
 */
export interface ListDatabaseToolsPrivateEndpointsRequest extends common.BaseRequest {
  /**
   * The ID of the compartment in which to list resources.
   */
  "compartmentId": string;
  /**
   * A filter to return only resources their {@code subnetId} matches the specified {@code subnetId}.
   */
  "subnetId"?: string;
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
  "sortOrder"?: model.SortOrder;
  /**
   * The field to sort by. Only one sort order may be provided. Default order for timeCreated is descending. Default order for displayName is ascending. If no value is specified timeCreated is default.
   *
   */
  "sortBy"?: ListDatabaseToolsPrivateEndpointsRequest.SortBy;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
  /**
   * A filter to return only resources their {@code endpointServiceId} matches the specified {@code endpointServiceId}.
   */
  "endpointServiceId"?: string;
  /**
   * A filter to return only resources their {@code lifecycleState} matches the specified {@code lifecycleState}.
   */
  "lifecycleState"?: model.LifecycleState;
  /**
   * A filter to return only resources that match the entire specified display name.
   */
  "displayName"?: string;
}

export namespace ListDatabaseToolsPrivateEndpointsRequest {
  export enum SortBy {
    TimeCreated = "timeCreated",
    DisplayName = "displayName"
  }
}
