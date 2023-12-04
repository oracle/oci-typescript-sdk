/**
 * Logging Management API
 * Use the Logging Management API to create, read, list, update, move and delete
log groups, log objects, log saved searches, and agent configurations.

For more information, see [Logging Overview](/iaas/Content/Logging/Concepts/loggingoverview.htm).

 * OpenAPI spec version: 20200531
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Unified monitoring agent operational metrics configuration object.
 */
export interface OperationalMetricsConfiguration {
  "source": model.OperationalMetricsSource;
  "destination": model.OperationalMetricsDestination;
}

export namespace OperationalMetricsConfiguration {
  export function getJsonObj(obj: OperationalMetricsConfiguration): object {
    const jsonObj = {
      ...obj,
      ...{
        "source": obj.source ? model.OperationalMetricsSource.getJsonObj(obj.source) : undefined,
        "destination": obj.destination
          ? model.OperationalMetricsDestination.getJsonObj(obj.destination)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: OperationalMetricsConfiguration): object {
    const jsonObj = {
      ...obj,
      ...{
        "source": obj.source
          ? model.OperationalMetricsSource.getDeserializedJsonObj(obj.source)
          : undefined,
        "destination": obj.destination
          ? model.OperationalMetricsDestination.getDeserializedJsonObj(obj.destination)
          : undefined
      }
    };

    return jsonObj;
  }
}