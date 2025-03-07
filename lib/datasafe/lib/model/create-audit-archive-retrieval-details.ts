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
 * Request details for creating a new archive retrieval.
 */
export interface CreateAuditArchiveRetrievalDetails {
  /**
   * The display name of the archive retrieval. The name does not have to be unique, and is changeable.
   */
  "displayName"?: string;
  /**
   * Description of the archive retrieval.
   */
  "description"?: string;
  /**
   * The OCID of the compartment that contains the archival retrieval.
   */
  "compartmentId": string;
  /**
   * The OCID of the target associated with the archive retrieval.
   */
  "targetId": string;
  /**
   * Start month of the archive retrieval, in the format defined by RFC3339.
   */
  "startDate": Date;
  /**
   * End month of the archive retrieval, in the format defined by RFC3339.
   */
  "endDate": Date;
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

export namespace CreateAuditArchiveRetrievalDetails {
  export function getJsonObj(obj: CreateAuditArchiveRetrievalDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateAuditArchiveRetrievalDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
