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
 * Version for the runbook.
 */
export interface Version {
  /**
   * A set of tasks to execute in the runbook.
   */
  "tasks": Array<model.Task>;
  /**
   * The groups of the runbook.
   *
   */
  "groups": Array<model.Group>;
  "executionWorkflowDetails": model.ExecutionWorkflowDetails;
  "rollbackWorkflowDetails"?: model.RollbackWorkflowDetails;
  /**
   * The version of the runbook.
   */
  "version"?: string;
  /**
   * Is this version the latest?
   *
   */
  "isLatest"?: boolean;
}

export namespace Version {
  export function getJsonObj(obj: Version): object {
    const jsonObj = {
      ...obj,
      ...{
        "tasks": obj.tasks
          ? obj.tasks.map(item => {
              return model.Task.getJsonObj(item);
            })
          : undefined,
        "groups": obj.groups
          ? obj.groups.map(item => {
              return model.Group.getJsonObj(item);
            })
          : undefined,
        "executionWorkflowDetails": obj.executionWorkflowDetails
          ? model.ExecutionWorkflowDetails.getJsonObj(obj.executionWorkflowDetails)
          : undefined,
        "rollbackWorkflowDetails": obj.rollbackWorkflowDetails
          ? model.RollbackWorkflowDetails.getJsonObj(obj.rollbackWorkflowDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Version): object {
    const jsonObj = {
      ...obj,
      ...{
        "tasks": obj.tasks
          ? obj.tasks.map(item => {
              return model.Task.getDeserializedJsonObj(item);
            })
          : undefined,
        "groups": obj.groups
          ? obj.groups.map(item => {
              return model.Group.getDeserializedJsonObj(item);
            })
          : undefined,
        "executionWorkflowDetails": obj.executionWorkflowDetails
          ? model.ExecutionWorkflowDetails.getDeserializedJsonObj(obj.executionWorkflowDetails)
          : undefined,
        "rollbackWorkflowDetails": obj.rollbackWorkflowDetails
          ? model.RollbackWorkflowDetails.getDeserializedJsonObj(obj.rollbackWorkflowDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
