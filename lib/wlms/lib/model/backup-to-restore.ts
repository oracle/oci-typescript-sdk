/**
 * WebLogic Management Service API
 * WebLogic Management Service is an OCI service that enables a unified view and management of WebLogic domains
in Oracle Cloud Infrastructure. Features include on-demand patching of WebLogic domains, rollback of the
last applied patch, discovery and management of WebLogic instances on a compute host.

 * OpenAPI spec version: 20241101
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
 * Information of the backup to be used to restore a server in a domain.
 *
 */
export interface BackupToRestore {
  /**
   * The unique identifier of the backup to be used to restore.
   * <p>
   **Note:** Not [OCIDs](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm).
   *
   */
  "id"?: string;
  /**
   * The type of content of the backup.
   */
  "contentType"?: model.BackupContentType;
}

export namespace BackupToRestore {
  export function getJsonObj(obj: BackupToRestore): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: BackupToRestore): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
