/**
 * DevOps API
 * Use the DevOps API to create DevOps projects, configure code repositories,  add artifacts to deploy, build and test software applications, configure  target deployment environments, and deploy software applications.  For more information, see [DevOps](/Content/devops/using/home.htm).
 * OpenAPI spec version: 20210630
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
 * Object that contains the sync status for a specific branch name.
 */
export interface ForkSyncStatusSummary {
  /**
   * Sync status for the provided branch.
   */
  "syncStatus": ForkSyncStatusSummary.SyncStatus;
  /**
   * The OCID of the child repository.
   */
  "repositoryId": string;
  /**
   * The branch in the child repository we are checking the sync status of.
   */
  "branchName": string;
}

export namespace ForkSyncStatusSummary {
  export enum SyncStatus {
    InSync = "IN_SYNC",
    SyncInProgress = "SYNC_IN_PROGRESS",
    OutOfSync = "OUT_OF_SYNC",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ForkSyncStatusSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ForkSyncStatusSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}