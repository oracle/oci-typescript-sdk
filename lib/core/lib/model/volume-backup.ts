/**
 * Core Services API
 * Use the Core Services API to manage resources such as virtual cloud networks (VCNs),
compute instances, and block storage volumes. For more information, see the console
documentation for the [Networking](https://docs.oracle.com/iaas/Content/Network/Concepts/overview.htm),
[Compute](https://docs.oracle.com/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](https://docs.oracle.com/iaas/Content/Block/Concepts/overview.htm) services.
The required permissions are documented in the
[Details for the Core Services](https://docs.oracle.com/iaas/Content/Identity/Reference/corepolicyreference.htm) article.

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
* A point-in-time copy of a volume that can then be used to create a new block volume
* or recover a block volume. For more information, see
* [Overview of Cloud Volume Storage](https://docs.oracle.com/iaas/Content/Block/Concepts/overview.htm).
* <p>
To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized,
* talk to an administrator. If you're an administrator who needs to write policies to give users access, see
* [Getting Started with Policies](https://docs.oracle.com/iaas/Content/Identity/Concepts/policygetstarted.htm).
* <p>
**Warning:** Oracle recommends that you avoid using any confidential information when you
* supply string values using the API.
* 
*/
export interface VolumeBackup {
  /**
   * The OCID of the compartment that contains the volume backup.
   */
  "compartmentId": string;
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * System tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName": string;
  /**
   * The date and time the volume backup will expire and be automatically deleted.
   * Format defined by [RFC3339](https://tools.ietf.org/html/rfc3339). This parameter will always be present for backups that
   * were created automatically by a scheduled-backup policy. For manually created backups,
   * it will be absent, signifying that there is no expiration time and the backup will
   * last forever until manually deleted.
   *
   */
  "expirationTime"?: Date;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Department\": \"Finance\"}}
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * The OCID of the volume backup.
   */
  "id": string;
  /**
   * The OCID of the Vault service key which is the master encryption key for the volume backup.
   * For more information about the Vault service and encryption keys, see
   * [Overview of Vault service](https://docs.oracle.com/iaas/Content/KeyManagement/Concepts/keyoverview.htm) and
   * [Using Keys](https://docs.oracle.com/iaas/Content/KeyManagement/Tasks/usingkeys.htm).
   *
   */
  "kmsKeyId"?: string;
  /**
   * The current state of a volume backup.
   */
  "lifecycleState": VolumeBackup.LifecycleState;
  /**
   * The size of the volume, in GBs.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "sizeInGBs"?: number;
  /**
   * The size of the volume in MBs. The value must be a multiple of 1024.
   * This field is deprecated. Please use sizeInGBs.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "sizeInMBs"?: number;
  /**
   * Specifies whether the backup was created manually, or via scheduled backup policy.
   *
   */
  "sourceType"?: VolumeBackup.SourceType;
  /**
   * The OCID of the source volume backup.
   */
  "sourceVolumeBackupId"?: string;
  /**
   * The date and time the volume backup was created. This is the time the actual point-in-time image
   * of the volume data was taken. Format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   *
   */
  "timeCreated": Date;
  /**
   * The date and time the request to create the volume backup was received. Format defined by [RFC3339]https://tools.ietf.org/html/rfc3339.
   *
   */
  "timeRequestReceived"?: Date;
  /**
   * The type of a volume backup.
   */
  "type": VolumeBackup.Type;
  /**
   * The size used by the backup, in GBs. It is typically smaller than sizeInGBs, depending on the space
   * consumed on the volume and whether the backup is full or incremental.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "uniqueSizeInGBs"?: number;
  /**
   * The size used by the backup, in MBs. It is typically smaller than sizeInMBs, depending on the space
   * consumed on the volume and whether the backup is full or incremental.
   * This field is deprecated. Please use uniqueSizeInGBs.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "uniqueSizeInMbs"?: number;
  /**
   * The OCID of the volume.
   */
  "volumeId"?: string;
}

export namespace VolumeBackup {
  export enum LifecycleState {
    Creating = "CREATING",
    Available = "AVAILABLE",
    Terminating = "TERMINATING",
    Terminated = "TERMINATED",
    Faulty = "FAULTY",
    RequestReceived = "REQUEST_RECEIVED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum SourceType {
    Manual = "MANUAL",
    Scheduled = "SCHEDULED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Type {
    Full = "FULL",
    Incremental = "INCREMENTAL",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: VolumeBackup): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: VolumeBackup): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
