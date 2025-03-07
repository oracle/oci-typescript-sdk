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
 * Details for upgrading a database to a specific Oracle Database version.
 *
 */
export interface UpgradeDatabaseDetails {
  /**
   * The database upgrade action.
   */
  "action": UpgradeDatabaseDetails.Action;
  "databaseUpgradeSourceDetails"?:
    | model.DatabaseUpgradeWithDbHomeDetails
    | model.DatabaseUpgradeWithDatabaseSoftwareImageDetails
    | model.DatabaseUpgradeWithDbVersionDetails;
}

export namespace UpgradeDatabaseDetails {
  export enum Action {
    Precheck = "PRECHECK",
    Upgrade = "UPGRADE",
    Rollback = "ROLLBACK"
  }

  export function getJsonObj(obj: UpgradeDatabaseDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "databaseUpgradeSourceDetails": obj.databaseUpgradeSourceDetails
          ? model.DatabaseUpgradeSourceBase.getJsonObj(obj.databaseUpgradeSourceDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpgradeDatabaseDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "databaseUpgradeSourceDetails": obj.databaseUpgradeSourceDetails
          ? model.DatabaseUpgradeSourceBase.getDeserializedJsonObj(obj.databaseUpgradeSourceDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
