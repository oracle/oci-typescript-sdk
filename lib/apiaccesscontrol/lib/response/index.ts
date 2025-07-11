/**
 * Oracle API Access Control
 * This service is used to restrict the control plane service apis; so that everybody won't be 
able to access those apis.
There are two main resouces defined as a part of this service
1. PrivilegedApiControl: This is created by the customer which defines which service apis are 
   controlled and who can access it.
2. PrivilegedApiRequest: This is a request object again created by the customer operators who           seek access to those privileged apis. After a request is obtained based on the                       PrivilegedAccessControl for which the api belongs to, either it can be approved so that the          requested person can execute the service apis or it will wait for the customer to approve it.

 * OpenAPI spec version: 20241130
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2025, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as GetApiMetadataResponse from "./get-api-metadata-response";
export import GetApiMetadataResponse = GetApiMetadataResponse.GetApiMetadataResponse;
import * as ListApiMetadataResponse from "./list-api-metadata-response";
export import ListApiMetadataResponse = ListApiMetadataResponse.ListApiMetadataResponse;
import * as ListApiMetadataByEntityTypesResponse from "./list-api-metadata-by-entity-types-response";
export import ListApiMetadataByEntityTypesResponse = ListApiMetadataByEntityTypesResponse.ListApiMetadataByEntityTypesResponse;
import * as ChangePrivilegedApiControlCompartmentResponse from "./change-privileged-api-control-compartment-response";
export import ChangePrivilegedApiControlCompartmentResponse = ChangePrivilegedApiControlCompartmentResponse.ChangePrivilegedApiControlCompartmentResponse;
import * as CreatePrivilegedApiControlResponse from "./create-privileged-api-control-response";
export import CreatePrivilegedApiControlResponse = CreatePrivilegedApiControlResponse.CreatePrivilegedApiControlResponse;
import * as DeletePrivilegedApiControlResponse from "./delete-privileged-api-control-response";
export import DeletePrivilegedApiControlResponse = DeletePrivilegedApiControlResponse.DeletePrivilegedApiControlResponse;
import * as GetPrivilegedApiControlResponse from "./get-privileged-api-control-response";
export import GetPrivilegedApiControlResponse = GetPrivilegedApiControlResponse.GetPrivilegedApiControlResponse;
import * as ListPrivilegedApiControlsResponse from "./list-privileged-api-controls-response";
export import ListPrivilegedApiControlsResponse = ListPrivilegedApiControlsResponse.ListPrivilegedApiControlsResponse;
import * as UpdatePrivilegedApiControlResponse from "./update-privileged-api-control-response";
export import UpdatePrivilegedApiControlResponse = UpdatePrivilegedApiControlResponse.UpdatePrivilegedApiControlResponse;
import * as ApprovePrivilegedApiRequestResponse from "./approve-privileged-api-request-response";
export import ApprovePrivilegedApiRequestResponse = ApprovePrivilegedApiRequestResponse.ApprovePrivilegedApiRequestResponse;
import * as ClosePrivilegedApiRequestResponse from "./close-privileged-api-request-response";
export import ClosePrivilegedApiRequestResponse = ClosePrivilegedApiRequestResponse.ClosePrivilegedApiRequestResponse;
import * as CreatePrivilegedApiRequestResponse from "./create-privileged-api-request-response";
export import CreatePrivilegedApiRequestResponse = CreatePrivilegedApiRequestResponse.CreatePrivilegedApiRequestResponse;
import * as GetPrivilegedApiRequestResponse from "./get-privileged-api-request-response";
export import GetPrivilegedApiRequestResponse = GetPrivilegedApiRequestResponse.GetPrivilegedApiRequestResponse;
import * as ListPrivilegedApiRequestsResponse from "./list-privileged-api-requests-response";
export import ListPrivilegedApiRequestsResponse = ListPrivilegedApiRequestsResponse.ListPrivilegedApiRequestsResponse;
import * as RejectPrivilegedApiRequestResponse from "./reject-privileged-api-request-response";
export import RejectPrivilegedApiRequestResponse = RejectPrivilegedApiRequestResponse.RejectPrivilegedApiRequestResponse;
import * as RevokePrivilegedApiRequestResponse from "./revoke-privileged-api-request-response";
export import RevokePrivilegedApiRequestResponse = RevokePrivilegedApiRequestResponse.RevokePrivilegedApiRequestResponse;
import * as CancelWorkRequestResponse from "./cancel-work-request-response";
export import CancelWorkRequestResponse = CancelWorkRequestResponse.CancelWorkRequestResponse;
import * as GetWorkRequestResponse from "./get-work-request-response";
export import GetWorkRequestResponse = GetWorkRequestResponse.GetWorkRequestResponse;
import * as ListWorkRequestErrorsResponse from "./list-work-request-errors-response";
export import ListWorkRequestErrorsResponse = ListWorkRequestErrorsResponse.ListWorkRequestErrorsResponse;
import * as ListWorkRequestLogsResponse from "./list-work-request-logs-response";
export import ListWorkRequestLogsResponse = ListWorkRequestLogsResponse.ListWorkRequestLogsResponse;
import * as ListWorkRequestsResponse from "./list-work-requests-response";
export import ListWorkRequestsResponse = ListWorkRequestsResponse.ListWorkRequestsResponse;
