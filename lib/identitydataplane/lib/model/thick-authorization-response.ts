/**
 * Identity and Access Management Data Plane API
 * APIs for managing identity data plane services. For example, use this API to create a scoped-access security token. To manage identity domains (for example, creating or deleting an identity domain) or to manage resources (for example, users and groups) within the default identity domain, see [IAM API](https://docs.oracle.com/iaas/api/#/en/identity/).
 * OpenAPI spec version: v1
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

export interface ThickAuthorizationResponse {
  /**
   * The policy string related to the request
   */
  "policy": string;
  /**
   * The duration of how long this policy should be cached. Note that the type is of type java.time.Duration, not
   * string.
   *
   */
  "policyCacheDuration": string;
  /**
   * The policy string related to the request.
   */
  "groups": Array<string>;
  /**
   * The duration of how long the user's group membership should be cached. Note that the type is of type
   * java.time.Duration, not string.
   *
   */
  "groupMembershipCacheDuration": string;
  /**
   * If set to true, the SDK should clear the caches.
   */
  "flushAllCaches"?: boolean;
}

export namespace ThickAuthorizationResponse {
  export function getJsonObj(obj: ThickAuthorizationResponse): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ThickAuthorizationResponse): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
