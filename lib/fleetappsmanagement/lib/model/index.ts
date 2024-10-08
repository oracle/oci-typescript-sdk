/**
 * Fleet Application Management Service API
 * Fleet Application Management Service API. Use this API to for all FAMS related activities.
To manage fleets,view complaince report for the Fleet,scedule patches and other lifecycle activities

 * OpenAPI spec version: 20230831
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as ActionGroup from "./action-group";
export import ActionGroup = ActionGroup.ActionGroup;
import * as ActionGroupDetails from "./action-group-details";
export import ActionGroupDetails = ActionGroupDetails.ActionGroupDetails;
import * as ActionType from "./action-type";
export import ActionType = ActionType.ActionType;
import * as ActivityResourceTarget from "./activity-resource-target";
export import ActivityResourceTarget = ActivityResourceTarget.ActivityResourceTarget;
import * as AnnouncementCollection from "./announcement-collection";
export import AnnouncementCollection = AnnouncementCollection.AnnouncementCollection;
import * as AnnouncementSortBy from "./announcement-sort-by";
export import AnnouncementSortBy = AnnouncementSortBy.AnnouncementSortBy;
import * as AnnouncementSummary from "./announcement-summary";
export import AnnouncementSummary = AnnouncementSummary.AnnouncementSummary;
import * as AssociatedFleetCredentialDetails from "./associated-fleet-credential-details";
export import AssociatedFleetCredentialDetails = AssociatedFleetCredentialDetails.AssociatedFleetCredentialDetails;
import * as AssociatedFleetPropertyDetails from "./associated-fleet-property-details";
export import AssociatedFleetPropertyDetails = AssociatedFleetPropertyDetails.AssociatedFleetPropertyDetails;
import * as AssociatedFleetResourceDetails from "./associated-fleet-resource-details";
export import AssociatedFleetResourceDetails = AssociatedFleetResourceDetails.AssociatedFleetResourceDetails;
import * as AssociatedSchedulerDefinition from "./associated-scheduler-definition";
export import AssociatedSchedulerDefinition = AssociatedSchedulerDefinition.AssociatedSchedulerDefinition;
import * as AssociatedTaskDetails from "./associated-task-details";
export import AssociatedTaskDetails = AssociatedTaskDetails.AssociatedTaskDetails;
import * as Associations from "./associations";
export import Associations = Associations.Associations;
import * as CheckResourceTaggingDetails from "./check-resource-tagging-details";
export import CheckResourceTaggingDetails = CheckResourceTaggingDetails.CheckResourceTaggingDetails;
import * as ComplianceReport from "./compliance-report";
export import ComplianceReport = ComplianceReport.ComplianceReport;
import * as ComplianceReportPatchDetail from "./compliance-report-patch-detail";
export import ComplianceReportPatchDetail = ComplianceReportPatchDetail.ComplianceReportPatchDetail;
import * as ComplianceReportProduct from "./compliance-report-product";
export import ComplianceReportProduct = ComplianceReportProduct.ComplianceReportProduct;
import * as ComplianceReportResource from "./compliance-report-resource";
export import ComplianceReportResource = ComplianceReportResource.ComplianceReportResource;
import * as ComplianceReportTarget from "./compliance-report-target";
export import ComplianceReportTarget = ComplianceReportTarget.ComplianceReportTarget;
import * as ComplianceState from "./compliance-state";
export import ComplianceState = ComplianceState.ComplianceState;
import * as ComponentProperties from "./component-properties";
export import ComponentProperties = ComponentProperties.ComponentProperties;
import * as Condition from "./condition";
export import Condition = Condition.Condition;
import * as ConfirmTargetsDetails from "./confirm-targets-details";
export import ConfirmTargetsDetails = ConfirmTargetsDetails.ConfirmTargetsDetails;
import * as ContentDetails from "./content-details";
export import ContentDetails = ContentDetails.ContentDetails;
import * as CreateFleetCredentialDetails from "./create-fleet-credential-details";
export import CreateFleetCredentialDetails = CreateFleetCredentialDetails.CreateFleetCredentialDetails;
import * as CreateFleetDetails from "./create-fleet-details";
export import CreateFleetDetails = CreateFleetDetails.CreateFleetDetails;
import * as CreateFleetPropertyDetails from "./create-fleet-property-details";
export import CreateFleetPropertyDetails = CreateFleetPropertyDetails.CreateFleetPropertyDetails;
import * as CreateFleetResourceDetails from "./create-fleet-resource-details";
export import CreateFleetResourceDetails = CreateFleetResourceDetails.CreateFleetResourceDetails;
import * as CreateMaintenanceWindowDetails from "./create-maintenance-window-details";
export import CreateMaintenanceWindowDetails = CreateMaintenanceWindowDetails.CreateMaintenanceWindowDetails;
import * as CreateOnboardingDetails from "./create-onboarding-details";
export import CreateOnboardingDetails = CreateOnboardingDetails.CreateOnboardingDetails;
import * as CreatePropertyDetails from "./create-property-details";
export import CreatePropertyDetails = CreatePropertyDetails.CreatePropertyDetails;
import * as CreateSchedulerDefinitionDetails from "./create-scheduler-definition-details";
export import CreateSchedulerDefinitionDetails = CreateSchedulerDefinitionDetails.CreateSchedulerDefinitionDetails;
import * as CredentialDetails from "./credential-details";
export import CredentialDetails = CredentialDetails.CredentialDetails;
import * as CredentialEntitySpecificDetails from "./credential-entity-specific-details";
export import CredentialEntitySpecificDetails = CredentialEntitySpecificDetails.CredentialEntitySpecificDetails;
import * as Details from "./details";
export import Details = Details.Details;
import * as DiscoveredTarget from "./discovered-target";
export import DiscoveredTarget = DiscoveredTarget.DiscoveredTarget;
import * as EntityExecutionDetails from "./entity-execution-details";
export import EntityExecutionDetails = EntityExecutionDetails.EntityExecutionDetails;
import * as Execution from "./execution";
export import Execution = Execution.Execution;
import * as ExecutionCollection from "./execution-collection";
export import ExecutionCollection = ExecutionCollection.ExecutionCollection;
import * as ExecutionDetails from "./execution-details";
export import ExecutionDetails = ExecutionDetails.ExecutionDetails;
import * as ExecutionSummary from "./execution-summary";
export import ExecutionSummary = ExecutionSummary.ExecutionSummary;
import * as ExecutionWorkflowDetails from "./execution-workflow-details";
export import ExecutionWorkflowDetails = ExecutionWorkflowDetails.ExecutionWorkflowDetails;
import * as Fleet from "./fleet";
export import Fleet = Fleet.Fleet;
import * as FleetCollection from "./fleet-collection";
export import FleetCollection = FleetCollection.FleetCollection;
import * as FleetCredential from "./fleet-credential";
export import FleetCredential = FleetCredential.FleetCredential;
import * as FleetCredentialCollection from "./fleet-credential-collection";
export import FleetCredentialCollection = FleetCredentialCollection.FleetCredentialCollection;
import * as FleetCredentialSummary from "./fleet-credential-summary";
export import FleetCredentialSummary = FleetCredentialSummary.FleetCredentialSummary;
import * as FleetProductCollection from "./fleet-product-collection";
export import FleetProductCollection = FleetProductCollection.FleetProductCollection;
import * as FleetProductSummary from "./fleet-product-summary";
export import FleetProductSummary = FleetProductSummary.FleetProductSummary;
import * as FleetProperty from "./fleet-property";
export import FleetProperty = FleetProperty.FleetProperty;
import * as FleetPropertyCollection from "./fleet-property-collection";
export import FleetPropertyCollection = FleetPropertyCollection.FleetPropertyCollection;
import * as FleetPropertySummary from "./fleet-property-summary";
export import FleetPropertySummary = FleetPropertySummary.FleetPropertySummary;
import * as FleetResource from "./fleet-resource";
export import FleetResource = FleetResource.FleetResource;
import * as FleetResourceCollection from "./fleet-resource-collection";
export import FleetResourceCollection = FleetResourceCollection.FleetResourceCollection;
import * as FleetResourceSummary from "./fleet-resource-summary";
export import FleetResourceSummary = FleetResourceSummary.FleetResourceSummary;
import * as FleetSummary from "./fleet-summary";
export import FleetSummary = FleetSummary.FleetSummary;
import * as FleetTarget from "./fleet-target";
export import FleetTarget = FleetTarget.FleetTarget;
import * as FleetTargetCollection from "./fleet-target-collection";
export import FleetTargetCollection = FleetTargetCollection.FleetTargetCollection;
import * as FleetTargetSummary from "./fleet-target-summary";
export import FleetTargetSummary = FleetTargetSummary.FleetTargetSummary;
import * as GenerateComplianceReportDetails from "./generate-compliance-report-details";
export import GenerateComplianceReportDetails = GenerateComplianceReportDetails.GenerateComplianceReportDetails;
import * as Group from "./group";
export import Group = Group.Group;
import * as InputArgument from "./input-argument";
export import InputArgument = InputArgument.InputArgument;
import * as InputParameter from "./input-parameter";
export import InputParameter = InputParameter.InputParameter;
import * as InventoryResourceCollection from "./inventory-resource-collection";
export import InventoryResourceCollection = InventoryResourceCollection.InventoryResourceCollection;
import * as InventoryResourceSummary from "./inventory-resource-summary";
export import InventoryResourceSummary = InventoryResourceSummary.InventoryResourceSummary;
import * as JobActivity from "./job-activity";
export import JobActivity = JobActivity.JobActivity;
import * as JobStatus from "./job-status";
export import JobStatus = JobStatus.JobStatus;
import * as LifeCycleActionGroupType from "./life-cycle-action-group-type";
export import LifeCycleActionGroupType = LifeCycleActionGroupType.LifeCycleActionGroupType;
import * as MaintenanceWindow from "./maintenance-window";
export import MaintenanceWindow = MaintenanceWindow.MaintenanceWindow;
import * as MaintenanceWindowCollection from "./maintenance-window-collection";
export import MaintenanceWindowCollection = MaintenanceWindowCollection.MaintenanceWindowCollection;
import * as MaintenanceWindowSummary from "./maintenance-window-summary";
export import MaintenanceWindowSummary = MaintenanceWindowSummary.MaintenanceWindowSummary;
import * as MaintenanceWindowType from "./maintenance-window-type";
export import MaintenanceWindowType = MaintenanceWindowType.MaintenanceWindowType;
import * as NotificationPreferences from "./notification-preferences";
export import NotificationPreferences = NotificationPreferences.NotificationPreferences;
import * as Onboarding from "./onboarding";
export import Onboarding = Onboarding.Onboarding;
import * as OnboardingCollection from "./onboarding-collection";
export import OnboardingCollection = OnboardingCollection.OnboardingCollection;
import * as OnboardingPolicyCollection from "./onboarding-policy-collection";
export import OnboardingPolicyCollection = OnboardingPolicyCollection.OnboardingPolicyCollection;
import * as OnboardingPolicySummary from "./onboarding-policy-summary";
export import OnboardingPolicySummary = OnboardingPolicySummary.OnboardingPolicySummary;
import * as OnboardingSummary from "./onboarding-summary";
export import OnboardingSummary = OnboardingSummary.OnboardingSummary;
import * as OperationRunbook from "./operation-runbook";
export import OperationRunbook = OperationRunbook.OperationRunbook;
import * as OperationStatus from "./operation-status";
export import OperationStatus = OperationStatus.OperationStatus;
import * as OperationType from "./operation-type";
export import OperationType = OperationType.OperationType;
import * as OsType from "./os-type";
export import OsType = OsType.OsType;
import * as Outcome from "./outcome";
export import Outcome = Outcome.Outcome;
import * as OutputVariableDetails from "./output-variable-details";
export import OutputVariableDetails = OutputVariableDetails.OutputVariableDetails;
import * as OutputVariableMapping from "./output-variable-mapping";
export import OutputVariableMapping = OutputVariableMapping.OutputVariableMapping;
import * as Preferences from "./preferences";
export import Preferences = Preferences.Preferences;
import * as Properties from "./properties";
export import Properties = Properties.Properties;
import * as Property from "./property";
export import Property = Property.Property;
import * as PropertyCollection from "./property-collection";
export import PropertyCollection = PropertyCollection.PropertyCollection;
import * as PropertySummary from "./property-summary";
export import PropertySummary = PropertySummary.PropertySummary;
import * as RequestResourceValidationDetails from "./request-resource-validation-details";
export import RequestResourceValidationDetails = RequestResourceValidationDetails.RequestResourceValidationDetails;
import * as RequestTargetDiscoveryDetails from "./request-target-discovery-details";
export import RequestTargetDiscoveryDetails = RequestTargetDiscoveryDetails.RequestTargetDiscoveryDetails;
import * as ResourceTagCheckDetails from "./resource-tag-check-details";
export import ResourceTagCheckDetails = ResourceTagCheckDetails.ResourceTagCheckDetails;
import * as ResourceTagEnablementInfo from "./resource-tag-enablement-info";
export import ResourceTagEnablementInfo = ResourceTagEnablementInfo.ResourceTagEnablementInfo;
import * as Rule from "./rule";
export import Rule = Rule.Rule;
import * as Runbook from "./runbook";
export import Runbook = Runbook.Runbook;
import * as RunbookCollection from "./runbook-collection";
export import RunbookCollection = RunbookCollection.RunbookCollection;
import * as RunbookSummary from "./runbook-summary";
export import RunbookSummary = RunbookSummary.RunbookSummary;
import * as Schedule from "./schedule";
export import Schedule = Schedule.Schedule;
import * as ScheduledFleetCollection from "./scheduled-fleet-collection";
export import ScheduledFleetCollection = ScheduledFleetCollection.ScheduledFleetCollection;
import * as ScheduledFleetSummary from "./scheduled-fleet-summary";
export import ScheduledFleetSummary = ScheduledFleetSummary.ScheduledFleetSummary;
import * as SchedulerDefinition from "./scheduler-definition";
export import SchedulerDefinition = SchedulerDefinition.SchedulerDefinition;
import * as SchedulerDefinitionCollection from "./scheduler-definition-collection";
export import SchedulerDefinitionCollection = SchedulerDefinitionCollection.SchedulerDefinitionCollection;
import * as SchedulerDefinitionSummary from "./scheduler-definition-summary";
export import SchedulerDefinitionSummary = SchedulerDefinitionSummary.SchedulerDefinitionSummary;
import * as SchedulerJob from "./scheduler-job";
export import SchedulerJob = SchedulerJob.SchedulerJob;
import * as SchedulerJobCollection from "./scheduler-job-collection";
export import SchedulerJobCollection = SchedulerJobCollection.SchedulerJobCollection;
import * as SchedulerJobSummary from "./scheduler-job-summary";
export import SchedulerJobSummary = SchedulerJobSummary.SchedulerJobSummary;
import * as Scope from "./scope";
export import Scope = Scope.Scope;
import * as Selection from "./selection";
export import Selection = Selection.Selection;
import * as SelectionCriteria from "./selection-criteria";
export import SelectionCriteria = SelectionCriteria.SelectionCriteria;
import * as SortOrder from "./sort-order";
export import SortOrder = SortOrder.SortOrder;
import * as TargetResource from "./target-resource";
export import TargetResource = TargetResource.TargetResource;
import * as Task from "./task";
export import Task = Task.Task;
import * as TaskArgument from "./task-argument";
export import TaskArgument = TaskArgument.TaskArgument;
import * as TaskExecutionType from "./task-execution-type";
export import TaskExecutionType = TaskExecutionType.TaskExecutionType;
import * as TaskRecord from "./task-record";
export import TaskRecord = TaskRecord.TaskRecord;
import * as TaskRecordCollection from "./task-record-collection";
export import TaskRecordCollection = TaskRecordCollection.TaskRecordCollection;
import * as TaskRecordSummary from "./task-record-summary";
export import TaskRecordSummary = TaskRecordSummary.TaskRecordSummary;
import * as TaskScope from "./task-scope";
export import TaskScope = TaskScope.TaskScope;
import * as TaskVariable from "./task-variable";
export import TaskVariable = TaskVariable.TaskVariable;
import * as UpdateFleetCredentialDetails from "./update-fleet-credential-details";
export import UpdateFleetCredentialDetails = UpdateFleetCredentialDetails.UpdateFleetCredentialDetails;
import * as UpdateFleetDetails from "./update-fleet-details";
export import UpdateFleetDetails = UpdateFleetDetails.UpdateFleetDetails;
import * as UpdateFleetPropertyDetails from "./update-fleet-property-details";
export import UpdateFleetPropertyDetails = UpdateFleetPropertyDetails.UpdateFleetPropertyDetails;
import * as UpdateFleetResourceDetails from "./update-fleet-resource-details";
export import UpdateFleetResourceDetails = UpdateFleetResourceDetails.UpdateFleetResourceDetails;
import * as UpdateMaintenanceWindowDetails from "./update-maintenance-window-details";
export import UpdateMaintenanceWindowDetails = UpdateMaintenanceWindowDetails.UpdateMaintenanceWindowDetails;
import * as UpdatePropertyDetails from "./update-property-details";
export import UpdatePropertyDetails = UpdatePropertyDetails.UpdatePropertyDetails;
import * as UpdateSchedulerDefinitionDetails from "./update-scheduler-definition-details";
export import UpdateSchedulerDefinitionDetails = UpdateSchedulerDefinitionDetails.UpdateSchedulerDefinitionDetails;
import * as UpdateSchedulerJobDetails from "./update-scheduler-job-details";
export import UpdateSchedulerJobDetails = UpdateSchedulerJobDetails.UpdateSchedulerJobDetails;
import * as ValueType from "./value-type";
export import ValueType = ValueType.ValueType;
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
import * as WorkflowComponent from "./workflow-component";
export import WorkflowComponent = WorkflowComponent.WorkflowComponent;
import * as WorkflowGroup from "./workflow-group";
export import WorkflowGroup = WorkflowGroup.WorkflowGroup;

import * as ApiBasedExecutionDetails from "./api-based-execution-details";
export import ApiBasedExecutionDetails = ApiBasedExecutionDetails.ApiBasedExecutionDetails;
import * as AssociatedLocalTaskDetails from "./associated-local-task-details";
export import AssociatedLocalTaskDetails = AssociatedLocalTaskDetails.AssociatedLocalTaskDetails;
import * as AssociatedSharedTaskDetails from "./associated-shared-task-details";
export import AssociatedSharedTaskDetails = AssociatedSharedTaskDetails.AssociatedSharedTaskDetails;
import * as KeyEncryptionCredentialDetails from "./key-encryption-credential-details";
export import KeyEncryptionCredentialDetails = KeyEncryptionCredentialDetails.KeyEncryptionCredentialDetails;
import * as ObjectStorageBucketContentDetails from "./object-storage-bucket-content-details";
export import ObjectStorageBucketContentDetails = ObjectStorageBucketContentDetails.ObjectStorageBucketContentDetails;
import * as OutputVariableInputArgument from "./output-variable-input-argument";
export import OutputVariableInputArgument = OutputVariableInputArgument.OutputVariableInputArgument;
import * as PlainTextCredentialDetails from "./plain-text-credential-details";
export import PlainTextCredentialDetails = PlainTextCredentialDetails.PlainTextCredentialDetails;
import * as ScriptBasedExecutionDetails from "./script-based-execution-details";
export import ScriptBasedExecutionDetails = ScriptBasedExecutionDetails.ScriptBasedExecutionDetails;
import * as StringInputArgument from "./string-input-argument";
export import StringInputArgument = StringInputArgument.StringInputArgument;
import * as TargetCredentialEntitySpecificDetails from "./target-credential-entity-specific-details";
export import TargetCredentialEntitySpecificDetails = TargetCredentialEntitySpecificDetails.TargetCredentialEntitySpecificDetails;
import * as VaultSecretCredentialDetails from "./vault-secret-credential-details";
export import VaultSecretCredentialDetails = VaultSecretCredentialDetails.VaultSecretCredentialDetails;
import * as WorkflowGroupComponent from "./workflow-group-component";
export import WorkflowGroupComponent = WorkflowGroupComponent.WorkflowGroupComponent;
import * as WorkflowTaskComponent from "./workflow-task-component";
export import WorkflowTaskComponent = WorkflowTaskComponent.WorkflowTaskComponent;
