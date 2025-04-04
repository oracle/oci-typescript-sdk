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
 * Data Storage configuration properties.
 *
 */
export interface DataStorageDetails {
  /**
   * Enable/disable automatic storage expansion. When set to true, the DB System will automatically
   * add storage incrementally up to the value specified in maxStorageSizeInGBs.
   *
   */
  "isAutoExpandStorageEnabled"?: boolean;
  /**
    * Maximum storage size this DB System can expand to. When isAutoExpandStorageEnabled
* is set to true, the DB System will add storage incrementally up to this value.
* <p>
DB Systems with an initial storage size of 400 GB or less can be expanded up to 32 TB.
* DB Systems with an initial storage size between 401-800 GB can be expanded up to 64 TB.
* DB Systems with an initial storage size between 801-1200 GB can be expanded up to 96 TB.
* DB Systems with an initial storage size of 1201 GB or more can be expanded up to 128 TB.
* <p>
It is not possible to decrease data storage size. You cannot set the maximum data storage size to less
* than either current DB System dataStorageSizeInGBs or allocatedStorageSizeInGBs.
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "maxStorageSizeInGBs"?: number;
}

export namespace DataStorageDetails {
  export function getJsonObj(obj: DataStorageDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DataStorageDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
