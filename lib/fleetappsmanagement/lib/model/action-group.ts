/**
 * Fleet Application Management Service API
 * Fleet Application Management provides a centralized platform to help you automate resource management tasks, validate patch compliance, and enhance operational efficiency across an enterprise.

 * OpenAPI spec version: 20230831
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
 * Action Group.
 */
export interface ActionGroup {
  /**
   * Provide the ID of the resource. Example fleet ID.
   */
  "resourceId": string;
  /**
   * ActionGroup Type associated.
   */
  "type"?: model.LifeCycleActionGroupType;
  /**
   * Application Type associated.
   * Only applicable if type is ENVIRONMENT.
   *
   */
  "applicationType"?: string;
  /**
   * Product associated.
   * Only applicable if type is PRODUCT.
   *
   */
  "product"?: string;
  /**
   * LifeCycle Operation
   */
  "lifecycleOperation"?: string;
  /**
   * ID of the runbook
   */
  "runbookId": string;
  /**
   * Provide the target if schedule is created against the target
   */
  "targetId"?: string;
  /**
   * Provide subjects that need to be considered for the schedule.
   */
  "subjects"?: Array<string>;
}

export namespace ActionGroup {
  export function getJsonObj(obj: ActionGroup): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ActionGroup): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
