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
 * Infrastructure target version details.
 */
export interface InfrastructureTargetVersion {
  /**
   * The history entry of the target system software version for the database server patching operation.
   */
  "targetDbVersionHistoryEntry": Array<string>;
  /**
   * The history entry of the target storage cell system software version for the storage cell patching operation.
   */
  "targetStorageVersionHistoryEntry": Array<string>;
  /**
   * The resource type of the target Exadata infrastructure resource that will receive the system software update.
   */
  "targetResourceType"?: InfrastructureTargetVersion.TargetResourceType;
  /**
   * The OCID of the target Exadata Infrastructure resource that will receive the maintenance update.
   */
  "targetResourceId"?: string;
}

export namespace InfrastructureTargetVersion {
  export enum TargetResourceType {
    ExadataDbSystem = "EXADATA_DB_SYSTEM",
    CloudExadataInfrastructure = "CLOUD_EXADATA_INFRASTRUCTURE",
    ExaccInfrastructure = "EXACC_INFRASTRUCTURE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: InfrastructureTargetVersion): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: InfrastructureTargetVersion): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
