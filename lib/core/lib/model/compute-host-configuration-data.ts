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
 * Compute Host Configuration Data
 *
 */
export interface ComputeHostConfigurationData {
  /**
   * The time that was last applied.
   */
  "timeLastApply"?: Date;
  "checkDetails"?: model.ComputeHostConfigurationCheckDetails;
}

export namespace ComputeHostConfigurationData {
  export function getJsonObj(obj: ComputeHostConfigurationData): object {
    const jsonObj = {
      ...obj,
      ...{
        "checkDetails": obj.checkDetails
          ? model.ComputeHostConfigurationCheckDetails.getJsonObj(obj.checkDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ComputeHostConfigurationData): object {
    const jsonObj = {
      ...obj,
      ...{
        "checkDetails": obj.checkDetails
          ? model.ComputeHostConfigurationCheckDetails.getDeserializedJsonObj(obj.checkDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
