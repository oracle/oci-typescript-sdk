/**
 *
 *
 * OpenAPI spec version: 20190801
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
 * @example Click {@link https://docs.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/osmanagement/ListModuleStreams.ts.html |here} to see how to use ListModuleStreamsRequest.
 */
export interface ListModuleStreamsRequest extends common.BaseRequest {
  /**
   * The OCID of the software source.
   */
  "softwareSourceId": string;
  /**
   * The ID of the compartment in which to list resources. This parameter is optional and in some cases may have no effect.
   */
  "compartmentId"?: string;
  /**
   * The name of a module.  This parameter is required if a
   * streamName is specified.
   *
   */
  "moduleName"?: string;
  /**
   * The name of the stream of the containing module.  This parameter
   * is required if a profileName is specified.
   *
   */
  "streamName"?: string;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * The page token representing the page at which to start retrieving results. This is usually retrieved from a previous list call.
   */
  "page"?: string;
  /**
   * The sort order to use, either 'asc' or 'desc'.
   */
  "sortOrder"?: ListModuleStreamsRequest.SortOrder;
  /**
   * The field to sort by. Only one sort order may be provided. Default order for TIMECREATED is descending. Default order for DISPLAYNAME is ascending. If no value is specified TIMECREATED is default.
   *
   */
  "sortBy"?: ListModuleStreamsRequest.SortBy;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}

export namespace ListModuleStreamsRequest {
  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }

  export enum SortBy {
    Timecreated = "TIMECREATED",
    Displayname = "DISPLAYNAME"
  }
}
