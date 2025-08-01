/**
 * Vault Secret Management API
 * Use the Secret Management API to manage secrets and secret versions. For more information, see [Managing Secrets](https://docs.oracle.com/iaas/Content/KeyManagement/Tasks/managingsecrets.htm).
 * OpenAPI spec version: 20180608
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
 * Details for the source that the source secret has.
 */
export interface SourceRegionInformation {
  /**
   * The OCID of the source region KMS key.
   */
  "sourceKeyId": string;
  /**
   * The name of the source's region.
   */
  "sourceRegion": string;
  /**
   * The OCID of the source region's Vault.
   */
  "sourceVaultId": string;
}

export namespace SourceRegionInformation {
  export function getJsonObj(obj: SourceRegionInformation): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SourceRegionInformation): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
