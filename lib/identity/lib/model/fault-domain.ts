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
 * A Fault Domain is a logical grouping of hardware and infrastructure within an Availability Domain that can become
 * unavailable in its entirety either due to hardware failure such as Top-of-rack (TOR) switch failure or due to
 * planned software maintenance such as security updates that reboot your instances.
 *
 */
export interface FaultDomain {
  /**
   * The name of the Fault Domain.
   */
  "name"?: string;
  /**
   * The OCID of the Fault Domain.
   */
  "id"?: string;
  /**
   * The OCID of the compartment. Currently only tenancy (root) compartment can be provided.
   */
  "compartmentId"?: string;
  /**
   * The name of the availabilityDomain where the Fault Domain belongs.
   */
  "availabilityDomain"?: string;
}

export namespace FaultDomain {
  export function getJsonObj(obj: FaultDomain): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: FaultDomain): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
