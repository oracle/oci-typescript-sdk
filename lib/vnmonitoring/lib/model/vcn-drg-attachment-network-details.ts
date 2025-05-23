/**
 * Network Monitoring API
 * Use the Network Monitoring API to troubleshoot routing and security issues for resources such as virtual cloud networks (VCNs) and compute instances. For more information, see the console
documentation for the [Network Path Analyzer](https://docs.oracle.com/iaas/Content/Network/Concepts/path_analyzer.htm) tool.

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
 * Specifies details within the VCN.
 */
export interface VcnDrgAttachmentNetworkDetails extends model.DrgAttachmentNetworkDetails {
  /**
    * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the route table the DRG attachment is using.
* <p>
For information about why you would associate a route table with a DRG attachment, see:
* <p>
  * [Transit Routing: Access to Multiple VCNs in Same Region](https://docs.oracle.com/iaas/Content/Network/Tasks/transitrouting.htm)
*   * [Transit Routing: Private Access to Oracle Services](https://docs.oracle.com/iaas/Content/Network/Tasks/transitroutingoracleservices.htm)
* 
    */
  "routeTableId"?: string;
  /**
   * Indicates whether the VCN CIDRs or the individual subnet CIDRs are imported from the attachment.
   * Routes from the VCN ingress route table are always imported.
   *
   */
  "vcnRouteType"?: VcnDrgAttachmentNetworkDetails.VcnRouteType;

  "type": string;
}

export namespace VcnDrgAttachmentNetworkDetails {
  export enum VcnRouteType {
    VcnCidrs = "VCN_CIDRS",
    SubnetCidrs = "SUBNET_CIDRS",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(
    obj: VcnDrgAttachmentNetworkDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DrgAttachmentNetworkDetails.getJsonObj(obj) as VcnDrgAttachmentNetworkDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "VCN";
  export function getDeserializedJsonObj(
    obj: VcnDrgAttachmentNetworkDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DrgAttachmentNetworkDetails.getDeserializedJsonObj(
            obj
          ) as VcnDrgAttachmentNetworkDetails)),
      ...{}
    };

    return jsonObj;
  }
}
