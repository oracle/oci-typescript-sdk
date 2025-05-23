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
 * The object that defines a versioned custom software source.
 */
export interface VersionedCustomSoftwareSource extends model.SoftwareSource {
  /**
   * List of vendor software sources that are used for the basis of the versioned custom software source.
   */
  "vendorSoftwareSources": Array<model.Id>;
  "customSoftwareSourceFilter"?: model.CustomSoftwareSourceFilter;
  /**
   * The version to assign to this custom software source.
   */
  "softwareSourceVersion": string;
  /**
   * Indicates whether the service should automatically resolve package dependencies when including specific packages in the software source.
   */
  "isAutoResolveDependencies"?: boolean;
  /**
   * Indicates whether the service should create the software source from a list of packages provided by the user.
   */
  "isCreatedFromPackageList"?: boolean;
  /**
   * Indicates whether the software source will include only the latest versions of content from vendor software sources, while accounting for other constraints set in the custom or versioned custom software source (such as a package list or filters).
   * * For a module filter that does not specify a stream, this will include all available streams, and within each stream only the latest version of packages.
   * * For a module filter that does specify a stream, this will include only the latest version of packages for the specified stream.
   * * For a package filter that does not specify a version, this will include only the latest available version of the package.
   * * For a package filter that does specify a version, this will include only the specified version of the package (the isLatestContentOnly attribute is ignored).
   * * For a package list, this will include only the specified version of packages and modules in the list (the isLatestContentOnly attribute is ignored).
   *
   */
  "isLatestContentOnly"?: boolean;
  /**
   * The packages in the software source.
   */
  "packages"?: Array<string>;
  /**
   * Identifies how the versioned custom software source was created.
   */
  "softwareSourceSubType"?: model.SoftwareSourceSubType;
  /**
   * The date and time the metadata for this software source was last updated (in [RFC 3339](https://tools.ietf.org/rfc/rfc3339) format).
   *
   */
  "timeMetadataUpdated"?: Date;

  "softwareSourceType": string;
}

export namespace VersionedCustomSoftwareSource {
  export function getJsonObj(
    obj: VersionedCustomSoftwareSource,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.SoftwareSource.getJsonObj(obj) as VersionedCustomSoftwareSource)),
      ...{
        "vendorSoftwareSources": obj.vendorSoftwareSources
          ? obj.vendorSoftwareSources.map(item => {
              return model.Id.getJsonObj(item);
            })
          : undefined,
        "customSoftwareSourceFilter": obj.customSoftwareSourceFilter
          ? model.CustomSoftwareSourceFilter.getJsonObj(obj.customSoftwareSourceFilter)
          : undefined
      }
    };

    return jsonObj;
  }
  export const softwareSourceType = "VERSIONED";
  export function getDeserializedJsonObj(
    obj: VersionedCustomSoftwareSource,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.SoftwareSource.getDeserializedJsonObj(obj) as VersionedCustomSoftwareSource)),
      ...{
        "vendorSoftwareSources": obj.vendorSoftwareSources
          ? obj.vendorSoftwareSources.map(item => {
              return model.Id.getDeserializedJsonObj(item);
            })
          : undefined,
        "customSoftwareSourceFilter": obj.customSoftwareSourceFilter
          ? model.CustomSoftwareSourceFilter.getDeserializedJsonObj(obj.customSoftwareSourceFilter)
          : undefined
      }
    };

    return jsonObj;
  }
}
