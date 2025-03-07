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
 * Aggregation entities are required by the API consistency guidelines for API Consistency Guidelines#AnalyticsAPIs.  These are used to summarize record information for a given dataset and are used to populate UI elements.  Aggregations need to have the fields that identify the exact scope that they're summarizing.  Any filters applied to the list API, have to show up in the aggregation.
 */
export interface RecordAnalyticsAggregation {
  /**
   * the count of the matching results Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "count": number;
  "dimensions"?: model.RecordAggregationDimensions;
  /**
   * ocid of the dataset the annotation belongs to
   */
  "datasetId": string;
  /**
   * ocid of the compartment the records
   */
  "compartmentId": string;
  /**
   * Describes the lifecycle state.
   */
  "lifecycleState"?: string;
}

export namespace RecordAnalyticsAggregation {
  export function getJsonObj(obj: RecordAnalyticsAggregation): object {
    const jsonObj = {
      ...obj,
      ...{
        "dimensions": obj.dimensions
          ? model.RecordAggregationDimensions.getJsonObj(obj.dimensions)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RecordAnalyticsAggregation): object {
    const jsonObj = {
      ...obj,
      ...{
        "dimensions": obj.dimensions
          ? model.RecordAggregationDimensions.getDeserializedJsonObj(obj.dimensions)
          : undefined
      }
    };

    return jsonObj;
  }
}
