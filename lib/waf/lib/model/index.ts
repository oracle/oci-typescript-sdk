/**
 * Web Application Firewall (WAF) API
 * API for the Web Application Firewall service.
Use this API to manage regional Web App Firewalls and corresponding policies for protecting HTTP services.

 * OpenAPI spec version: 20210930
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2025, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as Action from "./action";
export import Action = Action.Action;
import * as BackendType from "./backend-type";
export import BackendType = BackendType.BackendType;
import * as ChangeNetworkAddressListCompartmentDetails from "./change-network-address-list-compartment-details";
export import ChangeNetworkAddressListCompartmentDetails = ChangeNetworkAddressListCompartmentDetails.ChangeNetworkAddressListCompartmentDetails;
import * as ChangeResourceCompartmentDetails from "./change-resource-compartment-details";
export import ChangeResourceCompartmentDetails = ChangeResourceCompartmentDetails.ChangeResourceCompartmentDetails;
import * as ChangeWebAppFirewallCompartmentDetails from "./change-web-app-firewall-compartment-details";
export import ChangeWebAppFirewallCompartmentDetails = ChangeWebAppFirewallCompartmentDetails.ChangeWebAppFirewallCompartmentDetails;
import * as ChangeWebAppFirewallPolicyCompartmentDetails from "./change-web-app-firewall-policy-compartment-details";
export import ChangeWebAppFirewallPolicyCompartmentDetails = ChangeWebAppFirewallPolicyCompartmentDetails.ChangeWebAppFirewallPolicyCompartmentDetails;
import * as CollaborativeCapabilityWeight from "./collaborative-capability-weight";
export import CollaborativeCapabilityWeight = CollaborativeCapabilityWeight.CollaborativeCapabilityWeight;
import * as CollaborativeCapabilityWeightOverride from "./collaborative-capability-weight-override";
export import CollaborativeCapabilityWeightOverride = CollaborativeCapabilityWeightOverride.CollaborativeCapabilityWeightOverride;
import * as CreateNetworkAddressListDetails from "./create-network-address-list-details";
export import CreateNetworkAddressListDetails = CreateNetworkAddressListDetails.CreateNetworkAddressListDetails;
import * as CreateWebAppFirewallDetails from "./create-web-app-firewall-details";
export import CreateWebAppFirewallDetails = CreateWebAppFirewallDetails.CreateWebAppFirewallDetails;
import * as CreateWebAppFirewallPolicyDetails from "./create-web-app-firewall-policy-details";
export import CreateWebAppFirewallPolicyDetails = CreateWebAppFirewallPolicyDetails.CreateWebAppFirewallPolicyDetails;
import * as HttpResponseBody from "./http-response-body";
export import HttpResponseBody = HttpResponseBody.HttpResponseBody;
import * as NetworkAddressList from "./network-address-list";
export import NetworkAddressList = NetworkAddressList.NetworkAddressList;
import * as NetworkAddressListCollection from "./network-address-list-collection";
export import NetworkAddressListCollection = NetworkAddressListCollection.NetworkAddressListCollection;
import * as NetworkAddressListSummary from "./network-address-list-summary";
export import NetworkAddressListSummary = NetworkAddressListSummary.NetworkAddressListSummary;
import * as PrivateAddresses from "./private-addresses";
export import PrivateAddresses = PrivateAddresses.PrivateAddresses;
import * as ProtectionCapability from "./protection-capability";
export import ProtectionCapability = ProtectionCapability.ProtectionCapability;
import * as ProtectionCapabilityCollection from "./protection-capability-collection";
export import ProtectionCapabilityCollection = ProtectionCapabilityCollection.ProtectionCapabilityCollection;
import * as ProtectionCapabilityExclusions from "./protection-capability-exclusions";
export import ProtectionCapabilityExclusions = ProtectionCapabilityExclusions.ProtectionCapabilityExclusions;
import * as ProtectionCapabilityGroupTagCollection from "./protection-capability-group-tag-collection";
export import ProtectionCapabilityGroupTagCollection = ProtectionCapabilityGroupTagCollection.ProtectionCapabilityGroupTagCollection;
import * as ProtectionCapabilityGroupTagSummary from "./protection-capability-group-tag-summary";
export import ProtectionCapabilityGroupTagSummary = ProtectionCapabilityGroupTagSummary.ProtectionCapabilityGroupTagSummary;
import * as ProtectionCapabilitySettings from "./protection-capability-settings";
export import ProtectionCapabilitySettings = ProtectionCapabilitySettings.ProtectionCapabilitySettings;
import * as ProtectionCapabilitySummary from "./protection-capability-summary";
export import ProtectionCapabilitySummary = ProtectionCapabilitySummary.ProtectionCapabilitySummary;
import * as RequestAccessControl from "./request-access-control";
export import RequestAccessControl = RequestAccessControl.RequestAccessControl;
import * as RequestProtection from "./request-protection";
export import RequestProtection = RequestProtection.RequestProtection;
import * as RequestRateLimiting from "./request-rate-limiting";
export import RequestRateLimiting = RequestRateLimiting.RequestRateLimiting;
import * as RequestRateLimitingConfiguration from "./request-rate-limiting-configuration";
export import RequestRateLimitingConfiguration = RequestRateLimitingConfiguration.RequestRateLimitingConfiguration;
import * as ResponseAccessControl from "./response-access-control";
export import ResponseAccessControl = ResponseAccessControl.ResponseAccessControl;
import * as ResponseHeader from "./response-header";
export import ResponseHeader = ResponseHeader.ResponseHeader;
import * as ResponseProtection from "./response-protection";
export import ResponseProtection = ResponseProtection.ResponseProtection;
import * as SortOrder from "./sort-order";
export import SortOrder = SortOrder.SortOrder;
import * as UpdateNetworkAddressListDetails from "./update-network-address-list-details";
export import UpdateNetworkAddressListDetails = UpdateNetworkAddressListDetails.UpdateNetworkAddressListDetails;
import * as UpdateWebAppFirewallDetails from "./update-web-app-firewall-details";
export import UpdateWebAppFirewallDetails = UpdateWebAppFirewallDetails.UpdateWebAppFirewallDetails;
import * as UpdateWebAppFirewallPolicyDetails from "./update-web-app-firewall-policy-details";
export import UpdateWebAppFirewallPolicyDetails = UpdateWebAppFirewallPolicyDetails.UpdateWebAppFirewallPolicyDetails;
import * as WebAppFirewall from "./web-app-firewall";
export import WebAppFirewall = WebAppFirewall.WebAppFirewall;
import * as WebAppFirewallCollection from "./web-app-firewall-collection";
export import WebAppFirewallCollection = WebAppFirewallCollection.WebAppFirewallCollection;
import * as WebAppFirewallPolicy from "./web-app-firewall-policy";
export import WebAppFirewallPolicy = WebAppFirewallPolicy.WebAppFirewallPolicy;
import * as WebAppFirewallPolicyCollection from "./web-app-firewall-policy-collection";
export import WebAppFirewallPolicyCollection = WebAppFirewallPolicyCollection.WebAppFirewallPolicyCollection;
import * as WebAppFirewallPolicyRule from "./web-app-firewall-policy-rule";
export import WebAppFirewallPolicyRule = WebAppFirewallPolicyRule.WebAppFirewallPolicyRule;
import * as WebAppFirewallPolicySummary from "./web-app-firewall-policy-summary";
export import WebAppFirewallPolicySummary = WebAppFirewallPolicySummary.WebAppFirewallPolicySummary;
import * as WebAppFirewallSummary from "./web-app-firewall-summary";
export import WebAppFirewallSummary = WebAppFirewallSummary.WebAppFirewallSummary;
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

import * as AccessControlRule from "./access-control-rule";
export import AccessControlRule = AccessControlRule.AccessControlRule;
import * as AllowAction from "./allow-action";
export import AllowAction = AllowAction.AllowAction;
import * as CheckAction from "./check-action";
export import CheckAction = CheckAction.CheckAction;
import * as CreateNetworkAddressListAddressesDetails from "./create-network-address-list-addresses-details";
export import CreateNetworkAddressListAddressesDetails = CreateNetworkAddressListAddressesDetails.CreateNetworkAddressListAddressesDetails;
import * as CreateNetworkAddressListVcnAddressesDetails from "./create-network-address-list-vcn-addresses-details";
export import CreateNetworkAddressListVcnAddressesDetails = CreateNetworkAddressListVcnAddressesDetails.CreateNetworkAddressListVcnAddressesDetails;
import * as CreateWebAppFirewallLoadBalancerDetails from "./create-web-app-firewall-load-balancer-details";
export import CreateWebAppFirewallLoadBalancerDetails = CreateWebAppFirewallLoadBalancerDetails.CreateWebAppFirewallLoadBalancerDetails;
import * as DynamicHttpResponseBody from "./dynamic-http-response-body";
export import DynamicHttpResponseBody = DynamicHttpResponseBody.DynamicHttpResponseBody;
import * as NetworkAddressListAddresses from "./network-address-list-addresses";
export import NetworkAddressListAddresses = NetworkAddressListAddresses.NetworkAddressListAddresses;
import * as NetworkAddressListAddressesSummary from "./network-address-list-addresses-summary";
export import NetworkAddressListAddressesSummary = NetworkAddressListAddressesSummary.NetworkAddressListAddressesSummary;
import * as NetworkAddressListVcnAddresses from "./network-address-list-vcn-addresses";
export import NetworkAddressListVcnAddresses = NetworkAddressListVcnAddresses.NetworkAddressListVcnAddresses;
import * as NetworkAddressListVcnAddressesSummary from "./network-address-list-vcn-addresses-summary";
export import NetworkAddressListVcnAddressesSummary = NetworkAddressListVcnAddressesSummary.NetworkAddressListVcnAddressesSummary;
import * as ProtectionRule from "./protection-rule";
export import ProtectionRule = ProtectionRule.ProtectionRule;
import * as RequestRateLimitingRule from "./request-rate-limiting-rule";
export import RequestRateLimitingRule = RequestRateLimitingRule.RequestRateLimitingRule;
import * as ReturnHttpResponseAction from "./return-http-response-action";
export import ReturnHttpResponseAction = ReturnHttpResponseAction.ReturnHttpResponseAction;
import * as StaticTextHttpResponseBody from "./static-text-http-response-body";
export import StaticTextHttpResponseBody = StaticTextHttpResponseBody.StaticTextHttpResponseBody;
import * as UpdateNetworkAddressListAddressesDetails from "./update-network-address-list-addresses-details";
export import UpdateNetworkAddressListAddressesDetails = UpdateNetworkAddressListAddressesDetails.UpdateNetworkAddressListAddressesDetails;
import * as UpdateNetworkAddressListVcnAddressesDetails from "./update-network-address-list-vcn-addresses-details";
export import UpdateNetworkAddressListVcnAddressesDetails = UpdateNetworkAddressListVcnAddressesDetails.UpdateNetworkAddressListVcnAddressesDetails;
import * as WebAppFirewallLoadBalancer from "./web-app-firewall-load-balancer";
export import WebAppFirewallLoadBalancer = WebAppFirewallLoadBalancer.WebAppFirewallLoadBalancer;
import * as WebAppFirewallLoadBalancerSummary from "./web-app-firewall-load-balancer-summary";
export import WebAppFirewallLoadBalancerSummary = WebAppFirewallLoadBalancerSummary.WebAppFirewallLoadBalancerSummary;
