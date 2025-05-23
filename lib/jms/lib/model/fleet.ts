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
 * A Fleet is the primary collection with which users interact when using Java Management Service.
 *
 */
export interface Fleet {
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the Fleet.
   */
  "id": string;
  /**
   * The name of the Fleet.
   */
  "displayName": string;
  /**
   * The Fleet's description.
   */
  "description": string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment of the Fleet.
   *
   */
  "compartmentId": string;
  /**
   * The approximate count of all unique Java Runtimes in the Fleet in the past seven days.
   * This metric is provided on a best-effort manner, and isn't taken into account when computing the resource ETag.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "approximateJreCount": number;
  /**
   * The approximate count of all unique Java installations in the Fleet in the past seven days.
   * This metric is provided on a best-effort manner, and isn't taken into account when computing the resource ETag.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "approximateInstallationCount": number;
  /**
   * The approximate count of all unique applications in the Fleet in the past seven days.
   * This metric is provided on a best-effort manner, and isn't taken into account when computing the resource ETag.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "approximateApplicationCount": number;
  /**
   * The approximate count of all unique managed instances in the Fleet in the past seven days.
   * This metric is provided on a best-effort manner, and isn't taken into account when computing the resource ETag.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "approximateManagedInstanceCount": number;
  /**
   * The approximate count of all unique Java servers in the Fleet in the past seven days.
   * This metric is provided on a best-effort manner, and isn't taken into account when computing the resource ETag.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "approximateJavaServerCount": number;
  "inventoryLog"?: model.CustomLog;
  "operationLog"?: model.CustomLog;
  /**
   * Whether or not advanced features are enabled in this Fleet.
   * Deprecated, use {@code /fleets/{fleetId}/advanceFeatureConfiguration} API instead.
   *
   */
  "isAdvancedFeaturesEnabled"?: boolean;
  /**
   * Whether or not export setting is enabled in this Fleet.
   *
   */
  "isExportSettingEnabled"?: boolean;
  /**
   * The creation date and time of the Fleet (formatted according to [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339)).
   *
   */
  "timeCreated": Date;
  /**
   * The lifecycle state of the Fleet.
   */
  "lifecycleState": model.LifecycleState;
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}. (See [Understanding Free-form Tags](https://docs.oracle.com/iaas/Content/Tagging/Tasks/managingtagsandtagnamespaces.htm)).
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Simple key-value pair that is applied without any predefined name, type, or scope. Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}. (See [Managing Tags and Tag Namespaces](https://docs.oracle.com/iaas/Content/Tagging/Concepts/understandingfreeformtags.htm).)
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
    * System tags for this resource. Each key is predefined and scoped to a namespace.
* For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* System tags can be viewed by users, but can only be created by the system.
* <p>
Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
* 
    */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace Fleet {
  export function getJsonObj(obj: Fleet): object {
    const jsonObj = {
      ...obj,
      ...{
        "inventoryLog": obj.inventoryLog ? model.CustomLog.getJsonObj(obj.inventoryLog) : undefined,
        "operationLog": obj.operationLog ? model.CustomLog.getJsonObj(obj.operationLog) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Fleet): object {
    const jsonObj = {
      ...obj,
      ...{
        "inventoryLog": obj.inventoryLog
          ? model.CustomLog.getDeserializedJsonObj(obj.inventoryLog)
          : undefined,
        "operationLog": obj.operationLog
          ? model.CustomLog.getDeserializedJsonObj(obj.operationLog)
          : undefined
      }
    };

    return jsonObj;
  }
}
