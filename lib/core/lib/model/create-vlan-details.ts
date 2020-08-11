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
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

export interface CreateVlanDetails {
  /**
    * The availability domain of the VLAN.
* <p>
Example: `Uocm:PHX-AD-1`
* 
    */
  "availabilityDomain": string;
  /**
    * The range of IPv4 addresses that will be used for layer 3 communication with
* hosts outside the VLAN. The CIDR must maintain the following rules -
* <p>
a. The CIDR block is valid and correctly formatted.
* <p>
Example: `192.0.2.0/24`
* 
    */
  "cidrBlock": string;
  /**
   * The OCID of the compartment to contain the VLAN.
   */
  "compartmentId": string;
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * A descriptive name. Does not have to be unique, and it's changeable. Avoid entering confidential information.
   */
  "displayName"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * A list of the OCIDs of the network security groups (NSGs) to add all VNICs in the VLAN to. For more
   * information about NSGs, see
   * {@link NetworkSecurityGroup}.
   *
   */
  "nsgIds"?: Array<string>;
  /**
   * The OCID of the route table the VLAN will use. If you don't provide a value,
   * the VLAN uses the VCN's default route table.
   *
   */
  "routeTableId"?: string;
  /**
   * The OCID of the VCN to contain the VLAN.
   */
  "vcnId": string;
  /**
   * The IEEE 802.1Q VLAN tag for this VLAN. The value must be unique across all
   * VLANs in the VCN. If you don't provide a value, Oracle assigns one.
   * You cannot change the value later. VLAN tag 0 is reserved for use by Oracle.
   *
   */
  "vlanTag"?: number;
}

export namespace CreateVlanDetails {
  export function getJsonObj(obj: CreateVlanDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}