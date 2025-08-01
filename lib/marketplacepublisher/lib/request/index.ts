/**
 * MarketplacePublisherService API
 * Use the Marketplace Publisher API to manage the publishing of applications in Oracle Cloud Infrastructure Marketplace.
 * OpenAPI spec version: 20241201
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2025, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as ActivateTermVersionRequest from "./activate-term-version-request";
export import ActivateTermVersionRequest = ActivateTermVersionRequest.ActivateTermVersionRequest;
import * as CancelWorkRequestRequest from "./cancel-work-request-request";
export import CancelWorkRequestRequest = CancelWorkRequestRequest.CancelWorkRequestRequest;
import * as CascadingDeleteListingRequest from "./cascading-delete-listing-request";
export import CascadingDeleteListingRequest = CascadingDeleteListingRequest.CascadingDeleteListingRequest;
import * as CascadingDeleteListingRevisionRequest from "./cascading-delete-listing-revision-request";
export import CascadingDeleteListingRevisionRequest = CascadingDeleteListingRevisionRequest.CascadingDeleteListingRevisionRequest;
import * as ChangeArtifactCompartmentRequest from "./change-artifact-compartment-request";
export import ChangeArtifactCompartmentRequest = ChangeArtifactCompartmentRequest.ChangeArtifactCompartmentRequest;
import * as ChangeListingCompartmentRequest from "./change-listing-compartment-request";
export import ChangeListingCompartmentRequest = ChangeListingCompartmentRequest.ChangeListingCompartmentRequest;
import * as ChangeListingRevisionToNewStatusRequest from "./change-listing-revision-to-new-status-request";
export import ChangeListingRevisionToNewStatusRequest = ChangeListingRevisionToNewStatusRequest.ChangeListingRevisionToNewStatusRequest;
import * as ChangeTermCompartmentRequest from "./change-term-compartment-request";
export import ChangeTermCompartmentRequest = ChangeTermCompartmentRequest.ChangeTermCompartmentRequest;
import * as CloneListingRevisionRequest from "./clone-listing-revision-request";
export import CloneListingRevisionRequest = CloneListingRevisionRequest.CloneListingRevisionRequest;
import * as CreateArtifactRequest from "./create-artifact-request";
export import CreateArtifactRequest = CreateArtifactRequest.CreateArtifactRequest;
import * as CreateListingRequest from "./create-listing-request";
export import CreateListingRequest = CreateListingRequest.CreateListingRequest;
import * as CreateListingRevisionRequest from "./create-listing-revision-request";
export import CreateListingRevisionRequest = CreateListingRevisionRequest.CreateListingRevisionRequest;
import * as CreateListingRevisionAttachmentRequest from "./create-listing-revision-attachment-request";
export import CreateListingRevisionAttachmentRequest = CreateListingRevisionAttachmentRequest.CreateListingRevisionAttachmentRequest;
import * as CreateListingRevisionNoteRequest from "./create-listing-revision-note-request";
export import CreateListingRevisionNoteRequest = CreateListingRevisionNoteRequest.CreateListingRevisionNoteRequest;
import * as CreateListingRevisionPackageRequest from "./create-listing-revision-package-request";
export import CreateListingRevisionPackageRequest = CreateListingRevisionPackageRequest.CreateListingRevisionPackageRequest;
import * as CreateTermRequest from "./create-term-request";
export import CreateTermRequest = CreateTermRequest.CreateTermRequest;
import * as CreateTermVersionRequest from "./create-term-version-request";
export import CreateTermVersionRequest = CreateTermVersionRequest.CreateTermVersionRequest;
import * as DeleteArtifactRequest from "./delete-artifact-request";
export import DeleteArtifactRequest = DeleteArtifactRequest.DeleteArtifactRequest;
import * as DeleteListingRequest from "./delete-listing-request";
export import DeleteListingRequest = DeleteListingRequest.DeleteListingRequest;
import * as DeleteListingRevisionRequest from "./delete-listing-revision-request";
export import DeleteListingRevisionRequest = DeleteListingRevisionRequest.DeleteListingRevisionRequest;
import * as DeleteListingRevisionAttachmentRequest from "./delete-listing-revision-attachment-request";
export import DeleteListingRevisionAttachmentRequest = DeleteListingRevisionAttachmentRequest.DeleteListingRevisionAttachmentRequest;
import * as DeleteListingRevisionNoteRequest from "./delete-listing-revision-note-request";
export import DeleteListingRevisionNoteRequest = DeleteListingRevisionNoteRequest.DeleteListingRevisionNoteRequest;
import * as DeleteListingRevisionPackageRequest from "./delete-listing-revision-package-request";
export import DeleteListingRevisionPackageRequest = DeleteListingRevisionPackageRequest.DeleteListingRevisionPackageRequest;
import * as DeleteTermRequest from "./delete-term-request";
export import DeleteTermRequest = DeleteTermRequest.DeleteTermRequest;
import * as DeleteTermVersionRequest from "./delete-term-version-request";
export import DeleteTermVersionRequest = DeleteTermVersionRequest.DeleteTermVersionRequest;
import * as GetArtifactRequest from "./get-artifact-request";
export import GetArtifactRequest = GetArtifactRequest.GetArtifactRequest;
import * as GetCategoryRequest from "./get-category-request";
export import GetCategoryRequest = GetCategoryRequest.GetCategoryRequest;
import * as GetLeadRequest from "./get-lead-request";
export import GetLeadRequest = GetLeadRequest.GetLeadRequest;
import * as GetListingRequest from "./get-listing-request";
export import GetListingRequest = GetListingRequest.GetListingRequest;
import * as GetListingRevisionRequest from "./get-listing-revision-request";
export import GetListingRevisionRequest = GetListingRevisionRequest.GetListingRevisionRequest;
import * as GetListingRevisionAttachmentRequest from "./get-listing-revision-attachment-request";
export import GetListingRevisionAttachmentRequest = GetListingRevisionAttachmentRequest.GetListingRevisionAttachmentRequest;
import * as GetListingRevisionAttachmentContentRequest from "./get-listing-revision-attachment-content-request";
export import GetListingRevisionAttachmentContentRequest = GetListingRevisionAttachmentContentRequest.GetListingRevisionAttachmentContentRequest;
import * as GetListingRevisionIconContentRequest from "./get-listing-revision-icon-content-request";
export import GetListingRevisionIconContentRequest = GetListingRevisionIconContentRequest.GetListingRevisionIconContentRequest;
import * as GetListingRevisionNoteRequest from "./get-listing-revision-note-request";
export import GetListingRevisionNoteRequest = GetListingRevisionNoteRequest.GetListingRevisionNoteRequest;
import * as GetListingRevisionPackageRequest from "./get-listing-revision-package-request";
export import GetListingRevisionPackageRequest = GetListingRevisionPackageRequest.GetListingRevisionPackageRequest;
import * as GetMarketRequest from "./get-market-request";
export import GetMarketRequest = GetMarketRequest.GetMarketRequest;
import * as GetProductRequest from "./get-product-request";
export import GetProductRequest = GetProductRequest.GetProductRequest;
import * as GetPublisherRequest from "./get-publisher-request";
export import GetPublisherRequest = GetPublisherRequest.GetPublisherRequest;
import * as GetSupportDocRequest from "./get-support-doc-request";
export import GetSupportDocRequest = GetSupportDocRequest.GetSupportDocRequest;
import * as GetSupportDocContentRequest from "./get-support-doc-content-request";
export import GetSupportDocContentRequest = GetSupportDocContentRequest.GetSupportDocContentRequest;
import * as GetTermRequest from "./get-term-request";
export import GetTermRequest = GetTermRequest.GetTermRequest;
import * as GetTermVersionRequest from "./get-term-version-request";
export import GetTermVersionRequest = GetTermVersionRequest.GetTermVersionRequest;
import * as GetTermVersionContentRequest from "./get-term-version-content-request";
export import GetTermVersionContentRequest = GetTermVersionContentRequest.GetTermVersionContentRequest;
import * as GetWorkRequestRequest from "./get-work-request-request";
export import GetWorkRequestRequest = GetWorkRequestRequest.GetWorkRequestRequest;
import * as ListArtifactsRequest from "./list-artifacts-request";
export import ListArtifactsRequest = ListArtifactsRequest.ListArtifactsRequest;
import * as ListAvailableServicesRequest from "./list-available-services-request";
export import ListAvailableServicesRequest = ListAvailableServicesRequest.ListAvailableServicesRequest;
import * as ListCategoriesRequest from "./list-categories-request";
export import ListCategoriesRequest = ListCategoriesRequest.ListCategoriesRequest;
import * as ListCustomerInstanceReportRecordsRequest from "./list-customer-instance-report-records-request";
export import ListCustomerInstanceReportRecordsRequest = ListCustomerInstanceReportRecordsRequest.ListCustomerInstanceReportRecordsRequest;
import * as ListDisbursementReportRecordsRequest from "./list-disbursement-report-records-request";
export import ListDisbursementReportRecordsRequest = ListDisbursementReportRecordsRequest.ListDisbursementReportRecordsRequest;
import * as ListLeadsRequest from "./list-leads-request";
export import ListLeadsRequest = ListLeadsRequest.ListLeadsRequest;
import * as ListListingRevisionAttachmentsRequest from "./list-listing-revision-attachments-request";
export import ListListingRevisionAttachmentsRequest = ListListingRevisionAttachmentsRequest.ListListingRevisionAttachmentsRequest;
import * as ListListingRevisionNotesRequest from "./list-listing-revision-notes-request";
export import ListListingRevisionNotesRequest = ListListingRevisionNotesRequest.ListListingRevisionNotesRequest;
import * as ListListingRevisionPackagesRequest from "./list-listing-revision-packages-request";
export import ListListingRevisionPackagesRequest = ListListingRevisionPackagesRequest.ListListingRevisionPackagesRequest;
import * as ListListingRevisionsRequest from "./list-listing-revisions-request";
export import ListListingRevisionsRequest = ListListingRevisionsRequest.ListListingRevisionsRequest;
import * as ListListingsRequest from "./list-listings-request";
export import ListListingsRequest = ListListingsRequest.ListListingsRequest;
import * as ListMarketsRequest from "./list-markets-request";
export import ListMarketsRequest = ListMarketsRequest.ListMarketsRequest;
import * as ListProductsRequest from "./list-products-request";
export import ListProductsRequest = ListProductsRequest.ListProductsRequest;
import * as ListPublishersRequest from "./list-publishers-request";
export import ListPublishersRequest = ListPublishersRequest.ListPublishersRequest;
import * as ListSupportDocsRequest from "./list-support-docs-request";
export import ListSupportDocsRequest = ListSupportDocsRequest.ListSupportDocsRequest;
import * as ListSupportedCurrenciesRequest from "./list-supported-currencies-request";
export import ListSupportedCurrenciesRequest = ListSupportedCurrenciesRequest.ListSupportedCurrenciesRequest;
import * as ListSupportedShapesRequest from "./list-supported-shapes-request";
export import ListSupportedShapesRequest = ListSupportedShapesRequest.ListSupportedShapesRequest;
import * as ListTermVersionsRequest from "./list-term-versions-request";
export import ListTermVersionsRequest = ListTermVersionsRequest.ListTermVersionsRequest;
import * as ListTermsRequest from "./list-terms-request";
export import ListTermsRequest = ListTermsRequest.ListTermsRequest;
import * as ListWorkRequestErrorsRequest from "./list-work-request-errors-request";
export import ListWorkRequestErrorsRequest = ListWorkRequestErrorsRequest.ListWorkRequestErrorsRequest;
import * as ListWorkRequestLogsRequest from "./list-work-request-logs-request";
export import ListWorkRequestLogsRequest = ListWorkRequestLogsRequest.ListWorkRequestLogsRequest;
import * as ListWorkRequestsRequest from "./list-work-requests-request";
export import ListWorkRequestsRequest = ListWorkRequestsRequest.ListWorkRequestsRequest;
import * as MarkListingRevisionPackageAsDefaultRequest from "./mark-listing-revision-package-as-default-request";
export import MarkListingRevisionPackageAsDefaultRequest = MarkListingRevisionPackageAsDefaultRequest.MarkListingRevisionPackageAsDefaultRequest;
import * as PublishListingRevisionRequest from "./publish-listing-revision-request";
export import PublishListingRevisionRequest = PublishListingRevisionRequest.PublishListingRevisionRequest;
import * as PublishListingRevisionAsPrivateRequest from "./publish-listing-revision-as-private-request";
export import PublishListingRevisionAsPrivateRequest = PublishListingRevisionAsPrivateRequest.PublishListingRevisionAsPrivateRequest;
import * as PublishListingRevisionPackageRequest from "./publish-listing-revision-package-request";
export import PublishListingRevisionPackageRequest = PublishListingRevisionPackageRequest.PublishListingRevisionPackageRequest;
import * as SubmitListingRevisionForReviewRequest from "./submit-listing-revision-for-review-request";
export import SubmitListingRevisionForReviewRequest = SubmitListingRevisionForReviewRequest.SubmitListingRevisionForReviewRequest;
import * as UnPublishListingRevisionPackageRequest from "./un-publish-listing-revision-package-request";
export import UnPublishListingRevisionPackageRequest = UnPublishListingRevisionPackageRequest.UnPublishListingRevisionPackageRequest;
import * as UpdateArtifactRequest from "./update-artifact-request";
export import UpdateArtifactRequest = UpdateArtifactRequest.UpdateArtifactRequest;
import * as UpdateListingRequest from "./update-listing-request";
export import UpdateListingRequest = UpdateListingRequest.UpdateListingRequest;
import * as UpdateListingRevisionRequest from "./update-listing-revision-request";
export import UpdateListingRevisionRequest = UpdateListingRevisionRequest.UpdateListingRevisionRequest;
import * as UpdateListingRevisionAttachmentRequest from "./update-listing-revision-attachment-request";
export import UpdateListingRevisionAttachmentRequest = UpdateListingRevisionAttachmentRequest.UpdateListingRevisionAttachmentRequest;
import * as UpdateListingRevisionAttachmentContentRequest from "./update-listing-revision-attachment-content-request";
export import UpdateListingRevisionAttachmentContentRequest = UpdateListingRevisionAttachmentContentRequest.UpdateListingRevisionAttachmentContentRequest;
import * as UpdateListingRevisionIconContentRequest from "./update-listing-revision-icon-content-request";
export import UpdateListingRevisionIconContentRequest = UpdateListingRevisionIconContentRequest.UpdateListingRevisionIconContentRequest;
import * as UpdateListingRevisionNoteRequest from "./update-listing-revision-note-request";
export import UpdateListingRevisionNoteRequest = UpdateListingRevisionNoteRequest.UpdateListingRevisionNoteRequest;
import * as UpdateListingRevisionPackageRequest from "./update-listing-revision-package-request";
export import UpdateListingRevisionPackageRequest = UpdateListingRevisionPackageRequest.UpdateListingRevisionPackageRequest;
import * as UpdateTermRequest from "./update-term-request";
export import UpdateTermRequest = UpdateTermRequest.UpdateTermRequest;
import * as UpdateTermVersionRequest from "./update-term-version-request";
export import UpdateTermVersionRequest = UpdateTermVersionRequest.UpdateTermVersionRequest;
import * as UpdateTermVersionContentRequest from "./update-term-version-content-request";
export import UpdateTermVersionContentRequest = UpdateTermVersionContentRequest.UpdateTermVersionContentRequest;
import * as ValidateAndPublishArtifactRequest from "./validate-and-publish-artifact-request";
export import ValidateAndPublishArtifactRequest = ValidateAndPublishArtifactRequest.ValidateAndPublishArtifactRequest;
import * as WithdrawListingRevisionRequest from "./withdraw-listing-revision-request";
export import WithdrawListingRevisionRequest = WithdrawListingRevisionRequest.WithdrawListingRevisionRequest;
