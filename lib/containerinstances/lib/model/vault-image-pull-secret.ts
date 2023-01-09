/**
 * Container Instance API
 * A description of the Container Instance API
 * OpenAPI spec version: 20210415
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * A VaultImagePullSecret is a ImagePullSecret which accepts secretId as credentials information.
 *
 */
export interface VaultImagePullSecret extends model.ImagePullSecret {
  /**
   * The OCID of the secret for registry credentials.
   */
  "secretId": string;

  "secretType": string;
}

export namespace VaultImagePullSecret {
  export function getJsonObj(obj: VaultImagePullSecret, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.ImagePullSecret.getJsonObj(obj) as VaultImagePullSecret)),
      ...{}
    };

    return jsonObj;
  }
  export const secretType = "VAULT";
  export function getDeserializedJsonObj(
    obj: VaultImagePullSecret,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ImagePullSecret.getDeserializedJsonObj(obj) as VaultImagePullSecret)),
      ...{}
    };

    return jsonObj;
  }
}