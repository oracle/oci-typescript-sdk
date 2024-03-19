/**
 * Connector Hub API
 * Use the Connector Hub API to transfer data between services in Oracle Cloud Infrastructure.
For more information about Connector Hub, see
[the Connector Hub documentation](/iaas/Content/connector-hub/home.htm).
Connector Hub is formerly known as Service Connector Hub.

 * OpenAPI spec version: 20200909
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
 * A list of connector plugins that match filter criteria. Results contain {@code ConnectorPlugin} objects.
 *
 */
export interface ConnectorPluginCollection {
  /**
   * A list of connector plugins.
   *
   */
  "items": Array<model.ConnectorPluginSummary>;
}

export namespace ConnectorPluginCollection {
  export function getJsonObj(obj: ConnectorPluginCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.ConnectorPluginSummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ConnectorPluginCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.ConnectorPluginSummary.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}