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
 * This extension defines attributes specific to Apps that represent instances of Radius App.
 */
export interface AppExtensionRadiusAppApp {
  /**
   * This is the IP address of the RADIUS Client like Oracle Database server. It can be only IP address and not hostname.
   * <p>
   **Added In:** 20.1.3
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: true
   *  - returned: default
   *  - type: string
   */
  "clientIP": string;
  /**
   * This is the port of RADIUS Proxy which RADIUS client will connect to.
   * <p>
   **Added In:** 20.1.3
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: true
   *  - returned: default
   *  - type: string
   */
  "port": string;
  /**
   * Secret key used to secure communication between RADIUS Proxy and RADIUS client
   * <p>
   **Added In:** 20.1.3
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: true
   *  - returned: default
   *  - type: string
   */
  "secretKey": string;
  /**
   * Indicates to include groups in RADIUS response
   * <p>
   **Added In:** 20.1.3
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: true
   *  - returned: default
   *  - type: boolean
   */
  "includeGroupInResponse": boolean;
  /**
   * If true, capture the client IP address from the RADIUS request packet. IP Address is used for auditing, policy-evaluation and country-code calculation.
   * <p>
   **Added In:** 2205120021
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: boolean
   */
  "captureClientIp"?: boolean;
  /**
   * Value consists of type of RADIUS App. Type can be Oracle Database, VPN etc
   * <p>
   **Added In:** 2205120021
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   */
  "typeOfRadiusApp"?: string;
  /**
   * The name of the attribute that contains the Internet Protocol address of the end-user.
   * <p>
   **Added In:** 2205120021
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   */
  "endUserIPAttribute"?: string;
  /**
   * ID used to identify a particular vendor.
   * <p>
   **Added In:** 2205120021
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   */
  "radiusVendorSpecificId"?: string;
  /**
   * Vendor-specific identifier of the attribute in the RADIUS response that will contain the end-user's country code. This is an integer-value in the range 1 to 255
   * <p>
   **Added In:** 2205120021
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   */
  "countryCodeResponseAttributeId"?: string;
  /**
   * RADIUS attribute that RADIUS-enabled system uses to pass the group membership
   * <p>
   **Added In:** 20.1.3
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   */
  "groupMembershipRadiusAttribute"?: string;
  /**
   * Configure the responseFormat based on vendor in order to pass it to RADIUS infra
   * <p>
   **Added In:** 20.1.3
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   */
  "responseFormat"?: string;
  /**
   * The delimiter used if group membership responseFormat is a delimited list instead of repeating attributes
   * <p>
   **Added In:** 20.1.3
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   */
  "responseFormatDelimiter"?: string;
  /**
   * Configure the groupNameFormat based on vendor in order to pass it to RADIUS infra
   * <p>
   **Added In:** 20.1.3
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   */
  "groupNameFormat"?: string;
  /**
   * Indicates if password and OTP are passed in the same sign-in request or not.
   * <p>
   **Added In:** 2205120021
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: boolean
   */
  "passwordAndOtpTogether"?: boolean;
  /**
   * In a successful authentication response, Oracle Identity Cloud Service will pass user's group information restricted to groups persisted in this attribute, in the specified RADIUS attribute.
   * <p>
   **Added In:** 20.1.3
   * <p>
   **SCIM++ Properties:**
   *  - idcsCompositeKey: [value]
   *  - idcsSearchable: true
   *  - multiValued: true
   *  - mutability: readWrite
   *  - required: false
   *  - returned: request
   *  - type: complex
   *  - uniqueness: none
   */
  "groupMembershipToReturn"?: Array<model.AppGroupMembershipToReturn>;
}

export namespace AppExtensionRadiusAppApp {
  export function getJsonObj(obj: AppExtensionRadiusAppApp): object {
    const jsonObj = {
      ...obj,
      ...{
        "groupMembershipToReturn": obj.groupMembershipToReturn
          ? obj.groupMembershipToReturn.map(item => {
              return model.AppGroupMembershipToReturn.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AppExtensionRadiusAppApp): object {
    const jsonObj = {
      ...obj,
      ...{
        "groupMembershipToReturn": obj.groupMembershipToReturn
          ? obj.groupMembershipToReturn.map(item => {
              return model.AppGroupMembershipToReturn.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}