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
 * Once the Dataset is defined, it's largely immutable from a metadata perspective.  The records found in the data source itself, may change over time.
 *
 */
export interface UpdateDatasetDetails {
  /**
   * A user-friendly display name for the resource.
   */
  "displayName"?: string;
  /**
   * A user provided description of the dataset
   */
  "description"?: string;
  /**
   * The labeling instructions for human labelers in rich text format
   */
  "labelingInstructions"?: string;
  /**
   * A simple key-value pair that is applied without any predefined name, type, or scope. It exists for cross-compatibility only.
   * For example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * The defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace UpdateDatasetDetails {
  export function getJsonObj(obj: UpdateDatasetDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateDatasetDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
