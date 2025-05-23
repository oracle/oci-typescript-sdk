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
 * Autonomous VM Cluster usage details, including the Autonomous Container Databases usage.
 *
 */
export interface AutonomousVmClusterResourceUsage {
  /**
   * The user-friendly name for the Autonomous VM cluster. The name does not need to be unique.
   */
  "displayName": string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the Autonomous VM cluster.
   */
  "id"?: string;
  /**
   * The data disk group size allocated for Autonomous Databases, in TBs. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "autonomousDataStorageSizeInTBs"?: number;
  /**
   * The local node storage allocated in GBs. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "dbNodeStorageSizeInGBs"?: number;
  /**
   * The memory allocated in GBs. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "memorySizeInGBs"?: number;
  /**
   * The total number of Autonomous Container Databases that can be created. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalContainerDatabases"?: number;
  /**
   * The data disk group size available for Autonomous Databases, in TBs. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "availableAutonomousDataStorageSizeInTBs"?: number;
  /**
   * The data disk group size used for Autonomous Databases, in TBs. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "usedAutonomousDataStorageSizeInTBs"?: number;
  /**
   * If true, database backup on local Exadata storage is configured for the Autonomous VM cluster. If false, database backup on local Exadata storage is not available in the Autonomous VM cluster.
   */
  "isLocalBackupEnabled"?: boolean;
  /**
   * Total exadata storage allocated for the Autonomous VM Cluster. DATA + RECOVERY + SPARSE + any overhead in TBs. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "exadataStorageInTBs"?: number;
  /**
   * The amount of memory (in GBs) to be enabled per each CPU core. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "memoryPerOracleComputeUnitInGBs"?: number;
  /**
   * The number of CPU cores enabled on the Autonomous VM cluster. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalCpus"?: number;
  /**
   * The number of CPU cores alloted to the Autonomous Container Databases in an Autonomous VM cluster. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "usedCpus"?: number;
  /**
   * The number of CPU cores available. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "availableCpus"?: number;
  /**
   * CPU cores that continue to be included in the count of OCPUs available to the
   * Autonomous Container Database even after one of its Autonomous Database is terminated or scaled down.
   * You can release them to the available OCPUs at its parent AVMC level by restarting the Autonomous Container Database.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "reclaimableCpus"?: number;
  /**
   * The number of CPUs provisioned in an Autonomous VM Cluster. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "provisionedCpus"?: number;
  /**
   * The number of CPUs reserved in an Autonomous VM Cluster. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "reservedCpus"?: number;
  /**
   * The number of provisionable Autonomous Container Databases in an Autonomous VM Cluster. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "provisionableAutonomousContainerDatabases"?: number;
  /**
   * The number of provisioned Autonomous Container Databases in an Autonomous VM Cluster. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "provisionedAutonomousContainerDatabases"?: number;
  /**
   * The number of non-provisionable Autonomous Container Databases in an Autonomous VM Cluster. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "nonProvisionableAutonomousContainerDatabases"?: number;
  /**
   * List of autonomous vm cluster resource usages.
   */
  "autonomousVmResourceUsage"?: Array<model.AutonomousVmResourceUsage>;
}

export namespace AutonomousVmClusterResourceUsage {
  export function getJsonObj(obj: AutonomousVmClusterResourceUsage): object {
    const jsonObj = {
      ...obj,
      ...{
        "autonomousVmResourceUsage": obj.autonomousVmResourceUsage
          ? obj.autonomousVmResourceUsage.map(item => {
              return model.AutonomousVmResourceUsage.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AutonomousVmClusterResourceUsage): object {
    const jsonObj = {
      ...obj,
      ...{
        "autonomousVmResourceUsage": obj.autonomousVmResourceUsage
          ? obj.autonomousVmResourceUsage.map(item => {
              return model.AutonomousVmResourceUsage.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
