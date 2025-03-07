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
 * The details for updating a connection of the type {@code BITBUCKET_CLOUD_APP_PASSWORD}.
 * This type corresponds to a connection in Bitbucket Cloud that is authenticated with username and app password.
 *
 */
export interface UpdateBitbucketCloudAppPasswordConnectionDetails
  extends model.UpdateConnectionDetails {
  /**
   * Public Bitbucket Cloud Username in plain text(not more than 30 characters)
   */
  "username"?: string;
  /**
   * OCID of personal Bitbucket Cloud AppPassword saved in secret store
   */
  "appPassword"?: string;

  "connectionType": string;
}

export namespace UpdateBitbucketCloudAppPasswordConnectionDetails {
  export function getJsonObj(
    obj: UpdateBitbucketCloudAppPasswordConnectionDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateConnectionDetails.getJsonObj(
            obj
          ) as UpdateBitbucketCloudAppPasswordConnectionDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const connectionType = "BITBUCKET_CLOUD_APP_PASSWORD";
  export function getDeserializedJsonObj(
    obj: UpdateBitbucketCloudAppPasswordConnectionDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateConnectionDetails.getDeserializedJsonObj(
            obj
          ) as UpdateBitbucketCloudAppPasswordConnectionDetails)),
      ...{}
    };

    return jsonObj;
  }
}
