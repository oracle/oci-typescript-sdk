/**
 * Oracle Cloud Migrations API
 * A description of the Oracle Cloud Migrations API.
 * OpenAPI spec version: 20220919
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

export interface InstanceSourceViaBootVolumeDetails extends model.InstanceSourceDetails {
  /**
   * The OCID of the boot volume used to boot the instance.
   */
  "bootVolumeId": string;

  "sourceType": string;
}

export namespace InstanceSourceViaBootVolumeDetails {
  export function getJsonObj(
    obj: InstanceSourceViaBootVolumeDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.InstanceSourceDetails.getJsonObj(obj) as InstanceSourceViaBootVolumeDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const sourceType = "bootVolume";
  export function getDeserializedJsonObj(
    obj: InstanceSourceViaBootVolumeDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.InstanceSourceDetails.getDeserializedJsonObj(
            obj
          ) as InstanceSourceViaBootVolumeDetails)),
      ...{}
    };

    return jsonObj;
  }
}
