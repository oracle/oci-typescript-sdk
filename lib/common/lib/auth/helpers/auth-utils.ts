/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import { Certificate, Identity } from "sshpk";

/**
 * Utilities dealing with authorization.
 */
export default class AuthUtils {
  /**
   * Get the tenant id from the given certificate.
   * @param certificate the given certificate.
   * @return the tenant id.
   */
  static getTenantIdFromCertificate(certificate: Certificate): string {
    let tenancyId = "";

    /* Note: We currently have a newer version of sshpk that don't match the same version
     * as the @types/sshpk. Because of the mismatch version, the types dont quite match
     * Microsoft have not updated their types file. To get around temporarily, cast "any"
     */
    const OPC_TENANT = "opc-tenant:";
    const OPC_IDENTITY = "opc-identity:";
    try {
      const subjects: any = certificate.subjects as any;
      for (let subject of subjects) {
        const components = subject.components as any;
        for (let component of components) {
          if (component.value.includes(OPC_TENANT)) {
            const str = component.value;
            tenancyId = str.slice(str.indexOf(OPC_TENANT) + OPC_TENANT.length);
            return tenancyId;
          }
          if (component.value.includes(OPC_IDENTITY)) {
            const str = component.value;
            tenancyId = str.slice(str.indexOf(OPC_IDENTITY) + OPC_IDENTITY.length);
            return tenancyId;
          }
        }
      }
      if (!tenancyId) {
        throw Error("The certificate does not contain tenant id.");
      }
    } catch (e) {
      throw Error("Failed to parse tenancyId from certificate");
    }
    return tenancyId;
  }

  static sanitizeCertificateString(certificate: string): string {
    return certificate
      .replace("-----BEGIN CERTIFICATE-----", "")
      .replace("-----END CERTIFICATE-----", "")
      .replace("-----BEGIN PUBLIC KEY-----", "")
      .replace("-----END PUBLIC KEY-----", "")
      .replace("\n", "");
  }
}
