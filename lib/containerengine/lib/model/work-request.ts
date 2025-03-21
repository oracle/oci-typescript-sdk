/**
 * Kubernetes Engine API
 * API for the Kubernetes Engine service (also known as the Container Engine for Kubernetes service). Use this API to build, deploy,
and manage cloud-native applications. For more information, see
[Overview of Kubernetes Engine](https://docs.oracle.com/iaas/Content/ContEng/Concepts/contengoverview.htm).

 * OpenAPI spec version: 20180222
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
 * An asynchronous work request.
 */
export interface WorkRequest {
  /**
   * The OCID of the work request.
   */
  "id"?: string;
  /**
   * The type of work the work request is doing.
   */
  "operationType"?: model.WorkRequestOperationType;
  /**
   * The current status of the work request.
   */
  "status"?: model.WorkRequestStatus;
  /**
   * The OCID of the compartment in which the work request exists.
   */
  "compartmentId"?: string;
  /**
   * The resources this work request affects.
   */
  "resources"?: Array<model.WorkRequestResource>;
  /**
   * The time the work request was accepted.
   */
  "timeAccepted"?: Date;
  /**
   * The time the work request was started.
   */
  "timeStarted"?: Date;
  /**
   * The time the work request was finished.
   */
  "timeFinished"?: Date;
}

export namespace WorkRequest {
  export function getJsonObj(obj: WorkRequest): object {
    const jsonObj = {
      ...obj,
      ...{
        "resources": obj.resources
          ? obj.resources.map(item => {
              return model.WorkRequestResource.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: WorkRequest): object {
    const jsonObj = {
      ...obj,
      ...{
        "resources": obj.resources
          ? obj.resources.map(item => {
              return model.WorkRequestResource.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
