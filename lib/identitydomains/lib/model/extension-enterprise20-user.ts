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
 * Enterprise User
 */
export interface ExtensionEnterprise20User {
  /**
   * Numeric or alphanumeric identifier assigned to  a person, typically based on order of hire or association with an organization.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsCsvAttributeName: Employee Number
   *  - idcsCsvAttributeNameMappings: [[columnHeaderName:Employee Number]]
   *  - idcsPii: true
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "employeeNumber"?: string;
  /**
   * Identifies the name of a cost center.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsCsvAttributeName: Cost Center
   *  - idcsCsvAttributeNameMappings: [[columnHeaderName:Cost Center]]
   *  - idcsPii: true
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "costCenter"?: string;
  /**
   * Identifies the name of an organization.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsCsvAttributeName: Organization
   *  - idcsCsvAttributeNameMappings: [[columnHeaderName:Organization Name, deprecatedColumnHeaderName:Organization]]
   *  - idcsPii: true
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "organization"?: string;
  /**
   * Identifies the name of a division.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsCsvAttributeName: Division
   *  - idcsCsvAttributeNameMappings: [[columnHeaderName:Division]]
   *  - idcsPii: true
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "division"?: string;
  /**
   * Identifies the name of a department.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsCsvAttributeName: Department
   *  - idcsCsvAttributeNameMappings: [[columnHeaderName:Department]]
   *  - idcsPii: true
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "department"?: string;
  "manager"?: model.UserExtManager;
}

export namespace ExtensionEnterprise20User {
  export function getJsonObj(obj: ExtensionEnterprise20User): object {
    const jsonObj = {
      ...obj,
      ...{
        "manager": obj.manager ? model.UserExtManager.getJsonObj(obj.manager) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ExtensionEnterprise20User): object {
    const jsonObj = {
      ...obj,
      ...{
        "manager": obj.manager
          ? model.UserExtManager.getDeserializedJsonObj(obj.manager)
          : undefined
      }
    };

    return jsonObj;
  }
}
