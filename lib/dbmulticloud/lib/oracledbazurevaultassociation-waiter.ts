/**
 * Oracle Database MultiCloud Data plane Integration
 * 1. Oracle Azure Connector Resource: This is for installing Azure Arc Server in ExaCS VM Cluster.
  There are two way to install Azure Arc Server (Azure Identity) in ExaCS VMCluster.
    a. Using Bearer Access Token or
    b. By providing Authentication token

2. Oracle Azure Blob Container Resource: This is for to capture Azure Container details 
   and same will be used in multiple ExaCS VMCluster to mount the Azure Container.

3. Oracle Azure Blob Mount Resource: This is for to mount Azure Container in ExaCS VMCluster 
   using Oracle Azure Connector and Oracle Azure Blob Container Resource.

 * OpenAPI spec version: 20240501
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
import { OracleDbAzureVaultAssociationClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class OracleDbAzureVaultAssociationWaiter {
  public constructor(
    private client: OracleDbAzureVaultAssociationClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forOracleDbAzureVaultAssociation till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetOracleDbAzureVaultAssociationResponse | null (null in case of 404 response)
   */
  public async forOracleDbAzureVaultAssociation(
    request: serviceRequests.GetOracleDbAzureVaultAssociationRequest,
    ...targetStates: models.OracleDbAzureVaultAssociation.LifecycleState[]
  ): Promise<serviceResponses.GetOracleDbAzureVaultAssociationResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getOracleDbAzureVaultAssociation(request),
      response => targetStates.includes(response.oracleDbAzureVaultAssociation.lifecycleState!),
      targetStates.includes(models.OracleDbAzureVaultAssociation.LifecycleState.Deleted)
    );
  }
}
