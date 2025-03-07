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
 * The details of the configuration for creating an internally managed certificate which is issued by a private certificate authority (CA).
 */
export interface CreateCertificateIssuedByInternalCaConfigDetails
  extends model.CreateCertificateConfigDetails {
  /**
   * The name of the profile used to create the certificate, which depends on the type of certificate you need.
   */
  "certificateProfileType": model.CertificateProfileType;
  /**
   * The OCID of the private CA.
   */
  "issuerCertificateAuthorityId": string;
  "validity"?: model.Validity;
  "subject": model.CertificateSubject;
  /**
   * A list of subject alternative names.
   */
  "subjectAlternativeNames"?: Array<model.CertificateSubjectAlternativeName>;
  /**
   * The algorithm to use to create key pairs.
   */
  "keyAlgorithm"?: model.KeyAlgorithm;
  /**
   * The algorithm to use to sign the public key certificate.
   */
  "signatureAlgorithm"?: model.SignatureAlgorithm;

  "configType": string;
}

export namespace CreateCertificateIssuedByInternalCaConfigDetails {
  export function getJsonObj(
    obj: CreateCertificateIssuedByInternalCaConfigDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateCertificateConfigDetails.getJsonObj(
            obj
          ) as CreateCertificateIssuedByInternalCaConfigDetails)),
      ...{
        "validity": obj.validity ? model.Validity.getJsonObj(obj.validity) : undefined,
        "subject": obj.subject ? model.CertificateSubject.getJsonObj(obj.subject) : undefined,
        "subjectAlternativeNames": obj.subjectAlternativeNames
          ? obj.subjectAlternativeNames.map(item => {
              return model.CertificateSubjectAlternativeName.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const configType = "ISSUED_BY_INTERNAL_CA";
  export function getDeserializedJsonObj(
    obj: CreateCertificateIssuedByInternalCaConfigDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateCertificateConfigDetails.getDeserializedJsonObj(
            obj
          ) as CreateCertificateIssuedByInternalCaConfigDetails)),
      ...{
        "validity": obj.validity ? model.Validity.getDeserializedJsonObj(obj.validity) : undefined,
        "subject": obj.subject
          ? model.CertificateSubject.getDeserializedJsonObj(obj.subject)
          : undefined,
        "subjectAlternativeNames": obj.subjectAlternativeNames
          ? obj.subjectAlternativeNames.map(item => {
              return model.CertificateSubjectAlternativeName.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
