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
 * Details of the Db server.
 *
 */
export interface DbServerSummary {
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the Db server.
   */
  "id"?: string;
  /**
   * The user-friendly name for the Db server. The name does not need to be unique.
   */
  "displayName"?: string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId"?: string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the Exadata infrastructure.
   */
  "exadataInfrastructureId"?: string;
  /**
   * The number of CPU cores enabled on the Db server. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "cpuCoreCount"?: number;
  /**
   * The allocated memory in GBs on the Db server. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "memorySizeInGBs"?: number;
  /**
   * The allocated local node storage in GBs on the Db server. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "dbNodeStorageSizeInGBs"?: number;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the VM Clusters associated with the Db server.
   *
   */
  "vmClusterIds"?: Array<string>;
  /**
   * The list of [OCIDs](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the Autonomous VM Clusters associated with the Db server.
   *
   */
  "autonomousVmClusterIds"?: Array<string>;
  /**
   * The list of [OCIDs](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the Autonomous Virtual Machines associated with the Db server.
   *
   */
  "autonomousVirtualMachineIds"?: Array<string>;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the Db nodes associated with the Db server.
   *
   */
  "dbNodeIds"?: Array<string>;
  /**
   * The shape of the Db server. The shape determines the amount of CPU, storage, and memory resources available.
   *
   */
  "shape"?: string;
  /**
   * The current state of the Db server.
   */
  "lifecycleState"?: DbServerSummary.LifecycleState;
  /**
   * Additional information about the current lifecycle state.
   */
  "lifecycleDetails"?: string;
  /**
   * The total number of CPU cores available. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxCpuCount"?: number;
  /**
   * The total memory available in GBs. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxMemoryInGBs"?: number;
  /**
   * The total local node storage available in GBs. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxDbNodeStorageInGBs"?: number;
  /**
   * The date and time that the Db Server was created.
   */
  "timeCreated"?: Date;
  "dbServerPatchingDetails"?: model.DbServerPatchingDetails;
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
  /**
   * The compute model of the Autonomous Database. This is required if using the {@code computeCount} parameter. If using {@code cpuCoreCount} then it is an error to specify {@code computeModel} to a non-null value. ECPU compute model is the recommended model and OCPU compute model is legacy.
   */
  "computeModel"?: DbServerSummary.ComputeModel;
}

export namespace DbServerSummary {
  export enum LifecycleState {
    Creating = "CREATING",
    Available = "AVAILABLE",
    Unavailable = "UNAVAILABLE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    MaintenanceInProgress = "MAINTENANCE_IN_PROGRESS",
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

  export function getJsonObj(obj: DbServerSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "dbServerPatchingDetails": obj.dbServerPatchingDetails
          ? model.DbServerPatchingDetails.getJsonObj(obj.dbServerPatchingDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DbServerSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "dbServerPatchingDetails": obj.dbServerPatchingDetails
          ? model.DbServerPatchingDetails.getDeserializedJsonObj(obj.dbServerPatchingDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
