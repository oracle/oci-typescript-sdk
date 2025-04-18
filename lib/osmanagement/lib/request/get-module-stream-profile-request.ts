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
 * @example Click {@link https://docs.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/osmanagement/GetModuleStreamProfile.ts.html |here} to see how to use GetModuleStreamProfileRequest.
 */
export interface GetModuleStreamProfileRequest extends common.BaseRequest {
  /**
   * The OCID of the software source.
   */
  "softwareSourceId": string;
  /**
   * The name of the module
   */
  "moduleName": string;
  /**
   * The name of the stream of the containing module
   */
  "streamName": string;
  /**
   * The name of the profile of the containing module stream
   */
  "profileName": string;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}
