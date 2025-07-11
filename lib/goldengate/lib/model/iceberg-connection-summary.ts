/**
 * GoldenGate API
 * Use the Oracle Cloud Infrastructure GoldenGate APIs to perform data replication operations.

 * OpenAPI spec version: 20200407
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
 * Summary of the Iceberg Connection.
 *
 */
export interface IcebergConnectionSummary extends model.ConnectionSummary {
  /**
   * The Iceberg technology type.
   */
  "technologyType": string;
  "catalog":
    | model.GlueIcebergCatalogSummary
    | model.NessieIcebergCatalogSummary
    | model.PolarisIcebergCatalogSummary
    | model.RestIcebergCatalogSummary
    | model.HadoopIcebergCatalogSummary;
  "storage":
    | model.GoogleCloudStorageIcebergStorageSummary
    | model.AzureDataLakeStorageIcebergStorageSummary
    | model.AmazonS3IcebergStorageSummary;

  "connectionType": string;
}

export namespace IcebergConnectionSummary {
  export function getJsonObj(obj: IcebergConnectionSummary, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ConnectionSummary.getJsonObj(obj) as IcebergConnectionSummary)),
      ...{
        "catalog": obj.catalog ? model.IcebergCatalogSummary.getJsonObj(obj.catalog) : undefined,
        "storage": obj.storage ? model.IcebergStorageSummary.getJsonObj(obj.storage) : undefined
      }
    };

    return jsonObj;
  }
  export const connectionType = "ICEBERG";
  export function getDeserializedJsonObj(
    obj: IcebergConnectionSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ConnectionSummary.getDeserializedJsonObj(obj) as IcebergConnectionSummary)),
      ...{
        "catalog": obj.catalog
          ? model.IcebergCatalogSummary.getDeserializedJsonObj(obj.catalog)
          : undefined,
        "storage": obj.storage
          ? model.IcebergStorageSummary.getDeserializedJsonObj(obj.storage)
          : undefined
      }
    };

    return jsonObj;
  }
}
