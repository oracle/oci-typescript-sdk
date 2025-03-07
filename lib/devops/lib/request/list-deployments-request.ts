/**
 *
 *
 * OpenAPI spec version: 20210630
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
 * @example Click {@link https://docs.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/devops/ListDeployments.ts.html |here} to see how to use ListDeploymentsRequest.
 */
export interface ListDeploymentsRequest extends common.BaseRequest {
  /**
   * The ID of the parent pipeline.
   */
  "deployPipelineId"?: string;
  /**
   * Unique identifier or OCID for listing a single resource by ID.
   */
  "id"?: string;
  /**
   * The OCID of the compartment in which to list resources.
   */
  "compartmentId"?: string;
  /**
   * unique project identifier
   */
  "projectId"?: string;
  /**
   * A filter to return only Deployments that matches the given lifecycleState.
   */
  "lifecycleState"?: string;
  /**
   * A filter to return only resources that match the entire display name given.
   */
  "displayName"?: string;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * The page token representing the page at which to start retrieving results. This is usually retrieved from a previous list call.
   */
  "page"?: string;
  /**
   * The sort order to use. Use either ascending or descending.
   */
  "sortOrder"?: model.SortOrder;
  /**
   * The field to sort by. Only one sort order may be provided. Default order for time created is descending. Default order for display name is ascending. If no value is specified, then the default time created value is considered.
   */
  "sortBy"?: ListDeploymentsRequest.SortBy;
  /**
   * Unique Oracle-assigned identifier for the request.  If you need to contact Oracle about a particular request, provide the request ID.
   */
  "opcRequestId"?: string;
  /**
   * Search for DevOps resources that were created before a specific date. Specifying this parameter corresponding to {@code timeCreatedLessThan} parameter will retrieve all assessments created before the specified created date, in \"YYYY-MM-ddThh:mmZ\" format with a Z offset, as defined by [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339).
   */
  "timeCreatedLessThan"?: Date;
  /**
   * Search for DevOps resources that were created after a specific date. Specifying this parameter corresponding to {@code timeCreatedGreaterThanOrEqualTo} parameter will retrieve all security assessments created after the specified created date, in \"YYYY-MM-ddThh:mmZ\" format with a Z offset, as defined by [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339).
   */
  "timeCreatedGreaterThanOrEqualTo"?: Date;
}

export namespace ListDeploymentsRequest {
  export enum SortBy {
    TimeCreated = "timeCreated",
    DisplayName = "displayName"
  }
}
