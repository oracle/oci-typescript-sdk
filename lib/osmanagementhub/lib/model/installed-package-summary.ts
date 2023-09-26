/**
 * OS Management Hub API
 * Use the OS Management Hub API to manage and monitor updates and patches for the operating system environments in your private data centers through a single management console. For more information, see [Overview of OS Management Hub](https://docs.cloud.oracle.com/iaas/osmh/doc/overview.htm).

 * OpenAPI spec version: 20220901
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * A software package installed on a managed instance.
 */
export interface InstalledPackageSummary extends model.PackageSummary {
  /**
   * The date and time the package was installed, as described in
   * [RFC 3339](https://tools.ietf.org/rfc/rfc3339), section 14.29.
   *
   */
  "timeInstalled": Date;
  /**
   * The date and time the package was issued by a providing erratum (if available), as described in
   * [RFC 3339](https://tools.ietf.org/rfc/rfc3339), section 14.29.
   *
   */
  "timeIssued"?: Date;

  "packageClassification": string;
}

export namespace InstalledPackageSummary {
  export function getJsonObj(obj: InstalledPackageSummary, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.PackageSummary.getJsonObj(obj) as InstalledPackageSummary)),
      ...{}
    };

    return jsonObj;
  }
  export const packageClassification = "INSTALLED";
  export function getDeserializedJsonObj(
    obj: InstalledPackageSummary,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.PackageSummary.getDeserializedJsonObj(obj) as InstalledPackageSummary)),
      ...{}
    };

    return jsonObj;
  }
}