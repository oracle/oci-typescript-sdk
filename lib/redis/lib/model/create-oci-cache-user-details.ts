/**
 * OCI Cache API
 * Use the OCI Cache API to create and manage clusters. A cluster is a memory-based storage solution. For more information, see [OCI Cache](https://docs.oracle.com/iaas/Content/ocicache/home.htm).
 * OpenAPI spec version: 20220315
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
 * Details required to create a new OCI cache user.
 */
export interface CreateOciCacheUserDetails {
  /**
   * OCI cache user name is required to connect to an OCI cache cluster.
   */
  "name": string;
  /**
   * Description of OCI cache user.
   */
  "description": string;
  /**
   * OCI cache user compartment ID.
   */
  "compartmentId": string;
  "authenticationMode": model.IamAuthenticationMode | model.PasswordAuthenticationMode;
  /**
   * ACL string of OCI cache user.
   */
  "aclString": string;
  /**
   * OCI cache user status. ON enables and OFF disables the OCI cache user to login to the associated clusters. Default value is ON.
   */
  "status"?: string;
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
}

export namespace CreateOciCacheUserDetails {
  export function getJsonObj(obj: CreateOciCacheUserDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "authenticationMode": obj.authenticationMode
          ? model.AuthenticationMode.getJsonObj(obj.authenticationMode)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateOciCacheUserDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "authenticationMode": obj.authenticationMode
          ? model.AuthenticationMode.getDeserializedJsonObj(obj.authenticationMode)
          : undefined
      }
    };

    return jsonObj;
  }
}
