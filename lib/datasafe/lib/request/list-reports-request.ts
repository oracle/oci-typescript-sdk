/**
 *
 *
 * OpenAPI spec version: 20181201
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
 * @example Click {@link https://docs.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/datasafe/ListReports.ts.html |here} to see how to use ListReportsRequest.
 */
export interface ListReportsRequest extends common.BaseRequest {
  /**
   * A filter to return only resources that match the specified compartment OCID.
   */
  "compartmentId": string;
  /**
   * Default is false.
   * When set to true, the hierarchy of compartments is traversed and all compartments and subcompartments in the tenancy are returned. Depends on the 'accessLevel' setting.
   *
   */
  "compartmentIdInSubtree"?: boolean;
  /**
   * Valid values are RESTRICTED and ACCESSIBLE. Default is RESTRICTED.
   * Setting this to ACCESSIBLE returns only those compartments for which the
   * user has INSPECT permissions directly or indirectly (permissions can be on a
   * resource in a subcompartment). When set to RESTRICTED permissions are checked and no partial results are displayed.
   *
   */
  "accessLevel"?: ListReportsRequest.AccessLevel;
  /**
   * The name of the report definition to query.
   */
  "displayName"?: string;
  /**
   * For list pagination. The maximum number of items to return per page in a paginated \"List\" call. For details about how pagination works, see [List Pagination](https://docs.oracle.com/iaas/en-us/iaas/Content/API/Concepts/usingapi.htm#nine).
   */
  "limit"?: number;
  /**
   * For list pagination. The page token representing the page at which to start retrieving results. It is usually retrieved from a previous \"List\" call. For details about how pagination works, see [List Pagination](https://docs.oracle.com/iaas/en-us/iaas/Content/API/Concepts/usingapi.htm#nine).
   */
  "page"?: string;
  /**
   * The sort order to use, either ascending (ASC) or descending (DESC).
   */
  "sortOrder"?: ListReportsRequest.SortOrder;
  /**
   * The field to sort by. Only one sort order may be provided. Default order for timeGenerated is descending. Default order for displayName is ascending. If no value is specified timeGenerated is default.
   *
   */
  "sortBy"?: ListReportsRequest.SortBy;
  /**
   * An optional filter to return only resources that match the specified mime type.
   */
  "mimeType"?: ListReportsRequest.MimeType;
  /**
   * The ID of the report definition to filter the list of reports
   */
  "reportDefinitionId"?: string;
  /**
   * A filter to return only the resources that were generated after the specified date and time, as defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   * Using TimeGeneratedGreaterThanOrEqualToQueryParam parameter retrieves all resources generated after that date.
   * <p>
   **Example:** 2016-12-19T16:39:57.600Z
   *
   */
  "timeGeneratedGreaterThanOrEqualTo"?: Date;
  /**
   * Search for resources that were generated before a specific date.
   * Specifying this parameter corresponding {@code timeGeneratedLessThan}
   * parameter will retrieve all resources generated before the
   * specified generated date, in \"YYYY-MM-ddThh:mmZ\" format with a Z offset, as
   * defined by RFC 3339.
   * <p>
   **Example:** 2016-12-19T16:39:57.600Z
   *
   */
  "timeGeneratedLessThan"?: Date;
  /**
   * Unique identifier for the request.
   */
  "opcRequestId"?: string;
  /**
   * An optional filter to return only resources that match the specified lifecycle state.
   */
  "lifecycleState"?: model.ReportLifecycleState;
  /**
   * An optional filter to return only resources that match the specified type.
   */
  "type"?: model.ReportType;
}

export namespace ListReportsRequest {
  export enum AccessLevel {
    Restricted = "RESTRICTED",
    Accessible = "ACCESSIBLE"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }

  export enum SortBy {
    TimeGenerated = "timeGenerated",
    DisplayName = "displayName"
  }

  export enum MimeType {
    Pdf = "PDF",
    Xls = "XLS",
    Json = "JSON"
  }
}
