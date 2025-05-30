/**
 * Ops Insights API
 * Use the Ops Insights API to perform data extraction operations to obtain database
resource utilization, performance statistics, and reference information. For more information,
see [About Oracle Cloud Infrastructure Ops Insights](https://docs.oracle.com/iaas/en-us/iaas/operations-insights/doc/operations-insights.html).

 * OpenAPI spec version: 20200630
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
 * Summary resource object.
 */
export interface ObjectSummary {
  /**
   * The name of the Awr Hub object.
   */
  "name"?: string;
  /**
   * Size of the Awr Hub object in bytes. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "size"?: number;
  /**
   * Base64-encoded MD5 hash of the Awr Hub object data.
   */
  "md5"?: string;
  /**
   * The time at which the resource was first created. An RFC3339 formatted datetime string
   */
  "timeCreated"?: Date;
  /**
   * For optimistic concurrency control. See {@code if-match}.
   *
   */
  "etag"?: string;
  /**
   * The object's storage tier.
   */
  "storageTier"?: model.StorageTier;
  /**
   * Archival state of an object for those in the archival tier.
   */
  "archivalState"?: model.ArchivalState;
  /**
   * The date and time the Awr Hub object was modified
   */
  "timeModified"?: Date;
}

export namespace ObjectSummary {
  export function getJsonObj(obj: ObjectSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ObjectSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
