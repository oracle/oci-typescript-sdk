/**
 * Full Stack Disaster Recovery API
 * Use the Full Stack Disaster Recovery (DR) API to manage disaster recovery for business applications.
Full Stack DR is an OCI disaster recovery orchestration and management service that provides comprehensive disaster 
recovery capabilities for all layers of an application stack, including infrastructure, middleware, database, 
and application.

 * OpenAPI spec version: 20220125
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
 * Properties for a OKE Cluster member of a DR Protection Group.
 */
export interface DrProtectionGroupMemberOkeCluster extends model.DrProtectionGroupMember {
  /**
    * The OCID of the peer OKE cluster.
* This property applies to the OKE cluster member in both the primary and standby region.
* <p>
Example: {@code ocid1.cluster.oc1.uniqueID}
* 
    */
  "peerClusterId"?: string;
  /**
    * The OCID of the compute instance member that is designated as a jump host.
* This compute instance will be used to perform DR operations on the cluster using Oracle Cloud Agent's Run Command feature.
* <p>
Example: {@code ocid1.instance.oc1..uniqueID}
* 
    */
  "jumpHostId"?: string;
  "backupLocation"?: model.OkeBackupLocation;
  "backupConfig"?: model.OkeClusterBackupConfig;
  /**
   * The list of source-to-destination load balancer mappings required for DR operations.
   * This property applies to the OKE cluster member in primary region.
   *
   */
  "loadBalancerMappings"?: Array<model.OkeClusterLoadBalancerMapping>;
  /**
   * The list of source-to-destination network load balancer mappings required for DR operations.
   * This property applies to the OKE cluster member in primary region.
   *
   */
  "networkLoadBalancerMappings"?: Array<model.OkeClusterNetworkLoadBalancerMapping>;
  /**
   * The list of source-to-destination vault mappings required for DR operations.
   * This property applies to the OKE cluster member in primary region.
   *
   */
  "vaultMappings"?: Array<model.OkeClusterVaultMapping>;
  /**
   * The list of node pools with configurations for minimum and maximum node counts.
   * This property applies to the OKE cluster member in both the primary and standby region.
   *
   */
  "managedNodePoolConfigs"?: Array<model.OkeClusterManagedNodePoolConfiguration>;
  /**
   * The list of node pools with configurations for minimum and maximum node counts.
   * This property applies to the OKE cluster member in both the primary and standby region.
   *
   */
  "virtualNodePoolConfigs"?: Array<model.OkeClusterVirtualNodePoolConfiguration>;

  "memberType": string;
}

export namespace DrProtectionGroupMemberOkeCluster {
  export function getJsonObj(
    obj: DrProtectionGroupMemberOkeCluster,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DrProtectionGroupMember.getJsonObj(obj) as DrProtectionGroupMemberOkeCluster)),
      ...{
        "backupLocation": obj.backupLocation
          ? model.OkeBackupLocation.getJsonObj(obj.backupLocation)
          : undefined,
        "backupConfig": obj.backupConfig
          ? model.OkeClusterBackupConfig.getJsonObj(obj.backupConfig)
          : undefined,
        "loadBalancerMappings": obj.loadBalancerMappings
          ? obj.loadBalancerMappings.map(item => {
              return model.OkeClusterLoadBalancerMapping.getJsonObj(item);
            })
          : undefined,
        "networkLoadBalancerMappings": obj.networkLoadBalancerMappings
          ? obj.networkLoadBalancerMappings.map(item => {
              return model.OkeClusterNetworkLoadBalancerMapping.getJsonObj(item);
            })
          : undefined,
        "vaultMappings": obj.vaultMappings
          ? obj.vaultMappings.map(item => {
              return model.OkeClusterVaultMapping.getJsonObj(item);
            })
          : undefined,
        "managedNodePoolConfigs": obj.managedNodePoolConfigs
          ? obj.managedNodePoolConfigs.map(item => {
              return model.OkeClusterManagedNodePoolConfiguration.getJsonObj(item);
            })
          : undefined,
        "virtualNodePoolConfigs": obj.virtualNodePoolConfigs
          ? obj.virtualNodePoolConfigs.map(item => {
              return model.OkeClusterVirtualNodePoolConfiguration.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const memberType = "OKE_CLUSTER";
  export function getDeserializedJsonObj(
    obj: DrProtectionGroupMemberOkeCluster,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DrProtectionGroupMember.getDeserializedJsonObj(
            obj
          ) as DrProtectionGroupMemberOkeCluster)),
      ...{
        "backupLocation": obj.backupLocation
          ? model.OkeBackupLocation.getDeserializedJsonObj(obj.backupLocation)
          : undefined,
        "backupConfig": obj.backupConfig
          ? model.OkeClusterBackupConfig.getDeserializedJsonObj(obj.backupConfig)
          : undefined,
        "loadBalancerMappings": obj.loadBalancerMappings
          ? obj.loadBalancerMappings.map(item => {
              return model.OkeClusterLoadBalancerMapping.getDeserializedJsonObj(item);
            })
          : undefined,
        "networkLoadBalancerMappings": obj.networkLoadBalancerMappings
          ? obj.networkLoadBalancerMappings.map(item => {
              return model.OkeClusterNetworkLoadBalancerMapping.getDeserializedJsonObj(item);
            })
          : undefined,
        "vaultMappings": obj.vaultMappings
          ? obj.vaultMappings.map(item => {
              return model.OkeClusterVaultMapping.getDeserializedJsonObj(item);
            })
          : undefined,
        "managedNodePoolConfigs": obj.managedNodePoolConfigs
          ? obj.managedNodePoolConfigs.map(item => {
              return model.OkeClusterManagedNodePoolConfiguration.getDeserializedJsonObj(item);
            })
          : undefined,
        "virtualNodePoolConfigs": obj.virtualNodePoolConfigs
          ? obj.virtualNodePoolConfigs.map(item => {
              return model.OkeClusterVirtualNodePoolConfiguration.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
