/**
 * DNS API
 * API for the DNS service. Use this API to manage DNS zones, records, and other DNS resources.
For more information, see [Overview of the DNS Service](https://docs.oracle.com/iaas/Content/DNS/Concepts/dnszonemanagement.htm).

 * OpenAPI spec version: 20180115
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

export interface SteeringPolicyHealthRule extends model.SteeringPolicyRule {
  /**
   * An array of {@code caseConditions}. A rule may optionally include a sequence of cases defining alternate
   * configurations for how it should behave during processing for any given DNS query. When a rule has
   * no sequence of {@code cases}, it is always evaluated with the same configuration during processing. When
   * a rule has an empty sequence of {@code cases}, it is always ignored during processing. When a rule has a
   * non-empty sequence of {@code cases}, its behavior during processing is configured by the first matching
   * {@code case} in the sequence. When a rule has no matching cases the rule is ignored. A rule case with no
   * {@code caseCondition} always matches. A rule case with a {@code caseCondition} matches only when that expression
   * evaluates to true for the given query.
   *
   */
  "cases"?: Array<model.SteeringPolicyHealthRuleCase>;

  "ruleType": string;
}

export namespace SteeringPolicyHealthRule {
  export function getJsonObj(obj: SteeringPolicyHealthRule, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.SteeringPolicyRule.getJsonObj(obj) as SteeringPolicyHealthRule)),
      ...{
        "cases": obj.cases
          ? obj.cases.map(item => {
              return model.SteeringPolicyHealthRuleCase.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const ruleType = "HEALTH";
  export function getDeserializedJsonObj(
    obj: SteeringPolicyHealthRule,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.SteeringPolicyRule.getDeserializedJsonObj(obj) as SteeringPolicyHealthRule)),
      ...{
        "cases": obj.cases
          ? obj.cases.map(item => {
              return model.SteeringPolicyHealthRuleCase.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
