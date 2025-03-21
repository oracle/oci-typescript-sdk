/**
 * Data Integration API
 * Use the Data Integration API to organize your data integration projects, create data flows, pipelines and tasks, and then publish, schedule, and run tasks that extract, transform, and load data. For more information, see [Data Integration](https://docs.oracle.com/iaas/data-integration/home.htm).
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * The connection summary object.
 */
export interface ConnectionSummary {
  /**
   * Generated key that can be used in API calls to identify connection. On scenarios where reference to the connection is needed, a value can be passed in create.
   */
  "key"?: string;
  /**
   * The model version of an object.
   */
  "modelVersion"?: string;
  "parentRef"?: model.ParentReference;
  /**
   * Free form text without any restriction on permitted characters. Name can have letters, numbers, and special characters. The value is editable and is restricted to 1000 characters.
   */
  "name"?: string;
  /**
   * User-defined description for the connection.
   */
  "description"?: string;
  /**
   * The version of the object that is used to track changes in the object instance. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectVersion"?: number;
  /**
   * The status of an object that can be set to value 1 for shallow references across objects, other values reserved. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "objectStatus"?: number;
  /**
   * Value can only contain upper case letters, underscore and numbers. It should begin with upper case letter or underscore. The value can be modified.
   */
  "identifier"?: string;
  "primarySchema"?: model.Schema;
  /**
   * The properties for the connection.
   */
  "connectionProperties"?: Array<model.ConnectionProperty>;
  /**
   * The default property for the connection.
   */
  "isDefault"?: boolean;
  "metadata"?: model.ObjectMetadata;
  /**
   * A key map. If provided, key is replaced with generated key. This structure provides mapping between user provided key and generated key.
   */
  "keyMap"?: { [key: string]: string };

  "modelType": string;
}

