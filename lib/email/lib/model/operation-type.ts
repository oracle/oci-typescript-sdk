/**
 * Email Delivery API
 * Use the Email Delivery API to do the necessary set up to send high-volume and application-generated emails through the OCI Email Delivery service.
For more information, see [Overview of the Email Delivery Service](https://docs.oracle.com/iaas/Content/Email/Concepts/overview.htm).

 **Note:** Write actions (POST, UPDATE, DELETE) may take several minutes to propagate and be reflected by the API.
 If a subsequent read request fails to reflect your changes, wait a few minutes and try again.

 * OpenAPI spec version: 20170907
 * Contact: email-dev_us_grp@oracle.com
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
 **/
export enum OperationType {
  CreateDkim = "CREATE_DKIM",
  DeleteDkim = "DELETE_DKIM",
  MoveDkim = "MOVE_DKIM",
  UpdateDkim = "UPDATE_DKIM",
  CreateEmailDomain = "CREATE_EMAIL_DOMAIN",
  DeleteEmailDomain = "DELETE_EMAIL_DOMAIN",
  MoveEmailDomain = "MOVE_EMAIL_DOMAIN",
  UpdateEmailDomain = "UPDATE_EMAIL_DOMAIN",
  CreateReturnPath = "CREATE_RETURN_PATH",
  DeleteReturnPath = "DELETE_RETURN_PATH",
  UpdateReturnPath = "UPDATE_RETURN_PATH",

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
