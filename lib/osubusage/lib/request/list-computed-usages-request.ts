/**
 *
 *
 * OpenAPI spec version: 20210501
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
 * @example Click {@link https://docs.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/osubusage/ListComputedUsages.ts.html |here} to see how to use ListComputedUsagesRequest.
 */
export interface ListComputedUsagesRequest extends common.BaseRequest {
  /**
   * The OCID of the root compartment.
   */
  "compartmentId": string;
  /**
   * Subscription Id is an identifier associated to the service used for filter the Computed Usage in SPM.
   *
   */
  "subscriptionId": string;
  /**
   * Initial date to filter Computed Usage data in SPM. In the case of non aggregated data the time period between of fromDate and toDate , expressed in RFC 3339 timestamp format.
   *
   */
  "timeFrom": Date;
  /**
   * Final date to filter Computed Usage data in SPM, expressed in RFC 3339 timestamp format.
   *
   */
  "timeTo": Date;
  /**
   * Product part number for subscribed service line, called parent product.
   *
   */
  "parentProduct"?: string;
  /**
   * Product part number for Computed Usage .
   *
   */
  "computedProduct"?: string;
  /**
 * The maximum number of items to return in a paginated \"List\" call.
* <p>
Example: {@code 500}
* 
 */
  "limit"?: number;
  /**
   * The value of the {@code opc-next-page} response header from the previous \"List\" call.
   *
   */
  "page"?: string;
  /**
   * The sort order to use, either ascending ({@code ASC}) or descending ({@code DESC}).
   *
   */
  "sortOrder"?: ListComputedUsagesRequest.SortOrder;
  /**
   * The field to sort by. You can provide one sort order ({@code sortOrder}).
   *
   */
  "sortBy"?: ListComputedUsagesRequest.SortBy;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
  /**
   * The OCI home region name in case home region is not us-ashburn-1 (IAD), e.g. ap-mumbai-1, us-phoenix-1 etc.
   *
   */
  "xOneOriginRegion"?: string;
}

export namespace ListComputedUsagesRequest {
  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }

  export enum SortBy {
    TimeCreated = "timeCreated",
    TimeOfArrival = "timeOfArrival",
    TimeMeteredOn = "timeMeteredOn"
  }
}
