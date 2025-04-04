/**
 *
 *
 * OpenAPI spec version: 20180115
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
 * @example Click {@link https://docs.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/dns/ListSteeringPolicies.ts.html |here} to see how to use ListSteeringPoliciesRequest.
 */
export interface ListSteeringPoliciesRequest extends common.BaseRequest {
  /**
   * The OCID of the compartment the resource belongs to.
   */
  "compartmentId": string;
  /**
   * Unique Oracle-assigned identifier for the request. If you need
   * to contact Oracle about a particular request, please provide
   * the request ID.
   *
   */
  "opcRequestId"?: string;
  /**
   * The maximum number of items to return in a page of the collection.
   *
   */
  "limit"?: number;
  /**
   * The value of the {@code opc-next-page} response header from the previous \"List\" call.
   *
   */
  "page"?: string;
  /**
   * The OCID of a resource.
   */
  "id"?: string;
  /**
   * The displayName of a resource.
   */
  "displayName"?: string;
  /**
   * The partial displayName of a resource. Will match any resource whose name
   * (case-insensitive) contains the provided value.
   *
   */
  "displayNameContains"?: string;
  /**
   * Search by health check monitor OCID.
   * Will match any resource whose health check monitor ID matches the provided value.
   *
   */
  "healthCheckMonitorId"?: string;
  /**
   * An [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) timestamp that states
   * all returned resources were created on or after the indicated time.
   *
   */
  "timeCreatedGreaterThanOrEqualTo"?: Date;
  /**
   * An [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) timestamp that states
   * all returned resources were created before the indicated time.
   *
   */
  "timeCreatedLessThan"?: Date;
  /**
   * Search by steering template type.
   * Will match any resource whose template type matches the provided value.
   *
   */
  "template"?: string;
  /**
   * The state of a resource.
   */
  "lifecycleState"?: string;
  /**
   * The field by which to sort steering policies. If unspecified, defaults to {@code timeCreated}.
   */
  "sortBy"?: ListSteeringPoliciesRequest.SortBy;
  /**
   * The order to sort the resources.
   *
   */
  "sortOrder"?: model.SortOrder;
  /**
   * Specifies to operate only on resources that have a matching DNS scope.
   *
   */
  "scope"?: model.Scope;
}

export namespace ListSteeringPoliciesRequest {
  export enum SortBy {
    DisplayName = "displayName",
    TimeCreated = "timeCreated",
    Template = "template"
  }
}
