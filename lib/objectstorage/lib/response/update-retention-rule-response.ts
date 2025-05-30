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

export interface UpdateRetentionRuleResponse {
  /**
   * Echoes back the value passed in the opc-client-request-id header, for use by clients when debugging.
   */
  "opcClientRequestId": string;
  /**
   * Unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular
   * request, provide this request ID.
   *
   */
  "opcRequestId": string;
  /**
   * The entity tag (ETag) for the retention rule that was updated.
   */
  "etag": string;
  /**
   * The returned model.RetentionRule instance.
   */
  "retentionRule": model.RetentionRule;
}
