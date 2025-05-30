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
 * A list containing detailed delivery information about different resource demanded as part of the demand signal.
 *
 */
export interface OccmDemandSignalDeliveryCollection {
  /**
   * An array of items containing detailed information about demand signal delivery resources.
   *
   */
  "items": Array<model.OccmDemandSignalDeliverySummary>;
}

export namespace OccmDemandSignalDeliveryCollection {
  export function getJsonObj(obj: OccmDemandSignalDeliveryCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.OccmDemandSignalDeliverySummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: OccmDemandSignalDeliveryCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.OccmDemandSignalDeliverySummary.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
