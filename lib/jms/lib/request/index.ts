/**
 * Java Management Service Fleets API
 * The APIs for the [Fleet Management](https://docs.oracle.com/en-us/iaas/jms/doc/fleet-management.html) feature of Java Management Service to monitor and manage the usage of Java in your enterprise. Use these APIs to manage fleets, configure managed instances to report to fleets, and gain insights into the Java workloads running on these instances by carrying out basic and advanced features.
 * OpenAPI spec version: 20210610
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2025, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as AddFleetInstallationSitesRequest from "./add-fleet-installation-sites-request";
export import AddFleetInstallationSitesRequest = AddFleetInstallationSitesRequest.AddFleetInstallationSitesRequest;
import * as CancelWorkRequestRequest from "./cancel-work-request-request";
export import CancelWorkRequestRequest = CancelWorkRequestRequest.CancelWorkRequestRequest;
import * as ChangeFleetCompartmentRequest from "./change-fleet-compartment-request";
export import ChangeFleetCompartmentRequest = ChangeFleetCompartmentRequest.ChangeFleetCompartmentRequest;
import * as CreateBlocklistRequest from "./create-blocklist-request";
export import CreateBlocklistRequest = CreateBlocklistRequest.CreateBlocklistRequest;
import * as CreateDrsFileRequest from "./create-drs-file-request";
export import CreateDrsFileRequest = CreateDrsFileRequest.CreateDrsFileRequest;
import * as CreateFleetRequest from "./create-fleet-request";
export import CreateFleetRequest = CreateFleetRequest.CreateFleetRequest;
import * as CreateJmsPluginRequest from "./create-jms-plugin-request";
export import CreateJmsPluginRequest = CreateJmsPluginRequest.CreateJmsPluginRequest;
import * as DeleteBlocklistRequest from "./delete-blocklist-request";
export import DeleteBlocklistRequest = DeleteBlocklistRequest.DeleteBlocklistRequest;
import * as DeleteCryptoAnalysisResultRequest from "./delete-crypto-analysis-result-request";
export import DeleteCryptoAnalysisResultRequest = DeleteCryptoAnalysisResultRequest.DeleteCryptoAnalysisResultRequest;
import * as DeleteDrsFileRequest from "./delete-drs-file-request";
export import DeleteDrsFileRequest = DeleteDrsFileRequest.DeleteDrsFileRequest;
import * as DeleteFleetRequest from "./delete-fleet-request";
export import DeleteFleetRequest = DeleteFleetRequest.DeleteFleetRequest;
import * as DeleteJavaMigrationAnalysisResultRequest from "./delete-java-migration-analysis-result-request";
export import DeleteJavaMigrationAnalysisResultRequest = DeleteJavaMigrationAnalysisResultRequest.DeleteJavaMigrationAnalysisResultRequest;
import * as DeleteJmsPluginRequest from "./delete-jms-plugin-request";
export import DeleteJmsPluginRequest = DeleteJmsPluginRequest.DeleteJmsPluginRequest;
import * as DeletePerformanceTuningAnalysisResultRequest from "./delete-performance-tuning-analysis-result-request";
export import DeletePerformanceTuningAnalysisResultRequest = DeletePerformanceTuningAnalysisResultRequest.DeletePerformanceTuningAnalysisResultRequest;
import * as DisableDrsRequest from "./disable-drs-request";
export import DisableDrsRequest = DisableDrsRequest.DisableDrsRequest;
import * as EnableDrsRequest from "./enable-drs-request";
export import EnableDrsRequest = EnableDrsRequest.EnableDrsRequest;
import * as GenerateAgentDeployScriptRequest from "./generate-agent-deploy-script-request";
export import GenerateAgentDeployScriptRequest = GenerateAgentDeployScriptRequest.GenerateAgentDeployScriptRequest;
import * as GenerateAgentInstallerConfigurationRequest from "./generate-agent-installer-configuration-request";
export import GenerateAgentInstallerConfigurationRequest = GenerateAgentInstallerConfigurationRequest.GenerateAgentInstallerConfigurationRequest;
import * as GenerateLoadPipelineScriptRequest from "./generate-load-pipeline-script-request";
export import GenerateLoadPipelineScriptRequest = GenerateLoadPipelineScriptRequest.GenerateLoadPipelineScriptRequest;
import * as GetCryptoAnalysisResultRequest from "./get-crypto-analysis-result-request";
export import GetCryptoAnalysisResultRequest = GetCryptoAnalysisResultRequest.GetCryptoAnalysisResultRequest;
import * as GetDrsFileRequest from "./get-drs-file-request";
export import GetDrsFileRequest = GetDrsFileRequest.GetDrsFileRequest;
import * as GetExportSettingRequest from "./get-export-setting-request";
export import GetExportSettingRequest = GetExportSettingRequest.GetExportSettingRequest;
import * as GetExportStatusRequest from "./get-export-status-request";
export import GetExportStatusRequest = GetExportStatusRequest.GetExportStatusRequest;
import * as GetFleetRequest from "./get-fleet-request";
export import GetFleetRequest = GetFleetRequest.GetFleetRequest;
import * as GetFleetAdvancedFeatureConfigurationRequest from "./get-fleet-advanced-feature-configuration-request";
export import GetFleetAdvancedFeatureConfigurationRequest = GetFleetAdvancedFeatureConfigurationRequest.GetFleetAdvancedFeatureConfigurationRequest;
import * as GetFleetAgentConfigurationRequest from "./get-fleet-agent-configuration-request";
export import GetFleetAgentConfigurationRequest = GetFleetAgentConfigurationRequest.GetFleetAgentConfigurationRequest;
import * as GetJavaFamilyRequest from "./get-java-family-request";
export import GetJavaFamilyRequest = GetJavaFamilyRequest.GetJavaFamilyRequest;
import * as GetJavaMigrationAnalysisResultRequest from "./get-java-migration-analysis-result-request";
export import GetJavaMigrationAnalysisResultRequest = GetJavaMigrationAnalysisResultRequest.GetJavaMigrationAnalysisResultRequest;
import * as GetJavaReleaseRequest from "./get-java-release-request";
export import GetJavaReleaseRequest = GetJavaReleaseRequest.GetJavaReleaseRequest;
import * as GetJmsPluginRequest from "./get-jms-plugin-request";
export import GetJmsPluginRequest = GetJmsPluginRequest.GetJmsPluginRequest;
import * as GetPerformanceTuningAnalysisResultRequest from "./get-performance-tuning-analysis-result-request";
export import GetPerformanceTuningAnalysisResultRequest = GetPerformanceTuningAnalysisResultRequest.GetPerformanceTuningAnalysisResultRequest;
import * as GetWorkRequestRequest from "./get-work-request-request";
export import GetWorkRequestRequest = GetWorkRequestRequest.GetWorkRequestRequest;
import * as ListAgentInstallersRequest from "./list-agent-installers-request";
export import ListAgentInstallersRequest = ListAgentInstallersRequest.ListAgentInstallersRequest;
import * as ListAnnouncementsRequest from "./list-announcements-request";
export import ListAnnouncementsRequest = ListAnnouncementsRequest.ListAnnouncementsRequest;
import * as ListBlocklistsRequest from "./list-blocklists-request";
export import ListBlocklistsRequest = ListBlocklistsRequest.ListBlocklistsRequest;
import * as ListCryptoAnalysisResultsRequest from "./list-crypto-analysis-results-request";
export import ListCryptoAnalysisResultsRequest = ListCryptoAnalysisResultsRequest.ListCryptoAnalysisResultsRequest;
import * as ListDrsFilesRequest from "./list-drs-files-request";
export import ListDrsFilesRequest = ListDrsFilesRequest.ListDrsFilesRequest;
import * as ListFleetDiagnosesRequest from "./list-fleet-diagnoses-request";
export import ListFleetDiagnosesRequest = ListFleetDiagnosesRequest.ListFleetDiagnosesRequest;
import * as ListFleetErrorsRequest from "./list-fleet-errors-request";
export import ListFleetErrorsRequest = ListFleetErrorsRequest.ListFleetErrorsRequest;
import * as ListFleetsRequest from "./list-fleets-request";
export import ListFleetsRequest = ListFleetsRequest.ListFleetsRequest;
import * as ListInstallationSitesRequest from "./list-installation-sites-request";
export import ListInstallationSitesRequest = ListInstallationSitesRequest.ListInstallationSitesRequest;
import * as ListJavaFamiliesRequest from "./list-java-families-request";
export import ListJavaFamiliesRequest = ListJavaFamiliesRequest.ListJavaFamiliesRequest;
import * as ListJavaMigrationAnalysisResultsRequest from "./list-java-migration-analysis-results-request";
export import ListJavaMigrationAnalysisResultsRequest = ListJavaMigrationAnalysisResultsRequest.ListJavaMigrationAnalysisResultsRequest;
import * as ListJavaReleasesRequest from "./list-java-releases-request";
export import ListJavaReleasesRequest = ListJavaReleasesRequest.ListJavaReleasesRequest;
import * as ListJmsPluginsRequest from "./list-jms-plugins-request";
export import ListJmsPluginsRequest = ListJmsPluginsRequest.ListJmsPluginsRequest;
import * as ListJreUsageRequest from "./list-jre-usage-request";
export import ListJreUsageRequest = ListJreUsageRequest.ListJreUsageRequest;
import * as ListPerformanceTuningAnalysisResultsRequest from "./list-performance-tuning-analysis-results-request";
export import ListPerformanceTuningAnalysisResultsRequest = ListPerformanceTuningAnalysisResultsRequest.ListPerformanceTuningAnalysisResultsRequest;
import * as ListPluginErrorsRequest from "./list-plugin-errors-request";
export import ListPluginErrorsRequest = ListPluginErrorsRequest.ListPluginErrorsRequest;
import * as ListWorkItemsRequest from "./list-work-items-request";
export import ListWorkItemsRequest = ListWorkItemsRequest.ListWorkItemsRequest;
import * as ListWorkRequestErrorsRequest from "./list-work-request-errors-request";
export import ListWorkRequestErrorsRequest = ListWorkRequestErrorsRequest.ListWorkRequestErrorsRequest;
import * as ListWorkRequestLogsRequest from "./list-work-request-logs-request";
export import ListWorkRequestLogsRequest = ListWorkRequestLogsRequest.ListWorkRequestLogsRequest;
import * as ListWorkRequestsRequest from "./list-work-requests-request";
export import ListWorkRequestsRequest = ListWorkRequestsRequest.ListWorkRequestsRequest;
import * as RemoveFleetInstallationSitesRequest from "./remove-fleet-installation-sites-request";
export import RemoveFleetInstallationSitesRequest = RemoveFleetInstallationSitesRequest.RemoveFleetInstallationSitesRequest;
import * as RequestCryptoAnalysesRequest from "./request-crypto-analyses-request";
export import RequestCryptoAnalysesRequest = RequestCryptoAnalysesRequest.RequestCryptoAnalysesRequest;
import * as RequestDeployedApplicationMigrationAnalysesRequest from "./request-deployed-application-migration-analyses-request";
export import RequestDeployedApplicationMigrationAnalysesRequest = RequestDeployedApplicationMigrationAnalysesRequest.RequestDeployedApplicationMigrationAnalysesRequest;
import * as RequestJavaMigrationAnalysesRequest from "./request-java-migration-analyses-request";
export import RequestJavaMigrationAnalysesRequest = RequestJavaMigrationAnalysesRequest.RequestJavaMigrationAnalysesRequest;
import * as RequestJfrRecordingsRequest from "./request-jfr-recordings-request";
export import RequestJfrRecordingsRequest = RequestJfrRecordingsRequest.RequestJfrRecordingsRequest;
import * as RequestPerformanceTuningAnalysesRequest from "./request-performance-tuning-analyses-request";
export import RequestPerformanceTuningAnalysesRequest = RequestPerformanceTuningAnalysesRequest.RequestPerformanceTuningAnalysesRequest;
import * as ScanJavaServerUsageRequest from "./scan-java-server-usage-request";
export import ScanJavaServerUsageRequest = ScanJavaServerUsageRequest.ScanJavaServerUsageRequest;
import * as ScanLibraryUsageRequest from "./scan-library-usage-request";
export import ScanLibraryUsageRequest = ScanLibraryUsageRequest.ScanLibraryUsageRequest;
import * as SummarizeApplicationInstallationUsageRequest from "./summarize-application-installation-usage-request";
export import SummarizeApplicationInstallationUsageRequest = SummarizeApplicationInstallationUsageRequest.SummarizeApplicationInstallationUsageRequest;
import * as SummarizeApplicationUsageRequest from "./summarize-application-usage-request";
export import SummarizeApplicationUsageRequest = SummarizeApplicationUsageRequest.SummarizeApplicationUsageRequest;
import * as SummarizeDeployedApplicationInstallationUsageRequest from "./summarize-deployed-application-installation-usage-request";
export import SummarizeDeployedApplicationInstallationUsageRequest = SummarizeDeployedApplicationInstallationUsageRequest.SummarizeDeployedApplicationInstallationUsageRequest;
import * as SummarizeDeployedApplicationUsageRequest from "./summarize-deployed-application-usage-request";
export import SummarizeDeployedApplicationUsageRequest = SummarizeDeployedApplicationUsageRequest.SummarizeDeployedApplicationUsageRequest;
import * as SummarizeFleetErrorsRequest from "./summarize-fleet-errors-request";
export import SummarizeFleetErrorsRequest = SummarizeFleetErrorsRequest.SummarizeFleetErrorsRequest;
import * as SummarizeInstallationUsageRequest from "./summarize-installation-usage-request";
export import SummarizeInstallationUsageRequest = SummarizeInstallationUsageRequest.SummarizeInstallationUsageRequest;
import * as SummarizeJavaServerInstanceUsageRequest from "./summarize-java-server-instance-usage-request";
export import SummarizeJavaServerInstanceUsageRequest = SummarizeJavaServerInstanceUsageRequest.SummarizeJavaServerInstanceUsageRequest;
import * as SummarizeJavaServerUsageRequest from "./summarize-java-server-usage-request";
export import SummarizeJavaServerUsageRequest = SummarizeJavaServerUsageRequest.SummarizeJavaServerUsageRequest;
import * as SummarizeJreUsageRequest from "./summarize-jre-usage-request";
export import SummarizeJreUsageRequest = SummarizeJreUsageRequest.SummarizeJreUsageRequest;
import * as SummarizeLibraryUsageRequest from "./summarize-library-usage-request";
export import SummarizeLibraryUsageRequest = SummarizeLibraryUsageRequest.SummarizeLibraryUsageRequest;
import * as SummarizeManagedInstanceUsageRequest from "./summarize-managed-instance-usage-request";
export import SummarizeManagedInstanceUsageRequest = SummarizeManagedInstanceUsageRequest.SummarizeManagedInstanceUsageRequest;
import * as SummarizePluginErrorsRequest from "./summarize-plugin-errors-request";
export import SummarizePluginErrorsRequest = SummarizePluginErrorsRequest.SummarizePluginErrorsRequest;
import * as SummarizeResourceInventoryRequest from "./summarize-resource-inventory-request";
export import SummarizeResourceInventoryRequest = SummarizeResourceInventoryRequest.SummarizeResourceInventoryRequest;
import * as UpdateDrsFileRequest from "./update-drs-file-request";
export import UpdateDrsFileRequest = UpdateDrsFileRequest.UpdateDrsFileRequest;
import * as UpdateExportSettingRequest from "./update-export-setting-request";
export import UpdateExportSettingRequest = UpdateExportSettingRequest.UpdateExportSettingRequest;
import * as UpdateFleetRequest from "./update-fleet-request";
export import UpdateFleetRequest = UpdateFleetRequest.UpdateFleetRequest;
import * as UpdateFleetAdvancedFeatureConfigurationRequest from "./update-fleet-advanced-feature-configuration-request";
export import UpdateFleetAdvancedFeatureConfigurationRequest = UpdateFleetAdvancedFeatureConfigurationRequest.UpdateFleetAdvancedFeatureConfigurationRequest;
import * as UpdateFleetAgentConfigurationRequest from "./update-fleet-agent-configuration-request";
export import UpdateFleetAgentConfigurationRequest = UpdateFleetAgentConfigurationRequest.UpdateFleetAgentConfigurationRequest;
import * as UpdateJmsPluginRequest from "./update-jms-plugin-request";
export import UpdateJmsPluginRequest = UpdateJmsPluginRequest.UpdateJmsPluginRequest;
