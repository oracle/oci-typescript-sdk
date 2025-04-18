/**
 * Oracle Cloud Migrations API
 * A description of the Oracle Cloud Migrations API.
 * OpenAPI spec version: 20220919
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
 * Description of the VM target asset.
 */
export interface VmTargetAsset extends model.TargetAsset {
  /**
   * Preferred VM shape type that you provide.
   */
  "preferredShapeType": VmTargetAsset.PreferredShapeType;
  "testSpec"?: model.LaunchInstanceDetails;
  /**
   * Performance of the block volumes. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "blockVolumesPerformance"?: number;
  /**
   * Microsoft license for VM configuration.
   */
  "msLicense"?: string;
  "userSpec"?: model.LaunchInstanceDetails;
  "recommendedSpec"?: model.LaunchInstanceDetails;

  "type": string;
}

export namespace VmTargetAsset {
  export enum PreferredShapeType {
    Vm = "VM",
    VmIntel = "VM_INTEL",
    VmIntelStandard = "VM_INTEL_Standard",
    VmIntelDensIo = "VM_INTEL_DensIO",
    VmIntelGpu = "VM_INTEL_GPU",
    VmIntelOptimized = "VM_INTEL_Optimized",
    VmAmd = "VM_AMD",
    VmAmdStandard = "VM_AMD_Standard",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: VmTargetAsset, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.TargetAsset.getJsonObj(obj) as VmTargetAsset)),
      ...{
        "testSpec": obj.testSpec ? model.LaunchInstanceDetails.getJsonObj(obj.testSpec) : undefined,

        "userSpec": obj.userSpec ? model.LaunchInstanceDetails.getJsonObj(obj.userSpec) : undefined,
        "recommendedSpec": obj.recommendedSpec
          ? model.LaunchInstanceDetails.getJsonObj(obj.recommendedSpec)
          : undefined
      }
    };

    return jsonObj;
  }
  export const type = "INSTANCE";
  export function getDeserializedJsonObj(obj: VmTargetAsset, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.TargetAsset.getDeserializedJsonObj(obj) as VmTargetAsset)),
      ...{
        "testSpec": obj.testSpec
          ? model.LaunchInstanceDetails.getDeserializedJsonObj(obj.testSpec)
          : undefined,

        "userSpec": obj.userSpec
          ? model.LaunchInstanceDetails.getDeserializedJsonObj(obj.userSpec)
          : undefined,
        "recommendedSpec": obj.recommendedSpec
          ? model.LaunchInstanceDetails.getDeserializedJsonObj(obj.recommendedSpec)
          : undefined
      }
    };

    return jsonObj;
  }
}
