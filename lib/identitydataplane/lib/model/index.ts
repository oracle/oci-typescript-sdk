/**
 * Identity and Access Management Data Plane API
 * APIs for managing identity data plane services. For example, use this API to create a scoped-access security token. To manage identity domains (for example, creating or deleting an identity domain) or to manage resources (for example, users and groups) within the default identity domain, see [IAM API](https://docs.oracle.com/iaas/api/#/en/identity/).
 * OpenAPI spec version: v1
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2025, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as AccessibleCompartmentRequest from "./accessible-compartment-request";
export import AccessibleCompartmentRequest = AccessibleCompartmentRequest.AccessibleCompartmentRequest;
import * as AccessibleCompartmentResponse from "./accessible-compartment-response";
export import AccessibleCompartmentResponse = AccessibleCompartmentResponse.AccessibleCompartmentResponse;
import * as AssociationAuthorizationRequest from "./association-authorization-request";
export import AssociationAuthorizationRequest = AssociationAuthorizationRequest.AssociationAuthorizationRequest;
import * as AuthServiceUser from "./auth-service-user";
export import AuthServiceUser = AuthServiceUser.AuthServiceUser;
import * as AuthenticateClientDetails from "./authenticate-client-details";
export import AuthenticateClientDetails = AuthenticateClientDetails.AuthenticateClientDetails;
import * as AuthenticateClientResult from "./authenticate-client-result";
export import AuthenticateClientResult = AuthenticateClientResult.AuthenticateClientResult;
import * as AuthenticateUserResult from "./authenticate-user-result";
export import AuthenticateUserResult = AuthenticateUserResult.AuthenticateUserResult;
import * as AuthenticationPolicy from "./authentication-policy";
export import AuthenticationPolicy = AuthenticationPolicy.AuthenticationPolicy;
import * as AuthenticationPrincipal from "./authentication-principal";
export import AuthenticationPrincipal = AuthenticationPrincipal.AuthenticationPrincipal;
import * as AuthenticationRequest from "./authentication-request";
export import AuthenticationRequest = AuthenticationRequest.AuthenticationRequest;
import * as AuthorizationRequest from "./authorization-request";
export import AuthorizationRequest = AuthorizationRequest.AuthorizationRequest;
import * as BadUserStateAuthenticateUserResult from "./bad-user-state-authenticate-user-result";
export import BadUserStateAuthenticateUserResult = BadUserStateAuthenticateUserResult.BadUserStateAuthenticateUserResult;
import * as Claim from "./claim";
export import Claim = Claim.Claim;
import * as ClientCredentialsResponse from "./client-credentials-response";
export import ClientCredentialsResponse = ClientCredentialsResponse.ClientCredentialsResponse;
import * as CommonPrincipal from "./common-principal";
export import CommonPrincipal = CommonPrincipal.CommonPrincipal;
import * as Compartment from "./compartment";
export import Compartment = Compartment.Compartment;
import * as CompartmentMetadata from "./compartment-metadata";
export import CompartmentMetadata = CompartmentMetadata.CompartmentMetadata;
import * as ContextVariable from "./context-variable";
export import ContextVariable = ContextVariable.ContextVariable;
import * as CostTrackingTag from "./cost-tracking-tag";
export import CostTrackingTag = CostTrackingTag.CostTrackingTag;
import * as CredentialAuthenticatorInfo from "./credential-authenticator-info";
export import CredentialAuthenticatorInfo = CredentialAuthenticatorInfo.CredentialAuthenticatorInfo;
import * as DerivedKeyResponse from "./derived-key-response";
export import DerivedKeyResponse = DerivedKeyResponse.DerivedKeyResponse;
import * as EntityStatus from "./entity-status";
export import EntityStatus = EntityStatus.EntityStatus;
import * as FilterGroupMembershipDetails from "./filter-group-membership-details";
export import FilterGroupMembershipDetails = FilterGroupMembershipDetails.FilterGroupMembershipDetails;
import * as FilterGroupMembershipResult from "./filter-group-membership-result";
export import FilterGroupMembershipResult = FilterGroupMembershipResult.FilterGroupMembershipResult;
import * as GenerateScopedAccessTokenDetails from "./generate-scoped-access-token-details";
export import GenerateScopedAccessTokenDetails = GenerateScopedAccessTokenDetails.GenerateScopedAccessTokenDetails;
import * as GenerateUserSecurityTokenDetails from "./generate-user-security-token-details";
export import GenerateUserSecurityTokenDetails = GenerateUserSecurityTokenDetails.GenerateUserSecurityTokenDetails;
import * as IdentityProvider from "./identity-provider";
export import IdentityProvider = IdentityProvider.IdentityProvider;
import * as JWK from "./j-wk";
export import JWK = JWK.JWK;
import * as OnBehalfOfRequest from "./on-behalf-of-request";
export import OnBehalfOfRequest = OnBehalfOfRequest.OnBehalfOfRequest;
import * as PasswordPolicy from "./password-policy";
export import PasswordPolicy = PasswordPolicy.PasswordPolicy;
import * as PasswordResetAuthenticationRequest from "./password-reset-authentication-request";
export import PasswordResetAuthenticationRequest = PasswordResetAuthenticationRequest.PasswordResetAuthenticationRequest;
import * as Permission from "./permission";
export import Permission = Permission.Permission;
import * as PermissionContext from "./permission-context";
export import PermissionContext = PermissionContext.PermissionContext;
import * as Principal from "./principal";
export import Principal = Principal.Principal;
import * as RefreshRequest from "./refresh-request";
export import RefreshRequest = RefreshRequest.RefreshRequest;
import * as ResourcePrincipalSessionTokenRequest from "./resource-principal-session-token-request";
export import ResourcePrincipalSessionTokenRequest = ResourcePrincipalSessionTokenRequest.ResourcePrincipalSessionTokenRequest;
import * as SecurityToken from "./security-token";
export import SecurityToken = SecurityToken.SecurityToken;
import * as Tenant from "./tenant";
export import Tenant = Tenant.Tenant;
import * as TenantNotFoundAuthenticateUserResult from "./tenant-not-found-authenticate-user-result";
export import TenantNotFoundAuthenticateUserResult = TenantNotFoundAuthenticateUserResult.TenantNotFoundAuthenticateUserResult;
import * as ThickAuthorizationResponse from "./thick-authorization-response";
export import ThickAuthorizationResponse = ThickAuthorizationResponse.ThickAuthorizationResponse;
import * as ThinAssociationAuthorizationResponse from "./thin-association-authorization-response";
export import ThinAssociationAuthorizationResponse = ThinAssociationAuthorizationResponse.ThinAssociationAuthorizationResponse;
import * as ThinAuthorizationResponse from "./thin-authorization-response";
export import ThinAuthorizationResponse = ThinAuthorizationResponse.ThinAuthorizationResponse;
import * as User from "./user";
export import User = User.User;
import * as UserNotFoundAuthenticateUserResult from "./user-not-found-authenticate-user-result";
export import UserNotFoundAuthenticateUserResult = UserNotFoundAuthenticateUserResult.UserNotFoundAuthenticateUserResult;
import * as ValidAuthenticateUserResult from "./valid-authenticate-user-result";
export import ValidAuthenticateUserResult = ValidAuthenticateUserResult.ValidAuthenticateUserResult;
import * as X509FederationRequest from "./x509-federation-request";
export import X509FederationRequest = X509FederationRequest.X509FederationRequest;
