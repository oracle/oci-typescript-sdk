/**
 * MarketplacePublisherService API
 * Use the Marketplace Publisher API to manage the publishing of applications in Oracle Cloud Infrastructure Marketplace.
 * OpenAPI spec version: 20220901
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as serviceRequests from "./request";
import * as serviceResponses from "./response";
import * as models from "./model";
import { OfferClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class OfferWaiter {
  public constructor(private client: OfferClient, private readonly config?: WaiterConfiguration) {}

  /**
   * Waits forOffer till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetOfferResponse | null (null in case of 404 response)
   */
  public async forOffer(
    request: serviceRequests.GetOfferRequest,
    ...targetStates: models.Offer.LifecycleState[]
  ): Promise<serviceResponses.GetOfferResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getOffer(request),
      response => targetStates.includes(response.offer.lifecycleState!),
      targetStates.includes(models.Offer.LifecycleState.Deleted)
    );
  }
}