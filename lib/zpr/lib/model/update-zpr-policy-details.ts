/**
 * Zero Trust Packet Routing Control Plane API
 * Use the Zero Trust Packet Routing Control Plane API to manage ZPR configuration and policy. See the [Zero Trust Packet Routing](https://docs.oracle.com/iaas/Content/zero-trust-packet-routing/home.htm) documentation for more information.
 * OpenAPI spec version: 20240301
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
 * The data to update a ZprPolicy.
 */
export interface UpdateZprPolicyDetails {
  /**
   * The description you assign to the ZprPolicy during creation. Does not have to be unique, and it's changeable.
   */
  "description"?: string;
  /**
   * An array of ZprPolicy statements(up to 25 statements per ZprPolicy) written in the Zero Trust Packet Routing Policy Language.
   */
  "statements"?: Array<string>;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Department\": \"Finance\"}}
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace.
* For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace UpdateZprPolicyDetails {
  export function getJsonObj(obj: UpdateZprPolicyDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateZprPolicyDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
