/**
 * PGSQL Control Plane API
 * Use the OCI Database with PostgreSQL API to manage resources such as database systems, database nodes, backups, and configurations. 
For information, see the user guide documentation for the [service](https://docs.oracle.com/iaas/Content/postgresql/home.htm).

 * OpenAPI spec version: 20220915
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
 * Storage details of the database system.
 */
export interface StorageDetails {
  /**
   * Specifies if the block volume used for the database system is regional or AD-local.
   * If not specified, it will be set to false.
   * If {@code isRegionallyDurable} is set to true, {@code availabilityDomain} should not be specified.
   * If {@code isRegionallyDurable} is set to false, {@code availabilityDomain} must be specified.
   *
   */
  "isRegionallyDurable": boolean;
  /**
   * Specifies the availability domain of AD-local storage.
   * If {@code isRegionallyDurable} is set to true, {@code availabilityDomain} should not be specified.
   * If {@code isRegionallyDurable} is set to false, {@code availabilityDomain} must be specified.
   *
   */
  "availabilityDomain"?: string;

  "systemType": string;
}

export namespace StorageDetails {
  export function getJsonObj(obj: StorageDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "systemType" in obj && obj.systemType) {
      switch (obj.systemType) {
        case "OCI_OPTIMIZED_STORAGE":
          return model.OciOptimizedStorageDetails.getJsonObj(
            <model.OciOptimizedStorageDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.systemType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: StorageDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "systemType" in obj && obj.systemType) {
      switch (obj.systemType) {
        case "OCI_OPTIMIZED_STORAGE":
          return model.OciOptimizedStorageDetails.getDeserializedJsonObj(
            <model.OciOptimizedStorageDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.systemType}`);
      }
    }
    return jsonObj;
  }
}
