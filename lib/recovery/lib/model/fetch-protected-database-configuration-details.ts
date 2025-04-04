/**
 * Oracle Database Autonomous Recovery Service API
 * Use Oracle Database Autonomous Recovery Service API to manage Protected Databases.
 * OpenAPI spec version: 20210216
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
 * Provides which configuration details to get.
 */
export interface FetchProtectedDatabaseConfigurationDetails {
  /**
   * Currently has four config options ALL, TNSNAMES, HOSTS and CABUNDLE. All will return a zipped folder containing the contents of both tnsnames and the certificateChainPem.
   */
  "configurationType"?: FetchProtectedDatabaseConfigurationDetails.ConfigurationType;
}

export namespace FetchProtectedDatabaseConfigurationDetails {
  export enum ConfigurationType {
    Cabundle = "CABUNDLE",
    Tnsnames = "TNSNAMES",
    Hosts = "HOSTS",
    Rcvconf = "RCVCONF",
    All = "ALL"
  }

  export function getJsonObj(obj: FetchProtectedDatabaseConfigurationDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: FetchProtectedDatabaseConfigurationDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
