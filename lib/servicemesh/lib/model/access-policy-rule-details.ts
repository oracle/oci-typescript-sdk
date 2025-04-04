/**
 * Service Mesh API
 * Use the Service Mesh API to manage mesh, virtual service, access policy and other mesh related items.
 * OpenAPI spec version: 20220615
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
 * Access policy rule.
 */
export interface AccessPolicyRuleDetails {
  /**
   * Action for the traffic between the source and the destination.
   */
  "action": AccessPolicyRuleDetails.Action;
  "source":
    | model.ExternalServiceAccessPolicyTargetDetails
    | model.VirtualServiceAccessPolicyTargetDetails
    | model.AllVirtualServicesAccessPolicyTargetDetails
    | model.IngressGatewayAccessPolicyTargetDetails;
  "destination":
    | model.ExternalServiceAccessPolicyTargetDetails
    | model.VirtualServiceAccessPolicyTargetDetails
    | model.AllVirtualServicesAccessPolicyTargetDetails
    | model.IngressGatewayAccessPolicyTargetDetails;
}

export namespace AccessPolicyRuleDetails {
  export enum Action {
    Allow = "ALLOW"
  }

  export function getJsonObj(obj: AccessPolicyRuleDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "source": obj.source ? model.AccessPolicyTargetDetails.getJsonObj(obj.source) : undefined,
        "destination": obj.destination
          ? model.AccessPolicyTargetDetails.getJsonObj(obj.destination)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AccessPolicyRuleDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "source": obj.source
          ? model.AccessPolicyTargetDetails.getDeserializedJsonObj(obj.source)
          : undefined,
        "destination": obj.destination
          ? model.AccessPolicyTargetDetails.getDeserializedJsonObj(obj.destination)
          : undefined
      }
    };

    return jsonObj;
  }
}
