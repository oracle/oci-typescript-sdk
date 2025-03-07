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

/**
 * The shape configuration for an instance. The shape configuration determines
 * the resources allocated to an instance.
 *
 */
export interface InstanceShapeConfig {
  /**
   * The total number of OCPUs available to the instance.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "ocpus"?: number;
  /**
   * The total amount of memory available to the instance, in gigabytes.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "memoryInGBs"?: number;
  /**
    * The baseline OCPU utilization for a subcore burstable VM instance. Leave this attribute blank for a
* non-burstable instance, or explicitly specify non-burstable with {@code BASELINE_1_1}.
* <p>
The following values are supported:
* - {@code BASELINE_1_8} - baseline usage is 1/8 of an OCPU.
* - {@code BASELINE_1_2} - baseline usage is 1/2 of an OCPU.
* - {@code BASELINE_1_1} - baseline usage is the entire OCPU. This represents a non-burstable instance.
* 
    */
  "baselineOcpuUtilization"?: InstanceShapeConfig.BaselineOcpuUtilization;
  /**
   * A short description of the instance's processor (CPU).
   *
   */
  "processorDescription"?: string;
  /**
   * The networking bandwidth available to the instance, in gigabits per second.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "networkingBandwidthInGbps"?: number;
  /**
   * The maximum number of VNIC attachments for the instance.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxVnicAttachments"?: number;
  /**
   * The number of GPUs available to the instance.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "gpus"?: number;
  /**
    * A short description of the instance's graphics processing unit (GPU).
* <p>
If the instance does not have any GPUs, this field is {@code null}.
* 
    */
  "gpuDescription"?: string;
  /**
   * The number of local disks available to the instance.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "localDisks"?: number;
  /**
    * The aggregate size of all local disks, in gigabytes.
* <p>
If the instance does not have any local disks, this field is {@code null}.
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "localDisksTotalSizeInGBs"?: number;
  /**
    * A short description of the local disks available to this instance.
* <p>
If the instance does not have any local disks, this field is {@code null}.
* 
    */
  "localDiskDescription"?: string;
  /**
   * The total number of VCPUs available to the instance. This can be used instead of OCPUs,
   * in which case the actual number of OCPUs will be calculated based on this value
   * and the actual hardware. This must be a multiple of 2.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "vcpus"?: number;
}

export namespace InstanceShapeConfig {
  export enum BaselineOcpuUtilization {
    Baseline18 = "BASELINE_1_8",
    Baseline12 = "BASELINE_1_2",
    Baseline11 = "BASELINE_1_1",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: InstanceShapeConfig): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: InstanceShapeConfig): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
