/**
 * Core Services API
 * Use the Core Services API to manage resources such as virtual cloud networks (VCNs),
compute instances, and block storage volumes. For more information, see the console
documentation for the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services.
The required permissions are documented in the
[Details for the Core Services](/iaas/Content/Identity/Reference/corepolicyreference.htm) article.

 * OpenAPI spec version: 20160918
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
 * The details of the volume to create for CreateVolume operation.
 */
export interface LaunchCreateVolumeFromAttributes extends model.LaunchCreateVolumeDetails {
  /**
   * The OCID of the compartment that contains the volume. If not provided,
   * it will be inherited from the instance.
   *
   */
  "compartmentId"?: string;
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
   * The OCID of the Vault service key to assign as the master encryption key
   * for the volume.
   *
   */
  "kmsKeyId"?: string;
  /**
    * The number of volume performance units (VPUs) that will be applied to this volume per GB,
* representing the Block Volume service's elastic performance options.
* See [Block Volume Performance Levels](https://docs.cloud.oracle.com/iaas/Content/Block/Concepts/blockvolumeperformance.htm#perf_levels) for more information.
* <p>
Allowed values:
* <p>
  * {@code 0}: Represents Lower Cost option.
* <p>
  * {@code 10}: Represents Balanced option.
* <p>
  * {@code 20}: Represents Higher Performance option.
* <p>
  * {@code 30}-{@code 120}: Represents the Ultra High Performance option.
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "vpusPerGB"?: number;
  /**
   * The size of the volume in GBs. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "sizeInGBs": number;

  "volumeCreationType": string;
}

export namespace LaunchCreateVolumeFromAttributes {
  export function getJsonObj(
    obj: LaunchCreateVolumeFromAttributes,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.LaunchCreateVolumeDetails.getJsonObj(obj) as LaunchCreateVolumeFromAttributes)),
      ...{}
    };

    return jsonObj;
  }
  export const volumeCreationType = "ATTRIBUTES";
  export function getDeserializedJsonObj(
    obj: LaunchCreateVolumeFromAttributes,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.LaunchCreateVolumeDetails.getDeserializedJsonObj(
            obj
          ) as LaunchCreateVolumeFromAttributes)),
      ...{}
    };

    return jsonObj;
  }
}