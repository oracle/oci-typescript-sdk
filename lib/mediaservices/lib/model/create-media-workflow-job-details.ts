/**
 * Media Services API
 * Media Services (includes Media Flow and Media Streams) is a fully managed service for processing media (video) source content. Use Media Flow and Media Streams to transcode and package digital video using configurable workflows and stream video outputs.

Use the Media Services API to configure media workflows and run Media Flow jobs, create distribution channels, ingest assets, create Preview URLs and play assets. For more information, see [Media Flow](https://docs.oracle.com/iaas/Content/dms-mediaflow/home.htm) and [Media Streams](https://docs.oracle.com/iaas/Content/dms-mediastream/home.htm).

 * OpenAPI spec version: 20211101
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
 * Information to run the MediaWorkflow.
 */
export interface CreateMediaWorkflowJobDetails {
  /**
   * Configurations to be applied to this run of the workflow.
   */
  "mediaWorkflowConfigurationIds"?: Array<string>;
  /**
   * ID of the compartment in which the job should be created.
   */
  "compartmentId": string;
  /**
   * Name of the Media Workflow Job. Does not have to be unique. Avoid entering confidential information.
   */
  "displayName"?: string;
  /**
   * Parameters that override parameters specified in MediaWorkflowTaskDeclarations, the MediaWorkflow,
   * the MediaWorkflow's MediaWorkflowConfigurations and the MediaWorkflowConfigurations of this
   * MediaWorkflowJob. The parameters are given as JSON. The top level and 2nd level elements must be
   * JSON objects (vs arrays, scalars, etc). The top level keys refer to a task's key and the 2nd level
   * keys refer to a parameter's name.
   *
   */
  "parameters"?: { [key: string]: any };
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
   * Locks associated with this resource.
   */
  "locks"?: Array<model.ResourceLock>;

  "workflowIdentifierType": string;
}

export namespace CreateMediaWorkflowJobDetails {
  export function getJsonObj(obj: CreateMediaWorkflowJobDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "locks": obj.locks
          ? obj.locks.map(item => {
              return model.ResourceLock.getJsonObj(item);
            })
          : undefined
      }
    };

    if (obj && "workflowIdentifierType" in obj && obj.workflowIdentifierType) {
      switch (obj.workflowIdentifierType) {
        case "NAME":
          return model.CreateMediaWorkflowJobByNameDetails.getJsonObj(
            <model.CreateMediaWorkflowJobByNameDetails>(<object>jsonObj),
            true
          );
        case "ID":
          return model.CreateMediaWorkflowJobByIdDetails.getJsonObj(
            <model.CreateMediaWorkflowJobByIdDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger)
            common.LOG.logger.info(`Unknown value for: ${obj.workflowIdentifierType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateMediaWorkflowJobDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "locks": obj.locks
          ? obj.locks.map(item => {
              return model.ResourceLock.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    if (obj && "workflowIdentifierType" in obj && obj.workflowIdentifierType) {
      switch (obj.workflowIdentifierType) {
        case "NAME":
          return model.CreateMediaWorkflowJobByNameDetails.getDeserializedJsonObj(
            <model.CreateMediaWorkflowJobByNameDetails>(<object>jsonObj),
            true
          );
        case "ID":
          return model.CreateMediaWorkflowJobByIdDetails.getDeserializedJsonObj(
            <model.CreateMediaWorkflowJobByIdDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger)
            common.LOG.logger.info(`Unknown value for: ${obj.workflowIdentifierType}`);
      }
    }
    return jsonObj;
  }
}
