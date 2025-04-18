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
 * AWS asset source update request.
 */
export interface UpdateAwsAssetSourceDetails extends model.UpdateAssetSourceDetails {
  "discoveryCredentials"?: model.AssetSourceCredentials;
  "replicationCredentials"?: model.AssetSourceCredentials;
  /**
   * Flag indicating whether historical metrics are collected for assets, originating from this asset source.
   */
  "areHistoricalMetricsCollected"?: boolean;
  /**
   * Flag indicating whether real-time metrics are collected for assets, originating from this asset source.
   */
  "areRealtimeMetricsCollected"?: boolean;
  /**
   * Flag indicating whether cost data collection is enabled for assets, originating from this asset source.
   */
  "isCostInformationCollected"?: boolean;

  "type": string;
}

export namespace UpdateAwsAssetSourceDetails {
  export function getJsonObj(obj: UpdateAwsAssetSourceDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateAssetSourceDetails.getJsonObj(obj) as UpdateAwsAssetSourceDetails)),
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
  export const type = "AWS";
  export function getDeserializedJsonObj(
    obj: UpdateAwsAssetSourceDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateAssetSourceDetails.getDeserializedJsonObj(
            obj
          ) as UpdateAwsAssetSourceDetails)),
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
