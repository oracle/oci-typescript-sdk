/**
 * Network Firewall API
 * Use the Network Firewall API to create network firewalls and configure policies that regulates network traffic in and across VCNs.
 * OpenAPI spec version: 20230501
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
 * Decryption Rule used in the firewall policy rules.
 * A Decryption Rule is used to define which traffic should be decrypted by the firewall, and how it should do so.
 *
 */
export interface DecryptionRule {
  /**
   * Name for the decryption rule, must be unique within the policy.
   */
  "name": string;
  "condition": model.DecryptionRuleMatchCriteria;
  /**
   * Action:
   * <p>
   * NO_DECRYPT - Matching traffic is not decrypted.
   * * DECRYPT - Matching traffic is decrypted with the specified {@code secret} according to the specified {@code decryptionProfile}.
   *
   */
  "action": model.DecryptionActionType;
  /**
   * The name of the decryption profile to use.
   */
  "decryptionProfile"?: string;
  /**
   * The name of a mapped secret. Its {@code type} must match that of the specified decryption profile.
   */
  "secret"?: string;
  "position"?: model.RulePosition;
  /**
   * OCID of the Network Firewall Policy this decryption rule belongs to.
   */
  "parentResourceId": string;
}

export namespace DecryptionRule {
  export function getJsonObj(obj: DecryptionRule): object {
    const jsonObj = {
      ...obj,
      ...{
        "condition": obj.condition
          ? model.DecryptionRuleMatchCriteria.getJsonObj(obj.condition)
          : undefined,

        "position": obj.position ? model.RulePosition.getJsonObj(obj.position) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DecryptionRule): object {
    const jsonObj = {
      ...obj,
      ...{
        "condition": obj.condition
          ? model.DecryptionRuleMatchCriteria.getDeserializedJsonObj(obj.condition)
          : undefined,

        "position": obj.position
          ? model.RulePosition.getDeserializedJsonObj(obj.position)
          : undefined
      }
    };

    return jsonObj;
  }
}
