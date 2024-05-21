/**
 * OS Management Hub API
 * Use the OS Management Hub API to manage and monitor updates and patches for instances in OCI, your private data center, or 3rd-party clouds. 
For more information, see [Overview of OS Management Hub](https://docs.cloud.oracle.com/iaas/osmh/doc/overview.htm).

 * OpenAPI spec version: 20220901
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Provides information about the agent event.
 */
export interface AgentEvent extends model.Event {
  "data": model.AgentEventData;

  "type": string;
}

export namespace AgentEvent {
  export function getJsonObj(obj: AgentEvent, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Event.getJsonObj(obj) as AgentEvent)),
      ...{
        "data": obj.data ? model.AgentEventData.getJsonObj(obj.data) : undefined
      }
    };

    return jsonObj;
  }
  export const type = "AGENT";
  export function getDeserializedJsonObj(obj: AgentEvent, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Event.getDeserializedJsonObj(obj) as AgentEvent)),
      ...{
        "data": obj.data ? model.AgentEventData.getDeserializedJsonObj(obj.data) : undefined
      }
    };

    return jsonObj;
  }
}