/**
 *
 *
 * OpenAPI spec version: 20190506
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
 * @example Click {@link https://docs.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/oda/GetDigitalAssistantParameter.ts.html |here} to see how to use GetDigitalAssistantParameterRequest.
 */
export interface GetDigitalAssistantParameterRequest extends common.BaseRequest {
  /**
   * Unique Digital Assistant instance identifier.
   */
  "odaInstanceId": string;
  /**
   * Unique Digital Assistant identifier.
   */
  "digitalAssistantId": string;
  /**
   * The name of a Digital Assistant Parameter.  This is unique with the Digital Assistant.
   */
  "parameterName": string;
  /**
   * The If-None-Match HTTP request header makes the request conditional. For GET methods, the service will return the
   * requested resource, with a 200 status, only if it doesn't have an ETag matching the given ones.
   * When the condition fails for GET methods, then the service will return HTTP status code 304 (Not Modified).
   *
   */
  "ifNoneMatch"?: string;
  /**
   * The client request ID for tracing. This value is included in the opc-request-id response header.
   */
  "opcRequestId"?: string;
}
