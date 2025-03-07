/**
 * Database Management API
 * Use the Database Management API to monitor and manage resources such as
Oracle Databases, MySQL Databases, and External Database Systems. 
For more information, see [Database Management](https://docs.oracle.com/iaas/database-management/home.htm).

 * OpenAPI spec version: 20201101
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
 * The details of the preferred credential that refers to a Named Credential.
 */
export interface TestNamedPreferredCredentialDetails extends model.TestPreferredCredentialDetails {
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the Named Credential that contains the database user password metadata.
   */
  "namedCredentialId"?: string;

  "type": string;
}

export namespace TestNamedPreferredCredentialDetails {
  export function getJsonObj(
    obj: TestNamedPreferredCredentialDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.TestPreferredCredentialDetails.getJsonObj(
            obj
          ) as TestNamedPreferredCredentialDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "NAMED_CREDENTIAL";
  export function getDeserializedJsonObj(
    obj: TestNamedPreferredCredentialDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.TestPreferredCredentialDetails.getDeserializedJsonObj(
            obj
          ) as TestNamedPreferredCredentialDetails)),
      ...{}
    };

    return jsonObj;
  }
}
