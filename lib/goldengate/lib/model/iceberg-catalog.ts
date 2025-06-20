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
 * Represents the catalog of given type used in an Iceberg connection.
 *
 */
export interface IcebergCatalog {
  "catalogType": string;
}

export namespace IcebergCatalog {
  export function getJsonObj(obj: IcebergCatalog): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "catalogType" in obj && obj.catalogType) {
      switch (obj.catalogType) {
        case "GLUE":
          return model.GlueIcebergCatalog.getJsonObj(
            <model.GlueIcebergCatalog>(<object>jsonObj),
            true
          );
        case "POLARIS":
          return model.PolarisIcebergCatalog.getJsonObj(
            <model.PolarisIcebergCatalog>(<object>jsonObj),
            true
          );
        case "REST":
          return model.RestIcebergCatalog.getJsonObj(
            <model.RestIcebergCatalog>(<object>jsonObj),
            true
          );
        case "NESSIE":
          return model.NessieIcebergCatalog.getJsonObj(
            <model.NessieIcebergCatalog>(<object>jsonObj),
            true
          );
        case "HADOOP":
          return model.HadoopIcebergCatalog.getJsonObj(
            <model.HadoopIcebergCatalog>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.catalogType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: IcebergCatalog): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "catalogType" in obj && obj.catalogType) {
      switch (obj.catalogType) {
        case "GLUE":
          return model.GlueIcebergCatalog.getDeserializedJsonObj(
            <model.GlueIcebergCatalog>(<object>jsonObj),
            true
          );
        case "POLARIS":
          return model.PolarisIcebergCatalog.getDeserializedJsonObj(
            <model.PolarisIcebergCatalog>(<object>jsonObj),
            true
          );
        case "REST":
          return model.RestIcebergCatalog.getDeserializedJsonObj(
            <model.RestIcebergCatalog>(<object>jsonObj),
            true
          );
        case "NESSIE":
          return model.NessieIcebergCatalog.getDeserializedJsonObj(
            <model.NessieIcebergCatalog>(<object>jsonObj),
            true
          );
        case "HADOOP":
          return model.HadoopIcebergCatalog.getDeserializedJsonObj(
            <model.HadoopIcebergCatalog>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.catalogType}`);
      }
    }
    return jsonObj;
  }
}
