/**
 * Organizations API
 * Use the Organizations API to consolidate multiple OCI tenancies into an organization, and centrally manage your tenancies and organization resources. For more information, see [Organization Management Overview](/iaas/Content/General/Concepts/organization_management_overview.htm).
 * OpenAPI spec version: 20230401
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Subscription information for compartment ID. Only root compartments are allowed.
 */
export interface CloudSubscription extends model.Subscription {
  /**
   * Unique Oracle Cloud Subscriptions identifier that is immutable on creation.
   */
  "subscriptionNumber": string;
  /**
   * Currency code. For example USD, MXN.
   */
  "currencyCode": string;
  /**
   * Lifecycle state of the subscription.
   */
  "lifecycleState": model.SubscriptionLifecycleState;

  "entityVersion": string;
}

export namespace CloudSubscription {
  export function getJsonObj(obj: CloudSubscription, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Subscription.getJsonObj(obj) as CloudSubscription)),
      ...{}
    };

    return jsonObj;
  }
  export const entityVersion = "V2";
  export function getDeserializedJsonObj(
    obj: CloudSubscription,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.Subscription.getDeserializedJsonObj(obj) as CloudSubscription)),
      ...{}
    };

    return jsonObj;
  }
}