/**
 * Fleet Application Management Service API
 * Fleet Application Management Service API. Use this API to for all FAMS related activities.
To manage fleets,view complaince report for the Fleet,scedule patches and other lifecycle activities

 * OpenAPI spec version: 20230831
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as serviceRequests from "./request";
import * as serviceResponses from "./response";
import * as models from "./model";
import { FleetAppsManagementRunbooksClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class FleetAppsManagementRunbooksWaiter {
  public constructor(
    private client: FleetAppsManagementRunbooksClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forRunbook till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetRunbookResponse | null (null in case of 404 response)
   */
  public async forRunbook(
    request: serviceRequests.GetRunbookRequest,
    ...targetStates: models.Runbook.LifecycleState[]
  ): Promise<serviceResponses.GetRunbookResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getRunbook(request),
      response => targetStates.includes(response.runbook.lifecycleState!),
      targetStates.includes(models.Runbook.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forTaskRecord till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetTaskRecordResponse | null (null in case of 404 response)
   */
  public async forTaskRecord(
    request: serviceRequests.GetTaskRecordRequest,
    ...targetStates: models.TaskRecord.LifecycleState[]
  ): Promise<serviceResponses.GetTaskRecordResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getTaskRecord(request),
      response => targetStates.includes(response.taskRecord.lifecycleState!),
      targetStates.includes(models.TaskRecord.LifecycleState.Deleted)
    );
  }
}
