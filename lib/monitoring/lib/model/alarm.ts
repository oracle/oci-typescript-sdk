/**
 * Monitoring API
 * Use the Monitoring API to manage metric queries and alarms for assessing the health, capacity, and performance of your cloud resources.
Endpoints vary by operation. For PostMetricData, use the {@code telemetry-ingestion} endpoints; for all other operations, use the {@code telemetry} endpoints.
For more information, see
[the Monitoring documentation](https://docs.oracle.com/iaas/Content/Monitoring/home.htm).

 * OpenAPI spec version: 20180401
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
* The properties that define an alarm.
* For information about alarms, see
* [Alarms Overview](https://docs.oracle.com/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#AlarmsOverview).
* <p>
To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized,
* talk to an administrator. If you're an administrator who needs to write policies to give users access, see
* [Getting Started with Policies](https://docs.oracle.com/iaas/Content/Identity/Concepts/policygetstarted.htm).
* <p>
For information about endpoints and signing API requests, see
* [About the API](https://docs.oracle.com/iaas/Content/API/Concepts/usingapi.htm).
* For information about available SDKs and tools, see
* [SDKS and Other Tools](https://docs.oracle.com/iaas/Content/API/Concepts/sdks.htm).
* 
*/
export interface Alarm {
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the alarm.
   *
   */
  "id": string;
  /**
    * A user-friendly name for the alarm. It does not have to be unique, and it's changeable.
* <p>
This value determines the title of each alarm notification.
* <p>
Example: {@code High CPU Utilization}
* 
    */
  "displayName": string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the alarm.
   *
   */
  "compartmentId": string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the metric
   * being evaluated by the alarm.
   *
   */
  "metricCompartmentId": string;
  /**
    * When true, the alarm evaluates metrics from all compartments and subcompartments. The parameter can
* only be set to true when metricCompartmentId is the tenancy OCID (the tenancy is the root compartment).
* A true value requires the user to have tenancy-level permissions. If this requirement is not met,
* then the call is rejected. When false, the alarm evaluates metrics from only the compartment specified
* in metricCompartmentId. Default is false.
* <p>
Example: {@code true}
* 
    */
  "metricCompartmentIdInSubtree"?: boolean;
  /**
    * The source service or application emitting the metric that is evaluated by the alarm.
* <p>
Example: {@code oci_computeagent}
* 
    */
  "namespace": string;
  /**
    * Resource group to match for metric data retrieved by the alarm. A resource group is a custom string that you can match when retrieving custom metrics. Only one resource group can be applied per metric.
* A valid resourceGroup value starts with an alphabetical character and includes only alphanumeric characters, periods (.), underscores (_), hyphens (-), and dollar signs ($).
* <p>
Example: {@code frontend-fleet}
* 
    */
  "resourceGroup"?: string;
  /**
    * The Monitoring Query Language (MQL) expression to evaluate for the alarm. The Alarms feature of
* the Monitoring service interprets results for each returned time series as Boolean values,
* where zero represents false and a non-zero value represents true. A true value means that the trigger
* rule condition has been met. The query must specify a metric, statistic, interval, and trigger
* rule (threshold or absence). Supported values for interval depend on the specified time range. More
* interval values are supported for smaller time ranges. You can optionally
* specify dimensions and grouping functions.
* Also, you can customize the 
* [absence detection period](https://docs.oracle.com/iaas/Content/Monitoring/Tasks/create-edit-alarm-query-absence-detection-period.htm).
* Supported grouping functions: {@code grouping()}, {@code groupBy()}.
* For information about writing MQL expressions, see
* [Editing the MQL Expression for a Query](https://docs.oracle.com/iaas/Content/Monitoring/Tasks/query-metric-mql.htm).
* For details about MQL, see
* [Monitoring Query Language (MQL) Reference](https://docs.oracle.com/iaas/Content/Monitoring/Reference/mql.htm).
* For available dimensions, review the metric definition for the supported service. See
* [Supported Services](https://docs.oracle.com/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#SupportedServices).
* <p>
Example of threshold alarm:
* <p>
  -----
* <p>
    CpuUtilization[1m]{availabilityDomain=\"cumS:PHX-AD-1\"}.groupBy(availabilityDomain).percentile(0.9) > 85
* <p>
  -----
* <p>
Example of absence alarm:
* <p>
  -----
* <p>
    CpuUtilization[1m]{availabilityDomain=\"cumS:PHX-AD-1\"}.absent()
* <p>
  -----
* Example of absence alarm with custom absence detection period of 20 hours:
* <p>
  -----
*     
*     CpuUtilization[1m]{availabilityDomain=\"cumS:PHX-AD-1\"}.absent(20h)
*   
*   -----
* 
    */
  "query": string;
  /**
   * The time between calculated aggregation windows for the alarm. Supported value: {@code 1m}
   *
   */
  "resolution"?: string;
  /**
    * The period of time that the condition defined in the alarm must persist before the alarm state
* changes from \"OK\" to \"FIRING\". For example, a value of 5 minutes means that the
* alarm must persist in breaching the condition for five minutes before the alarm updates its
* state to \"FIRING\".
* <p>
The duration is specified as a string in ISO 8601 format ({@code PT10M} for ten minutes or {@code PT1H}
* for one hour). Minimum: PT1M. Maximum: PT1H. Default: PT1M.
* <p>
Under the default value of PT1M, the first evaluation that breaches the alarm updates the
* state to \"FIRING\".
* <p>
The alarm updates its status to \"OK\" when the breaching condition has been clear for
* the most recent minute.
* <p>
Example: {@code PT5M}
* 
    */
  "pendingDuration"?: string;
  /**
    * The perceived type of response required when the alarm is in the \"FIRING\" state.
* <p>
Example: {@code CRITICAL}
* 
    */
  "severity": Alarm.Severity;
  /**
    * The human-readable content of the delivered alarm notification.
* Optionally include [dynamic variables](https://docs.oracle.com/iaas/Content/Monitoring/Tasks/update-alarm-dynamic-variables.htm).
* Oracle recommends providing guidance
* to operators for resolving the alarm condition. Consider adding links to standard runbook
* practices. Avoid entering confidential information.
* <p>
Example: {@code High CPU usage alert. Follow runbook instructions for resolution.}
* 
    */
  "body"?: string;
  /**
   * When set to {@code true}, splits alarm notifications per metric stream.
   * When set to {@code false}, groups alarm notifications across metric streams.
   *
   */
  "isNotificationsPerMetricDimensionEnabled"?: boolean;
  /**
   * The format to use for alarm notifications. The formats are:
   * * {@code RAW} - Raw JSON blob. Default value. When the {@code destinations} attribute specifies {@code Streaming}, all alarm notifications use this format.
   * * {@code PRETTY_JSON}: JSON with new lines and indents. Available when the {@code destinations} attribute specifies {@code Notifications} only.
   * * {@code ONS_OPTIMIZED}: Simplified, user-friendly layout. Available when the {@code destinations} attribute specifies {@code Notifications} only. Applies to Email subscription types only.
   *
   */
  "messageFormat"?: Alarm.MessageFormat;
  /**
   * A list of destinations for alarm notifications.
   * Each destination is represented by the [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm)
   * of a related resource, such as a {@link NotificationTopic}.
   * Supported destination services: Notifications, Streaming.
   * Limit: One destination per supported destination service.
   *
   */
  "destinations": Array<string>;
  /**
    * The frequency for re-submitting alarm notifications, if the alarm keeps firing without
* interruption. Format defined by ISO 8601. For example, {@code PT4H} indicates four hours.
* Minimum: PT1M. Maximum: P30D.
* <p>
Default value: null (notifications are not re-submitted).
* <p>
Example: {@code PT2H}
* 
    */
  "repeatNotificationDuration"?: string;
  /**
   * The configuration details for suppressing an alarm.
   *
   */
  "suppression"?: model.Suppression;
  /**
    * Whether the alarm is enabled.
* <p>
Example: {@code true}
* 
    */
  "isEnabled": boolean;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: {@code {\"Department\": \"Finance\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Usage of predefined tag keys. These predefined keys are scoped to namespaces.
   * Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
    * A set of overrides that control evaluations of the alarm. 
* <p>
Each override can specify values for query, severity, body, and pending duration.
* When an alarm contains overrides, the Monitoring service evaluates each override in order, beginning with the first override in the array (index position {@code 0}),
* and then evaluates the alarm's base values ({@code ruleName} value of {@code BASE}).
* 
    */
  "overrides"?: Array<model.AlarmOverride>;
  /**
   * Identifier of the alarm's base values for alarm evaluation, for use when the alarm contains overrides.
   * Default value is {@code BASE}. For information about alarm overrides, see {@link #alarmOverride(AlarmOverrideRequest) alarmOverride}.
   *
   */
  "ruleName"?: string;
  /**
   * The version of the alarm notification to be delivered. Allowed value: {@code 1.X}
   * The value must start with a number (up to four digits), followed by a period and an uppercase X.
   *
   */
  "notificationVersion"?: string;
  /**
   * Customizable notification title ({@code title} [alarm message parameter](https://docs.oracle.com/iaas/Content/Monitoring/alarm-message-format.htm)).
   * Optionally include [dynamic variables](https://docs.oracle.com/iaas/Content/Monitoring/Tasks/update-alarm-dynamic-variables.htm).
   * The notification title appears as the subject line in a formatted email message and as the title in a Slack message.
   *
   */
  "notificationTitle"?: string;
  /**
   * Customizable slack period to wait for metric ingestion before evaluating the alarm.
   * Specify a string in ISO 8601 format ({@code PT10M} for ten minutes or {@code PT1H}
   * for one hour). Minimum: PT3M. Maximum: PT2H. Default: PT3M.
   * For more information about the slack period, see
   * [About the Internal Reset Period](https://docs.oracle.com/iaas/Content/Monitoring/Concepts/monitoringoverview.htm#reset).
   *
   */
  "evaluationSlackDuration"?: string;
  /**
   * Customizable alarm summary ({@code alarmSummary} [alarm message parameter](https://docs.oracle.com/iaas/Content/Monitoring/alarm-message-format.htm)).
   * Optionally include [dynamic variables](https://docs.oracle.com/iaas/Content/Monitoring/Tasks/update-alarm-dynamic-variables.htm).
   * The alarm summary appears within the body of the alarm message and in responses to
   * {@link #listAlarmsStatus(ListAlarmsStatusRequest) listAlarmsStatus}
   * {@link #getAlarmHistory(GetAlarmHistoryRequest) getAlarmHistory} and
   * {@link #retrieveDimensionStates(RetrieveDimensionStatesRequest) retrieveDimensionStates}.
   *
   */
  "alarmSummary"?: string;
  /**
    * The current lifecycle state of the alarm.
* <p>
Example: {@code DELETED}
* 
    */
  "lifecycleState": Alarm.LifecycleState;
  /**
    * The date and time the alarm was created. Format defined by RFC3339.
* <p>
Example: {@code 2023-02-01T01:02:29.600Z}
* 
    */
  "timeCreated": Date;
  /**
    * The date and time the alarm was last updated. Format defined by RFC3339.
* <p>
Example: {@code 2023-02-03T01:02:29.600Z}
* 
    */
  "timeUpdated": Date;
}

export namespace Alarm {
  export enum Severity {
    Critical = "CRITICAL",
    Error = "ERROR",
    Warning = "WARNING",
    Info = "INFO",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum MessageFormat {
    Raw = "RAW",
    PrettyJson = "PRETTY_JSON",
    OnsOptimized = "ONS_OPTIMIZED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum LifecycleState {
    Active = "ACTIVE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Alarm): object {
    const jsonObj = {
      ...obj,
      ...{
        "suppression": obj.suppression ? model.Suppression.getJsonObj(obj.suppression) : undefined,

        "overrides": obj.overrides
          ? obj.overrides.map(item => {
              return model.AlarmOverride.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Alarm): object {
    const jsonObj = {
      ...obj,
      ...{
        "suppression": obj.suppression
          ? model.Suppression.getDeserializedJsonObj(obj.suppression)
          : undefined,

        "overrides": obj.overrides
          ? obj.overrides.map(item => {
              return model.AlarmOverride.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
