/**
 * Vault Key Management API
 * Use the Key Management API to manage vaults and keys. For more information, see [Managing Vaults](https://docs.oracle.com/iaas/Content/KeyManagement/Tasks/managingvaults.htm) and [Managing Keys](https://docs.oracle.com/iaas/Content/KeyManagement/Tasks/managingkeys.htm).

 * OpenAPI spec version: release
 * Contact: sparta_kms_us_grp@oracle.com
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
 * EKMS private endpoint created in customer subnet used to connect to external key manager system
 */
export interface EkmsPrivateEndpoint {
  /**
   * Unique identifier that is immutable
   */
  "id": string;
  /**
   * Compartment Identifier.
   */
  "compartmentId": string;
  /**
   * Subnet Identifier
   */
  "subnetId": string;
  /**
   * EKMS Private Endpoint display name
   */
  "displayName": string;
  /**
   * The time the EKMS private endpoint was created. An [RFC3339](https://tools.ietf.org/html/rfc3339) formatted datetime string.
   */
  "timeCreated": Date;
  /**
   * The time the EKMS private endpoint was updated. An [RFC3339](https://tools.ietf.org/html/rfc3339) formatted datetime string.
   */
  "timeUpdated"?: Date;
  /**
   * Simple key-value pair that is applied without any predefined name, type, or scope. Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Usage of predefined tag keys. These predefined keys are scoped to namespaces.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * The current state of the EKMS private endpoint resource.
   */
  "lifecycleState": EkmsPrivateEndpoint.LifecycleState;
  /**
   * A message describing the current state in more detail. For example, can be used to provide actionable information for a resource in 'Failed' state.
   */
  "lifecycleDetails"?: string;
  /**
   * Private IP of the external key manager system to connect to from the EKMS private endpoint
   *
   */
  "externalKeyManagerIp": string;
  /**
   * The port of the external key manager system Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "port"?: number;
  /**
   * CABundle to validate TLS certificate of the external key manager system in PEM format
   *
   */
  "caBundle"?: string;
  /**
   * The IP address in the customer's VCN for the EKMS private endpoint. This is taken from subnet
   */
  "privateEndpointIp"?: string;
}

export namespace EkmsPrivateEndpoint {
  export enum LifecycleState {
    Creating = "CREATING",
    Active = "ACTIVE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: EkmsPrivateEndpoint): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: EkmsPrivateEndpoint): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
