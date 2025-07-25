/**
 * NoSQL Database API
 * The control plane API for NoSQL Database Cloud Service HTTPS
provides endpoints to perform NDCS operations, including creation
and deletion of tables and indexes; population and access of data
in tables; and access of table usage metrics.

 * OpenAPI spec version: 20190828
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2025, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as ChangeTableCompartmentDetails from "./change-table-compartment-details";
export import ChangeTableCompartmentDetails = ChangeTableCompartmentDetails.ChangeTableCompartmentDetails;
import * as Column from "./column";
export import Column = Column.Column;
import * as Configuration from "./configuration";
export import Configuration = Configuration.Configuration;
import * as CreateIndexDetails from "./create-index-details";
export import CreateIndexDetails = CreateIndexDetails.CreateIndexDetails;
import * as CreateReplicaDetails from "./create-replica-details";
export import CreateReplicaDetails = CreateReplicaDetails.CreateReplicaDetails;
import * as CreateTableDetails from "./create-table-details";
export import CreateTableDetails = CreateTableDetails.CreateTableDetails;
import * as DeleteRowResult from "./delete-row-result";
export import DeleteRowResult = DeleteRowResult.DeleteRowResult;
import * as Identity from "./identity";
export import Identity = Identity.Identity;
import * as Index from "./model-index";
export import Index = Index.Index;
import * as IndexCollection from "./index-collection";
export import IndexCollection = IndexCollection.IndexCollection;
import * as IndexKey from "./index-key";
export import IndexKey = IndexKey.IndexKey;
import * as IndexSummary from "./index-summary";
export import IndexSummary = IndexSummary.IndexSummary;
import * as KmsKey from "./kms-key";
export import KmsKey = KmsKey.KmsKey;
import * as PreparedStatement from "./prepared-statement";
export import PreparedStatement = PreparedStatement.PreparedStatement;
import * as QueryDetails from "./query-details";
export import QueryDetails = QueryDetails.QueryDetails;
import * as QueryResultCollection from "./query-result-collection";
export import QueryResultCollection = QueryResultCollection.QueryResultCollection;
import * as Replica from "./replica";
export import Replica = Replica.Replica;
import * as RequestUsage from "./request-usage";
export import RequestUsage = RequestUsage.RequestUsage;
import * as Row from "./row";
export import Row = Row.Row;
import * as Schema from "./schema";
export import Schema = Schema.Schema;
import * as StatementSummary from "./statement-summary";
export import StatementSummary = StatementSummary.StatementSummary;
import * as Table from "./table";
export import Table = Table.Table;
import * as TableCollection from "./table-collection";
export import TableCollection = TableCollection.TableCollection;
import * as TableLimits from "./table-limits";
export import TableLimits = TableLimits.TableLimits;
import * as TableSummary from "./table-summary";
export import TableSummary = TableSummary.TableSummary;
import * as TableUsageCollection from "./table-usage-collection";
export import TableUsageCollection = TableUsageCollection.TableUsageCollection;
import * as TableUsageSummary from "./table-usage-summary";
export import TableUsageSummary = TableUsageSummary.TableUsageSummary;
import * as UpdateConfigurationDetails from "./update-configuration-details";
export import UpdateConfigurationDetails = UpdateConfigurationDetails.UpdateConfigurationDetails;
import * as UpdateRowDetails from "./update-row-details";
export import UpdateRowDetails = UpdateRowDetails.UpdateRowDetails;
import * as UpdateRowResult from "./update-row-result";
export import UpdateRowResult = UpdateRowResult.UpdateRowResult;
import * as UpdateTableDetails from "./update-table-details";
export import UpdateTableDetails = UpdateTableDetails.UpdateTableDetails;
import * as WorkRequest from "./work-request";
export import WorkRequest = WorkRequest.WorkRequest;
import * as WorkRequestCollection from "./work-request-collection";
export import WorkRequestCollection = WorkRequestCollection.WorkRequestCollection;
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
import * as WorkRequestSummary from "./work-request-summary";
export import WorkRequestSummary = WorkRequestSummary.WorkRequestSummary;

import * as HostedConfiguration from "./hosted-configuration";
export import HostedConfiguration = HostedConfiguration.HostedConfiguration;
import * as MultiTenancyConfiguration from "./multi-tenancy-configuration";
export import MultiTenancyConfiguration = MultiTenancyConfiguration.MultiTenancyConfiguration;
import * as UpdateHostedConfigurationDetails from "./update-hosted-configuration-details";
export import UpdateHostedConfigurationDetails = UpdateHostedConfigurationDetails.UpdateHostedConfigurationDetails;
import * as UpdateMultiTenancyConfigurationDetails from "./update-multi-tenancy-configuration-details";
export import UpdateMultiTenancyConfigurationDetails = UpdateMultiTenancyConfigurationDetails.UpdateMultiTenancyConfigurationDetails;
