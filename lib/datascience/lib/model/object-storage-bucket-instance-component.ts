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
 * Reference to Object Storage Bucket
 */
export interface ObjectStorageBucketInstanceComponent extends model.InstanceComponent {
  /**
   * Object Storage namespace
   */
  "namespace": string;
  /**
   * OCID of Object Storage Bucket
   */
  "bucketId": string;

  "type": string;
}

export namespace ObjectStorageBucketInstanceComponent {
  export function getJsonObj(
    obj: ObjectStorageBucketInstanceComponent,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.InstanceComponent.getJsonObj(obj) as ObjectStorageBucketInstanceComponent)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "OBJECT_STORAGE_BUCKET";
  export function getDeserializedJsonObj(
    obj: ObjectStorageBucketInstanceComponent,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.InstanceComponent.getDeserializedJsonObj(
            obj
          ) as ObjectStorageBucketInstanceComponent)),
      ...{}
    };

    return jsonObj;
  }
}
