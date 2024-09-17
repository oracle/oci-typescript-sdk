/**
 * Fleet Application Management Service API
 * Fleet Application Management Service API. Use this API to for all FAMS related activities.
To manage fleets,view complaince report for the Fleet,scedule patches and other lifecycle activities

 * OpenAPI spec version: 20230831
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
 * Task Execution associated with the Job.
 */
export interface Execution {
  /**
   * Unique Id assocaited with the Task Execution
   */
  "id": string;
  /**
   * The OCID of taskRecord
   */
  "taskRecordId"?: string;
  /**
   * Name of the step
   */
  "stepName"?: string;
  /**
   * Unique process reference identifier returned by the execution client
   */
  "processReferenceId"?: string;
  /**
   * The sequence of the task
   */
  "sequence"?: string;
  /**
   * Subjects which are tied to the task
   */
  "subjects"?: Array<string>;
  /**
   * Status of the Task
   */
  "status": model.JobStatus;
  "outcome"?: model.Outcome;
  /**
   * Target associated with the execution
   */
  "targetId"?: string;
  /**
   * The time the task started. An RFC3339 formatted datetime string
   */
  "timeStarted"?: Date;
  /**
   * The time the task ended. An RFC3339 formatted datetime string
   */
  "timeEnded"?: Date;
  /**
   * System tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace Execution {
  export function getJsonObj(obj: Execution): object {
    const jsonObj = {
      ...obj,
      ...{
        "outcome": obj.outcome ? model.Outcome.getJsonObj(obj.outcome) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Execution): object {
    const jsonObj = {
      ...obj,
      ...{
        "outcome": obj.outcome ? model.Outcome.getDeserializedJsonObj(obj.outcome) : undefined
      }
    };

    return jsonObj;
  }
}