/**
 * OS Management API
 * API for the OS Management service. Use these API operations for working
with Managed instances and Managed instance groups.

 * OpenAPI spec version: 20190801
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
 * Information detailing the state of a module stream
 */
export interface UpdateModuleStreamDetails {
  /**
   * The name of the stream of the parent module
   */
  "streamName": string;
  /**
    * The status of the stream
* <p>
A stream with the \"ENABLED\" status can be used as a source for installing
* profiles.  Streams with this status are also \"ACTIVE\".
* <p>
A stream with the \"DISABLED\" status cannot be the source for installing
* profiles.  To install profiles and packages from this stream, it must be
* enabled.
* <p>
A stream with the \"ACTIVE\" status can be used as a source for installing
* profiles.  The packages that comprise the stream are also used when a
* matching package is installed directly.  In general, a stream can have
* this status if it is the default stream for the module and no stream has
* been explicitly enabled.
* 
    */
  "status": UpdateModuleStreamDetails.Status;
  /**
   * The date and time of the last status change for this object, as
   * described in [RFC 3339](https://tools.ietf.org/rfc/rfc3339),
   * section 14.29.
   *
   */
  "timeModified": Date;
  /**
   * The name of the software source that publishes this stream.
   */
  "softwareSourceName"?: string;
  /**
   * The URL of the software source that publishes this stream.
   */
  "softwareSourceUrl"?: string;
  /**
   * Indicates if the module stream is the default
   */
  "isDefault"?: boolean;
  /**
   * The profiles of the stream
   */
  "profiles"?: Array<model.UpdateModuleStreamProfileDetails>;
}

export namespace UpdateModuleStreamDetails {
  export enum Status {
    Enabled = "ENABLED",
    Disabled = "DISABLED",
    Active = "ACTIVE"
  }

  export function getJsonObj(obj: UpdateModuleStreamDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "profiles": obj.profiles
          ? obj.profiles.map(item => {
              return model.UpdateModuleStreamProfileDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateModuleStreamDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "profiles": obj.profiles
          ? obj.profiles.map(item => {
              return model.UpdateModuleStreamProfileDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
