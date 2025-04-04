/**
 * License Manager API
 * Use the License Manager API to manage product licenses and license records. For more information, see [License Manager Overview](https://docs.oracle.com/iaas/Content/LicenseManager/Concepts/licensemanageroverview.htm).
 * OpenAPI spec version: 20220430
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
 * The current license state.
 **/
export enum LifeCycleState {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
  Deleted = "DELETED",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace LifeCycleState {
  export function getJsonObj(obj: LifeCycleState): LifeCycleState {
    return obj;
  }
  export function getDeserializedJsonObj(obj: LifeCycleState): LifeCycleState {
    return obj;
  }
}
