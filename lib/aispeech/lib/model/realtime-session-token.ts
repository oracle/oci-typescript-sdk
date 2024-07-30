/**
 * Speech API
 * The OCI Speech Service harnesses the power of spoken language by allowing developers to easily convert file-based data containing human speech into highly accurate text transcriptions.
 * OpenAPI spec version: 20220101
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The response from the realtime session token endpoint that creates the auth token to be used with the realtime speech service.
 */
export interface RealtimeSessionToken {
  /**
   * The session token (JWT) to be consumed by the websocket server. The token contains the session/tenant ID, as well as the expiry time.
   */
  "token": string;
  /**
   * The session ID this token corresponds to. Provided for convenience, the session ID is already present in the JWT token.
   */
  "sessionId": string;
  /**
   * Compartment ID that was used to create the token.
   */
  "compartmentId": string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}.
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"foo-namespace-1\": {\"bar-key-1\": \"value-1\", \"bar-key-2\": \"value-2\"}, \"foo-namespace-2\": {\"bar-key-1\": \"value-1\", \"bar-key-2\": \"value-2\"}}}.
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace RealtimeSessionToken {
  export function getJsonObj(obj: RealtimeSessionToken): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RealtimeSessionToken): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}