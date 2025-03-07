/**
 * API Gateway API
 * API for the API Gateway service. Use this API to manage gateways, deployments, and related items.
For more information, see
[Overview of API Gateway](https://docs.oracle.com/iaas/Content/APIGateway/Concepts/apigatewayoverview.htm).

 * OpenAPI spec version: 20190501
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
import { DeploymentClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class DeploymentWaiter {
  public constructor(
    private client: DeploymentClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forDeployment till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetDeploymentResponse | null (null in case of 404 response)
   */
  public async forDeployment(
    request: serviceRequests.GetDeploymentRequest,
    ...targetStates: models.Deployment.LifecycleState[]
  ): Promise<serviceResponses.GetDeploymentResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getDeployment(request),
      response => targetStates.includes(response.deployment.lifecycleState!),
      targetStates.includes(models.Deployment.LifecycleState.Deleted)
    );
  }
}
