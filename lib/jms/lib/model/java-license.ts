/**
 * Java Management Service Fleets API
 * The APIs for the [Fleet Management](https://docs.oracle.com/en-us/iaas/jms/doc/fleet-management.html) feature of Java Management Service to monitor and manage the usage of Java in your enterprise. Use these APIs to manage fleets, configure managed instances to report to fleets, and gain insights into the Java workloads running on these instances by carrying out basic and advanced features.
 * OpenAPI spec version: 20210610
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
 * Information about a license type for Java.
 */
export interface JavaLicense {
  /**
   * Commonly used name for the license type.
   */
  "displayName": string;
  /**
   * License Type
   */
  "licenseType": model.LicenseType;
  /**
   * Publicly accessible license URL containing the detailed terms and conditions.
   */
  "licenseUrl": string;
}

export namespace JavaLicense {
  export function getJsonObj(obj: JavaLicense): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: JavaLicense): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
