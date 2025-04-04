/**
 * Support Management API
 * Use the Support Management API to manage support requests.
For more information, see [Getting Help and Contacting Support](https://docs.oracle.com/iaas/Content/GSG/Tasks/contactingsupport.htm).
**Note**: Before you can create service requests with this API,
complete user registration at My Oracle Cloud Support 
and then ask your tenancy administrator to provide you authorization for the related user groups.

 * OpenAPI spec version: 20181231
 * Contact: oci_ops_cims_dev_us_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2025, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as Category from "./category";
export import Category = Category.Category;
import * as Classifier from "./classifier";
export import Classifier = Classifier.Classifier;
import * as CmosUserGroupInfo from "./cmos-user-group-info";
export import CmosUserGroupInfo = CmosUserGroupInfo.CmosUserGroupInfo;
import * as Contact from "./contact";
export import Contact = Contact.Contact;
import * as ContactList from "./contact-list";
export import ContactList = ContactList.ContactList;
import * as ContextualData from "./contextual-data";
export import ContextualData = ContextualData.ContextualData;
import * as CreateCategoryDetails from "./create-category-details";
export import CreateCategoryDetails = CreateCategoryDetails.CreateCategoryDetails;
import * as CreateIncident from "./create-incident";
export import CreateIncident = CreateIncident.CreateIncident;
import * as CreateIssueTypeDetails from "./create-issue-type-details";
export import CreateIssueTypeDetails = CreateIssueTypeDetails.CreateIssueTypeDetails;
import * as CreateItemDetails from "./create-item-details";
export import CreateItemDetails = CreateItemDetails.CreateItemDetails;
import * as CreateResourceDetails from "./create-resource-details";
export import CreateResourceDetails = CreateResourceDetails.CreateResourceDetails;
import * as CreateSubCategoryDetails from "./create-sub-category-details";
export import CreateSubCategoryDetails = CreateSubCategoryDetails.CreateSubCategoryDetails;
import * as CreateTicketDetails from "./create-ticket-details";
export import CreateTicketDetails = CreateTicketDetails.CreateTicketDetails;
import * as CreateUserDetails from "./create-user-details";
export import CreateUserDetails = CreateUserDetails.CreateUserDetails;
import * as ErrorCode from "./error-code";
export import ErrorCode = ErrorCode.ErrorCode;
import * as Incident from "./incident";
export import Incident = Incident.Incident;
import * as IncidentResourceType from "./incident-resource-type";
export import IncidentResourceType = IncidentResourceType.IncidentResourceType;
import * as IncidentSummary from "./incident-summary";
export import IncidentSummary = IncidentSummary.IncidentSummary;
import * as IncidentType from "./incident-type";
export import IncidentType = IncidentType.IncidentType;
import * as IssueType from "./issue-type";
export import IssueType = IssueType.IssueType;
import * as Item from "./item";
export import Item = Item.Item;
import * as LifecycleDetails from "./lifecycle-details";
export import LifecycleDetails = LifecycleDetails.LifecycleDetails;
import * as LifecycleState from "./lifecycle-state";
export import LifecycleState = LifecycleState.LifecycleState;
import * as ProblemType from "./problem-type";
export import ProblemType = ProblemType.ProblemType;
import * as Resource from "./resource";
export import Resource = Resource.Resource;
import * as Scope from "./scope";
export import Scope = Scope.Scope;
import * as ServiceCategory from "./service-category";
export import ServiceCategory = ServiceCategory.ServiceCategory;
import * as Services from "./services";
export import Services = Services.Services;
import * as SortBy from "./sort-by";
export import SortBy = SortBy.SortBy;
import * as SortOrder from "./sort-order";
export import SortOrder = SortOrder.SortOrder;
import * as Status from "./status";
export import Status = Status.Status;
import * as SubCategories from "./sub-categories";
export import SubCategories = SubCategories.SubCategories;
import * as SubCategory from "./sub-category";
export import SubCategory = SubCategory.SubCategory;
import * as SubComponents from "./sub-components";
export import SubComponents = SubComponents.SubComponents;
import * as SubscriptionInfo from "./subscription-info";
export import SubscriptionInfo = SubscriptionInfo.SubscriptionInfo;
import * as TenancyInformation from "./tenancy-information";
export import TenancyInformation = TenancyInformation.TenancyInformation;
import * as Ticket from "./ticket";
export import Ticket = Ticket.Ticket;
import * as TimeZone from "./time-zone";
export import TimeZone = TimeZone.TimeZone;
import * as Unit from "./unit";
export import Unit = Unit.Unit;
import * as UpdateIncident from "./update-incident";
export import UpdateIncident = UpdateIncident.UpdateIncident;
import * as UpdateItemDetails from "./update-item-details";
export import UpdateItemDetails = UpdateItemDetails.UpdateItemDetails;
import * as UpdateResourceDetails from "./update-resource-details";
export import UpdateResourceDetails = UpdateResourceDetails.UpdateResourceDetails;
import * as UpdateTicketDetails from "./update-ticket-details";
export import UpdateTicketDetails = UpdateTicketDetails.UpdateTicketDetails;
import * as User from "./user";
export import User = User.User;
import * as ValidationResponse from "./validation-response";
export import ValidationResponse = ValidationResponse.ValidationResponse;

import * as AccountItem from "./account-item";
export import AccountItem = AccountItem.AccountItem;
import * as ActivityItem from "./activity-item";
export import ActivityItem = ActivityItem.ActivityItem;
import * as CreateAccountItemDetails from "./create-account-item-details";
export import CreateAccountItemDetails = CreateAccountItemDetails.CreateAccountItemDetails;
import * as CreateLimitItemDetails from "./create-limit-item-details";
export import CreateLimitItemDetails = CreateLimitItemDetails.CreateLimitItemDetails;
import * as CreateTechSupportItemDetails from "./create-tech-support-item-details";
export import CreateTechSupportItemDetails = CreateTechSupportItemDetails.CreateTechSupportItemDetails;
import * as LimitItem from "./limit-item";
export import LimitItem = LimitItem.LimitItem;
import * as TechSupportItem from "./tech-support-item";
export import TechSupportItem = TechSupportItem.TechSupportItem;
import * as UpdateActivityItemDetails from "./update-activity-item-details";
export import UpdateActivityItemDetails = UpdateActivityItemDetails.UpdateActivityItemDetails;
