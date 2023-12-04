/**
 * Identity Domains API
 * Use the Identity Domains API to manage resources within an identity domain, for example, users, dynamic resource groups, groups, and identity providers. For information about managing resources within identity domains, see [Identity and Access Management (with identity domains)](https://docs.oracle.com/iaas/Content/Identity/home.htm). This REST API is SCIM compliant.
Use the table of contents and search tool to explore the Identity Domains API.
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Relay Param variable for Social IDP
 * <p>
 **Added In:** 2305190132
 * <p>
 **SCIM++ Properties:**
 *  - idcsCompositeKey: [relayParamKey]
 *  - idcsSearchable: true
 *  - multiValued: true
 *  - mutability: readWrite
 *  - required: false
 *  - returned: default
 *  - type: complex
 *  - uniqueness: none
 */
export interface IdentityProviderRelayIdpParamMappings {
  /**
   * Key or name of the relayParam.
   * <p>
   **Added In:** 2305190132
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: true
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "relayParamKey": string;
  /**
   * Value of the relayParam (if defined)
   * <p>
   **Added In:** 2305190132
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "relayParamValue"?: string;
}

export namespace IdentityProviderRelayIdpParamMappings {
  export function getJsonObj(obj: IdentityProviderRelayIdpParamMappings): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: IdentityProviderRelayIdpParamMappings): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}