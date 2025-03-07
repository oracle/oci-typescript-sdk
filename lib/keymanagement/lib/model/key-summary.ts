/**
 * Vault Key Management API
 * Use the Key Management API to manage vaults and keys. For more information, see [Managing Vaults](https://docs.oracle.com/iaas/Content/KeyManagement/Tasks/managingvaults.htm) and [Managing Keys](https://docs.oracle.com/iaas/Content/KeyManagement/Tasks/managingkeys.htm).

 * OpenAPI spec version: release
 * Contact: sparta_kms_us_grp@oracle.com
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
 * The details of the Key.
 */
export interface KeySummary {
  /**
   * The OCID of the compartment that contains the key.
   */
  "compartmentId": string;
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * A user-friendly name for the key. It does not have to be unique, and it is changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName": string;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {\"Department\": \"Finance\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * The OCID of the key.
   */
  "id": string;
  /**
    * The key's current lifecycle state.
* <p>
Example: {@code ENABLED}
* 
    */
  "lifecycleState": KeySummary.LifecycleState;
  /**
    * The date and time the key was created, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format.
* <p>
Example: {@code 2018-04-03T21:10:29.600Z}
* 
    */
  "timeCreated": Date;
  /**
   * The OCID of the vault that contains the key.
   */
  "vaultId": string;
  /**
   * The key's protection mode indicates how the key persists and where cryptographic operations that use the key are performed.
   * A protection mode of {@code HSM} means that the key persists on a hardware security module (HSM) and all cryptographic operations are performed inside
   * the HSM. A protection mode of {@code SOFTWARE} means that the key persists on the server, protected by the vault's RSA wrapping key which persists
   * on the HSM. All cryptographic operations that use a key with a protection mode of {@code SOFTWARE} are performed on the server. By default,
   * a key's protection mode is set to {@code HSM}. You can't change a key's protection mode after the key is created or imported.
   * A protection mode of {@code EXTERNAL} mean that the key persists on the customer's external key manager which is hosted externally outside of oracle.
   * Oracle only hold a reference to that key.
   * All cryptographic operations that use a key with a protection mode of {@code EXTERNAL} are performed by external key manager.
   *
   */
  "protectionMode"?: KeySummary.ProtectionMode;
  /**
   * The algorithm used by a key's key versions to encrypt or decrypt data.
   */
  "algorithm"?: KeySummary.Algorithm;
  "externalKeyReferenceDetails"?: model.ExternalKeyReferenceDetails;
  /**
   * A parameter specifying whether the auto key rotation is enabled or not.
   */
  "isAutoRotationEnabled"?: boolean;
}

export namespace KeySummary {
  export enum LifecycleState {
    Creating = "CREATING",
    Enabling = "ENABLING",
    Enabled = "ENABLED",
    Disabling = "DISABLING",
    Disabled = "DISABLED",
    Deleting = "DELETING",
    Deleted = "DELETED",
    PendingDeletion = "PENDING_DELETION",
    SchedulingDeletion = "SCHEDULING_DELETION",
    CancellingDeletion = "CANCELLING_DELETION",
    Updating = "UPDATING",
    BackupInProgress = "BACKUP_IN_PROGRESS",
    Restoring = "RESTORING",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum ProtectionMode {
    Hsm = "HSM",
    Software = "SOFTWARE",
    External = "EXTERNAL",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Algorithm {
    Aes = "AES",
    Rsa = "RSA",
    Ecdsa = "ECDSA",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: KeySummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "externalKeyReferenceDetails": obj.externalKeyReferenceDetails
          ? model.ExternalKeyReferenceDetails.getJsonObj(obj.externalKeyReferenceDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: KeySummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "externalKeyReferenceDetails": obj.externalKeyReferenceDetails
          ? model.ExternalKeyReferenceDetails.getDeserializedJsonObj(
              obj.externalKeyReferenceDetails
            )
          : undefined
      }
    };

    return jsonObj;
  }
}
