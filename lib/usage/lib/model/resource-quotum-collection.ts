/**
 * Usage Proxy API
 * Use the Usage Proxy API to list Oracle Support Rewards, view related detailed usage information, and manage users who redeem rewards. For more information, see [Oracle Support Rewards Overview](https://docs.oracle.com/iaas/Content/Billing/Concepts/supportrewardsoverview.htm).
 * OpenAPI spec version: 20190111
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
 * The quota details of resources under a tenancy.
 */
export interface ResourceQuotumCollection {
  /**
   * The list of resource quota details.
   */
  "items": Array<model.ResourceQuotumSummary>;
  /**
   * Used to indicate if further quota consumption isAllowed.
   */
  "isAllowed": boolean;
}

export namespace ResourceQuotumCollection {
  export function getJsonObj(obj: ResourceQuotumCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.ResourceQuotumSummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ResourceQuotumCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.ResourceQuotumSummary.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
