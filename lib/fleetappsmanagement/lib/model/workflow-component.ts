/**
 * Fleet Application Management Service API
 * Fleet Application Management provides a centralized platform to help you automate resource management tasks, validate patch compliance, and enhance operational efficiency across an enterprise.

 * OpenAPI spec version: 20250228
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
 * Workflow Component Details.
 */
export interface WorkflowComponent {
  "type": string;
}

export namespace WorkflowComponent {
  export function getJsonObj(obj: WorkflowComponent): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "PARALLEL_TASK_GROUP":
          return model.WorkflowGroupComponent.getJsonObj(
            <model.WorkflowGroupComponent>(<object>jsonObj),
            true
          );
        case "TASK":
          return model.WorkflowTaskComponent.getJsonObj(
            <model.WorkflowTaskComponent>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: WorkflowComponent): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "PARALLEL_TASK_GROUP":
          return model.WorkflowGroupComponent.getDeserializedJsonObj(
            <model.WorkflowGroupComponent>(<object>jsonObj),
            true
          );
        case "TASK":
          return model.WorkflowTaskComponent.getDeserializedJsonObj(
            <model.WorkflowTaskComponent>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
}
