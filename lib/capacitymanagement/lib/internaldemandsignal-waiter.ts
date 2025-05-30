/**
 * OCI Control Center Capacity Management API
 * OCI Control Center (OCC) Capacity Management enables you to manage capacity requests in realms where OCI Control Center Capacity Management is available. For more information, see [OCI Control Center](https://docs.oracle.com/iaas/Content/control-center/home.htm).
 * OpenAPI spec version: 20231107
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
import { InternalDemandSignalClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class InternalDemandSignalWaiter {
  public constructor(
    private client: InternalDemandSignalClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forInternalOccmDemandSignalDelivery till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetInternalOccmDemandSignalDeliveryResponse | null (null in case of 404 response)
   */
  public async forInternalOccmDemandSignalDelivery(
    request: serviceRequests.GetInternalOccmDemandSignalDeliveryRequest,
    ...targetStates: models.InternalOccmDemandSignalDelivery.LifecycleState[]
  ): Promise<serviceResponses.GetInternalOccmDemandSignalDeliveryResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getInternalOccmDemandSignalDelivery(request),
      response => targetStates.includes(response.internalOccmDemandSignalDelivery.lifecycleState!),
      targetStates.includes(models.InternalOccmDemandSignalDelivery.LifecycleState.Deleted)
    );
  }
}
