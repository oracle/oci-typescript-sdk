/**
 * Fleet Application Management Service API
 * Fleet Application Management provides a centralized platform to help you automate resource management tasks, validate patch compliance, and enhance operational efficiency across an enterprise.

 * OpenAPI spec version: 20250228
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
 * The sort order to use. At present, the values are resource name ({@code resourceDisplayName}), target name ({@code displayName}) or product name ({@code product}).
 *
 **/
export enum InventoryResourceSortBy {
  TimeCreated = "timeCreated",
  DisplayName = "displayName"
}

export namespace InventoryResourceSortBy {
  export function getJsonObj(obj: InventoryResourceSortBy): InventoryResourceSortBy {
    return obj;
  }
  export function getDeserializedJsonObj(obj: InventoryResourceSortBy): InventoryResourceSortBy {
    return obj;
  }
}
