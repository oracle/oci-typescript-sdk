/**
 * Data Catalog API
 * Use the Data Catalog APIs to collect, organize, find, access, understand, enrich, and activate technical, business, and operational metadata.
For more information, see [Data Catalog](https://docs.oracle.com/iaas/data-catalog/home.htm).

 * OpenAPI spec version: 20190325
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
 * Information about a data asset import operation.
 */
export interface ImportDataAssetJobResult {
  /**
   * The unique key of the data asset on which import is triggered.
   */
  "dataAssetKey": string;
  /**
   * The unique key of the job definition resource that is used for the import.
   */
  "importJobDefinitionKey"?: string;
  /**
   * The unique key of the job policy for the import.
   */
  "importJobKey"?: string;
  /**
   * The unique key of the parent job execution for which the log resource is created.
   */
  "importJobExecutionKey"?: string;
  /**
   * The status of the import job execution.
   */
  "importJobExecutionStatus"?: model.JobExecutionState;
}

export namespace ImportDataAssetJobResult {
  export function getJsonObj(obj: ImportDataAssetJobResult): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ImportDataAssetJobResult): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
