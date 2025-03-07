/**
 * API Gateway API
 * API for the API Gateway service. Use this API to manage gateways, deployments, and related items.
For more information, see
[Overview of API Gateway](https://docs.oracle.com/iaas/Content/APIGateway/Concepts/apigatewayoverview.htm).

 * OpenAPI spec version: 20190501
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
 * A JSON Web Key that represents the public key used for verifying the JWT signature.
 */
export interface JsonWebKey extends model.StaticPublicKey {
  /**
   * The key type.
   */
  "kty": JsonWebKey.Kty;
  /**
   * The intended use of the public key.
   */
  "use"?: JsonWebKey.Use;
  /**
   * The operations for which this key is to be used.
   */
  "keyOps"?: Array<JsonWebKey.KeyOps>;
  /**
   * The algorithm intended for use with this key.
   */
  "alg": string;
  /**
   * The base64 url encoded modulus of the RSA public key represented
   * by this key.
   *
   */
  "n": string;
  /**
   * The base64 url encoded exponent of the RSA public key represented
   * by this key.
   *
   */
  "e": string;

  "format": string;
}

export namespace JsonWebKey {
  export enum Kty {
    Rsa = "RSA",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Use {
    Sig = "sig",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum KeyOps {
    Verify = "verify",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: JsonWebKey, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.StaticPublicKey.getJsonObj(obj) as JsonWebKey)),
      ...{
        "key_ops": obj.keyOps
      }
    };

    delete (jsonObj as Partial<JsonWebKey>).keyOps;

    return jsonObj;
  }
  export const format = "JSON_WEB_KEY";
  export function getDeserializedJsonObj(obj: JsonWebKey, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.StaticPublicKey.getDeserializedJsonObj(obj) as JsonWebKey)),
      ...{
        "keyOps": (obj as any)["key_ops"]
      }
    };

    delete (jsonObj as any)["key_ops"];

    return jsonObj;
  }
}
