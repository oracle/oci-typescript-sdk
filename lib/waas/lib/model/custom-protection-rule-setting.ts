/**
 * Web Application Acceleration and Security Services API
 * OCI Web Application Acceleration and Security Services
 * OpenAPI spec version: 20181116
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
 * The OCID and action of a custom protection rule.
 */
export interface CustomProtectionRuleSetting {
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the custom protection rule.
   */
  "id"?: string;
  /**
   * The action to take when the custom protection rule is triggered.
   * {@code DETECT} - Logs the request when the criteria of the custom protection rule are met. {@code BLOCK} - Blocks the request when the criteria of the custom protection rule are met.
   */
  "action"?: CustomProtectionRuleSetting.Action;
  "exclusions"?: Array<model.ProtectionRuleExclusion>;
}

export namespace CustomProtectionRuleSetting {
  export enum Action {
    Detect = "DETECT",
    Block = "BLOCK",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: CustomProtectionRuleSetting): object {
    const jsonObj = {
      ...obj,
      ...{
        "exclusions": obj.exclusions
          ? obj.exclusions.map(item => {
              return model.ProtectionRuleExclusion.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CustomProtectionRuleSetting): object {
    const jsonObj = {
      ...obj,
      ...{
        "exclusions": obj.exclusions
          ? obj.exclusions.map(item => {
              return model.ProtectionRuleExclusion.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
