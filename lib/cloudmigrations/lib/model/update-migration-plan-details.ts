/**
 * Oracle Cloud Migrations API
 * A description of the Oracle Cloud Migrations API.
 * OpenAPI spec version: 20220919
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
 * The information to be updated.
 */
export interface UpdateMigrationPlanDetails {
  /**
   * Migration plan identifier
   */
  "displayName"?: string;
  /**
   * List of strategies for the resources to be migrated.
   */
  "strategies"?: Array<model.ResourceAssessmentStrategy>;
  /**
   * List of target environments.
   */
  "targetEnvironments"?: Array<model.TargetEnvironment>;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. It exists only for cross-compatibility.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace UpdateMigrationPlanDetails {
  export function getJsonObj(obj: UpdateMigrationPlanDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "strategies": obj.strategies
          ? obj.strategies.map(item => {
              return model.ResourceAssessmentStrategy.getJsonObj(item);
            })
          : undefined,
        "targetEnvironments": obj.targetEnvironments
          ? obj.targetEnvironments.map(item => {
              return model.TargetEnvironment.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateMigrationPlanDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "strategies": obj.strategies
          ? obj.strategies.map(item => {
              return model.ResourceAssessmentStrategy.getDeserializedJsonObj(item);
            })
          : undefined,
        "targetEnvironments": obj.targetEnvironments
          ? obj.targetEnvironments.map(item => {
              return model.TargetEnvironment.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
