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
* Represents a router that connects the edge of a VCN with the Internet. For an example scenario
* that uses an internet gateway, see
* [Typical Networking Service Scenarios](https://docs.oracle.com/iaas/Content/Network/Concepts/overview.htm#scenarios).
* <p>
To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized,
* talk to an administrator. If you're an administrator who needs to write policies to give users access, see
* [Getting Started with Policies](https://docs.oracle.com/iaas/Content/Identity/Concepts/policygetstarted.htm).
* 
*/
export interface InternetGateway {
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the internet gateway.
   */
  "compartmentId": string;
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Department\": \"Finance\"}}
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * The internet gateway's Oracle ID ([OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm)).
   */
  "id": string;
  /**
   * Whether the gateway is enabled. When the gateway is disabled, traffic is not
   * routed to/from the Internet, regardless of route rules.
   *
   */
  "isEnabled"?: boolean;
  /**
   * The internet gateway's current state.
   */
  "lifecycleState": InternetGateway.LifecycleState;
  /**
    * The date and time the internet gateway was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
* <p>
Example: {@code 2016-08-25T21:10:29.600Z}
* 
    */
  "timeCreated"?: Date;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the VCN the Internet Gateway belongs to.
   */
  "vcnId": string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the route table the Internet Gateway is using.
   */
  "routeTableId"?: string;
}

export namespace InternetGateway {
  export enum LifecycleState {
    Provisioning = "PROVISIONING",
    Available = "AVAILABLE",
    Terminating = "TERMINATING",
    Terminated = "TERMINATED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: InternetGateway): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: InternetGateway): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
