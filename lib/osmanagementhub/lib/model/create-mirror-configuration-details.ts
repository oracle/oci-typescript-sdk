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
 * Information used to create the mirror configuration for a management station.
 */
export interface CreateMirrorConfigurationDetails {
  /**
   * Path to the data volume on the management station where software source mirrors are stored.
   */
  "directory": string;
  /**
   * Default mirror listening port for http.
   */
  "port": string;
  /**
   * Default mirror listening port for https.
   */
  "sslport": string;
  /**
   * Path to the SSL cerfificate.
   */
  "sslcert"?: string;
  /**
   * When enabled, the SSL certificate is verified whenever an instance installs or updates a package from a software source that is mirrored on the management station.
   */
  "isSslverifyEnabled"?: boolean;
}

export namespace CreateMirrorConfigurationDetails {
  export function getJsonObj(obj: CreateMirrorConfigurationDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateMirrorConfigurationDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
