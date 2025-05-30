/**
 * Organizations API
 * Use the Organizations API to consolidate multiple OCI tenancies into an organization, and centrally manage your tenancies and organization resources. For more information, see [Organization Management Overview](https://docs.oracle.com/iaas/Content/General/Concepts/organization_management_overview.htm).
 * OpenAPI spec version: 20230401
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
 * List of regions assignments of a subscription
 */
export interface AdditionalAssignedRegionCollection {
  /**
   * Array containing all regions in region assignments list of a subscription
   */
  "items": Array<string>;
}

export namespace AdditionalAssignedRegionCollection {
  export function getJsonObj(obj: AdditionalAssignedRegionCollection): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AdditionalAssignedRegionCollection): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
