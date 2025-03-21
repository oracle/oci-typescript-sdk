/**
 * APM Availability Monitoring API
 * Use the APM Availability Monitoring API to query Scripts, Monitors, Dedicated Vantage Points and On-Premise Vantage Points resources. For more information, see [Application Performance Monitoring](https://docs.oracle.com/iaas/application-performance-monitoring/index.html).
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
 * Details of the network node.
 */
export interface Node {
  /**
   * ID of the network node.
   */
  "id": string;
  /**
   * IP address of the network node.
   */
  "ipAddress"?: string;
  /**
   * Display name of the network node.
   */
  "displayName"?: string;
  /**
   * Geographical information of the network node.
   */
  "geoInfo"?: string;
  /**
   * Outgoing links from the network node.
   */
  "outgoingLinks"?: Array<string>;
  /**
   * Number of consecutive anonymous network nodes. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "consecutiveAnonymousCount"?: number;
  /**
   * Level of the network node. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "level"?: number;
  /**
   * Average packet response time in milliseconds. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "avgPacketResponseTimeInMs"?: number;
  /**
   * Percentage of the average packet loss. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "avgPacketLossPercent"?: number;
  /**
   * Type of network node.
   */
  "type"?: Node.Type;
}

export namespace Node {
  export enum Type {
    Source = "SOURCE",
    Destination = "DESTINATION",
    Anonymous = "ANONYMOUS",
    Internal = "INTERNAL",
    Dangling = "DANGLING",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Node): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Node): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
