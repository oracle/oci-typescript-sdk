/**
 * DevOps API
 * Use the DevOps API to create DevOps projects, configure code repositories,  add artifacts to deploy, build and test software applications, configure  target deployment environments, and deploy software applications.  For more information, see [DevOps](https://docs.oracle.com/iaas/Content/devops/using/home.htm).
 * OpenAPI spec version: 20210630
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
 * A resource created or operated on by a work request.
 */
export interface WorkRequestResource {
  /**
   * The resource type the work request affects.
   */
  "entityType": string;
  /**
   * The way how the work is tracked in the work request affects this resource.  A resource that is created, updated, or deleted remains in the IN PROGRESS state until the work is complete for that resource.  Thereafter it transitions to CREATED, UPDATED, or DELETED state.
   */
  "actionType": model.ActionType;
  /**
   * The identifier of the resource the work request affects.
   */
  "identifier": string;
  /**
   * The URI path that the user can use to access the resource metadata.
   */
  "entityUri"?: string;
}

export namespace WorkRequestResource {
  export function getJsonObj(obj: WorkRequestResource): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: WorkRequestResource): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
