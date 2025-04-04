/**
 *
 *
 * OpenAPI spec version: 20210216
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
 * @example Click {@link https://docs.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/recovery/ListProtectionPolicies.ts.html |here} to see how to use ListProtectionPoliciesRequest.
 */
export interface ListProtectionPoliciesRequest extends common.BaseRequest {
  /**
   * The compartment OCID.
   */
  "compartmentId": string;
  /**
   * A filter to return only resources their lifecycleState matches the given lifecycleState.
   */
  "lifecycleState"?: model.LifecycleState;
  /**
   * A filter to return only resources that match the entire 'displayname' given.
   */
  "displayName"?: string;
  /**
   * The protection policy OCID.
   */
  "protectionPolicyId"?: string;
  /**
   * A filter to return only the policies that match the owner as 'Customer' or 'Oracle'.
   */
  "owner"?: ListProtectionPoliciesRequest.Owner;
  /**
   * The maximum number of items to return. Specify a value greater than 4.
   */
  "limit"?: number;
  /**
   * The page token representing the page at which to start retrieving results. This is usually retrieved from a previous list call.
   */
  "page"?: string;
  /**
   * The sort order to use, either ascending (ASC) or descending (DESC).
   * Allowed values are:
   *   - ASC
   *   - DESC
   */
  "sortOrder"?: model.SortOrder;
  /**
   * The field to sort by. You can provide one sort order (sortOrder). Default order for TIMECREATED is descending. Default order for DISPLAYNAME is ascending. If you do not specify a value, then TIMECREATED is used as the default sort order.
   * Allowed values are:
   *   - TIMECREATED
   *   - DISPLAYNAME
   *
   */
  "sortBy"?: ListProtectionPoliciesRequest.SortBy;
  /**
   * Unique identifier for the request.
   */
  "opcRequestId"?: string;
}

export namespace ListProtectionPoliciesRequest {
  export enum Owner {
    Oracle = "oracle",
    Customer = "customer"
  }

  export enum SortBy {
    TimeCreated = "timeCreated",
    DisplayName = "displayName"
  }
}
