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
 * Contains a list of software sources to get the list of associated package groups.
 */
export interface SearchSoftwareSourcePackageGroupsDetails {
  /**
   * List of software source OCIDs.
   */
  "softwareSourceIds": Array<string>;
  /**
   * The sort order.
   */
  "sortOrder"?: SearchSoftwareSourcePackageGroupsDetails.SortOrder;
  /**
   * The field to sort by.
   */
  "sortBy"?: SearchSoftwareSourcePackageGroupsDetails.SortBy;
  /**
   * filters results, allowing only those with a Name which contains the string.
   */
  "nameContains"?: string;
  /**
   * Indicates if this is a group, category or environment.
   */
  "groupType"?: string;
}

export namespace SearchSoftwareSourcePackageGroupsDetails {
  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }

  export enum SortBy {
    Name = "NAME"
  }

  export function getJsonObj(obj: SearchSoftwareSourcePackageGroupsDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SearchSoftwareSourcePackageGroupsDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}