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
 * GitLab self-hosted Server Build Source for Build Stage
 */
export interface GitlabServerBuildSource extends model.BuildSource {
  /**
   * Connection identifier pertinent to GitLab Server source provider
   */
  "connectionId": string;

  "connectionType": string;
}

export namespace GitlabServerBuildSource {
  export function getJsonObj(obj: GitlabServerBuildSource, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.BuildSource.getJsonObj(obj) as GitlabServerBuildSource)),
      ...{}
    };

    return jsonObj;
  }
  export const connectionType = "GITLAB_SERVER";
  export function getDeserializedJsonObj(
    obj: GitlabServerBuildSource,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.BuildSource.getDeserializedJsonObj(obj) as GitlabServerBuildSource)),
      ...{}
    };

    return jsonObj;
  }
}
