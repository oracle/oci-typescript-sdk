/**
 * Core Services API
 * Use the Core Services API to manage resources such as virtual cloud networks (VCNs),
compute instances, and block storage volumes. For more information, see the console
documentation for the [Networking](https://docs.oracle.com/iaas/Content/Network/Concepts/overview.htm),
[Compute](https://docs.oracle.com/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](https://docs.oracle.com/iaas/Content/Block/Concepts/overview.htm) services.
The required permissions are documented in the
[Details for the Core Services](https://docs.oracle.com/iaas/Content/Identity/Reference/corepolicyreference.htm) article.

 * OpenAPI spec version: 20160918
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2025, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

export interface UpdateInstanceDetails {
  /**
   * The OCID of the compute capacity reservation this instance is launched under.
   * You can remove the instance from a reservation by specifying an empty string as input for this field.
   * For more information, see [Capacity Reservations](https://docs.oracle.com/iaas/Content/Compute/Tasks/reserve-capacity.htm#default).
   *
   */
  "capacityReservationId"?: string;
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
    * [Security attributes](https://docs.oracle.com/iaas/Content/zero-trust-packet-routing/zpr-artifacts.htm#security-attributes) are labels
* for a resource that can be referenced in a [Zero Trust Packet Routing](https://docs.oracle.com/iaas/Content/zero-trust-packet-routing/overview.htm)
* (ZPR) policy to control access to ZPR-supported resources.
* <p>
Example: {@code {\"Oracle-DataSecurity-ZPR\": {\"MaxEgressCount\": {\"value\":\"42\",\"mode\":\"audit\"}}}}
* 
    */
  "securityAttributes"?: { [key: string]: { [key: string]: any } };
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Department\": \"Finance\"}}
* 
    */
  "freeformTags"?: { [key: string]: string };
  "agentConfig"?: model.UpdateInstanceAgentConfigDetails;
  /**
    * Custom metadata key/value string pairs that you provide. Any set of key/value pairs
* provided here will completely replace the current set of key/value pairs in the {@code metadata}
* field on the instance.
* <p>
The \"user_data\" field and the \"ssh_authorized_keys\" field cannot be changed after an instance
* has launched. Any request that updates, removes, or adds either of these fields will be
* rejected. You must provide the same values for \"user_data\" and \"ssh_authorized_keys\" that
* already exist on the instance.
* <p>
The combined size of the {@code metadata} and {@code extendedMetadata} objects can be a maximum of
* 32,000 bytes.
* 
    */
  "metadata"?: { [key: string]: string };
  /**
    * Additional metadata key/value pairs that you provide. They serve the same purpose and
* functionality as fields in the {@code metadata} object.
* <p>
They are distinguished from {@code metadata} fields in that these can be nested JSON objects
* (whereas {@code metadata} fields are string/string maps only).
* <p>
The \"user_data\" field and the \"ssh_authorized_keys\" field cannot be changed after an instance
* has launched. Any request that updates, removes, or adds either of these fields will be
* rejected. You must provide the same values for \"user_data\" and \"ssh_authorized_keys\" that
* already exist on the instance.
* <p>
The combined size of the {@code metadata} and {@code extendedMetadata} objects can be a maximum of
* 32,000 bytes.
* 
    */
  "extendedMetadata"?: { [key: string]: any };
  /**
    * The shape of the instance. The shape determines the number of CPUs and the amount of memory
* allocated to the instance. For more information about how to change shapes, and a list of
* shapes that are supported, see
* [Editing an Instance](https://docs.oracle.com/iaas/Content/Compute/Tasks/resizinginstances.htm).
* <p>
For details about the CPUs, memory, and other properties of each shape, see
* [Compute Shapes](https://docs.oracle.com/iaas/Content/Compute/References/computeshapes.htm).
* <p>
The new shape must be compatible with the image that was used to launch the instance. You
* can enumerate all available shapes and determine image compatibility by calling
* {@link #listShapes(ListShapesRequest) listShapes}.
* <p>
To determine whether capacity is available for a specific shape before you change the shape of an instance,
* use the {@link #createComputeCapacityReport(CreateComputeCapacityReportRequest) createComputeCapacityReport}
* operation.
* <p>
If the instance is running when you change the shape, the instance is rebooted.
* <p>
Example: {@code VM.Standard2.1}
* 
    */
  "shape"?: string;
  "shapeConfig"?: model.UpdateInstanceShapeConfigDetails;
  "sourceDetails"?:
    | model.UpdateInstanceSourceViaBootVolumeDetails
    | model.UpdateInstanceSourceViaImageDetails;
  /**
   * The parameter acts as a fail-safe to prevent unwanted downtime when updating a running instance.
   * The default is ALLOW_DOWNTIME.
   * * {@code ALLOW_DOWNTIME} - Compute might reboot the instance while updating the instance if a reboot is required.
   * * {@code AVOID_DOWNTIME} - If the instance is in running state, Compute tries to update the instance without rebooting
   *                   it. If the instance requires a reboot to be updated, an error is returned and the instance
   *                   is not updated. If the instance is stopped, it is updated and remains in the stopped state.
   *
   */
  "updateOperationConstraint"?: UpdateInstanceDetails.UpdateOperationConstraint;
  "instanceOptions"?: model.InstanceOptions;
  /**
    * A fault domain is a grouping of hardware and infrastructure within an availability domain.
* Each availability domain contains three fault domains. Fault domains let you distribute your
* instances so that they are not on the same physical hardware within a single availability domain.
* A hardware failure or Compute hardware maintenance that affects one fault domain does not affect
* instances in other fault domains.
* <p>
To get a list of fault domains, use the
* {@link #listFaultDomains(ListFaultDomainsRequest) listFaultDomains} operation in the
* Identity and Access Management Service API.
* <p>
Example: {@code FAULT-DOMAIN-1}
* 
    */
  "faultDomain"?: string;
  "launchOptions"?: model.UpdateLaunchOptions;
  "availabilityConfig"?: model.UpdateInstanceAvailabilityConfigDetails;
  /**
    * For a VM instance, resets the scheduled time that the instance will be reboot migrated for
* infrastructure maintenance, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
* If the instance hasn't been rebooted after this date, Oracle reboots the instance within 24 hours of the time
* and date that maintenance is due.
* <p>
To get the maximum possible date that a maintenance reboot can be extended,
* use {@link #getInstanceMaintenanceReboot(GetInstanceMaintenanceRebootRequest) getInstanceMaintenanceReboot}.
* <p>
Regardless of how the instance is stopped, this flag is reset to empty as soon as the instance reaches the
* Stopped state.
* <p>
To reboot migrate a bare metal instance, use the {@link #instanceAction(InstanceActionRequest) instanceAction} operation.
* <p>
For more information, see
* [Infrastructure Maintenance](https://docs.oracle.com/iaas/Content/Compute/References/infrastructure-maintenance.htm).
* <p>
Example: {@code 2018-05-25T21:10:29.600Z}
* 
    */
  "timeMaintenanceRebootDue"?: Date;
  /**
   * The OCID of the dedicated virtual machine host to place the instance on.
   * Supported only if this VM instance was already placed on a dedicated virtual machine host
   * - that is, you can't move an instance from on-demand capacity to dedicated capacity,
   * nor can you move an instance from dedicated capacity to on-demand capacity.
   *
   */
  "dedicatedVmHostId"?: string;
  "platformConfig"?:
    | model.AmdVmUpdateInstancePlatformConfig
    | model.IntelVmUpdateInstancePlatformConfig;
  /**
   * The list of liscensing configurations with target update values.
   */
  "licensingConfigs"?: Array<model.UpdateInstanceLicensingConfig>;
}

export namespace UpdateInstanceDetails {
  export enum UpdateOperationConstraint {
    AllowDowntime = "ALLOW_DOWNTIME",
    AvoidDowntime = "AVOID_DOWNTIME"
  }

  export function getJsonObj(obj: UpdateInstanceDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "agentConfig": obj.agentConfig
          ? model.UpdateInstanceAgentConfigDetails.getJsonObj(obj.agentConfig)
          : undefined,

        "shapeConfig": obj.shapeConfig
          ? model.UpdateInstanceShapeConfigDetails.getJsonObj(obj.shapeConfig)
          : undefined,
        "sourceDetails": obj.sourceDetails
          ? model.UpdateInstanceSourceDetails.getJsonObj(obj.sourceDetails)
          : undefined,

        "instanceOptions": obj.instanceOptions
          ? model.InstanceOptions.getJsonObj(obj.instanceOptions)
          : undefined,

        "launchOptions": obj.launchOptions
          ? model.UpdateLaunchOptions.getJsonObj(obj.launchOptions)
          : undefined,
        "availabilityConfig": obj.availabilityConfig
          ? model.UpdateInstanceAvailabilityConfigDetails.getJsonObj(obj.availabilityConfig)
          : undefined,

        "platformConfig": obj.platformConfig
          ? model.UpdateInstancePlatformConfig.getJsonObj(obj.platformConfig)
          : undefined,
        "licensingConfigs": obj.licensingConfigs
          ? obj.licensingConfigs.map(item => {
              return model.UpdateInstanceLicensingConfig.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateInstanceDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "agentConfig": obj.agentConfig
          ? model.UpdateInstanceAgentConfigDetails.getDeserializedJsonObj(obj.agentConfig)
          : undefined,

        "shapeConfig": obj.shapeConfig
          ? model.UpdateInstanceShapeConfigDetails.getDeserializedJsonObj(obj.shapeConfig)
          : undefined,
        "sourceDetails": obj.sourceDetails
          ? model.UpdateInstanceSourceDetails.getDeserializedJsonObj(obj.sourceDetails)
          : undefined,

        "instanceOptions": obj.instanceOptions
          ? model.InstanceOptions.getDeserializedJsonObj(obj.instanceOptions)
          : undefined,

        "launchOptions": obj.launchOptions
          ? model.UpdateLaunchOptions.getDeserializedJsonObj(obj.launchOptions)
          : undefined,
        "availabilityConfig": obj.availabilityConfig
          ? model.UpdateInstanceAvailabilityConfigDetails.getDeserializedJsonObj(
              obj.availabilityConfig
            )
          : undefined,

        "platformConfig": obj.platformConfig
          ? model.UpdateInstancePlatformConfig.getDeserializedJsonObj(obj.platformConfig)
          : undefined,
        "licensingConfigs": obj.licensingConfigs
          ? obj.licensingConfigs.map(item => {
              return model.UpdateInstanceLicensingConfig.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
