/**
 * MySQL Database Service API
 * The API for the MySQL Database Service
 * OpenAPI spec version: 20190415
 * Contact: mysql-cloud-dev_ww_grp@oracle.com
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
 * A summary of snapshot of the DB system details at the time of the backup.
 *
 */
export interface DbSystemSnapshotSummary {
  /**
   * The user-friendly name for the DB system. It does not have to be unique.
   */
  "displayName": string;
  /**
   * The OCID of the DB System.
   */
  "id": string;
  /**
   * The region identifier of the region where the DB system exists.
   * For more information, please see [Regions and Availability Domains](https://docs.oracle.com/en-us/iaas/Content/General/Concepts/regions.htm).
   *
   */
  "region": string;
}

export namespace DbSystemSnapshotSummary {
  export function getJsonObj(obj: DbSystemSnapshotSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DbSystemSnapshotSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
