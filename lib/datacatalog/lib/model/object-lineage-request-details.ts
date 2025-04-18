/**
 * Data Catalog API
 * Use the Data Catalog APIs to collect, organize, find, access, understand, enrich, and activate technical, business, and operational metadata.
For more information, see [Data Catalog](https://docs.oracle.com/iaas/data-catalog/home.htm).

 * OpenAPI spec version: 20190325
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
 * Details needed by a lineage fetch request.
 */
export interface ObjectLineageRequestDetails {
  /**
   * Object level at which the lineage is returned.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "level"?: number;
  /**
   * Direction of the lineage returned.
   */
  "direction"?: model.LineageDirection;
  /**
   * Intra-lineages are drill down lineages. This field indicates whether all intra-lineages need to be
   * expanded inline in the lineage returned.
   *
   */
  "isIntraLineage"?: boolean;
  /**
   * Unique object key for which intra-lineage needs to be fetched. Only drill-down lineage corresponding
   * to the object whose object key is passed is returned.
   *
   */
  "intraLineageObjectKey"?: string;
}

export namespace ObjectLineageRequestDetails {
  export function getJsonObj(obj: ObjectLineageRequestDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ObjectLineageRequestDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
