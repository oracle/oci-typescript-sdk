/**
 * Oracle API Access Control
 * This service is used to restrict the control plane service apis; so that everybody won't be 
able to access those apis.
There are two main resouces defined as a part of this service
1. PrivilegedApiControl: This is created by the customer which defines which service apis are 
   controlled and who can access it.
2. PrivilegedApiRequest: This is a request object again created by the customer operators who           seek access to those privileged apis. After a request is obtained based on the                       PrivilegedAccessControl for which the api belongs to, either it can be approved so that the          requested person can execute the service apis or it will wait for the customer to approve it.

 * OpenAPI spec version: 20241130
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
 * A list of work request logs. Can contain both logs and other information, such as metadata.
 */
export interface WorkRequestLogEntryCollection {
  /**
   * A list of work request log entries.
   */
  "items": Array<model.WorkRequestLogEntry>;
}

export namespace WorkRequestLogEntryCollection {
  export function getJsonObj(obj: WorkRequestLogEntryCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.WorkRequestLogEntry.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: WorkRequestLogEntryCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.WorkRequestLogEntry.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
