/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](https://docs.oracle.com/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
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
 * Details for OCI encryption key.
 */
export interface OciKeyDetails extends model.AutonomousDatabaseEncryptionKeyDetails {
  /**
   * The OCID of the key container that is used as the master encryption key in database transparent data encryption (TDE) operations.
   */
  "kmsKeyId": string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the Oracle Cloud Infrastructure [vault](https://docs.oracle.com/iaas/Content/KeyManagement/Concepts/keyoverview.htm#concepts). This parameter and {@code secretId} are required for Customer Managed Keys.
   */
  "vaultId": string;

  "provider": string;
}

export namespace OciKeyDetails {
  export function getJsonObj(obj: OciKeyDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AutonomousDatabaseEncryptionKeyDetails.getJsonObj(obj) as OciKeyDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const provider = "OCI";
  export function getDeserializedJsonObj(obj: OciKeyDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AutonomousDatabaseEncryptionKeyDetails.getDeserializedJsonObj(
            obj
          ) as OciKeyDetails)),
      ...{}
    };

    return jsonObj;
  }
}
