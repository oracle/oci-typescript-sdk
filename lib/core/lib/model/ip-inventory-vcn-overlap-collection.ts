/**
 * Core Services API
 * Use the Core Services API to manage resources such as virtual cloud networks (VCNs),
compute instances, and block storage volumes. For more information, see the console
documentation for the [Networking](https://docs.oracle.com/iaas/Content/Network/Concepts/overview.htm),
[Compute](https://docs.oracle.com/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](https://docs.oracle.com/iaas/Content/Block/Concepts/overview.htm) services.
The required permissions are documented in the
[Details for the Core Services](https://docs.oracle.com/iaas/Content/Identity/Reference/corepolicyreference.htm) article.

 * OpenAPI spec version: 20160918
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
 * The details of the overlapping VCNs and compartments.
 */
export interface IpInventoryVcnOverlapCollection {
  /**
   * The timestamp of the latest update from the database in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   * Example: {@code 2016-08-25T21:10:29.600Z}
   *
   */
  "lastUpdatedTimestamp"?: Date;
  /**
   * Lists {@code IpInventoryVcnOverlapSummary} object.
   *
   */
  "ipInventoryVcnOverlapSummary"?: Array<model.IpInventoryVcnOverlapSummary>;
  /**
   * Indicates the status of the data.
   */
  "message"?: string;
  /**
   * The overlap count for the given VCN and compartments. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "overlapCount"?: number;
}

export namespace IpInventoryVcnOverlapCollection {
  export function getJsonObj(obj: IpInventoryVcnOverlapCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "ipInventoryVcnOverlapSummary": obj.ipInventoryVcnOverlapSummary
          ? obj.ipInventoryVcnOverlapSummary.map(item => {
              return model.IpInventoryVcnOverlapSummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: IpInventoryVcnOverlapCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "ipInventoryVcnOverlapSummary": obj.ipInventoryVcnOverlapSummary
          ? obj.ipInventoryVcnOverlapSummary.map(item => {
              return model.IpInventoryVcnOverlapSummary.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
