/**
 * Generative AI Agents Management API
 * **Generative AI Agents API**


OCI Generative AI Agents is a fully managed service that combines the power of large language models (LLMs) with an intelligent retrieval system to create contextually relevant answers by searching your knowledge base, making your AI applications smart and efficient.

OCI Generative AI Agents supports several ways to onboard your data and then allows you and your customers to interact with your data using a chat interface or API.

Use the Generative AI Agents API to create and manage agents, knowledge bases, data sources, endpoints, data ingestion jobs, and work requests.

For creating and managing client chat sessions see the [Generative AI Agents Client API](#/EN/generative-ai-agents-client/latest/).

To learn more about the service, see the [Generative AI Agents documentation](/iaas/Content/generative-ai-agents/home.htm).

 * OpenAPI spec version: 20240531
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
import * as Agent from "./agent";
export import Agent = Agent.Agent;
import * as AgentCollection from "./agent-collection";
export import AgentCollection = AgentCollection.AgentCollection;
import * as AgentEndpoint from "./agent-endpoint";
export import AgentEndpoint = AgentEndpoint.AgentEndpoint;
import * as AgentEndpointCollection from "./agent-endpoint-collection";
export import AgentEndpointCollection = AgentEndpointCollection.AgentEndpointCollection;
import * as AgentEndpointSummary from "./agent-endpoint-summary";
export import AgentEndpointSummary = AgentEndpointSummary.AgentEndpointSummary;
import * as AgentSummary from "./agent-summary";
export import AgentSummary = AgentSummary.AgentSummary;
import * as ChangeAgentCompartmentDetails from "./change-agent-compartment-details";
export import ChangeAgentCompartmentDetails = ChangeAgentCompartmentDetails.ChangeAgentCompartmentDetails;
import * as ChangeAgentEndpointCompartmentDetails from "./change-agent-endpoint-compartment-details";
export import ChangeAgentEndpointCompartmentDetails = ChangeAgentEndpointCompartmentDetails.ChangeAgentEndpointCompartmentDetails;
import * as ChangeKnowledgeBaseCompartmentDetails from "./change-knowledge-base-compartment-details";
export import ChangeKnowledgeBaseCompartmentDetails = ChangeKnowledgeBaseCompartmentDetails.ChangeKnowledgeBaseCompartmentDetails;
import * as ContentModerationConfig from "./content-moderation-config";
export import ContentModerationConfig = ContentModerationConfig.ContentModerationConfig;
import * as CreateAgentDetails from "./create-agent-details";
export import CreateAgentDetails = CreateAgentDetails.CreateAgentDetails;
import * as CreateAgentEndpointDetails from "./create-agent-endpoint-details";
export import CreateAgentEndpointDetails = CreateAgentEndpointDetails.CreateAgentEndpointDetails;
import * as CreateDataIngestionJobDetails from "./create-data-ingestion-job-details";
export import CreateDataIngestionJobDetails = CreateDataIngestionJobDetails.CreateDataIngestionJobDetails;
import * as CreateDataSourceDetails from "./create-data-source-details";
export import CreateDataSourceDetails = CreateDataSourceDetails.CreateDataSourceDetails;
import * as CreateKnowledgeBaseDetails from "./create-knowledge-base-details";
export import CreateKnowledgeBaseDetails = CreateKnowledgeBaseDetails.CreateKnowledgeBaseDetails;
import * as DataIngestionJob from "./data-ingestion-job";
export import DataIngestionJob = DataIngestionJob.DataIngestionJob;
import * as DataIngestionJobCollection from "./data-ingestion-job-collection";
export import DataIngestionJobCollection = DataIngestionJobCollection.DataIngestionJobCollection;
import * as DataIngestionJobStatistics from "./data-ingestion-job-statistics";
export import DataIngestionJobStatistics = DataIngestionJobStatistics.DataIngestionJobStatistics;
import * as DataIngestionJobSummary from "./data-ingestion-job-summary";
export import DataIngestionJobSummary = DataIngestionJobSummary.DataIngestionJobSummary;
import * as DataSource from "./data-source";
export import DataSource = DataSource.DataSource;
import * as DataSourceCollection from "./data-source-collection";
export import DataSourceCollection = DataSourceCollection.DataSourceCollection;
import * as DataSourceConfig from "./data-source-config";
export import DataSourceConfig = DataSourceConfig.DataSourceConfig;
import * as DataSourceSummary from "./data-source-summary";
export import DataSourceSummary = DataSourceSummary.DataSourceSummary;
import * as DatabaseConnection from "./database-connection";
export import DatabaseConnection = DatabaseConnection.DatabaseConnection;
import * as DatabaseFunction from "./database-function";
export import DatabaseFunction = DatabaseFunction.DatabaseFunction;
import * as Index from "./model-index";
export import Index = Index.Index;
import * as IndexConfig from "./index-config";
export import IndexConfig = IndexConfig.IndexConfig;
import * as IndexSchema from "./index-schema";
export import IndexSchema = IndexSchema.IndexSchema;
import * as KnowledgeBase from "./knowledge-base";
export import KnowledgeBase = KnowledgeBase.KnowledgeBase;
import * as KnowledgeBaseCollection from "./knowledge-base-collection";
export import KnowledgeBaseCollection = KnowledgeBaseCollection.KnowledgeBaseCollection;
import * as KnowledgeBaseSummary from "./knowledge-base-summary";
export import KnowledgeBaseSummary = KnowledgeBaseSummary.KnowledgeBaseSummary;
import * as ObjectStoragePrefix from "./object-storage-prefix";
export import ObjectStoragePrefix = ObjectStoragePrefix.ObjectStoragePrefix;
import * as OperationStatus from "./operation-status";
export import OperationStatus = OperationStatus.OperationStatus;
import * as OperationType from "./operation-type";
export import OperationType = OperationType.OperationType;
import * as SecretDetail from "./secret-detail";
export import SecretDetail = SecretDetail.SecretDetail;
import * as SessionConfig from "./session-config";
export import SessionConfig = SessionConfig.SessionConfig;
import * as SortOrder from "./sort-order";
export import SortOrder = SortOrder.SortOrder;
import * as UpdateAgentDetails from "./update-agent-details";
export import UpdateAgentDetails = UpdateAgentDetails.UpdateAgentDetails;
import * as UpdateAgentEndpointDetails from "./update-agent-endpoint-details";
export import UpdateAgentEndpointDetails = UpdateAgentEndpointDetails.UpdateAgentEndpointDetails;
import * as UpdateDataSourceDetails from "./update-data-source-details";
export import UpdateDataSourceDetails = UpdateDataSourceDetails.UpdateDataSourceDetails;
import * as UpdateKnowledgeBaseDetails from "./update-knowledge-base-details";
export import UpdateKnowledgeBaseDetails = UpdateKnowledgeBaseDetails.UpdateKnowledgeBaseDetails;
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

import * as BasicAuthSecret from "./basic-auth-secret";
export import BasicAuthSecret = BasicAuthSecret.BasicAuthSecret;
import * as DatabaseToolConnection from "./database-tool-connection";
export import DatabaseToolConnection = DatabaseToolConnection.DatabaseToolConnection;
import * as DefaultIndexConfig from "./default-index-config";
export import DefaultIndexConfig = DefaultIndexConfig.DefaultIndexConfig;
import * as IdcsSecret from "./idcs-secret";
export import IdcsSecret = IdcsSecret.IdcsSecret;
import * as OciDatabaseConfig from "./oci-database-config";
export import OciDatabaseConfig = OciDatabaseConfig.OciDatabaseConfig;
import * as OciObjectStorageDataSourceConfig from "./oci-object-storage-data-source-config";
export import OciObjectStorageDataSourceConfig = OciObjectStorageDataSourceConfig.OciObjectStorageDataSourceConfig;
import * as OciOpenSearchIndexConfig from "./oci-open-search-index-config";
export import OciOpenSearchIndexConfig = OciOpenSearchIndexConfig.OciOpenSearchIndexConfig;