/**
 * File Storage with Lustre API
 * Use the File Storage with Lustre API to manage Lustre file systems and related resources. For more information, see [File Storage with Lustre](https://docs.oracle.com/iaas/Content/lustre/home.htm).
 * OpenAPI spec version: 20250228
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
 * An administrative feature that allows you to restrict root level access from clients that try to access your Lustre file system as root.
 */
export interface RootSquashConfiguration {
  /**
   * Used when clients accessing the Lustre file system have their UID and GID remapped to
   * {@code squashUid} and {@code squashGid}. If {@code ROOT}, only the root user and group (UID/GID 0) are remapped;
   * if {@code NONE}, no remapping is done. If unspecified, defaults to {@code NONE}.
   *
   */
  "identitySquash"?: RootSquashConfiguration.IdentitySquash;
  /**
   * The UID value to remap to when squashing a client UID. See
   * {@code identitySquash} for more details. If unspecified, defaults
   * to {@code 65534}.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "squashUid"?: number;
  /**
   * The GID value to remap to when squashing a client GID. See
   * {@code identitySquash} for more details. If unspecified, defaults
   * to {@code 65534}.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "squashGid"?: number;
  /**
   * A list of NIDs allowed with this lustre file system not to be squashed.
   * A maximum of 10 is allowed.
   *
   */
  "clientExceptions"?: Array<string>;
}

export namespace RootSquashConfiguration {
  export enum IdentitySquash {
    None = "NONE",
    Root = "ROOT",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: RootSquashConfiguration): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RootSquashConfiguration): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
