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
 * Specifies the source for a volume group.
 */
export interface VolumeGroupSourceDetails {
  "type": string;
}

export namespace VolumeGroupSourceDetails {
  export function getJsonObj(obj: VolumeGroupSourceDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "volumeGroupReplicaId":
          return model.VolumeGroupSourceFromVolumeGroupReplicaDetails.getJsonObj(
            <model.VolumeGroupSourceFromVolumeGroupReplicaDetails>(<object>jsonObj),
            true
          );
        case "volumeGroupId":
          return model.VolumeGroupSourceFromVolumeGroupDetails.getJsonObj(
            <model.VolumeGroupSourceFromVolumeGroupDetails>(<object>jsonObj),
            true
          );
        case "volumeIds":
          return model.VolumeGroupSourceFromVolumesDetails.getJsonObj(
            <model.VolumeGroupSourceFromVolumesDetails>(<object>jsonObj),
            true
          );
        case "volumeGroupBackupId":
          return model.VolumeGroupSourceFromVolumeGroupBackupDetails.getJsonObj(
            <model.VolumeGroupSourceFromVolumeGroupBackupDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: VolumeGroupSourceDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "volumeGroupReplicaId":
          return model.VolumeGroupSourceFromVolumeGroupReplicaDetails.getDeserializedJsonObj(
            <model.VolumeGroupSourceFromVolumeGroupReplicaDetails>(<object>jsonObj),
            true
          );
        case "volumeGroupId":
          return model.VolumeGroupSourceFromVolumeGroupDetails.getDeserializedJsonObj(
            <model.VolumeGroupSourceFromVolumeGroupDetails>(<object>jsonObj),
            true
          );
        case "volumeIds":
          return model.VolumeGroupSourceFromVolumesDetails.getDeserializedJsonObj(
            <model.VolumeGroupSourceFromVolumesDetails>(<object>jsonObj),
            true
          );
        case "volumeGroupBackupId":
          return model.VolumeGroupSourceFromVolumeGroupBackupDetails.getDeserializedJsonObj(
            <model.VolumeGroupSourceFromVolumeGroupBackupDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
}
