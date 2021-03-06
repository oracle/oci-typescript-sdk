/**
 * DevOps API
 * Use the DevOps APIs to create a DevOps project to group the pipelines,  add reference to target deployment environments, add artifacts to deploy,  and create deployment pipelines needed to deploy your software.
 * OpenAPI spec version: 20210630
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * A log message from the execution of a work request.
 */
export interface WorkRequestLogEntry {
  /**
   * Human-readable log message.
   */
  "message": string;
  /**
   * Time the log message was written. Format defined by [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339).
   */
  "timestamp": Date;
}

export namespace WorkRequestLogEntry {
  export function getJsonObj(obj: WorkRequestLogEntry): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: WorkRequestLogEntry): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
