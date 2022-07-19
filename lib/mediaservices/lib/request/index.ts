/**
 * Media Services
 * Media Services (includes Media Flow and Media Streams) is a fully managed service for processing media (video) source content. Use Media Flow and Media Streams to transcode and package digital video using configurable workflows and stream video outputs.

Use the Media Services API to configure media workflows and run Media Flow jobs, create distribution channels, ingest assets, create Preview URLs and play assets. For more information, see [Media Flow](/iaas/Content/dms-mediaflow/home.htm) and Media Streams [Media Streams](/iaas/Content/dms-mediastream/home.htm).

Use the table of contents and search tool to explore the Media Flow API and Media Streams API.

 * OpenAPI spec version: 20211101
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as ChangeMediaAssetCompartmentRequest from "./change-media-asset-compartment-request";
export import ChangeMediaAssetCompartmentRequest = ChangeMediaAssetCompartmentRequest.ChangeMediaAssetCompartmentRequest;
import * as ChangeMediaWorkflowCompartmentRequest from "./change-media-workflow-compartment-request";
export import ChangeMediaWorkflowCompartmentRequest = ChangeMediaWorkflowCompartmentRequest.ChangeMediaWorkflowCompartmentRequest;
import * as ChangeMediaWorkflowConfigurationCompartmentRequest from "./change-media-workflow-configuration-compartment-request";
export import ChangeMediaWorkflowConfigurationCompartmentRequest = ChangeMediaWorkflowConfigurationCompartmentRequest.ChangeMediaWorkflowConfigurationCompartmentRequest;
import * as ChangeMediaWorkflowJobCompartmentRequest from "./change-media-workflow-job-compartment-request";
export import ChangeMediaWorkflowJobCompartmentRequest = ChangeMediaWorkflowJobCompartmentRequest.ChangeMediaWorkflowJobCompartmentRequest;
import * as ChangeStreamDistributionChannelCompartmentRequest from "./change-stream-distribution-channel-compartment-request";
export import ChangeStreamDistributionChannelCompartmentRequest = ChangeStreamDistributionChannelCompartmentRequest.ChangeStreamDistributionChannelCompartmentRequest;
import * as CreateMediaAssetRequest from "./create-media-asset-request";
export import CreateMediaAssetRequest = CreateMediaAssetRequest.CreateMediaAssetRequest;
import * as CreateMediaWorkflowRequest from "./create-media-workflow-request";
export import CreateMediaWorkflowRequest = CreateMediaWorkflowRequest.CreateMediaWorkflowRequest;
import * as CreateMediaWorkflowConfigurationRequest from "./create-media-workflow-configuration-request";
export import CreateMediaWorkflowConfigurationRequest = CreateMediaWorkflowConfigurationRequest.CreateMediaWorkflowConfigurationRequest;
import * as CreateMediaWorkflowJobRequest from "./create-media-workflow-job-request";
export import CreateMediaWorkflowJobRequest = CreateMediaWorkflowJobRequest.CreateMediaWorkflowJobRequest;
import * as CreateStreamCdnConfigRequest from "./create-stream-cdn-config-request";
export import CreateStreamCdnConfigRequest = CreateStreamCdnConfigRequest.CreateStreamCdnConfigRequest;
import * as CreateStreamDistributionChannelRequest from "./create-stream-distribution-channel-request";
export import CreateStreamDistributionChannelRequest = CreateStreamDistributionChannelRequest.CreateStreamDistributionChannelRequest;
import * as CreateStreamPackagingConfigRequest from "./create-stream-packaging-config-request";
export import CreateStreamPackagingConfigRequest = CreateStreamPackagingConfigRequest.CreateStreamPackagingConfigRequest;
import * as DeleteMediaAssetRequest from "./delete-media-asset-request";
export import DeleteMediaAssetRequest = DeleteMediaAssetRequest.DeleteMediaAssetRequest;
import * as DeleteMediaAssetDistributionChannelAttachmentRequest from "./delete-media-asset-distribution-channel-attachment-request";
export import DeleteMediaAssetDistributionChannelAttachmentRequest = DeleteMediaAssetDistributionChannelAttachmentRequest.DeleteMediaAssetDistributionChannelAttachmentRequest;
import * as DeleteMediaWorkflowRequest from "./delete-media-workflow-request";
export import DeleteMediaWorkflowRequest = DeleteMediaWorkflowRequest.DeleteMediaWorkflowRequest;
import * as DeleteMediaWorkflowConfigurationRequest from "./delete-media-workflow-configuration-request";
export import DeleteMediaWorkflowConfigurationRequest = DeleteMediaWorkflowConfigurationRequest.DeleteMediaWorkflowConfigurationRequest;
import * as DeleteMediaWorkflowJobRequest from "./delete-media-workflow-job-request";
export import DeleteMediaWorkflowJobRequest = DeleteMediaWorkflowJobRequest.DeleteMediaWorkflowJobRequest;
import * as DeleteStreamCdnConfigRequest from "./delete-stream-cdn-config-request";
export import DeleteStreamCdnConfigRequest = DeleteStreamCdnConfigRequest.DeleteStreamCdnConfigRequest;
import * as DeleteStreamDistributionChannelRequest from "./delete-stream-distribution-channel-request";
export import DeleteStreamDistributionChannelRequest = DeleteStreamDistributionChannelRequest.DeleteStreamDistributionChannelRequest;
import * as DeleteStreamPackagingConfigRequest from "./delete-stream-packaging-config-request";
export import DeleteStreamPackagingConfigRequest = DeleteStreamPackagingConfigRequest.DeleteStreamPackagingConfigRequest;
import * as GetMediaAssetRequest from "./get-media-asset-request";
export import GetMediaAssetRequest = GetMediaAssetRequest.GetMediaAssetRequest;
import * as GetMediaAssetDistributionChannelAttachmentRequest from "./get-media-asset-distribution-channel-attachment-request";
export import GetMediaAssetDistributionChannelAttachmentRequest = GetMediaAssetDistributionChannelAttachmentRequest.GetMediaAssetDistributionChannelAttachmentRequest;
import * as GetMediaWorkflowRequest from "./get-media-workflow-request";
export import GetMediaWorkflowRequest = GetMediaWorkflowRequest.GetMediaWorkflowRequest;
import * as GetMediaWorkflowConfigurationRequest from "./get-media-workflow-configuration-request";
export import GetMediaWorkflowConfigurationRequest = GetMediaWorkflowConfigurationRequest.GetMediaWorkflowConfigurationRequest;
import * as GetMediaWorkflowJobRequest from "./get-media-workflow-job-request";
export import GetMediaWorkflowJobRequest = GetMediaWorkflowJobRequest.GetMediaWorkflowJobRequest;
import * as GetMediaWorkflowJobFactRequest from "./get-media-workflow-job-fact-request";
export import GetMediaWorkflowJobFactRequest = GetMediaWorkflowJobFactRequest.GetMediaWorkflowJobFactRequest;
import * as GetStreamCdnConfigRequest from "./get-stream-cdn-config-request";
export import GetStreamCdnConfigRequest = GetStreamCdnConfigRequest.GetStreamCdnConfigRequest;
import * as GetStreamDistributionChannelRequest from "./get-stream-distribution-channel-request";
export import GetStreamDistributionChannelRequest = GetStreamDistributionChannelRequest.GetStreamDistributionChannelRequest;
import * as GetStreamPackagingConfigRequest from "./get-stream-packaging-config-request";
export import GetStreamPackagingConfigRequest = GetStreamPackagingConfigRequest.GetStreamPackagingConfigRequest;
import * as IngestStreamDistributionChannelRequest from "./ingest-stream-distribution-channel-request";
export import IngestStreamDistributionChannelRequest = IngestStreamDistributionChannelRequest.IngestStreamDistributionChannelRequest;
import * as ListMediaAssetDistributionChannelAttachmentsRequest from "./list-media-asset-distribution-channel-attachments-request";
export import ListMediaAssetDistributionChannelAttachmentsRequest = ListMediaAssetDistributionChannelAttachmentsRequest.ListMediaAssetDistributionChannelAttachmentsRequest;
import * as ListMediaAssetsRequest from "./list-media-assets-request";
export import ListMediaAssetsRequest = ListMediaAssetsRequest.ListMediaAssetsRequest;
import * as ListMediaWorkflowConfigurationsRequest from "./list-media-workflow-configurations-request";
export import ListMediaWorkflowConfigurationsRequest = ListMediaWorkflowConfigurationsRequest.ListMediaWorkflowConfigurationsRequest;
import * as ListMediaWorkflowJobFactsRequest from "./list-media-workflow-job-facts-request";
export import ListMediaWorkflowJobFactsRequest = ListMediaWorkflowJobFactsRequest.ListMediaWorkflowJobFactsRequest;
import * as ListMediaWorkflowJobsRequest from "./list-media-workflow-jobs-request";
export import ListMediaWorkflowJobsRequest = ListMediaWorkflowJobsRequest.ListMediaWorkflowJobsRequest;
import * as ListMediaWorkflowTaskDeclarationsRequest from "./list-media-workflow-task-declarations-request";
export import ListMediaWorkflowTaskDeclarationsRequest = ListMediaWorkflowTaskDeclarationsRequest.ListMediaWorkflowTaskDeclarationsRequest;
import * as ListMediaWorkflowsRequest from "./list-media-workflows-request";
export import ListMediaWorkflowsRequest = ListMediaWorkflowsRequest.ListMediaWorkflowsRequest;
import * as ListStreamCdnConfigsRequest from "./list-stream-cdn-configs-request";
export import ListStreamCdnConfigsRequest = ListStreamCdnConfigsRequest.ListStreamCdnConfigsRequest;
import * as ListStreamDistributionChannelsRequest from "./list-stream-distribution-channels-request";
export import ListStreamDistributionChannelsRequest = ListStreamDistributionChannelsRequest.ListStreamDistributionChannelsRequest;
import * as ListStreamPackagingConfigsRequest from "./list-stream-packaging-configs-request";
export import ListStreamPackagingConfigsRequest = ListStreamPackagingConfigsRequest.ListStreamPackagingConfigsRequest;
import * as ListSystemMediaWorkflowsRequest from "./list-system-media-workflows-request";
export import ListSystemMediaWorkflowsRequest = ListSystemMediaWorkflowsRequest.ListSystemMediaWorkflowsRequest;
import * as UpdateMediaAssetRequest from "./update-media-asset-request";
export import UpdateMediaAssetRequest = UpdateMediaAssetRequest.UpdateMediaAssetRequest;
import * as UpdateMediaWorkflowRequest from "./update-media-workflow-request";
export import UpdateMediaWorkflowRequest = UpdateMediaWorkflowRequest.UpdateMediaWorkflowRequest;
import * as UpdateMediaWorkflowConfigurationRequest from "./update-media-workflow-configuration-request";
export import UpdateMediaWorkflowConfigurationRequest = UpdateMediaWorkflowConfigurationRequest.UpdateMediaWorkflowConfigurationRequest;
import * as UpdateMediaWorkflowJobRequest from "./update-media-workflow-job-request";
export import UpdateMediaWorkflowJobRequest = UpdateMediaWorkflowJobRequest.UpdateMediaWorkflowJobRequest;
import * as UpdateStreamCdnConfigRequest from "./update-stream-cdn-config-request";
export import UpdateStreamCdnConfigRequest = UpdateStreamCdnConfigRequest.UpdateStreamCdnConfigRequest;
import * as UpdateStreamDistributionChannelRequest from "./update-stream-distribution-channel-request";
export import UpdateStreamDistributionChannelRequest = UpdateStreamDistributionChannelRequest.UpdateStreamDistributionChannelRequest;
import * as UpdateStreamPackagingConfigRequest from "./update-stream-packaging-config-request";
export import UpdateStreamPackagingConfigRequest = UpdateStreamPackagingConfigRequest.UpdateStreamPackagingConfigRequest;