/**
 *
 *
 * OpenAPI spec version: 20250228
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
 * @example Click {@link https://docs.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/fleetappsmanagement/ListProvisions.ts.html |here} to see how to use ListProvisionsRequest.
 */
export interface ListProvisionsRequest extends common.BaseRequest {
  /**
   * The ID of the compartment in which to list resources.
   * Empty only if the resource OCID query param is not specified.
   *
   */
  "compartmentId"?: string;
  /**
   * A filter to return only resources that match the given lifecycle state. The
   * state value is case-insensitive.
   *
   */
  "lifecycleState"?: string;
  /**
   * A filter to return only resources that match the entire display name given.
   */
  "displayName"?: string;
  /**
   * Unique identifier or OCID for listing a single provision by id.
   * Either compartmentId or id must be provided.
   *
   */
  "id"?: string;
  /**
   * unique Fleet identifier
   */
  "fleetId"?: string;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * A token representing the position at which to start retrieving results. This must come from the {@code opc-next-page} header field of a previous response.
   */
  "page"?: string;
  /**
   * The sort order to use, either 'ASC' or 'DESC'.
   */
  "sortOrder"?: model.SortOrder;
  /**
   * The field to sort by. Only one sort order may be provided. Default order for timeCreated is descending. Default order for displayName is ascending.
   *
   */
  "sortBy"?: model.SortBy;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}
