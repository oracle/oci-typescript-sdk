/**
 * API Gateway API
 * API for the API Gateway service. Use this API to manage gateways, deployments, and related items.
For more information, see
[Overview of API Gateway](https://docs.oracle.com/iaas/Content/APIGateway/Concepts/apigatewayoverview.htm).

 * OpenAPI spec version: 20190501
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
 * A gateway is a virtual network appliance in a regional subnet. A gateway routes inbound traffic to back-end services including public, private, and partner HTTP APIs, as well as Oracle Functions. Avoid entering confidential information. For more information, see
 * [API Gateway Concepts](https://docs.oracle.com/iaas/Content/APIGateway/Concepts/apigatewayconcepts.htm).
 *
 */
export interface Gateway {
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the resource.
   *
   */
  "id": string;
  /**
    * A user-friendly name. Does not have to be unique, and it's changeable.
* Avoid entering confidential information.
* <p>
Example: {@code My new resource}
* 
    */
  "displayName"?: string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment in which the
   * resource is created.
   *
   */
  "compartmentId": string;
  /**
    * Gateway endpoint type. {@code PUBLIC} will have a public ip address assigned to it, while {@code PRIVATE} will only be
* accessible on a private IP address on the subnet.
* <p>
Example: {@code PUBLIC} or {@code PRIVATE}
* 
    */
  "endpointType": Gateway.EndpointType;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the subnet in which
   * related resources are created.
   *
   */
  "subnetId"?: string;
  /**
   * An array of Network Security Groups OCIDs associated with this API Gateway.
   *
   */
  "networkSecurityGroupIds"?: Array<string>;
  /**
   * The time this resource was created. An RFC3339 formatted datetime string.
   */
  "timeCreated"?: Date;
  /**
   * The time this resource was last updated. An RFC3339 formatted datetime string.
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the gateway.
   */
  "lifecycleState"?: Gateway.LifecycleState;
  /**
   * A message describing the current state in more detail.
   * For example, can be used to provide actionable information for a
   * resource in a Failed state.
   *
   */
  "lifecycleDetails"?: string;
  /**
   * Locks associated with this resource.
   */
  "locks"?: Array<model.ResourceLock>;
  /**
   * The hostname for APIs deployed on the gateway.
   */
  "hostname"?: string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the resource.
   *
   */
  "certificateId"?: string;
  /**
   * An array of IP addresses associated with the gateway.
   */
  "ipAddresses"?: Array<model.IpAddress>;
  "responseCacheDetails"?: model.ExternalRespCache | model.NoCache;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair
* with no predefined name, type, or namespace. For more information, see
* [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Department\": \"Finance\"}}
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see
* [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * System tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
  /**
   * An array of CA bundles that should be used on the Gateway for TLS validation.
   */
  "caBundles"?: Array<model.CaBundle>;
}

export namespace Gateway {
  export enum EndpointType {
    Public = "PUBLIC",
    Private = "PRIVATE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum LifecycleState {
    Creating = "CREATING",
    Active = "ACTIVE",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Gateway): object {
    const jsonObj = {
      ...obj,
      ...{
        "locks": obj.locks
          ? obj.locks.map(item => {
              return model.ResourceLock.getJsonObj(item);
            })
          : undefined,

        "ipAddresses": obj.ipAddresses
          ? obj.ipAddresses.map(item => {
              return model.IpAddress.getJsonObj(item);
            })
          : undefined,
        "responseCacheDetails": obj.responseCacheDetails
          ? model.ResponseCacheDetails.getJsonObj(obj.responseCacheDetails)
          : undefined,

        "caBundles": obj.caBundles
          ? obj.caBundles.map(item => {
              return model.CaBundle.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Gateway): object {
    const jsonObj = {
      ...obj,
      ...{
        "locks": obj.locks
          ? obj.locks.map(item => {
              return model.ResourceLock.getDeserializedJsonObj(item);
            })
          : undefined,

        "ipAddresses": obj.ipAddresses
          ? obj.ipAddresses.map(item => {
              return model.IpAddress.getDeserializedJsonObj(item);
            })
          : undefined,
        "responseCacheDetails": obj.responseCacheDetails
          ? model.ResponseCacheDetails.getDeserializedJsonObj(obj.responseCacheDetails)
          : undefined,

        "caBundles": obj.caBundles
          ? obj.caBundles.map(item => {
              return model.CaBundle.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
