/**
 *
 *
 * OpenAPI spec version: 20230301
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/globallydistributeddatabase/GetShardedDatabase.ts.html |here} to see how to use GetShardedDatabaseRequest.
 */
export interface GetShardedDatabaseRequest extends common.BaseRequest {
  /**
   * Sharded Database identifier
   */
  "shardedDatabaseId": string;
  /**
   * Comma separated names of argument corresponding to which metadata need to be retrived, namely VM_CLUSTER_INFO, ADDITIONAL_RESOURCE_INFO.
   * An example is metadata=VM_CLUSTER_INFO,ADDITIONAL_RESOURCE_INFO.
   *
   */
  "metadata"?: string;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}
