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
 * Details of the sensitive data model to be associated as the column source with a masking policy.
 */
export interface UpdateColumnSourceSdmDetails extends model.UpdateColumnSourceDetails {
  /**
   * The OCID of the sensitive data model to be associated as the column source with the masking policy.
   */
  "sensitiveDataModelId": string;

  "columnSource": string;
}

export namespace UpdateColumnSourceSdmDetails {
  export function getJsonObj(obj: UpdateColumnSourceSdmDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateColumnSourceDetails.getJsonObj(obj) as UpdateColumnSourceSdmDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const columnSource = "SENSITIVE_DATA_MODEL";
  export function getDeserializedJsonObj(
    obj: UpdateColumnSourceSdmDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateColumnSourceDetails.getDeserializedJsonObj(
            obj
          ) as UpdateColumnSourceSdmDetails)),
      ...{}
    };

    return jsonObj;
  }
}
