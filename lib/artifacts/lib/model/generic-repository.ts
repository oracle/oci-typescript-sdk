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
 * The metadata for the artifact repository.
 */
export interface GenericRepository extends model.Repository {
  "repositoryType": string;
}

export namespace GenericRepository {
  export function getJsonObj(obj: GenericRepository, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Repository.getJsonObj(obj) as GenericRepository)),
      ...{}
    };

    return jsonObj;
  }
  export const repositoryType = "GENERIC";
  export function getDeserializedJsonObj(
    obj: GenericRepository,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.Repository.getDeserializedJsonObj(obj) as GenericRepository)),
      ...{}
    };

    return jsonObj;
  }
}
