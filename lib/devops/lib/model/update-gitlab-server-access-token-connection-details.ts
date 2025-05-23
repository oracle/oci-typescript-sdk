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
 * The details for updating a connection of the type {@code GITLAB_SERVER_ACCESS_TOKEN}.
 * This type corresponds to a connection in GitLab self-hosted server that is authenticated with a personal access token.
 *
 */
export interface UpdateGitlabServerAccessTokenConnectionDetails
  extends model.UpdateConnectionDetails {
  /**
   * The OCID of personal access token saved in secret store.
   */
  "accessToken"?: string;
  /**
   * The baseUrl of the hosted GitLabServer.
   */
  "baseUrl"?: string;
  "tlsVerifyConfig"?: model.CaCertVerify;

  "connectionType": string;
}

export namespace UpdateGitlabServerAccessTokenConnectionDetails {
  export function getJsonObj(
    obj: UpdateGitlabServerAccessTokenConnectionDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateConnectionDetails.getJsonObj(
            obj
          ) as UpdateGitlabServerAccessTokenConnectionDetails)),
      ...{
        "tlsVerifyConfig": obj.tlsVerifyConfig
          ? model.TlsVerifyConfig.getJsonObj(obj.tlsVerifyConfig)
          : undefined
      }
    };

    return jsonObj;
  }
  export const connectionType = "GITLAB_SERVER_ACCESS_TOKEN";
  export function getDeserializedJsonObj(
    obj: UpdateGitlabServerAccessTokenConnectionDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateConnectionDetails.getDeserializedJsonObj(
            obj
          ) as UpdateGitlabServerAccessTokenConnectionDetails)),
      ...{
        "tlsVerifyConfig": obj.tlsVerifyConfig
          ? model.TlsVerifyConfig.getDeserializedJsonObj(obj.tlsVerifyConfig)
          : undefined
      }
    };

    return jsonObj;
  }
}
