/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](https://docs.oracle.com/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
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
 * Details of the Exadata Cloud@Customer VM cluster.
 *
 */
export interface VmClusterSummary {
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the VM cluster.
   */
  "id"?: string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId"?: string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the last patch history. This value is updated as soon as a patch operation starts.
   */
  "lastPatchHistoryEntryId"?: string;
  /**
   * The current state of the VM cluster.
   */
  "lifecycleState"?: VmClusterSummary.LifecycleState;
  /**
   * The user-friendly name for the Exadata Cloud@Customer VM cluster. The name does not need to be unique.
   */
  "displayName"?: string;
  /**
   * The date and time that the VM cluster was created.
   */
  "timeCreated"?: Date;
  /**
   * Additional information about the current lifecycle state.
   */
  "lifecycleDetails"?: string;
  /**
   * The time zone of the Exadata infrastructure. For details, see [Exadata Infrastructure Time Zones](https://docs.oracle.com/iaas/Content/Database/References/timezones.htm).
   */
  "timeZone"?: string;
  /**
   * If true, database backup on local Exadata storage is configured for the VM cluster. If false, database backup on local Exadata storage is not available in the VM cluster.
   *
   */
  "isLocalBackupEnabled"?: boolean;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the Exadata infrastructure.
   */
  "exadataInfrastructureId"?: string;
  /**
   * If true, sparse disk group is configured for the VM cluster. If false, sparse disk group is not created.
   *
   */
  "isSparseDiskgroupEnabled"?: boolean;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the VM cluster network.
   */
  "vmClusterNetworkId"?: string;
  /**
   * The number of enabled CPU cores. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "cpusEnabled"?: number;
  /**
   * The number of enabled OCPU cores. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "ocpusEnabled"?: number;
  /**
   * The memory allocated in GBs. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "memorySizeInGBs"?: number;
  /**
   * The local node storage allocated in GBs. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "dbNodeStorageSizeInGBs"?: number;
  /**
   * Size, in terabytes, of the DATA disk group. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "dataStorageSizeInTBs"?: number;
  /**
   * Size of the DATA disk group in GBs. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "dataStorageSizeInGBs"?: number;
  /**
   * The shape of the Exadata infrastructure. The shape determines the amount of CPU, storage, and memory resources allocated to the instance.
   *
   */
  "shape"?: string;
  /**
   * The Oracle Grid Infrastructure software version for the VM cluster.
   */
  "giVersion"?: string;
  /**
   * Operating system version of the image.
   */
  "systemVersion"?: string;
  /**
   * The public key portion of one or more key pairs used for SSH access to the VM cluster.
   */
  "sshPublicKeys"?: Array<string>;
  /**
   * The Oracle license model that applies to the VM cluster. The default is LICENSE_INCLUDED.
   *
   */
  "licenseModel"?: VmClusterSummary.LicenseModel;
  /**
   * The list of Db server.
   */
  "dbServers"?: Array<string>;
  /**
   * The name of the availability domain that the VM cluster is located in.
   */
  "availabilityDomain"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Department\": \"Finance\"}}
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * System tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
  "dataCollectionOptions"?: model.DataCollectionOptions;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of a grid infrastructure software image. This is a database software image of the type {@code GRID_IMAGE}.
   */
  "giSoftwareImageId"?: string;
  /**
   * Details of the file system configuration of the VM cluster.
   */
  "fileSystemConfigurationDetails"?: Array<model.FileSystemConfigurationDetail>;
  /**
   * The vmcluster type for the VM cluster/Cloud VM cluster.
   */
  "vmClusterType"?: VmClusterSummary.VmClusterType;
  "cloudAutomationUpdateDetails"?: model.CloudAutomationUpdateDetails;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the Exadata Database Storage Vault.
   */
  "exascaleDbStorageVaultId"?: string;
  /**
   * Specifies whether the type of storage management for the VM cluster is ASM or Exascale.
   */
  "storageManagementType"?: VmClusterSummary.StorageManagementType;
  /**
   * The compute model of the Autonomous Database. This is required if using the {@code computeCount} parameter. If using {@code cpuCoreCount} then it is an error to specify {@code computeModel} to a non-null value. ECPU compute model is the recommended model and OCPU compute model is legacy.
   */
  "computeModel"?: VmClusterSummary.ComputeModel;
}

export namespace VmClusterSummary {
  export enum LifecycleState {
    Provisioning = "PROVISIONING",
    Available = "AVAILABLE",
    Updating = "UPDATING",
    Terminating = "TERMINATING",
    Terminated = "TERMINATED",
    Failed = "FAILED",
    MaintenanceInProgress = "MAINTENANCE_IN_PROGRESS",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum LicenseModel {
    LicenseIncluded = "LICENSE_INCLUDED",
    BringYourOwnLicense = "BRING_YOUR_OWN_LICENSE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum VmClusterType {
    Regular = "REGULAR",
    Developer = "DEVELOPER",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum StorageManagementType {
    Asm = "ASM",
    Exascale = "EXASCALE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum ComputeModel {
    Ecpu = "ECPU",
    Ocpu = "OCPU",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: VmClusterSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "dataCollectionOptions": obj.dataCollectionOptions
          ? model.DataCollectionOptions.getJsonObj(obj.dataCollectionOptions)
          : undefined,

        "fileSystemConfigurationDetails": obj.fileSystemConfigurationDetails
          ? obj.fileSystemConfigurationDetails.map(item => {
              return model.FileSystemConfigurationDetail.getJsonObj(item);
            })
          : undefined,

        "cloudAutomationUpdateDetails": obj.cloudAutomationUpdateDetails
          ? model.CloudAutomationUpdateDetails.getJsonObj(obj.cloudAutomationUpdateDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: VmClusterSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "dataCollectionOptions": obj.dataCollectionOptions
          ? model.DataCollectionOptions.getDeserializedJsonObj(obj.dataCollectionOptions)
          : undefined,

        "fileSystemConfigurationDetails": obj.fileSystemConfigurationDetails
          ? obj.fileSystemConfigurationDetails.map(item => {
              return model.FileSystemConfigurationDetail.getDeserializedJsonObj(item);
            })
          : undefined,

        "cloudAutomationUpdateDetails": obj.cloudAutomationUpdateDetails
          ? model.CloudAutomationUpdateDetails.getDeserializedJsonObj(
              obj.cloudAutomationUpdateDetails
            )
          : undefined
      }
    };

    return jsonObj;
  }
}
