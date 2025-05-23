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
 * Deprecated. Use the 'CreateComputeInstanceNonMovableBlockVolumeAttachAndMountOperationsDetails' definition instead of this.
 * The details for creating the operations performed on a block volume.
 *
 */
export interface CreateComputeInstanceNonMovableBlockVolumeOperationDetails {
  /**
    * The OCID of the block volume.
* <p>
Example: {@code ocid1.volume.oc1..uniqueID}
* 
    */
  "blockVolumeId": string;
  "attachmentDetails"?: model.CreateBlockVolumeAttachmentDetails;
  "mountDetails"?: model.CreateBlockVolumeMountDetails;
}

export namespace CreateComputeInstanceNonMovableBlockVolumeOperationDetails {
  export function getJsonObj(
    obj: CreateComputeInstanceNonMovableBlockVolumeOperationDetails
  ): object {
    const jsonObj = {
      ...obj,
      ...{
        "attachmentDetails": obj.attachmentDetails
          ? model.CreateBlockVolumeAttachmentDetails.getJsonObj(obj.attachmentDetails)
          : undefined,
        "mountDetails": obj.mountDetails
          ? model.CreateBlockVolumeMountDetails.getJsonObj(obj.mountDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(
    obj: CreateComputeInstanceNonMovableBlockVolumeOperationDetails
  ): object {
    const jsonObj = {
      ...obj,
      ...{
        "attachmentDetails": obj.attachmentDetails
          ? model.CreateBlockVolumeAttachmentDetails.getDeserializedJsonObj(obj.attachmentDetails)
          : undefined,
        "mountDetails": obj.mountDetails
          ? model.CreateBlockVolumeMountDetails.getDeserializedJsonObj(obj.mountDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
