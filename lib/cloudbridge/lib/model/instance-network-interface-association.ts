/**
 * Oracle Cloud Bridge API
 * API for Oracle Cloud Bridge service.
 * OpenAPI spec version: 20220509
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
 * Describes association information for an Elastic IP address (IPv4).
 */
export interface InstanceNetworkInterfaceAssociation {
  /**
   * The carrier IP address associated with the network interface.
   */
  "carrierIp"?: string;
  /**
   * The customer-owned IP address associated with the network interface.
   */
  "customerOwnedIp"?: string;
  /**
   * The ID of the owner of the Elastic IP address.
   */
  "ipOwnerKey"?: string;
  /**
   * The public DNS name.
   */
  "publicDnsName"?: string;
  /**
   * The public IP address or Elastic IP address bound to the network interface.
   */
  "publicIp"?: string;
}

export namespace InstanceNetworkInterfaceAssociation {
  export function getJsonObj(obj: InstanceNetworkInterfaceAssociation): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: InstanceNetworkInterfaceAssociation): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
