/**
 * Connector Hub API
 * Use the Connector Hub API to transfer data between services in Oracle Cloud Infrastructure.
For more information about Connector Hub, see
[the Connector Hub documentation](https://docs.oracle.com/iaas/Content/connector-hub/home.htm).
Connector Hub is formerly known as Service Connector Hub.

 * OpenAPI spec version: 20200909
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
 * Possible operation types.
 *
 **/
export enum OperationType {
  CreateServiceConnector = "CREATE_SERVICE_CONNECTOR",
  UpdateServiceConnector = "UPDATE_SERVICE_CONNECTOR",
  DeleteServiceConnector = "DELETE_SERVICE_CONNECTOR",
  ActivateServiceConnector = "ACTIVATE_SERVICE_CONNECTOR",
  DeactivateServiceConnector = "DEACTIVATE_SERVICE_CONNECTOR",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace OperationType {
  export function getJsonObj(obj: OperationType): OperationType {
    return obj;
  }
  export function getDeserializedJsonObj(obj: OperationType): OperationType {
    return obj;
  }
}
