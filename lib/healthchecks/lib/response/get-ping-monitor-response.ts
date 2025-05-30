/**
 *
 *
 * OpenAPI spec version: 20180501
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

export interface GetPingMonitorResponse {
  /**
   * Unique Oracle-assigned identifier for the request. If you need to
   * contact Oracle about a particular request, please provide
   * the request ID.
   *
   */
  "opcRequestId": string;
  /**
   * An entity tag that uniquely identifies a version of the resource.
   */
  "etag": string;
  /**
   * The returned model.PingMonitor instance, or null if {@link #isNotModified()} is true.
   */
  "pingMonitor": model.PingMonitor;

  /**
   * Flag to indicate whether or not the object was modified.  If this is true,
   * the getter for the object itself will return null.  Callers should check this
   * if they specified one of the request params that might result in a conditional
   * response (like 'if-match'/'if-none-match').
   */
  "isNotModified": boolean;
}
