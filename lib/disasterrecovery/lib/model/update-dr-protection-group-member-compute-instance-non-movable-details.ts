/**
 * Full Stack Disaster Recovery API
 * Use the Full Stack Disaster Recovery (DR) API to manage disaster recovery for business applications.
Full Stack DR is an OCI disaster recovery orchestration and management service that provides comprehensive disaster 
recovery capabilities for all layers of an application stack, including infrastructure, middleware, database, 
and application.

 * OpenAPI spec version: 20220125
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
 * Update properties for a non-movable compute instance member.
 */
export interface UpdateDrProtectionGroupMemberComputeInstanceNonMovableDetails
  extends model.UpdateDrProtectionGroupMemberDetails {
  /**
   * A flag indicating whether the non-movable compute instance should be started and stopped during DR operations.
   * *Prechecks cannot be executed on stopped instances that are configured to be started.*
   *
   */
  "isStartStopEnabled"?: boolean;
  /**
   * A list of operations performed on file systems used by the compute instance.
   *
   */
  "fileSystemOperations"?: Array<model.UpdateComputeInstanceNonMovableFileSystemOperationDetails>;
  /**
   * Deprecated. Use the 'blockVolumeAttachAndMountOperations' attribute instead of this.
   * A list of operations performed on block volumes used by the compute instance.
   *
   */
  "blockVolumeOperations"?: Array<model.UpdateComputeInstanceNonMovableBlockVolumeOperationDetails>;
  "blockVolumeAttachAndMountOperations"?: model.UpdateComputeInstanceNonMovableBlockVolumeAttachAndMountOperationsDetails;

  "memberType": string;
}

export namespace UpdateDrProtectionGroupMemberComputeInstanceNonMovableDetails {
  export function getJsonObj(
    obj: UpdateDrProtectionGroupMemberComputeInstanceNonMovableDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateDrProtectionGroupMemberDetails.getJsonObj(
            obj
          ) as UpdateDrProtectionGroupMemberComputeInstanceNonMovableDetails)),
      ...{
        "fileSystemOperations": obj.fileSystemOperations
          ? obj.fileSystemOperations.map(item => {
              return model.UpdateComputeInstanceNonMovableFileSystemOperationDetails.getJsonObj(
                item
              );
            })
          : undefined,
        "blockVolumeOperations": obj.blockVolumeOperations
          ? obj.blockVolumeOperations.map(item => {
              return model.UpdateComputeInstanceNonMovableBlockVolumeOperationDetails.getJsonObj(
                item
              );
            })
          : undefined,
        "blockVolumeAttachAndMountOperations": obj.blockVolumeAttachAndMountOperations
          ? model.UpdateComputeInstanceNonMovableBlockVolumeAttachAndMountOperationsDetails.getJsonObj(
              obj.blockVolumeAttachAndMountOperations
            )
          : undefined
      }
    };

    return jsonObj;
  }
  export const memberType = "COMPUTE_INSTANCE_NON_MOVABLE";
  export function getDeserializedJsonObj(
    obj: UpdateDrProtectionGroupMemberComputeInstanceNonMovableDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateDrProtectionGroupMemberDetails.getDeserializedJsonObj(
            obj
          ) as UpdateDrProtectionGroupMemberComputeInstanceNonMovableDetails)),
      ...{
        "fileSystemOperations": obj.fileSystemOperations
          ? obj.fileSystemOperations.map(item => {
              return model.UpdateComputeInstanceNonMovableFileSystemOperationDetails.getDeserializedJsonObj(
                item
              );
            })
          : undefined,
        "blockVolumeOperations": obj.blockVolumeOperations
          ? obj.blockVolumeOperations.map(item => {
              return model.UpdateComputeInstanceNonMovableBlockVolumeOperationDetails.getDeserializedJsonObj(
                item
              );
            })
          : undefined,
        "blockVolumeAttachAndMountOperations": obj.blockVolumeAttachAndMountOperations
          ? model.UpdateComputeInstanceNonMovableBlockVolumeAttachAndMountOperationsDetails.getDeserializedJsonObj(
              obj.blockVolumeAttachAndMountOperations
            )
          : undefined
      }
    };

    return jsonObj;
  }
}
