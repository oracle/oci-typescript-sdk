/**
 *
 *
 * OpenAPI spec version: 20211201
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
 * @example Click {@link https://docs.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/fusionapps/GetDataMaskingActivity.ts.html |here} to see how to use GetDataMaskingActivityRequest.
 */
export interface GetDataMaskingActivityRequest extends common.BaseRequest {
  /**
   * unique FusionEnvironment identifier
   */
  "fusionEnvironmentId": string;
  /**
   * Unique DataMasking run identifier.
   */
  "dataMaskingActivityId": string;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}
