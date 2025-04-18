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
 * The mapping between a primary region file system export path and destination region mount target.
 *
 */
export interface FileSystemExportMapping {
  /**
    * The OCID of the export path.
* <p>
Example: {@code ocid1.export.oc1..uniqueID}
* 
    */
  "exportId": string;
  /**
    * The OCID of the destination mount target on which this file system export should be created.
* <p>
Example: {@code ocid1.mounttarget.oc1..uniqueID}
* 
    */
  "destinationMountTargetId": string;
}

export namespace FileSystemExportMapping {
  export function getJsonObj(obj: FileSystemExportMapping): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: FileSystemExportMapping): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
