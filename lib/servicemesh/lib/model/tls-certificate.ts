/**
 * Service Mesh API
 * Use the Service Mesh API to manage mesh, virtual service, access policy and other mesh related items.
 * OpenAPI spec version: 20220615
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
 * Resource representing the location of the TLS certificate.
 */
export interface TlsCertificate {
  "type": string;
}

export namespace TlsCertificate {
  export function getJsonObj(obj: TlsCertificate): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "OCI_CERTIFICATES":
          return model.OciTlsCertificate.getJsonObj(
            <model.OciTlsCertificate>(<object>jsonObj),
            true
          );
        case "LOCAL_FILE":
          return model.LocalFileTlsCertificate.getJsonObj(
            <model.LocalFileTlsCertificate>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TlsCertificate): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "OCI_CERTIFICATES":
          return model.OciTlsCertificate.getDeserializedJsonObj(
            <model.OciTlsCertificate>(<object>jsonObj),
            true
          );
        case "LOCAL_FILE":
          return model.LocalFileTlsCertificate.getDeserializedJsonObj(
            <model.LocalFileTlsCertificate>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
}
