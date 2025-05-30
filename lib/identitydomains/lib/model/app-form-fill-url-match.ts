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
 * A list of application-formURLs that FormFill should match against any formUrl that the user-specifies when signing in to the target service.  Each item in the list also indicates how FormFill should interpret that formUrl.
 * <p>
 **SCIM++ Properties:**
 *  - idcsCompositeKey: [formUrl]
 *  - multiValued: true
 *  - mutability: readWrite
 *  - required: false
 *  - returned: default
 *  - type: complex
 *  - uniqueness: none
 */
export interface AppFormFillUrlMatch {
  /**
   * Indicates how to interpret the value of 'formUrl' when matching against a user-specified formUrl.  The system currently supports only 'Exact', which indicates that the value of 'formUrl' should be treated as a literal value.
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
  "formUrlMatchType"?: string;
  /**
   * An application formUrl that FormFill will match against any formUrl that a User enters in trying to access the target-service which this App represents.
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
  "formUrl": string;
}

export namespace AppFormFillUrlMatch {
  export function getJsonObj(obj: AppFormFillUrlMatch): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AppFormFillUrlMatch): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
