/**
 * Fleet Application Management Service API
 * Fleet Application Management provides a centralized platform to help you automate resource management tasks, validate patch compliance, and enhance operational efficiency across an enterprise.

 * OpenAPI spec version: 20250228
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
 * The data to create a CompliancePolicyRule.
 */
export interface CreateCompliancePolicyRuleDetails {
  /**
    * A user-friendly name. Does not have to be unique, and it's changeable.
* Avoid entering confidential information.
* <p>
Example: {@code My new resource}
* 
    */
  "displayName": string;
  /**
   * Unique OCID of the CompliancePolicy this CompliancePolicyRule belongs to.
   */
  "compliancePolicyId": string;
  "productVersion": model.ProductVersionDetails;
  /**
   * PlatformConfiguration OCID for the patch type to which this CompliancePolicyRule applies.
   */
  "patchTypeId": Array<string>;
  /**
   * Severity to which this CompliancePolicyRule applies.
   */
  "severity"?: Array<CreateCompliancePolicyRuleDetails.Severity>;
  "patchSelection":
    | model.PatchLevelSelectionDetails
    | model.PatchReleaseDateSelectionDetails
    | model.PatchNameSelectionDetails;
  /**
   * Grace period in days,weeks,months or years the exemption is applicable for the rule.
   * This enables a grace period when Fleet Application Management doesn't report the product as noncompliant when patch is not applied.
   *
   */
  "gracePeriod"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateCompliancePolicyRuleDetails {
  export enum Severity {
    Critical = "CRITICAL",
    High = "HIGH",
    Medium = "MEDIUM",
    Low = "LOW"
  }

  export function getJsonObj(obj: CreateCompliancePolicyRuleDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "productVersion": obj.productVersion
          ? model.ProductVersionDetails.getJsonObj(obj.productVersion)
          : undefined,

        "patchSelection": obj.patchSelection
          ? model.PatchSelectionDetails.getJsonObj(obj.patchSelection)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateCompliancePolicyRuleDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "productVersion": obj.productVersion
          ? model.ProductVersionDetails.getDeserializedJsonObj(obj.productVersion)
          : undefined,

        "patchSelection": obj.patchSelection
          ? model.PatchSelectionDetails.getDeserializedJsonObj(obj.patchSelection)
          : undefined
      }
    };

    return jsonObj;
  }
}
