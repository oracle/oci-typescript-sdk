/**
 * Oracle Database Autonomous Recovery Service API
 * Use Oracle Database Autonomous Recovery Service API to manage Protected Databases.
 * OpenAPI spec version: 20210216
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as serviceRequests from "./request";
import * as serviceResponses from "./response";
import * as models from "./model";
import { DatabaseRecoveryClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class DatabaseRecoveryWaiter {
  public constructor(
    private client: DatabaseRecoveryClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forProtectedDatabase till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetProtectedDatabaseResponse | null (null in case of 404 response)
   */
  public async forProtectedDatabase(
    request: serviceRequests.GetProtectedDatabaseRequest,
    ...targetStates: models.LifecycleState[]
  ): Promise<serviceResponses.GetProtectedDatabaseResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getProtectedDatabase(request),
      response => targetStates.includes(response.protectedDatabase.lifecycleState!),
      targetStates.includes(models.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forProtectionPolicy till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetProtectionPolicyResponse | null (null in case of 404 response)
   */
  public async forProtectionPolicy(
    request: serviceRequests.GetProtectionPolicyRequest,
    ...targetStates: models.LifecycleState[]
  ): Promise<serviceResponses.GetProtectionPolicyResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getProtectionPolicy(request),
      response => targetStates.includes(response.protectionPolicy.lifecycleState!),
      targetStates.includes(models.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forRecoveryServiceSubnet till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetRecoveryServiceSubnetResponse | null (null in case of 404 response)
   */
  public async forRecoveryServiceSubnet(
    request: serviceRequests.GetRecoveryServiceSubnetRequest,
    ...targetStates: models.LifecycleState[]
  ): Promise<serviceResponses.GetRecoveryServiceSubnetResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getRecoveryServiceSubnet(request),
      response => targetStates.includes(response.recoveryServiceSubnet.lifecycleState!),
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