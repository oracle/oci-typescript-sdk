/**
 * Stack Monitoring API
 * Stack Monitoring API.
 * OpenAPI spec version: 20210330
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
 * Summary for the baseline-able metric
 */
export interface BaselineableMetricSummary {
  /**
   * OCID of the metric
   */
  "id": string;
  /**
   * The current lifecycle state of the metric extension
   */
  "lifecycleState"?: model.BaselineableMetricLifeCycleStates;
  /**
   * OCID of the tenancy
   */
  "tenancyId"?: string;
  /**
   * OCID of the compartment
   */
  "compartmentId"?: string;
  /**
   * name of the metric
   */
  "name": string;
  /**
   * metric column name
   */
  "column": string;
  /**
   * namespace of the metric
   */
  "namespace": string;
  /**
   * Resource group of the metric
   */
  "resourceGroup": string;
  /**
   * Resource type of the metric
   */
  "resourceType"?: string;
  /**
   * Is the metric created out of box, default false
   */
  "isOutOfBox": boolean;
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
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces.
   * Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace BaselineableMetricSummary {
  export function getJsonObj(obj: BaselineableMetricSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: BaselineableMetricSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
