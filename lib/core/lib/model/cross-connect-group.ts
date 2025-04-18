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
* For use with Oracle Cloud Infrastructure FastConnect. A cross-connect group
* is a link aggregation group (LAG), which can contain one or more
* {@link CrossConnect}. Customers who are colocated with
* Oracle in a FastConnect location create and use cross-connect groups. For more
* information, see [FastConnect Overview](https://docs.oracle.com/iaas/Content/Network/Concepts/fastconnect.htm).
* <p>
**Note:** If you're a provider who is setting up a physical connection to Oracle so customers
* can use FastConnect over the connection, be aware that your connection is modeled the
* same way as a colocated customer's (with {@code CrossConnect} and {@code CrossConnectGroup} objects, and so on).
* <p>
To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized,
* talk to an administrator. If you're an administrator who needs to write policies to give users access, see
* [Getting Started with Policies](https://docs.oracle.com/iaas/Content/Identity/Concepts/policygetstarted.htm).
* 
*/
export interface CrossConnectGroup {
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the cross-connect group.
   */
  "compartmentId"?: string;
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
   * The cross-connect group's Oracle ID (OCID).
   */
  "id"?: string;
  /**
   * The cross-connect group's current state.
   */
  "lifecycleState"?: CrossConnectGroup.LifecycleState;
  /**
   * A reference name or identifier for the physical fiber connection that this cross-connect
   * group uses.
   *
   */
  "customerReferenceName"?: string;
  /**
    * The date and time the cross-connect group was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
* <p>
Example: {@code 2016-08-25T21:10:29.600Z}
* 
    */
  "timeCreated"?: Date;
  "macsecProperties"?: model.MacsecProperties;
  /**
   * The FastConnect device that terminates the physical connection.
   *
   */
  "ociPhysicalDeviceName"?: string;
  /**
   * The FastConnect device that terminates the logical connection.
   * This device might be different than the device that terminates the physical connection.
   *
   */
  "ociLogicalDeviceName"?: string;
}

export namespace CrossConnectGroup {
  export enum LifecycleState {
    Provisioning = "PROVISIONING",
    Provisioned = "PROVISIONED",
    Inactive = "INACTIVE",
    Terminating = "TERMINATING",
    Terminated = "TERMINATED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: CrossConnectGroup): object {
    const jsonObj = {
      ...obj,
      ...{
        "macsecProperties": obj.macsecProperties
          ? model.MacsecProperties.getJsonObj(obj.macsecProperties)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CrossConnectGroup): object {
    const jsonObj = {
      ...obj,
      ...{
        "macsecProperties": obj.macsecProperties
          ? model.MacsecProperties.getDeserializedJsonObj(obj.macsecProperties)
          : undefined
      }
    };

    return jsonObj;
  }
}
