/**
 * Oracle Cloud Migrations API
 * A description of the Oracle Cloud Migrations API.
 * OpenAPI spec version: 20220919
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2025, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as CancelWorkRequestRequest from "./cancel-work-request-request";
export import CancelWorkRequestRequest = CancelWorkRequestRequest.CancelWorkRequestRequest;
import * as ChangeMigrationCompartmentRequest from "./change-migration-compartment-request";
export import ChangeMigrationCompartmentRequest = ChangeMigrationCompartmentRequest.ChangeMigrationCompartmentRequest;
import * as ChangeMigrationPlanCompartmentRequest from "./change-migration-plan-compartment-request";
export import ChangeMigrationPlanCompartmentRequest = ChangeMigrationPlanCompartmentRequest.ChangeMigrationPlanCompartmentRequest;
import * as ChangeReplicationScheduleCompartmentRequest from "./change-replication-schedule-compartment-request";
export import ChangeReplicationScheduleCompartmentRequest = ChangeReplicationScheduleCompartmentRequest.ChangeReplicationScheduleCompartmentRequest;
import * as CreateMigrationRequest from "./create-migration-request";
export import CreateMigrationRequest = CreateMigrationRequest.CreateMigrationRequest;
import * as CreateMigrationAssetRequest from "./create-migration-asset-request";
export import CreateMigrationAssetRequest = CreateMigrationAssetRequest.CreateMigrationAssetRequest;
import * as CreateMigrationPlanRequest from "./create-migration-plan-request";
export import CreateMigrationPlanRequest = CreateMigrationPlanRequest.CreateMigrationPlanRequest;
import * as CreateReplicationScheduleRequest from "./create-replication-schedule-request";
export import CreateReplicationScheduleRequest = CreateReplicationScheduleRequest.CreateReplicationScheduleRequest;
import * as CreateTargetAssetRequest from "./create-target-asset-request";
export import CreateTargetAssetRequest = CreateTargetAssetRequest.CreateTargetAssetRequest;
import * as DeleteMigrationRequest from "./delete-migration-request";
export import DeleteMigrationRequest = DeleteMigrationRequest.DeleteMigrationRequest;
import * as DeleteMigrationAssetRequest from "./delete-migration-asset-request";
export import DeleteMigrationAssetRequest = DeleteMigrationAssetRequest.DeleteMigrationAssetRequest;
import * as DeleteMigrationPlanRequest from "./delete-migration-plan-request";
export import DeleteMigrationPlanRequest = DeleteMigrationPlanRequest.DeleteMigrationPlanRequest;
import * as DeleteReplicationScheduleRequest from "./delete-replication-schedule-request";
export import DeleteReplicationScheduleRequest = DeleteReplicationScheduleRequest.DeleteReplicationScheduleRequest;
import * as DeleteTargetAssetRequest from "./delete-target-asset-request";
export import DeleteTargetAssetRequest = DeleteTargetAssetRequest.DeleteTargetAssetRequest;
import * as ExecuteMigrationPlanRequest from "./execute-migration-plan-request";
export import ExecuteMigrationPlanRequest = ExecuteMigrationPlanRequest.ExecuteMigrationPlanRequest;
import * as ExportMigrationPlanRequest from "./export-migration-plan-request";
export import ExportMigrationPlanRequest = ExportMigrationPlanRequest.ExportMigrationPlanRequest;
import * as GetMigrationRequest from "./get-migration-request";
export import GetMigrationRequest = GetMigrationRequest.GetMigrationRequest;
import * as GetMigrationAssetRequest from "./get-migration-asset-request";
export import GetMigrationAssetRequest = GetMigrationAssetRequest.GetMigrationAssetRequest;
import * as GetMigrationPlanRequest from "./get-migration-plan-request";
export import GetMigrationPlanRequest = GetMigrationPlanRequest.GetMigrationPlanRequest;
import * as GetReplicationProgressRequest from "./get-replication-progress-request";
export import GetReplicationProgressRequest = GetReplicationProgressRequest.GetReplicationProgressRequest;
import * as GetReplicationScheduleRequest from "./get-replication-schedule-request";
export import GetReplicationScheduleRequest = GetReplicationScheduleRequest.GetReplicationScheduleRequest;
import * as GetTargetAssetRequest from "./get-target-asset-request";
export import GetTargetAssetRequest = GetTargetAssetRequest.GetTargetAssetRequest;
import * as GetWorkRequestRequest from "./get-work-request-request";
export import GetWorkRequestRequest = GetWorkRequestRequest.GetWorkRequestRequest;
import * as ImportMigrationPlanRequest from "./import-migration-plan-request";
export import ImportMigrationPlanRequest = ImportMigrationPlanRequest.ImportMigrationPlanRequest;
import * as ListAvailableShapesRequest from "./list-available-shapes-request";
export import ListAvailableShapesRequest = ListAvailableShapesRequest.ListAvailableShapesRequest;
import * as ListMigrationAssetsRequest from "./list-migration-assets-request";
export import ListMigrationAssetsRequest = ListMigrationAssetsRequest.ListMigrationAssetsRequest;
import * as ListMigrationPlansRequest from "./list-migration-plans-request";
export import ListMigrationPlansRequest = ListMigrationPlansRequest.ListMigrationPlansRequest;
import * as ListMigrationsRequest from "./list-migrations-request";
export import ListMigrationsRequest = ListMigrationsRequest.ListMigrationsRequest;
import * as ListReplicationSchedulesRequest from "./list-replication-schedules-request";
export import ListReplicationSchedulesRequest = ListReplicationSchedulesRequest.ListReplicationSchedulesRequest;
import * as ListTargetAssetsRequest from "./list-target-assets-request";
export import ListTargetAssetsRequest = ListTargetAssetsRequest.ListTargetAssetsRequest;
import * as ListWorkRequestErrorsRequest from "./list-work-request-errors-request";
export import ListWorkRequestErrorsRequest = ListWorkRequestErrorsRequest.ListWorkRequestErrorsRequest;
import * as ListWorkRequestLogsRequest from "./list-work-request-logs-request";
export import ListWorkRequestLogsRequest = ListWorkRequestLogsRequest.ListWorkRequestLogsRequest;
import * as ListWorkRequestsRequest from "./list-work-requests-request";
export import ListWorkRequestsRequest = ListWorkRequestsRequest.ListWorkRequestsRequest;
import * as RefreshMigrationRequest from "./refresh-migration-request";
export import RefreshMigrationRequest = RefreshMigrationRequest.RefreshMigrationRequest;
import * as RefreshMigrationAssetRequest from "./refresh-migration-asset-request";
export import RefreshMigrationAssetRequest = RefreshMigrationAssetRequest.RefreshMigrationAssetRequest;
import * as RefreshMigrationPlanRequest from "./refresh-migration-plan-request";
export import RefreshMigrationPlanRequest = RefreshMigrationPlanRequest.RefreshMigrationPlanRequest;
import * as StartAssetReplicationRequest from "./start-asset-replication-request";
export import StartAssetReplicationRequest = StartAssetReplicationRequest.StartAssetReplicationRequest;
import * as StartMigrationReplicationRequest from "./start-migration-replication-request";
export import StartMigrationReplicationRequest = StartMigrationReplicationRequest.StartMigrationReplicationRequest;
import * as UpdateMigrationRequest from "./update-migration-request";
export import UpdateMigrationRequest = UpdateMigrationRequest.UpdateMigrationRequest;
import * as UpdateMigrationAssetRequest from "./update-migration-asset-request";
export import UpdateMigrationAssetRequest = UpdateMigrationAssetRequest.UpdateMigrationAssetRequest;
import * as UpdateMigrationPlanRequest from "./update-migration-plan-request";
export import UpdateMigrationPlanRequest = UpdateMigrationPlanRequest.UpdateMigrationPlanRequest;
import * as UpdateReplicationScheduleRequest from "./update-replication-schedule-request";
export import UpdateReplicationScheduleRequest = UpdateReplicationScheduleRequest.UpdateReplicationScheduleRequest;
import * as UpdateTargetAssetRequest from "./update-target-asset-request";
export import UpdateTargetAssetRequest = UpdateTargetAssetRequest.UpdateTargetAssetRequest;
