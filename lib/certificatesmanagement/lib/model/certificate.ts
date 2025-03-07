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
 * The details of the certificate. This object does not contain the certificate contents.
 */
export interface Certificate {
  /**
   * The OCID of the certificate.
   */
  "id": string;
  /**
   * The OCID of the certificate authority (CA) that issued the certificate.
   */
  "issuerCertificateAuthorityId"?: string;
  /**
   * A user-friendly name for the certificate. Names are unique within a compartment. Avoid entering confidential information. Valid characters are uppercase or lowercase letters, numbers, hyphens, underscores, and periods.
   */
  "name": string;
  /**
   * A brief description of the certificate. Avoid entering confidential information.
   */
  "description"?: string;
  /**
   * A list of rules that control how the certificate is used and managed.
   */
  "certificateRules"?: Array<model.CertificateRule>;
  /**
   * A property indicating when the certificate was created, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format.
   * Example: {@code 2019-04-03T21:10:29.600Z}
   *
   */
  "timeCreated": Date;
  /**
   * An optional property indicating when to delete the certificate version, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format.
   * Example: {@code 2019-04-03T21:10:29.600Z}
   *
   */
  "timeOfDeletion"?: Date;
  /**
   * The current lifecycle state of the certificate.
   */
  "lifecycleState": model.CertificateLifecycleState;
  /**
   * Additional information about the current lifecycle state of the certificate.
   */
  "lifecycleDetails"?: string;
  /**
   * The OCID of the compartment where you want to create the certificate.
   */
  "compartmentId": string;
  "currentVersion"?: model.CertificateVersionSummary;
  "subject"?: model.CertificateSubject;
  "certificateRevocationListDetails"?: model.CertificateRevocationListDetails;
  /**
   * The origin of the certificate.
   */
  "configType": model.CertificateConfigType;
  /**
   * The algorithm used to create key pairs.
   */
  "keyAlgorithm"?: model.KeyAlgorithm;
  /**
   * The algorithm used to sign the public key certificate.
   */
  "signatureAlgorithm"?: model.SignatureAlgorithm;
  /**
   * The name of the profile used to create the certificate, which depends on the type of certificate you need.
   */
  "certificateProfileType"?: model.CertificateProfileType;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {\"Department\": \"Finance\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace Certificate {
  export function getJsonObj(obj: Certificate): object {
    const jsonObj = {
      ...obj,
      ...{
        "certificateRules": obj.certificateRules
          ? obj.certificateRules.map(item => {
              return model.CertificateRule.getJsonObj(item);
            })
          : undefined,

        "currentVersion": obj.currentVersion
          ? model.CertificateVersionSummary.getJsonObj(obj.currentVersion)
          : undefined,
        "subject": obj.subject ? model.CertificateSubject.getJsonObj(obj.subject) : undefined,
        "certificateRevocationListDetails": obj.certificateRevocationListDetails
          ? model.CertificateRevocationListDetails.getJsonObj(obj.certificateRevocationListDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Certificate): object {
    const jsonObj = {
      ...obj,
      ...{
        "certificateRules": obj.certificateRules
          ? obj.certificateRules.map(item => {
              return model.CertificateRule.getDeserializedJsonObj(item);
            })
          : undefined,

        "currentVersion": obj.currentVersion
          ? model.CertificateVersionSummary.getDeserializedJsonObj(obj.currentVersion)
          : undefined,
        "subject": obj.subject
          ? model.CertificateSubject.getDeserializedJsonObj(obj.subject)
          : undefined,
        "certificateRevocationListDetails": obj.certificateRevocationListDetails
          ? model.CertificateRevocationListDetails.getDeserializedJsonObj(
              obj.certificateRevocationListDetails
            )
          : undefined
      }
    };

    return jsonObj;
  }
}
