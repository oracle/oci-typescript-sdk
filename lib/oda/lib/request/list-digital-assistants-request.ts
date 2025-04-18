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
 * @example Click {@link https://docs.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/oda/ListDigitalAssistants.ts.html |here} to see how to use ListDigitalAssistantsRequest.
 */
export interface ListDigitalAssistantsRequest extends common.BaseRequest {
  /**
   * Unique Digital Assistant instance identifier.
   */
  "odaInstanceId": string;
  /**
   * Unique Digital Assistant identifier.
   */
  "id"?: string;
  /**
   * List only Bot resources with this category.
   */
  "category"?: string;
  /**
 * List only Bot resources with this name. Names are unique and may not change.
* <p>
Example: {@code MySkill}
* 
 */
  "name"?: string;
  /**
 * List only Bot resources with this version. Versions are unique and may not change.
* <p>
Example: {@code 1.0}
* 
 */
  "version"?: string;
  /**
 * List only Bot resources with this namespace. Namespaces may not change.
* <p>
Example: {@code MyNamespace}
* 
 */
  "namespace"?: string;
  /**
   * List only Bot resources with this platform version.
   *
   */
  "platformVersion"?: string;
  /**
   * List only the resources that are in this lifecycle state.
   */
  "lifecycleState"?: model.LifecycleState;
  /**
   * List only Bot resources with this lifecycle details.
   *
   */
  "lifecycleDetails"?: string;
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
  "sortOrder"?: ListDigitalAssistantsRequest.SortOrder;
  /**
 * Sort on this field. You can specify one sort order only. The default sort field is {@code timeCreated}.
* <p>
The default sort order for {@code timeCreated} and {@code timeUpdated} is descending.
* For all other sort fields the default sort order is ascending.
* 
 */
  "sortBy"?: ListDigitalAssistantsRequest.SortBy;
  /**
   * The client request ID for tracing. This value is included in the opc-request-id response header.
   */
  "opcRequestId"?: string;
}

export namespace ListDigitalAssistantsRequest {
  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }

  export enum SortBy {
    TimeCreated = "timeCreated",
    TimeUpdated = "timeUpdated",
    Name = "name"
  }
}
