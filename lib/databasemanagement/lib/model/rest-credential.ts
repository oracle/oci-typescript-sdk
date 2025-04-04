/**
 * Database Management API
 * Use the Database Management API to monitor and manage resources such as
Oracle Databases, MySQL Databases, and External Database Systems. 
For more information, see [Database Management](https://docs.oracle.com/iaas/database-management/home.htm).

 * OpenAPI spec version: 20201101
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
 * The user credential information.
 */
export interface RestCredential {
  /**
   * The name of the user.
   */
  "username": string;
  /**
   * The password of the user.
   */
  "password": string;
  /**
   * The SSL truststore type.
   */
  "sslTrustStoreType"?: RestCredential.SslTrustStoreType;
  /**
   * The full path of the SSL truststore location in the agent.
   */
  "sslTrustStoreLocation"?: string;
  /**
   * The password of the SSL truststore location in the agent.
   */
  "sslTrustStorePassword"?: string;
}

export namespace RestCredential {
  export enum SslTrustStoreType {
    Jks = "JKS",
    Bcfks = "BCFKS"
  }

  export function getJsonObj(obj: RestCredential): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RestCredential): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
