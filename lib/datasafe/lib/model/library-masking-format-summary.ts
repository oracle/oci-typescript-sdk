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
 * Summary of a library masking format.
 */
export interface LibraryMaskingFormatSummary {
  /**
   * The OCID of the library masking format.
   */
  "id": string;
  /**
   * The OCID of the compartment that contains the library masking format.
   */
  "compartmentId": string;
  /**
   * The display name of the library masking format.
   */
  "displayName": string;
  /**
   * The date and time the library masking format was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339)
   */
  "timeCreated": Date;
  /**
   * The date and time the library masking format was updated, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339)
   */
  "timeUpdated": Date;
  /**
   * The current state of the library masking format.
   */
  "lifecycleState": model.MaskingLifecycleState;
  /**
   * The description of the library masking format.
   */
  "description"?: string;
  /**
   * An array of OCIDs of the sensitive types compatible with the library masking format.
   */
  "sensitiveTypeIds"?: Array<string>;
  /**
   * Indicates whether the library masking format is user-defined or predefined.
   */
  "source": model.LibraryMaskingFormatSource;
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
}

export namespace LibraryMaskingFormatSummary {
  export function getJsonObj(obj: LibraryMaskingFormatSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: LibraryMaskingFormatSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
