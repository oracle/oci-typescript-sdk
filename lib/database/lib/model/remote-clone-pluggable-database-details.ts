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
 * **Deprecated.** Use {@link #createPluggableDatabaseDetails(CreatePluggableDatabaseDetailsRequest) createPluggableDatabaseDetails} for Pluggable Database RemoteClone Operation.
 * Parameters for cloning a pluggable database (PDB) in a remote database (CDB). A remote CDB is one that does not contain the source PDB.
 * <p>
 **Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.
 *
 */
export interface RemoteClonePluggableDatabaseDetails {
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the target CDB
   */
  "targetContainerDatabaseId": string;
  /**
   * The DB system administrator password of the source CDB.
   */
  "sourceContainerDbAdminPassword": string;
  /**
   * The name for the pluggable database (PDB). The name is unique in the context of a {@link Database}. The name must begin with an alphabetic character and can contain a maximum of thirty alphanumeric characters. Special characters are not permitted. The pluggable database name should not be same as the container database name.
   */
  "clonedPdbName": string;
  /**
   * A strong password for PDB Admin of the newly cloned PDB. The password must be at least nine characters and contain at least two uppercase, two lowercase, two numbers, and two special characters. The special characters must be _, \\#, or -.
   */
  "pdbAdminPassword"?: string;
  /**
   * The existing TDE wallet password of the target CDB.
   */
  "targetTdeWalletPassword"?: string;
  /**
   * The locked mode of the pluggable database admin account. If false, the user needs to provide the PDB Admin Password to connect to it.
   * If true, the pluggable database will be locked and user cannot login to it.
   *
   */
  "shouldPdbAdminAccountBeLocked"?: boolean;
}

export namespace RemoteClonePluggableDatabaseDetails {
  export function getJsonObj(obj: RemoteClonePluggableDatabaseDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RemoteClonePluggableDatabaseDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
