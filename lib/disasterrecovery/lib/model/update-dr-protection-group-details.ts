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
 * The details for updating a DR protection group.
 */
export interface UpdateDrProtectionGroupDetails {
  /**
    * The display name of the DR protection group.
* <p>
Example: {@code EBS PHX Group}
* 
    */
  "displayName"?: string;
  "logLocation"?: model.UpdateObjectStorageLogLocationDetails;
  /**
   * A list of DR protection group members.  When updating members, this list must contain all members being retained,
   * including added and updated members. The list must not contain deleted members.
   *
   */
  "members"?: Array<model.UpdateDrProtectionGroupMemberDetails>;
  /**
    * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
* <p>
Example: {@code {\"Department\": \"Finance\"}}
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace.
* <p>
Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace UpdateDrProtectionGroupDetails {
  export function getJsonObj(obj: UpdateDrProtectionGroupDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "logLocation": obj.logLocation
          ? model.UpdateObjectStorageLogLocationDetails.getJsonObj(obj.logLocation)
          : undefined,
        "members": obj.members
          ? obj.members.map(item => {
              return model.UpdateDrProtectionGroupMemberDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateDrProtectionGroupDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "logLocation": obj.logLocation
          ? model.UpdateObjectStorageLogLocationDetails.getDeserializedJsonObj(obj.logLocation)
          : undefined,
        "members": obj.members
          ? obj.members.map(item => {
              return model.UpdateDrProtectionGroupMemberDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
