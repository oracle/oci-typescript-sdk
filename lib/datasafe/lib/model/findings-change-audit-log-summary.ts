/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
 * OpenAPI spec version: 20181201
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
 * Summary of audit log of risk updates of findings of specified security assessment.
 */
export interface FindingsChangeAuditLogSummary {
  /**
   * The unique key that identifies the finding risk change.
   */
  "key": string;
  /**
   * The unique key that identifies the finding.
   */
  "findingKey": string;
  /**
   * The short title for the finding whose risk is being modified.
   */
  "findingTitle": string;
  /**
   * The OCID of the latest security assessment.
   */
  "assessmentId": string;
  /**
   * The OCID of the target database.
   */
  "targetId": string;
  /**
   * The date and time the risk level of finding was last updated, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   *
   */
  "timeUpdated": Date;
  /**
   * The original severity / risk level of the finding as determined by security assessment.
   */
  "severity": string;
  /**
   * The severity of the finding as determined by security assessment by Oracle.
   */
  "oracleDefinedSeverity": string;
  /**
   * Determines if the user has deferred the risk level of this finding when he is ok with it
   * and does not plan to do anything about it.
   *
   */
  "isRiskDeferred": boolean;
  /**
   * If the risk level is changed more than once, the previous modified value.
   */
  "previousSeverity": string;
  /**
   * The justification given by the user for accepting or modifying the risk level.
   */
  "justification": string;
  /**
   * The date and time, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339),
   * the risk level change as updated by user is valid until. After this date passes, the risk level
   * will be that of what is determined by the latest security assessment.
   *
   */
  "timeValidUntil"?: Date;
  /**
   * The user who initiated change of risk level of the finding
   */
  "modifiedBy": string;
}

export namespace FindingsChangeAuditLogSummary {
  export function getJsonObj(obj: FindingsChangeAuditLogSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: FindingsChangeAuditLogSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
