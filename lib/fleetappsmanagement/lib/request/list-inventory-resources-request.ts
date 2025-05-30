/**
 *
 *
 * OpenAPI spec version: 20250228
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
 * @example Click {@link https://docs.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/fleetappsmanagement/ListInventoryResources.ts.html |here} to see how to use ListInventoryResourcesRequest.
 */
export interface ListInventoryResourcesRequest extends common.BaseRequest {
  /**
   * A filter to return only resources whose base Compartment ID(TenancyId) matches the given base Compartment ID.
   */
  "compartmentId": string;
  /**
   * A filter to return only resources whose resource Compartment ID matches the given resource Compartment ID.
   */
  "resourceCompartmentId": string;
  /**
   * A filter to return only resources their lifecycleState matches the given lifecycleState.
   */
  "lifecycleState"?: string;
  /**
   * A filter to return only resources that match the entire display name given.
   */
  "displayName"?: string;
  /**
   * Resource Region
   */
  "resourceRegion"?: string;
  /**
   * A list of tag filters to apply.  Only resources with a defined tag matching the value will be returned.
   * Each item in the list has the format \"{namespace}.{tagName}={value}\".  All inputs are case-insensitive.
   * Multiple values for the same key (i.e. same namespace and tag name) are interpreted as \"OR\".
   * Values for different keys (i.e. different namespaces, different tag names, or both) are interpreted as \"AND\".
   * Example: Identification.Development=Yes
   *
   */
  "definedTagEquals"?: Array<string>;
  /**
   * A list of tag filters to apply.  Only resources with a freeform tag matching the value will be returned.
   * The key for each tag is \"{tagName}.{value}\".  All inputs are case-insensitive.
   * Multiple values for the same tag name are interpreted as \"OR\".  Values for different tag names are interpreted as \"AND\".
   *
   */
  "freeformTagEquals"?: Array<string>;
  /**
   * A list of inventory properties filters to apply.
   * The key for each inventory property and value for each resource type is \"{resourceType}.{inventoryProperty}={value}\".
   * Example: Instance.displayName=TEST_INSTANCE
   *
   */
  "inventoryProperties"?: Array<string>;
  /**
   * Fetch resources matching ANY or ALL criteria passed as params in \"tags\" and \"inventoryProperties\".
   * Example: matchingCriteria=ANY
   *
   */
  "matchingCriteria"?: string;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * A token representing the position at which to start retrieving results. This must come from the {@code opc-next-page} header field of a previous response.
   */
  "page"?: string;
  /**
   * The sort order to use, either 'ASC' or 'DESC'.
   */
  "sortOrder"?: model.SortOrder;
  /**
   * The field to sort by. Only one sort order may be provided. Default order for timeCreated is descending. Default order for displayName is ascending.
   *
   *
   */
  "sortBy"?: model.InventoryResourceSortBy;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}
