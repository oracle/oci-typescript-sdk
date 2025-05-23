/**
 * Core Services API
 * Use the Core Services API to manage resources such as virtual cloud networks (VCNs),
compute instances, and block storage volumes. For more information, see the console
documentation for the [Networking](https://docs.oracle.com/iaas/Content/Network/Concepts/overview.htm),
[Compute](https://docs.oracle.com/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](https://docs.oracle.com/iaas/Content/Block/Concepts/overview.htm) services.
The required permissions are documented in the
[Details for the Core Services](https://docs.oracle.com/iaas/Content/Identity/Reference/corepolicyreference.htm) article.

 * OpenAPI spec version: 20160918
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

export interface InstanceConfigurationInstanceSourceViaImageDetails
  extends model.InstanceConfigurationInstanceSourceDetails {
  /**
   * The size of the boot volume in GBs. The minimum value is 50 GB and the maximum
   * value is 32,768 GB (32 TB).
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "bootVolumeSizeInGBs"?: number;
  /**
   * The OCID of the image used to boot the instance.
   */
  "imageId"?: string;
  /**
   * The OCID of the Vault service key to assign as the master encryption key for the boot volume.
   */
  "kmsKeyId"?: string;
  /**
    * The number of volume performance units (VPUs) that will be applied to this volume per GB,
* representing the Block Volume service's elastic performance options.
* See [Block Volume Performance Levels](https://docs.oracle.com/iaas/Content/Block/Concepts/blockvolumeperformance.htm#perf_levels) for more information.
* <p>
Allowed values:
* <p>
  * {@code 10}: Represents Balanced option.
* <p>
  * {@code 20}: Represents Higher Performance option.
* <p>
  * {@code 30}-{@code 120}: Represents the Ultra High Performance option.
* <p>
For performance autotune enabled volumes, it would be the Default(Minimum) VPUs/GB.
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "bootVolumeVpusPerGB"?: number;
  "instanceSourceImageFilterDetails"?: model.InstanceConfigurationInstanceSourceImageFilterDetails;

  "sourceType": string;
}

export namespace InstanceConfigurationInstanceSourceViaImageDetails {
  export function getJsonObj(
    obj: InstanceConfigurationInstanceSourceViaImageDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.InstanceConfigurationInstanceSourceDetails.getJsonObj(
            obj
          ) as InstanceConfigurationInstanceSourceViaImageDetails)),
      ...{
        "instanceSourceImageFilterDetails": obj.instanceSourceImageFilterDetails
          ? model.InstanceConfigurationInstanceSourceImageFilterDetails.getJsonObj(
              obj.instanceSourceImageFilterDetails
            )
          : undefined
      }
    };

    return jsonObj;
  }
  export const sourceType = "image";
  export function getDeserializedJsonObj(
    obj: InstanceConfigurationInstanceSourceViaImageDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.InstanceConfigurationInstanceSourceDetails.getDeserializedJsonObj(
            obj
          ) as InstanceConfigurationInstanceSourceViaImageDetails)),
      ...{
        "instanceSourceImageFilterDetails": obj.instanceSourceImageFilterDetails
          ? model.InstanceConfigurationInstanceSourceImageFilterDetails.getDeserializedJsonObj(
              obj.instanceSourceImageFilterDetails
            )
          : undefined
      }
    };

    return jsonObj;
  }
}
