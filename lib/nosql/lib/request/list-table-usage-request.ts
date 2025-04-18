/**
 *
 *
 * OpenAPI spec version: 20190828
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
 * @example Click {@link https://docs.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/nosql/ListTableUsage.ts.html |here} to see how to use ListTableUsageRequest.
 */
export interface ListTableUsageRequest extends common.BaseRequest {
  /**
   * A table name within the compartment, or a table OCID.
   */
  "tableNameOrId": string;
  /**
   * The ID of a table's compartment. When a table is identified
   * by name, the compartmentId is often needed to provide
   * context for interpreting the name.
   *
   */
  "compartmentId"?: string;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
  /**
   * The start time to use for the request. If no time range
   * is set for this request, the most recent complete usage
   * record is returned.
   *
   */
  "timeStart"?: Date;
  /**
   * The end time to use for the request.
   */
  "timeEnd"?: Date;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * The page token representing the page at which to start
   * retrieving results. This is usually retrieved from a previous
   * list call.
   *
   */
  "page"?: string;
}
