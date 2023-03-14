/**
 * Container Engine for Kubernetes API
 * API for the Container Engine for Kubernetes service. Use this API to build, deploy,
and manage cloud-native applications. For more information, see
[Overview of Container Engine for Kubernetes](/iaas/Content/ContEng/Concepts/contengoverview.htm).

 * OpenAPI spec version: 20180222
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Memory properties.
 */
export interface ShapeMemoryOptions {
  /**
   * The minimum amount of memory, in gigabytes. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "minInGBs"?: number;
  /**
   * The maximum amount of memory, in gigabytes. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxInGBs"?: number;
  /**
   * The default amount of memory per OCPU available for this shape, in gigabytes. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "defaultPerOcpuInGBs"?: number;
  /**
   * The minimum amount of memory per OCPU available for this shape, in gigabytes. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "minPerOcpuInGBs"?: number;
  /**
   * The maximum amount of memory per OCPU available for this shape, in gigabytes. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxPerOcpuInGBs"?: number;
}

export namespace ShapeMemoryOptions {
  export function getJsonObj(obj: ShapeMemoryOptions): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ShapeMemoryOptions): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}