/**
 * NoSQL Database API
 * The control plane API for NoSQL Database Cloud Service HTTPS
provides endpoints to perform NDCS operations, including creation
and deletion of tables and indexes; population and access of data
in tables; and access of table usage metrics.

 * OpenAPI spec version: 20190828
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
 * Information about the state of the service's encryption key management.
 * The following properties are read-only and ignored when this object is
 * used in UpdateConfiguration: kmsKeyState, timeCreated, timeUpdated.
 *
 */
export interface KmsKey {
  /**
   * The OCID of the KMS encryption key assigned to this Hosted
   * Environment. If the Hosted Environment is using an
   * Oracle-managed Key, then the id will be a null string..
   *
   */
  "id"?: string;
  /**
   * The OCID of the vault containing the encryption key assigned
   * to this Hosted Environment. If the Hosted Environment is
   * using an Oracle-managed Key, then the kmsVaultId will be a
   * null string.
   *
   */
  "kmsVaultId"?: string;
  /**
   * The current state of the encryption key assigned to this
   * Hosted Environment. Oracle-managed keys will always report
   * an ACTIVE state.
   *
   */
  "kmsKeyState"?: KmsKey.KmsKeyState;
  /**
   * The timestamp when encryption key was first enabled for this Hosted Environment.
   * RFC3339 formatted.
   *
   */
  "timeCreated"?: Date;
  /**
   * The timestamp of the last update to the encryption key status. RFC3339 formatted.
   *
   */
  "timeUpdated"?: Date;
}

export namespace KmsKey {
  export enum KmsKeyState {
    Updating = "UPDATING",
    Active = "ACTIVE",
    Deleted = "DELETED",
    Failed = "FAILED",
    Reverting = "REVERTING",
    Disabled = "DISABLED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: KmsKey): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: KmsKey): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
