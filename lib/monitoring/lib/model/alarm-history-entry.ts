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
 * An alarm history entry indicating a description of the entry and the time that the entry occurred.
 * If the entry corresponds to a state transition, such as OK to Firing, then the entry also includes a transition timestamp.
 *
 */
export interface AlarmHistoryEntry {
  /**
   * Customizable alarm summary ({@code alarmSummary} [alarm message parameter](https://docs.oracle.com/iaas/Content/Monitoring/alarm-message-format.htm)).
   * Optionally include [dynamic variables](https://docs.oracle.com/iaas/Content/Monitoring/Tasks/update-alarm-dynamic-variables.htm).
   * The alarm summary appears within the body of the alarm message and in responses to
   * {@link #listAlarmsStatus(ListAlarmsStatusRequest) listAlarmsStatus}
   * {@link #getAlarmHistory(GetAlarmHistoryRequest) getAlarmHistory} and
   * {@link #retrieveDimensionStates(RetrieveDimensionStatesRequest) retrieveDimensionStates}.
   *
   */
  "alarmSummary": string;
  /**
    * Description for this alarm history entry.
* <p>
Example 1 - alarm state history entry: {@code The alarm state is FIRING}
* <p>
Example 2 - alarm state transition history entry: {@code State transitioned from OK to Firing}
* 
    */
  "summary": string;
  /**
    * Timestamp for this alarm history entry. Format defined by RFC3339.
* <p>
Example: {@code 2023-02-01T01:02:29.600Z}
* 
    */
  "timestamp": Date;
  /**
    * Timestamp for the transition of the alarm state. For example, the time when the alarm transitioned from OK to Firing.
* Available for state transition entries only. Note: A three-minute lag for this value accounts for any late-arriving metrics.
* <p>
Example: {@code 2023-02-01T0:59:00.789Z}
* 
    */
  "timestampTriggered"?: Date;
}

export namespace AlarmHistoryEntry {
  export function getJsonObj(obj: AlarmHistoryEntry): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AlarmHistoryEntry): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
