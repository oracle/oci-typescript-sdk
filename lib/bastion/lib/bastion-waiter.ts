/**
 * Bastion API
 * Use the Bastion API to provide restricted and time-limited access to target resources that don't have public endpoints. Bastions let authorized users connect from specific IP addresses to target resources using Secure Shell (SSH) sessions. For more information, see [the Bastion documentation](https://docs.oracle.com/iaas/Content/Bastion/home.htm).
 * OpenAPI spec version: 20210331
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
import { BastionClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class BastionWaiter {
  public constructor(
    private client: BastionClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forBastion till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetBastionResponse | null (null in case of 404 response)
   */
  public async forBastion(
    request: serviceRequests.GetBastionRequest,
    ...targetStates: models.BastionLifecycleState[]
  ): Promise<serviceResponses.GetBastionResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getBastion(request),
      response => targetStates.includes(response.bastion.lifecycleState!),
      targetStates.includes(models.BastionLifecycleState.Deleted)
    );
  }

  /**
   * Waits forSession till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetSessionResponse | null (null in case of 404 response)
   */
  public async forSession(
    request: serviceRequests.GetSessionRequest,
    ...targetStates: models.SessionLifecycleState[]
  ): Promise<serviceResponses.GetSessionResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getSession(request),
      response => targetStates.includes(response.session.lifecycleState!),
      targetStates.includes(models.SessionLifecycleState.Deleted)
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
