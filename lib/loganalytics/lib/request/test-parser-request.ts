/**
 *
 *
 * OpenAPI spec version: 20200601
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
 * @example Click {@link https://docs.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/loganalytics/TestParser.ts.html |here} to see how to use TestParserRequest.
 */
export interface TestParserRequest extends common.BaseRequest {
  /**
   * The Logging Analytics namespace used for the request.
   *
   */
  "namespaceName": string;
  /**
   * Details for test payload
   */
  "testParserPayloadDetails": model.TestParserPayloadDetails;
  /**
   * The scope used when testing a parser.
   */
  "scope"?: TestParserRequest.Scope;
  /**
   * The module to test.  A value of 'ParserFunctionTest' will result in testing of
   * the parser functions.
   *
   */
  "reqOriginModule"?: string;
  /**
   * A token that uniquely identifies a request so it can be retried in case of a timeout or
   * server error without risk of executing that same action again. Retry tokens expire after 24
   * hours, but can be invalidated before then due to conflicting operations. For example, if a resource
   * has been deleted and purged from the system, then a retry of the original creation request
   * might be rejected.
   *
   */
  "opcRetryToken"?: string;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}

export namespace TestParserRequest {
  export enum Scope {
    LogLines = "LOG_LINES",
    LogEntries = "LOG_ENTRIES",
    LogLinesLogEntries = "LOG_LINES_LOG_ENTRIES"
  }
}
