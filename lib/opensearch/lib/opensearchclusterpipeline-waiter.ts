/**
 * OpenSearch Service API
 * The OpenSearch service API provides access to OCI Search Service with OpenSearch.
 * OpenAPI spec version: 20180828
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
import { OpensearchClusterPipelineClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class OpensearchClusterPipelineWaiter {
  public constructor(
    private client: OpensearchClusterPipelineClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forOpensearchClusterPipeline till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetOpensearchClusterPipelineResponse | null (null in case of 404 response)
   */
  public async forOpensearchClusterPipeline(
    request: serviceRequests.GetOpensearchClusterPipelineRequest,
    ...targetStates: models.OpensearchClusterPipeline.LifecycleState[]
  ): Promise<serviceResponses.GetOpensearchClusterPipelineResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getOpensearchClusterPipeline(request),
      response => targetStates.includes(response.opensearchClusterPipeline.lifecycleState!),
      targetStates.includes(models.OpensearchClusterPipeline.LifecycleState.Deleted)
    );
  }
}
