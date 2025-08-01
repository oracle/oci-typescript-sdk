/**
 *
 *
 * OpenAPI spec version: 20210201
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
 * @example Click {@link https://docs.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/apmconfig/ListConfigs.ts.html |here} to see how to use ListConfigsRequest.
 */
export interface ListConfigsRequest extends common.BaseRequest {
  /**
   * The APM Domain ID the request is intended for.
   *
   */
  "apmDomainId": string;
  /**
   * Unique identifier for the request.
   * If you need to contact Oracle about a particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
  /**
   * A filter to match configuration items of a given type.
   * Supported values are SPAN_FILTER, METRIC_GROUP, APDEX, AGENT and MACS_APM_EXTENSION.
   *
   */
  "configType"?: string;
  /**
   * A filter to return resources that match the given display name.
   */
  "displayName"?: string;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * The maximum number of results per page, or items to return in a paginated \"List\" call. For information on
   * how pagination works, see [List Pagination](https://docs.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
   * Example: {@code 50}
   *
   */
  "page"?: string;
  /**
   * The sort order to use, either ascending ({@code ASC}) or descending ({@code DESC}). The displayName sort order
   * is case-sensitive.
   *
   */
  "sortOrder"?: model.SortOrders;
  /**
   * The field to sort by. You can provide one \"sortBy\" value. The default order for displayName, timeCreated
   * and timeUpdated is ascending. The displayName sort by is case-sensitive.
   *
   */
  "sortBy"?: ListConfigsRequest.SortBy;
  /**
   * A filter to return OPTIONS resources that match the given group.
   */
  "optionsGroup"?: string;
  /**
   * A list of tag filters to apply.  Only resources with a defined tag matching the value will be returned.
   * Each item in the list has the format \"{namespace}.{tagName}.{value}\".  All inputs are case-insensitive.
   * Multiple values for the same key (i.e. same namespace and tag name) are interpreted as \"OR\".
   * Values for different keys (i.e. different namespaces, different tag names, or both) are interpreted as \"AND\".
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
   * A list of tag existence filters to apply.  Only resources for which the specified defined tags exist will be returned.
   * Each item in the list has the format \"{namespace}.{tagName}.true\" (for checking existence of a defined tag)
   * or \"{namespace}.true\".  All inputs are case-insensitive.
   * Currently, only existence (\"true\" at the end) is supported. Absence (\"false\" at the end) is not supported.
   * Multiple values for the same key (i.e. same namespace and tag name) are interpreted as \"OR\".
   * Values for different keys (i.e. different namespaces, different tag names, or both) are interpreted as \"AND\".
   *
   */
  "definedTagExists"?: Array<string>;
  /**
   * A list of tag existence filters to apply.  Only resources for which the specified freeform tags exist the value will be returned.
   * The key for each tag is \"{tagName}.true\".  All inputs are case-insensitive.
   * Currently, only existence (\"true\" at the end) is supported. Absence (\"false\" at the end) is not supported.
   * Multiple values for different tag names are interpreted as \"AND\".
   *
   */
  "freeformTagExists"?: Array<string>;
}

export namespace ListConfigsRequest {
  export enum SortBy {
    DisplayName = "displayName",
    TimeCreated = "timeCreated",
    TimeUpdated = "timeUpdated"
  }
}
