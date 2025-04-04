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
 * The configuration files to pass to the container using volume mounts.
 *
 */
export interface CreateContainerConfigFileVolumeDetails extends model.CreateContainerVolumeDetails {
  /**
   * Contains key value pairs which can be mounted as individual files inside the container. The value needs to be base64 encoded. It is decoded to plain text before the mount.
   *
   */
  "configs"?: Array<model.ContainerConfigFile>;

  "volumeType": string;
}

export namespace CreateContainerConfigFileVolumeDetails {
  export function getJsonObj(
    obj: CreateContainerConfigFileVolumeDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateContainerVolumeDetails.getJsonObj(
            obj
          ) as CreateContainerConfigFileVolumeDetails)),
      ...{
        "configs": obj.configs
          ? obj.configs.map(item => {
              return model.ContainerConfigFile.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const volumeType = "CONFIGFILE";
  export function getDeserializedJsonObj(
    obj: CreateContainerConfigFileVolumeDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateContainerVolumeDetails.getDeserializedJsonObj(
            obj
          ) as CreateContainerConfigFileVolumeDetails)),
      ...{
        "configs": obj.configs
          ? obj.configs.map(item => {
              return model.ContainerConfigFile.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
