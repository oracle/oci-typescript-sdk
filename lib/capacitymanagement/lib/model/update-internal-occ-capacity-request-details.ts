/**
 * OCI Control Center Capacity Management API
 * OCI Control Center (OCC) Capacity Management enables you to manage capacity requests in realms where OCI Control Center Capacity Management is available. For more information, see [OCI Control Center](https://docs.oracle.com/iaas/Content/control-center/home.htm).
 * OpenAPI spec version: 20231107
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
 * The details required for making an internal API update call for the capacity requests.
 */
export interface UpdateInternalOccCapacityRequestDetails {
  /**
   * The subset of request states available internally for updating the capacity request.
   */
  "requestState"?: UpdateInternalOccCapacityRequestDetails.RequestState;
  /**
   * A message describing the current state in more detail. For example, can be used to provide actionable information for a resource in a Failed State.
   */
  "lifecycleDetails"?: string;
}

export namespace UpdateInternalOccCapacityRequestDetails {
  export enum RequestState {
    Resolved = "RESOLVED",
    Rejected = "REJECTED",
    InProgress = "IN_PROGRESS"
  }

  export function getJsonObj(obj: UpdateInternalOccCapacityRequestDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateInternalOccCapacityRequestDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
