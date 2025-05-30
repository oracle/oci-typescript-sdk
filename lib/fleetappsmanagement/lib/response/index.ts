/**
 * Fleet Application Management Service API
 * Fleet Application Management provides a centralized platform to help you automate resource management tasks, validate patch compliance, and enhance operational efficiency across an enterprise.

 * OpenAPI spec version: 20250228
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2025, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as ChangeFleetCompartmentResponse from "./change-fleet-compartment-response";
export import ChangeFleetCompartmentResponse = ChangeFleetCompartmentResponse.ChangeFleetCompartmentResponse;
import * as CheckResourceTaggingResponse from "./check-resource-tagging-response";
export import CheckResourceTaggingResponse = CheckResourceTaggingResponse.CheckResourceTaggingResponse;
import * as ConfirmTargetsResponse from "./confirm-targets-response";
export import ConfirmTargetsResponse = ConfirmTargetsResponse.ConfirmTargetsResponse;
import * as CreateFleetResponse from "./create-fleet-response";
export import CreateFleetResponse = CreateFleetResponse.CreateFleetResponse;
import * as CreateFleetCredentialResponse from "./create-fleet-credential-response";
export import CreateFleetCredentialResponse = CreateFleetCredentialResponse.CreateFleetCredentialResponse;
import * as CreateFleetPropertyResponse from "./create-fleet-property-response";
export import CreateFleetPropertyResponse = CreateFleetPropertyResponse.CreateFleetPropertyResponse;
import * as CreateFleetResourceResponse from "./create-fleet-resource-response";
export import CreateFleetResourceResponse = CreateFleetResourceResponse.CreateFleetResourceResponse;
import * as DeleteFleetResponse from "./delete-fleet-response";
export import DeleteFleetResponse = DeleteFleetResponse.DeleteFleetResponse;
import * as DeleteFleetCredentialResponse from "./delete-fleet-credential-response";
export import DeleteFleetCredentialResponse = DeleteFleetCredentialResponse.DeleteFleetCredentialResponse;
import * as DeleteFleetPropertyResponse from "./delete-fleet-property-response";
export import DeleteFleetPropertyResponse = DeleteFleetPropertyResponse.DeleteFleetPropertyResponse;
import * as DeleteFleetResourceResponse from "./delete-fleet-resource-response";
export import DeleteFleetResourceResponse = DeleteFleetResourceResponse.DeleteFleetResourceResponse;
import * as GenerateComplianceReportResponse from "./generate-compliance-report-response";
export import GenerateComplianceReportResponse = GenerateComplianceReportResponse.GenerateComplianceReportResponse;
import * as GetComplianceReportResponse from "./get-compliance-report-response";
export import GetComplianceReportResponse = GetComplianceReportResponse.GetComplianceReportResponse;
import * as GetFleetResponse from "./get-fleet-response";
export import GetFleetResponse = GetFleetResponse.GetFleetResponse;
import * as GetFleetCredentialResponse from "./get-fleet-credential-response";
export import GetFleetCredentialResponse = GetFleetCredentialResponse.GetFleetCredentialResponse;
import * as GetFleetPropertyResponse from "./get-fleet-property-response";
export import GetFleetPropertyResponse = GetFleetPropertyResponse.GetFleetPropertyResponse;
import * as GetFleetResourceResponse from "./get-fleet-resource-response";
export import GetFleetResourceResponse = GetFleetResourceResponse.GetFleetResourceResponse;
import * as ListAnnouncementsResponse from "./list-announcements-response";
export import ListAnnouncementsResponse = ListAnnouncementsResponse.ListAnnouncementsResponse;
import * as ListFleetCredentialsResponse from "./list-fleet-credentials-response";
export import ListFleetCredentialsResponse = ListFleetCredentialsResponse.ListFleetCredentialsResponse;
import * as ListFleetProductsResponse from "./list-fleet-products-response";
export import ListFleetProductsResponse = ListFleetProductsResponse.ListFleetProductsResponse;
import * as ListFleetPropertiesResponse from "./list-fleet-properties-response";
export import ListFleetPropertiesResponse = ListFleetPropertiesResponse.ListFleetPropertiesResponse;
import * as ListFleetResourcesResponse from "./list-fleet-resources-response";
export import ListFleetResourcesResponse = ListFleetResourcesResponse.ListFleetResourcesResponse;
import * as ListFleetTargetsResponse from "./list-fleet-targets-response";
export import ListFleetTargetsResponse = ListFleetTargetsResponse.ListFleetTargetsResponse;
import * as ListFleetsResponse from "./list-fleets-response";
export import ListFleetsResponse = ListFleetsResponse.ListFleetsResponse;
import * as ListInventoryResourcesResponse from "./list-inventory-resources-response";
export import ListInventoryResourcesResponse = ListInventoryResourcesResponse.ListInventoryResourcesResponse;
import * as ListTargetsResponse from "./list-targets-response";
export import ListTargetsResponse = ListTargetsResponse.ListTargetsResponse;
import * as RequestResourceValidationResponse from "./request-resource-validation-response";
export import RequestResourceValidationResponse = RequestResourceValidationResponse.RequestResourceValidationResponse;
import * as RequestTargetDiscoveryResponse from "./request-target-discovery-response";
export import RequestTargetDiscoveryResponse = RequestTargetDiscoveryResponse.RequestTargetDiscoveryResponse;
import * as UpdateFleetResponse from "./update-fleet-response";
export import UpdateFleetResponse = UpdateFleetResponse.UpdateFleetResponse;
import * as UpdateFleetCredentialResponse from "./update-fleet-credential-response";
export import UpdateFleetCredentialResponse = UpdateFleetCredentialResponse.UpdateFleetCredentialResponse;
import * as UpdateFleetPropertyResponse from "./update-fleet-property-response";
export import UpdateFleetPropertyResponse = UpdateFleetPropertyResponse.UpdateFleetPropertyResponse;
import * as UpdateFleetResourceResponse from "./update-fleet-resource-response";
export import UpdateFleetResourceResponse = UpdateFleetResourceResponse.UpdateFleetResourceResponse;
import * as ChangePlatformConfigurationCompartmentResponse from "./change-platform-configuration-compartment-response";
export import ChangePlatformConfigurationCompartmentResponse = ChangePlatformConfigurationCompartmentResponse.ChangePlatformConfigurationCompartmentResponse;
import * as ChangePropertyCompartmentResponse from "./change-property-compartment-response";
export import ChangePropertyCompartmentResponse = ChangePropertyCompartmentResponse.ChangePropertyCompartmentResponse;
import * as CreateCompliancePolicyRuleResponse from "./create-compliance-policy-rule-response";
export import CreateCompliancePolicyRuleResponse = CreateCompliancePolicyRuleResponse.CreateCompliancePolicyRuleResponse;
import * as CreateOnboardingResponse from "./create-onboarding-response";
export import CreateOnboardingResponse = CreateOnboardingResponse.CreateOnboardingResponse;
import * as CreatePlatformConfigurationResponse from "./create-platform-configuration-response";
export import CreatePlatformConfigurationResponse = CreatePlatformConfigurationResponse.CreatePlatformConfigurationResponse;
import * as CreatePropertyResponse from "./create-property-response";
export import CreatePropertyResponse = CreatePropertyResponse.CreatePropertyResponse;
import * as DeleteCompliancePolicyRuleResponse from "./delete-compliance-policy-rule-response";
export import DeleteCompliancePolicyRuleResponse = DeleteCompliancePolicyRuleResponse.DeleteCompliancePolicyRuleResponse;
import * as DeleteOnboardingResponse from "./delete-onboarding-response";
export import DeleteOnboardingResponse = DeleteOnboardingResponse.DeleteOnboardingResponse;
import * as DeletePlatformConfigurationResponse from "./delete-platform-configuration-response";
export import DeletePlatformConfigurationResponse = DeletePlatformConfigurationResponse.DeletePlatformConfigurationResponse;
import * as DeletePropertyResponse from "./delete-property-response";
export import DeletePropertyResponse = DeletePropertyResponse.DeletePropertyResponse;
import * as EnableLatestPolicyResponse from "./enable-latest-policy-response";
export import EnableLatestPolicyResponse = EnableLatestPolicyResponse.EnableLatestPolicyResponse;
import * as GetCompliancePolicyResponse from "./get-compliance-policy-response";
export import GetCompliancePolicyResponse = GetCompliancePolicyResponse.GetCompliancePolicyResponse;
import * as GetCompliancePolicyRuleResponse from "./get-compliance-policy-rule-response";
export import GetCompliancePolicyRuleResponse = GetCompliancePolicyRuleResponse.GetCompliancePolicyRuleResponse;
import * as GetOnboardingResponse from "./get-onboarding-response";
export import GetOnboardingResponse = GetOnboardingResponse.GetOnboardingResponse;
import * as GetPlatformConfigurationResponse from "./get-platform-configuration-response";
export import GetPlatformConfigurationResponse = GetPlatformConfigurationResponse.GetPlatformConfigurationResponse;
import * as GetPropertyResponse from "./get-property-response";
export import GetPropertyResponse = GetPropertyResponse.GetPropertyResponse;
import * as ListCompliancePoliciesResponse from "./list-compliance-policies-response";
export import ListCompliancePoliciesResponse = ListCompliancePoliciesResponse.ListCompliancePoliciesResponse;
import * as ListCompliancePolicyRulesResponse from "./list-compliance-policy-rules-response";
export import ListCompliancePolicyRulesResponse = ListCompliancePolicyRulesResponse.ListCompliancePolicyRulesResponse;
import * as ListOnboardingPoliciesResponse from "./list-onboarding-policies-response";
export import ListOnboardingPoliciesResponse = ListOnboardingPoliciesResponse.ListOnboardingPoliciesResponse;
import * as ListOnboardingsResponse from "./list-onboardings-response";
export import ListOnboardingsResponse = ListOnboardingsResponse.ListOnboardingsResponse;
import * as ListPlatformConfigurationsResponse from "./list-platform-configurations-response";
export import ListPlatformConfigurationsResponse = ListPlatformConfigurationsResponse.ListPlatformConfigurationsResponse;
import * as ListPropertiesResponse from "./list-properties-response";
export import ListPropertiesResponse = ListPropertiesResponse.ListPropertiesResponse;
import * as ManageSettingsResponse from "./manage-settings-response";
export import ManageSettingsResponse = ManageSettingsResponse.ManageSettingsResponse;
import * as UpdateCompliancePolicyRuleResponse from "./update-compliance-policy-rule-response";
export import UpdateCompliancePolicyRuleResponse = UpdateCompliancePolicyRuleResponse.UpdateCompliancePolicyRuleResponse;
import * as UpdateOnboardingResponse from "./update-onboarding-response";
export import UpdateOnboardingResponse = UpdateOnboardingResponse.UpdateOnboardingResponse;
import * as UpdatePlatformConfigurationResponse from "./update-platform-configuration-response";
export import UpdatePlatformConfigurationResponse = UpdatePlatformConfigurationResponse.UpdatePlatformConfigurationResponse;
import * as UpdatePropertyResponse from "./update-property-response";
export import UpdatePropertyResponse = UpdatePropertyResponse.UpdatePropertyResponse;
import * as ChangeCatalogItemCompartmentResponse from "./change-catalog-item-compartment-response";
export import ChangeCatalogItemCompartmentResponse = ChangeCatalogItemCompartmentResponse.ChangeCatalogItemCompartmentResponse;
import * as CloneCatalogItemResponse from "./clone-catalog-item-response";
export import CloneCatalogItemResponse = CloneCatalogItemResponse.CloneCatalogItemResponse;
import * as CreateCatalogItemResponse from "./create-catalog-item-response";
export import CreateCatalogItemResponse = CreateCatalogItemResponse.CreateCatalogItemResponse;
import * as DeleteCatalogItemResponse from "./delete-catalog-item-response";
export import DeleteCatalogItemResponse = DeleteCatalogItemResponse.DeleteCatalogItemResponse;
import * as GetCatalogItemResponse from "./get-catalog-item-response";
export import GetCatalogItemResponse = GetCatalogItemResponse.GetCatalogItemResponse;
import * as ListCatalogItemsResponse from "./list-catalog-items-response";
export import ListCatalogItemsResponse = ListCatalogItemsResponse.ListCatalogItemsResponse;
import * as UpdateCatalogItemResponse from "./update-catalog-item-response";
export import UpdateCatalogItemResponse = UpdateCatalogItemResponse.UpdateCatalogItemResponse;
import * as CreateMaintenanceWindowResponse from "./create-maintenance-window-response";
export import CreateMaintenanceWindowResponse = CreateMaintenanceWindowResponse.CreateMaintenanceWindowResponse;
import * as DeleteMaintenanceWindowResponse from "./delete-maintenance-window-response";
export import DeleteMaintenanceWindowResponse = DeleteMaintenanceWindowResponse.DeleteMaintenanceWindowResponse;
import * as GetMaintenanceWindowResponse from "./get-maintenance-window-response";
export import GetMaintenanceWindowResponse = GetMaintenanceWindowResponse.GetMaintenanceWindowResponse;
import * as ListMaintenanceWindowsResponse from "./list-maintenance-windows-response";
export import ListMaintenanceWindowsResponse = ListMaintenanceWindowsResponse.ListMaintenanceWindowsResponse;
import * as UpdateMaintenanceWindowResponse from "./update-maintenance-window-response";
export import UpdateMaintenanceWindowResponse = UpdateMaintenanceWindowResponse.UpdateMaintenanceWindowResponse;
import * as ChangePatchCompartmentResponse from "./change-patch-compartment-response";
export import ChangePatchCompartmentResponse = ChangePatchCompartmentResponse.ChangePatchCompartmentResponse;
import * as CreatePatchResponse from "./create-patch-response";
export import CreatePatchResponse = CreatePatchResponse.CreatePatchResponse;
import * as CreateSchedulerDefinitionResponse from "./create-scheduler-definition-response";
export import CreateSchedulerDefinitionResponse = CreateSchedulerDefinitionResponse.CreateSchedulerDefinitionResponse;
import * as DeletePatchResponse from "./delete-patch-response";
export import DeletePatchResponse = DeletePatchResponse.DeletePatchResponse;
import * as DeleteSchedulerDefinitionResponse from "./delete-scheduler-definition-response";
export import DeleteSchedulerDefinitionResponse = DeleteSchedulerDefinitionResponse.DeleteSchedulerDefinitionResponse;
import * as DeleteSchedulerJobResponse from "./delete-scheduler-job-response";
export import DeleteSchedulerJobResponse = DeleteSchedulerJobResponse.DeleteSchedulerJobResponse;
import * as ExportComplianceReportResponse from "./export-compliance-report-response";
export import ExportComplianceReportResponse = ExportComplianceReportResponse.ExportComplianceReportResponse;
import * as GetExecutionResponse from "./get-execution-response";
export import GetExecutionResponse = GetExecutionResponse.GetExecutionResponse;
import * as GetJobActivityResponse from "./get-job-activity-response";
export import GetJobActivityResponse = GetJobActivityResponse.GetJobActivityResponse;
import * as GetPatchResponse from "./get-patch-response";
export import GetPatchResponse = GetPatchResponse.GetPatchResponse;
import * as GetSchedulerDefinitionResponse from "./get-scheduler-definition-response";
export import GetSchedulerDefinitionResponse = GetSchedulerDefinitionResponse.GetSchedulerDefinitionResponse;
import * as GetSchedulerJobResponse from "./get-scheduler-job-response";
export import GetSchedulerJobResponse = GetSchedulerJobResponse.GetSchedulerJobResponse;
import * as ListComplianceRecordsResponse from "./list-compliance-records-response";
export import ListComplianceRecordsResponse = ListComplianceRecordsResponse.ListComplianceRecordsResponse;
import * as ListExecutionsResponse from "./list-executions-response";
export import ListExecutionsResponse = ListExecutionsResponse.ListExecutionsResponse;
import * as ListInventoryRecordsResponse from "./list-inventory-records-response";
export import ListInventoryRecordsResponse = ListInventoryRecordsResponse.ListInventoryRecordsResponse;
import * as ListPatchesResponse from "./list-patches-response";
export import ListPatchesResponse = ListPatchesResponse.ListPatchesResponse;
import * as ListResourcesResponse from "./list-resources-response";
export import ListResourcesResponse = ListResourcesResponse.ListResourcesResponse;
import * as ListScheduledFleetsResponse from "./list-scheduled-fleets-response";
export import ListScheduledFleetsResponse = ListScheduledFleetsResponse.ListScheduledFleetsResponse;
import * as ListSchedulerDefinitionsResponse from "./list-scheduler-definitions-response";
export import ListSchedulerDefinitionsResponse = ListSchedulerDefinitionsResponse.ListSchedulerDefinitionsResponse;
import * as ListSchedulerExecutionsResponse from "./list-scheduler-executions-response";
export import ListSchedulerExecutionsResponse = ListSchedulerExecutionsResponse.ListSchedulerExecutionsResponse;
import * as ListSchedulerJobsResponse from "./list-scheduler-jobs-response";
export import ListSchedulerJobsResponse = ListSchedulerJobsResponse.ListSchedulerJobsResponse;
import * as ListStepsResponse from "./list-steps-response";
export import ListStepsResponse = ListStepsResponse.ListStepsResponse;
import * as ManageJobExecutionResponse from "./manage-job-execution-response";
export import ManageJobExecutionResponse = ManageJobExecutionResponse.ManageJobExecutionResponse;
import * as SummarizeComplianceRecordCountsResponse from "./summarize-compliance-record-counts-response";
export import SummarizeComplianceRecordCountsResponse = SummarizeComplianceRecordCountsResponse.SummarizeComplianceRecordCountsResponse;
import * as SummarizeManagedEntityCountsResponse from "./summarize-managed-entity-counts-response";
export import SummarizeManagedEntityCountsResponse = SummarizeManagedEntityCountsResponse.SummarizeManagedEntityCountsResponse;
import * as SummarizeSchedulerJobCountsResponse from "./summarize-scheduler-job-counts-response";
export import SummarizeSchedulerJobCountsResponse = SummarizeSchedulerJobCountsResponse.SummarizeSchedulerJobCountsResponse;
import * as UpdatePatchResponse from "./update-patch-response";
export import UpdatePatchResponse = UpdatePatchResponse.UpdatePatchResponse;
import * as UpdateSchedulerDefinitionResponse from "./update-scheduler-definition-response";
export import UpdateSchedulerDefinitionResponse = UpdateSchedulerDefinitionResponse.UpdateSchedulerDefinitionResponse;
import * as UpdateSchedulerJobResponse from "./update-scheduler-job-response";
export import UpdateSchedulerJobResponse = UpdateSchedulerJobResponse.UpdateSchedulerJobResponse;
import * as ChangeProvisionCompartmentResponse from "./change-provision-compartment-response";
export import ChangeProvisionCompartmentResponse = ChangeProvisionCompartmentResponse.ChangeProvisionCompartmentResponse;
import * as CreateProvisionResponse from "./create-provision-response";
export import CreateProvisionResponse = CreateProvisionResponse.CreateProvisionResponse;
import * as DeleteProvisionResponse from "./delete-provision-response";
export import DeleteProvisionResponse = DeleteProvisionResponse.DeleteProvisionResponse;
import * as GetProvisionResponse from "./get-provision-response";
export import GetProvisionResponse = GetProvisionResponse.GetProvisionResponse;
import * as ListProvisionsResponse from "./list-provisions-response";
export import ListProvisionsResponse = ListProvisionsResponse.ListProvisionsResponse;
import * as UpdateProvisionResponse from "./update-provision-response";
export import UpdateProvisionResponse = UpdateProvisionResponse.UpdateProvisionResponse;
import * as ChangeRunbookCompartmentResponse from "./change-runbook-compartment-response";
export import ChangeRunbookCompartmentResponse = ChangeRunbookCompartmentResponse.ChangeRunbookCompartmentResponse;
import * as ChangeTaskRecordCompartmentResponse from "./change-task-record-compartment-response";
export import ChangeTaskRecordCompartmentResponse = ChangeTaskRecordCompartmentResponse.ChangeTaskRecordCompartmentResponse;
import * as CreateRunbookResponse from "./create-runbook-response";
export import CreateRunbookResponse = CreateRunbookResponse.CreateRunbookResponse;
import * as CreateRunbookVersionResponse from "./create-runbook-version-response";
export import CreateRunbookVersionResponse = CreateRunbookVersionResponse.CreateRunbookVersionResponse;
import * as CreateTaskRecordResponse from "./create-task-record-response";
export import CreateTaskRecordResponse = CreateTaskRecordResponse.CreateTaskRecordResponse;
import * as DeleteRunbookResponse from "./delete-runbook-response";
export import DeleteRunbookResponse = DeleteRunbookResponse.DeleteRunbookResponse;
import * as DeleteRunbookVersionResponse from "./delete-runbook-version-response";
export import DeleteRunbookVersionResponse = DeleteRunbookVersionResponse.DeleteRunbookVersionResponse;
import * as DeleteTaskRecordResponse from "./delete-task-record-response";
export import DeleteTaskRecordResponse = DeleteTaskRecordResponse.DeleteTaskRecordResponse;
import * as GetRunbookResponse from "./get-runbook-response";
export import GetRunbookResponse = GetRunbookResponse.GetRunbookResponse;
import * as GetRunbookVersionResponse from "./get-runbook-version-response";
export import GetRunbookVersionResponse = GetRunbookVersionResponse.GetRunbookVersionResponse;
import * as GetTaskRecordResponse from "./get-task-record-response";
export import GetTaskRecordResponse = GetTaskRecordResponse.GetTaskRecordResponse;
import * as ListRunbookVersionsResponse from "./list-runbook-versions-response";
export import ListRunbookVersionsResponse = ListRunbookVersionsResponse.ListRunbookVersionsResponse;
import * as ListRunbooksResponse from "./list-runbooks-response";
export import ListRunbooksResponse = ListRunbooksResponse.ListRunbooksResponse;
import * as ListTaskRecordsResponse from "./list-task-records-response";
export import ListTaskRecordsResponse = ListTaskRecordsResponse.ListTaskRecordsResponse;
import * as PublishRunbookResponse from "./publish-runbook-response";
export import PublishRunbookResponse = PublishRunbookResponse.PublishRunbookResponse;
import * as SetDefaultRunbookResponse from "./set-default-runbook-response";
export import SetDefaultRunbookResponse = SetDefaultRunbookResponse.SetDefaultRunbookResponse;
import * as UpdateRunbookResponse from "./update-runbook-response";
export import UpdateRunbookResponse = UpdateRunbookResponse.UpdateRunbookResponse;
import * as UpdateRunbookVersionResponse from "./update-runbook-version-response";
export import UpdateRunbookVersionResponse = UpdateRunbookVersionResponse.UpdateRunbookVersionResponse;
import * as UpdateTaskRecordResponse from "./update-task-record-response";
export import UpdateTaskRecordResponse = UpdateTaskRecordResponse.UpdateTaskRecordResponse;
import * as GetWorkRequestResponse from "./get-work-request-response";
export import GetWorkRequestResponse = GetWorkRequestResponse.GetWorkRequestResponse;
import * as ListWorkRequestErrorsResponse from "./list-work-request-errors-response";
export import ListWorkRequestErrorsResponse = ListWorkRequestErrorsResponse.ListWorkRequestErrorsResponse;
import * as ListWorkRequestLogsResponse from "./list-work-request-logs-response";
export import ListWorkRequestLogsResponse = ListWorkRequestLogsResponse.ListWorkRequestLogsResponse;
import * as ListWorkRequestsResponse from "./list-work-requests-response";
export import ListWorkRequestsResponse = ListWorkRequestsResponse.ListWorkRequestsResponse;
