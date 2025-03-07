/**
 * Certificates Service Retrieval API
 * API for retrieving certificates.
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
 * A certificate bundle, not including the private key.
 */
export interface CertificateBundlePublicOnly extends model.CertificateBundle {
  "certificateBundleType": string;
}

export namespace CertificateBundlePublicOnly {
  export function getJsonObj(obj: CertificateBundlePublicOnly, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CertificateBundle.getJsonObj(obj) as CertificateBundlePublicOnly)),
      ...{}
    };

    return jsonObj;
  }
  export const certificateBundleType = "CERTIFICATE_CONTENT_PUBLIC_ONLY";
  export function getDeserializedJsonObj(
    obj: CertificateBundlePublicOnly,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CertificateBundle.getDeserializedJsonObj(obj) as CertificateBundlePublicOnly)),
      ...{}
    };

    return jsonObj;
  }
}
