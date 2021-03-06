/**
 * Core Services API
 * API covering the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services. Use this API
to manage resources such as virtual cloud networks (VCNs), compute instances, and
block storage volumes.

 * OpenAPI spec version: 20160918
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Deprecated. For tunnel information, instead see
 * {@link IPSecConnectionTunnel}.
 *
 */
export interface IPSecConnectionDeviceStatus {
  /**
   * The OCID of the compartment containing the IPSec connection.
   */
  "compartmentId": string;
  /**
   * The IPSec connection's Oracle ID (OCID).
   */
  "id": string;
  /**
    * The date and time the IPSec connection was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated"?: Date;
  /**
   * Two {@link TunnelStatus} objects.
   */
  "tunnels"?: Array<model.TunnelStatus>;
}

export namespace IPSecConnectionDeviceStatus {
  export function getJsonObj(obj: IPSecConnectionDeviceStatus): object {
    const jsonObj = {
      ...obj,
      ...{
        "tunnels": obj.tunnels
          ? obj.tunnels.map(item => {
              return model.TunnelStatus.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: IPSecConnectionDeviceStatus): object {
    const jsonObj = {
      ...obj,
      ...{
        "tunnels": obj.tunnels
          ? obj.tunnels.map(item => {
              return model.TunnelStatus.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
