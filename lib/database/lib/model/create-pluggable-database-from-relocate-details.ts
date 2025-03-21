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
 * Specifies the creation type Relocate.
 * Additional input 'dblinkUsername{@code  and }dblinkUserPassword can be provided for Relocate Operation.
 * If not provided, Backend will create a temporary user to perform Relocate operation.
 *
 */
export interface CreatePluggableDatabaseFromRelocateDetails
  extends model.CreatePluggableDatabaseCreationTypeDetails {
  /**
   * The name of the DB link user.
   */
  "dblinkUsername"?: string;
  /**
   * The DB link user password.
   */
  "dblinkUserPassword"?: string;
  /**
   * The OCID of the Source Pluggable Database.
   */
  "sourcePluggableDatabaseId": string;
  /**
   * The DB system administrator password of the source Container Database.
   */
  "sourceContainerDatabaseAdminPassword": string;

  "creationType": string;
}

export namespace CreatePluggableDatabaseFromRelocateDetails {
  export function getJsonObj(
    obj: CreatePluggableDatabaseFromRelocateDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreatePluggableDatabaseCreationTypeDetails.getJsonObj(
            obj
          ) as CreatePluggableDatabaseFromRelocateDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const creationType = "RELOCATE_PDB";
  export function getDeserializedJsonObj(
    obj: CreatePluggableDatabaseFromRelocateDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreatePluggableDatabaseCreationTypeDetails.getDeserializedJsonObj(
            obj
          ) as CreatePluggableDatabaseFromRelocateDetails)),
      ...{}
    };

    return jsonObj;
  }
}
