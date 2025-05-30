/**
 *
 *
 * OpenAPI spec version: 20200606
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
 * @example Click {@link https://docs.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/optimizer/ListRecommendations.ts.html |here} to see how to use ListRecommendationsRequest.
 */
export interface ListRecommendationsRequest extends common.BaseRequest {
  /**
   * The OCID of the compartment.
   */
  "compartmentId": string;
  /**
 * When set to true, the hierarchy of compartments is traversed and all compartments and subcompartments in the tenancy are returned depending on the the setting of {@code accessLevel}.
* <p>
Can only be set to true when performing ListCompartments on the tenancy (root compartment).
* 
 */
  "compartmentIdInSubtree": boolean;
  /**
   * The unique OCID associated with the category.
   */
  "categoryId"?: string;
  /**
   * Optional. A filter that returns results that match the category name specified.
   */
  "categoryName"?: string;
  /**
 * A list of child tenancies for which the respective data will be returned. Please note that 
* the parent tenancy id can also be included in this list. For example, if there is a parent P with two
* children A and B, to return results of only parent P and child A, this list should be populated with 
* tenancy id of parent P and child A. 
* <p>
If this list contains a tenancy id that isn't part of the organization of parent P, the request will 
* fail. That is, let's say there is an organization with parent P with children A and B, and also one 
* other tenant T that isn't part of the organization. If T is included in the list of 
* childTenancyIds, the request will fail.
* <p>
It is important to note that if you are setting the includeOrganization parameter value as true and 
* also populating the childTenancyIds parameter with a list of child tenancies, the request will fail.
* The childTenancyIds and includeOrganization should be used exclusively.
* <p>
When using this parameter, please make sure to set the compartmentId with the parent tenancy ID.
* 
 */
  "childTenancyIds"?: Array<string>;
  /**
 * When set to true, the data for all child tenancies including the parent is returned. That is, if 
* there is an organization with parent P and children A and B, to return the data for the parent P, child 
* A and child B, this parameter value should be set to true.
* <p>
Please note that this parameter shouldn't be used along with childTenancyIds parameter. If you would like 
* to get results specifically for parent P and only child A, use the childTenancyIds parameter and populate
* the list with tenancy id of P and A.
* <p>
When using this parameter, please make sure to set the compartmentId with the parent tenancy ID.
* 
 */
  "includeOrganization"?: boolean;
  /**
   * Optional. A filter that returns results that match the name specified.
   */
  "name"?: string;
  /**
   * The maximum number of items to return in a paginated \"List\" call.
   */
  "limit"?: number;
  /**
   * The value of the {@code opc-next-page} response header from the previous \"List\" call.
   *
   */
  "page"?: string;
  /**
   * The sort order to use, either ascending ({@code ASC}) or descending ({@code DESC}).
   */
  "sortOrder"?: model.SortOrder;
  /**
   * The field to sort by. You can provide one sort order ({@code sortOrder}). Default order for TIMECREATED is descending. Default order for NAME is ascending. The NAME sort order is case sensitive.
   *
   */
  "sortBy"?: ListRecommendationsRequest.SortBy;
  /**
   * A filter that returns results that match the lifecycle state specified.
   *
   */
  "lifecycleState"?: model.LifecycleState;
  /**
   * A filter that returns recommendations that match the status specified.
   *
   */
  "status"?: model.Status;
  /**
   * Unique Oracle-assigned identifier for the request.
   * If you need to contact Oracle about a particular request, please provide the request ID.
   *
   */
  "opcRequestId"?: string;
}

export namespace ListRecommendationsRequest {
  export enum SortBy {
    Name = "NAME",
    Timecreated = "TIMECREATED"
  }
}
