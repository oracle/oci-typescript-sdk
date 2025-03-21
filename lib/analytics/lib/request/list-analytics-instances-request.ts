/**
 *
 *
 * OpenAPI spec version: 20190331
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
 * @example Click {@link https://docs.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/analytics/ListAnalyticsInstances.ts.html |here} to see how to use ListAnalyticsInstancesRequest.
 */
export interface ListAnalyticsInstancesRequest extends common.BaseRequest {
  /**
   * The OCID of the compartment.
   *
   */
  "compartmentId": string;
  /**
   * Unique identifier for the request.
   * If you need to contact Oracle about a particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
  /**
   * A filter to return only resources that match the given name exactly.
   *
   */
  "name"?: string;
  /**
   * A filter to only return resources matching the capacity type enum. Values are
   * case-insensitive.
   *
   */
  "capacityType"?: model.CapacityType;
  /**
   * A filter to only return resources matching the feature set. Values are
   * case-insensitive.
   *
   */
  "featureSet"?: model.FeatureSet;
  /**
   * A filter to only return resources matching the lifecycle state. The state
   * value is case-insensitive.
   *
   */
  "lifecycleState"?: model.AnalyticsInstanceLifecycleState;
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
   * The field to sort by (one column only). Default sort order is
   * ascending exception of {@code timeCreated} column (descending).
   *
   */
  "sortBy"?: model.SortBy;
  /**
   * The sort order to use, either ascending ({@code ASC}) or descending ({@code DESC}).
   *
   */
  "sortOrder"?: model.SortOrder;
}
