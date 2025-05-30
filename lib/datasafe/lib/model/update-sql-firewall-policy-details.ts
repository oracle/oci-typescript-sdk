/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
 * OpenAPI spec version: 20181201
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
 * Details to update the SQL Firewall policy.
 */
export interface UpdateSqlFirewallPolicyDetails {
  /**
   * The display name of the SQL Firewall policy. The name does not have to be unique, and it is changeable.
   */
  "displayName"?: string;
  /**
   * The description of the SQL Firewall policy.
   */
  "description"?: string;
  /**
   * Specifies whether the SQL Firewall policy is enabled or disabled.
   */
  "status"?: UpdateSqlFirewallPolicyDetails.Status;
  /**
   * Specifies the SQL Firewall policy enforcement option.
   */
  "enforcementScope"?: UpdateSqlFirewallPolicyDetails.EnforcementScope;
  /**
   * Specifies the SQL Firewall action based on detection of SQL Firewall violations.
   */
  "violationAction"?: UpdateSqlFirewallPolicyDetails.ViolationAction;
  /**
   * Specifies whether a unified audit policy should be enabled for auditing the SQL Firewall policy violations.
   */
  "violationAudit"?: UpdateSqlFirewallPolicyDetails.ViolationAudit;
  /**
   * List of allowed ip addresses for the SQL Firewall policy.
   */
  "allowedClientIps"?: Array<string>;
  /**
   * List of allowed operating system user names for the SQL Firewall policy.
   */
  "allowedClientOsUsernames"?: Array<string>;
  /**
   * List of allowed client programs for the SQL Firewall policy.
   */
  "allowedClientPrograms"?: Array<string>;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm)
* <p>
Example: {@code {\"Department\": \"Finance\"}}
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm)
   * Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace UpdateSqlFirewallPolicyDetails {
  export enum Status {
    Enabled = "ENABLED",
    Disabled = "DISABLED"
  }

  export enum EnforcementScope {
    EnforceContext = "ENFORCE_CONTEXT",
    EnforceSql = "ENFORCE_SQL",
    EnforceAll = "ENFORCE_ALL"
  }

  export enum ViolationAction {
    Block = "BLOCK",
    Observe = "OBSERVE"
  }

  export enum ViolationAudit {
    Enabled = "ENABLED",
    Disabled = "DISABLED"
  }

  export function getJsonObj(obj: UpdateSqlFirewallPolicyDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateSqlFirewallPolicyDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
