/**
 * Generative AI Service Management API
 * OCI Generative AI is a fully managed service that provides a set of state-of-the-art, customizable large language models (LLMs) that cover a wide range of use cases for text generation, summarization, and text embeddings. 

Use the Generative AI service management API to create and manage [dedicated AI clusters](#/en/generative-ai/latest/DedicatedAiCluster/), [endpoints](#/en/generative-ai/latest/Endpoint/), [custom models](#/en/generative-ai/latest/Model/), and [work requests](#/en/generative-ai/latest/WorkRequest/) in the Generative AI service. For example, create a custom model by fine-tuning an out-of-the-box model using your own data, on a fine-tuning dedicated AI cluster. Then, create a hosting dedicated AI cluster with an endpoint to host your custom model. 

To access your custom model endpoints, or to try the out-of-the-box models to generate text, summarize, and create text embeddings see the [Generative AI Inference API](/#/en/generative-ai-inference/latest/).

To learn more about the service, see the [Generative AI documentation](/iaas/Content/generative-ai/home.htm).

 * OpenAPI spec version: 20231130
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as ActionType from "./action-type";
export import ActionType = ActionType.ActionType;
import * as ChangeDedicatedAiClusterCompartmentDetails from "./change-dedicated-ai-cluster-compartment-details";
export import ChangeDedicatedAiClusterCompartmentDetails = ChangeDedicatedAiClusterCompartmentDetails.ChangeDedicatedAiClusterCompartmentDetails;
import * as ChangeEndpointCompartmentDetails from "./change-endpoint-compartment-details";
export import ChangeEndpointCompartmentDetails = ChangeEndpointCompartmentDetails.ChangeEndpointCompartmentDetails;
import * as ChangeModelCompartmentDetails from "./change-model-compartment-details";
export import ChangeModelCompartmentDetails = ChangeModelCompartmentDetails.ChangeModelCompartmentDetails;
import * as ContentModerationConfig from "./content-moderation-config";
export import ContentModerationConfig = ContentModerationConfig.ContentModerationConfig;
import * as CreateDedicatedAiClusterDetails from "./create-dedicated-ai-cluster-details";
export import CreateDedicatedAiClusterDetails = CreateDedicatedAiClusterDetails.CreateDedicatedAiClusterDetails;
import * as CreateEndpointDetails from "./create-endpoint-details";
export import CreateEndpointDetails = CreateEndpointDetails.CreateEndpointDetails;
import * as CreateModelDetails from "./create-model-details";
export import CreateModelDetails = CreateModelDetails.CreateModelDetails;
import * as Dataset from "./dataset";
export import Dataset = Dataset.Dataset;
import * as DedicatedAiCluster from "./dedicated-ai-cluster";
export import DedicatedAiCluster = DedicatedAiCluster.DedicatedAiCluster;
import * as DedicatedAiClusterCapacity from "./dedicated-ai-cluster-capacity";
export import DedicatedAiClusterCapacity = DedicatedAiClusterCapacity.DedicatedAiClusterCapacity;
import * as DedicatedAiClusterCollection from "./dedicated-ai-cluster-collection";
export import DedicatedAiClusterCollection = DedicatedAiClusterCollection.DedicatedAiClusterCollection;
import * as DedicatedAiClusterSummary from "./dedicated-ai-cluster-summary";
export import DedicatedAiClusterSummary = DedicatedAiClusterSummary.DedicatedAiClusterSummary;
import * as Endpoint from "./endpoint";
export import Endpoint = Endpoint.Endpoint;
import * as EndpointCollection from "./endpoint-collection";
export import EndpointCollection = EndpointCollection.EndpointCollection;
import * as EndpointSummary from "./endpoint-summary";
export import EndpointSummary = EndpointSummary.EndpointSummary;
import * as FineTuneDetails from "./fine-tune-details";
export import FineTuneDetails = FineTuneDetails.FineTuneDetails;
import * as Model from "./model";
export import Model = Model.Model;
import * as ModelCapability from "./model-capability";
export import ModelCapability = ModelCapability.ModelCapability;
import * as ModelCollection from "./model-collection";
export import ModelCollection = ModelCollection.ModelCollection;
import * as ModelMetrics from "./model-metrics";
export import ModelMetrics = ModelMetrics.ModelMetrics;
import * as ModelSummary from "./model-summary";
export import ModelSummary = ModelSummary.ModelSummary;
import * as OperationStatus from "./operation-status";
export import OperationStatus = OperationStatus.OperationStatus;
import * as OperationType from "./operation-type";
export import OperationType = OperationType.OperationType;
import * as SortOrder from "./sort-order";
export import SortOrder = SortOrder.SortOrder;
import * as TrainingConfig from "./training-config";
export import TrainingConfig = TrainingConfig.TrainingConfig;
import * as UpdateDedicatedAiClusterDetails from "./update-dedicated-ai-cluster-details";
export import UpdateDedicatedAiClusterDetails = UpdateDedicatedAiClusterDetails.UpdateDedicatedAiClusterDetails;
import * as UpdateEndpointDetails from "./update-endpoint-details";
export import UpdateEndpointDetails = UpdateEndpointDetails.UpdateEndpointDetails;
import * as UpdateModelDetails from "./update-model-details";
export import UpdateModelDetails = UpdateModelDetails.UpdateModelDetails;
import * as WorkRequest from "./work-request";
export import WorkRequest = WorkRequest.WorkRequest;
import * as WorkRequestError from "./work-request-error";
export import WorkRequestError = WorkRequestError.WorkRequestError;
import * as WorkRequestErrorCollection from "./work-request-error-collection";
export import WorkRequestErrorCollection = WorkRequestErrorCollection.WorkRequestErrorCollection;
import * as WorkRequestLogEntry from "./work-request-log-entry";
export import WorkRequestLogEntry = WorkRequestLogEntry.WorkRequestLogEntry;
import * as WorkRequestLogEntryCollection from "./work-request-log-entry-collection";
export import WorkRequestLogEntryCollection = WorkRequestLogEntryCollection.WorkRequestLogEntryCollection;
import * as WorkRequestResource from "./work-request-resource";
export import WorkRequestResource = WorkRequestResource.WorkRequestResource;
import * as WorkRequestResourceMetadataKey from "./work-request-resource-metadata-key";
export import WorkRequestResourceMetadataKey = WorkRequestResourceMetadataKey.WorkRequestResourceMetadataKey;
import * as WorkRequestSummary from "./work-request-summary";
export import WorkRequestSummary = WorkRequestSummary.WorkRequestSummary;
import * as WorkRequestSummaryCollection from "./work-request-summary-collection";
export import WorkRequestSummaryCollection = WorkRequestSummaryCollection.WorkRequestSummaryCollection;

import * as DedicatedAiClusterHostingCapacity from "./dedicated-ai-cluster-hosting-capacity";
export import DedicatedAiClusterHostingCapacity = DedicatedAiClusterHostingCapacity.DedicatedAiClusterHostingCapacity;
import * as ObjectStorageDataset from "./object-storage-dataset";
export import ObjectStorageDataset = ObjectStorageDataset.ObjectStorageDataset;
import * as TFewTrainingConfig from "./t-few-training-config";
export import TFewTrainingConfig = TFewTrainingConfig.TFewTrainingConfig;
import * as TextGenerationModelMetrics from "./text-generation-model-metrics";
export import TextGenerationModelMetrics = TextGenerationModelMetrics.TextGenerationModelMetrics;
import * as VanillaTrainingConfig from "./vanilla-training-config";
export import VanillaTrainingConfig = VanillaTrainingConfig.VanillaTrainingConfig;