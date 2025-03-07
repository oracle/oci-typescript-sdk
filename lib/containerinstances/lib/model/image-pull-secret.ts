/**
 * Container Instance API
 * A description of the Container Instance API
 * OpenAPI spec version: 20210415
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
 * The image pull secrets for accessing private registry to pull images for containers
 *
 */
export interface ImagePullSecret {
  /**
   * The registry endpoint of the container image.
   */
  "registryEndpoint": string;

  "secretType": string;
}

export namespace ImagePullSecret {
  export function getJsonObj(obj: ImagePullSecret): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "secretType" in obj && obj.secretType) {
      switch (obj.secretType) {
        case "VAULT":
          return model.VaultImagePullSecret.getJsonObj(
            <model.VaultImagePullSecret>(<object>jsonObj),
            true
          );
        case "BASIC":
          return model.BasicImagePullSecret.getJsonObj(
            <model.BasicImagePullSecret>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.secretType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ImagePullSecret): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "secretType" in obj && obj.secretType) {
      switch (obj.secretType) {
        case "VAULT":
          return model.VaultImagePullSecret.getDeserializedJsonObj(
            <model.VaultImagePullSecret>(<object>jsonObj),
            true
          );
        case "BASIC":
          return model.BasicImagePullSecret.getDeserializedJsonObj(
            <model.BasicImagePullSecret>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.secretType}`);
      }
    }
    return jsonObj;
  }
}
