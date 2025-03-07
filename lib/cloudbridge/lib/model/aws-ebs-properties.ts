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
 * AWS EBS volume related properties.
 */
export interface AwsEbsProperties {
  /**
   * Information about the volume attachments.
   */
  "attachments"?: Array<model.VolumeAttachment>;
  /**
   * The Availability Zone for the volume.
   */
  "availabilityZone"?: string;
  /**
   * Indicates whether the volume is encrypted.
   */
  "isEncrypted": boolean;
  /**
   * The number of I/O operations per second. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "iops"?: number;
  /**
   * Indicates whether Amazon EBS Multi-Attach is enabled.
   */
  "isMultiAttachEnabled": boolean;
  /**
   * The size of the volume, in GiBs. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "sizeInGiBs": number;
  /**
   * The volume state.
   */
  "status"?: string;
  /**
   * Any tags assigned to the volume.
   */
  "tags"?: Array<model.Tag>;
  /**
   * The throughput that the volume supports, in MiB/s. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "throughput"?: number;
  /**
   * The ID of the volume.
   */
  "volumeKey": string;
  /**
   * The volume type.
   */
  "volumeType": string;
}

export namespace AwsEbsProperties {
  export function getJsonObj(obj: AwsEbsProperties): object {
    const jsonObj = {
      ...obj,
      ...{
        "attachments": obj.attachments
          ? obj.attachments.map(item => {
              return model.VolumeAttachment.getJsonObj(item);
            })
          : undefined,

        "tags": obj.tags
          ? obj.tags.map(item => {
              return model.Tag.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AwsEbsProperties): object {
    const jsonObj = {
      ...obj,
      ...{
        "attachments": obj.attachments
          ? obj.attachments.map(item => {
              return model.VolumeAttachment.getDeserializedJsonObj(item);
            })
          : undefined,

        "tags": obj.tags
          ? obj.tags.map(item => {
              return model.Tag.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
