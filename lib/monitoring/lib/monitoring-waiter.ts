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

import * as serviceRequests from "./request";
import * as serviceResponses from "./response";
import * as models from "./model";
import { MonitoringClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class MonitoringWaiter {
  public constructor(
    private client: MonitoringClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forAlarm till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetAlarmResponse | null (null in case of 404 response)
   */
  public async forAlarm(
    request: serviceRequests.GetAlarmRequest,
    ...targetStates: models.Alarm.LifecycleState[]
  ): Promise<serviceResponses.GetAlarmResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getAlarm(request),
      response => targetStates.includes(response.alarm.lifecycleState!),
      targetStates.includes(models.Alarm.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forAlarmSuppression till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetAlarmSuppressionResponse | null (null in case of 404 response)
   */
  public async forAlarmSuppression(
    request: serviceRequests.GetAlarmSuppressionRequest,
    ...targetStates: models.AlarmSuppression.LifecycleState[]
  ): Promise<serviceResponses.GetAlarmSuppressionResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getAlarmSuppression(request),
      response => targetStates.includes(response.alarmSuppression.lifecycleState!),
      targetStates.includes(models.AlarmSuppression.LifecycleState.Deleted)
    );
  }
}
