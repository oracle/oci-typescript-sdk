/**
 * Database Management API
 * Use the Database Management API to perform tasks such as obtaining performance and resource usage metrics
for a fleet of Managed Databases or a specific Managed Database, creating Managed Database Groups, and
running a SQL job on a Managed Database or Managed Database Group.

 * OpenAPI spec version: 20201101
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * The credentials used to connect to the ASM instance. Currently only the `DETAILS` type
 * is supported for creating MACS connector credentials.
 *
 */
export interface AsmConnectionCredentials {
  "credentialType": string;
}

export namespace AsmConnectionCredentials {
  export function getJsonObj(obj: AsmConnectionCredentials): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "credentialType" in obj && obj.credentialType) {
      switch (obj.credentialType) {
        case "NAME_REFERENCE":
          return model.AsmConnectionCredentailsByName.getJsonObj(
            <model.AsmConnectionCredentailsByName>(<object>jsonObj),
            true
          );
        case "DETAILS":
          return model.AsmConnectionCredentialsByDetails.getJsonObj(
            <model.AsmConnectionCredentialsByDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.credentialType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AsmConnectionCredentials): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "credentialType" in obj && obj.credentialType) {
      switch (obj.credentialType) {
        case "NAME_REFERENCE":
          return model.AsmConnectionCredentailsByName.getDeserializedJsonObj(
            <model.AsmConnectionCredentailsByName>(<object>jsonObj),
            true
          );
        case "DETAILS":
          return model.AsmConnectionCredentialsByDetails.getDeserializedJsonObj(
            <model.AsmConnectionCredentialsByDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.credentialType}`);
      }
    }
    return jsonObj;
  }
}