/**
 * Bastion API
 * Use the Bastion API to provide restricted and time-limited access to target resources that don't have public endpoints. Bastions let authorized users connect from specific IP addresses to target resources using Secure Shell (SSH) sessions. For more information, see [the Bastion documentation](https://docs.oracle.com/iaas/Content/Bastion/home.htm).
 * OpenAPI spec version: 20210331
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
 * A bastion resource. A bastion provides secured, public access to target resources in the cloud that you cannot otherwise reach from the internet. A bastion resides in a public subnet and establishes the network infrastructure needed to connect a user to a target resource in a private subnet.
 */
export interface Bastion {
  /**
   * The type of bastion.
   */
  "bastionType": string;
  /**
   * The unique identifier (OCID) of the bastion, which can't be changed after creation.
   */
  "id": string;
  /**
   * The name of the bastion, which can't be changed after creation.
   */
  "name": string;
  /**
   * The unique identifier (OCID) of the compartment where the bastion is located.
   */
  "compartmentId": string;
  /**
   * The unique identifier (OCID) of the virtual cloud network (VCN) that the bastion connects to.
   */
  "targetVcnId": string;
  /**
   * The unique identifier (OCID) of the subnet that the bastion connects to.
   */
  "targetSubnetId": string;
  /**
   * The phonebook entry of the customer's team, which can't be changed after creation. Not applicable to {@code standard} bastions.
   *
   */
  "phoneBookEntry"?: string;
  /**
   * A list of address ranges in CIDR notation that you want to allow to connect to sessions hosted by this bastion.
   */
  "clientCidrBlockAllowList"?: Array<string>;
  /**
   * A list of IP addresses of the hosts that the bastion has access to. Not applicable to {@code standard} bastions.
   *
   */
  "staticJumpHostIpAddresses"?: Array<string>;
  /**
   * The private IP address of the created private endpoint.
   */
  "privateEndpointIpAddress"?: string;
  /**
   * The maximum amount of time that any session on the bastion can remain active. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxSessionTtlInSeconds": number;
  /**
   * The maximum number of active sessions allowed on the bastion. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxSessionsAllowed"?: number;
  /**
   * The current dns proxy status of the bastion.
   */
  "dnsProxyStatus"?: model.BastionDnsProxyStatus;
  /**
   * The time the bastion was created. Format is defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   * Example: {@code 2020-01-25T21:10:29.600Z}
   *
   */
  "timeCreated": Date;
  /**
   * The time the bastion was updated. Format is defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   * Example: {@code 2020-01-25T21:10:29.600Z}
   *
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the bastion.
   */
  "lifecycleState": model.BastionLifecycleState;
  /**
   * A message describing the current state in more detail.
   */
  "lifecycleDetails"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces.
   * Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace Bastion {
  export function getJsonObj(obj: Bastion): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Bastion): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
