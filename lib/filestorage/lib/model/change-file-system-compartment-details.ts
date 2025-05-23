/**
 * File Storage API
 * Use the File Storage service API to manage file systems, mount targets, and snapshots.
For more information, see [Overview of File Storage](https://docs.oracle.com/iaas/Content/File/Concepts/filestorageoverview.htm).

 * OpenAPI spec version: 20171215
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
 * Details for changing the compartment.
 */
export interface ChangeFileSystemCompartmentDetails {
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment to move the file system to.
   *
   */
  "compartmentId": string;
}

export namespace ChangeFileSystemCompartmentDetails {
  export function getJsonObj(obj: ChangeFileSystemCompartmentDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ChangeFileSystemCompartmentDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
