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

export interface CreateSecurityListDetails {
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment to contain the security list.
   */
  "compartmentId": string;
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
   * Rules for allowing egress IP packets.
   */
  "egressSecurityRules": Array<model.EgressSecurityRule>;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Rules for allowing ingress IP packets.
   */
  "ingressSecurityRules": Array<model.IngressSecurityRule>;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the VCN the security list belongs to.
   */
  "vcnId": string;
}

export namespace CreateSecurityListDetails {
  export function getJsonObj(obj: CreateSecurityListDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "egressSecurityRules": obj.egressSecurityRules
          ? obj.egressSecurityRules.map(item => {
              return model.EgressSecurityRule.getJsonObj(item);
            })
          : undefined,

        "ingressSecurityRules": obj.ingressSecurityRules
          ? obj.ingressSecurityRules.map(item => {
              return model.IngressSecurityRule.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateSecurityListDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "egressSecurityRules": obj.egressSecurityRules
          ? obj.egressSecurityRules.map(item => {
              return model.EgressSecurityRule.getDeserializedJsonObj(item);
            })
          : undefined,

        "ingressSecurityRules": obj.ingressSecurityRules
          ? obj.ingressSecurityRules.map(item => {
              return model.IngressSecurityRule.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
