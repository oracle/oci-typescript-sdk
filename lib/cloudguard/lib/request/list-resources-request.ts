/**
 *
 *
 * OpenAPI spec version: 20200131
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
 * @example Click {@link https://docs.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/cloudguard/ListResources.ts.html |here} to see how to use ListResourcesRequest.
 */
export interface ListResourcesRequest extends common.BaseRequest {
  /**
   * The OCID of the compartment in which to list resources.
   */
  "compartmentId": string;
  /**
   * The ID of the target in which to list resources.
   */
  "targetId"?: string;
  /**
   * OCI monitoring region.
   */
  "region"?: string;
  /**
   * Cvss score associated with the resource.
   */
  "cvssScore"?: number;
  /**
   * Cvss score greater than associated with the resource.
   */
  "cvssScoreGreaterThan"?: number;
  /**
   * Cvss score less than associated with the resource.
   */
  "cvssScoreLessThan"?: number;
  /**
   * CVE ID associated with the resource.
   */
  "cveId"?: string;
  /**
   * Risk level of the problem.
   */
  "riskLevel"?: string;
  /**
   * To filter risk level greater than the one mentioned in query param
   */
  "riskLevelGreaterThan"?: string;
  /**
   * To filter risk level less than the one mentioned in query param
   */
  "riskLevelLessThan"?: string;
  /**
   * Comma seperated list of detector rule IDs to be passed in to match against Problems.
   */
  "detectorRuleIdList"?: Array<string>;
  /**
   * The field to list the problems by detector type.
   *
   */
  "detectorType"?: model.DetectorEnum;
  /**
   * The maximum number of items to return
   */
  "limit"?: number;
  /**
   * The page token representing the page at which to start retrieving results. This is usually retrieved from a previous list call.
   */
  "page"?: string;
  /**
   * Default is false.
   * When set to true, the hierarchy of compartments is traversed
   * and all compartments and subcompartments in the tenancy are
   * returned depending on the setting of {@code accessLevel}.
   *
   */
  "compartmentIdInSubtree"?: boolean;
  /**
   * Valid values are {@code RESTRICTED} and {@code ACCESSIBLE}. Default is {@code RESTRICTED}.
   * Setting this to {@code ACCESSIBLE} returns only those compartments for which the
   * user has INSPECT permissions directly or indirectly (permissions can be on a
   * resource in a subcompartment).
   * When set to {@code RESTRICTED} permissions are checked and no partial results are displayed.
   *
   */
  "accessLevel"?: ListResourcesRequest.AccessLevel;
  /**
   * The sort order to use
   */
  "sortOrder"?: model.SortOrders;
  /**
   * The field to sort by. Only one sort order may be provided. Default order for timeCreated is descending. Default order for displayName is ascending. If no value is specified timeCreated is default.
   *
   */
  "sortBy"?: ListResourcesRequest.SortBy;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}

export namespace ListResourcesRequest {
  export enum AccessLevel {
    Restricted = "RESTRICTED",
    Accessible = "ACCESSIBLE"
  }

  export enum SortBy {
    TimeCreated = "timeCreated",
    DisplayName = "displayName"
  }
}
