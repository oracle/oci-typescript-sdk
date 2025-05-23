/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
 * OpenAPI spec version: 20181201
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
 * The resource represents sensitive types to be exported in Data Safe.
 */
export interface SensitiveTypesExport {
  /**
   * The OCID of the sensitive types export.
   */
  "id": string;
  /**
   * The display name of the sensitive types export.
   */
  "displayName": string;
  /**
   * The description of the sensitive types export.
   */
  "description"?: string;
  /**
   * The OCID of the compartment that contains the sensitive types export.
   */
  "compartmentId": string;
  /**
   * The current state of the sensitive types export.
   */
  "lifecycleState": model.SensitiveTypesExportLifecycleState;
  /**
   * The date and time the sensitive types export was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   */
  "timeCreated": Date;
  /**
   * The date and time the sensitive types export was last updated, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   */
  "timeUpdated"?: Date;
  /**
   * The OCIDs of the sensitive types used to create sensitive types export.
   *
   */
  "sensitiveTypeIdsForExport"?: Array<string>;
  /**
   * Indicates if all the existing user-defined sensitive types are used for export. If it's set to true, the
   * sensitiveTypeIdsForExport attribute is ignored and all user-defined sensitive types are exported.
   *
   */
  "isIncludeAllSensitiveTypes": boolean;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm)
* <p>
Example: {@code {\"Department\": \"Finance\"}}
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm)
   * Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * System tags for this resource. Each key is predefined and scoped to a namespace. For more information, see Resource Tags.
   * Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace SensitiveTypesExport {
  export function getJsonObj(obj: SensitiveTypesExport): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SensitiveTypesExport): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
