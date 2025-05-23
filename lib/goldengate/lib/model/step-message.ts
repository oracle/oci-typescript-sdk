/**
 * GoldenGate API
 * Use the Oracle Cloud Infrastructure GoldenGate APIs to perform data replication operations.

 * OpenAPI spec version: 20200407
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
 * Contents of a step message.
 *
 */
export interface StepMessage {
  /**
   * The status message of the steps in a recipe during pipeline initialization.
   * https://docs.oracle.com/en/middleware/goldengate/core/23/oggra/rest-endpoints.html
   *
   */
  "message": string;
  /**
   * The code returned when GoldenGate reports an error while running a step during pipeline initialization.
   * https://docs.oracle.com/en/middleware/goldengate/core/23/error-messages/ogg-00001-ogg-40000.html#GUID-97FF7AA7-7A5C-4AA7-B29F-3CC8D26761F2
   *
   */
  "code": string;
  /**
   * Date and time of a message issued by steps in a recipe during pipeline initialization.
   * The format is defined by [RFC3339](https://tools.ietf.org/html/rfc3339), such as {@code 2024-07-25T21:10:29.600Z}.
   *
   */
  "timestamp": Date;
  /**
   * The severity returned when calling GoldenGate API messages for a step in a recipe during pipeline initialization.
   * https://docs.oracle.com/en/middleware/goldengate/core/23/oggra/rest-endpoints.html
   *
   */
  "severity": model.SeverityType;
}

export namespace StepMessage {
  export function getJsonObj(obj: StepMessage): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: StepMessage): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
