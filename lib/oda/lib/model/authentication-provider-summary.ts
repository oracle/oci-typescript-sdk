/**
 * Digital Assistant Service Instance API
 * API to create and maintain Oracle Digital Assistant service instances.
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
 * Summary of the Authentication Provider.
 */
export interface AuthenticationProviderSummary {
  /**
   * Unique immutable identifier that was assigned when the Authentication Provider was created.
   */
  "id": string;
  /**
   * The grant type for the Authentication Provider.
   */
  "grantType": model.AuthenticationGrantType;
  /**
   * Which type of Identity Provider (IDP) you are using.
   */
  "identityProvider": model.AuthenticationIdentityProvider;
  /**
   * A name to identify the Authentication Provider.
   */
  "name": string;
  /**
   * The Authentication Provider's current state.
   */
  "lifecycleState": model.LifecycleState;
  /**
   * When the resource was created. A date-time string as described in [RFC 3339](https://tools.ietf.org/rfc/rfc3339), section 14.29.
   */
  "timeCreated": Date;
  /**
   * When the resource was last updated. A date-time string as described in [RFC 3339](https://tools.ietf.org/rfc/rfc3339), section 14.29.
   */
  "timeUpdated": Date;
  /**
   * Simple key-value pair that is applied without any predefined name, type, or scope.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Usage of predefined tag keys. These predefined keys are scoped to namespaces.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace AuthenticationProviderSummary {
  export function getJsonObj(obj: AuthenticationProviderSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AuthenticationProviderSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
