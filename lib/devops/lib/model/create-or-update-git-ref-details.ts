/**
 * DevOps API
 * Use the DevOps API to create DevOps projects, configure code repositories,  add artifacts to deploy, build and test software applications, configure  target deployment environments, and deploy software applications.  For more information, see [DevOps](https://docs.oracle.com/iaas/Content/devops/using/home.htm).
 * OpenAPI spec version: 20210630
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
 * The information needed to create a reference. If the reference already exists, then it can be used to update the reference.
 */
export interface CreateOrUpdateGitRefDetails {
  /**
   * The name of the reference to create or update.
   */
  "refName": string;

  "refType": string;
}

export namespace CreateOrUpdateGitRefDetails {
  export function getJsonObj(obj: CreateOrUpdateGitRefDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "refType" in obj && obj.refType) {
      switch (obj.refType) {
        case "BRANCH":
          return model.CreateOrUpdateGitBranchDetails.getJsonObj(
            <model.CreateOrUpdateGitBranchDetails>(<object>jsonObj),
            true
          );
        case "TAG":
          return model.CreateOrUpdateGitTagDetails.getJsonObj(
            <model.CreateOrUpdateGitTagDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.refType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateOrUpdateGitRefDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "refType" in obj && obj.refType) {
      switch (obj.refType) {
        case "BRANCH":
          return model.CreateOrUpdateGitBranchDetails.getDeserializedJsonObj(
            <model.CreateOrUpdateGitBranchDetails>(<object>jsonObj),
            true
          );
        case "TAG":
          return model.CreateOrUpdateGitTagDetails.getDeserializedJsonObj(
            <model.CreateOrUpdateGitTagDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.refType}`);
      }
    }
    return jsonObj;
  }
}
