/**
 * Artifacts and Container Images API
 * API covering the Artifacts and [Registry](https://docs.oracle.com/iaas/Content/Registry/Concepts/registryoverview.htm) services.
Use this API to manage resources such as generic artifacts and container images.

 * OpenAPI spec version: 20160918
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
 * Container version metadata.
 */
export interface ContainerVersion {
  /**
   * The OCID of the user or principal that pushed the version.
   */
  "createdBy": string;
  /**
   * The creation time of the version.
   */
  "timeCreated": Date;
  /**
   * The version name.
   */
  "version": string;
}

export namespace ContainerVersion {
  export function getJsonObj(obj: ContainerVersion): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ContainerVersion): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
