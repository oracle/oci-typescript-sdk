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
 * Summary of the catalog of given type used in an Iceberg connection.
 *
 */
export interface IcebergCatalogSummary {
  "catalogType": string;
}

export namespace IcebergCatalogSummary {
  export function getJsonObj(obj: IcebergCatalogSummary): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "catalogType" in obj && obj.catalogType) {
      switch (obj.catalogType) {
        case "GLUE":
          return model.GlueIcebergCatalogSummary.getJsonObj(
            <model.GlueIcebergCatalogSummary>(<object>jsonObj),
            true
          );
        case "NESSIE":
          return model.NessieIcebergCatalogSummary.getJsonObj(
            <model.NessieIcebergCatalogSummary>(<object>jsonObj),
            true
          );
        case "POLARIS":
          return model.PolarisIcebergCatalogSummary.getJsonObj(
            <model.PolarisIcebergCatalogSummary>(<object>jsonObj),
            true
          );
        case "REST":
          return model.RestIcebergCatalogSummary.getJsonObj(
            <model.RestIcebergCatalogSummary>(<object>jsonObj),
            true
          );
        case "HADOOP":
          return model.HadoopIcebergCatalogSummary.getJsonObj(
            <model.HadoopIcebergCatalogSummary>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.catalogType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: IcebergCatalogSummary): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "catalogType" in obj && obj.catalogType) {
      switch (obj.catalogType) {
        case "GLUE":
          return model.GlueIcebergCatalogSummary.getDeserializedJsonObj(
            <model.GlueIcebergCatalogSummary>(<object>jsonObj),
            true
          );
        case "NESSIE":
          return model.NessieIcebergCatalogSummary.getDeserializedJsonObj(
            <model.NessieIcebergCatalogSummary>(<object>jsonObj),
            true
          );
        case "POLARIS":
          return model.PolarisIcebergCatalogSummary.getDeserializedJsonObj(
            <model.PolarisIcebergCatalogSummary>(<object>jsonObj),
            true
          );
        case "REST":
          return model.RestIcebergCatalogSummary.getDeserializedJsonObj(
            <model.RestIcebergCatalogSummary>(<object>jsonObj),
            true
          );
        case "HADOOP":
          return model.HadoopIcebergCatalogSummary.getDeserializedJsonObj(
            <model.HadoopIcebergCatalogSummary>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.catalogType}`);
      }
    }
    return jsonObj;
  }
}
