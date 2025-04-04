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
 * Attributes to generate agent installer parameters for a fleet.
 */
export interface GenerateAgentInstallerConfigurationDetails {
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the management agent install key for which to generate the configuration file.
   */
  "installKeyId": string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the fleet for which to generate the configuration file.
   */
  "fleetId": string;
}

export namespace GenerateAgentInstallerConfigurationDetails {
  export function getJsonObj(obj: GenerateAgentInstallerConfigurationDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: GenerateAgentInstallerConfigurationDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
