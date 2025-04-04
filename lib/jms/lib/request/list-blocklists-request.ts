/**
 *
 *
 * OpenAPI spec version: 20210610
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
 * @example Click {@link https://docs.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/jms/ListBlocklists.ts.html |here} to see how to use ListBlocklistsRequest.
 */
export interface ListBlocklistsRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the Fleet.
   */
  "fleetId": string;
  /**
   * The operation type.
   */
  "operation"?: model.OperationType;
  /**
   * The Fleet-unique identifier of the related managed instance.
   */
  "managedInstanceId"?: string;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * The page token representing the page at which to start retrieving results. The token is usually retrieved from a previous list call.
   */
  "page"?: string;
  /**
   * The sort order, either 'asc' or 'desc'.
   */
  "sortOrder"?: model.SortOrder;
  /**
   * The field used to sort blocklist records. Only one sort order may be provided.
   * Default order for _operation_ is **ascending**.
   * If no value is specified, _operation_ is default.
   *
   */
  "sortBy"?: model.BlocklistSortBy;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}
