/**
 * OCI Control Center Capacity Management API
 * OCI Control Center (OCC) Capacity Management enables you to manage capacity requests in realms where OCI Control Center Capacity Management is available. For more information, see [OCI Control Center](/iaas/Content/control-center/home.htm).
 * OpenAPI spec version: 20231107
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
 * Details about the resource block that was handed over.
 *
 */
export interface AssociatedOccHandoverResourceBlock {
  /**
   * The OCID of the handed over resource block.
   *
   */
  "occHandoverResourceBlockId"?: string;
  /**
   * The total quantity of the resource that was made available to the customer as part of this resource block
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "handoverQuantity"?: number;
}

export namespace AssociatedOccHandoverResourceBlock {
  export function getJsonObj(obj: AssociatedOccHandoverResourceBlock): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AssociatedOccHandoverResourceBlock): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}