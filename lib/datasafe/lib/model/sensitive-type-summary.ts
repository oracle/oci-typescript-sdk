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
 * Summary of a sensitive type.
 */
export interface SensitiveTypeSummary {
  /**
   * The OCID of the sensitive type.
   */
  "id": string;
  /**
   * The display name of the sensitive type.
   */
  "displayName": string;
  /**
   * The OCID of the compartment that contains the sensitive type.
   */
  "compartmentId": string;
  /**
   * The current state of the sensitive type.
   */
  "lifecycleState": model.DiscoveryLifecycleState;
  /**
   * The short name of the sensitive type.
   */
  "shortName"?: string;
  /**
   * Specifies whether the sensitive type is user-defined or predefined.
   */
  "source": model.SensitiveTypeSource;
  /**
   * The date and time the sensitive type was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   */
  "timeCreated": Date;
  /**
   * The date and time the sensitive type was last updated, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   */
  "timeUpdated": Date;
  /**
   * The description of the sensitive type.
   */
  "description"?: string;
  /**
   * The entity type. It can be either a sensitive type with regular expressions or a sensitive category used for
   * grouping similar sensitive types.
   *
   */
  "entityType": model.SensitiveTypeEntity;
  /**
   * The OCID of the parent sensitive category.
   */
  "parentCategoryId"?: string;
  /**
   * The OCID of the library masking format that should be used to mask the sensitive columns associated with the sensitive type.
   */
  "defaultMaskingFormatId"?: string;
  /**
   * Specifies whether the sensitive type is common. Common sensitive types belong to
   * library sensitive types which are frequently used to perform sensitive data discovery.
   *
   */
  "isCommon"?: boolean;
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

export namespace SensitiveTypeSummary {
  export function getJsonObj(obj: SensitiveTypeSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SensitiveTypeSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
