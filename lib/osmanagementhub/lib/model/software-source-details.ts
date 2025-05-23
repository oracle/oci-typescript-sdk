/**
 * OS Management Hub API
 * Use the OS Management Hub API to manage and monitor updates and patches for instances in OCI, your private data center, or 3rd-party clouds. 
For more information, see [Overview of OS Management Hub](https://docs.oracle.com/iaas/osmh/doc/overview.htm).

 * OpenAPI spec version: 20220901
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
 * Provides identifying information for the specified software source.
 */
export interface SoftwareSourceDetails {
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the software source.
   */
  "id": string;
  /**
   * Software source name.
   */
  "displayName"?: string;
  /**
   * Software source description.
   */
  "description"?: string;
  /**
   * Type of the software source.
   */
  "softwareSourceType"?: model.SoftwareSourceType;
  /**
   * Indicates whether this is a required software source for Autonomous Linux instances. If true, the user can't unselect it.
   */
  "isMandatoryForAutonomousLinux"?: boolean;
}

export namespace SoftwareSourceDetails {
  export function getJsonObj(obj: SoftwareSourceDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SoftwareSourceDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
