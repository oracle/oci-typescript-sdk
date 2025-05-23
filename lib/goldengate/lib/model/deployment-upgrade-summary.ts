/**
 * GoldenGate API
 * Use the Oracle Cloud Infrastructure GoldenGate APIs to perform data replication operations.

 * OpenAPI spec version: 20200407
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
 * Summary of the Deployment Upgrade.
 *
 */
export interface DeploymentUpgradeSummary {
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the deployment being referenced.
   *
   */
  "id": string;
  /**
   * An object's Display Name.
   *
   */
  "displayName"?: string;
  /**
   * Metadata about this specific object.
   *
   */
  "description"?: string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment being referenced.
   *
   */
  "compartmentId": string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the deployment being referenced.
   *
   */
  "deploymentId": string;
  /**
   * The type of the deployment upgrade: MANUAL or AUTOMATIC
   *
   */
  "deploymentUpgradeType": model.DeploymentUpgradeType;
  /**
   * The date and time the request was started. The format is defined by
   * [RFC3339](https://tools.ietf.org/html/rfc3339), such as {@code 2016-08-25T21:10:29.600Z}.
   *
   */
  "timeStarted"?: Date;
  /**
   * The date and time the request was finished. The format is defined by
   * [RFC3339](https://tools.ietf.org/html/rfc3339), such as {@code 2016-08-25T21:10:29.600Z}.
   *
   */
  "timeFinished"?: Date;
  /**
   * Version of OGG
   *
   */
  "oggVersion"?: string;
  /**
   * The time the resource was created. The format is defined by
   * [RFC3339](https://tools.ietf.org/html/rfc3339), such as {@code 2016-08-25T21:10:29.600Z}.
   *
   */
  "timeCreated"?: Date;
  /**
   * The time the resource was last updated. The format is defined by
   * [RFC3339](https://tools.ietf.org/html/rfc3339), such as {@code 2016-08-25T21:10:29.600Z}.
   *
   */
  "timeUpdated"?: Date;
  /**
   * Possible lifecycle states.
   *
   */
  "lifecycleState"?: model.LifecycleState;
  /**
   * Possible GGS lifecycle sub-states.
   *
   */
  "lifecycleSubState"?: model.LifecycleSubState;
  /**
   * Describes the object's current state in detail. For example, it can be used to provide
   * actionable information for a resource in a Failed state.
   *
   */
  "lifecycleDetails"?: string;
  /**
    * A simple key-value pair that is applied without any predefined name, type, or scope. Exists
* for cross-compatibility only.
* <p>
Example: {@code {\"bar-key\": \"value\"}}
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Tags defined for this resource. Each key is predefined and scoped to a namespace.
* <p>
Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
    * The system tags associated with this resource, if any. The system tags are set by Oracle
* Cloud Infrastructure services. Each key is predefined and scoped to namespaces.  For more
* information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {orcl-cloud: {free-tier-retain: true}}}
* 
    */
  "systemTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Version of OGG
   *
   */
  "previousOggVersion"?: string;
  /**
   * The time of upgrade schedule. The format is defined by
   * [RFC3339](https://tools.ietf.org/html/rfc3339), such as {@code 2016-08-25T21:10:29.600Z}.
   *
   */
  "timeSchedule"?: Date;
  /**
   * Indicates if upgrade notifications are snoozed or not.
   *
   */
  "isSnoozed"?: boolean;
  /**
   * The time the upgrade notifications are snoozed until. The format is defined by
   * [RFC3339](https://tools.ietf.org/html/rfc3339), such as {@code 2016-08-25T21:10:29.600Z}.
   *
   */
  "timeSnoozedUntil"?: Date;
  /**
   * The time the resource was released. The format is defined by
   * [RFC3339](https://tools.ietf.org/html/rfc3339), such as {@code 2016-08-25T21:10:29.600Z}.
   *
   */
  "timeReleased"?: Date;
  /**
   * The type of release.
   *
   */
  "releaseType"?: model.ReleaseType;
  /**
   * Indicates if OGG release contains security fix.
   *
   */
  "isSecurityFix"?: boolean;
  /**
   * Indicates if rollback is allowed. In practice only the last upgrade can be rolled back.
   * - Manual upgrade is allowed to rollback only until the old version isn't deprecated yet.
   * - Automatic upgrade by default is not allowed, unless a serious issue does not justify.
   *
   */
  "isRollbackAllowed"?: boolean;
  /**
   * The time until OGG version is supported. After this date has passed OGG version will not be available anymore. The format is defined by
   * [RFC3339](https://tools.ietf.org/html/rfc3339), such as {@code 2016-08-25T21:10:29.600Z}.
   *
   */
  "timeOggVersionSupportedUntil"?: Date;
  /**
   * Indicates if cancel is allowed. Scheduled upgrade can be cancelled only if target version is not forced by service,
   * otherwise only reschedule allowed.
   *
   */
  "isCancelAllowed"?: boolean;
  /**
   * Indicates if reschedule is allowed. Upgrade can be rescheduled postponed until the end of the service defined auto-upgrade period.
   *
   */
  "isRescheduleAllowed"?: boolean;
  /**
   * Indicates the latest time until the deployment upgrade could be rescheduled. The format is defined by
   * [RFC3339](https://tools.ietf.org/html/rfc3339), such as {@code 2016-08-25T21:10:29.600Z}.
   *
   */
  "timeScheduleMax"?: Date;
}

export namespace DeploymentUpgradeSummary {
  export function getJsonObj(obj: DeploymentUpgradeSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DeploymentUpgradeSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
