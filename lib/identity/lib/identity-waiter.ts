/**
 * Identity and Access Management Service API
 * Use the Identity and Access Management Service API to manage users, groups, identity domains, compartments, policies, tagging, and limits. For information about managing users, groups, compartments, and policies, see [Identity and Access Management (without identity domains)](https://docs.oracle.com/iaas/Content/Identity/Concepts/overview.htm). For information about tagging and service limits, see [Tagging](https://docs.oracle.com/iaas/Content/Tagging/Concepts/taggingoverview.htm) and [Service Limits](https://docs.oracle.com/iaas/Content/General/Concepts/servicelimits.htm). For information about creating, modifying, and deleting identity domains, see [Identity and Access Management (with identity domains)](https://docs.oracle.com/iaas/Content/Identity/home.htm).
 * OpenAPI spec version: 20160918
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2025, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as serviceRequests from "./request";
import * as serviceResponses from "./response";
import * as models from "./model";
import { IdentityClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class IdentityWaiter {
  public constructor(
    private client: IdentityClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forCompartment till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetCompartmentResponse | null (null in case of 404 response)
   */
  public async forCompartment(
    request: serviceRequests.GetCompartmentRequest,
    ...targetStates: models.Compartment.LifecycleState[]
  ): Promise<serviceResponses.GetCompartmentResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getCompartment(request),
      response => targetStates.includes(response.compartment.lifecycleState!),
      targetStates.includes(models.Compartment.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forDomain till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetDomainResponse
   */
  public async forDomain(
    request: serviceRequests.GetDomainRequest,
    ...targetStates: models.Domain.LifecycleState[]
  ): Promise<serviceResponses.GetDomainResponse> {
    return genericWaiter(
      this.config,
      () => this.client.getDomain(request),
      response => targetStates.includes(response.domain.lifecycleState!)
    );
  }

  /**
   * Waits forDynamicGroup till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetDynamicGroupResponse | null (null in case of 404 response)
   */
  public async forDynamicGroup(
    request: serviceRequests.GetDynamicGroupRequest,
    ...targetStates: models.DynamicGroup.LifecycleState[]
  ): Promise<serviceResponses.GetDynamicGroupResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getDynamicGroup(request),
      response => targetStates.includes(response.dynamicGroup.lifecycleState!),
      targetStates.includes(models.DynamicGroup.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forGroup till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetGroupResponse | null (null in case of 404 response)
   */
  public async forGroup(
    request: serviceRequests.GetGroupRequest,
    ...targetStates: models.Group.LifecycleState[]
  ): Promise<serviceResponses.GetGroupResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getGroup(request),
      response => targetStates.includes(response.group.lifecycleState!),
      targetStates.includes(models.Group.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forIamWorkRequest
   *
   * @param request the request to send
   * @return response returns GetIamWorkRequestResponse
   */
  public async forIamWorkRequest(
    request: serviceRequests.GetIamWorkRequestRequest
  ): Promise<serviceResponses.GetIamWorkRequestResponse> {
    return genericWaiter(
      this.config,
      () => this.client.getIamWorkRequest(request),
      response => (response.iamWorkRequest.timeFinished ? true : false)
    );
  }

  /**
   * Waits forIdentityProvider till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetIdentityProviderResponse | null (null in case of 404 response)
   */
  public async forIdentityProvider(
    request: serviceRequests.GetIdentityProviderRequest,
    ...targetStates: models.IdentityProvider.LifecycleState[]
  ): Promise<serviceResponses.GetIdentityProviderResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getIdentityProvider(request),
      response => targetStates.includes(response.identityProvider.lifecycleState!),
      targetStates.includes(models.IdentityProvider.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forIdpGroupMapping till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetIdpGroupMappingResponse | null (null in case of 404 response)
   */
  public async forIdpGroupMapping(
    request: serviceRequests.GetIdpGroupMappingRequest,
    ...targetStates: models.IdpGroupMapping.LifecycleState[]
  ): Promise<serviceResponses.GetIdpGroupMappingResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getIdpGroupMapping(request),
      response => targetStates.includes(response.idpGroupMapping.lifecycleState!),
      targetStates.includes(models.IdpGroupMapping.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forPolicy till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetPolicyResponse | null (null in case of 404 response)
   */
  public async forPolicy(
    request: serviceRequests.GetPolicyRequest,
    ...targetStates: models.Policy.LifecycleState[]
  ): Promise<serviceResponses.GetPolicyResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getPolicy(request),
      response => targetStates.includes(response.policy.lifecycleState!),
      targetStates.includes(models.Policy.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forTag till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetTagResponse | null (null in case of 404 response)
   */
  public async forTag(
    request: serviceRequests.GetTagRequest,
    ...targetStates: models.Tag.LifecycleState[]
  ): Promise<serviceResponses.GetTagResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getTag(request),
      response => targetStates.includes(response.tag.lifecycleState!),
      targetStates.includes(models.Tag.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forTagDefault till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetTagDefaultResponse
   */
  public async forTagDefault(
    request: serviceRequests.GetTagDefaultRequest,
    ...targetStates: models.TagDefault.LifecycleState[]
  ): Promise<serviceResponses.GetTagDefaultResponse> {
    return genericWaiter(
      this.config,
      () => this.client.getTagDefault(request),
      response => targetStates.includes(response.tagDefault.lifecycleState!)
    );
  }

  /**
   * Waits forTagNamespace till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetTagNamespaceResponse | null (null in case of 404 response)
   */
  public async forTagNamespace(
    request: serviceRequests.GetTagNamespaceRequest,
    ...targetStates: models.TagNamespace.LifecycleState[]
  ): Promise<serviceResponses.GetTagNamespaceResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getTagNamespace(request),
      response => targetStates.includes(response.tagNamespace.lifecycleState!),
      targetStates.includes(models.TagNamespace.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forTaggingWorkRequest
   *
   * @param request the request to send
   * @return response returns GetTaggingWorkRequestResponse
   */
  public async forTaggingWorkRequest(
    request: serviceRequests.GetTaggingWorkRequestRequest
  ): Promise<serviceResponses.GetTaggingWorkRequestResponse> {
    return genericWaiter(
      this.config,
      () => this.client.getTaggingWorkRequest(request),
      response => (response.taggingWorkRequest.timeFinished ? true : false)
    );
  }

  /**
   * Waits forUser till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetUserResponse | null (null in case of 404 response)
   */
  public async forUser(
    request: serviceRequests.GetUserRequest,
    ...targetStates: models.User.LifecycleState[]
  ): Promise<serviceResponses.GetUserResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getUser(request),
      response => targetStates.includes(response.user.lifecycleState!),
      targetStates.includes(models.User.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forUserGroupMembership till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetUserGroupMembershipResponse | null (null in case of 404 response)
   */
  public async forUserGroupMembership(
    request: serviceRequests.GetUserGroupMembershipRequest,
    ...targetStates: models.UserGroupMembership.LifecycleState[]
  ): Promise<serviceResponses.GetUserGroupMembershipResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getUserGroupMembership(request),
      response => targetStates.includes(response.userGroupMembership.lifecycleState!),
      targetStates.includes(models.UserGroupMembership.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forWorkRequest
   *
   * @param request the request to send
   * @return response returns GetWorkRequestResponse
   */
  public async forWorkRequest(
    request: serviceRequests.GetWorkRequestRequest
  ): Promise<serviceResponses.GetWorkRequestResponse> {
    return genericWaiter(
      this.config,
      () => this.client.getWorkRequest(request),
      response => (response.workRequest.timeFinished ? true : false)
    );
  }
}
