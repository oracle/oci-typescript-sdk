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
 * Information about On-premise vantage point.
 */
export interface OnPremiseVantagePointSummary {
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the On-premise vantage point.
   */
  "id": string;
  /**
   * Unique permanent name of the On-premise vantage point.
   */
  "displayName": string;
  /**
   * Unique On-premise vantage point name that cannot be edited. The name should not contain any confidential information.
   */
  "name": string;
  /**
   * Type of On-premise vantage point.
   */
  "type": OnPremiseVantagePointSummary.Type;
  /**
   * A short description about the On-premise vantage point.
   */
  "description"?: string;
  "workersSummary": model.WorkersSummary;
  /**
   * The time the resource was created, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339)
   * timestamp format.
   * Example: {@code 2020-02-12T22:47:12.613Z}
   *
   */
  "timeCreated"?: Date;
  /**
   * The time the resource was updated, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339)
   * timestamp format.
   * Example: {@code 2020-02-13T22:47:12.613Z}
   *
   */
  "timeUpdated"?: Date;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace OnPremiseVantagePointSummary {
  export enum Type {
    OnPremiseDockerVantagePoint = "ON_PREMISE_DOCKER_VANTAGE_POINT",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: OnPremiseVantagePointSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "workersSummary": obj.workersSummary
          ? model.WorkersSummary.getJsonObj(obj.workersSummary)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: OnPremiseVantagePointSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "workersSummary": obj.workersSummary
          ? model.WorkersSummary.getDeserializedJsonObj(obj.workersSummary)
          : undefined
      }
    };

    return jsonObj;
  }
}
