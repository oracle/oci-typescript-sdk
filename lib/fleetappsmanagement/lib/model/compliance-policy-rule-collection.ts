/**
 * Fleet Application Management Service API
 * Fleet Application Management provides a centralized platform to help you automate resource management tasks, validate patch compliance, and enhance operational efficiency across an enterprise.

 * OpenAPI spec version: 20230831
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Results of a compliancePolicyRule search. Contains both CompliancePolicyRuleSummary items and other information, such as metadata.
 */
export interface CompliancePolicyRuleCollection {
  /**
   * List of complianePolicyRules.
   */
  "items": Array<model.CompliancePolicyRuleSummary>;
}

export namespace CompliancePolicyRuleCollection {
  export function getJsonObj(obj: CompliancePolicyRuleCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.CompliancePolicyRuleSummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CompliancePolicyRuleCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.CompliancePolicyRuleSummary.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}