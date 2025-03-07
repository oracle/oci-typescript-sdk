/**
 * Big Data Service API
 * REST API for Oracle Big Data Service. Use this API to build, deploy, and manage fully elastic Big Data Service clusters. Build on Hadoop, Spark and Data Science distributions, which can be fully integrated with existing enterprise data in Oracle Database and Oracle applications.

 * OpenAPI spec version: 20190531
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
 * The reqeust body when activating a BDS metastore configuration
 */
export interface ActivateBdsMetastoreConfigurationDetails {
  /**
   * Base-64 encoded passphrase of the BDS Api Key. Set only if metastore's type is EXTERNAL.
   */
  "bdsApiKeyPassphrase"?: string;
  /**
   * Base-64 encoded password for the cluster admin user.
   */
  "clusterAdminPassword": string;
}

export namespace ActivateBdsMetastoreConfigurationDetails {
  export function getJsonObj(obj: ActivateBdsMetastoreConfigurationDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ActivateBdsMetastoreConfigurationDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
