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
 * User action details.
 * This can be performed on a failed/paused task or action group.
 *
 */
export interface UserActionDetails {
  /**
   * Action to be Performed.
   *
   */
  "action": UserActionDetails.Action;

  "level": string;
}

export namespace UserActionDetails {
  export enum Action {
    Retry = "RETRY",
    Resume = "RESUME",
    Ignore = "IGNORE",
    Abort = "ABORT"
  }

  export function getJsonObj(obj: UserActionDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "level" in obj && obj.level) {
      switch (obj.level) {
        case "STEP_NAME":
          return model.StepBasedUserActionDetails.getJsonObj(
            <model.StepBasedUserActionDetails>(<object>jsonObj),
            true
          );
        case "ACTION_GROUP":
          return model.ActionGroupBasedUserActionDetails.getJsonObj(
            <model.ActionGroupBasedUserActionDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.level}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UserActionDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "level" in obj && obj.level) {
      switch (obj.level) {
        case "STEP_NAME":
          return model.StepBasedUserActionDetails.getDeserializedJsonObj(
            <model.StepBasedUserActionDetails>(<object>jsonObj),
            true
          );
        case "ACTION_GROUP":
          return model.ActionGroupBasedUserActionDetails.getDeserializedJsonObj(
            <model.ActionGroupBasedUserActionDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.level}`);
      }
    }
    return jsonObj;
  }
}
