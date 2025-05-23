/**
 * Identity and Access Management Service API
 * Use the Identity and Access Management Service API to manage users, groups, identity domains, compartments, policies, tagging, and limits. For information about managing users, groups, compartments, and policies, see [Identity and Access Management (without identity domains)](https://docs.oracle.com/iaas/Content/Identity/Concepts/overview.htm). For information about tagging and service limits, see [Tagging](https://docs.oracle.com/iaas/Content/Tagging/Concepts/taggingoverview.htm) and [Service Limits](https://docs.oracle.com/iaas/Content/General/Concepts/servicelimits.htm). For information about creating, modifying, and deleting identity domains, see [Identity and Access Management (with identity domains)](https://docs.oracle.com/iaas/Content/Identity/home.htm).
 * OpenAPI spec version: 20160918
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
 * (For tenancies that support identity domains) Details for creating an identity domain.
 */
export interface CreateDomainDetails {
  /**
   * The OCID of the compartment where the identity domain is created.
   */
  "compartmentId": string;
  /**
   * The mutable display name of the identity domain.
   */
  "displayName": string;
  /**
   * The identity domain description. You can have an empty description.
   */
  "description": string;
  /**
    * The region's name identifier. See [Regions and Availability Domains](https://docs.oracle.com/iaas/Content/General/Concepts/regions.htm)
* for the full list of supported region names.
* <p>
Example: {@code us-phoenix-1}
* 
    */
  "homeRegion": string;
  /**
   * The license type of the identity domain.
   */
  "licenseType": string;
  /**
   * Indicates whether the identity domain is hidden on the sign-in screen or not.
   *
   */
  "isHiddenOnLogin"?: boolean;
  /**
   * The administrator's first name.
   */
  "adminFirstName"?: string;
  /**
   * The administrator's last name.
   */
  "adminLastName"?: string;
  /**
   * The administrator's user name.
   */
  "adminUserName"?: string;
  /**
   * The administrator's email address.
   */
  "adminEmail"?: string;
  /**
   * Indicates whether or not the administrator user created in the IDCS stripe would like to receive notifications like a welcome email.
   * This field is required only if admin information is provided. This field is otherwise optional.
   *
   */
  "isNotificationBypassed"?: boolean;
  /**
   * Optional field to indicate whether users in the identity domain are required to have a primary email address or not. The default is true.
   *
   */
  "isPrimaryEmailRequired"?: boolean;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {\"Department\": \"Finance\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateDomainDetails {
  export function getJsonObj(obj: CreateDomainDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateDomainDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
