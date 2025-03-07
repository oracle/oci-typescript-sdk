/**
 * Stack Monitoring API
 * Stack Monitoring API.
 * OpenAPI spec version: 20210330
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
import { StackMonitoringClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class StackMonitoringWaiter {
  public constructor(
    private client: StackMonitoringClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forAlarmCondition till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetAlarmConditionResponse | null (null in case of 404 response)
   */
  public async forAlarmCondition(
    request: serviceRequests.GetAlarmConditionRequest,
    ...targetStates: models.AlarmConditionLifeCycleStates[]
  ): Promise<serviceResponses.GetAlarmConditionResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getAlarmCondition(request),
      response => targetStates.includes(response.alarmCondition.lifecycleState!),
      targetStates.includes(models.AlarmConditionLifeCycleStates.Deleted)
    );
  }

  /**
   * Waits forBaselineableMetric till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetBaselineableMetricResponse | null (null in case of 404 response)
   */
  public async forBaselineableMetric(
    request: serviceRequests.GetBaselineableMetricRequest,
    ...targetStates: models.BaselineableMetricLifeCycleStates[]
  ): Promise<serviceResponses.GetBaselineableMetricResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getBaselineableMetric(request),
      response => targetStates.includes(response.baselineableMetric.lifecycleState!),
      targetStates.includes(models.BaselineableMetricLifeCycleStates.Deleted)
    );
  }

  /**
   * Waits forConfig till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetConfigResponse | null (null in case of 404 response)
   */
  public async forConfig(
    request: serviceRequests.GetConfigRequest,
    ...targetStates: models.Config.LifecycleState[]
  ): Promise<serviceResponses.GetConfigResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getConfig(request),
      response => targetStates.includes(response.config.lifecycleState!),
      targetStates.includes(models.Config.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forDiscoveryJob till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetDiscoveryJobResponse | null (null in case of 404 response)
   */
  public async forDiscoveryJob(
    request: serviceRequests.GetDiscoveryJobRequest,
    ...targetStates: models.LifecycleState[]
  ): Promise<serviceResponses.GetDiscoveryJobResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getDiscoveryJob(request),
      response => targetStates.includes(response.discoveryJob.lifecycleState!),
      targetStates.includes(models.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forMaintenanceWindow till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetMaintenanceWindowResponse | null (null in case of 404 response)
   */
  public async forMaintenanceWindow(
    request: serviceRequests.GetMaintenanceWindowRequest,
    ...targetStates: models.MaintenanceWindowLifecycleState[]
  ): Promise<serviceResponses.GetMaintenanceWindowResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getMaintenanceWindow(request),
      response => targetStates.includes(response.maintenanceWindow.lifecycleState!),
      targetStates.includes(models.MaintenanceWindowLifecycleState.Deleted)
    );
  }

  /**
   * Waits forMetricExtension till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetMetricExtensionResponse | null (null in case of 404 response)
   */
  public async forMetricExtension(
    request: serviceRequests.GetMetricExtensionRequest,
    ...targetStates: models.MetricExtensionLifeCycleStates[]
  ): Promise<serviceResponses.GetMetricExtensionResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getMetricExtension(request),
      response => targetStates.includes(response.metricExtension.lifecycleState!),
      targetStates.includes(models.MetricExtensionLifeCycleStates.Deleted)
    );
  }

  /**
   * Waits forMonitoredResource till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetMonitoredResourceResponse | null (null in case of 404 response)
   */
  public async forMonitoredResource(
    request: serviceRequests.GetMonitoredResourceRequest,
    ...targetStates: models.ResourceLifecycleState[]
  ): Promise<serviceResponses.GetMonitoredResourceResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getMonitoredResource(request),
      response => targetStates.includes(response.monitoredResource.lifecycleState!),
      targetStates.includes(models.ResourceLifecycleState.Deleted)
    );
  }

  /**
   * Waits forMonitoredResourceTask till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetMonitoredResourceTaskResponse
   */
  public async forMonitoredResourceTask(
    request: serviceRequests.GetMonitoredResourceTaskRequest,
    ...targetStates: models.MonitoredResourceTaskLifecycleState[]
  ): Promise<serviceResponses.GetMonitoredResourceTaskResponse> {
    return genericWaiter(
      this.config,
      () => this.client.getMonitoredResourceTask(request),
      response => targetStates.includes(response.monitoredResourceTask.lifecycleState!)
    );
  }

  /**
   * Waits forMonitoredResourceType till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetMonitoredResourceTypeResponse | null (null in case of 404 response)
   */
  public async forMonitoredResourceType(
    request: serviceRequests.GetMonitoredResourceTypeRequest,
    ...targetStates: models.ResourceTypeLifecycleState[]
  ): Promise<serviceResponses.GetMonitoredResourceTypeResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getMonitoredResourceType(request),
      response => targetStates.includes(response.monitoredResourceType.lifecycleState!),
      targetStates.includes(models.ResourceTypeLifecycleState.Deleted)
    );
  }

  /**
   * Waits forMonitoringTemplate till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetMonitoringTemplateResponse | null (null in case of 404 response)
   */
  public async forMonitoringTemplate(
    request: serviceRequests.GetMonitoringTemplateRequest,
    ...targetStates: models.MonitoringTemplateLifeCycleStates[]
  ): Promise<serviceResponses.GetMonitoringTemplateResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getMonitoringTemplate(request),
      response => targetStates.includes(response.monitoringTemplate.lifecycleState!),
      targetStates.includes(models.MonitoringTemplateLifeCycleStates.Deleted)
    );
  }

  /**
   * Waits forProcessSet till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetProcessSetResponse | null (null in case of 404 response)
   */
  public async forProcessSet(
    request: serviceRequests.GetProcessSetRequest,
    ...targetStates: models.LifecycleState[]
  ): Promise<serviceResponses.GetProcessSetResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getProcessSet(request),
      response => targetStates.includes(response.processSet.lifecycleState!),
      targetStates.includes(models.LifecycleState.Deleted)
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
