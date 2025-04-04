/**
 * Ops Insights API
 * Use the Ops Insights API to perform data extraction operations to obtain database
resource utilization, performance statistics, and reference information. For more information,
see [About Oracle Cloud Infrastructure Ops Insights](https://docs.oracle.com/iaas/en-us/iaas/operations-insights/doc/operations-insights.html).

 * OpenAPI spec version: 20200630
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
 * Network Configuration metric for the host
 *
 */
export interface HostNetworkConfiguration extends model.HostConfigurationMetricGroup {
  /**
   * Name of the network interface
   */
  "interfaceName": string;
  /**
   * IP address (IPv4 or IPv6) of the network interface
   */
  "ipAddress": string;
  /**
   * MAC address of the network interface. MAC address is a 12-digit hexadecimal number separated by colons or dashes or dots. Following formats are accepted: MM:MM:MM:SS:SS:SS, MM-MM-MM-SS-SS-SS, MM.MM.MM.SS.SS.SS, MMM:MMM:SSS:SSS, MMM-MMM-SSS-SSS, MMM.MMM.SSS.SSS, MMMM:MMSS:SSSS, MMMM-MMSS-SSSS, MMMM.MMSS.SSSS
   */
  "macAddress"?: string;

  "metricName": string;
}

export namespace HostNetworkConfiguration {
  export function getJsonObj(obj: HostNetworkConfiguration, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.HostConfigurationMetricGroup.getJsonObj(obj) as HostNetworkConfiguration)),
      ...{}
    };

    return jsonObj;
  }
  export const metricName = "HOST_NETWORK_CONFIGURATION";
  export function getDeserializedJsonObj(
    obj: HostNetworkConfiguration,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.HostConfigurationMetricGroup.getDeserializedJsonObj(
            obj
          ) as HostNetworkConfiguration)),
      ...{}
    };

    return jsonObj;
  }
}
