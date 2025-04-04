/**
 *
 *
 * OpenAPI spec version: 20220901
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
 * @example Click {@link https://docs.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/osmanagementhub/ListManagedInstanceInstalledPackages.ts.html |here} to see how to use ListManagedInstanceInstalledPackagesRequest.
 */
export interface ListManagedInstanceInstalledPackagesRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the managed instance.
   */
  "managedInstanceId": string;
  /**
   * A filter to return resources that match the given display names.
   */
  "displayName"?: Array<string>;
  /**
   * A filter to return resources that may partially match the given display name.
   */
  "displayNameContains"?: string;
  /**
 * The install date after which to list all packages, in ISO 8601 format
* <p>
Example: 2017-07-14T02:40:00.000Z
* 
 */
  "timeInstallDateStart"?: Date;
  /**
 * A filter to return only packages that were installed on or before the date provided, in ISO 8601 format.
* <p>
Example: 2017-07-14T02:40:00.000Z
* 
 */
  "timeInstallDateEnd"?: Date;
  /**
   * The OCID of the compartment that contains the resources to list. This filter returns only resources contained within the specified compartment.
   */
  "compartmentId"?: string;
  /**
 * For list pagination. The maximum number of results per page, or items to return in a paginated \"List\" call.
* For important details about how pagination works, see [List Pagination](https://docs.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
* <p>
Example: {@code 50}
* 
 */
  "limit"?: number;
  /**
 * For list pagination. The value of the {@code opc-next-page} response header from the previous \"List\" call.
* For important details about how pagination works, see [List Pagination](https://docs.oracle.com/iaas/Content/API/Concepts/usingapi.htm#nine).
* <p>
Example: {@code 3}
* 
 */
  "page"?: string;
  /**
   * The sort order to use, either 'ASC' or 'DESC'.
   */
  "sortOrder"?: model.SortOrder;
  /**
   * The field to sort by. Only one sort order may be provided. Default order for timeInstalled is descending. Default order for displayName is ascending.
   *
   */
  "sortBy"?: ListManagedInstanceInstalledPackagesRequest.SortBy;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
   */
  "opcRequestId"?: string;
}

export namespace ListManagedInstanceInstalledPackagesRequest {
  export enum SortBy {
    TimeInstalled = "timeInstalled",
    TimeCreated = "timeCreated",
    DisplayName = "displayName"
  }
}
