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
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Details needed by the Data Asset export request.
 */
export interface AsynchronousExportDataAssetDetails {
  /**
   * Array of objects and their child types to be selected for export.
   */
  "exportScope"?: Array<model.DataAssetExportScope>;
  "objectStorageTarget"?: model.ObjectStorageObjectReference;
}

export namespace AsynchronousExportDataAssetDetails {
  export function getJsonObj(obj: AsynchronousExportDataAssetDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "exportScope": obj.exportScope
          ? obj.exportScope.map(item => {
              return model.DataAssetExportScope.getJsonObj(item);
            })
          : undefined,
        "objectStorageTarget": obj.objectStorageTarget
          ? model.ObjectStorageObjectReference.getJsonObj(obj.objectStorageTarget)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AsynchronousExportDataAssetDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "exportScope": obj.exportScope
          ? obj.exportScope.map(item => {
              return model.DataAssetExportScope.getDeserializedJsonObj(item);
            })
          : undefined,
        "objectStorageTarget": obj.objectStorageTarget
          ? model.ObjectStorageObjectReference.getDeserializedJsonObj(obj.objectStorageTarget)
          : undefined
      }
    };

    return jsonObj;
  }
}