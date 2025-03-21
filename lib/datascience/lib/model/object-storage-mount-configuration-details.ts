/**
 * Data Science API
 * Use the Data Science API to organize your data science work, access data and computing resources, and build, train, deploy and manage models and model deployments. For more information, see [Data Science](https://docs.oracle.com/iaas/data-science/using/data-science.htm).

 * OpenAPI spec version: 20190101
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
 * The Object Storage Configuration Details.
 */
export interface ObjectStorageMountConfigurationDetails
  extends model.StorageMountConfigurationDetails {
  /**
   * The object storage namespace
   */
  "namespace": string;
  /**
   * The object storage bucket
   */
  "bucket": string;
  /**
   * Prefix in the bucket to mount
   */
  "prefix"?: string;

  "storageType": string;
}

export namespace ObjectStorageMountConfigurationDetails {
  export function getJsonObj(
    obj: ObjectStorageMountConfigurationDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.StorageMountConfigurationDetails.getJsonObj(
            obj
          ) as ObjectStorageMountConfigurationDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const storageType = "OBJECT_STORAGE";
  export function getDeserializedJsonObj(
    obj: ObjectStorageMountConfigurationDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.StorageMountConfigurationDetails.getDeserializedJsonObj(
            obj
          ) as ObjectStorageMountConfigurationDetails)),
      ...{}
    };

    return jsonObj;
  }
}
