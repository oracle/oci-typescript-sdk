/**
 * Organizations API
 * Use the Organizations API to consolidate multiple OCI tenancies into an organization, and centrally manage your tenancies and organization resources. For more information, see [Organization Management Overview](https://docs.oracle.com/iaas/Content/General/Concepts/organization_management_overview.htm).
 * OpenAPI spec version: 20230401
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
 * The parameters for creating a child tenancy.
 */
export interface CreateChildTenancyDetails {
  /**
   * The tenancy ID of the parent tenancy.
   */
  "compartmentId": string;
  /**
   * The tenancy name to use for the child tenancy.
   */
  "tenancyName": string;
  /**
   * The home region to use for the child tenancy. This must be a region where the parent tenancy is subscribed.
   */
  "homeRegion": string;
  /**
   * Email address of the child tenancy administrator.
   */
  "adminEmail": string;
  /**
   * The name to use for the administrator policy in the child tenancy. Must contain only letters and underscores.
   */
  "policyName"?: string;
  /**
   * The governance status of the child tenancy.
   */
  "governanceStatus"?: model.GovernanceStatus;
  /**
   * OCID of the subscription that needs to be assigned to the child tenancy.
   */
  "subscriptionId"?: string;
}

export namespace CreateChildTenancyDetails {
  export function getJsonObj(obj: CreateChildTenancyDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateChildTenancyDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
