/**
 * Database Management API
 * Use the Database Management API to monitor and manage resources such as
Oracle Databases, MySQL Databases, and External Database Systems. 
For more information, see [Database Management](/iaas/database-management/home.htm).

 * OpenAPI spec version: 20201101
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * User provides a named credential OCID, which will be used to retrieve the password to connect to the database.
 *
 */
export interface DatabaseNamedCredentialConnectionDetails
  extends model.DatabaseConnectionCredentials {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Named Credential
   * where the database password metadata is stored.
   *
   */
  "namedCredentialId": string;

  "credentialType": string;
}

export namespace DatabaseNamedCredentialConnectionDetails {
  export function getJsonObj(
    obj: DatabaseNamedCredentialConnectionDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DatabaseConnectionCredentials.getJsonObj(
            obj
          ) as DatabaseNamedCredentialConnectionDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const credentialType = "NAMED_CREDENTIAL";
  export function getDeserializedJsonObj(
    obj: DatabaseNamedCredentialConnectionDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DatabaseConnectionCredentials.getDeserializedJsonObj(
            obj
          ) as DatabaseNamedCredentialConnectionDetails)),
      ...{}
    };

    return jsonObj;
  }
}