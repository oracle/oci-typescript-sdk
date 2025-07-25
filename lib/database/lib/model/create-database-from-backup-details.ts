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

export interface CreateDatabaseFromBackupDetails {
  /**
   * The backup [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm).
   */
  "backupId": string;
  /**
   * The password to open the TDE wallet.
   */
  "backupTDEPassword"?: string;
  "sourceEncryptionKeyLocationDetails"?:
    | model.ExternalHsmEncryptionDetails
    | model.AzureEncryptionKeyDetails;
  /**
   * A strong password for SYS, SYSTEM, PDB Admin and TDE Wallet. The password must be at least nine characters and contain at least two uppercase, two lowercase, two numbers, and two special characters. The special characters must be _, \\#, or -.
   */
  "adminPassword": string;
  /**
   * The {@code DB_UNIQUE_NAME} of the Oracle Database being backed up.
   */
  "dbUniqueName"?: string;
  /**
   * The display name of the database to be created from the backup. It must begin with an alphabetic character and can contain a maximum of eight alphanumeric characters. Special characters are not permitted.
   */
  "dbName"?: string;
  /**
   * Specifies a prefix for the {@code Oracle SID} of the database to be created.
   *
   */
  "sidPrefix"?: string;
  /**
   * The list of pluggable databases that needs to be restored into new database.
   */
  "pluggableDatabases"?: Array<string>;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Department\": \"Finance\"}}
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateDatabaseFromBackupDetails {
  export function getJsonObj(obj: CreateDatabaseFromBackupDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "sourceEncryptionKeyLocationDetails": obj.sourceEncryptionKeyLocationDetails
          ? model.EncryptionKeyLocationDetails.getJsonObj(obj.sourceEncryptionKeyLocationDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateDatabaseFromBackupDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "sourceEncryptionKeyLocationDetails": obj.sourceEncryptionKeyLocationDetails
          ? model.EncryptionKeyLocationDetails.getDeserializedJsonObj(
              obj.sourceEncryptionKeyLocationDetails
            )
          : undefined
      }
    };

    return jsonObj;
  }
}
