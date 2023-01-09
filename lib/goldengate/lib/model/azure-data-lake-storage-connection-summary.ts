/**
 * GoldenGate API
 * Use the Oracle Cloud Infrastructure GoldenGate APIs to perform data replication operations.

 * OpenAPI spec version: 20200407
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Summary of the Azure Data Lake Storage Connection.
 *
 */
export interface AzureDataLakeStorageConnectionSummary extends model.ConnectionSummary {
  /**
   * The Azure Data Lake Storage technology type.
   */
  "technologyType": string;
  /**
   * Used authentication mechanism to access Azure Data Lake Storage.
   *
   */
  "authenticationType": string;
  /**
   * Sets the Azure storage account name.
   *
   */
  "accountName": string;
  /**
   * Azure tenant ID of the application. This property is required when 'authenticationType' is set to 'AZURE_ACTIVE_DIRECTORY'.
   * e.g.: 14593954-d337-4a61-a364-9f758c64f97f
   *
   */
  "azureTenantId"?: string;
  /**
   * Azure client ID of the application. This property is required when 'authenticationType' is set to 'AZURE_ACTIVE_DIRECTORY'.
   * e.g.: 06ecaabf-8b80-4ec8-a0ec-20cbf463703d
   *
   */
  "clientId"?: string;
  /**
   * Azure Storage service endpoint.
   * e.g: https://test.blob.core.windows.net
   *
   */
  "endpoint"?: string;

  "connectionType": string;
}

export namespace AzureDataLakeStorageConnectionSummary {
  export function getJsonObj(
    obj: AzureDataLakeStorageConnectionSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ConnectionSummary.getJsonObj(obj) as AzureDataLakeStorageConnectionSummary)),
      ...{}
    };

    return jsonObj;
  }
  export const connectionType = "AZURE_DATA_LAKE_STORAGE";
  export function getDeserializedJsonObj(
    obj: AzureDataLakeStorageConnectionSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ConnectionSummary.getDeserializedJsonObj(
            obj
          ) as AzureDataLakeStorageConnectionSummary)),
      ...{}
    };

    return jsonObj;
  }
}