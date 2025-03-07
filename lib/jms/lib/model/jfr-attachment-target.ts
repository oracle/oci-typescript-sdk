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
 * The target to collect JFR data. A target is a managed instance, with options to further limit to specific application and/or Java Runtime.
 * When the applicationKey isn't specified, then all applications are selected.
 * When the jreKey isn't specified, then all supported Java Runtime versions are selected.
 * When the applicationInstallationKey isn't specified, then all application installations are selected.
 * Keys applicationKey and applicationInstallationKey are mutually exclusive.
 *
 */
export interface JfrAttachmentTarget {
  /**
   * OCID of the Managed Instance to collect JFR data.
   */
  "managedInstanceId": string;
  /**
   * Unique key that identifies the application for JFR data collection.
   */
  "applicationKey"?: string;
  /**
   * Unique key that identifies the application installation for JFR data collection.
   */
  "applicationInstallationKey"?: string;
  /**
   * Unique key that identify the JVM for JFR data collection.
   */
  "jreKey"?: string;
}

export namespace JfrAttachmentTarget {
  export function getJsonObj(obj: JfrAttachmentTarget): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: JfrAttachmentTarget): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
