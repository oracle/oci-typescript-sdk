/**
 * Oracle Database Autonomous Recovery Service API
 * Use Oracle Database Autonomous Recovery Service API to manage Protected Databases.
 * OpenAPI spec version: 20210216
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
 * The details of a protection policy.A policy defines the exact number of days to retain protected database backups created by Recovery Service.
 * Each protected database must be associated with one protection policy. You can use Oracle-defined protection policies or create custom policies to suit your internal backup storage regulation demands.
 *
 */
export interface ProtectionPolicy {
  /**
   * The protection policy OCID.
   */
  "id": string;
  /**
   * A user provided name for the protection policy.
   */
  "displayName"?: string;
  /**
   * The OCID of the compartment that contains the protection policy.
   */
  "compartmentId": string;
  /**
   * The maximum number of days to retain backups for a protected database. Specify a period ranging from a minimum 14 days to a maximum 95 days. For example, specify the value 55 if you want to retain backups for 55 days. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "backupRetentionPeriodInDays": number;
  /**
   * Set to TRUE if the policy is Oracle-defined, and FALSE for a user-defined custom policy. You can modify only the custom policies.
   */
  "isPredefinedPolicy": boolean;
  /**
   * An RFC3339 formatted datetime string that indicates the created time for the protection policy. For example: '2020-05-22T21:10:29.600Z'.
   *
   */
  "timeCreated"?: Date;
  /**
   * An RFC3339 formatted datetime string that indicates the updated time for the protection policy. For example: '2020-05-22T21:10:29.600Z'.
   *
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the protection policy. Allowed values are:
   *   - CREATING
   *   - UPDATING
   *   - ACTIVE
   *   - DELETING
   *   - DELETED
   *   - FAILED
   *
   */
  "lifecycleState"?: model.LifecycleState;
  /**
   * Detailed description about the current lifecycle state of the protection policy. For example, it can be used to provide actionable information for a resource in a Failed state.
   */
  "lifecycleDetails"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`. For more information, see [Resource Tags](https://docs.oracle.com/en-us/iaas/Content/General/Concepts/resourcetags.htm)
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces.
   * Example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`. For more information, see [Resource Tags](https://docs.oracle.com/en-us/iaas/Content/General/Concepts/resourcetags.htm)
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace ProtectionPolicy {
  export function getJsonObj(obj: ProtectionPolicy): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ProtectionPolicy): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}