/**
 * Audit API
 * API for the Audit Service. Use this API for compliance monitoring in your tenancy.
For more information, see [Overview of Audit](https://docs.oracle.com/iaas/Content/Audit/Concepts/auditoverview.htm).

**Tip**: This API is good for queries, but not bulk-export operations.

 * OpenAPI spec version: 20190901
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
 * A container object for state change attributes.
 *
 */
export interface StateChange {
  /**
   * Provides the previous state of fields that may have changed during an operation. To determine
   * how the current operation changed a resource, compare the information in this attribute to
   * {@code current}.
   *
   */
  "previous"?: { [key: string]: any };
  /**
   * Provides the current state of fields that may have changed during an operation. To determine
   * how the current operation changed a resource, compare the information in this attribute to
   * {@code previous}.
   *
   */
  "current"?: { [key: string]: any };
}

export namespace StateChange {
  export function getJsonObj(obj: StateChange): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: StateChange): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
