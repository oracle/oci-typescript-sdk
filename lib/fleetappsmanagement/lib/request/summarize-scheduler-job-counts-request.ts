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
 * @example Click {@link https://docs.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/fleetappsmanagement/SummarizeSchedulerJobCounts.ts.html |here} to see how to use SummarizeSchedulerJobCountsRequest.
 */
export interface SummarizeSchedulerJobCountsRequest extends common.BaseRequest {
  /**
   * The ID of the compartment in which to list resources.
   * Empty only if the resource OCID query param is not specified.
   *
   */
  "compartmentId"?: string;
  /**
   * If set to true, resources will be returned for not only the provided compartment, but all compartments which
   * descend from it. Which resources are returned and their field contents depends on the value of accessLevel.
   *
   */
  "compartmentIdInSubtree"?: boolean;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
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
}
