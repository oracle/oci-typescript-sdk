/**
 * Visual Builder API
 * Oracle Visual Builder enables developers to quickly build web and mobile applications. With a visual development environment that makes it easy to connect to Oracle data and third-party REST services, developers can build modern, consumer-grade applications in a fraction of the time it would take in other tools.
The Visual Builder Instance Management API allows users to create and manage a Visual Builder instance.

 * OpenAPI spec version: 20210601
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Private endpoint update configuration details.
 *
 */
export interface UpdatePrivateEndpointDetails extends model.UpdateNetworkEndpointDetails {
  /**
   * The subnet OCID for the private endpoint. If provided then a new Private Endpoint will be created and a new Private Endpoint IP may be generated.
   *
   */
  "subnetId"?: string;
  /**
   * Network Security Group OCIDs for the Private Endpoint.
   *
   */
  "networkSecurityGroupIds"?: Array<string>;

  "networkEndpointType": string;
}

export namespace UpdatePrivateEndpointDetails {
  export function getJsonObj(obj: UpdatePrivateEndpointDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateNetworkEndpointDetails.getJsonObj(obj) as UpdatePrivateEndpointDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const networkEndpointType = "PRIVATE";
  export function getDeserializedJsonObj(
    obj: UpdatePrivateEndpointDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateNetworkEndpointDetails.getDeserializedJsonObj(
            obj
          ) as UpdatePrivateEndpointDetails)),
      ...{}
    };

    return jsonObj;
  }
}