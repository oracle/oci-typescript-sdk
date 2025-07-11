/**
 * Application Performance Monitoring Trace Explorer API
 * Use the Application Performance Monitoring Trace Explorer API to query traces and associated spans in Trace Explorer. For more information, see [Application Performance Monitoring](https://docs.oracle.com/iaas/application-performance-monitoring/index.html).

 * OpenAPI spec version: 20200630
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
 * Object that contains the details about a single attribute in the bulk request to be activated.  The attributeNameSpace and
 * unit are optional parameters, and the attributeNameSpace will default to TRACES if it is not passed in.
 *
 */
export interface BulkActivateAttributeDetail {
  /**
   * Name of the attribute to be activated.
   *
   */
  "attributeName": string;
  /**
   * Type of the attribute to be activated.
   *
   */
  "attributeType": BulkActivateAttributeDetail.AttributeType;
  /**
   * Attribute expression if this attribute is an alias
   *
   */
  "attributeExpression"?: string;
  /**
   * Unit of the attribute to be updated.  If unit is not specified, it defaults to NONE.
   *
   */
  "unit"?: BulkActivateAttributeDetail.Unit;
  /**
   * Namespace of the attribute to be activated.  The attributeNameSpace will default to TRACES if it is
   * not passed in.
   *
   */
  "attributeNameSpace"?: BulkActivateAttributeDetail.AttributeNameSpace;
}

export namespace BulkActivateAttributeDetail {
  export enum AttributeType {
    Numeric = "NUMERIC",
    String = "STRING",
    None = "NONE"
  }

  export enum Unit {
    None = "NONE",
    EpochTimeMs = "EPOCH_TIME_MS",
    Bytes = "BYTES",
    Count = "COUNT",
    DurationMs = "DURATION_MS",
    TraceStatus = "TRACE_STATUS",
    Percentage = "PERCENTAGE"
  }

  export enum AttributeNameSpace {
    Traces = "TRACES",
    Synthetic = "SYNTHETIC",
    Logs = "LOGS"
  }

  export function getJsonObj(obj: BulkActivateAttributeDetail): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: BulkActivateAttributeDetail): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
