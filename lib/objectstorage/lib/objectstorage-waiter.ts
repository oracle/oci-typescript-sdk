/**
 * Object Storage Service API
 * Use Object Storage and Archive Storage APIs to manage buckets, objects, and related resources.
For more information, see [Overview of Object Storage](https://docs.oracle.com/iaas/Content/Object/Concepts/objectstorageoverview.htm) and
[Overview of Archive Storage](https://docs.oracle.com/iaas/Content/Archive/Concepts/archivestorageoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: opc_casper_users_us_grp@oracle.com
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
import { ObjectStorageClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class ObjectStorageWaiter {
  public constructor(
    private client: ObjectStorageClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forPrivateEndpoint till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetPrivateEndpointResponse | null (null in case of 404 response)
   */
  public async forPrivateEndpoint(
    request: serviceRequests.GetPrivateEndpointRequest,
    ...targetStates: models.PrivateEndpoint.LifecycleState[]
  ): Promise<serviceResponses.GetPrivateEndpointResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getPrivateEndpoint(request),
      response => targetStates.includes(response.privateEndpoint.lifecycleState!),
      targetStates.includes(models.PrivateEndpoint.LifecycleState.Deleted)
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
