/**
 * OperatorAccessControl API
 * Operator Access Control enables you to control the time duration and the actions an Oracle operator can perform on your Exadata Cloud@Customer infrastructure.
Using logging service, you can view a near real-time audit report of all actions performed by an Oracle operator. 

Use the table of contents and search tool to explore the OperatorAccessControl API.

 * OpenAPI spec version: 20200630
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
 * Details of the operator control assignment.
 */
export interface OperatorControlAssignmentSummary {
  /**
   * The OCID of the operator control assignment.
   */
  "id": string;
  /**
   * The OCID of the operator control.
   */
  "operatorControlId": string;
  /**
   * The OCID of the target resource being governed by the operator control.
   */
  "resourceId": string;
  /**
   * The OCID of the compartment that contains the operator control assignment.
   */
  "compartmentId": string;
  /**
   * resourceType for which the OperatorControlAssignment is applicable
   */
  "resourceType"?: model.ResourceTypes;
  /**
   * Name of the target resource.
   */
  "resourceName"?: string;
  /**
   * Name of the operator control name associated.
   */
  "opControlName"?: string;
  /**
   * The time at which the target resource will be brought under the governance of the operator control in [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format. Example: '2020-05-22T21:10:29.600Z'
   *
   */
  "timeAssignmentFrom"?: Date;
  /**
   * The time at which the target resource will leave the governance of the operator control in [RFC 3339](https://tools.ietf.org/html/rfc3339)timestamp format.Example: '2020-05-22T21:10:29.600Z'
   *
   */
  "timeAssignmentTo"?: Date;
  /**
   * If true, then the target resource is always governed by the operator control. Otherwise governance is time-based as specified by timeAssignmentTo and timeAssignmentFrom.
   */
  "isEnforcedAlways"?: boolean;
  /**
   * Time when the operator control assignment is created in [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format. Example: '2020-05-22T21:10:29.600Z'
   *
   */
  "timeOfAssignment"?: Date;
  /**
   * The code identifying the error occurred during Assignment operation. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "errorCode"?: number;
  /**
   * The message describing the error occurred during Assignment operation.
   */
  "errorMessage"?: string;
  /**
   * If set, then the audit logs are being forwarded to the relevant remote logging server
   */
  "isLogForwarded"?: boolean;
  /**
   * The address of the remote syslog server where the audit logs are being forwarded to. Address in host or IP format.
   */
  "remoteSyslogServerAddress"?: string;
  /**
   * The listening port of the remote syslog server. The port range is 0 - 65535. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "remoteSyslogServerPort"?: number;
  /**
   * If set, then the hypervisor audit logs will be forwarded to the relevant remote syslog server
   */
  "isHypervisorLogForwarded"?: boolean;
  /**
   * The current lifcycle state of the OperatorControl.
   */
  "lifecycleState"?: model.OperatorControlAssignmentLifecycleStates;
  /**
   * More in detail about the lifeCycleState.
   */
  "lifecycleDetails"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace OperatorControlAssignmentSummary {
  export function getJsonObj(obj: OperatorControlAssignmentSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: OperatorControlAssignmentSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
