/**
 * Secure Desktops API
 * Create and manage cloud-hosted desktops which can be accessed from a web browser or installed client.

 * OpenAPI spec version: 20220618
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
 * A list of desktops within a desktop pool.
 */
export interface DesktopPoolDesktopCollection {
  /**
   * A list of desktops.
   */
  "items": Array<model.DesktopPoolDesktopSummary>;
}

export namespace DesktopPoolDesktopCollection {
  export function getJsonObj(obj: DesktopPoolDesktopCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.DesktopPoolDesktopSummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DesktopPoolDesktopCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.DesktopPoolDesktopSummary.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
