/**
 * Application Performance Monitoring Synthetic Monitoring API
 * Use the Application Performance Monitoring Synthetic Monitoring API to query synthetic scripts and monitors. For more information, see [Application Performance Monitoring](https://docs.oracle.com/iaas/application-performance-monitoring/index.html).
 * OpenAPI spec version: 20200630
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Details of the request body used to create a new worker for an On-premise vantage point.
 */
export interface CreateWorkerDetails {
  /**
   * Unique On-premise VP worker name that cannot be edited. The name should not contain any confidential information.
   */
  "name": string;
  /**
   * Image version of the On-premise VP worker.
   */
  "version": string;
  /**
   * public key for resource Principal Token based validation to be used in further calls.
   */
  "resourcePrincipalTokenPublicKey": string;
  /**
   * Configuration details of the On-premise VP worker.
   */
  "configurationDetails"?: any;
  /**
   * Type of the On-premise VP worker.
   */
  "workerType"?: model.OnPremiseVantagePointWorkerType;
  /**
   * Enables or disables the On-premise VP worker.
   */
  "status"?: model.OnPremiseVantagePointWorkerStatus;
  /**
   * Priority of the On-premise VP worker to schedule monitors. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "priority"?: number;
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

export namespace CreateWorkerDetails {
  export function getJsonObj(obj: CreateWorkerDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateWorkerDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}