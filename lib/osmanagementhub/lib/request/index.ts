/**
 * OS Management Hub API
 * Use the OS Management Hub API to manage and monitor updates and patches for instances in OCI, your private data center, or 3rd-party clouds. 
For more information, see [Overview of OS Management Hub](https://docs.oracle.com/iaas/osmh/doc/overview.htm).

 * OpenAPI spec version: 20220901
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2025, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as ChangeEventCompartmentRequest from "./change-event-compartment-request";
export import ChangeEventCompartmentRequest = ChangeEventCompartmentRequest.ChangeEventCompartmentRequest;
import * as DeleteEventRequest from "./delete-event-request";
export import DeleteEventRequest = DeleteEventRequest.DeleteEventRequest;
import * as DeleteEventContentRequest from "./delete-event-content-request";
export import DeleteEventContentRequest = DeleteEventContentRequest.DeleteEventContentRequest;
import * as GetEventRequest from "./get-event-request";
export import GetEventRequest = GetEventRequest.GetEventRequest;
import * as GetEventContentRequest from "./get-event-content-request";
export import GetEventContentRequest = GetEventContentRequest.GetEventContentRequest;
import * as ImportEventContentRequest from "./import-event-content-request";
export import ImportEventContentRequest = ImportEventContentRequest.ImportEventContentRequest;
import * as ListEventsRequest from "./list-events-request";
export import ListEventsRequest = ListEventsRequest.ListEventsRequest;
import * as UpdateEventRequest from "./update-event-request";
export import UpdateEventRequest = UpdateEventRequest.UpdateEventRequest;
import * as AttachManagedInstancesToLifecycleStageRequest from "./attach-managed-instances-to-lifecycle-stage-request";
export import AttachManagedInstancesToLifecycleStageRequest = AttachManagedInstancesToLifecycleStageRequest.AttachManagedInstancesToLifecycleStageRequest;
import * as ChangeLifecycleEnvironmentCompartmentRequest from "./change-lifecycle-environment-compartment-request";
export import ChangeLifecycleEnvironmentCompartmentRequest = ChangeLifecycleEnvironmentCompartmentRequest.ChangeLifecycleEnvironmentCompartmentRequest;
import * as CreateLifecycleEnvironmentRequest from "./create-lifecycle-environment-request";
export import CreateLifecycleEnvironmentRequest = CreateLifecycleEnvironmentRequest.CreateLifecycleEnvironmentRequest;
import * as DeleteLifecycleEnvironmentRequest from "./delete-lifecycle-environment-request";
export import DeleteLifecycleEnvironmentRequest = DeleteLifecycleEnvironmentRequest.DeleteLifecycleEnvironmentRequest;
import * as DetachManagedInstancesFromLifecycleStageRequest from "./detach-managed-instances-from-lifecycle-stage-request";
export import DetachManagedInstancesFromLifecycleStageRequest = DetachManagedInstancesFromLifecycleStageRequest.DetachManagedInstancesFromLifecycleStageRequest;
import * as GetLifecycleEnvironmentRequest from "./get-lifecycle-environment-request";
export import GetLifecycleEnvironmentRequest = GetLifecycleEnvironmentRequest.GetLifecycleEnvironmentRequest;
import * as GetLifecycleStageRequest from "./get-lifecycle-stage-request";
export import GetLifecycleStageRequest = GetLifecycleStageRequest.GetLifecycleStageRequest;
import * as ListLifecycleEnvironmentsRequest from "./list-lifecycle-environments-request";
export import ListLifecycleEnvironmentsRequest = ListLifecycleEnvironmentsRequest.ListLifecycleEnvironmentsRequest;
import * as ListLifecycleStageInstalledPackagesRequest from "./list-lifecycle-stage-installed-packages-request";
export import ListLifecycleStageInstalledPackagesRequest = ListLifecycleStageInstalledPackagesRequest.ListLifecycleStageInstalledPackagesRequest;
import * as ListLifecycleStagesRequest from "./list-lifecycle-stages-request";
export import ListLifecycleStagesRequest = ListLifecycleStagesRequest.ListLifecycleStagesRequest;
import * as PromoteSoftwareSourceToLifecycleStageRequest from "./promote-software-source-to-lifecycle-stage-request";
export import PromoteSoftwareSourceToLifecycleStageRequest = PromoteSoftwareSourceToLifecycleStageRequest.PromoteSoftwareSourceToLifecycleStageRequest;
import * as RebootLifecycleStageRequest from "./reboot-lifecycle-stage-request";
export import RebootLifecycleStageRequest = RebootLifecycleStageRequest.RebootLifecycleStageRequest;
import * as UpdateLifecycleEnvironmentRequest from "./update-lifecycle-environment-request";
export import UpdateLifecycleEnvironmentRequest = UpdateLifecycleEnvironmentRequest.UpdateLifecycleEnvironmentRequest;
import * as AssociateManagedInstancesWithManagementStationRequest from "./associate-managed-instances-with-management-station-request";
export import AssociateManagedInstancesWithManagementStationRequest = AssociateManagedInstancesWithManagementStationRequest.AssociateManagedInstancesWithManagementStationRequest;
import * as AttachProfileToManagedInstanceRequest from "./attach-profile-to-managed-instance-request";
export import AttachProfileToManagedInstanceRequest = AttachProfileToManagedInstanceRequest.AttachProfileToManagedInstanceRequest;
import * as AttachSoftwareSourcesToManagedInstanceRequest from "./attach-software-sources-to-managed-instance-request";
export import AttachSoftwareSourcesToManagedInstanceRequest = AttachSoftwareSourcesToManagedInstanceRequest.AttachSoftwareSourcesToManagedInstanceRequest;
import * as DeleteManagedInstanceRequest from "./delete-managed-instance-request";
export import DeleteManagedInstanceRequest = DeleteManagedInstanceRequest.DeleteManagedInstanceRequest;
import * as DetachProfileFromManagedInstanceRequest from "./detach-profile-from-managed-instance-request";
export import DetachProfileFromManagedInstanceRequest = DetachProfileFromManagedInstanceRequest.DetachProfileFromManagedInstanceRequest;
import * as DetachSoftwareSourcesFromManagedInstanceRequest from "./detach-software-sources-from-managed-instance-request";
export import DetachSoftwareSourcesFromManagedInstanceRequest = DetachSoftwareSourcesFromManagedInstanceRequest.DetachSoftwareSourcesFromManagedInstanceRequest;
import * as DisableModuleStreamOnManagedInstanceRequest from "./disable-module-stream-on-managed-instance-request";
export import DisableModuleStreamOnManagedInstanceRequest = DisableModuleStreamOnManagedInstanceRequest.DisableModuleStreamOnManagedInstanceRequest;
import * as EnableModuleStreamOnManagedInstanceRequest from "./enable-module-stream-on-managed-instance-request";
export import EnableModuleStreamOnManagedInstanceRequest = EnableModuleStreamOnManagedInstanceRequest.EnableModuleStreamOnManagedInstanceRequest;
import * as GetManagedInstanceRequest from "./get-managed-instance-request";
export import GetManagedInstanceRequest = GetManagedInstanceRequest.GetManagedInstanceRequest;
import * as GetWindowsUpdateRequest from "./get-windows-update-request";
export import GetWindowsUpdateRequest = GetWindowsUpdateRequest.GetWindowsUpdateRequest;
import * as InstallAllWindowsUpdatesOnManagedInstancesInCompartmentRequest from "./install-all-windows-updates-on-managed-instances-in-compartment-request";
export import InstallAllWindowsUpdatesOnManagedInstancesInCompartmentRequest = InstallAllWindowsUpdatesOnManagedInstancesInCompartmentRequest.InstallAllWindowsUpdatesOnManagedInstancesInCompartmentRequest;
import * as InstallModuleStreamProfileOnManagedInstanceRequest from "./install-module-stream-profile-on-managed-instance-request";
export import InstallModuleStreamProfileOnManagedInstanceRequest = InstallModuleStreamProfileOnManagedInstanceRequest.InstallModuleStreamProfileOnManagedInstanceRequest;
import * as InstallPackagesOnManagedInstanceRequest from "./install-packages-on-managed-instance-request";
export import InstallPackagesOnManagedInstanceRequest = InstallPackagesOnManagedInstanceRequest.InstallPackagesOnManagedInstanceRequest;
import * as InstallWindowsUpdatesOnManagedInstanceRequest from "./install-windows-updates-on-managed-instance-request";
export import InstallWindowsUpdatesOnManagedInstanceRequest = InstallWindowsUpdatesOnManagedInstanceRequest.InstallWindowsUpdatesOnManagedInstanceRequest;
import * as ListManagedInstanceAvailablePackagesRequest from "./list-managed-instance-available-packages-request";
export import ListManagedInstanceAvailablePackagesRequest = ListManagedInstanceAvailablePackagesRequest.ListManagedInstanceAvailablePackagesRequest;
import * as ListManagedInstanceAvailableSoftwareSourcesRequest from "./list-managed-instance-available-software-sources-request";
export import ListManagedInstanceAvailableSoftwareSourcesRequest = ListManagedInstanceAvailableSoftwareSourcesRequest.ListManagedInstanceAvailableSoftwareSourcesRequest;
import * as ListManagedInstanceAvailableWindowsUpdatesRequest from "./list-managed-instance-available-windows-updates-request";
export import ListManagedInstanceAvailableWindowsUpdatesRequest = ListManagedInstanceAvailableWindowsUpdatesRequest.ListManagedInstanceAvailableWindowsUpdatesRequest;
import * as ListManagedInstanceErrataRequest from "./list-managed-instance-errata-request";
export import ListManagedInstanceErrataRequest = ListManagedInstanceErrataRequest.ListManagedInstanceErrataRequest;
import * as ListManagedInstanceInstalledPackagesRequest from "./list-managed-instance-installed-packages-request";
export import ListManagedInstanceInstalledPackagesRequest = ListManagedInstanceInstalledPackagesRequest.ListManagedInstanceInstalledPackagesRequest;
import * as ListManagedInstanceInstalledWindowsUpdatesRequest from "./list-managed-instance-installed-windows-updates-request";
export import ListManagedInstanceInstalledWindowsUpdatesRequest = ListManagedInstanceInstalledWindowsUpdatesRequest.ListManagedInstanceInstalledWindowsUpdatesRequest;
import * as ListManagedInstanceModulesRequest from "./list-managed-instance-modules-request";
export import ListManagedInstanceModulesRequest = ListManagedInstanceModulesRequest.ListManagedInstanceModulesRequest;
import * as ListManagedInstanceUpdatablePackagesRequest from "./list-managed-instance-updatable-packages-request";
export import ListManagedInstanceUpdatablePackagesRequest = ListManagedInstanceUpdatablePackagesRequest.ListManagedInstanceUpdatablePackagesRequest;
import * as ListManagedInstancesRequest from "./list-managed-instances-request";
export import ListManagedInstancesRequest = ListManagedInstancesRequest.ListManagedInstancesRequest;
import * as ListWindowsUpdatesRequest from "./list-windows-updates-request";
export import ListWindowsUpdatesRequest = ListWindowsUpdatesRequest.ListWindowsUpdatesRequest;
import * as ManageModuleStreamsOnManagedInstanceRequest from "./manage-module-streams-on-managed-instance-request";
export import ManageModuleStreamsOnManagedInstanceRequest = ManageModuleStreamsOnManagedInstanceRequest.ManageModuleStreamsOnManagedInstanceRequest;
import * as RebootManagedInstanceRequest from "./reboot-managed-instance-request";
export import RebootManagedInstanceRequest = RebootManagedInstanceRequest.RebootManagedInstanceRequest;
import * as RefreshSoftwareOnManagedInstanceRequest from "./refresh-software-on-managed-instance-request";
export import RefreshSoftwareOnManagedInstanceRequest = RefreshSoftwareOnManagedInstanceRequest.RefreshSoftwareOnManagedInstanceRequest;
import * as RemoveModuleStreamProfileFromManagedInstanceRequest from "./remove-module-stream-profile-from-managed-instance-request";
export import RemoveModuleStreamProfileFromManagedInstanceRequest = RemoveModuleStreamProfileFromManagedInstanceRequest.RemoveModuleStreamProfileFromManagedInstanceRequest;
import * as RemovePackagesFromManagedInstanceRequest from "./remove-packages-from-managed-instance-request";
export import RemovePackagesFromManagedInstanceRequest = RemovePackagesFromManagedInstanceRequest.RemovePackagesFromManagedInstanceRequest;
import * as SwitchModuleStreamOnManagedInstanceRequest from "./switch-module-stream-on-managed-instance-request";
export import SwitchModuleStreamOnManagedInstanceRequest = SwitchModuleStreamOnManagedInstanceRequest.SwitchModuleStreamOnManagedInstanceRequest;
import * as UpdateAllPackagesOnManagedInstancesInCompartmentRequest from "./update-all-packages-on-managed-instances-in-compartment-request";
export import UpdateAllPackagesOnManagedInstancesInCompartmentRequest = UpdateAllPackagesOnManagedInstancesInCompartmentRequest.UpdateAllPackagesOnManagedInstancesInCompartmentRequest;
import * as UpdateManagedInstanceRequest from "./update-managed-instance-request";
export import UpdateManagedInstanceRequest = UpdateManagedInstanceRequest.UpdateManagedInstanceRequest;
import * as UpdatePackagesOnManagedInstanceRequest from "./update-packages-on-managed-instance-request";
export import UpdatePackagesOnManagedInstanceRequest = UpdatePackagesOnManagedInstanceRequest.UpdatePackagesOnManagedInstanceRequest;
import * as AttachManagedInstancesToManagedInstanceGroupRequest from "./attach-managed-instances-to-managed-instance-group-request";
export import AttachManagedInstancesToManagedInstanceGroupRequest = AttachManagedInstancesToManagedInstanceGroupRequest.AttachManagedInstancesToManagedInstanceGroupRequest;
import * as AttachSoftwareSourcesToManagedInstanceGroupRequest from "./attach-software-sources-to-managed-instance-group-request";
export import AttachSoftwareSourcesToManagedInstanceGroupRequest = AttachSoftwareSourcesToManagedInstanceGroupRequest.AttachSoftwareSourcesToManagedInstanceGroupRequest;
import * as ChangeManagedInstanceGroupCompartmentRequest from "./change-managed-instance-group-compartment-request";
export import ChangeManagedInstanceGroupCompartmentRequest = ChangeManagedInstanceGroupCompartmentRequest.ChangeManagedInstanceGroupCompartmentRequest;
import * as CreateManagedInstanceGroupRequest from "./create-managed-instance-group-request";
export import CreateManagedInstanceGroupRequest = CreateManagedInstanceGroupRequest.CreateManagedInstanceGroupRequest;
import * as DeleteManagedInstanceGroupRequest from "./delete-managed-instance-group-request";
export import DeleteManagedInstanceGroupRequest = DeleteManagedInstanceGroupRequest.DeleteManagedInstanceGroupRequest;
import * as DetachManagedInstancesFromManagedInstanceGroupRequest from "./detach-managed-instances-from-managed-instance-group-request";
export import DetachManagedInstancesFromManagedInstanceGroupRequest = DetachManagedInstancesFromManagedInstanceGroupRequest.DetachManagedInstancesFromManagedInstanceGroupRequest;
import * as DetachSoftwareSourcesFromManagedInstanceGroupRequest from "./detach-software-sources-from-managed-instance-group-request";
export import DetachSoftwareSourcesFromManagedInstanceGroupRequest = DetachSoftwareSourcesFromManagedInstanceGroupRequest.DetachSoftwareSourcesFromManagedInstanceGroupRequest;
import * as DisableModuleStreamOnManagedInstanceGroupRequest from "./disable-module-stream-on-managed-instance-group-request";
export import DisableModuleStreamOnManagedInstanceGroupRequest = DisableModuleStreamOnManagedInstanceGroupRequest.DisableModuleStreamOnManagedInstanceGroupRequest;
import * as EnableModuleStreamOnManagedInstanceGroupRequest from "./enable-module-stream-on-managed-instance-group-request";
export import EnableModuleStreamOnManagedInstanceGroupRequest = EnableModuleStreamOnManagedInstanceGroupRequest.EnableModuleStreamOnManagedInstanceGroupRequest;
import * as GetManagedInstanceGroupRequest from "./get-managed-instance-group-request";
export import GetManagedInstanceGroupRequest = GetManagedInstanceGroupRequest.GetManagedInstanceGroupRequest;
import * as InstallModuleStreamProfileOnManagedInstanceGroupRequest from "./install-module-stream-profile-on-managed-instance-group-request";
export import InstallModuleStreamProfileOnManagedInstanceGroupRequest = InstallModuleStreamProfileOnManagedInstanceGroupRequest.InstallModuleStreamProfileOnManagedInstanceGroupRequest;
import * as InstallPackagesOnManagedInstanceGroupRequest from "./install-packages-on-managed-instance-group-request";
export import InstallPackagesOnManagedInstanceGroupRequest = InstallPackagesOnManagedInstanceGroupRequest.InstallPackagesOnManagedInstanceGroupRequest;
import * as InstallWindowsUpdatesOnManagedInstanceGroupRequest from "./install-windows-updates-on-managed-instance-group-request";
export import InstallWindowsUpdatesOnManagedInstanceGroupRequest = InstallWindowsUpdatesOnManagedInstanceGroupRequest.InstallWindowsUpdatesOnManagedInstanceGroupRequest;
import * as ListManagedInstanceGroupAvailableModulesRequest from "./list-managed-instance-group-available-modules-request";
export import ListManagedInstanceGroupAvailableModulesRequest = ListManagedInstanceGroupAvailableModulesRequest.ListManagedInstanceGroupAvailableModulesRequest;
import * as ListManagedInstanceGroupAvailablePackagesRequest from "./list-managed-instance-group-available-packages-request";
export import ListManagedInstanceGroupAvailablePackagesRequest = ListManagedInstanceGroupAvailablePackagesRequest.ListManagedInstanceGroupAvailablePackagesRequest;
import * as ListManagedInstanceGroupAvailableSoftwareSourcesRequest from "./list-managed-instance-group-available-software-sources-request";
export import ListManagedInstanceGroupAvailableSoftwareSourcesRequest = ListManagedInstanceGroupAvailableSoftwareSourcesRequest.ListManagedInstanceGroupAvailableSoftwareSourcesRequest;
import * as ListManagedInstanceGroupInstalledPackagesRequest from "./list-managed-instance-group-installed-packages-request";
export import ListManagedInstanceGroupInstalledPackagesRequest = ListManagedInstanceGroupInstalledPackagesRequest.ListManagedInstanceGroupInstalledPackagesRequest;
import * as ListManagedInstanceGroupModulesRequest from "./list-managed-instance-group-modules-request";
export import ListManagedInstanceGroupModulesRequest = ListManagedInstanceGroupModulesRequest.ListManagedInstanceGroupModulesRequest;
import * as ListManagedInstanceGroupsRequest from "./list-managed-instance-groups-request";
export import ListManagedInstanceGroupsRequest = ListManagedInstanceGroupsRequest.ListManagedInstanceGroupsRequest;
import * as ManageModuleStreamsOnManagedInstanceGroupRequest from "./manage-module-streams-on-managed-instance-group-request";
export import ManageModuleStreamsOnManagedInstanceGroupRequest = ManageModuleStreamsOnManagedInstanceGroupRequest.ManageModuleStreamsOnManagedInstanceGroupRequest;
import * as RebootManagedInstanceGroupRequest from "./reboot-managed-instance-group-request";
export import RebootManagedInstanceGroupRequest = RebootManagedInstanceGroupRequest.RebootManagedInstanceGroupRequest;
import * as RemoveModuleStreamProfileFromManagedInstanceGroupRequest from "./remove-module-stream-profile-from-managed-instance-group-request";
export import RemoveModuleStreamProfileFromManagedInstanceGroupRequest = RemoveModuleStreamProfileFromManagedInstanceGroupRequest.RemoveModuleStreamProfileFromManagedInstanceGroupRequest;
import * as RemovePackagesFromManagedInstanceGroupRequest from "./remove-packages-from-managed-instance-group-request";
export import RemovePackagesFromManagedInstanceGroupRequest = RemovePackagesFromManagedInstanceGroupRequest.RemovePackagesFromManagedInstanceGroupRequest;
import * as SwitchModuleStreamOnManagedInstanceGroupRequest from "./switch-module-stream-on-managed-instance-group-request";
export import SwitchModuleStreamOnManagedInstanceGroupRequest = SwitchModuleStreamOnManagedInstanceGroupRequest.SwitchModuleStreamOnManagedInstanceGroupRequest;
import * as UpdateAllPackagesOnManagedInstanceGroupRequest from "./update-all-packages-on-managed-instance-group-request";
export import UpdateAllPackagesOnManagedInstanceGroupRequest = UpdateAllPackagesOnManagedInstanceGroupRequest.UpdateAllPackagesOnManagedInstanceGroupRequest;
import * as UpdateManagedInstanceGroupRequest from "./update-managed-instance-group-request";
export import UpdateManagedInstanceGroupRequest = UpdateManagedInstanceGroupRequest.UpdateManagedInstanceGroupRequest;
import * as ChangeManagementStationCompartmentRequest from "./change-management-station-compartment-request";
export import ChangeManagementStationCompartmentRequest = ChangeManagementStationCompartmentRequest.ChangeManagementStationCompartmentRequest;
import * as CreateManagementStationRequest from "./create-management-station-request";
export import CreateManagementStationRequest = CreateManagementStationRequest.CreateManagementStationRequest;
import * as DeleteManagementStationRequest from "./delete-management-station-request";
export import DeleteManagementStationRequest = DeleteManagementStationRequest.DeleteManagementStationRequest;
import * as GetManagementStationRequest from "./get-management-station-request";
export import GetManagementStationRequest = GetManagementStationRequest.GetManagementStationRequest;
import * as ListManagementStationsRequest from "./list-management-stations-request";
export import ListManagementStationsRequest = ListManagementStationsRequest.ListManagementStationsRequest;
import * as ListMirrorsRequest from "./list-mirrors-request";
export import ListMirrorsRequest = ListMirrorsRequest.ListMirrorsRequest;
import * as RefreshManagementStationConfigRequest from "./refresh-management-station-config-request";
export import RefreshManagementStationConfigRequest = RefreshManagementStationConfigRequest.RefreshManagementStationConfigRequest;
import * as SynchronizeMirrorsRequest from "./synchronize-mirrors-request";
export import SynchronizeMirrorsRequest = SynchronizeMirrorsRequest.SynchronizeMirrorsRequest;
import * as SynchronizeSingleMirrorsRequest from "./synchronize-single-mirrors-request";
export import SynchronizeSingleMirrorsRequest = SynchronizeSingleMirrorsRequest.SynchronizeSingleMirrorsRequest;
import * as UpdateManagementStationRequest from "./update-management-station-request";
export import UpdateManagementStationRequest = UpdateManagementStationRequest.UpdateManagementStationRequest;
import * as AttachLifecycleStageToProfileRequest from "./attach-lifecycle-stage-to-profile-request";
export import AttachLifecycleStageToProfileRequest = AttachLifecycleStageToProfileRequest.AttachLifecycleStageToProfileRequest;
import * as AttachManagedInstanceGroupToProfileRequest from "./attach-managed-instance-group-to-profile-request";
export import AttachManagedInstanceGroupToProfileRequest = AttachManagedInstanceGroupToProfileRequest.AttachManagedInstanceGroupToProfileRequest;
import * as AttachManagementStationToProfileRequest from "./attach-management-station-to-profile-request";
export import AttachManagementStationToProfileRequest = AttachManagementStationToProfileRequest.AttachManagementStationToProfileRequest;
import * as AttachSoftwareSourcesToProfileRequest from "./attach-software-sources-to-profile-request";
export import AttachSoftwareSourcesToProfileRequest = AttachSoftwareSourcesToProfileRequest.AttachSoftwareSourcesToProfileRequest;
import * as ChangeProfileCompartmentRequest from "./change-profile-compartment-request";
export import ChangeProfileCompartmentRequest = ChangeProfileCompartmentRequest.ChangeProfileCompartmentRequest;
import * as CreateProfileRequest from "./create-profile-request";
export import CreateProfileRequest = CreateProfileRequest.CreateProfileRequest;
import * as DeleteProfileRequest from "./delete-profile-request";
export import DeleteProfileRequest = DeleteProfileRequest.DeleteProfileRequest;
import * as DetachSoftwareSourcesFromProfileRequest from "./detach-software-sources-from-profile-request";
export import DetachSoftwareSourcesFromProfileRequest = DetachSoftwareSourcesFromProfileRequest.DetachSoftwareSourcesFromProfileRequest;
import * as GetProfileRequest from "./get-profile-request";
export import GetProfileRequest = GetProfileRequest.GetProfileRequest;
import * as GetProfileVersionRequest from "./get-profile-version-request";
export import GetProfileVersionRequest = GetProfileVersionRequest.GetProfileVersionRequest;
import * as ListProfileAvailableSoftwareSourcesRequest from "./list-profile-available-software-sources-request";
export import ListProfileAvailableSoftwareSourcesRequest = ListProfileAvailableSoftwareSourcesRequest.ListProfileAvailableSoftwareSourcesRequest;
import * as ListProfilesRequest from "./list-profiles-request";
export import ListProfilesRequest = ListProfilesRequest.ListProfilesRequest;
import * as UpdateProfileRequest from "./update-profile-request";
export import UpdateProfileRequest = UpdateProfileRequest.UpdateProfileRequest;
import * as GetManagedInstanceAnalyticContentRequest from "./get-managed-instance-analytic-content-request";
export import GetManagedInstanceAnalyticContentRequest = GetManagedInstanceAnalyticContentRequest.GetManagedInstanceAnalyticContentRequest;
import * as GetManagedInstanceContentRequest from "./get-managed-instance-content-request";
export import GetManagedInstanceContentRequest = GetManagedInstanceContentRequest.GetManagedInstanceContentRequest;
import * as SummarizeManagedInstanceAnalyticsRequest from "./summarize-managed-instance-analytics-request";
export import SummarizeManagedInstanceAnalyticsRequest = SummarizeManagedInstanceAnalyticsRequest.SummarizeManagedInstanceAnalyticsRequest;
import * as ChangeScheduledJobCompartmentRequest from "./change-scheduled-job-compartment-request";
export import ChangeScheduledJobCompartmentRequest = ChangeScheduledJobCompartmentRequest.ChangeScheduledJobCompartmentRequest;
import * as CreateScheduledJobRequest from "./create-scheduled-job-request";
export import CreateScheduledJobRequest = CreateScheduledJobRequest.CreateScheduledJobRequest;
import * as DeleteScheduledJobRequest from "./delete-scheduled-job-request";
export import DeleteScheduledJobRequest = DeleteScheduledJobRequest.DeleteScheduledJobRequest;
import * as GetScheduledJobRequest from "./get-scheduled-job-request";
export import GetScheduledJobRequest = GetScheduledJobRequest.GetScheduledJobRequest;
import * as ListScheduledJobsRequest from "./list-scheduled-jobs-request";
export import ListScheduledJobsRequest = ListScheduledJobsRequest.ListScheduledJobsRequest;
import * as RunScheduledJobNowRequest from "./run-scheduled-job-now-request";
export import RunScheduledJobNowRequest = RunScheduledJobNowRequest.RunScheduledJobNowRequest;
import * as UpdateScheduledJobRequest from "./update-scheduled-job-request";
export import UpdateScheduledJobRequest = UpdateScheduledJobRequest.UpdateScheduledJobRequest;
import * as AddPackagesToSoftwareSourceRequest from "./add-packages-to-software-source-request";
export import AddPackagesToSoftwareSourceRequest = AddPackagesToSoftwareSourceRequest.AddPackagesToSoftwareSourceRequest;
import * as ChangeAvailabilityOfSoftwareSourcesRequest from "./change-availability-of-software-sources-request";
export import ChangeAvailabilityOfSoftwareSourcesRequest = ChangeAvailabilityOfSoftwareSourcesRequest.ChangeAvailabilityOfSoftwareSourcesRequest;
import * as ChangeSoftwareSourceCompartmentRequest from "./change-software-source-compartment-request";
export import ChangeSoftwareSourceCompartmentRequest = ChangeSoftwareSourceCompartmentRequest.ChangeSoftwareSourceCompartmentRequest;
import * as CreateEntitlementRequest from "./create-entitlement-request";
export import CreateEntitlementRequest = CreateEntitlementRequest.CreateEntitlementRequest;
import * as CreateSoftwareSourceRequest from "./create-software-source-request";
export import CreateSoftwareSourceRequest = CreateSoftwareSourceRequest.CreateSoftwareSourceRequest;
import * as DeleteSoftwareSourceRequest from "./delete-software-source-request";
export import DeleteSoftwareSourceRequest = DeleteSoftwareSourceRequest.DeleteSoftwareSourceRequest;
import * as GetErratumRequest from "./get-erratum-request";
export import GetErratumRequest = GetErratumRequest.GetErratumRequest;
import * as GetModuleStreamRequest from "./get-module-stream-request";
export import GetModuleStreamRequest = GetModuleStreamRequest.GetModuleStreamRequest;
import * as GetModuleStreamProfileRequest from "./get-module-stream-profile-request";
export import GetModuleStreamProfileRequest = GetModuleStreamProfileRequest.GetModuleStreamProfileRequest;
import * as GetPackageGroupRequest from "./get-package-group-request";
export import GetPackageGroupRequest = GetPackageGroupRequest.GetPackageGroupRequest;
import * as GetSoftwarePackageRequest from "./get-software-package-request";
export import GetSoftwarePackageRequest = GetSoftwarePackageRequest.GetSoftwarePackageRequest;
import * as GetSoftwarePackageByNameRequest from "./get-software-package-by-name-request";
export import GetSoftwarePackageByNameRequest = GetSoftwarePackageByNameRequest.GetSoftwarePackageByNameRequest;
import * as GetSoftwareSourceRequest from "./get-software-source-request";
export import GetSoftwareSourceRequest = GetSoftwareSourceRequest.GetSoftwareSourceRequest;
import * as GetSoftwareSourceManifestRequest from "./get-software-source-manifest-request";
export import GetSoftwareSourceManifestRequest = GetSoftwareSourceManifestRequest.GetSoftwareSourceManifestRequest;
import * as ListAllSoftwarePackagesRequest from "./list-all-software-packages-request";
export import ListAllSoftwarePackagesRequest = ListAllSoftwarePackagesRequest.ListAllSoftwarePackagesRequest;
import * as ListAvailableSoftwarePackagesRequest from "./list-available-software-packages-request";
export import ListAvailableSoftwarePackagesRequest = ListAvailableSoftwarePackagesRequest.ListAvailableSoftwarePackagesRequest;
import * as ListEntitlementsRequest from "./list-entitlements-request";
export import ListEntitlementsRequest = ListEntitlementsRequest.ListEntitlementsRequest;
import * as ListErrataRequest from "./list-errata-request";
export import ListErrataRequest = ListErrataRequest.ListErrataRequest;
import * as ListModuleStreamProfilesRequest from "./list-module-stream-profiles-request";
export import ListModuleStreamProfilesRequest = ListModuleStreamProfilesRequest.ListModuleStreamProfilesRequest;
import * as ListModuleStreamsRequest from "./list-module-streams-request";
export import ListModuleStreamsRequest = ListModuleStreamsRequest.ListModuleStreamsRequest;
import * as ListPackageGroupsRequest from "./list-package-groups-request";
export import ListPackageGroupsRequest = ListPackageGroupsRequest.ListPackageGroupsRequest;
import * as ListSoftwarePackageSoftwareSourcesRequest from "./list-software-package-software-sources-request";
export import ListSoftwarePackageSoftwareSourcesRequest = ListSoftwarePackageSoftwareSourcesRequest.ListSoftwarePackageSoftwareSourcesRequest;
import * as ListSoftwarePackagesRequest from "./list-software-packages-request";
export import ListSoftwarePackagesRequest = ListSoftwarePackagesRequest.ListSoftwarePackagesRequest;
import * as ListSoftwareSourceVendorsRequest from "./list-software-source-vendors-request";
export import ListSoftwareSourceVendorsRequest = ListSoftwareSourceVendorsRequest.ListSoftwareSourceVendorsRequest;
import * as ListSoftwareSourcesRequest from "./list-software-sources-request";
export import ListSoftwareSourcesRequest = ListSoftwareSourcesRequest.ListSoftwareSourcesRequest;
import * as RemovePackagesFromSoftwareSourceRequest from "./remove-packages-from-software-source-request";
export import RemovePackagesFromSoftwareSourceRequest = RemovePackagesFromSoftwareSourceRequest.RemovePackagesFromSoftwareSourceRequest;
import * as ReplacePackagesInSoftwareSourceRequest from "./replace-packages-in-software-source-request";
export import ReplacePackagesInSoftwareSourceRequest = ReplacePackagesInSoftwareSourceRequest.ReplacePackagesInSoftwareSourceRequest;
import * as SearchSoftwareSourceModuleStreamsRequest from "./search-software-source-module-streams-request";
export import SearchSoftwareSourceModuleStreamsRequest = SearchSoftwareSourceModuleStreamsRequest.SearchSoftwareSourceModuleStreamsRequest;
import * as SearchSoftwareSourceModulesRequest from "./search-software-source-modules-request";
export import SearchSoftwareSourceModulesRequest = SearchSoftwareSourceModulesRequest.SearchSoftwareSourceModulesRequest;
import * as SearchSoftwareSourcePackageGroupsRequest from "./search-software-source-package-groups-request";
export import SearchSoftwareSourcePackageGroupsRequest = SearchSoftwareSourcePackageGroupsRequest.SearchSoftwareSourcePackageGroupsRequest;
import * as SoftwareSourceGenerateMetadataRequest from "./software-source-generate-metadata-request";
export import SoftwareSourceGenerateMetadataRequest = SoftwareSourceGenerateMetadataRequest.SoftwareSourceGenerateMetadataRequest;
import * as UpdateSoftwareSourceRequest from "./update-software-source-request";
export import UpdateSoftwareSourceRequest = UpdateSoftwareSourceRequest.UpdateSoftwareSourceRequest;
import * as UpdateSoftwareSourceManifestRequest from "./update-software-source-manifest-request";
export import UpdateSoftwareSourceManifestRequest = UpdateSoftwareSourceManifestRequest.UpdateSoftwareSourceManifestRequest;
import * as GetWorkRequestRequest from "./get-work-request-request";
export import GetWorkRequestRequest = GetWorkRequestRequest.GetWorkRequestRequest;
import * as ListWorkRequestErrorsRequest from "./list-work-request-errors-request";
export import ListWorkRequestErrorsRequest = ListWorkRequestErrorsRequest.ListWorkRequestErrorsRequest;
import * as ListWorkRequestLogsRequest from "./list-work-request-logs-request";
export import ListWorkRequestLogsRequest = ListWorkRequestLogsRequest.ListWorkRequestLogsRequest;
import * as ListWorkRequestsRequest from "./list-work-requests-request";
export import ListWorkRequestsRequest = ListWorkRequestsRequest.ListWorkRequestsRequest;
import * as RerunWorkRequestRequest from "./rerun-work-request-request";
export import RerunWorkRequestRequest = RerunWorkRequestRequest.RerunWorkRequestRequest;
