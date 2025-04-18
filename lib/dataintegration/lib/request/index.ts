/**
 * Data Integration API
 * Use the Data Integration API to organize your data integration projects, create data flows, pipelines and tasks, and then publish, schedule, and run tasks that extract, transform, and load data. For more information, see [Data Integration](https://docs.oracle.com/iaas/data-integration/home.htm).
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2025, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as ChangeCompartmentRequest from "./change-compartment-request";
export import ChangeCompartmentRequest = ChangeCompartmentRequest.ChangeCompartmentRequest;
import * as ChangeDisApplicationCompartmentRequest from "./change-dis-application-compartment-request";
export import ChangeDisApplicationCompartmentRequest = ChangeDisApplicationCompartmentRequest.ChangeDisApplicationCompartmentRequest;
import * as CreateApplicationRequest from "./create-application-request";
export import CreateApplicationRequest = CreateApplicationRequest.CreateApplicationRequest;
import * as CreateApplicationDetailedDescriptionRequest from "./create-application-detailed-description-request";
export import CreateApplicationDetailedDescriptionRequest = CreateApplicationDetailedDescriptionRequest.CreateApplicationDetailedDescriptionRequest;
import * as CreateConnectionRequest from "./create-connection-request";
export import CreateConnectionRequest = CreateConnectionRequest.CreateConnectionRequest;
import * as CreateConnectionValidationRequest from "./create-connection-validation-request";
export import CreateConnectionValidationRequest = CreateConnectionValidationRequest.CreateConnectionValidationRequest;
import * as CreateCopyObjectRequestRequest from "./create-copy-object-request-request";
export import CreateCopyObjectRequestRequest = CreateCopyObjectRequestRequest.CreateCopyObjectRequestRequest;
import * as CreateDataAssetRequest from "./create-data-asset-request";
export import CreateDataAssetRequest = CreateDataAssetRequest.CreateDataAssetRequest;
import * as CreateDataFlowRequest from "./create-data-flow-request";
export import CreateDataFlowRequest = CreateDataFlowRequest.CreateDataFlowRequest;
import * as CreateDataFlowValidationRequest from "./create-data-flow-validation-request";
export import CreateDataFlowValidationRequest = CreateDataFlowValidationRequest.CreateDataFlowValidationRequest;
import * as CreateDisApplicationRequest from "./create-dis-application-request";
export import CreateDisApplicationRequest = CreateDisApplicationRequest.CreateDisApplicationRequest;
import * as CreateDisApplicationDetailedDescriptionRequest from "./create-dis-application-detailed-description-request";
export import CreateDisApplicationDetailedDescriptionRequest = CreateDisApplicationDetailedDescriptionRequest.CreateDisApplicationDetailedDescriptionRequest;
import * as CreateEntityShapeRequest from "./create-entity-shape-request";
export import CreateEntityShapeRequest = CreateEntityShapeRequest.CreateEntityShapeRequest;
import * as CreateExportRequestRequest from "./create-export-request-request";
export import CreateExportRequestRequest = CreateExportRequestRequest.CreateExportRequestRequest;
import * as CreateExternalPublicationRequest from "./create-external-publication-request";
export import CreateExternalPublicationRequest = CreateExternalPublicationRequest.CreateExternalPublicationRequest;
import * as CreateExternalPublicationValidationRequest from "./create-external-publication-validation-request";
export import CreateExternalPublicationValidationRequest = CreateExternalPublicationValidationRequest.CreateExternalPublicationValidationRequest;
import * as CreateFolderRequest from "./create-folder-request";
export import CreateFolderRequest = CreateFolderRequest.CreateFolderRequest;
import * as CreateFunctionLibraryRequest from "./create-function-library-request";
export import CreateFunctionLibraryRequest = CreateFunctionLibraryRequest.CreateFunctionLibraryRequest;
import * as CreateImportRequestRequest from "./create-import-request-request";
export import CreateImportRequestRequest = CreateImportRequestRequest.CreateImportRequestRequest;
import * as CreatePatchRequest from "./create-patch-request";
export import CreatePatchRequest = CreatePatchRequest.CreatePatchRequest;
import * as CreatePipelineRequest from "./create-pipeline-request";
export import CreatePipelineRequest = CreatePipelineRequest.CreatePipelineRequest;
import * as CreatePipelineValidationRequest from "./create-pipeline-validation-request";
export import CreatePipelineValidationRequest = CreatePipelineValidationRequest.CreatePipelineValidationRequest;
import * as CreateProjectRequest from "./create-project-request";
export import CreateProjectRequest = CreateProjectRequest.CreateProjectRequest;
import * as CreateScheduleRequest from "./create-schedule-request";
export import CreateScheduleRequest = CreateScheduleRequest.CreateScheduleRequest;
import * as CreateTaskRequest from "./create-task-request";
export import CreateTaskRequest = CreateTaskRequest.CreateTaskRequest;
import * as CreateTaskRunRequest from "./create-task-run-request";
export import CreateTaskRunRequest = CreateTaskRunRequest.CreateTaskRunRequest;
import * as CreateTaskScheduleRequest from "./create-task-schedule-request";
export import CreateTaskScheduleRequest = CreateTaskScheduleRequest.CreateTaskScheduleRequest;
import * as CreateTaskValidationRequest from "./create-task-validation-request";
export import CreateTaskValidationRequest = CreateTaskValidationRequest.CreateTaskValidationRequest;
import * as CreateUserDefinedFunctionRequest from "./create-user-defined-function-request";
export import CreateUserDefinedFunctionRequest = CreateUserDefinedFunctionRequest.CreateUserDefinedFunctionRequest;
import * as CreateUserDefinedFunctionValidationRequest from "./create-user-defined-function-validation-request";
export import CreateUserDefinedFunctionValidationRequest = CreateUserDefinedFunctionValidationRequest.CreateUserDefinedFunctionValidationRequest;
import * as CreateWorkspaceRequest from "./create-workspace-request";
export import CreateWorkspaceRequest = CreateWorkspaceRequest.CreateWorkspaceRequest;
import * as DeleteApplicationRequest from "./delete-application-request";
export import DeleteApplicationRequest = DeleteApplicationRequest.DeleteApplicationRequest;
import * as DeleteApplicationDetailedDescriptionRequest from "./delete-application-detailed-description-request";
export import DeleteApplicationDetailedDescriptionRequest = DeleteApplicationDetailedDescriptionRequest.DeleteApplicationDetailedDescriptionRequest;
import * as DeleteConnectionRequest from "./delete-connection-request";
export import DeleteConnectionRequest = DeleteConnectionRequest.DeleteConnectionRequest;
import * as DeleteConnectionValidationRequest from "./delete-connection-validation-request";
export import DeleteConnectionValidationRequest = DeleteConnectionValidationRequest.DeleteConnectionValidationRequest;
import * as DeleteCopyObjectRequestRequest from "./delete-copy-object-request-request";
export import DeleteCopyObjectRequestRequest = DeleteCopyObjectRequestRequest.DeleteCopyObjectRequestRequest;
import * as DeleteDataAssetRequest from "./delete-data-asset-request";
export import DeleteDataAssetRequest = DeleteDataAssetRequest.DeleteDataAssetRequest;
import * as DeleteDataFlowRequest from "./delete-data-flow-request";
export import DeleteDataFlowRequest = DeleteDataFlowRequest.DeleteDataFlowRequest;
import * as DeleteDataFlowValidationRequest from "./delete-data-flow-validation-request";
export import DeleteDataFlowValidationRequest = DeleteDataFlowValidationRequest.DeleteDataFlowValidationRequest;
import * as DeleteDisApplicationRequest from "./delete-dis-application-request";
export import DeleteDisApplicationRequest = DeleteDisApplicationRequest.DeleteDisApplicationRequest;
import * as DeleteDisApplicationDetailedDescriptionRequest from "./delete-dis-application-detailed-description-request";
export import DeleteDisApplicationDetailedDescriptionRequest = DeleteDisApplicationDetailedDescriptionRequest.DeleteDisApplicationDetailedDescriptionRequest;
import * as DeleteExportRequestRequest from "./delete-export-request-request";
export import DeleteExportRequestRequest = DeleteExportRequestRequest.DeleteExportRequestRequest;
import * as DeleteExternalPublicationRequest from "./delete-external-publication-request";
export import DeleteExternalPublicationRequest = DeleteExternalPublicationRequest.DeleteExternalPublicationRequest;
import * as DeleteExternalPublicationValidationRequest from "./delete-external-publication-validation-request";
export import DeleteExternalPublicationValidationRequest = DeleteExternalPublicationValidationRequest.DeleteExternalPublicationValidationRequest;
import * as DeleteFolderRequest from "./delete-folder-request";
export import DeleteFolderRequest = DeleteFolderRequest.DeleteFolderRequest;
import * as DeleteFunctionLibraryRequest from "./delete-function-library-request";
export import DeleteFunctionLibraryRequest = DeleteFunctionLibraryRequest.DeleteFunctionLibraryRequest;
import * as DeleteImportRequestRequest from "./delete-import-request-request";
export import DeleteImportRequestRequest = DeleteImportRequestRequest.DeleteImportRequestRequest;
import * as DeletePatchRequest from "./delete-patch-request";
export import DeletePatchRequest = DeletePatchRequest.DeletePatchRequest;
import * as DeletePipelineRequest from "./delete-pipeline-request";
export import DeletePipelineRequest = DeletePipelineRequest.DeletePipelineRequest;
import * as DeletePipelineValidationRequest from "./delete-pipeline-validation-request";
export import DeletePipelineValidationRequest = DeletePipelineValidationRequest.DeletePipelineValidationRequest;
import * as DeleteProjectRequest from "./delete-project-request";
export import DeleteProjectRequest = DeleteProjectRequest.DeleteProjectRequest;
import * as DeleteScheduleRequest from "./delete-schedule-request";
export import DeleteScheduleRequest = DeleteScheduleRequest.DeleteScheduleRequest;
import * as DeleteTaskRequest from "./delete-task-request";
export import DeleteTaskRequest = DeleteTaskRequest.DeleteTaskRequest;
import * as DeleteTaskRunRequest from "./delete-task-run-request";
export import DeleteTaskRunRequest = DeleteTaskRunRequest.DeleteTaskRunRequest;
import * as DeleteTaskScheduleRequest from "./delete-task-schedule-request";
export import DeleteTaskScheduleRequest = DeleteTaskScheduleRequest.DeleteTaskScheduleRequest;
import * as DeleteTaskValidationRequest from "./delete-task-validation-request";
export import DeleteTaskValidationRequest = DeleteTaskValidationRequest.DeleteTaskValidationRequest;
import * as DeleteUserDefinedFunctionRequest from "./delete-user-defined-function-request";
export import DeleteUserDefinedFunctionRequest = DeleteUserDefinedFunctionRequest.DeleteUserDefinedFunctionRequest;
import * as DeleteUserDefinedFunctionValidationRequest from "./delete-user-defined-function-validation-request";
export import DeleteUserDefinedFunctionValidationRequest = DeleteUserDefinedFunctionValidationRequest.DeleteUserDefinedFunctionValidationRequest;
import * as DeleteWorkspaceRequest from "./delete-workspace-request";
export import DeleteWorkspaceRequest = DeleteWorkspaceRequest.DeleteWorkspaceRequest;
import * as GetApplicationRequest from "./get-application-request";
export import GetApplicationRequest = GetApplicationRequest.GetApplicationRequest;
import * as GetApplicationDetailedDescriptionRequest from "./get-application-detailed-description-request";
export import GetApplicationDetailedDescriptionRequest = GetApplicationDetailedDescriptionRequest.GetApplicationDetailedDescriptionRequest;
import * as GetCompositeStateRequest from "./get-composite-state-request";
export import GetCompositeStateRequest = GetCompositeStateRequest.GetCompositeStateRequest;
import * as GetConnectionRequest from "./get-connection-request";
export import GetConnectionRequest = GetConnectionRequest.GetConnectionRequest;
import * as GetConnectionValidationRequest from "./get-connection-validation-request";
export import GetConnectionValidationRequest = GetConnectionValidationRequest.GetConnectionValidationRequest;
import * as GetCopyObjectRequestRequest from "./get-copy-object-request-request";
export import GetCopyObjectRequestRequest = GetCopyObjectRequestRequest.GetCopyObjectRequestRequest;
import * as GetCountStatisticRequest from "./get-count-statistic-request";
export import GetCountStatisticRequest = GetCountStatisticRequest.GetCountStatisticRequest;
import * as GetDataAssetRequest from "./get-data-asset-request";
export import GetDataAssetRequest = GetDataAssetRequest.GetDataAssetRequest;
import * as GetDataEntityRequest from "./get-data-entity-request";
export import GetDataEntityRequest = GetDataEntityRequest.GetDataEntityRequest;
import * as GetDataFlowRequest from "./get-data-flow-request";
export import GetDataFlowRequest = GetDataFlowRequest.GetDataFlowRequest;
import * as GetDataFlowValidationRequest from "./get-data-flow-validation-request";
export import GetDataFlowValidationRequest = GetDataFlowValidationRequest.GetDataFlowValidationRequest;
import * as GetDependentObjectRequest from "./get-dependent-object-request";
export import GetDependentObjectRequest = GetDependentObjectRequest.GetDependentObjectRequest;
import * as GetDisApplicationRequest from "./get-dis-application-request";
export import GetDisApplicationRequest = GetDisApplicationRequest.GetDisApplicationRequest;
import * as GetDisApplicationDetailedDescriptionRequest from "./get-dis-application-detailed-description-request";
export import GetDisApplicationDetailedDescriptionRequest = GetDisApplicationDetailedDescriptionRequest.GetDisApplicationDetailedDescriptionRequest;
import * as GetExportRequestRequest from "./get-export-request-request";
export import GetExportRequestRequest = GetExportRequestRequest.GetExportRequestRequest;
import * as GetExternalPublicationRequest from "./get-external-publication-request";
export import GetExternalPublicationRequest = GetExternalPublicationRequest.GetExternalPublicationRequest;
import * as GetExternalPublicationValidationRequest from "./get-external-publication-validation-request";
export import GetExternalPublicationValidationRequest = GetExternalPublicationValidationRequest.GetExternalPublicationValidationRequest;
import * as GetFolderRequest from "./get-folder-request";
export import GetFolderRequest = GetFolderRequest.GetFolderRequest;
import * as GetFunctionLibraryRequest from "./get-function-library-request";
export import GetFunctionLibraryRequest = GetFunctionLibraryRequest.GetFunctionLibraryRequest;
import * as GetImportRequestRequest from "./get-import-request-request";
export import GetImportRequestRequest = GetImportRequestRequest.GetImportRequestRequest;
import * as GetPatchRequest from "./get-patch-request";
export import GetPatchRequest = GetPatchRequest.GetPatchRequest;
import * as GetPipelineRequest from "./get-pipeline-request";
export import GetPipelineRequest = GetPipelineRequest.GetPipelineRequest;
import * as GetPipelineValidationRequest from "./get-pipeline-validation-request";
export import GetPipelineValidationRequest = GetPipelineValidationRequest.GetPipelineValidationRequest;
import * as GetProjectRequest from "./get-project-request";
export import GetProjectRequest = GetProjectRequest.GetProjectRequest;
import * as GetPublishedObjectRequest from "./get-published-object-request";
export import GetPublishedObjectRequest = GetPublishedObjectRequest.GetPublishedObjectRequest;
import * as GetReferenceRequest from "./get-reference-request";
export import GetReferenceRequest = GetReferenceRequest.GetReferenceRequest;
import * as GetRuntimeOperatorRequest from "./get-runtime-operator-request";
export import GetRuntimeOperatorRequest = GetRuntimeOperatorRequest.GetRuntimeOperatorRequest;
import * as GetRuntimePipelineRequest from "./get-runtime-pipeline-request";
export import GetRuntimePipelineRequest = GetRuntimePipelineRequest.GetRuntimePipelineRequest;
import * as GetScheduleRequest from "./get-schedule-request";
export import GetScheduleRequest = GetScheduleRequest.GetScheduleRequest;
import * as GetSchemaRequest from "./get-schema-request";
export import GetSchemaRequest = GetSchemaRequest.GetSchemaRequest;
import * as GetTaskRequest from "./get-task-request";
export import GetTaskRequest = GetTaskRequest.GetTaskRequest;
import * as GetTaskRunRequest from "./get-task-run-request";
export import GetTaskRunRequest = GetTaskRunRequest.GetTaskRunRequest;
import * as GetTaskScheduleRequest from "./get-task-schedule-request";
export import GetTaskScheduleRequest = GetTaskScheduleRequest.GetTaskScheduleRequest;
import * as GetTaskValidationRequest from "./get-task-validation-request";
export import GetTaskValidationRequest = GetTaskValidationRequest.GetTaskValidationRequest;
import * as GetTemplateRequest from "./get-template-request";
export import GetTemplateRequest = GetTemplateRequest.GetTemplateRequest;
import * as GetUserDefinedFunctionRequest from "./get-user-defined-function-request";
export import GetUserDefinedFunctionRequest = GetUserDefinedFunctionRequest.GetUserDefinedFunctionRequest;
import * as GetUserDefinedFunctionValidationRequest from "./get-user-defined-function-validation-request";
export import GetUserDefinedFunctionValidationRequest = GetUserDefinedFunctionValidationRequest.GetUserDefinedFunctionValidationRequest;
import * as GetWorkRequestRequest from "./get-work-request-request";
export import GetWorkRequestRequest = GetWorkRequestRequest.GetWorkRequestRequest;
import * as GetWorkspaceRequest from "./get-workspace-request";
export import GetWorkspaceRequest = GetWorkspaceRequest.GetWorkspaceRequest;
import * as ListApplicationsRequest from "./list-applications-request";
export import ListApplicationsRequest = ListApplicationsRequest.ListApplicationsRequest;
import * as ListConnectionValidationsRequest from "./list-connection-validations-request";
export import ListConnectionValidationsRequest = ListConnectionValidationsRequest.ListConnectionValidationsRequest;
import * as ListConnectionsRequest from "./list-connections-request";
export import ListConnectionsRequest = ListConnectionsRequest.ListConnectionsRequest;
import * as ListCopyObjectRequestsRequest from "./list-copy-object-requests-request";
export import ListCopyObjectRequestsRequest = ListCopyObjectRequestsRequest.ListCopyObjectRequestsRequest;
import * as ListDataAssetsRequest from "./list-data-assets-request";
export import ListDataAssetsRequest = ListDataAssetsRequest.ListDataAssetsRequest;
import * as ListDataEntitiesRequest from "./list-data-entities-request";
export import ListDataEntitiesRequest = ListDataEntitiesRequest.ListDataEntitiesRequest;
import * as ListDataFlowValidationsRequest from "./list-data-flow-validations-request";
export import ListDataFlowValidationsRequest = ListDataFlowValidationsRequest.ListDataFlowValidationsRequest;
import * as ListDataFlowsRequest from "./list-data-flows-request";
export import ListDataFlowsRequest = ListDataFlowsRequest.ListDataFlowsRequest;
import * as ListDependentObjectsRequest from "./list-dependent-objects-request";
export import ListDependentObjectsRequest = ListDependentObjectsRequest.ListDependentObjectsRequest;
import * as ListDisApplicationTaskRunLineagesRequest from "./list-dis-application-task-run-lineages-request";
export import ListDisApplicationTaskRunLineagesRequest = ListDisApplicationTaskRunLineagesRequest.ListDisApplicationTaskRunLineagesRequest;
import * as ListDisApplicationsRequest from "./list-dis-applications-request";
export import ListDisApplicationsRequest = ListDisApplicationsRequest.ListDisApplicationsRequest;
import * as ListExportRequestsRequest from "./list-export-requests-request";
export import ListExportRequestsRequest = ListExportRequestsRequest.ListExportRequestsRequest;
import * as ListExternalPublicationValidationsRequest from "./list-external-publication-validations-request";
export import ListExternalPublicationValidationsRequest = ListExternalPublicationValidationsRequest.ListExternalPublicationValidationsRequest;
import * as ListExternalPublicationsRequest from "./list-external-publications-request";
export import ListExternalPublicationsRequest = ListExternalPublicationsRequest.ListExternalPublicationsRequest;
import * as ListFoldersRequest from "./list-folders-request";
export import ListFoldersRequest = ListFoldersRequest.ListFoldersRequest;
import * as ListFunctionLibrariesRequest from "./list-function-libraries-request";
export import ListFunctionLibrariesRequest = ListFunctionLibrariesRequest.ListFunctionLibrariesRequest;
import * as ListImportRequestsRequest from "./list-import-requests-request";
export import ListImportRequestsRequest = ListImportRequestsRequest.ListImportRequestsRequest;
import * as ListPatchChangesRequest from "./list-patch-changes-request";
export import ListPatchChangesRequest = ListPatchChangesRequest.ListPatchChangesRequest;
import * as ListPatchesRequest from "./list-patches-request";
export import ListPatchesRequest = ListPatchesRequest.ListPatchesRequest;
import * as ListPipelineValidationsRequest from "./list-pipeline-validations-request";
export import ListPipelineValidationsRequest = ListPipelineValidationsRequest.ListPipelineValidationsRequest;
import * as ListPipelinesRequest from "./list-pipelines-request";
export import ListPipelinesRequest = ListPipelinesRequest.ListPipelinesRequest;
import * as ListProjectsRequest from "./list-projects-request";
export import ListProjectsRequest = ListProjectsRequest.ListProjectsRequest;
import * as ListPublishedObjectsRequest from "./list-published-objects-request";
export import ListPublishedObjectsRequest = ListPublishedObjectsRequest.ListPublishedObjectsRequest;
import * as ListReferencesRequest from "./list-references-request";
export import ListReferencesRequest = ListReferencesRequest.ListReferencesRequest;
import * as ListRuntimeOperatorsRequest from "./list-runtime-operators-request";
export import ListRuntimeOperatorsRequest = ListRuntimeOperatorsRequest.ListRuntimeOperatorsRequest;
import * as ListRuntimePipelinesRequest from "./list-runtime-pipelines-request";
export import ListRuntimePipelinesRequest = ListRuntimePipelinesRequest.ListRuntimePipelinesRequest;
import * as ListSchedulesRequest from "./list-schedules-request";
export import ListSchedulesRequest = ListSchedulesRequest.ListSchedulesRequest;
import * as ListSchemasRequest from "./list-schemas-request";
export import ListSchemasRequest = ListSchemasRequest.ListSchemasRequest;
import * as ListTaskRunLineagesRequest from "./list-task-run-lineages-request";
export import ListTaskRunLineagesRequest = ListTaskRunLineagesRequest.ListTaskRunLineagesRequest;
import * as ListTaskRunLogsRequest from "./list-task-run-logs-request";
export import ListTaskRunLogsRequest = ListTaskRunLogsRequest.ListTaskRunLogsRequest;
import * as ListTaskRunsRequest from "./list-task-runs-request";
export import ListTaskRunsRequest = ListTaskRunsRequest.ListTaskRunsRequest;
import * as ListTaskSchedulesRequest from "./list-task-schedules-request";
export import ListTaskSchedulesRequest = ListTaskSchedulesRequest.ListTaskSchedulesRequest;
import * as ListTaskValidationsRequest from "./list-task-validations-request";
export import ListTaskValidationsRequest = ListTaskValidationsRequest.ListTaskValidationsRequest;
import * as ListTasksRequest from "./list-tasks-request";
export import ListTasksRequest = ListTasksRequest.ListTasksRequest;
import * as ListTemplatesRequest from "./list-templates-request";
export import ListTemplatesRequest = ListTemplatesRequest.ListTemplatesRequest;
import * as ListUserDefinedFunctionValidationsRequest from "./list-user-defined-function-validations-request";
export import ListUserDefinedFunctionValidationsRequest = ListUserDefinedFunctionValidationsRequest.ListUserDefinedFunctionValidationsRequest;
import * as ListUserDefinedFunctionsRequest from "./list-user-defined-functions-request";
export import ListUserDefinedFunctionsRequest = ListUserDefinedFunctionsRequest.ListUserDefinedFunctionsRequest;
import * as ListWorkRequestErrorsRequest from "./list-work-request-errors-request";
export import ListWorkRequestErrorsRequest = ListWorkRequestErrorsRequest.ListWorkRequestErrorsRequest;
import * as ListWorkRequestLogsRequest from "./list-work-request-logs-request";
export import ListWorkRequestLogsRequest = ListWorkRequestLogsRequest.ListWorkRequestLogsRequest;
import * as ListWorkRequestsRequest from "./list-work-requests-request";
export import ListWorkRequestsRequest = ListWorkRequestsRequest.ListWorkRequestsRequest;
import * as ListWorkspacesRequest from "./list-workspaces-request";
export import ListWorkspacesRequest = ListWorkspacesRequest.ListWorkspacesRequest;
import * as StartWorkspaceRequest from "./start-workspace-request";
export import StartWorkspaceRequest = StartWorkspaceRequest.StartWorkspaceRequest;
import * as StopWorkspaceRequest from "./stop-workspace-request";
export import StopWorkspaceRequest = StopWorkspaceRequest.StopWorkspaceRequest;
import * as UpdateApplicationRequest from "./update-application-request";
export import UpdateApplicationRequest = UpdateApplicationRequest.UpdateApplicationRequest;
import * as UpdateApplicationDetailedDescriptionRequest from "./update-application-detailed-description-request";
export import UpdateApplicationDetailedDescriptionRequest = UpdateApplicationDetailedDescriptionRequest.UpdateApplicationDetailedDescriptionRequest;
import * as UpdateConnectionRequest from "./update-connection-request";
export import UpdateConnectionRequest = UpdateConnectionRequest.UpdateConnectionRequest;
import * as UpdateCopyObjectRequestRequest from "./update-copy-object-request-request";
export import UpdateCopyObjectRequestRequest = UpdateCopyObjectRequestRequest.UpdateCopyObjectRequestRequest;
import * as UpdateDataAssetRequest from "./update-data-asset-request";
export import UpdateDataAssetRequest = UpdateDataAssetRequest.UpdateDataAssetRequest;
import * as UpdateDataFlowRequest from "./update-data-flow-request";
export import UpdateDataFlowRequest = UpdateDataFlowRequest.UpdateDataFlowRequest;
import * as UpdateDisApplicationRequest from "./update-dis-application-request";
export import UpdateDisApplicationRequest = UpdateDisApplicationRequest.UpdateDisApplicationRequest;
import * as UpdateDisApplicationDetailedDescriptionRequest from "./update-dis-application-detailed-description-request";
export import UpdateDisApplicationDetailedDescriptionRequest = UpdateDisApplicationDetailedDescriptionRequest.UpdateDisApplicationDetailedDescriptionRequest;
import * as UpdateExportRequestRequest from "./update-export-request-request";
export import UpdateExportRequestRequest = UpdateExportRequestRequest.UpdateExportRequestRequest;
import * as UpdateExternalPublicationRequest from "./update-external-publication-request";
export import UpdateExternalPublicationRequest = UpdateExternalPublicationRequest.UpdateExternalPublicationRequest;
import * as UpdateFolderRequest from "./update-folder-request";
export import UpdateFolderRequest = UpdateFolderRequest.UpdateFolderRequest;
import * as UpdateFunctionLibraryRequest from "./update-function-library-request";
export import UpdateFunctionLibraryRequest = UpdateFunctionLibraryRequest.UpdateFunctionLibraryRequest;
import * as UpdateImportRequestRequest from "./update-import-request-request";
export import UpdateImportRequestRequest = UpdateImportRequestRequest.UpdateImportRequestRequest;
import * as UpdatePipelineRequest from "./update-pipeline-request";
export import UpdatePipelineRequest = UpdatePipelineRequest.UpdatePipelineRequest;
import * as UpdateProjectRequest from "./update-project-request";
export import UpdateProjectRequest = UpdateProjectRequest.UpdateProjectRequest;
import * as UpdateReferenceRequest from "./update-reference-request";
export import UpdateReferenceRequest = UpdateReferenceRequest.UpdateReferenceRequest;
import * as UpdateScheduleRequest from "./update-schedule-request";
export import UpdateScheduleRequest = UpdateScheduleRequest.UpdateScheduleRequest;
import * as UpdateTaskRequest from "./update-task-request";
export import UpdateTaskRequest = UpdateTaskRequest.UpdateTaskRequest;
import * as UpdateTaskRunRequest from "./update-task-run-request";
export import UpdateTaskRunRequest = UpdateTaskRunRequest.UpdateTaskRunRequest;
import * as UpdateTaskScheduleRequest from "./update-task-schedule-request";
export import UpdateTaskScheduleRequest = UpdateTaskScheduleRequest.UpdateTaskScheduleRequest;
import * as UpdateUserDefinedFunctionRequest from "./update-user-defined-function-request";
export import UpdateUserDefinedFunctionRequest = UpdateUserDefinedFunctionRequest.UpdateUserDefinedFunctionRequest;
import * as UpdateWorkspaceRequest from "./update-workspace-request";
export import UpdateWorkspaceRequest = UpdateWorkspaceRequest.UpdateWorkspaceRequest;
