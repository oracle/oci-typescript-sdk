/**
 * NoSQL Database API
 * The control plane API for NoSQL Database Cloud Service HTTPS
provides endpoints to perform NDCS operations, including creation
and deletion of tables and indexes; population and access of data
in tables; and access of table usage metrics.

 * OpenAPI spec version: 20190828
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
 * The result of an UpdateRow operation.
 */
export interface UpdateRowResult {
  /**
   * An opaque version string associated with the row.
   */
  "version"?: string;
  /**
   * The version string associated with the existing row.
   * Returned if the put fails due to options setting in the
   * request.
   *
   */
  "existingVersion"?: string;
  /**
   * The map of values from a row.
   */
  "existingValue"?: { [key: string]: any };
  /**
   * The value generated if the operation created a new value for
   * an identity column. If the table has no identity column, this value
   * is null. If it has an identity column, and a value was generated for
   * that column, it is non-null.
   *
   */
  "generatedValue"?: string;
  "usage"?: model.RequestUsage;
}

export namespace UpdateRowResult {
  export function getJsonObj(obj: UpdateRowResult): object {
    const jsonObj = {
      ...obj,
      ...{
        "usage": obj.usage ? model.RequestUsage.getJsonObj(obj.usage) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateRowResult): object {
    const jsonObj = {
      ...obj,
      ...{
        "usage": obj.usage ? model.RequestUsage.getDeserializedJsonObj(obj.usage) : undefined
      }
    };

    return jsonObj;
  }
}
