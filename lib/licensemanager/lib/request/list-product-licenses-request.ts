/**
 *
 *
 * OpenAPI spec version: 20220430
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
 * @example Click {@link https://docs.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/licensemanager/ListProductLicenses.ts.html |here} to see how to use ListProductLicensesRequest.
 */
export interface ListProductLicensesRequest extends common.BaseRequest {
  /**
   * The compartment [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) used for the license record, product license, and configuration.
   *
   */
  "compartmentId": string;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * A token representing the position at which to start retrieving results. This must come from the {@code opc-next-page} header field of a previous response.
   */
  "page"?: string;
  /**
   * The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a
   * particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
  /**
   * Indicates if the given compartment is the root compartment.
   */
  "isCompartmentIdInSubtree"?: boolean;
  /**
   * The sort order to use, whether {@code ASC} or {@code DESC}.
   */
  "sortOrder"?: ListProductLicensesRequest.SortOrder;
  /**
 * Specifies the attribute with which to sort the rules.
* <p>
Default: {@code totalLicenseUnitsConsumed}
* <p>
* **totalLicenseUnitsConsumed:** Sorts by totalLicenseUnitsConsumed of ProductLicense.
* 
 */
  "sortBy"?: ListProductLicensesRequest.SortBy;
}

export namespace ListProductLicensesRequest {
  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }

  export enum SortBy {
    TotalLicenseUnitsConsumed = "totalLicenseUnitsConsumed"
  }
}
