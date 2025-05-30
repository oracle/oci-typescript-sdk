/**
 * Fusion Applications Environment Management API
 * Use the Fusion Applications Environment Management API to manage the environments where your Fusion Applications run. For more information, see the [Fusion Applications Environment Management documentation](https://docs.oracle.com/iaas/Content/fusion-applications/home.htm).
 * OpenAPI spec version: 20211201
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
 * Summary of the internal FA Environment.
 */
export interface FusionEnvironmentSummary {
  /**
   * Unique identifier that is immutable on creation
   */
  "id": string;
  /**
   * FusionEnvironment Identifier, can be renamed
   */
  "displayName": string;
  /**
   * The next maintenance for this environment
   */
  "timeUpcomingMaintenance"?: Date;
  "maintenancePolicy"?: model.GetMaintenancePolicyDetails;
  /**
   * Compartment Identifier
   */
  "compartmentId": string;
  /**
   * FusionEnvironmentFamily Identifier
   */
  "fusionEnvironmentFamilyId"?: string;
  /**
   * List of subscription IDs.
   */
  "subscriptionIds"?: Array<string>;
  /**
   * Patch bundle names
   */
  "appliedPatchBundles"?: Array<string>;
  /**
   * Type of the FusionEnvironment.
   */
  "fusionEnvironmentType": string;
  /**
   * Version of Fusion Apps used by this environment
   */
  "version"?: string;
  /**
   * Public URL
   */
  "publicUrl"?: string;
  /**
   * DNS prefix
   */
  "dnsPrefix"?: string;
  /**
   * Language packs
   */
  "additionalLanguagePacks"?: Array<string>;
  /**
   * The lockbox Id of this fusion environment. If there's no lockbox id, this field will be null
   */
  "lockboxId"?: string;
  /**
   * If it's true, then the Break Glass feature is enabled
   */
  "isBreakGlassEnabled"?: boolean;
  /**
   * The time the the FusionEnvironment was created. An RFC3339 formatted datetime string
   */
  "timeCreated"?: Date;
  /**
   * The time the FusionEnvironment was updated. An RFC3339 formatted datetime string
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the FusionEnvironment.
   */
  "lifecycleState": string;
  /**
   * A message describing the current state in more detail. For example, can be used to provide actionable information for a resource in Failed state.
   */
  "lifecycleDetails"?: string;
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

export namespace FusionEnvironmentSummary {
  export function getJsonObj(obj: FusionEnvironmentSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "maintenancePolicy": obj.maintenancePolicy
          ? model.GetMaintenancePolicyDetails.getJsonObj(obj.maintenancePolicy)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: FusionEnvironmentSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "maintenancePolicy": obj.maintenancePolicy
          ? model.GetMaintenancePolicyDetails.getDeserializedJsonObj(obj.maintenancePolicy)
          : undefined
      }
    };

    return jsonObj;
  }
}
