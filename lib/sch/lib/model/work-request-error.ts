/**
 * Connector Hub API
 * Use the Connector Hub API to transfer data between services in Oracle Cloud Infrastructure.
For more information about Connector Hub, see
[the Connector Hub documentation](https://docs.oracle.com/iaas/Content/connector-hub/home.htm).
Connector Hub is formerly known as Service Connector Hub.

 * OpenAPI spec version: 20200909
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
 * An error encountered while executing a work request.
 *
 */
export interface WorkRequestError {
  /**
   * A machine-usable code for the error that occured. See
   * [API Errors](https://docs.oracle.com/iaas/Content/API/References/apierrors.htm).
   *
   */
  "code": string;
  /**
   * A human readable description of the issue encountered.
   *
   */
  "message": string;
  /**
   * The date and time when the error occurred.
   * Format is defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   * Example: {@code 2020-01-25T21:10:29.600Z}
   *
   */
  "timestamp": Date;
}

export namespace WorkRequestError {
  export function getJsonObj(obj: WorkRequestError): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: WorkRequestError): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
