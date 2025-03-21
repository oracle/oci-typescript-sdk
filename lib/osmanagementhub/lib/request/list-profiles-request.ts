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
 * @example Click {@link https://docs.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/osmanagementhub/ListProfiles.ts.html |here} to see how to use ListProfilesRequest.
 */
export interface ListProfilesRequest extends common.BaseRequest {
  /**
   * The OCID of the compartment that contains the resources to list. This filter returns only resources contained within the specified compartment.
   */
  "compartmentId"?: string;
  /**
   * A filter to return resources that match the given display names.
   */
  "displayName"?: Array<string>;
  /**
   * A filter to return resources that may partially match the given display name.
   */
  "displayNameContains"?: string;
  /**
   * A filter to return registration profiles that match the given profile type.
   */
  "profileType"?: Array<model.ProfileType>;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the registration profile. A filter used to return the specified profile.
   */
  "profileId"?: string;
  /**
   * A filter to return only resources that match the given operating system family.
   */
  "osFamily"?: model.OsFamily;
  /**
   * A filter to return only profiles that match the given archType.
   */
  "archType"?: model.ArchType;
  /**
   * A filter to return profiles that match the given instance type.
   */
  "registrationType"?: Array<model.Profile.RegistrationType>;
  /**
   * A filter to return only default profiles.
   *
   */
  "isDefaultProfile"?: boolean;
  /**
   * A filter to return only service-provided profiles.
   *
   */
  "isServiceProvidedProfile"?: boolean;
  /**
   * A filter to return resources that are associated with the specified management
   * station [OCIDs](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm).
   *
   */
  "managementStation"?: Array<string>;
  /**
   * A filter to return resources that aren't associated with the specified management
   * station [OCIDs](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm).
   *
   */
  "managementStationNotEqualTo"?: Array<string>;
  /**
   * The version of the registration profile.
   */
  "profileVersion"?: string;
  /**
   * A filter to return only resources that match the given vendor name.
   */
  "vendorName"?: model.VendorName;
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
   * A filter to return only registration profiles in the given state.
   */
  "lifecycleState"?: string;
  /**
   * The sort order to use, either 'ASC' or 'DESC'.
   */
  "sortOrder"?: model.SortOrder;
  /**
   * The field to sort by. Only one sort order may be provided.
   * Default order for timeCreated is descending.
   * Default order for displayName is ascending.
   *
   */
  "sortBy"?: ListProfilesRequest.SortBy;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
   */
  "opcRequestId"?: string;
}

export namespace ListProfilesRequest {
  export enum SortBy {
    TimeCreated = "timeCreated",
    DisplayName = "displayName"
  }
}
