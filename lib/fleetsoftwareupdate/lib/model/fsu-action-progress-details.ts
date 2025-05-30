/**
 * Exadata Fleet Update service API
 * Use the Exadata Fleet Update service to patch large collections of components directly,
as a single entity, orchestrating the maintenance actions to update all chosen components in the stack in a single cycle.

 * OpenAPI spec version: 20220528
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
 * Progress of the Action in execution. If the Exadata Fleet Update Action has not started yet, this will be omitted.
 *
 */
export interface FsuActionProgressDetails {
  /**
   * Number of targets with jobs in progress.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "inProgressTargets"?: number;
  /**
   * Number of targets with completed jobs.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "completedTargets"?: number;
  /**
   * Number of targets with failed jobs.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "failedTargets"?: number;
  /**
   * Number of targets with jobs waiting for batch to execute or for user to resume.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "waitingTargets"?: number;
  /**
   * Total number of targets impacted by Exadata Fleet Update Action.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalTargets"?: number;
}

export namespace FsuActionProgressDetails {
  export function getJsonObj(obj: FsuActionProgressDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: FsuActionProgressDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
