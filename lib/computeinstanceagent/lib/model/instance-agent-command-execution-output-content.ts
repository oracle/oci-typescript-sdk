/**
 * Oracle Cloud Agent API
 * API for the Oracle Cloud Agent software running on compute instances. Oracle Cloud Agent
is a lightweight process that monitors and manages compute instances.

 * OpenAPI spec version: 20180530
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
 * The execution output from a command.
 */
export interface InstanceAgentCommandExecutionOutputContent {
  /**
   * The exit code for the command. Exit code {@code 0} indicates success. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "exitCode": number;
  /**
   * An optional status message that Oracle Cloud Agent can populate for additional troubleshooting.
   *
   */
  "message"?: string;

  "outputType": string;
}

export namespace InstanceAgentCommandExecutionOutputContent {
  export function getJsonObj(obj: InstanceAgentCommandExecutionOutputContent): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "outputType" in obj && obj.outputType) {
      switch (obj.outputType) {
        case "TEXT":
          return model.InstanceAgentCommandExecutionOutputViaTextDetails.getJsonObj(
            <model.InstanceAgentCommandExecutionOutputViaTextDetails>(<object>jsonObj),
            true
          );
        case "OBJECT_STORAGE_URI":
          return model.InstanceAgentCommandExecutionOutputViaObjectStorageUriDetails.getJsonObj(
            <model.InstanceAgentCommandExecutionOutputViaObjectStorageUriDetails>(<object>jsonObj),
            true
          );
        case "OBJECT_STORAGE_TUPLE":
          return model.InstanceAgentCommandExecutionOutputViaObjectStorageTupleDetails.getJsonObj(
            <model.InstanceAgentCommandExecutionOutputViaObjectStorageTupleDetails>(
              (<object>jsonObj)
            ),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.outputType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: InstanceAgentCommandExecutionOutputContent): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "outputType" in obj && obj.outputType) {
      switch (obj.outputType) {
        case "TEXT":
          return model.InstanceAgentCommandExecutionOutputViaTextDetails.getDeserializedJsonObj(
            <model.InstanceAgentCommandExecutionOutputViaTextDetails>(<object>jsonObj),
            true
          );
        case "OBJECT_STORAGE_URI":
          return model.InstanceAgentCommandExecutionOutputViaObjectStorageUriDetails.getDeserializedJsonObj(
            <model.InstanceAgentCommandExecutionOutputViaObjectStorageUriDetails>(<object>jsonObj),
            true
          );
        case "OBJECT_STORAGE_TUPLE":
          return model.InstanceAgentCommandExecutionOutputViaObjectStorageTupleDetails.getDeserializedJsonObj(
            <model.InstanceAgentCommandExecutionOutputViaObjectStorageTupleDetails>(
              (<object>jsonObj)
            ),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.outputType}`);
      }
    }
    return jsonObj;
  }
}
