/**
 * Database Management API
 * Use the Database Management API to monitor and manage resources such as
Oracle Databases, MySQL Databases, and External Database Systems. 
For more information, see [Database Management](https://docs.oracle.com/iaas/database-management/home.htm).

 * OpenAPI spec version: 20201101
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
 * The details of the job execution result stored in Object Storage. The
 * job execution result could be accessed using the Object Storage API.
 *
 */
export interface ObjectStorageJobExecutionResultDetails extends model.JobExecutionResultDetails {
  /**
   * The Object Storage namespace used for job execution result storage.
   */
  "namespaceName"?: string;
  /**
   * The name of the bucket used for job execution result storage.
   */
  "bucketName"?: string;
  /**
   * The name of the object containing the job execution result.
   */
  "objectName"?: string;
  /**
   * The number of rows returned in the result for the Query SqlType. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "rowCount"?: number;

  "type": string;
}

export namespace ObjectStorageJobExecutionResultDetails {
  export function getJsonObj(
    obj: ObjectStorageJobExecutionResultDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.JobExecutionResultDetails.getJsonObj(
            obj
          ) as ObjectStorageJobExecutionResultDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "OBJECT_STORAGE";
  export function getDeserializedJsonObj(
    obj: ObjectStorageJobExecutionResultDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.JobExecutionResultDetails.getDeserializedJsonObj(
            obj
          ) as ObjectStorageJobExecutionResultDetails)),
      ...{}
    };

    return jsonObj;
  }
}
