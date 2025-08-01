/**
 * Generative AI Agents Management API
 * OCI Generative AI Agents is a fully managed service that combines the power of large language models (LLMs) with an intelligent retrieval system to create contextually relevant answers by searching your knowledge base, making your AI applications smart and efficient.

OCI Generative AI Agents supports several ways to onboard your data and then allows you and your customers to interact with your data using a chat interface or API.

Use the Generative AI Agents API to create and manage agents, knowledge bases, data sources, endpoints, data ingestion jobs, and work requests.

For creating and managing client chat sessions see the {@link #eNGenerative-ai-agents-clientLatest(ENGenerative-ai-agents-clientLatestRequest) eNGenerative-ai-agents-clientLatest}.

To learn more about the service, see the [Generative AI Agents documentation](https://docs.oracle.com/iaas/Content/generative-ai-agents/home.htm).

 * OpenAPI spec version: 20240531
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
 * The configuration and type of Tool.
 *
 */
export interface ToolConfig {
  "toolConfigType": string;
}

export namespace ToolConfig {
  export function getJsonObj(obj: ToolConfig): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "toolConfigType" in obj && obj.toolConfigType) {
      switch (obj.toolConfigType) {
        case "SQL_TOOL_CONFIG":
          return model.SqlToolConfig.getJsonObj(<model.SqlToolConfig>(<object>jsonObj), true);
        case "FUNCTION_CALLING_TOOL_CONFIG":
          return model.FunctionCallingToolConfig.getJsonObj(
            <model.FunctionCallingToolConfig>(<object>jsonObj),
            true
          );
        case "HTTP_ENDPOINT_TOOL_CONFIG":
          return model.HttpEndpointToolConfig.getJsonObj(
            <model.HttpEndpointToolConfig>(<object>jsonObj),
            true
          );
        case "AGENT_TOOL_CONFIG":
          return model.AgentToolConfig.getJsonObj(<model.AgentToolConfig>(<object>jsonObj), true);
        case "RAG_TOOL_CONFIG":
          return model.RagToolConfig.getJsonObj(<model.RagToolConfig>(<object>jsonObj), true);
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.toolConfigType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ToolConfig): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "toolConfigType" in obj && obj.toolConfigType) {
      switch (obj.toolConfigType) {
        case "SQL_TOOL_CONFIG":
          return model.SqlToolConfig.getDeserializedJsonObj(
            <model.SqlToolConfig>(<object>jsonObj),
            true
          );
        case "FUNCTION_CALLING_TOOL_CONFIG":
          return model.FunctionCallingToolConfig.getDeserializedJsonObj(
            <model.FunctionCallingToolConfig>(<object>jsonObj),
            true
          );
        case "HTTP_ENDPOINT_TOOL_CONFIG":
          return model.HttpEndpointToolConfig.getDeserializedJsonObj(
            <model.HttpEndpointToolConfig>(<object>jsonObj),
            true
          );
        case "AGENT_TOOL_CONFIG":
          return model.AgentToolConfig.getDeserializedJsonObj(
            <model.AgentToolConfig>(<object>jsonObj),
            true
          );
        case "RAG_TOOL_CONFIG":
          return model.RagToolConfig.getDeserializedJsonObj(
            <model.RagToolConfig>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.toolConfigType}`);
      }
    }
    return jsonObj;
  }
}