export namespace ConnectionSummary {
  export function getJsonObj(obj: ConnectionSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "parentRef": obj.parentRef ? model.ParentReference.getJsonObj(obj.parentRef) : undefined,

        "primarySchema": obj.primarySchema ? model.Schema.getJsonObj(obj.primarySchema) : undefined,
        "connectionProperties": obj.connectionProperties
          ? obj.connectionProperties.map(item => {
              return model.ConnectionProperty.getJsonObj(item);
            })
          : undefined,

        "metadata": obj.metadata ? model.ObjectMetadata.getJsonObj(obj.metadata) : undefined
      }
    };

    if (obj && "modelType" in obj && obj.modelType) {
      switch (obj.modelType) {
        case "GENERIC_JDBC_CONNECTION":
          return model.ConnectionSummaryFromJdbc.getJsonObj(
            <model.ConnectionSummaryFromJdbc>(<object>jsonObj),
            true
          );
        case "REST_NO_AUTH_CONNECTION":
          return model.ConnectionSummaryFromRestNoAuth.getJsonObj(
            <model.ConnectionSummaryFromRestNoAuth>(<object>jsonObj),
            true
          );
        case "ORACLE_SIEBEL_CONNECTION":
          return model.ConnectionSummaryFromOracleSiebel.getJsonObj(
            <model.ConnectionSummaryFromOracleSiebel>(<object>jsonObj),
            true
          );
        case "ORACLEDB_CONNECTION":
          return model.ConnectionSummaryFromOracle.getJsonObj(
            <model.ConnectionSummaryFromOracle>(<object>jsonObj),
            true
          );
        case "MYSQL_HEATWAVE_CONNECTION":
          return model.ConnectionSummaryFromMySqlHeatWave.getJsonObj(
            <model.ConnectionSummaryFromMySqlHeatWave>(<object>jsonObj),
            true
          );
        case "AMAZON_S3_CONNECTION":
          return model.ConnectionSummaryFromAmazonS3.getJsonObj(
            <model.ConnectionSummaryFromAmazonS3>(<object>jsonObj),
            true
          );
        case "OAUTH2_CONNECTION":
          return model.ConnectionSummaryFromOAuth2.getJsonObj(
            <model.ConnectionSummaryFromOAuth2>(<object>jsonObj),
            true
          );
        case "ORACLE_PEOPLESOFT_CONNECTION":
          return model.ConnectionSummaryFromOraclePeopleSoft.getJsonObj(
            <model.ConnectionSummaryFromOraclePeopleSoft>(<object>jsonObj),
            true
          );
        case "ORACLE_EBS_CONNECTION":
          return model.ConnectionSummaryFromOracleEbs.getJsonObj(
            <model.ConnectionSummaryFromOracleEbs>(<object>jsonObj),
            true
          );
        case "ORACLE_ADWC_CONNECTION":
          return model.ConnectionSummaryFromAdwc.getJsonObj(
            <model.ConnectionSummaryFromAdwc>(<object>jsonObj),
            true
          );
        case "MYSQL_CONNECTION":
          return model.ConnectionSummaryFromMySQL.getJsonObj(
            <model.ConnectionSummaryFromMySQL>(<object>jsonObj),
            true
          );
        case "LAKE_CONNECTION":
          return model.ConnectionSummaryFromLake.getJsonObj(
            <model.ConnectionSummaryFromLake>(<object>jsonObj),
            true
          );
        case "BIP_CONNECTION":
          return model.ConnectionSummaryFromBIP.getJsonObj(
            <model.ConnectionSummaryFromBIP>(<object>jsonObj),
            true
          );
        case "HDFS_CONNECTION":
          return model.ConnectionSummaryFromHdfs.getJsonObj(
            <model.ConnectionSummaryFromHdfs>(<object>jsonObj),
            true
          );
        case "BICC_CONNECTION":
          return model.ConnectionSummaryFromBICC.getJsonObj(
            <model.ConnectionSummaryFromBICC>(<object>jsonObj),
            true
          );
        case "ORACLE_ATP_CONNECTION":
          return model.ConnectionSummaryFromAtp.getJsonObj(
            <model.ConnectionSummaryFromAtp>(<object>jsonObj),
            true
          );
        case "REST_BASIC_AUTH_CONNECTION":
          return model.ConnectionSummaryFromRestBasicAuth.getJsonObj(
            <model.ConnectionSummaryFromRestBasicAuth>(<object>jsonObj),
            true
          );
        case "ORACLE_OBJECT_STORAGE_CONNECTION":
          return model.ConnectionSummaryFromObjectStorage.getJsonObj(
            <model.ConnectionSummaryFromObjectStorage>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.modelType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ConnectionSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "parentRef": obj.parentRef
          ? model.ParentReference.getDeserializedJsonObj(obj.parentRef)
          : undefined,

        "primarySchema": obj.primarySchema
          ? model.Schema.getDeserializedJsonObj(obj.primarySchema)
          : undefined,
        "connectionProperties": obj.connectionProperties
          ? obj.connectionProperties.map(item => {
              return model.ConnectionProperty.getDeserializedJsonObj(item);
            })
          : undefined,

        "metadata": obj.metadata
          ? model.ObjectMetadata.getDeserializedJsonObj(obj.metadata)
          : undefined
      }
    };

    if (obj && "modelType" in obj && obj.modelType) {
      switch (obj.modelType) {
        case "GENERIC_JDBC_CONNECTION":
          return model.ConnectionSummaryFromJdbc.getDeserializedJsonObj(
            <model.ConnectionSummaryFromJdbc>(<object>jsonObj),
            true
          );
        case "REST_NO_AUTH_CONNECTION":
          return model.ConnectionSummaryFromRestNoAuth.getDeserializedJsonObj(
            <model.ConnectionSummaryFromRestNoAuth>(<object>jsonObj),
            true
          );
        case "ORACLE_SIEBEL_CONNECTION":
          return model.ConnectionSummaryFromOracleSiebel.getDeserializedJsonObj(
            <model.ConnectionSummaryFromOracleSiebel>(<object>jsonObj),
            true
          );
        case "ORACLEDB_CONNECTION":
          return model.ConnectionSummaryFromOracle.getDeserializedJsonObj(
            <model.ConnectionSummaryFromOracle>(<object>jsonObj),
            true
          );
        case "MYSQL_HEATWAVE_CONNECTION":
          return model.ConnectionSummaryFromMySqlHeatWave.getDeserializedJsonObj(
            <model.ConnectionSummaryFromMySqlHeatWave>(<object>jsonObj),
            true
          );
        case "AMAZON_S3_CONNECTION":
          return model.ConnectionSummaryFromAmazonS3.getDeserializedJsonObj(
            <model.ConnectionSummaryFromAmazonS3>(<object>jsonObj),
            true
          );
        case "OAUTH2_CONNECTION":
          return model.ConnectionSummaryFromOAuth2.getDeserializedJsonObj(
            <model.ConnectionSummaryFromOAuth2>(<object>jsonObj),
            true
          );
        case "ORACLE_PEOPLESOFT_CONNECTION":
          return model.ConnectionSummaryFromOraclePeopleSoft.getDeserializedJsonObj(
            <model.ConnectionSummaryFromOraclePeopleSoft>(<object>jsonObj),
            true
          );
        case "ORACLE_EBS_CONNECTION":
          return model.ConnectionSummaryFromOracleEbs.getDeserializedJsonObj(
            <model.ConnectionSummaryFromOracleEbs>(<object>jsonObj),
            true
          );
        case "ORACLE_ADWC_CONNECTION":
          return model.ConnectionSummaryFromAdwc.getDeserializedJsonObj(
            <model.ConnectionSummaryFromAdwc>(<object>jsonObj),
            true
          );
        case "MYSQL_CONNECTION":
          return model.ConnectionSummaryFromMySQL.getDeserializedJsonObj(
            <model.ConnectionSummaryFromMySQL>(<object>jsonObj),
            true
          );
        case "LAKE_CONNECTION":
          return model.ConnectionSummaryFromLake.getDeserializedJsonObj(
            <model.ConnectionSummaryFromLake>(<object>jsonObj),
            true
          );
        case "BIP_CONNECTION":
          return model.ConnectionSummaryFromBIP.getDeserializedJsonObj(
            <model.ConnectionSummaryFromBIP>(<object>jsonObj),
            true
          );
        case "HDFS_CONNECTION":
          return model.ConnectionSummaryFromHdfs.getDeserializedJsonObj(
            <model.ConnectionSummaryFromHdfs>(<object>jsonObj),
            true
          );
        case "BICC_CONNECTION":
          return model.ConnectionSummaryFromBICC.getDeserializedJsonObj(
            <model.ConnectionSummaryFromBICC>(<object>jsonObj),
            true
          );
        case "ORACLE_ATP_CONNECTION":
          return model.ConnectionSummaryFromAtp.getDeserializedJsonObj(
            <model.ConnectionSummaryFromAtp>(<object>jsonObj),
            true
          );
        case "REST_BASIC_AUTH_CONNECTION":
          return model.ConnectionSummaryFromRestBasicAuth.getDeserializedJsonObj(
            <model.ConnectionSummaryFromRestBasicAuth>(<object>jsonObj),
            true
          );
        case "ORACLE_OBJECT_STORAGE_CONNECTION":
          return model.ConnectionSummaryFromObjectStorage.getDeserializedJsonObj(
            <model.ConnectionSummaryFromObjectStorage>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.modelType}`);
      }
    }
    return jsonObj;
  }
}
