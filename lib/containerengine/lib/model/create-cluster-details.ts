/**
 * Kubernetes Engine API
 * API for the Kubernetes Engine service (also known as the Container Engine for Kubernetes service). Use this API to build, deploy,
and manage cloud-native applications. For more information, see
[Overview of Kubernetes Engine](https://docs.oracle.com/iaas/Content/ContEng/Concepts/contengoverview.htm).

 * OpenAPI spec version: 20180222
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
 * The properties that define a request to create a cluster.
 */
export interface CreateClusterDetails {
  /**
   * The name of the cluster. Avoid entering confidential information.
   */
  "name": string;
  /**
   * The OCID of the compartment in which to create the cluster.
   */
  "compartmentId": string;
  /**
   * The network configuration for access to the Cluster control plane.
   *
   */
  "endpointConfig"?: model.CreateClusterEndpointConfigDetails;
  /**
   * The OCID of the virtual cloud network (VCN) in which to create the cluster.
   */
  "vcnId": string;
  /**
   * The version of Kubernetes to install into the cluster masters.
   */
  "kubernetesVersion": string;
  /**
   * The OCID of the KMS key to be used as the master encryption key for Kubernetes secret encryption.
   * When used, {@code kubernetesVersion} must be at least {@code v1.13.0}.
   *
   */
  "kmsKeyId"?: string;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {\"Department\": \"Finance\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Optional attributes for the cluster.
   */
  "options"?: model.ClusterCreateOptions;
  /**
   * The image verification policy for signature validation. Once a policy is created and enabled with
   * one or more kms keys, the policy will ensure all images deployed has been signed with the key(s)
   * attached to the policy.
   *
   */
  "imagePolicyConfig"?: model.CreateImagePolicyConfigDetails;
  /**
   * Available CNIs and network options for existing and new node pools of the cluster
   */
  "clusterPodNetworkOptions"?: Array<model.ClusterPodNetworkOptionDetails>;
  /**
   * Type of cluster
   */
  "type"?: model.ClusterType;
}

export namespace CreateClusterDetails {
  export function getJsonObj(obj: CreateClusterDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "endpointConfig": obj.endpointConfig
          ? model.CreateClusterEndpointConfigDetails.getJsonObj(obj.endpointConfig)
          : undefined,

        "options": obj.options ? model.ClusterCreateOptions.getJsonObj(obj.options) : undefined,
        "imagePolicyConfig": obj.imagePolicyConfig
          ? model.CreateImagePolicyConfigDetails.getJsonObj(obj.imagePolicyConfig)
          : undefined,
        "clusterPodNetworkOptions": obj.clusterPodNetworkOptions
          ? obj.clusterPodNetworkOptions.map(item => {
              return model.ClusterPodNetworkOptionDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateClusterDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "endpointConfig": obj.endpointConfig
          ? model.CreateClusterEndpointConfigDetails.getDeserializedJsonObj(obj.endpointConfig)
          : undefined,

        "options": obj.options
          ? model.ClusterCreateOptions.getDeserializedJsonObj(obj.options)
          : undefined,
        "imagePolicyConfig": obj.imagePolicyConfig
          ? model.CreateImagePolicyConfigDetails.getDeserializedJsonObj(obj.imagePolicyConfig)
          : undefined,
        "clusterPodNetworkOptions": obj.clusterPodNetworkOptions
          ? obj.clusterPodNetworkOptions.map(item => {
              return model.ClusterPodNetworkOptionDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
