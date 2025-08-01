/**
 * Application Performance Monitoring Configuration API
 * Use the Application Performance Monitoring Configuration API to query and set Application Performance Monitoring
configuration. For more information, see [Application Performance Monitoring](https://docs.oracle.com/iaas/application-performance-monitoring/index.html).

 * OpenAPI spec version: 20210201
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
 * Agent configuration for any Agent complying with the OpAMP specification.
 *
 */
export interface CreateAgentConfigDetails extends model.CreateConfigDetails {
  /**
   * The agent attribute VALUE by which an agent configuration is matched to an agent.
   * Each agent configuration object must specify a different value.
   * The attribute KEY corresponding to this VALUE is in the matchAgentsWithAttributeKey field.
   *
   */
  "matchAgentsWithAttributeValue": string;
  "config"?: model.AgentConfigMap;
  "overrides"?: model.AgentConfigOverrides;

  "configType": string;
}

export namespace CreateAgentConfigDetails {
  export function getJsonObj(obj: CreateAgentConfigDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateConfigDetails.getJsonObj(obj) as CreateAgentConfigDetails)),
      ...{
        "config": obj.config ? model.AgentConfigMap.getJsonObj(obj.config) : undefined,
        "overrides": obj.overrides
          ? model.AgentConfigOverrides.getJsonObj(obj.overrides)
          : undefined
      }
    };

    return jsonObj;
  }
  export const configType = "AGENT";
  export function getDeserializedJsonObj(
    obj: CreateAgentConfigDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateConfigDetails.getDeserializedJsonObj(obj) as CreateAgentConfigDetails)),
      ...{
        "config": obj.config ? model.AgentConfigMap.getDeserializedJsonObj(obj.config) : undefined,
        "overrides": obj.overrides
          ? model.AgentConfigOverrides.getDeserializedJsonObj(obj.overrides)
          : undefined
      }
    };

    return jsonObj;
  }
}
