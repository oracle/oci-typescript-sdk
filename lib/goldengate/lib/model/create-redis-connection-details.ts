/**
 * GoldenGate API
 * Use the Oracle Cloud Infrastructure GoldenGate APIs to perform data replication operations.

 * OpenAPI spec version: 20200407
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
 * The information about a new Redis Connection.
 *
 */
export interface CreateRedisConnectionDetails extends model.CreateConnectionDetails {
  /**
   * The Redis technology type.
   */
  "technologyType": string;
  /**
   * Comma separated list of Redis server addresses, specified as host:port entries, where :port is optional.
   * If port is not specified, it defaults to 6379.
   * Used for establishing the initial connection to the Redis cluster.
   * Example: {@code \"server1.example.com:6379,server2.example.com:6379\"}
   *
   */
  "servers"?: string;
  /**
   * Security protocol for Redis.
   */
  "securityProtocol": string;
  /**
   * Authenticationentication type for the Redis database.
   */
  "authenticationType": string;
  /**
   * The username Oracle GoldenGate uses to connect the associated system of the given technology.
   * This username must already exist and be available by the system/application to be connected to
   * and must conform to the case sensitivty requirments defined in it.
   *
   */
  "username"?: string;
  /**
   * The password Oracle GoldenGate uses to connect the associated system of the given technology.
   * It must conform to the specific security requirements including length, case sensitivity, and so on.
   * Deprecated: This field is deprecated and replaced by \"passwordSecretId\". This field will be removed after February 15 2026.
   *
   */
  "password"?: string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the Secret where the password is stored.
   * The password Oracle GoldenGate uses to connect the associated system of the given technology.
   * It must conform to the specific security requirements including length, case sensitivity, and so on.
   * If secretId is used plaintext field must not be provided.
   * Note: When provided, 'password' field must not be provided.
   *
   */
  "passwordSecretId"?: string;
  /**
   * The base64 encoded content of the TrustStore file.
   * Deprecated: This field is deprecated and replaced by \"trustStoreSecretId\". This field will be removed after February 15 2026.
   *
   */
  "trustStore"?: string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the Secret that stores the content of the TrustStore file.
   * Note: When provided, 'trustStore' field must not be provided.
   *
   */
  "trustStoreSecretId"?: string;
  /**
   * The TrustStore password.
   * Deprecated: This field is deprecated and replaced by \"trustStorePasswordSecretId\". This field will be removed after February 15 2026.
   *
   */
  "trustStorePassword"?: string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the Secret where the Redis TrustStore password is stored.
   * Note: When provided, 'trustStorePassword' field must not be provided.
   *
   */
  "trustStorePasswordSecretId"?: string;
  /**
   * The base64 encoded content of the KeyStore file.
   * Deprecated: This field is deprecated and replaced by \"keyStoreSecretId\". This field will be removed after February 15 2026.
   *
   */
  "keyStore"?: string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the Secret that stores the content of the KeyStore file.
   * Note: When provided, 'keyStore' field must not be provided.
   *
   */
  "keyStoreSecretId"?: string;
  /**
   * The KeyStore password.
   * Deprecated: This field is deprecated and replaced by \"keyStorePasswordSecretId\". This field will be removed after February 15 2026.
   *
   */
  "keyStorePassword"?: string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the Secret where the Redis KeyStore password is stored.
   * Note: When provided, 'keyStorePassword' field must not be provided.
   *
   */
  "keyStorePasswordSecretId"?: string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the Redis cluster.
   *
   */
  "redisClusterId"?: string;

  "connectionType": string;
}

export namespace CreateRedisConnectionDetails {
  export function getJsonObj(obj: CreateRedisConnectionDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateConnectionDetails.getJsonObj(obj) as CreateRedisConnectionDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const connectionType = "REDIS";
  export function getDeserializedJsonObj(
    obj: CreateRedisConnectionDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateConnectionDetails.getDeserializedJsonObj(
            obj
          ) as CreateRedisConnectionDetails)),
      ...{}
    };

    return jsonObj;
  }
}
