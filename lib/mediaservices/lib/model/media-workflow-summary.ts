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
 * Summary of the MediaWorkflow.
 */
export interface MediaWorkflowSummary {
  /**
   * Unique identifier that is immutable on creation.
   */
  "id": string;
  /**
   * Name for the MediaWorkflow. Does not have to be unique, and it's changeable. Avoid entering confidential information.
   */
  "displayName"?: string;
  /**
   * Compartment Identifier.
   */
  "compartmentId": string;
  /**
   * The time when the MediaWorkflow was created. An RFC3339 formatted datetime string.
   */
  "timeCreated"?: Date;
  /**
   * The time when the MediaWorkflow was updated. An RFC3339 formatted datetime string.
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the MediaWorkflow.
   */
  "lifecycleState"?: string;
  /**
   * A message describing the current state in more detail. For example, can be used to provide actionable information for a resource in Failed state.
   */
  "lifecycleDetails"?: string;
  /**
   * The version of MediaWorkflow. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "version"?: number;
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
  /**
   * Locks associated with this resource.
   */
  "locks"?: Array<model.ResourceLock>;
}

export namespace MediaWorkflowSummary {
  export function getJsonObj(obj: MediaWorkflowSummary): object {
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

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: MediaWorkflowSummary): object {
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

    return jsonObj;
  }
}
