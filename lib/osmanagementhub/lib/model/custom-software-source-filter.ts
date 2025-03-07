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
 * Provides the information used to apply filters to a vendor software source to create or update a custom software source.
 */
export interface CustomSoftwareSourceFilter {
  /**
   * The list of package filters.
   */
  "packageFilters"?: Array<model.PackageFilter>;
  /**
   * The list of module stream/profile filters.
   */
  "moduleStreamProfileFilters"?: Array<model.ModuleStreamProfileFilter>;
  /**
   * The list of group filters.
   */
  "packageGroupFilters"?: Array<model.PackageGroupFilter>;
}

export namespace CustomSoftwareSourceFilter {
  export function getJsonObj(obj: CustomSoftwareSourceFilter): object {
    const jsonObj = {
      ...obj,
      ...{
        "packageFilters": obj.packageFilters
          ? obj.packageFilters.map(item => {
              return model.PackageFilter.getJsonObj(item);
            })
          : undefined,
        "moduleStreamProfileFilters": obj.moduleStreamProfileFilters
          ? obj.moduleStreamProfileFilters.map(item => {
              return model.ModuleStreamProfileFilter.getJsonObj(item);
            })
          : undefined,
        "packageGroupFilters": obj.packageGroupFilters
          ? obj.packageGroupFilters.map(item => {
              return model.PackageGroupFilter.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CustomSoftwareSourceFilter): object {
    const jsonObj = {
      ...obj,
      ...{
        "packageFilters": obj.packageFilters
          ? obj.packageFilters.map(item => {
              return model.PackageFilter.getDeserializedJsonObj(item);
            })
          : undefined,
        "moduleStreamProfileFilters": obj.moduleStreamProfileFilters
          ? obj.moduleStreamProfileFilters.map(item => {
              return model.ModuleStreamProfileFilter.getDeserializedJsonObj(item);
            })
          : undefined,
        "packageGroupFilters": obj.packageGroupFilters
          ? obj.packageGroupFilters.map(item => {
              return model.PackageGroupFilter.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
