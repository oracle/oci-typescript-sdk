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
 * Scope of asset export, which consists of a container object (bucket, folder, schema, etc) within the asset,
 * and types of child objects contained by that object to be included.
 *    objectKey - Key of the container object to be exported. For example, key of schema_1.
 *    exportTypeIds - Type key(s) of objects within the container object to be exported. For example, type key of table or view.
 *
 */
export interface DataAssetExportScope {
  /**
   * Unique key of the object selected for export.
   */
  "objectKey"?: string;
  /**
   * Array of type keys selected for export.
   */
  "exportTypeIds"?: Array<string>;
}

export namespace DataAssetExportScope {
  export function getJsonObj(obj: DataAssetExportScope): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DataAssetExportScope): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
