/**
 * Document Understanding API
 * Document AI helps customers perform various analysis on their documents. If a customer has lots of documents, they can process them in batch using asynchronous API endpoints.
 * OpenAPI spec version: 20221109
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
import { AIServiceDocumentClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class AIServiceDocumentWaiter {
  public constructor(
    private client: AIServiceDocumentClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forModel till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetModelResponse | null (null in case of 404 response)
   */
  public async forModel(
    request: serviceRequests.GetModelRequest,
    ...targetStates: models.Model.LifecycleState[]
  ): Promise<serviceResponses.GetModelResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getModel(request),
      response => targetStates.includes(response.model.lifecycleState!),
      targetStates.includes(models.Model.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forProcessorJob till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetProcessorJobResponse
   */
  public async forProcessorJob(
    request: serviceRequests.GetProcessorJobRequest,
    ...targetStates: models.ProcessorJob.LifecycleState[]
  ): Promise<serviceResponses.GetProcessorJobResponse> {
    return genericWaiter(
      this.config,
      () => this.client.getProcessorJob(request),
      response => targetStates.includes(response.processorJob.lifecycleState!)
    );
  }

  /**
   * Waits forProject till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetProjectResponse | null (null in case of 404 response)
   */
  public async forProject(
    request: serviceRequests.GetProjectRequest,
    ...targetStates: models.Project.LifecycleState[]
  ): Promise<serviceResponses.GetProjectResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getProject(request),
      response => targetStates.includes(response.project.lifecycleState!),
      targetStates.includes(models.Project.LifecycleState.Deleted)
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
