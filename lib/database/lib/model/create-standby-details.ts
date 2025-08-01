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
 * Standby Creation Details.
 */
export interface CreateStandbyDetails {
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the source database.
   */
  "sourceDatabaseId": string;
  /**
   * The administrator password of the primary database in this Data Guard association.
   * <p>
   **The password MUST be the same as the primary admin password.**
   *
   */
  "databaseAdminPassword": string;
  /**
   * The TDE wallet password of the source database specified by 'sourceDatabaseId'.
   */
  "sourceTdeWalletPassword": string;
  "sourceEncryptionKeyLocationDetails"?:
    | model.ExternalHsmEncryptionDetails
    | model.AzureEncryptionKeyDetails;
  /**
   * True if active Data Guard is enabled.
   */
  "isActiveDataGuardEnabled"?: boolean;
  /**
   * Specifies the {@code DB_UNIQUE_NAME} of the peer database to be created.
   *
   */
  "dbUniqueName"?: string;
  /**
   * Specifies a prefix for the {@code Oracle SID} of the database to be created.
   *
   */
  "sidPrefix"?: string;
  /**
   * The protection mode of this Data Guard. For more information, see
   * [Oracle Data Guard Protection Modes](http://docs.oracle.com/database/122/SBYDB/oracle-data-guard-protection-modes.htm#SBYDB02000)
   * in the Oracle Data Guard documentation.
   *
   */
  "protectionMode": CreateStandbyDetails.ProtectionMode;
  /**
    * The redo transport type to use for this Data Guard association.  Valid values depend on the specified {@code protectionMode}:
* <p>
* MAXIMUM_AVAILABILITY - SYNC or FASTSYNC
* * MAXIMUM_PERFORMANCE - ASYNC
* * MAXIMUM_PROTECTION - SYNC
* <p>
For more information, see
* [Redo Transport Services](http://docs.oracle.com/database/122/SBYDB/oracle-data-guard-redo-transport-services.htm#SBYDB00400)
* in the Oracle Data Guard documentation.
* <p>
**IMPORTANT** - The only transport type currently supported by the Database service is ASYNC.
* 
    */
  "transportType": CreateStandbyDetails.TransportType;
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

export namespace CreateStandbyDetails {
  export enum ProtectionMode {
    MaximumAvailability = "MAXIMUM_AVAILABILITY",
    MaximumPerformance = "MAXIMUM_PERFORMANCE",
    MaximumProtection = "MAXIMUM_PROTECTION"
  }

  export enum TransportType {
    Sync = "SYNC",
    Async = "ASYNC",
    Fastsync = "FASTSYNC"
  }

  export function getJsonObj(obj: CreateStandbyDetails): object {
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
  export function getDeserializedJsonObj(obj: CreateStandbyDetails): object {
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
