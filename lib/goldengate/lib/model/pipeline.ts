/**
 * GoldenGate API
 * Use the Oracle Cloud Infrastructure GoldenGate APIs to perform data replication operations.

 * OpenAPI spec version: 20200407
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Represents the metadata details of a pipeline in the same compartment.
 *
 */
export interface Pipeline {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the pipeline. This option applies when retrieving a pipeline.
   *
   */
  "id": string;
  /**
   * An object's Display Name.
   *
   */
  "displayName": string;
  /**
   * Metadata about this specific object.
   *
   */
  "description"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment being referenced.
   *
   */
  "compartmentId": string;
  /**
   * The Oracle license model that applies to a Deployment.
   *
   */
  "licenseModel": model.LicenseModel;
  /**
   * The Minimum number of OCPUs to be made available for this Deployment.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "cpuCoreCount": number;
  /**
   * Indicates if auto scaling is enabled for the Deployment's CPU core count.
   *
   */
  "isAutoScalingEnabled": boolean;
  "sourceConnectionDetails": model.SourcePipelineConnectionDetails;
  "targetConnectionDetails": model.TargetPipelineConnectionDetails;
  /**
    * A simple key-value pair that is applied without any predefined name, type, or scope. Exists
* for cross-compatibility only.
* <p>
Example: {@code {\"bar-key\": \"value\"}}
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Tags defined for this resource. Each key is predefined and scoped to a namespace.
* <p>
Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
    * The system tags associated with this resource, if any. The system tags are set by Oracle
* Cloud Infrastructure services. Each key is predefined and scoped to namespaces.  For more
* information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {orcl-cloud: {free-tier-retain: true}}}
* 
    */
  "systemTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Locks associated with this resource.
   */
  "locks"?: Array<model.ResourceLock>;
  /**
   * Lifecycle state of the pipeline.
   *
   */
  "lifecycleState": Pipeline.LifecycleState;
  /**
   * Possible lifecycle substates when retrieving a pipeline.
   *
   */
  "lifecycleSubState"?: model.PipelineLifecycleSubState;
  /**
   * Describes the object's current state in detail. For example, it can be used to provide
   * actionable information for a resource in a Failed state.
   *
   */
  "lifecycleDetails"?: string;
  /**
   * The time the resource was created. The format is defined by
   * [RFC3339](https://tools.ietf.org/html/rfc3339), such as {@code 2016-08-25T21:10:29.600Z}.
   *
   */
  "timeCreated": Date;
  /**
   * The time the resource was last updated. The format is defined by
   * [RFC3339](https://tools.ietf.org/html/rfc3339), such as {@code 2016-08-25T21:10:29.600Z}.
   *
   */
  "timeUpdated": Date;

  "recipeType": string;
}

export namespace Pipeline {
  export enum LifecycleState {
    Creating = "CREATING",
    Updating = "UPDATING",
    Active = "ACTIVE",
    NeedsAttention = "NEEDS_ATTENTION",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Pipeline): object {
    const jsonObj = {
      ...obj,
      ...{
        "sourceConnectionDetails": obj.sourceConnectionDetails
          ? model.SourcePipelineConnectionDetails.getJsonObj(obj.sourceConnectionDetails)
          : undefined,
        "targetConnectionDetails": obj.targetConnectionDetails
          ? model.TargetPipelineConnectionDetails.getJsonObj(obj.targetConnectionDetails)
          : undefined,

        "locks": obj.locks
          ? obj.locks.map(item => {
              return model.ResourceLock.getJsonObj(item);
            })
          : undefined
      }
    };

    if (obj && "recipeType" in obj && obj.recipeType) {
      switch (obj.recipeType) {
        case "ZERO_ETL":
          return model.ZeroEtlPipeline.getJsonObj(<model.ZeroEtlPipeline>(<object>jsonObj), true);
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.recipeType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Pipeline): object {
    const jsonObj = {
      ...obj,
      ...{
        "sourceConnectionDetails": obj.sourceConnectionDetails
          ? model.SourcePipelineConnectionDetails.getDeserializedJsonObj(
              obj.sourceConnectionDetails
            )
          : undefined,
        "targetConnectionDetails": obj.targetConnectionDetails
          ? model.TargetPipelineConnectionDetails.getDeserializedJsonObj(
              obj.targetConnectionDetails
            )
          : undefined,

        "locks": obj.locks
          ? obj.locks.map(item => {
              return model.ResourceLock.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    if (obj && "recipeType" in obj && obj.recipeType) {
      switch (obj.recipeType) {
        case "ZERO_ETL":
          return model.ZeroEtlPipeline.getDeserializedJsonObj(
            <model.ZeroEtlPipeline>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.recipeType}`);
      }
    }
    return jsonObj;
  }
}