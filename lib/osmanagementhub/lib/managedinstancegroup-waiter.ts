/**
 * OS Management Hub API
 * Use the OS Management Hub API to manage and monitor updates and patches for instances in OCI, your private data center, or 3rd-party clouds. 
For more information, see [Overview of OS Management Hub](https://docs.oracle.com/iaas/osmh/doc/overview.htm).

 * OpenAPI spec version: 20220901
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
import { ManagedInstanceGroupClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class ManagedInstanceGroupWaiter {
  public constructor(
    private client: ManagedInstanceGroupClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forManagedInstanceGroup till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetManagedInstanceGroupResponse | null (null in case of 404 response)
   */
  public async forManagedInstanceGroup(
    request: serviceRequests.GetManagedInstanceGroupRequest,
    ...targetStates: models.ManagedInstanceGroup.LifecycleState[]
  ): Promise<serviceResponses.GetManagedInstanceGroupResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getManagedInstanceGroup(request),
      response => targetStates.includes(response.managedInstanceGroup.lifecycleState!),
      targetStates.includes(models.ManagedInstanceGroup.LifecycleState.Deleted)
    );
  }
}
