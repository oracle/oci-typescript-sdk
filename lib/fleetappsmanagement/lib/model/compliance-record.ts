/**
 * Fleet Application Management Service API
 * Fleet Application Management provides a centralized platform to help you automate resource management tasks, validate patch compliance, and enhance operational efficiency across an enterprise.

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
 * The compliance status reports.
 *
 */
export interface ComplianceRecord {
  /**
   * The OCID of the ComplianceRecord.
   */
  "id": string;
  /**
   * The OCID of the entity for which the compliance is calculated.Ex.FleetId
   */
  "entityId": string;
  /**
   * The displayName of the entity for which the compliance is calculated.Ex.DisplayName for the Fleet
   */
  "entityDisplayName": string;
  /**
   * The OCID of the compartment.
   */
  "compartmentId"?: string;
  "policy"?: model.ComplianceDetailPolicy;
  "resource": model.ComplianceDetailResource;
  "target": model.ComplianceDetailTarget;
  "patch"?: model.CompliancePatchDetail;
  /**
   * Last known compliance state of target.
   */
  "complianceState"?: model.ComplianceState;
  /**
    * The date and time the ComplianceRecord was created, in the format defined by [RFC 3339](https://tools.ietf.org/html/rfc3339).
* <p>
Example: {@code 2016-08-25T21:10:29.600Z}
* 
    */
  "timeCreated"?: Date;
  /**
    * The date and time the ComplianceRecord was updated, in the format defined by [RFC 3339](https://tools.ietf.org/html/rfc3339).
* <p>
Example: {@code 2016-08-25T21:10:29.600Z}
* 
    */
  "timeUpdated"?: Date;
  /**
   * The current state of the ComplianceRecord.
   */
  "lifecycleState"?: ComplianceRecord.LifecycleState;
}

export namespace ComplianceRecord {
  export enum LifecycleState {
    Active = "ACTIVE",
    Deleted = "DELETED",
    Failed = "FAILED"
  }

  export function getJsonObj(obj: ComplianceRecord): object {
    const jsonObj = {
      ...obj,
      ...{
        "policy": obj.policy ? model.ComplianceDetailPolicy.getJsonObj(obj.policy) : undefined,
        "resource": obj.resource
          ? model.ComplianceDetailResource.getJsonObj(obj.resource)
          : undefined,
        "target": obj.target ? model.ComplianceDetailTarget.getJsonObj(obj.target) : undefined,
        "patch": obj.patch ? model.CompliancePatchDetail.getJsonObj(obj.patch) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ComplianceRecord): object {
    const jsonObj = {
      ...obj,
      ...{
        "policy": obj.policy
          ? model.ComplianceDetailPolicy.getDeserializedJsonObj(obj.policy)
          : undefined,
        "resource": obj.resource
          ? model.ComplianceDetailResource.getDeserializedJsonObj(obj.resource)
          : undefined,
        "target": obj.target
          ? model.ComplianceDetailTarget.getDeserializedJsonObj(obj.target)
          : undefined,
        "patch": obj.patch
          ? model.CompliancePatchDetail.getDeserializedJsonObj(obj.patch)
          : undefined
      }
    };

    return jsonObj;
  }
}