/**
 * Anomaly Detection API
 * OCI AI Service solutions can help Enterprise customers integrate AI into their products immediately by using our proven,
pre-trained/custom models or containers, and without a need to set up in house team of AI and ML experts.
This allows enterprises to focus on business drivers and development work rather than AI/ML operations, shortening the time to market.

 * OpenAPI spec version: 20210101
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
 * Description of DataAsset.
 */
export interface DataAsset {
  /**
   * The Unique Oracle ID (OCID) that is immutable on creation.
   */
  "id": string;
  /**
   * The OCID of the compartment containing the DataAsset.
   */
  "compartmentId": string;
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information.
   */
  "displayName": string;
  /**
   * A short description of the data asset.
   */
  "description"?: string;
  /**
   * The time the the DataAsset was created. An RFC3339 formatted datetime string
   */
  "timeCreated": Date;
  /**
   * The time the the DataAsset was updated. An RFC3339 formatted datetime string
   */
  "timeUpdated"?: Date;
  /**
   * The lifecycle state of the Data Asset.
   */
  "lifecycleState": DataAsset.LifecycleState;
  /**
   * The Unique project id which is created at project creation that is immutable on creation.
   */
  "projectId": string;
  "dataSourceDetails":
    | model.DataSourceDetailsObjectStorage
    | model.DataSourceDetailsInflux
    | model.DataSourceDetailsATP;
  /**
   * OCID of Private Endpoint.
   */
  "privateEndpointId"?: string;
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
   * Example: {@code { \"orcl-cloud\": { \"free-tier-retained\": \"true\" } }}
   *
   */
  "systemTags"?: { [key: string]: any };
}

export namespace DataAsset {
  export enum LifecycleState {
    Active = "ACTIVE",
    Deleted = "DELETED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: DataAsset): object {
    const jsonObj = {
      ...obj,
      ...{
        "dataSourceDetails": obj.dataSourceDetails
          ? model.DataSourceDetails.getJsonObj(obj.dataSourceDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DataAsset): object {
    const jsonObj = {
      ...obj,
      ...{
        "dataSourceDetails": obj.dataSourceDetails
          ? model.DataSourceDetails.getDeserializedJsonObj(obj.dataSourceDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
