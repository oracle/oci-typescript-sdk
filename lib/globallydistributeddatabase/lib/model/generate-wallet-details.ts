/**
 * Globally Distributed Database
 * Use the Globally Distributed Database service APIs to create and manage distributed databases.
 * OpenAPI spec version: 20230301
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
 * Details to create and download an Oracle Sharded Database wallet.
 *
 */
export interface GenerateWalletDetails {
  /**
   * The password to encrypt the keys inside the wallet. The password must be at least 8 characters long and must include at least 1 letter and either 1 numeric character or 1 special character.
   */
  "password": string;
}

export namespace GenerateWalletDetails {
  export function getJsonObj(obj: GenerateWalletDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: GenerateWalletDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}