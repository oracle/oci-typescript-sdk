/**
 * Database Migration API
 * Use the Oracle Cloud Infrastructure Database Migration APIs to perform database migration operations.
 * OpenAPI spec version: 20230518
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
 * OCI Object Storage bucket will be used to store dump files for the migration.
 */
export interface CreateMySqlObjectStorageDataTransferMediumDetails
  extends model.CreateMySqlDataTransferMediumDetails {
  "objectStorageBucket"?: model.CreateObjectStoreBucket;

  "type": string;
}

export namespace CreateMySqlObjectStorageDataTransferMediumDetails {
  export function getJsonObj(
    obj: CreateMySqlObjectStorageDataTransferMediumDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateMySqlDataTransferMediumDetails.getJsonObj(
            obj
          ) as CreateMySqlObjectStorageDataTransferMediumDetails)),
      ...{
        "objectStorageBucket": obj.objectStorageBucket
          ? model.CreateObjectStoreBucket.getJsonObj(obj.objectStorageBucket)
          : undefined
      }
    };

    return jsonObj;
  }
  export const type = "OBJECT_STORAGE";
  export function getDeserializedJsonObj(
    obj: CreateMySqlObjectStorageDataTransferMediumDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateMySqlDataTransferMediumDetails.getDeserializedJsonObj(
            obj
          ) as CreateMySqlObjectStorageDataTransferMediumDetails)),
      ...{
        "objectStorageBucket": obj.objectStorageBucket
          ? model.CreateObjectStoreBucket.getDeserializedJsonObj(obj.objectStorageBucket)
          : undefined
      }
    };

    return jsonObj;
  }
}
