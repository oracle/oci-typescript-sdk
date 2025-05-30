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

export interface CreateSmtpCredentialDetails {
  /**
    * The description you assign to the SMTP credentials during creation. Does not have to be unique, and it's changeable.
* <p>
(For tenancies that support identity domains) You can have an empty description.
* 
    */
  "description": string;
}

export namespace CreateSmtpCredentialDetails {
  export function getJsonObj(obj: CreateSmtpCredentialDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateSmtpCredentialDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
