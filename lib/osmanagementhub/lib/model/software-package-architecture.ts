/**
 * OS Management Hub API
 * Use the OS Management Hub API to manage and monitor updates and patches for instances in OCI, your private data center, or 3rd-party clouds. 
For more information, see [Overview of OS Management Hub](https://docs.cloud.oracle.com/iaas/osmh/doc/overview.htm).

 * OpenAPI spec version: 20220901
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Architecture type of a software package.
 **/
export enum SoftwarePackageArchitecture {
  I386 = "I386",
  I686 = "I686",
  Aarch64 = "AARCH64",
  X8664 = "X86_64",
  Src = "SRC",
  Noarch = "NOARCH",
  Other = "OTHER",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace SoftwarePackageArchitecture {
  export function getJsonObj(obj: SoftwarePackageArchitecture): SoftwarePackageArchitecture {
    return obj;
  }
  export function getDeserializedJsonObj(
    obj: SoftwarePackageArchitecture
  ): SoftwarePackageArchitecture {
    return obj;
  }
}