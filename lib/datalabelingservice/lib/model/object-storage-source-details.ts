/**
 * Data Labeling Management API
 * Use Data Labeling Management API to create, list, edit & delete datasets.
 * OpenAPI spec version: 20211001
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
 * Specifies the dataset location in object storage. This requires that all records are in this bucket, and under this prefix. We do not support a dataset with objects in arbitrary locations across buckets or prefixes.
 *
 */
export interface ObjectStorageSourceDetails extends model.DatasetSourceDetails {
  /**
   * The namespace of the bucket that contains the dataset data source.
   */
  "namespace": string;
  /**
   * The object storage bucket that contains the dataset data source.
   */
  "bucket": string;
  /**
   * A common path prefix shared by the objects that make up the dataset. Except for the CSV file type, records are not generated for the objects whose names exactly match with the prefix.
   */
  "prefix"?: string;

  "sourceType": string;
}

export namespace ObjectStorageSourceDetails {
  export function getJsonObj(obj: ObjectStorageSourceDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DatasetSourceDetails.getJsonObj(obj) as ObjectStorageSourceDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const sourceType = "OBJECT_STORAGE";
  export function getDeserializedJsonObj(
    obj: ObjectStorageSourceDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DatasetSourceDetails.getDeserializedJsonObj(obj) as ObjectStorageSourceDetails)),
      ...{}
    };

    return jsonObj;
  }
}
