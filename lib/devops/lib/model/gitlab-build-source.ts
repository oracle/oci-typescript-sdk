/**
 * DevOps API
 * Use the DevOps APIs to create a DevOps project to group the pipelines,  add reference to target deployment environments, add artifacts to deploy,  and create deployment pipelines needed to deploy your software.
 * OpenAPI spec version: 20210630
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Gitlab Build Source for Build Stage
 */
export interface GitlabBuildSource extends model.BuildSource {
  /**
   * Connection identifier pertinent to GITLAB source provider
   */
  "connectionId": string;

  "connectionType": string;
}

export namespace GitlabBuildSource {
  export function getJsonObj(obj: GitlabBuildSource, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.BuildSource.getJsonObj(obj) as GitlabBuildSource)),
      ...{}
    };

    return jsonObj;
  }
  export const connectionType = "GITLAB";
  export function getDeserializedJsonObj(
    obj: GitlabBuildSource,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.BuildSource.getDeserializedJsonObj(obj) as GitlabBuildSource)),
      ...{}
    };

    return jsonObj;
  }
}