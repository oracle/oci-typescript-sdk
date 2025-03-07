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
 * The details for updating the operations performed on a file systems for movable compute instance.
 *
 */
export interface UpdateComputeInstanceMovableFileSystemOperationDetails {
  /**
    * The export path of the file system.
* <p>
Example: {@code /fs-export-path}
* 
    */
  "exportPath": string;
  /**
    * The physical mount point of the file system on a host.
* <p>
Example: {@code /mnt/yourmountpoint}
* 
    */
  "mountPoint": string;
  "mountDetails": model.UpdateFileSystemMountDetails;
  "unmountDetails": model.UpdateFileSystemUnmountDetails;
}

export namespace UpdateComputeInstanceMovableFileSystemOperationDetails {
  export function getJsonObj(obj: UpdateComputeInstanceMovableFileSystemOperationDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "mountDetails": obj.mountDetails
          ? model.UpdateFileSystemMountDetails.getJsonObj(obj.mountDetails)
          : undefined,
        "unmountDetails": obj.unmountDetails
          ? model.UpdateFileSystemUnmountDetails.getJsonObj(obj.unmountDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(
    obj: UpdateComputeInstanceMovableFileSystemOperationDetails
  ): object {
    const jsonObj = {
      ...obj,
      ...{
        "mountDetails": obj.mountDetails
          ? model.UpdateFileSystemMountDetails.getDeserializedJsonObj(obj.mountDetails)
          : undefined,
        "unmountDetails": obj.unmountDetails
          ? model.UpdateFileSystemUnmountDetails.getDeserializedJsonObj(obj.unmountDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
