/**
 * Organizations API
 * Use the Organizations API to consolidate multiple OCI tenancies into an organization, and centrally manage your tenancies and organization resources. For more information, see [Organization Management Overview](https://docs.oracle.com/iaas/Content/General/Concepts/organization_management_overview.htm).
 * OpenAPI spec version: 20230401
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2025, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Assigned subscription information.
 */
export interface ClassicAssignedSubscription extends model.AssignedSubscription {
  /**
   * Lifecycle state of the subscription.
   */
  "lifecycleState": model.ClassicSubscriptionLifecycleState;
  /**
   * Subscription ID.
   */
  "classicSubscriptionId": string;
  /**
   * Specifies whether or not the subscription is legacy.
   */
  "isClassicSubscription"?: boolean;
  /**
   * Region for the subscription.
   */
  "regionAssignment"?: string;
  /**
   * List of SKUs linked to the subscription.
   */
  "skus"?: Array<model.SubscriptionSku>;
  /**
   * List of subscription order OCIDs that contributed to this subscription.
   */
  "orderIds"?: Array<string>;
  /**
   * Specifies any program that is associated with the subscription.
   */
  "programType"?: string;
  /**
   * The country code for the customer associated with the subscription.
   */
  "customerCountryCode"?: string;
  /**
   * The currency code for the customer associated with the subscription.
   */
  "cloudAmountCurrency"?: string;
  /**
   * Customer service identifier for the customer associated with the subscription.
   */
  "csiNumber"?: string;
  /**
   * Tier for the subscription, whether a free promotion subscription or a paid subscription.
   */
  "subscriptionTier"?: string;
  /**
   * Specifies whether or not the subscription is a government subscription.
   */
  "isGovernmentSubscription"?: boolean;
  /**
   * List of promotions related to the subscription.
   */
  "promotion"?: Array<model.Promotion>;
  /**
   * Purchase entitlement ID associated with the subscription.
   */
  "purchaseEntitlementId"?: string;
  /**
   * Subscription start time.
   */
  "startDate"?: Date;
  /**
   * Subscription end time.
   */
  "endDate"?: Date;
  /**
   * Service or component which is used to provision and manage the subscription.
   */
  "managedBy"?: model.ClassicSubscriptionManagedBy;

  "entityVersion": string;
}

export namespace ClassicAssignedSubscription {
  export function getJsonObj(obj: ClassicAssignedSubscription, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AssignedSubscription.getJsonObj(obj) as ClassicAssignedSubscription)),
      ...{
        "skus": obj.skus
          ? obj.skus.map(item => {
              return model.SubscriptionSku.getJsonObj(item);
            })
          : undefined,

        "promotion": obj.promotion
          ? obj.promotion.map(item => {
              return model.Promotion.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const entityVersion = "V1";
  export function getDeserializedJsonObj(
    obj: ClassicAssignedSubscription,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AssignedSubscription.getDeserializedJsonObj(obj) as ClassicAssignedSubscription)),
      ...{
        "skus": obj.skus
          ? obj.skus.map(item => {
              return model.SubscriptionSku.getDeserializedJsonObj(item);
            })
          : undefined,

        "promotion": obj.promotion
          ? obj.promotion.map(item => {
              return model.Promotion.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
