/**
 * Vault Key Management API
 * Use the Key Management API to manage vaults and keys. For more information, see [Managing Vaults](/Content/KeyManagement/Tasks/managingvaults.htm) and [Managing Keys](/Content/KeyManagement/Tasks/managingkeys.htm).

 * OpenAPI spec version: release
 * Contact: sparta_kms_us_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Details for scheduling HSM resource deletion.
 */
export interface ScheduleHsmClusterDeletionDetails {
  /**
   * An optional property indicating when to delete the HsmCluster resource, expressed in
   * [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format. The specified
   * time must be between 7 and 30 days from the time when the request is received.
   * If this property is missing, it will be set to 30 days from the time of the request
   * by default.
   *
   */
  "timeOfDeletion"?: Date;
}

export namespace ScheduleHsmClusterDeletionDetails {
  export function getJsonObj(obj: ScheduleHsmClusterDeletionDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ScheduleHsmClusterDeletionDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}