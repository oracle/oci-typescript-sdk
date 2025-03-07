/**
 * Full Stack Disaster Recovery API
 * Use the Full Stack Disaster Recovery (DR) API to manage disaster recovery for business applications.
Full Stack DR is an OCI disaster recovery orchestration and management service that provides comprehensive disaster 
recovery capabilities for all layers of an application stack, including infrastructure, middleware, database, 
and application.

 * OpenAPI spec version: 20220125
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
 * Create properties for a network load balancer member.
 */
export interface CreateDrProtectionGroupMemberNetworkLoadBalancerDetails
  extends model.CreateDrProtectionGroupMemberDetails {
  /**
    * The OCID of the destination network load balancer.
* <p>
Example: {@code ocid1.networkloadbalancer.oc1..uniqueID}
* 
    */
  "destinationNetworkLoadBalancerId"?: string;
  /**
   * A list of backend set mappings that are used to transfer or update backends during DR.
   *
   */
  "backendSetMappings"?: Array<model.NetworkLoadBalancerBackendSetMappingDetails>;

  "memberType": string;
}

export namespace CreateDrProtectionGroupMemberNetworkLoadBalancerDetails {
  export function getJsonObj(
    obj: CreateDrProtectionGroupMemberNetworkLoadBalancerDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateDrProtectionGroupMemberDetails.getJsonObj(
            obj
          ) as CreateDrProtectionGroupMemberNetworkLoadBalancerDetails)),
      ...{
        "backendSetMappings": obj.backendSetMappings
          ? obj.backendSetMappings.map(item => {
              return model.NetworkLoadBalancerBackendSetMappingDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const memberType = "NETWORK_LOAD_BALANCER";
  export function getDeserializedJsonObj(
    obj: CreateDrProtectionGroupMemberNetworkLoadBalancerDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateDrProtectionGroupMemberDetails.getDeserializedJsonObj(
            obj
          ) as CreateDrProtectionGroupMemberNetworkLoadBalancerDetails)),
      ...{
        "backendSetMappings": obj.backendSetMappings
          ? obj.backendSetMappings.map(item => {
              return model.NetworkLoadBalancerBackendSetMappingDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
