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
 * Specifies the update details for the VCN attachment.
 */
export interface VcnDrgAttachmentNetworkUpdateDetails
  extends model.DrgAttachmentNetworkUpdateDetails {
  /**
    * This is the [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the route table that is used to route the traffic as it enters a VCN through this attachment.
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
  "vcnRouteType"?: string;

  "type": string;
}

export namespace VcnDrgAttachmentNetworkUpdateDetails {
  export function getJsonObj(
    obj: VcnDrgAttachmentNetworkUpdateDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DrgAttachmentNetworkUpdateDetails.getJsonObj(
            obj
          ) as VcnDrgAttachmentNetworkUpdateDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "VCN";
  export function getDeserializedJsonObj(
    obj: VcnDrgAttachmentNetworkUpdateDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DrgAttachmentNetworkUpdateDetails.getDeserializedJsonObj(
            obj
          ) as VcnDrgAttachmentNetworkUpdateDetails)),
      ...{}
    };

    return jsonObj;
  }
}
