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
 * The details of database security feature usage available on a given compartment.
 */
export interface SecurityFeatureSummary {
  /**
   * The OCID of the compartment.
   */
  "compartmentId": string;
  /**
   * The OCID of the target database.
   */
  "targetId": string;
  /**
   * The OCID of the assessment that generates this security feature usage result.
   */
  "assessmentId": string;
  /**
   * The usage of security feature - Unified Audit.
   */
  "unifiedAudit": SecurityFeatureSummary.UnifiedAudit;
  /**
   * The usage of security feature - Fine Grained Audit.
   */
  "fineGrainedAudit": SecurityFeatureSummary.FineGrainedAudit;
  /**
   * The usage of security feature - Traditional Audit.
   */
  "traditionalAudit": SecurityFeatureSummary.TraditionalAudit;
  /**
   * The usage of security feature - Database Vault.
   */
  "databaseVault": SecurityFeatureSummary.DatabaseVault;
  /**
   * The usage of security feature - Privilege Analysis.
   */
  "privilegeAnalysis": SecurityFeatureSummary.PrivilegeAnalysis;
  /**
   * The usage of security feature - Tablespace Encryption.
   */
  "tablespaceEncryption": SecurityFeatureSummary.TablespaceEncryption;
  /**
   * The usage of security feature - Column Encryption.
   */
  "columnEncryption": SecurityFeatureSummary.ColumnEncryption;
  /**
   * The usage of security feature - Network Encryption.
   */
  "networkEncryption": SecurityFeatureSummary.NetworkEncryption;
  /**
   * The usage of security feature - Password Authentication.
   */
  "passwordAuthentication": SecurityFeatureSummary.PasswordAuthentication;
  /**
   * The usage of security feature - Global Authentication.
   */
  "globalAuthentication": SecurityFeatureSummary.GlobalAuthentication;
  /**
   * The usage of security feature - External Authentication.
   */
  "externalAuthentication": SecurityFeatureSummary.ExternalAuthentication;
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

export namespace SecurityFeatureSummary {
  export enum UnifiedAudit {
    Enabled = "ENABLED",
    Disabled = "DISABLED",
    None = "NONE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum FineGrainedAudit {
    Enabled = "ENABLED",
    Disabled = "DISABLED",
    None = "NONE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum TraditionalAudit {
    Enabled = "ENABLED",
    Disabled = "DISABLED",
    None = "NONE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum DatabaseVault {
    Enabled = "ENABLED",
    Disabled = "DISABLED",
    None = "NONE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum PrivilegeAnalysis {
    Enabled = "ENABLED",
    Disabled = "DISABLED",
    None = "NONE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum TablespaceEncryption {
    Enabled = "ENABLED",
    Disabled = "DISABLED",
    None = "NONE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum ColumnEncryption {
    Enabled = "ENABLED",
    Disabled = "DISABLED",
    None = "NONE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum NetworkEncryption {
    Enabled = "ENABLED",
    Disabled = "DISABLED",
    None = "NONE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum PasswordAuthentication {
    Enabled = "ENABLED",
    Disabled = "DISABLED",
    None = "NONE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum GlobalAuthentication {
    Enabled = "ENABLED",
    Disabled = "DISABLED",
    None = "NONE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum ExternalAuthentication {
    Enabled = "ENABLED",
    Disabled = "DISABLED",
    None = "NONE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: SecurityFeatureSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SecurityFeatureSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
