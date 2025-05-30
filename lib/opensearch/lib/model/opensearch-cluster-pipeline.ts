/**
 * OpenSearch Service API
 * The OpenSearch service API provides access to OCI Search Service with OpenSearch.
 * OpenAPI spec version: 20180828
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
 * An OpenSearch cluster Pipeline resource. An cluster is set of instances that provide OpenSearch functionality in OCI Search Service with OpenSearch.
 * For more information, see [Cluster Pipelines](https://docs.oracle.com/iaas/Content/search-opensearch/Concepts/ociopensearchpipeline.htm).
 *
 */
export interface OpensearchClusterPipeline {
  /**
   * The OCID of the cluster pipeline.
   */
  "id": string;
  /**
   * The name of the pipeline. Avoid entering confidential information.
   */
  "displayName": string;
  /**
   * The OCID of the compartment where the pipeline is located.
   */
  "compartmentId": string;
  /**
   * The OCID of the pipeline's VCN.
   */
  "vcnId": string;
  /**
   * The OCID of the pipeline's subnet.
   */
  "subnetId": string;
  /**
   * The OCID for the compartment where the pipeline's VCN is located.
   */
  "vcnCompartmentId": string;
  /**
   * The OCID for the compartment where the pipeline's subnet is located.
   */
  "subnetCompartmentId": string;
  /**
   * The number of OCPUs configured for each pipeline node. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "ocpuCount": number;
  /**
   * The amount of memory in GB, for each pipeline node. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "memoryGB": number;
  /**
   * The number of nodes configured for the pipeline. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "nodeCount": number;
  /**
   * The pipeline node shape.
   */
  "nodeShape"?: string;
  /**
   * The pipeline configuration in YAML format. The command accepts the pipeline configuration as a string or within a .yaml file. If you provide the configuration as a string, each new line must be escaped with \\.
   *
   */
  "pipelineConfigurationBody": string;
  /**
   * The data prepper config in YAML format. The command accepts the data prepper config as a string or within a .yaml file. If you provide the configuration as a string, each new line must be escaped with \\.
   *
   */
  "dataPrepperConfigurationBody": string;
  /**
   * The fully qualified domain name (FQDN) for the cluster's API endpoint.
   */
  "opensearchPipelineFqdn": string;
  /**
   * The pipeline's private IP address.
   */
  "opensearchPipelinePrivateIp": string;
  /**
   * The current state of the cluster backup.
   */
  "lifecycleState": OpensearchClusterPipeline.LifecycleState;
  /**
   * The current state of the pipeline.
   */
  "pipelineMode": OpensearchClusterPipeline.PipelineMode;
  /**
   * The date and time the cluster pipeline was created. Format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   */
  "timeCreated"?: Date;
  /**
   * The amount of time in milliseconds since the pipeline was updated.
   */
  "timeUpdated"?: Date;
  /**
   * The customer IP and the corresponding fully qualified domain name that the pipeline will connect to.
   */
  "reverseConnectionEndpoints"?: Array<model.OpensearchPipelineReverseConnectionEndpoint>;
  /**
   * The OCID of the NSG where the pipeline private endpoint vnic will be attached.
   */
  "nsgId"?: string;
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
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces.
   * Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace OpensearchClusterPipeline {
  export enum LifecycleState {
    Creating = "CREATING",
    Updating = "UPDATING",
    Active = "ACTIVE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum PipelineMode {
    Running = "RUNNING",
    Stopped = "STOPPED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: OpensearchClusterPipeline): object {
    const jsonObj = {
      ...obj,
      ...{
        "reverseConnectionEndpoints": obj.reverseConnectionEndpoints
          ? obj.reverseConnectionEndpoints.map(item => {
              return model.OpensearchPipelineReverseConnectionEndpoint.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: OpensearchClusterPipeline): object {
    const jsonObj = {
      ...obj,
      ...{
        "reverseConnectionEndpoints": obj.reverseConnectionEndpoints
          ? obj.reverseConnectionEndpoints.map(item => {
              return model.OpensearchPipelineReverseConnectionEndpoint.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
