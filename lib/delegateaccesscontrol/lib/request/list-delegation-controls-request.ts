/**
 *
 *
 * OpenAPI spec version: 20230801
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/delegateaccesscontrol/ListDelegationControls.ts.html |here} to see how to use ListDelegationControlsRequest.
 */
export interface ListDelegationControlsRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId": string;
  /**
   * A filter to return only Delegation Control resources whose lifecycleState matches the given Delegation Control lifecycle state.
   */
  "lifecycleState"?: string;
  /**
   * A filter to return Delegation Control resources that match the given display name.
   */
  "displayName"?: string;
  /**
   * A filter to return only resources that match the given resource type.
   */
  "resourceType"?: model.DelegationControlResourceType;
  /**
   * A filter to return Delegation Control resources that match the given resource ID.
   */
  "resourceId"?: string;
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
   * The field to sort by. Only one sort order may be provided. Default order for timeCreated is descending. Default order for displayName is ascending. If no value is specified, default is timeCreated.
   *
   */
  "sortBy"?: ListDelegationControlsRequest.SortBy;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}

export namespace ListDelegationControlsRequest {
  export enum SortBy {
    TimeCreated = "timeCreated",
    DisplayName = "displayName"
  }
}