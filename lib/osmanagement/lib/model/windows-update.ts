/**
 * OS Management API
 * API for the OS Management service. Use these API operations for working
with Managed instances and Managed instance groups.

 * OpenAPI spec version: 20190801
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
 * An update available for a Windows managed instance.
 */
export interface WindowsUpdate {
  /**
   * Windows Update name.
   */
  "displayName": string;
  /**
   * Unique identifier for the Windows update. NOTE - This is not an OCID,
   * but is a unique identifier assigned by Microsoft.
   * Example: {@code 6981d463-cd91-4a26-b7c4-ea4ded9183ed}
   *
   */
  "name": string;
  /**
   * Information about the Windows Update.
   */
  "description"?: string;
  /**
   * The purpose of this update.
   */
  "updateType": model.UpdateTypes;
  /**
   * size of the package in bytes Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "sizeInBytes"?: number;
  /**
   * Indicates whether the update can be installed using OSMS.
   */
  "isEligibleForInstallation"?: model.IsEligibleForInstallation;
  /**
   * List of requirements forinstalling on a managed instances
   */
  "installationRequirements"?: Array<WindowsUpdate.InstallationRequirements>;
  /**
   * Indicates whether a reboot may be required to complete installation of this update.
   */
  "isRebootRequiredForInstallation"?: boolean;
  /**
   * List of the Microsoft Knowledge Base Article Ids related to this Windows Update.
   */
  "kbArticleIds"?: Array<string>;
}

export namespace WindowsUpdate {
  export enum InstallationRequirements {
    EulaAcceptanceRequired = "EULA_ACCEPTANCE_REQUIRED",
    SoftwareMediaRequired = "SOFTWARE_MEDIA_REQUIRED",
    UserInteractionRequired = "USER_INTERACTION_REQUIRED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: WindowsUpdate): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: WindowsUpdate): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
