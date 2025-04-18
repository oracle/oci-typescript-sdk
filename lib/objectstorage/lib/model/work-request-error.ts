/**
 * Object Storage Service API
 * Use Object Storage and Archive Storage APIs to manage buckets, objects, and related resources.
For more information, see [Overview of Object Storage](https://docs.oracle.com/iaas/Content/Object/Concepts/objectstorageoverview.htm) and
[Overview of Archive Storage](https://docs.oracle.com/iaas/Content/Archive/Concepts/archivestorageoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: opc_casper_users_us_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2025, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

export interface WorkRequestError {
  /**
   * A machine-usable code for the error that occurred. For the list of error codes,
   * see [API Errors](https://docs.oracle.com/iaas/Content/API/References/apierrors.htm).
   *
   */
  "code"?: string;
  /**
   * A human-readable description of the issue that produced the error.
   */
  "message"?: string;
  /**
   * The time the error occurred.
   */
  "timestamp"?: Date;
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
