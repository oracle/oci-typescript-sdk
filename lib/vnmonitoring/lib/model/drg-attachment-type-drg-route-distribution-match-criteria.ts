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
 * The attachment type from which the DRG will import routes. Routes will be imported from
 * all attachments of this type.
 *
 */
export interface DrgAttachmentTypeDrgRouteDistributionMatchCriteria
  extends model.DrgRouteDistributionMatchCriteria {
  /**
   * The type of the network resource to be included in this match. A match for a network type implies that all
   * DRG attachments of that type insert routes into the table.
   *
   */
  "attachmentType": DrgAttachmentTypeDrgRouteDistributionMatchCriteria.AttachmentType;

  "matchType": string;
}

export namespace DrgAttachmentTypeDrgRouteDistributionMatchCriteria {
  export enum AttachmentType {
    Vcn = "VCN",
    VirtualCircuit = "VIRTUAL_CIRCUIT",
    RemotePeeringConnection = "REMOTE_PEERING_CONNECTION",
    IpsecTunnel = "IPSEC_TUNNEL",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(
    obj: DrgAttachmentTypeDrgRouteDistributionMatchCriteria,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DrgRouteDistributionMatchCriteria.getJsonObj(
            obj
          ) as DrgAttachmentTypeDrgRouteDistributionMatchCriteria)),
      ...{}
    };

    return jsonObj;
  }
  export const matchType = "DRG_ATTACHMENT_TYPE";
  export function getDeserializedJsonObj(
    obj: DrgAttachmentTypeDrgRouteDistributionMatchCriteria,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DrgRouteDistributionMatchCriteria.getDeserializedJsonObj(
            obj
          ) as DrgAttachmentTypeDrgRouteDistributionMatchCriteria)),
      ...{}
    };

    return jsonObj;
  }
}
