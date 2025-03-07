/**
 * DNS API
 * API for the DNS service. Use this API to manage DNS zones, records, and other DNS resources.
For more information, see [Overview of the DNS Service](https://docs.oracle.com/iaas/Content/DNS/Concepts/dnszonemanagement.htm).

 * OpenAPI spec version: 20180115
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2025, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as ChangeResolverCompartmentRequest from "./change-resolver-compartment-request";
export import ChangeResolverCompartmentRequest = ChangeResolverCompartmentRequest.ChangeResolverCompartmentRequest;
import * as ChangeSteeringPolicyCompartmentRequest from "./change-steering-policy-compartment-request";
export import ChangeSteeringPolicyCompartmentRequest = ChangeSteeringPolicyCompartmentRequest.ChangeSteeringPolicyCompartmentRequest;
import * as ChangeTsigKeyCompartmentRequest from "./change-tsig-key-compartment-request";
export import ChangeTsigKeyCompartmentRequest = ChangeTsigKeyCompartmentRequest.ChangeTsigKeyCompartmentRequest;
import * as ChangeViewCompartmentRequest from "./change-view-compartment-request";
export import ChangeViewCompartmentRequest = ChangeViewCompartmentRequest.ChangeViewCompartmentRequest;
import * as ChangeZoneCompartmentRequest from "./change-zone-compartment-request";
export import ChangeZoneCompartmentRequest = ChangeZoneCompartmentRequest.ChangeZoneCompartmentRequest;
import * as CreateResolverEndpointRequest from "./create-resolver-endpoint-request";
export import CreateResolverEndpointRequest = CreateResolverEndpointRequest.CreateResolverEndpointRequest;
import * as CreateSteeringPolicyRequest from "./create-steering-policy-request";
export import CreateSteeringPolicyRequest = CreateSteeringPolicyRequest.CreateSteeringPolicyRequest;
import * as CreateSteeringPolicyAttachmentRequest from "./create-steering-policy-attachment-request";
export import CreateSteeringPolicyAttachmentRequest = CreateSteeringPolicyAttachmentRequest.CreateSteeringPolicyAttachmentRequest;
import * as CreateTsigKeyRequest from "./create-tsig-key-request";
export import CreateTsigKeyRequest = CreateTsigKeyRequest.CreateTsigKeyRequest;
import * as CreateViewRequest from "./create-view-request";
export import CreateViewRequest = CreateViewRequest.CreateViewRequest;
import * as CreateZoneRequest from "./create-zone-request";
export import CreateZoneRequest = CreateZoneRequest.CreateZoneRequest;
import * as CreateZoneFromZoneFileRequest from "./create-zone-from-zone-file-request";
export import CreateZoneFromZoneFileRequest = CreateZoneFromZoneFileRequest.CreateZoneFromZoneFileRequest;
import * as DeleteDomainRecordsRequest from "./delete-domain-records-request";
export import DeleteDomainRecordsRequest = DeleteDomainRecordsRequest.DeleteDomainRecordsRequest;
import * as DeleteRRSetRequest from "./delete-rrset-request";
export import DeleteRRSetRequest = DeleteRRSetRequest.DeleteRRSetRequest;
import * as DeleteResolverEndpointRequest from "./delete-resolver-endpoint-request";
export import DeleteResolverEndpointRequest = DeleteResolverEndpointRequest.DeleteResolverEndpointRequest;
import * as DeleteSteeringPolicyRequest from "./delete-steering-policy-request";
export import DeleteSteeringPolicyRequest = DeleteSteeringPolicyRequest.DeleteSteeringPolicyRequest;
import * as DeleteSteeringPolicyAttachmentRequest from "./delete-steering-policy-attachment-request";
export import DeleteSteeringPolicyAttachmentRequest = DeleteSteeringPolicyAttachmentRequest.DeleteSteeringPolicyAttachmentRequest;
import * as DeleteTsigKeyRequest from "./delete-tsig-key-request";
export import DeleteTsigKeyRequest = DeleteTsigKeyRequest.DeleteTsigKeyRequest;
import * as DeleteViewRequest from "./delete-view-request";
export import DeleteViewRequest = DeleteViewRequest.DeleteViewRequest;
import * as DeleteZoneRequest from "./delete-zone-request";
export import DeleteZoneRequest = DeleteZoneRequest.DeleteZoneRequest;
import * as GetDomainRecordsRequest from "./get-domain-records-request";
export import GetDomainRecordsRequest = GetDomainRecordsRequest.GetDomainRecordsRequest;
import * as GetRRSetRequest from "./get-rrset-request";
export import GetRRSetRequest = GetRRSetRequest.GetRRSetRequest;
import * as GetResolverRequest from "./get-resolver-request";
export import GetResolverRequest = GetResolverRequest.GetResolverRequest;
import * as GetResolverEndpointRequest from "./get-resolver-endpoint-request";
export import GetResolverEndpointRequest = GetResolverEndpointRequest.GetResolverEndpointRequest;
import * as GetSteeringPolicyRequest from "./get-steering-policy-request";
export import GetSteeringPolicyRequest = GetSteeringPolicyRequest.GetSteeringPolicyRequest;
import * as GetSteeringPolicyAttachmentRequest from "./get-steering-policy-attachment-request";
export import GetSteeringPolicyAttachmentRequest = GetSteeringPolicyAttachmentRequest.GetSteeringPolicyAttachmentRequest;
import * as GetTsigKeyRequest from "./get-tsig-key-request";
export import GetTsigKeyRequest = GetTsigKeyRequest.GetTsigKeyRequest;
import * as GetViewRequest from "./get-view-request";
export import GetViewRequest = GetViewRequest.GetViewRequest;
import * as GetZoneRequest from "./get-zone-request";
export import GetZoneRequest = GetZoneRequest.GetZoneRequest;
import * as GetZoneContentRequest from "./get-zone-content-request";
export import GetZoneContentRequest = GetZoneContentRequest.GetZoneContentRequest;
import * as GetZoneRecordsRequest from "./get-zone-records-request";
export import GetZoneRecordsRequest = GetZoneRecordsRequest.GetZoneRecordsRequest;
import * as ListResolverEndpointsRequest from "./list-resolver-endpoints-request";
export import ListResolverEndpointsRequest = ListResolverEndpointsRequest.ListResolverEndpointsRequest;
import * as ListResolversRequest from "./list-resolvers-request";
export import ListResolversRequest = ListResolversRequest.ListResolversRequest;
import * as ListSteeringPoliciesRequest from "./list-steering-policies-request";
export import ListSteeringPoliciesRequest = ListSteeringPoliciesRequest.ListSteeringPoliciesRequest;
import * as ListSteeringPolicyAttachmentsRequest from "./list-steering-policy-attachments-request";
export import ListSteeringPolicyAttachmentsRequest = ListSteeringPolicyAttachmentsRequest.ListSteeringPolicyAttachmentsRequest;
import * as ListTsigKeysRequest from "./list-tsig-keys-request";
export import ListTsigKeysRequest = ListTsigKeysRequest.ListTsigKeysRequest;
import * as ListViewsRequest from "./list-views-request";
export import ListViewsRequest = ListViewsRequest.ListViewsRequest;
import * as ListZoneTransferServersRequest from "./list-zone-transfer-servers-request";
export import ListZoneTransferServersRequest = ListZoneTransferServersRequest.ListZoneTransferServersRequest;
import * as ListZonesRequest from "./list-zones-request";
export import ListZonesRequest = ListZonesRequest.ListZonesRequest;
import * as PatchDomainRecordsRequest from "./patch-domain-records-request";
export import PatchDomainRecordsRequest = PatchDomainRecordsRequest.PatchDomainRecordsRequest;
import * as PatchRRSetRequest from "./patch-rrset-request";
export import PatchRRSetRequest = PatchRRSetRequest.PatchRRSetRequest;
import * as PatchZoneRecordsRequest from "./patch-zone-records-request";
export import PatchZoneRecordsRequest = PatchZoneRecordsRequest.PatchZoneRecordsRequest;
import * as PromoteZoneDnssecKeyVersionRequest from "./promote-zone-dnssec-key-version-request";
export import PromoteZoneDnssecKeyVersionRequest = PromoteZoneDnssecKeyVersionRequest.PromoteZoneDnssecKeyVersionRequest;
import * as StageZoneDnssecKeyVersionRequest from "./stage-zone-dnssec-key-version-request";
export import StageZoneDnssecKeyVersionRequest = StageZoneDnssecKeyVersionRequest.StageZoneDnssecKeyVersionRequest;
import * as UpdateDomainRecordsRequest from "./update-domain-records-request";
export import UpdateDomainRecordsRequest = UpdateDomainRecordsRequest.UpdateDomainRecordsRequest;
import * as UpdateRRSetRequest from "./update-rrset-request";
export import UpdateRRSetRequest = UpdateRRSetRequest.UpdateRRSetRequest;
import * as UpdateResolverRequest from "./update-resolver-request";
export import UpdateResolverRequest = UpdateResolverRequest.UpdateResolverRequest;
import * as UpdateResolverEndpointRequest from "./update-resolver-endpoint-request";
export import UpdateResolverEndpointRequest = UpdateResolverEndpointRequest.UpdateResolverEndpointRequest;
import * as UpdateSteeringPolicyRequest from "./update-steering-policy-request";
export import UpdateSteeringPolicyRequest = UpdateSteeringPolicyRequest.UpdateSteeringPolicyRequest;
import * as UpdateSteeringPolicyAttachmentRequest from "./update-steering-policy-attachment-request";
export import UpdateSteeringPolicyAttachmentRequest = UpdateSteeringPolicyAttachmentRequest.UpdateSteeringPolicyAttachmentRequest;
import * as UpdateTsigKeyRequest from "./update-tsig-key-request";
export import UpdateTsigKeyRequest = UpdateTsigKeyRequest.UpdateTsigKeyRequest;
import * as UpdateViewRequest from "./update-view-request";
export import UpdateViewRequest = UpdateViewRequest.UpdateViewRequest;
import * as UpdateZoneRequest from "./update-zone-request";
export import UpdateZoneRequest = UpdateZoneRequest.UpdateZoneRequest;
import * as UpdateZoneRecordsRequest from "./update-zone-records-request";
export import UpdateZoneRecordsRequest = UpdateZoneRecordsRequest.UpdateZoneRecordsRequest;
