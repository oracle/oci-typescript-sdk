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
 * The properties that define an upstream error while managing a node.
 */
export interface NodeError {
  /**
   * A short error code that defines the upstream error, meant for programmatic parsing. See [API Errors](https://docs.oracle.com/iaas/Content/API/References/apierrors.htm).
   */
  "code": string;
  /**
   * A human-readable error string of the upstream error.
   */
  "message": string;
  /**
   * The status of the HTTP response encountered in the upstream error.
   */
  "status"?: string;
  /**
   * Unique Oracle-assigned identifier for the upstream request. If you need to contact Oracle about a particular upstream request, please provide the request ID.
   */
  "opcRequestId"?: string;
}

export namespace NodeError {
  export function getJsonObj(obj: NodeError): object {
    const jsonObj = {
      ...obj,
      ...{
        "opc-request-id": obj.opcRequestId
      }
    };

    delete (jsonObj as Partial<NodeError>).opcRequestId;

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: NodeError): object {
    const jsonObj = {
      ...obj,
      ...{
        "opcRequestId": (obj as any)["opc-request-id"]
      }
    };

    delete (jsonObj as any)["opc-request-id"];

    return jsonObj;
  }
}
