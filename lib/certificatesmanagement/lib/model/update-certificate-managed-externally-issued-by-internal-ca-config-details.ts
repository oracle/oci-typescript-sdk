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
 * The details for updating an externally managed certificate which is issued by a private certificate authority (CA).
 */
export interface UpdateCertificateManagedExternallyIssuedByInternalCaConfigDetails
  extends model.UpdateCertificateConfigDetails {
  /**
   * The certificate signing request (in PEM format).
   */
  "csrPem": string;
  "validity"?: model.Validity;

  "configType": string;
}

export namespace UpdateCertificateManagedExternallyIssuedByInternalCaConfigDetails {
  export function getJsonObj(
    obj: UpdateCertificateManagedExternallyIssuedByInternalCaConfigDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateCertificateConfigDetails.getJsonObj(
            obj
          ) as UpdateCertificateManagedExternallyIssuedByInternalCaConfigDetails)),
      ...{
        "validity": obj.validity ? model.Validity.getJsonObj(obj.validity) : undefined
      }
    };

    return jsonObj;
  }
  export const configType = "MANAGED_EXTERNALLY_ISSUED_BY_INTERNAL_CA";
  export function getDeserializedJsonObj(
    obj: UpdateCertificateManagedExternallyIssuedByInternalCaConfigDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateCertificateConfigDetails.getDeserializedJsonObj(
            obj
          ) as UpdateCertificateManagedExternallyIssuedByInternalCaConfigDetails)),
      ...{
        "validity": obj.validity ? model.Validity.getDeserializedJsonObj(obj.validity) : undefined
      }
    };

    return jsonObj;
  }
}
