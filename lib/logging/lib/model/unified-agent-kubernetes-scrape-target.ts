/**
 * Logging Management API
 * Use the Logging Management API to create, read, list, update, move and delete
log groups, log objects, log saved searches, and agent configurations.

For more information, see [Logging Overview](/iaas/Content/Logging/Concepts/loggingoverview.htm).

 * OpenAPI spec version: 20200531
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
 * Monitoring scrape object.
 */
export interface UnifiedAgentKubernetesScrapeTarget {
  /**
   * Type of resource to scrape metrics.
   */
  "resourceType": UnifiedAgentKubernetesScrapeTarget.ResourceType;
  /**
   * K8s namespace of the resource.
   */
  "k8sNamespace": string;
  /**
   * Name of the service prepended to the endpoints.
   */
  "serviceName"?: string;
  /**
   * Resource group in OCI monitoring.
   */
  "resourceGroup"?: string;
}

export namespace UnifiedAgentKubernetesScrapeTarget {
  export enum ResourceType {
    Pods = "PODS",
    Endpoints = "ENDPOINTS",
    Nodes = "NODES",
    Services = "SERVICES",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: UnifiedAgentKubernetesScrapeTarget): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UnifiedAgentKubernetesScrapeTarget): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}