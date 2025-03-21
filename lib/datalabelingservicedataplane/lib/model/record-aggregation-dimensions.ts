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
 * The dimensions to summarize record information for a given dataset.
 */
export interface RecordAggregationDimensions {
  /**
   * Whether or not the record has been labeled and has associated annotations.
   */
  "isLabeled"?: boolean;
  /**
   * Whether or not the annotation contains a label.
   */
  "annotationLabelContains"?: string;
}

export namespace RecordAggregationDimensions {
  export function getJsonObj(obj: RecordAggregationDimensions): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RecordAggregationDimensions): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
