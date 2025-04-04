/**
 * APM Availability Monitoring API
 * Use the APM Availability Monitoring API to query Scripts, Monitors, Dedicated Vantage Points and On-Premise Vantage Points resources. For more information, see [Application Performance Monitoring](https://docs.oracle.com/iaas/application-performance-monitoring/index.html).
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
 * Request configuration details for the DNSSEC monitor type.
 */
export interface DnsSecMonitorConfiguration extends model.MonitorConfiguration {
  /**
   * DNS record type.
   */
  "recordType"?: model.DnsRecordType;
  /**
   * Verify response content against regular expression based string.
   * If response content does not match the verifyResponseContent value, then it will be considered a failure.
   *
   */
  "verifyResponseContent"?: string;

  "configType": string;
}

export namespace DnsSecMonitorConfiguration {
  export function getJsonObj(obj: DnsSecMonitorConfiguration, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.MonitorConfiguration.getJsonObj(obj) as DnsSecMonitorConfiguration)),
      ...{}
    };

    return jsonObj;
  }
  export const configType = "DNSSEC_CONFIG";
  export function getDeserializedJsonObj(
    obj: DnsSecMonitorConfiguration,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.MonitorConfiguration.getDeserializedJsonObj(obj) as DnsSecMonitorConfiguration)),
      ...{}
    };

    return jsonObj;
  }
}
