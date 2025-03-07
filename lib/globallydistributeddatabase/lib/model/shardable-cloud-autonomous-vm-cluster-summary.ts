/**
 * Globally Distributed Database
 * Use the Globally Distributed Database service APIs to create and manage distributed databases.
 * OpenAPI spec version: 20230301
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
 * Shardable cloud autonomous vm cluster summary.
 */
export interface ShardableCloudAutonomousVmClusterSummary {
  /**
   * Cloud autonomous vmcluster identifier
   */
  "id": string;
  /**
   * Cloud autonomous vmcluster compartment id
   */
  "compartmentId": string;
  /**
   * Lifecycle states for shardable Cloud autonomous vm cluster.
   */
  "lifecycleState": ShardableCloudAutonomousVmClusterSummary.LifecycleState;
  /**
   * Detailed message for the lifecycle state.
   */
  "lifecycleStateDetails"?: string;
  /**
   * Cloud autonomous vmcluster displayName
   */
  "displayName": string;
  /**
   * The compute model of the Cloud Autonomous VM Cluster.
   */
  "computeModel"?: string;
  /**
   * The number of Autonomous Container Databases that can be created with the currently available local storage. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "availableContainerDatabases"?: number;
  /**
   * CPU cores available for allocation to Autonomous Databases. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "availableCpus"?: number;
  /**
   * The name of the availability domain that the cloud Autonomous VM cluster is located in.
   * The format of the availability domain is the same as returned by Cloud Autonomous VM Cluster API.
   *
   */
  "availabilityDomain"?: string;
  /**
   * The data disk group size allocated for Autonomous Databases, in TBs. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "autonomousDataStorageSizeInTBs"?: number;
  /**
   * The data disk group size available for Autonomous Databases, in TBs. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "availableAutonomousDataStorageSizeInTBs"?: number;
  /**
   * Cloud Exadata Infrastructure Identifier.
   */
  "cloudExadataInfrastructureId"?: string;
  /**
   * The time zone of the Cloud Autonomous VM Cluster.
   */
  "clusterTimeZone"?: string;
  /**
   * The total number of Autonomous Container Databases that can be created with the allocated local storage. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalContainerDatabases"?: number;
  /**
   * Cloud autonomous vmcluster subnet id
   */
  "subnetId"?: string;
  /**
   * Cloud autonomous vmcluster shape
   */
  "shape"?: string;
  /**
   * Cloud autonomous vmcluster node count Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "nodeCount"?: number;
  /**
   * The Oracle license model that applies to the Oracle Autonomous Database.
   */
  "licenseModel"?: string;
  /**
   * The memory allocated in GBs. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "memorySizeInGBs"?: number;
  /**
   * The amount of memory (in GBs) enabled per OCPU or ECPU. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "memoryPerOracleComputeUnitInGBs"?: number;
  /**
   * The number of CPU cores on the cloud Autonomous VM cluster. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "cpuCoreCount"?: number;
  /**
   * The number of CPU cores enabled per VM cluster node. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "cpuCoreCountPerNode"?: number;
  /**
   * The number of CPU cores on the cloud Autonomous VM cluster. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "ocpuCount"?: number;
  /**
   * The CPUs that continue to be included in the count of CPUs available to the Autonomous Container Database even after one of its Autonomous Database is terminated or scaled down. You can release them to the available CPUs at its parent Autonomous VM Cluster level by restarting the Autonomous Container Database. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "reclaimableCpus"?: number;
  /**
   * Number of Autonomous Container Databases that can be created in the Autonomous VM Cluster Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "provisionableAutonomousContainerDatabases"?: number;
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

export namespace ShardableCloudAutonomousVmClusterSummary {
  export enum LifecycleState {
    Active = "ACTIVE",
    Failed = "FAILED",
    NeedsAttention = "NEEDS_ATTENTION",
    Inactive = "INACTIVE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Updating = "UPDATING",
    Creating = "CREATING",
    Unavailable = "UNAVAILABLE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ShardableCloudAutonomousVmClusterSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ShardableCloudAutonomousVmClusterSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
