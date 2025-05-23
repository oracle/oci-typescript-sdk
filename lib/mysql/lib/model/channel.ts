/**
 * MySQL Database Service API
 * The API for the MySQL Database Service
 * OpenAPI spec version: 20190415
 * Contact: mysql-cloud-dev_ww_grp@oracle.com
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
 * A Channel connecting a DB System to an external entity.
 */
export interface Channel {
  /**
   * The OCID of the Channel.
   */
  "id": string;
  /**
   * The OCID of the compartment.
   */
  "compartmentId": string;
  /**
   * The user-friendly name for the Channel. It does not have to be unique.
   */
  "displayName": string;
  /**
   * Whether the Channel has been enabled by the user.
   */
  "isEnabled": boolean;
  "source": model.ChannelSourceMysql;
  "target": model.ChannelTargetDbSystem;
  /**
   * User provided description of the Channel.
   */
  "description"?: string;
  /**
   * The state of the Channel.
   */
  "lifecycleState": Channel.LifecycleState;
  /**
   * A message describing the state of the Channel.
   */
  "lifecycleDetails"?: string;
  /**
   * The date and time the Channel was created, as described by [RFC 3339](https://tools.ietf.org/rfc/rfc3339).
   *
   */
  "timeCreated": Date;
  /**
   * The time the Channel was last updated, as described by [RFC 3339](https://tools.ietf.org/rfc/rfc3339).
   *
   */
  "timeUpdated": Date;
  /**
   * Simple key-value pair applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Usage of predefined tag keys. These predefined keys are scoped to namespaces.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces.
   * Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace Channel {
  export enum LifecycleState {
    Creating = "CREATING",
    Active = "ACTIVE",
    NeedsAttention = "NEEDS_ATTENTION",
    Inactive = "INACTIVE",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Channel): object {
    const jsonObj = {
      ...obj,
      ...{
        "source": obj.source ? model.ChannelSource.getJsonObj(obj.source) : undefined,
        "target": obj.target ? model.ChannelTarget.getJsonObj(obj.target) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Channel): object {
    const jsonObj = {
      ...obj,
      ...{
        "source": obj.source ? model.ChannelSource.getDeserializedJsonObj(obj.source) : undefined,
        "target": obj.target ? model.ChannelTarget.getDeserializedJsonObj(obj.target) : undefined
      }
    };

    return jsonObj;
  }
}
