/**
 * OS Management Hub API
 * Use the OS Management Hub API to manage and monitor updates and patches for instances in OCI, your private data center, or 3rd-party clouds. 
For more information, see [Overview of OS Management Hub](https://docs.oracle.com/iaas/osmh/doc/overview.htm).

 * OpenAPI spec version: 20220901
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
 * Provides the information used to search for a set of modules from a list software sources.
 */
export interface SearchSoftwareSourceModulesDetails {
  /**
   * List of sofware source [OCIDs](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm).
   */
  "softwareSourceIds": Array<string>;
  /**
   * The sort order.
   */
  "sortOrder"?: SearchSoftwareSourceModulesDetails.SortOrder;
  /**
   * The name of a module.
   *
   */
  "name"?: string;
  /**
   * A filter to return modules with a name that contains the given string.
   */
  "nameContains"?: string;
  /**
   * The field to sort by.
   */
  "sortBy"?: SearchSoftwareSourceModulesDetails.SortBy;
}

export namespace SearchSoftwareSourceModulesDetails {
  export enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
  }

  export enum SortBy {
    Name = "NAME"
  }

  export function getJsonObj(obj: SearchSoftwareSourceModulesDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SearchSoftwareSourceModulesDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
