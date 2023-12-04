/**
 * Java Management Service Download API
 * The APIs for the download engine of the Java Management Service.
 * OpenAPI spec version: 20230601
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as ActionType from "./action-type";
export import ActionType = ActionType.ActionType;
import * as AggregationSortBy from "./aggregation-sort-by";
export import AggregationSortBy = AggregationSortBy.AggregationSortBy;
import * as ChecksumType from "./checksum-type";
export import ChecksumType = ChecksumType.ChecksumType;
import * as CreateJavaDownloadReportDetails from "./create-java-download-report-details";
export import CreateJavaDownloadReportDetails = CreateJavaDownloadReportDetails.CreateJavaDownloadReportDetails;
import * as CreateJavaDownloadTokenDetails from "./create-java-download-token-details";
export import CreateJavaDownloadTokenDetails = CreateJavaDownloadTokenDetails.CreateJavaDownloadTokenDetails;
import * as CreateJavaLicenseAcceptanceRecordDetails from "./create-java-license-acceptance-record-details";
export import CreateJavaLicenseAcceptanceRecordDetails = CreateJavaLicenseAcceptanceRecordDetails.CreateJavaLicenseAcceptanceRecordDetails;
import * as DownloadUrl from "./download-url";
export import DownloadUrl = DownloadUrl.DownloadUrl;
import * as DownloadUrlType from "./download-url-type";
export import DownloadUrlType = DownloadUrlType.DownloadUrlType;
import * as GenerateArtifactDownloadUrlDetails from "./generate-artifact-download-url-details";
export import GenerateArtifactDownloadUrlDetails = GenerateArtifactDownloadUrlDetails.GenerateArtifactDownloadUrlDetails;
import * as JavaDownloadCountAggregation from "./java-download-count-aggregation";
export import JavaDownloadCountAggregation = JavaDownloadCountAggregation.JavaDownloadCountAggregation;
import * as JavaDownloadCountAggregationCollection from "./java-download-count-aggregation-collection";
export import JavaDownloadCountAggregationCollection = JavaDownloadCountAggregationCollection.JavaDownloadCountAggregationCollection;
import * as JavaDownloadCountAggregationType from "./java-download-count-aggregation-type";
export import JavaDownloadCountAggregationType = JavaDownloadCountAggregationType.JavaDownloadCountAggregationType;
import * as JavaDownloadRecord from "./java-download-record";
export import JavaDownloadRecord = JavaDownloadRecord.JavaDownloadRecord;
import * as JavaDownloadRecordCollection from "./java-download-record-collection";
export import JavaDownloadRecordCollection = JavaDownloadRecordCollection.JavaDownloadRecordCollection;
import * as JavaDownloadRecordSortBy from "./java-download-record-sort-by";
export import JavaDownloadRecordSortBy = JavaDownloadRecordSortBy.JavaDownloadRecordSortBy;
import * as JavaDownloadRecordSummary from "./java-download-record-summary";
export import JavaDownloadRecordSummary = JavaDownloadRecordSummary.JavaDownloadRecordSummary;
import * as JavaDownloadReport from "./java-download-report";
export import JavaDownloadReport = JavaDownloadReport.JavaDownloadReport;
import * as JavaDownloadReportCollection from "./java-download-report-collection";
export import JavaDownloadReportCollection = JavaDownloadReportCollection.JavaDownloadReportCollection;
import * as JavaDownloadReportFormat from "./java-download-report-format";
export import JavaDownloadReportFormat = JavaDownloadReportFormat.JavaDownloadReportFormat;
import * as JavaDownloadReportSortBy from "./java-download-report-sort-by";
export import JavaDownloadReportSortBy = JavaDownloadReportSortBy.JavaDownloadReportSortBy;
import * as JavaDownloadReportSummary from "./java-download-report-summary";
export import JavaDownloadReportSummary = JavaDownloadReportSummary.JavaDownloadReportSummary;
import * as JavaDownloadToken from "./java-download-token";
export import JavaDownloadToken = JavaDownloadToken.JavaDownloadToken;
import * as JavaDownloadTokenCollection from "./java-download-token-collection";
export import JavaDownloadTokenCollection = JavaDownloadTokenCollection.JavaDownloadTokenCollection;
import * as JavaDownloadTokenSummary from "./java-download-token-summary";
export import JavaDownloadTokenSummary = JavaDownloadTokenSummary.JavaDownloadTokenSummary;
import * as JavaLicense from "./java-license";
export import JavaLicense = JavaLicense.JavaLicense;
import * as JavaLicenseAcceptanceRecord from "./java-license-acceptance-record";
export import JavaLicenseAcceptanceRecord = JavaLicenseAcceptanceRecord.JavaLicenseAcceptanceRecord;
import * as JavaLicenseAcceptanceRecordCollection from "./java-license-acceptance-record-collection";
export import JavaLicenseAcceptanceRecordCollection = JavaLicenseAcceptanceRecordCollection.JavaLicenseAcceptanceRecordCollection;
import * as JavaLicenseAcceptanceRecordSummary from "./java-license-acceptance-record-summary";
export import JavaLicenseAcceptanceRecordSummary = JavaLicenseAcceptanceRecordSummary.JavaLicenseAcceptanceRecordSummary;
import * as JavaLicenseCollection from "./java-license-collection";
export import JavaLicenseCollection = JavaLicenseCollection.JavaLicenseCollection;
import * as JavaLicenseSummary from "./java-license-summary";
export import JavaLicenseSummary = JavaLicenseSummary.JavaLicenseSummary;
import * as LicenseAcceptanceSortBy from "./license-acceptance-sort-by";
export import LicenseAcceptanceSortBy = LicenseAcceptanceSortBy.LicenseAcceptanceSortBy;
import * as LicenseAcceptanceStatus from "./license-acceptance-status";
export import LicenseAcceptanceStatus = LicenseAcceptanceStatus.LicenseAcceptanceStatus;
import * as LicenseSortBy from "./license-sort-by";
export import LicenseSortBy = LicenseSortBy.LicenseSortBy;
import * as LicenseType from "./license-type";
export import LicenseType = LicenseType.LicenseType;
import * as LifecycleState from "./lifecycle-state";
export import LifecycleState = LifecycleState.LifecycleState;
import * as OperationStatus from "./operation-status";
export import OperationStatus = OperationStatus.OperationStatus;
import * as OperationType from "./operation-type";
export import OperationType = OperationType.OperationType;
import * as Principal from "./principal";
export import Principal = Principal.Principal;
import * as RequestSummarizedJavaDownloadCountsDetails from "./request-summarized-java-download-counts-details";
export import RequestSummarizedJavaDownloadCountsDetails = RequestSummarizedJavaDownloadCountsDetails.RequestSummarizedJavaDownloadCountsDetails;
import * as SortOrder from "./sort-order";
export import SortOrder = SortOrder.SortOrder;
import * as TokenLifecycleDetails from "./token-lifecycle-details";
export import TokenLifecycleDetails = TokenLifecycleDetails.TokenLifecycleDetails;
import * as TokenSortBy from "./token-sort-by";
export import TokenSortBy = TokenSortBy.TokenSortBy;
import * as UpdateJavaDownloadTokenDetails from "./update-java-download-token-details";
export import UpdateJavaDownloadTokenDetails = UpdateJavaDownloadTokenDetails.UpdateJavaDownloadTokenDetails;
import * as UpdateJavaLicenseAcceptanceRecordDetails from "./update-java-license-acceptance-record-details";
export import UpdateJavaLicenseAcceptanceRecordDetails = UpdateJavaLicenseAcceptanceRecordDetails.UpdateJavaLicenseAcceptanceRecordDetails;
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
import * as WorkRequestSummary from "./work-request-summary";
export import WorkRequestSummary = WorkRequestSummary.WorkRequestSummary;
import * as WorkRequestSummaryCollection from "./work-request-summary-collection";
export import WorkRequestSummaryCollection = WorkRequestSummaryCollection.WorkRequestSummaryCollection;