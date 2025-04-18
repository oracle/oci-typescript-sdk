/**
 * Generative AI Service Management API
 * OCI Generative AI is a fully managed service that provides a set of state-of-the-art, customizable large language models (LLMs) that cover a wide range of use cases for text generation, summarization, and text embeddings. 

Use the Generative AI service management API to create and manage {@link DedicatedAiCluster}, {@link Endpoint}, {@link Model}, and {@link WorkRequest} in the Generative AI service. For example, create a custom model by fine-tuning an out-of-the-box model using your own data, on a fine-tuning dedicated AI cluster. Then, create a hosting dedicated AI cluster with an endpoint to host your custom model. 

To access your custom model endpoints, or to try the out-of-the-box models to generate text, summarize, and create text embeddings see the [Generative AI Inference API](https://docs.oracle.com/iaas/api/#/en/generative-ai-inference/latest/).

To learn more about the service, see the [Generative AI documentation](https://docs.oracle.com/iaas/Content/generative-ai/home.htm).

 * OpenAPI spec version: 20231130
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2025, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as ChangeDedicatedAiClusterCompartmentRequest from "./change-dedicated-ai-cluster-compartment-request";
export import ChangeDedicatedAiClusterCompartmentRequest = ChangeDedicatedAiClusterCompartmentRequest.ChangeDedicatedAiClusterCompartmentRequest;
import * as ChangeEndpointCompartmentRequest from "./change-endpoint-compartment-request";
export import ChangeEndpointCompartmentRequest = ChangeEndpointCompartmentRequest.ChangeEndpointCompartmentRequest;
import * as ChangeModelCompartmentRequest from "./change-model-compartment-request";
export import ChangeModelCompartmentRequest = ChangeModelCompartmentRequest.ChangeModelCompartmentRequest;
import * as CreateDedicatedAiClusterRequest from "./create-dedicated-ai-cluster-request";
export import CreateDedicatedAiClusterRequest = CreateDedicatedAiClusterRequest.CreateDedicatedAiClusterRequest;
import * as CreateEndpointRequest from "./create-endpoint-request";
export import CreateEndpointRequest = CreateEndpointRequest.CreateEndpointRequest;
import * as CreateModelRequest from "./create-model-request";
export import CreateModelRequest = CreateModelRequest.CreateModelRequest;
import * as DeleteDedicatedAiClusterRequest from "./delete-dedicated-ai-cluster-request";
export import DeleteDedicatedAiClusterRequest = DeleteDedicatedAiClusterRequest.DeleteDedicatedAiClusterRequest;
import * as DeleteEndpointRequest from "./delete-endpoint-request";
export import DeleteEndpointRequest = DeleteEndpointRequest.DeleteEndpointRequest;
import * as DeleteModelRequest from "./delete-model-request";
export import DeleteModelRequest = DeleteModelRequest.DeleteModelRequest;
import * as GetDedicatedAiClusterRequest from "./get-dedicated-ai-cluster-request";
export import GetDedicatedAiClusterRequest = GetDedicatedAiClusterRequest.GetDedicatedAiClusterRequest;
import * as GetEndpointRequest from "./get-endpoint-request";
export import GetEndpointRequest = GetEndpointRequest.GetEndpointRequest;
import * as GetModelRequest from "./get-model-request";
export import GetModelRequest = GetModelRequest.GetModelRequest;
import * as GetWorkRequestRequest from "./get-work-request-request";
export import GetWorkRequestRequest = GetWorkRequestRequest.GetWorkRequestRequest;
import * as ListDedicatedAiClustersRequest from "./list-dedicated-ai-clusters-request";
export import ListDedicatedAiClustersRequest = ListDedicatedAiClustersRequest.ListDedicatedAiClustersRequest;
import * as ListEndpointsRequest from "./list-endpoints-request";
export import ListEndpointsRequest = ListEndpointsRequest.ListEndpointsRequest;
import * as ListModelsRequest from "./list-models-request";
export import ListModelsRequest = ListModelsRequest.ListModelsRequest;
import * as ListWorkRequestErrorsRequest from "./list-work-request-errors-request";
export import ListWorkRequestErrorsRequest = ListWorkRequestErrorsRequest.ListWorkRequestErrorsRequest;
import * as ListWorkRequestLogsRequest from "./list-work-request-logs-request";
export import ListWorkRequestLogsRequest = ListWorkRequestLogsRequest.ListWorkRequestLogsRequest;
import * as ListWorkRequestsRequest from "./list-work-requests-request";
export import ListWorkRequestsRequest = ListWorkRequestsRequest.ListWorkRequestsRequest;
import * as UpdateDedicatedAiClusterRequest from "./update-dedicated-ai-cluster-request";
export import UpdateDedicatedAiClusterRequest = UpdateDedicatedAiClusterRequest.UpdateDedicatedAiClusterRequest;
import * as UpdateEndpointRequest from "./update-endpoint-request";
export import UpdateEndpointRequest = UpdateEndpointRequest.UpdateEndpointRequest;
import * as UpdateModelRequest from "./update-model-request";
export import UpdateModelRequest = UpdateModelRequest.UpdateModelRequest;
