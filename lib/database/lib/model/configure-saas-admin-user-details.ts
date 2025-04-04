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
 * Details to update SaaS administrative user configuration.
 */
export interface ConfigureSaasAdminUserDetails {
  /**
   * A strong password for SaaS administrative user. The password must be a minimum of nine (9) characters and contain a minimum of two (2) uppercase, two (2) lowercase, two (2) numbers, and two (2) special characters from _ (underscore), \\# (hashtag), or - (dash).
   */
  "password"?: string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the Oracle Cloud Infrastructure [secret](https://docs.oracle.com/iaas/Content/KeyManagement/Concepts/keyoverview.htm#concepts).
   */
  "secretId"?: string;
  /**
   * The version of the vault secret. If no version is specified, the latest version will be used. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "secretVersionNumber"?: number;
  /**
   * How long, in hours, the SaaS administrative user will stay enabled. If no duration is specified, the default value 1 will be used. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "duration"?: number;
  /**
   * Indicates if the SaaS administrative user is enabled for the Autonomous Database.
   */
  "isEnabled"?: boolean;
  /**
   * The access type for the SaaS administrative user. If no access type is specified, the READ_ONLY access type is used.
   */
  "accessType"?: ConfigureSaasAdminUserDetails.AccessType;
  /**
   * The date and time the SaaS administrative user was enabled at, for the Autonomous Database.
   */
  "timeSaasAdminUserEnabled"?: Date;
}

export namespace ConfigureSaasAdminUserDetails {
  export enum AccessType {
    ReadOnly = "READ_ONLY",
    ReadWrite = "READ_WRITE",
    Admin = "ADMIN"
  }

  export function getJsonObj(obj: ConfigureSaasAdminUserDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ConfigureSaasAdminUserDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
