/**
 * Dashboards API
 * Use the Oracle Cloud Infrastructure Dashboards service API to manage dashboards in the Console. 
Dashboards provide an organized and customizable view of resources and their metrics in the Console.
For more information, see [Dashboards](https://docs.oracle.com/iaas/Content/Dashboards/home.htm).

**Important:** Resources for the Dashboards service are created in the tenacy's home region.
Although it is possible to create dashboard and dashboard group resources in regions other than the home region,
you won't be able to view those resources in the Console.
Therefore, creating resources outside of the home region is not recommended.

 * OpenAPI spec version: 20210731
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
import { DashboardGroupClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class DashboardGroupWaiter {
  public constructor(
    private client: DashboardGroupClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forDashboardGroup till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetDashboardGroupResponse | null (null in case of 404 response)
   */
  public async forDashboardGroup(
    request: serviceRequests.GetDashboardGroupRequest,
    ...targetStates: models.DashboardGroup.LifecycleState[]
  ): Promise<serviceResponses.GetDashboardGroupResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getDashboardGroup(request),
      response => targetStates.includes(response.dashboardGroup.lifecycleState!),
      targetStates.includes(models.DashboardGroup.LifecycleState.Deleted)
    );
  }
}
