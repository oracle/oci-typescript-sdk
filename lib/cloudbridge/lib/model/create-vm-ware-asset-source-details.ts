/**
 * Oracle Cloud Bridge API
 * API for Oracle Cloud Bridge service.
 * OpenAPI spec version: 20220509
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
 * VMware asset source creation request.
 */
export interface CreateVmWareAssetSourceDetails extends model.CreateAssetSourceDetails {
  /**
   * Endpoint for VMware asset discovery and replication in the form of {@code https://<host>:<port>/sdk}
   */
  "vcenterEndpoint": string;
  "discoveryCredentials": model.AssetSourceCredentials;
  "replicationCredentials"?: model.AssetSourceCredentials;
  /**
   * Flag indicating whether historical metrics are collected for assets, originating from this asset source.
   */
  "areHistoricalMetricsCollected"?: boolean;
  /**
   * Flag indicating whether real-time metrics are collected for assets, originating from this asset source.
   */
  "areRealtimeMetricsCollected"?: boolean;

  "type": string;
}

export namespace CreateVmWareAssetSourceDetails {
  export function getJsonObj(
    obj: CreateVmWareAssetSourceDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateAssetSourceDetails.getJsonObj(obj) as CreateVmWareAssetSourceDetails)),
      ...{
        "discoveryCredentials": obj.discoveryCredentials
          ? model.AssetSourceCredentials.getJsonObj(obj.discoveryCredentials)
          : undefined,
        "replicationCredentials": obj.replicationCredentials
          ? model.AssetSourceCredentials.getJsonObj(obj.replicationCredentials)
          : undefined
      }
    };

    return jsonObj;
  }
  export const type = "VMWARE";
  export function getDeserializedJsonObj(
    obj: CreateVmWareAssetSourceDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateAssetSourceDetails.getDeserializedJsonObj(
            obj
          ) as CreateVmWareAssetSourceDetails)),
      ...{
        "discoveryCredentials": obj.discoveryCredentials
          ? model.AssetSourceCredentials.getDeserializedJsonObj(obj.discoveryCredentials)
          : undefined,
        "replicationCredentials": obj.replicationCredentials
          ? model.AssetSourceCredentials.getDeserializedJsonObj(obj.replicationCredentials)
          : undefined
      }
    };

    return jsonObj;
  }
}
