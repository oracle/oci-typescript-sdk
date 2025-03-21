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
 * Configuration for the PostgreSQL database instance.
 */
export interface UpdateDbConfigParams {
  /**
   * Whether a configuration update requires a restart of the database instance or a reload of the configuration.
   * Some configuration changes require a restart of database instances to be applied.
   *
   */
  "applyConfig"?: UpdateDbConfigParams.ApplyConfig;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the configuration.
   */
  "configId": string;
}

export namespace UpdateDbConfigParams {
  export enum ApplyConfig {
    Restart = "RESTART",
    Reload = "RELOAD"
  }

  export function getJsonObj(obj: UpdateDbConfigParams): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateDbConfigParams): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
