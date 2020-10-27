/**
 * Cloud Guard APIs
 * A description of the Cloud Guard APIs
 * OpenAPI spec version: 20200131
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Summary of the Problem.
 */
export interface ProblemSummary {
  /**
   * Unique identifier that is immutable on creation
   */
  "id": string;
  /**
   * Compartment Identifier where the resource is created
   */
  "compartmentId": string;
  /**
   * Identifier of the rule
   */
  "detectorRuleId"?: string;
  /**
   * The Risk Level
   */
  "riskLevel"?: model.RiskLevel;
  /**
   * Identifier of the Resource
   */
  "resourceId"?: string;
  /**
   * DisplayName of the Resource
   */
  "resourceName"?: string;
  /**
   * Type of the Resource
   */
  "resourceType"?: string;
  /**
   * user defined labels on the problem
   */
  "labels"?: Array<string>;
  /**
   * The date and time the problem was first detected. Format defined by RFC3339.
   */
  "timeFirstDetected"?: Date;
  /**
   * The date and time the problem was last detected. Format defined by RFC3339.
   */
  "timeLastDetected"?: Date;
  /**
   * The current state of the Problem.
   */
  "lifecycleState"?: model.ProblemLifecycleState;
  /**
   * The lifecycleDetail will give more detail on the substate of the lifecycleState.
   */
  "lifecycleDetail"?: model.ProblemLifecycleDetail;
  /**
   * Id of detector associated with the Problem.
   */
  "detectorId"?: model.DetectorEnum;
  /**
   * DEPRECATED
   */
  "region"?: string;
  /**
   * Regions where the problem is found
   */
  "regions"?: Array<string>;
  /**
   * targetId associated with the problem.
   */
  "targetId"?: string;
}

export namespace ProblemSummary {
  export function getJsonObj(obj: ProblemSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}