/**
 *
 *
 * OpenAPI spec version: 20160918
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
 * @example Click {@link https://docs.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/database/ListDbNodes.ts.html |here} to see how to use ListDbNodesRequest.
 */
export interface ListDbNodesRequest extends common.BaseRequest {
  /**
   * The compartment [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm).
   */
  "compartmentId": string;
  /**
   * The DB system [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm). If provided, filters the results to the set of database versions which are supported for the DB system.
   */
  "dbSystemId"?: string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the VM cluster.
   */
  "vmClusterId"?: string;
  /**
   * The maximum number of items to return per page.
   */
  "limit"?: number;
  /**
   * The pagination token to continue listing from.
   */
  "page"?: string;
  /**
   * Sort by TIMECREATED.  Default order for TIMECREATED is descending.
   */
  "sortBy"?: ListDbNodesRequest.SortBy;
  /**
   * The sort order to use, either ascending ({@code ASC}) or descending ({@code DESC}).
   */
  "sortOrder"?: ListDbNodesRequest.SortOrder;
  /**
   * A filter to return only resources that match the given lifecycle state exactly.
   */
  "lifecycleState"?: string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the Exacc Db server.
   */
  "dbServerId"?: string;
}

export namespace ListDbNodesRequest {
  export enum SortBy {
    Timecreated = "TIMECREATED"
  }

  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }
}
