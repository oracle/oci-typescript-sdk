/**
 *
 *
 * OpenAPI spec version: 20211101
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
 * @example Click {@link https://docs.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/mediaservices/ListMediaWorkflowTaskDeclarations.ts.html |here} to see how to use ListMediaWorkflowTaskDeclarationsRequest.
 */
export interface ListMediaWorkflowTaskDeclarationsRequest extends common.BaseRequest {
  /**
   * The ID of the compartment in which to list resources.
   */
  "compartmentId"?: string;
  /**
   * A filter to return only the resources with their system defined, unique name matching the given name.
   */
  "name"?: string;
  /**
   * A filter to select MediaWorkflowTaskDeclaration by version.
   */
  "version"?: number;
  /**
   * A filter to only select the newest version for each MediaWorkflowTaskDeclaration name.
   */
  "isCurrent"?: boolean;
  /**
   * The field to sort by. Only one sort order may be provided.
   *
   */
  "sortBy"?: model.MediaWorkflowTaskDeclarationSortBy;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * A token representing the position at which to start retrieving results. This must come from the
   * {@code opc-next-page} header field of a previous response.
   *
   */
  "page"?: string;
  /**
   * The sort order to use, either 'ASC' or 'DESC'.
   */
  "sortOrder"?: model.SortOrder;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}
