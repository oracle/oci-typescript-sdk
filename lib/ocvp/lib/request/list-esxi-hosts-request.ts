/**
 *
 *
 * OpenAPI spec version: 20230701
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
 * @example Click {@link https://docs.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/ocvp/ListEsxiHosts.ts.html |here} to see how to use ListEsxiHostsRequest.
 */
export interface ListEsxiHostsRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the SDDC.
   *
   */
  "sddcId"?: string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the SDDC Cluster.
   *
   */
  "clusterId"?: string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the Compute instance.
   *
   */
  "computeInstanceId"?: string;
  /**
   * A filter to return only resources that match the given display name exactly.
   */
  "displayName"?: string;
  /**
   * For list pagination. The maximum number of results per page, or items to return in a paginated
   * \"List\" call. For important details about how pagination works, see
   * [List Pagination](https://docs.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
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
  "sortOrder"?: model.SortOrders;
  /**
   * The field to sort by. You can provide one sort order ({@code sortOrder}). Default order for
   * TIMECREATED is descending. Default order for DISPLAYNAME is ascending. The DISPLAYNAME
   * sort order is case sensitive.
   * <p>
   **Note:** In general, some \"List\" operations (for example, {@code ListInstances}) let you
   * optionally filter by availability domain if the scope of the resource type is within a
   * single availability domain. If you call one of these \"List\" operations without specifying
   * an availability domain, the resources are grouped by availability domain, then sorted.
   *
   */
  "sortBy"?: ListEsxiHostsRequest.SortBy;
  /**
   * Unique identifier for the request. If you need to contact Oracle about a particular
   * request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
  /**
   * The lifecycle state of the resource.
   */
  "lifecycleState"?: model.LifecycleStates;
  /**
   * If this flag/param is set to True, we return only deleted hosts with LeftOver billingCycle.
   *
   */
  "isBillingDonorsOnly"?: boolean;
  /**
   * If this flag/param is set to True, we return only active hosts.
   *
   */
  "isSwapBillingOnly"?: boolean;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment as optional parameter.
   */
  "compartmentId"?: string;
}

export namespace ListEsxiHostsRequest {
  export enum SortBy {
    TimeCreated = "timeCreated",
    DisplayName = "displayName"
  }
}
