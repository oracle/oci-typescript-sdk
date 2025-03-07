/**
 * Data Labeling API
 * Use Data Labeling API to create Annotations on Images, Texts & Documents, and generate snapshots.
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
 * Collection of metadata related to text record.
 */
export interface TextMetadata extends model.RecordMetadata {
  "recordType": string;
}

export namespace TextMetadata {
  export function getJsonObj(obj: TextMetadata, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.RecordMetadata.getJsonObj(obj) as TextMetadata)),
      ...{}
    };

    return jsonObj;
  }
  export const recordType = "TEXT_METADATA";
  export function getDeserializedJsonObj(obj: TextMetadata, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.RecordMetadata.getDeserializedJsonObj(obj) as TextMetadata)),
      ...{}
    };

    return jsonObj;
  }
}
