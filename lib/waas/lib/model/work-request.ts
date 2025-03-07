/**
 * Web Application Acceleration and Security Services API
 * OCI Web Application Acceleration and Security Services
 * OpenAPI spec version: 20181116
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
 * Many of the API requests you use to create and configure WAAS policies do not take effect immediately. In these cases, the request spawns an asynchronous work flow to fulfill the request. {@code WorkRequest} objects provide visibility for in-progress work flows. For more information about work requests, see [Viewing the State of a Work Request](https://docs.oracle.com/iaas/Content/Balance/Tasks/viewingworkrequest.htm).
 */
export interface WorkRequest {
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the work request.
   */
  "id": string;
  /**
   * A description of the operation requested by the work request.
   */
  "operationType": model.WorkRequestOperationTypes;
  /**
   * The current status of the work request.
   */
  "status": model.WorkRequestStatusValues;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment that contains the work request.
   */
  "compartmentId": string;
  /**
   * The resources being used to complete the work request operation.
   */
  "resources"?: Array<model.WorkRequestResource>;
  /**
   * The percentage of work completed by the work request. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "percentComplete"?: number;
  /**
   * The list of log entries from the work request workflow.
   */
  "logs"?: Array<model.WorkRequestLogEntry>;
  /**
   * The list of errors that occurred while fulfilling the work request.
   */
  "errors"?: Array<model.WorkRequestError>;
  /**
   * The date and time the work request was created, in the format defined by RFC3339.
   */
  "timeAccepted": Date;
  /**
   * The date and time the work request moved from the {@code ACCEPTED} state to the {@code IN_PROGRESS} state, expressed in RFC 3339 timestamp format.
   */
  "timeStarted": Date;
  /**
   * The date and time the work request was fulfilled or terminated, expressed in RFC 3339 timestamp format.
   */
  "timeFinished": Date;
}

export namespace WorkRequest {
  export function getJsonObj(obj: WorkRequest): object {
    const jsonObj = {
      ...obj,
      ...{
        "resources": obj.resources
          ? obj.resources.map(item => {
              return model.WorkRequestResource.getJsonObj(item);
            })
          : undefined,

        "logs": obj.logs
          ? obj.logs.map(item => {
              return model.WorkRequestLogEntry.getJsonObj(item);
            })
          : undefined,
        "errors": obj.errors
          ? obj.errors.map(item => {
              return model.WorkRequestError.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: WorkRequest): object {
    const jsonObj = {
      ...obj,
      ...{
        "resources": obj.resources
          ? obj.resources.map(item => {
              return model.WorkRequestResource.getDeserializedJsonObj(item);
            })
          : undefined,

        "logs": obj.logs
          ? obj.logs.map(item => {
              return model.WorkRequestLogEntry.getDeserializedJsonObj(item);
            })
          : undefined,
        "errors": obj.errors
          ? obj.errors.map(item => {
              return model.WorkRequestError.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
