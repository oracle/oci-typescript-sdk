/**
 * Certificates Service Management API
 * API for managing certificates.
 * OpenAPI spec version: 20210224
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
 * The algorithm used to sign the public key certificate.
 **/
export enum SignatureAlgorithm {
  Sha256WithRsa = "SHA256_WITH_RSA",
  Sha384WithRsa = "SHA384_WITH_RSA",
  Sha512WithRsa = "SHA512_WITH_RSA",
  Sha256WithEcdsa = "SHA256_WITH_ECDSA",
  Sha384WithEcdsa = "SHA384_WITH_ECDSA",
  Sha512WithEcdsa = "SHA512_WITH_ECDSA",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace SignatureAlgorithm {
  export function getJsonObj(obj: SignatureAlgorithm): SignatureAlgorithm {
    return obj;
  }
  export function getDeserializedJsonObj(obj: SignatureAlgorithm): SignatureAlgorithm {
    return obj;
  }
}
