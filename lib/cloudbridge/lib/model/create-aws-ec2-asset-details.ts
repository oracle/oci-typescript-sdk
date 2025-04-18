/**
 * Oracle Cloud Bridge API
 * API for Oracle Cloud Bridge service.
 * OpenAPI spec version: 20220509
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
 * Create AWS EC2 VM type of asset.
 */
export interface CreateAwsEc2AssetDetails extends model.CreateAssetDetails {
  "compute": model.ComputeProperties;
  "vm": model.VmProperties;
  "awsEc2": model.AwsEc2Properties;
  "awsEc2Cost"?: model.MonthlyCostSummary;
  "attachedEbsVolumesCost"?: model.MonthlyCostSummary;

  "assetType": string;
}

export namespace CreateAwsEc2AssetDetails {
  export function getJsonObj(obj: CreateAwsEc2AssetDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateAssetDetails.getJsonObj(obj) as CreateAwsEc2AssetDetails)),
      ...{
        "compute": obj.compute ? model.ComputeProperties.getJsonObj(obj.compute) : undefined,
        "vm": obj.vm ? model.VmProperties.getJsonObj(obj.vm) : undefined,
        "awsEc2": obj.awsEc2 ? model.AwsEc2Properties.getJsonObj(obj.awsEc2) : undefined,
        "awsEc2Cost": obj.awsEc2Cost
          ? model.MonthlyCostSummary.getJsonObj(obj.awsEc2Cost)
          : undefined,
        "attachedEbsVolumesCost": obj.attachedEbsVolumesCost
          ? model.MonthlyCostSummary.getJsonObj(obj.attachedEbsVolumesCost)
          : undefined
      }
    };

    return jsonObj;
  }
  export const assetType = "AWS_EC2";
  export function getDeserializedJsonObj(
    obj: CreateAwsEc2AssetDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateAssetDetails.getDeserializedJsonObj(obj) as CreateAwsEc2AssetDetails)),
      ...{
        "compute": obj.compute
          ? model.ComputeProperties.getDeserializedJsonObj(obj.compute)
          : undefined,
        "vm": obj.vm ? model.VmProperties.getDeserializedJsonObj(obj.vm) : undefined,
        "awsEc2": obj.awsEc2
          ? model.AwsEc2Properties.getDeserializedJsonObj(obj.awsEc2)
          : undefined,
        "awsEc2Cost": obj.awsEc2Cost
          ? model.MonthlyCostSummary.getDeserializedJsonObj(obj.awsEc2Cost)
          : undefined,
        "attachedEbsVolumesCost": obj.attachedEbsVolumesCost
          ? model.MonthlyCostSummary.getDeserializedJsonObj(obj.attachedEbsVolumesCost)
          : undefined
      }
    };

    return jsonObj;
  }
}
