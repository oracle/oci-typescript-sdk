/**
 * Oracle Cloud VMware Solution API
 * Use the Oracle Cloud VMware API to create SDDCs and manage ESXi hosts and software. 
For more information, see [Oracle Cloud VMware Solution](https://docs.oracle.com/iaas/Content/VMware/Concepts/ocvsoverview.htm).

 * OpenAPI spec version: 20230701
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2025, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as ActionTypes from "./action-types";
export import ActionTypes = ActionTypes.ActionTypes;
import * as ChangeSddcCompartmentDetails from "./change-sddc-compartment-details";
export import ChangeSddcCompartmentDetails = ChangeSddcCompartmentDetails.ChangeSddcCompartmentDetails;
import * as Cluster from "./cluster";
export import Cluster = Cluster.Cluster;
import * as ClusterCollection from "./cluster-collection";
export import ClusterCollection = ClusterCollection.ClusterCollection;
import * as ClusterSummary from "./cluster-summary";
export import ClusterSummary = ClusterSummary.ClusterSummary;
import * as Commitment from "./commitment";
export import Commitment = Commitment.Commitment;
import * as CreateClusterDetails from "./create-cluster-details";
export import CreateClusterDetails = CreateClusterDetails.CreateClusterDetails;
import * as CreateEsxiHostDetails from "./create-esxi-host-details";
export import CreateEsxiHostDetails = CreateEsxiHostDetails.CreateEsxiHostDetails;
import * as CreateSddcDetails from "./create-sddc-details";
export import CreateSddcDetails = CreateSddcDetails.CreateSddcDetails;
import * as DatastoreClusterTypes from "./datastore-cluster-types";
export import DatastoreClusterTypes = DatastoreClusterTypes.DatastoreClusterTypes;
import * as DatastoreDetails from "./datastore-details";
export import DatastoreDetails = DatastoreDetails.DatastoreDetails;
import * as DatastoreInfo from "./datastore-info";
export import DatastoreInfo = DatastoreInfo.DatastoreInfo;
import * as DatastoreTypes from "./datastore-types";
export import DatastoreTypes = DatastoreTypes.DatastoreTypes;
import * as DowngradeHcxDetails from "./downgrade-hcx-details";
export import DowngradeHcxDetails = DowngradeHcxDetails.DowngradeHcxDetails;
import * as EsxiHost from "./esxi-host";
export import EsxiHost = EsxiHost.EsxiHost;
import * as EsxiHostCollection from "./esxi-host-collection";
export import EsxiHostCollection = EsxiHostCollection.EsxiHostCollection;
import * as EsxiHostSummary from "./esxi-host-summary";
export import EsxiHostSummary = EsxiHostSummary.EsxiHostSummary;
import * as HcxLicenseStatus from "./hcx-license-status";
export import HcxLicenseStatus = HcxLicenseStatus.HcxLicenseStatus;
import * as HcxLicenseSummary from "./hcx-license-summary";
export import HcxLicenseSummary = HcxLicenseSummary.HcxLicenseSummary;
import * as HcxModes from "./hcx-modes";
export import HcxModes = HcxModes.HcxModes;
import * as InitialClusterConfiguration from "./initial-cluster-configuration";
export import InitialClusterConfiguration = InitialClusterConfiguration.InitialClusterConfiguration;
import * as InitialConfiguration from "./initial-configuration";
export import InitialConfiguration = InitialConfiguration.InitialConfiguration;
import * as LifecycleStates from "./lifecycle-states";
export import LifecycleStates = LifecycleStates.LifecycleStates;
import * as NetworkConfiguration from "./network-configuration";
export import NetworkConfiguration = NetworkConfiguration.NetworkConfiguration;
import * as OperationStatus from "./operation-status";
export import OperationStatus = OperationStatus.OperationStatus;
import * as OperationTypes from "./operation-types";
export import OperationTypes = OperationTypes.OperationTypes;
import * as PasswordTypes from "./password-types";
export import PasswordTypes = PasswordTypes.PasswordTypes;
import * as ReplaceHostDetails from "./replace-host-details";
export import ReplaceHostDetails = ReplaceHostDetails.ReplaceHostDetails;
import * as Sddc from "./sddc";
export import Sddc = Sddc.Sddc;
import * as SddcCollection from "./sddc-collection";
export import SddcCollection = SddcCollection.SddcCollection;
import * as SddcPassword from "./sddc-password";
export import SddcPassword = SddcPassword.SddcPassword;
import * as SddcSummary from "./sddc-summary";
export import SddcSummary = SddcSummary.SddcSummary;
import * as SortOrders from "./sort-orders";
export import SortOrders = SortOrders.SortOrders;
import * as SupportedCommitmentSummary from "./supported-commitment-summary";
export import SupportedCommitmentSummary = SupportedCommitmentSummary.SupportedCommitmentSummary;
import * as SupportedCommitmentSummaryCollection from "./supported-commitment-summary-collection";
export import SupportedCommitmentSummaryCollection = SupportedCommitmentSummaryCollection.SupportedCommitmentSummaryCollection;
import * as SupportedEsxiSoftwareVersionSummary from "./supported-esxi-software-version-summary";
export import SupportedEsxiSoftwareVersionSummary = SupportedEsxiSoftwareVersionSummary.SupportedEsxiSoftwareVersionSummary;
import * as SupportedHostShapeCollection from "./supported-host-shape-collection";
export import SupportedHostShapeCollection = SupportedHostShapeCollection.SupportedHostShapeCollection;
import * as SupportedHostShapeSummary from "./supported-host-shape-summary";
export import SupportedHostShapeSummary = SupportedHostShapeSummary.SupportedHostShapeSummary;
import * as SupportedVmwareSoftwareVersionCollection from "./supported-vmware-software-version-collection";
export import SupportedVmwareSoftwareVersionCollection = SupportedVmwareSoftwareVersionCollection.SupportedVmwareSoftwareVersionCollection;
import * as SupportedVmwareSoftwareVersionSummary from "./supported-vmware-software-version-summary";
export import SupportedVmwareSoftwareVersionSummary = SupportedVmwareSoftwareVersionSummary.SupportedVmwareSoftwareVersionSummary;
import * as UpdateClusterDetails from "./update-cluster-details";
export import UpdateClusterDetails = UpdateClusterDetails.UpdateClusterDetails;
import * as UpdateEsxiHostDetails from "./update-esxi-host-details";
export import UpdateEsxiHostDetails = UpdateEsxiHostDetails.UpdateEsxiHostDetails;
import * as UpdateSddcDetails from "./update-sddc-details";
export import UpdateSddcDetails = UpdateSddcDetails.UpdateSddcDetails;
import * as VsphereLicense from "./vsphere-license";
export import VsphereLicense = VsphereLicense.VsphereLicense;
import * as VsphereTypes from "./vsphere-types";
export import VsphereTypes = VsphereTypes.VsphereTypes;
import * as VsphereUpgradeObject from "./vsphere-upgrade-object";
export import VsphereUpgradeObject = VsphereUpgradeObject.VsphereUpgradeObject;
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
