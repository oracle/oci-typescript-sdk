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

export interface RestoreDatabaseDetails {
  /**
   * Restores using the backup with the System Change Number (SCN) specified.
   * This field is applicable for both use cases - Restoring Container Database or Restoring specific Pluggable Database.
   *
   */
  "databaseSCN"?: string;
  /**
   * Restores to the timestamp specified.
   *
   */
  "timestamp"?: Date;
  /**
   * Restores to the last known good state with the least possible data loss.
   *
   */
  "latest"?: boolean;
  /**
   * Restores only the Pluggable Database (if specified) using the inputs provided in request.
   *
   */
  "pluggableDatabaseName"?: string;
}

export namespace RestoreDatabaseDetails {
  export function getJsonObj(obj: RestoreDatabaseDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RestoreDatabaseDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
