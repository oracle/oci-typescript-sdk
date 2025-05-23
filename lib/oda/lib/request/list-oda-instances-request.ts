/**
 *
 *
 * OpenAPI spec version: 20190506
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
 * @example Click {@link https://docs.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/oda/ListOdaInstances.ts.html |here} to see how to use ListOdaInstancesRequest.
 */
export interface ListOdaInstancesRequest extends common.BaseRequest {
  /**
   * List the Digital Assistant instances that belong to this compartment.
   */
  "compartmentId": string;
  /**
 * List only the information for the Digital Assistant instance with this user-friendly name. These names don't have to be unique and may change.
* <p>
Example: {@code My new resource}
* 
 */
  "displayName"?: string;
  /**
   * List only the Digital Assistant instances that are in this lifecycle state.
   */
  "lifecycleState"?: ListOdaInstancesRequest.LifecycleState;
  /**
   * The maximum number of items to return per page.
   */
  "limit"?: number;
  /**
 * The page at which to start retrieving results.
* <p>
You get this value from the {@code opc-next-page} header in a previous list request.
* To retireve the first page, omit this query parameter.
* <p>
Example: {@code MToxMA==}
* 
 */
  "page"?: string;
  /**
   * Sort the results in this order, use either {@code ASC} (ascending) or {@code DESC} (descending).
   */
  "sortOrder"?: ListOdaInstancesRequest.SortOrder;
  /**
 * Sort on this field. You can specify one sort order only. The default sort field is {@code TIMECREATED}.
* <p>
The default sort order for {@code TIMECREATED} is descending, and the default sort order for {@code DISPLAYNAME} is ascending.
* 
 */
  "sortBy"?: ListOdaInstancesRequest.SortBy;
  /**
   * The client request ID for tracing. This value is included in the opc-request-id response header.
   */
  "opcRequestId"?: string;
}

export namespace ListOdaInstancesRequest {
  export enum LifecycleState {
    Creating = "CREATING",
    Updating = "UPDATING",
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }

  export enum SortBy {
    Timecreated = "TIMECREATED",
    Displayname = "DISPLAYNAME"
  }
}
