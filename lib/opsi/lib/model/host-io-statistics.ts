/**
 * Ops Insights API
 * Use the Ops Insights API to perform data extraction operations to obtain database
resource utilization, performance statistics, and reference information. For more information,
see [About Oracle Cloud Infrastructure Ops Insights](https://docs.cloud.oracle.com/en-us/iaas/operations-insights/doc/operations-insights.html).

 * OpenAPI spec version: 20200630
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Contains io statistics.
 */
export interface HostIoStatistics extends model.HostResourceStatistics {
  "diskReadInMBs"?: number;
  "diskWriteInMBs"?: number;
  "diskIops"?: number;

  "resourceName": string;
}

export namespace HostIoStatistics {
  export function getJsonObj(obj: HostIoStatistics, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.HostResourceStatistics.getJsonObj(obj) as HostIoStatistics)),
      ...{}
    };

    return jsonObj;
  }
  export const resourceName = "HOST_IO_STATISTICS";
  export function getDeserializedJsonObj(obj: HostIoStatistics, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.HostResourceStatistics.getDeserializedJsonObj(obj) as HostIoStatistics)),
      ...{}
    };

    return jsonObj;
  }
}