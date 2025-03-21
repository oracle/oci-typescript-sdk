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
 * Optional details for creating a network database link from OCI database to on-premise database.
 */
export interface OracleDbLinkDataTransferMediumDetails
  extends model.OracleDataTransferMediumDetails {
  "objectStorageBucket"?: model.ObjectStoreBucket;
  /**
   * Name of database link from OCI database to on-premise database. ODMS will create link,
   * if the link does not already exist.
   *
   */
  "name"?: string;

  "type": string;
}

export namespace OracleDbLinkDataTransferMediumDetails {
  export function getJsonObj(
    obj: OracleDbLinkDataTransferMediumDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.OracleDataTransferMediumDetails.getJsonObj(
            obj
          ) as OracleDbLinkDataTransferMediumDetails)),
      ...{
        "objectStorageBucket": obj.objectStorageBucket
          ? model.ObjectStoreBucket.getJsonObj(obj.objectStorageBucket)
          : undefined
      }
    };

    return jsonObj;
  }
  export const type = "DBLINK";
  export function getDeserializedJsonObj(
    obj: OracleDbLinkDataTransferMediumDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.OracleDataTransferMediumDetails.getDeserializedJsonObj(
            obj
          ) as OracleDbLinkDataTransferMediumDetails)),
      ...{
        "objectStorageBucket": obj.objectStorageBucket
          ? model.ObjectStoreBucket.getDeserializedJsonObj(obj.objectStorageBucket)
          : undefined
      }
    };

    return jsonObj;
  }
}
