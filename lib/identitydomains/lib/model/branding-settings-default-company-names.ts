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
 * Default name of the Company in different locales
 */
export interface BrandingSettingsDefaultCompanyNames {
  /**
   * Company name
   * <p>
   **Added In:** 18.2.2
   * <p>
   **SCIM++ Properties:**
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: true
   *  - returned: default
   *  - type: string
   */
  "value": string;
  /**
   * Locale
   * <p>
   **Added In:** 18.2.2
   * <p>
   **SCIM++ Properties:**
   *  - idcsCanonicalValueSourceFilter: attrName eq \"locales\" and attrValues.value eq \"$(companyNames.locale)\"
   *  - idcsCanonicalValueSourceResourceType: AllowedValue
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: true
   *  - returned: default
   *  - type: string
   */
  "locale": string;
}

export namespace BrandingSettingsDefaultCompanyNames {
  export function getJsonObj(obj: BrandingSettingsDefaultCompanyNames): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: BrandingSettingsDefaultCompanyNames): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}