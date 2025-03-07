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
 * User provides a secret OCID, which will be used to retrieve the password to connect to the database.
 *
 */
export interface TablespaceAdminSecretCredentialDetails
  extends model.TablespaceAdminCredentialDetails {
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the Secret
   * where the database password is stored.
   *
   */
  "passwordSecretId": string;

  "tablespaceAdminCredentialType": string;
}

export namespace TablespaceAdminSecretCredentialDetails {
  export function getJsonObj(
    obj: TablespaceAdminSecretCredentialDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.TablespaceAdminCredentialDetails.getJsonObj(
            obj
          ) as TablespaceAdminSecretCredentialDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const tablespaceAdminCredentialType = "SECRET";
  export function getDeserializedJsonObj(
    obj: TablespaceAdminSecretCredentialDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.TablespaceAdminCredentialDetails.getDeserializedJsonObj(
            obj
          ) as TablespaceAdminSecretCredentialDetails)),
      ...{}
    };

    return jsonObj;
  }
}
