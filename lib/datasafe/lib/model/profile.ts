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
 * The comprehensive information about the user profiles available on a given target.
 * It includes details such as profile name, failed login attempts, password reuse time, password verification function,
 * password verification function implementation code snippet, sessions per user, connect time inactive account time,
 * password lock time, cpu usage per session, target id, and compartment id.
 *
 */
export interface Profile {
  /**
   * The OCID of the user assessment corresponding to the target under consideration.
   */
  "userAssessmentId": string;
  /**
   * The OCID of the compartment that contains the user assessment.
   */
  "compartmentId"?: string;
  /**
   * The OCID of the target database.
   */
  "targetId"?: string;
  /**
   * The name of the profile.
   */
  "profileName": string;
  /**
   * The number of users that have a given profile. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "userCount"?: number;
  /**
   * Maximum times the user is allowed in fail login before the user account is locked.
   */
  "failedLoginAttempts"?: string;
  /**
   * Name of the PL/SQL that can be used for password verification.
   */
  "passwordVerificationFunction"?: string;
  /**
   * Details about the PL/SQL that can be used for password verification.
   */
  "passwordVerificationFunctionDetails"?: string;
  /**
   * Number of days the user account remains locked after failed login.
   */
  "passwordLockTime"?: string;
  /**
   * Number of days the password is valid before expiry.
   */
  "passwordLifeTime"?: string;
  /**
   * Number of day after the user can use the already used password.
   */
  "passwordReuseMax"?: string;
  /**
   * Number of days before which a password cannot be reused.
   */
  "passwordReuseTime"?: string;
  /**
   * Number of days the password rollover is allowed. Minimum value can be 1/24 day (1 hour) to 60 days.
   */
  "passwordRolloverTime"?: string;
  /**
   * Number of grace days for user to change password.
   */
  "passwordGraceTime"?: string;
  /**
   * Represents if the profile is created by user.
   */
  "isUserCreated"?: boolean;
  /**
   * Specify the number of concurrent sessions to which you want to limit the user.
   */
  "sessionsPerUser"?: string;
  /**
   * The permitted periods of continuous inactive time during a session, expressed in minutes.
   * Long-running queries and other operations are not subject to this limit.
   *
   */
  "inactiveAccountTime"?: string;
  /**
   * Specify the total elapsed time limit for a session, expressed in minutes.
   */
  "connectTime"?: string;
  /**
   * Specify the permitted periods of continuous inactive time during a  session, expressed in minutes.
   */
  "idleTime"?: string;
  /**
   * Specify the total resource cost for a session, expressed in service units. Oracle Database calculates the total
   * service units as a weighted sum of CPU_PER_SESSION, CONNECT_TIME, LOGICAL_READS_PER_SESSION, and PRIVATE_SGA.
   *
   */
  "compositeLimit"?: string;
  /**
   * Specify the CPU time limit for a call (a parse, execute, or fetch), expressed in hundredths of seconds.
   */
  "cpuPerCall"?: string;
  /**
   * Specify the CPU time limit for a session, expressed in hundredth of seconds.
   */
  "cpuPerSession"?: string;
  /**
   * Specify the permitted the number of data blocks read for a call to process a SQL statement (a parse, execute, or fetch).
   */
  "logicalReadsPerCall"?: string;
  /**
   * Specify the permitted number of data blocks read in a session, including blocks read from memory and disk.
   */
  "logicalReadsPerSession"?: string;
  /**
   * Specify the amount of private space a session can allocate in the shared pool of the system global area (SGA),
   * expressed in bytes.
   *
   */
  "privateSga"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm)
* <p>
Example: {@code {\"Department\": \"Finance\"}}
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm)
   * Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace Profile {
  export function getJsonObj(obj: Profile): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Profile): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
