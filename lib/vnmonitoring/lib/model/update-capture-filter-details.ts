/**
 * Network Monitoring API
 * Use the Network Monitoring API to troubleshoot routing and security issues for resources such as virtual cloud networks (VCNs) and compute instances. For more information, see the console
documentation for the [Network Path Analyzer](https://docs.oracle.com/iaas/Content/Network/Concepts/path_analyzer.htm) tool.

 * OpenAPI spec version: 20160918
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
 * These details can be included in a request to update a capture filter. A capture filter contains a set of rules governing what traffic a VTAP mirrors.
 *
 */
export interface UpdateCaptureFilterDetails {
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
   * The set of rules governing what traffic a VTAP mirrors.
   *
   */
  "vtapCaptureFilterRules"?: Array<model.VtapCaptureFilterRuleDetails>;
  /**
   * The set of rules governing what traffic the Flow Log collects when creating a flow log capture filter.
   *
   */
  "flowLogCaptureFilterRules"?: Array<model.FlowLogCaptureFilterRuleDetails>;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
}

export namespace UpdateCaptureFilterDetails {
  export function getJsonObj(obj: UpdateCaptureFilterDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "vtapCaptureFilterRules": obj.vtapCaptureFilterRules
          ? obj.vtapCaptureFilterRules.map(item => {
              return model.VtapCaptureFilterRuleDetails.getJsonObj(item);
            })
          : undefined,
        "flowLogCaptureFilterRules": obj.flowLogCaptureFilterRules
          ? obj.flowLogCaptureFilterRules.map(item => {
              return model.FlowLogCaptureFilterRuleDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateCaptureFilterDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "vtapCaptureFilterRules": obj.vtapCaptureFilterRules
          ? obj.vtapCaptureFilterRules.map(item => {
              return model.VtapCaptureFilterRuleDetails.getDeserializedJsonObj(item);
            })
          : undefined,
        "flowLogCaptureFilterRules": obj.flowLogCaptureFilterRules
          ? obj.flowLogCaptureFilterRules.map(item => {
              return model.FlowLogCaptureFilterRuleDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
