/**
 * Identity Domains API
 * Use the Identity Domains API to manage resources within an identity domain, for example, users, dynamic resource groups, groups, and identity providers. For information about managing resources within identity domains, see [Identity and Access Management (with identity domains)](https://docs.oracle.com/iaas/Content/Identity/home.htm).
Use this pattern to construct endpoints for identity domains: {@code https://<domainURL>/admin/v1/}. See [Finding an Identity Domain URL](https://docs.oracle.com/en-us/iaas/Content/Identity/api-getstarted/locate-identity-domain-url.htm) to locate the domain URL you need.
Use the table of contents and search tool to explore the Identity Domains API.
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

/**
 * X509 Identity Provider Extension Schema
 */
export interface ExtensionX509IdentityProvider {
  /**
   * X509 Certificate Matching Attribute
   * <p>
   **Added In:** 2010242156
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: true
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "certMatchAttribute": string;
  /**
   * This property specifies the userstore attribute value that must match the incoming certificate attribute.
   * <p>
   **Added In:** 2010242156
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: true
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "userMatchAttribute": string;
  /**
   * Check for specific conditions of other certificate attributes
   * <p>
   **Added In:** 2010242156
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "otherCertMatchAttribute"?: string;
  /**
   * Certificate alias list to create a chain for the incoming client certificate
   * <p>
   **Added In:** 2010242156
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: true
   *  - mutability: readWrite
   *  - required: true
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "signingCertificateChain": Array<string>;
  /**
   * Set to true to enable OCSP Validation
   * <p>
   **Added In:** 2010242156
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: boolean
   *  - uniqueness: none
   */
  "ocspEnabled"?: boolean;
  /**
   * This property specifies the OCSP Server alias name
   * <p>
   **Added In:** 2010242156
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "ocspServerName"?: string;
  /**
   * This property specifies OCSP Responder URL.
   * <p>
   **Added In:** 2010242156
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "ocspResponderURL"?: string;
  /**
   * Allow access if OCSP response is UNKNOWN or OCSP Responder does not respond within the timeout duration
   * <p>
   **Added In:** 2010242156
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: boolean
   *  - uniqueness: none
   */
  "ocspAllowUnknownResponseStatus"?: boolean;
  /**
   * Revalidate OCSP status for user after X hours
   * <p>
   **Added In:** 2010242156
   * <p>
   **SCIM++ Properties:**
   *  - idcsMaxValue: 24
   *  - idcsMinValue: 0
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: integer
   *  - uniqueness: none Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "ocspRevalidateTime"?: number;
  /**
   * Describes if the OCSP response is signed
   * <p>
   **Added In:** 2010242156
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: boolean
   *  - uniqueness: none
   */
  "ocspEnableSignedResponse"?: boolean;
  /**
   * OCSP Trusted Certificate Chain
   * <p>
   **Added In:** 2010242156
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: true
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "ocspTrustCertChain"?: Array<string>;
  /**
   * Set to true to enable CRL Validation
   * <p>
   **Added In:** 2010242156
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: boolean
   *  - uniqueness: none
   */
  "crlEnabled"?: boolean;
  /**
   * Fallback on CRL Validation if OCSP fails.
   * <p>
   **Added In:** 2010242156
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: boolean
   *  - uniqueness: none
   */
  "crlCheckOnOCSPFailureEnabled"?: boolean;
  /**
   * CRL Location URL
   * <p>
   **Added In:** 2010242156
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "crlLocation"?: string;
  /**
   * Fetch the CRL contents every X minutes
   * <p>
   **Added In:** 2010242156
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: integer
   *  - uniqueness: none Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "crlReloadDuration"?: number;
  /**
   * Set to true to enable EKU Validation
   * <p>
   **Added In:** 2304270343
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: boolean
   *  - uniqueness: none
   */
  "ekuValidationEnabled"?: boolean;
  /**
   * List of EKU which needs to be validated
   * <p>
   **Added In:** 2304270343
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: true
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "ekuValues"?: Array<ExtensionX509IdentityProvider.EkuValues>;
}

export namespace ExtensionX509IdentityProvider {
  export enum EkuValues {
    ServerAuth = "SERVER_AUTH",
    ClientAuth = "CLIENT_AUTH",
    CodeSigning = "CODE_SIGNING",
    EmailProtection = "EMAIL_PROTECTION",
    TimeStamping = "TIME_STAMPING",
    OcspSigning = "OCSP_SIGNING",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ExtensionX509IdentityProvider): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ExtensionX509IdentityProvider): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
