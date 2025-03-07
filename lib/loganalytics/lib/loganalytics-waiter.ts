/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
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
import { LogAnalyticsClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class LogAnalyticsWaiter {
  public constructor(
    private client: LogAnalyticsClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forIngestTimeRule till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetIngestTimeRuleResponse | null (null in case of 404 response)
   */
  public async forIngestTimeRule(
    request: serviceRequests.GetIngestTimeRuleRequest,
    ...targetStates: models.ConfigLifecycleState[]
  ): Promise<serviceResponses.GetIngestTimeRuleResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getIngestTimeRule(request),
      response => targetStates.includes(response.ingestTimeRule.lifecycleState!),
      targetStates.includes(models.ConfigLifecycleState.Deleted)
    );
  }

  /**
   * Waits forLogAnalyticsEmBridge till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetLogAnalyticsEmBridgeResponse | null (null in case of 404 response)
   */
  public async forLogAnalyticsEmBridge(
    request: serviceRequests.GetLogAnalyticsEmBridgeRequest,
    ...targetStates: models.EmBridgeLifecycleStates[]
  ): Promise<serviceResponses.GetLogAnalyticsEmBridgeResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getLogAnalyticsEmBridge(request),
      response => targetStates.includes(response.logAnalyticsEmBridge.lifecycleState!),
      targetStates.includes(models.EmBridgeLifecycleStates.Deleted)
    );
  }

  /**
   * Waits forLogAnalyticsEntity till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetLogAnalyticsEntityResponse | null (null in case of 404 response)
   */
  public async forLogAnalyticsEntity(
    request: serviceRequests.GetLogAnalyticsEntityRequest,
    ...targetStates: models.EntityLifecycleStates[]
  ): Promise<serviceResponses.GetLogAnalyticsEntityResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getLogAnalyticsEntity(request),
      response => targetStates.includes(response.logAnalyticsEntity.lifecycleState!),
      targetStates.includes(models.EntityLifecycleStates.Deleted)
    );
  }

  /**
   * Waits forLogAnalyticsEntityType till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetLogAnalyticsEntityTypeResponse | null (null in case of 404 response)
   */
  public async forLogAnalyticsEntityType(
    request: serviceRequests.GetLogAnalyticsEntityTypeRequest,
    ...targetStates: models.EntityLifecycleStates[]
  ): Promise<serviceResponses.GetLogAnalyticsEntityTypeResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getLogAnalyticsEntityType(request),
      response => targetStates.includes(response.logAnalyticsEntityType.lifecycleState!),
      targetStates.includes(models.EntityLifecycleStates.Deleted)
    );
  }

  /**
   * Waits forLogAnalyticsObjectCollectionRule till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetLogAnalyticsObjectCollectionRuleResponse | null (null in case of 404 response)
   */
  public async forLogAnalyticsObjectCollectionRule(
    request: serviceRequests.GetLogAnalyticsObjectCollectionRuleRequest,
    ...targetStates: models.ObjectCollectionRuleLifecycleStates[]
  ): Promise<serviceResponses.GetLogAnalyticsObjectCollectionRuleResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getLogAnalyticsObjectCollectionRule(request),
      response => targetStates.includes(response.logAnalyticsObjectCollectionRule.lifecycleState!),
      targetStates.includes(models.ObjectCollectionRuleLifecycleStates.Deleted)
    );
  }

  /**
   * Waits forQueryWorkRequest
   *
   * @param request the request to send
   * @return response returns GetQueryWorkRequestResponse
   */
  public async forQueryWorkRequest(
    request: serviceRequests.GetQueryWorkRequestRequest
  ): Promise<serviceResponses.GetQueryWorkRequestResponse> {
    return genericWaiter(
      this.config,
      () => this.client.getQueryWorkRequest(request),
      response => (response.queryWorkRequest.timeFinished ? true : false)
    );
  }

  /**
   * Waits forScheduledTask till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetScheduledTaskResponse | null (null in case of 404 response)
   */
  public async forScheduledTask(
    request: serviceRequests.GetScheduledTaskRequest,
    ...targetStates: models.ScheduledTask.LifecycleState[]
  ): Promise<serviceResponses.GetScheduledTaskResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getScheduledTask(request),
      response => targetStates.includes(response.scheduledTask.lifecycleState!),
      targetStates.includes(models.ScheduledTask.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forStorageWorkRequest
   *
   * @param request the request to send
   * @return response returns GetStorageWorkRequestResponse
   */
  public async forStorageWorkRequest(
    request: serviceRequests.GetStorageWorkRequestRequest
  ): Promise<serviceResponses.GetStorageWorkRequestResponse> {
    return genericWaiter(
      this.config,
      () => this.client.getStorageWorkRequest(request),
      response => (response.storageWorkRequest.timeFinished ? true : false)
    );
  }

  /**
   * Waits forWorkRequest
   *
   * @param request the request to send
   * @return response returns GetWorkRequestResponse
   */
  public async forWorkRequest(
    request: serviceRequests.GetWorkRequestRequest
  ): Promise<serviceResponses.GetWorkRequestResponse> {
    return genericWaiter(
      this.config,
      () => this.client.getWorkRequest(request),
      response => (response.workRequest.timeFinished ? true : false)
    );
  }
}
