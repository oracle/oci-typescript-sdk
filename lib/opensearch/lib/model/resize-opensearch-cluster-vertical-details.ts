/**
 * OpenSearch Service API
 * The OpenSearch service API provides access to OCI Search Service with OpenSearch.
 * OpenAPI spec version: 20180828
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
 * The OCPU and memory configuration to update on an existing OpenSearch cluster for [vertical resizing](https://docs.oracle.com/iaas/Content/search-opensearch/Tasks/resizingacluster.htm#vertical).
 */
export interface ResizeOpensearchClusterVerticalDetails {
  /**
   * The number of OCPUs to configure for the cluster's master nodes. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "masterNodeHostOcpuCount"?: number;
  /**
   * The amount of memory in GB, to configure for the cluster's master nodes. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "masterNodeHostMemoryGB"?: number;
  /**
   * The node shape for the cluster's master nodes.
   */
  "masterNodeHostShape"?: string;
  /**
   * The number of OCPUs to configure for the cluster's data nodes. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "dataNodeHostOcpuCount"?: number;
  /**
   * The amount of memory in GB, to configure for the cluster's data nodes. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "dataNodeHostMemoryGB"?: number;
  /**
   * The amount of storage in GB, to configure per node for the cluster's data nodes. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "dataNodeStorageGB"?: number;
  /**
   * The node shape for the cluster's data nodes.
   */
  "dataNodeHostShape"?: string;
  /**
   * The number of OCPUs to configure for the cluster's OpenSearch Dashboard nodes. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "opendashboardNodeHostOcpuCount"?: number;
  /**
   * The amount of memory in GB, to configure for the cluster's OpenSearch Dashboard nodes. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "opendashboardNodeHostMemoryGB"?: number;
  /**
   * The node shape for the cluster's OpenSearch Dashboard nodes.
   */
  "opendashboardNodeHostShape"?: string;
  /**
   * The node shape for the cluster's search nodes.
   */
  "searchNodeHostShape"?: string;
  /**
   * The number of OCPUs configured for the cluster's search nodes. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "searchNodeHostOcpuCount"?: number;
  /**
   * The amount of memory in GB, for the cluster's search nodes. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "searchNodeHostMemoryGB"?: number;
  /**
   * The amount of storage in GB, to configure per node for the cluster's search nodes. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "searchNodeStorageGB"?: number;
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

export namespace ResizeOpensearchClusterVerticalDetails {
  export function getJsonObj(obj: ResizeOpensearchClusterVerticalDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ResizeOpensearchClusterVerticalDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
