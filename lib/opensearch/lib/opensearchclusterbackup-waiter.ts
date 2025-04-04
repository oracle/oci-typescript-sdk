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
import { OpensearchClusterBackupClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class OpensearchClusterBackupWaiter {
  public constructor(
    private client: OpensearchClusterBackupClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forOpensearchClusterBackup till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetOpensearchClusterBackupResponse | null (null in case of 404 response)
   */
  public async forOpensearchClusterBackup(
    request: serviceRequests.GetOpensearchClusterBackupRequest,
    ...targetStates: models.OpensearchClusterBackup.LifecycleState[]
  ): Promise<serviceResponses.GetOpensearchClusterBackupResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getOpensearchClusterBackup(request),
      response => targetStates.includes(response.opensearchClusterBackup.lifecycleState!),
      targetStates.includes(models.OpensearchClusterBackup.LifecycleState.Deleted)
    );
  }
}
