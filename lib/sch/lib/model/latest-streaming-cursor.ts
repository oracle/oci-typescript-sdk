/**
 * Connector Hub API
 * Use the Connector Hub API to transfer data between services in Oracle Cloud Infrastructure.
For more information about Connector Hub, see
[the Connector Hub documentation](https://docs.oracle.com/iaas/Content/connector-hub/home.htm).
Connector Hub is formerly known as Service Connector Hub.

 * OpenAPI spec version: 20200909
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
 * {@code LATEST} cursor type. Starts reading messages published after creating the connector.
 * For configuration instructions, see
 * [Creating a Connector with a Streaming Source](https://docs.oracle.com/iaas/Content/connector-hub/create-service-connector-streaming-source.htm).
 *
 */
export interface LatestStreamingCursor extends model.StreamingCursorDetails {
  "kind": string;
}

export namespace LatestStreamingCursor {
  export function getJsonObj(obj: LatestStreamingCursor, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.StreamingCursorDetails.getJsonObj(obj) as LatestStreamingCursor)),
      ...{}
    };

    return jsonObj;
  }
  export const kind = "LATEST";
  export function getDeserializedJsonObj(
    obj: LatestStreamingCursor,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.StreamingCursorDetails.getDeserializedJsonObj(obj) as LatestStreamingCursor)),
      ...{}
    };

    return jsonObj;
  }
}
