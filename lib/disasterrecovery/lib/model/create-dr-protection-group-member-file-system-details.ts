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
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Create properties for a file system member.
 */
export interface CreateDrProtectionGroupMemberFileSystemDetails
  extends model.CreateDrProtectionGroupMemberDetails {
  /**
    * The availability domain of the destination mount target.
* <p>
Example: `BBTh:region-AD`
* 
    */
  "destinationAvailabilityDomain"?: string;
  /**
   * A list of mappings between file system exports in the primary region and mount targets in the standby region.
   *
   */
  "exportMappings"?: Array<model.FileSystemExportMappingDetails>;

  "memberType": string;
}

export namespace CreateDrProtectionGroupMemberFileSystemDetails {
  export function getJsonObj(
    obj: CreateDrProtectionGroupMemberFileSystemDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateDrProtectionGroupMemberDetails.getJsonObj(
            obj
          ) as CreateDrProtectionGroupMemberFileSystemDetails)),
      ...{
        "exportMappings": obj.exportMappings
          ? obj.exportMappings.map(item => {
              return model.FileSystemExportMappingDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const memberType = "FILE_SYSTEM";
  export function getDeserializedJsonObj(
    obj: CreateDrProtectionGroupMemberFileSystemDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateDrProtectionGroupMemberDetails.getDeserializedJsonObj(
            obj
          ) as CreateDrProtectionGroupMemberFileSystemDetails)),
      ...{
        "exportMappings": obj.exportMappings
          ? obj.exportMappings.map(item => {
              return model.FileSystemExportMappingDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}