/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](https://docs.oracle.com/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2025, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Details of the cloud Autonomous VM cluster.
 *
 */
export interface CloudAutonomousVmClusterSummary {
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the Cloud Autonomous VM cluster.
   */
  "id": string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId": string;
  /**
   * User defined description of the cloud Autonomous VM cluster.
   */
  "description"?: string;
  /**
   * The name of the availability domain that the cloud Autonomous VM cluster is located in.
   */
  "availabilityDomain": string;
  /**
    * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the subnet the cloud Autonomous VM Cluster is associated with.
* <p>
**Subnet Restrictions:**
* - For Exadata and virtual machine 2-node RAC DB systems, do not use a subnet that overlaps with 192.168.128.0/20.
* <p>
These subnets are used by the Oracle Clusterware private interconnect on the database instance.
* Specifying an overlapping subnet will cause the private interconnect to malfunction.
* This restriction applies to both the client subnet and backup subnet.
* 
    */
  "subnetId": string;
  /**
   * The list of [OCIDs](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) for the network security groups (NSGs) to which this resource belongs. Setting this to an empty list removes all resources from all NSGs. For more information about NSGs, see [Security Rules](https://docs.oracle.com/iaas/Content/Network/Concepts/securityrules.htm).
   * **NsgIds restrictions:**
   * - A network security group (NSG) is optional for Autonomous Databases with private access. The nsgIds list can be empty.
   *
   */
  "nsgIds"?: Array<string>;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the last maintenance update history. This value is updated when a maintenance update starts.
   */
  "lastUpdateHistoryEntryId"?: string;
  /**
   * The current state of the cloud Autonomous VM cluster.
   */
  "lifecycleState": CloudAutonomousVmClusterSummary.LifecycleState;
  /**
   * The user-friendly name for the cloud Autonomous VM cluster. The name does not need to be unique.
   */
  "displayName": string;
  /**
   * The date and time that the cloud Autonomous VM cluster was created.
   */
  "timeCreated"?: Date;
  /**
   * The last date and time that the cloud Autonomous VM cluster was updated.
   */
  "timeUpdated"?: Date;
  /**
   * The time zone of the Cloud Autonomous VM Cluster.
   */
  "clusterTimeZone"?: string;
  /**
   * Additional information about the current lifecycle state.
   */
  "lifecycleDetails"?: string;
  /**
   * The hostname for the cloud Autonomous VM cluster.
   */
  "hostname"?: string;
  /**
   * The domain name for the cloud Autonomous VM cluster.
   */
  "domain"?: string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the cloud Exadata infrastructure.
   */
  "cloudExadataInfrastructureId": string;
  /**
   * The model name of the Exadata hardware running the cloud Autonomous VM cluster.
   *
   */
  "shape"?: string;
  /**
   * The number of database servers in the cloud VM cluster.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "nodeCount"?: number;
  /**
   * The total data storage allocated, in terabytes (TB). Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "dataStorageSizeInTBs"?: number;
  /**
   * The total data storage allocated, in gigabytes (GB). Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "dataStorageSizeInGBs"?: number;
  /**
   * The number of CPU cores on the cloud Autonomous VM cluster. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "cpuCoreCount"?: number;
  /**
   * The number of CPU cores on the cloud Autonomous VM cluster. Only 1 decimal place is allowed for the fractional part. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "ocpuCount"?: number;
  /**
   * The compute model of the Cloud Autonomous VM Cluster. ECPU compute model is the recommended model and OCPU compute model is legacy. See [Compute Models in Autonomous Database on Dedicated Exadata #Infrastructure](https://docs.oracle.com/en/cloud/paas/autonomous-database/dedicated/adbak) for more details.
   *
   */
  "computeModel"?: CloudAutonomousVmClusterSummary.ComputeModel;
  /**
   * Enable mutual TLS(mTLS) authentication for database at time of provisioning a VMCluster. This is applicable to database TLS Certificates only. Default is TLS
   */
  "isMtlsEnabledVmCluster"?: boolean;
  /**
   * The number of CPU cores enabled per VM cluster node. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "cpuCoreCountPerNode"?: number;
  /**
   * The memory allocated in GBs. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "memorySizeInGBs"?: number;
  /**
    * The Oracle license model that applies to the Oracle Autonomous Database. Bring your own license (BYOL) allows you to apply your current on-premises Oracle software licenses to equivalent, highly automated Oracle services in the cloud.
* License Included allows you to subscribe to new Oracle Database software licenses and the Oracle Database service.
* Note that when provisioning an [Autonomous Database on dedicated Exadata infrastructure](https://docs.oracle.com/en/cloud/paas/autonomous-database/index.html), this attribute must be null. It is already set at the
* Autonomous Exadata Infrastructure level. When provisioning an [Autonomous Database Serverless] (https://docs.oracle.com/en/cloud/paas/autonomous-database/index.html) database, if a value is not specified, the system defaults the value to {@code BRING_YOUR_OWN_LICENSE}. Bring your own license (BYOL) also allows you to select the DB edition using the optional parameter.
* <p>
This cannot be updated in parallel with any of the following: cpuCoreCount, computeCount, dataStorageSizeInTBs, adminPassword, isMTLSConnectionRequired, dbWorkload, privateEndpointLabel, nsgIds, dbVersion, dbName, scheduledOperations, dbToolsDetails, or isFreeTier.
* 
    */
  "licenseModel"?: CloudAutonomousVmClusterSummary.LicenseModel;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the last maintenance run.
   */
  "lastMaintenanceRunId"?: string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the next maintenance run.
   */
  "nextMaintenanceRunId"?: string;
  "maintenanceWindow"?: model.MaintenanceWindow;
  /**
   * The SCAN Listenenr TLS port. Default is 2484. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "scanListenerPortTls"?: number;
  /**
   * The SCAN Listener Non TLS port. Default is 1521. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "scanListenerPortNonTls"?: number;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Department\": \"Finance\"}}
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Security Attributes for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {\"Oracle-ZPR\": {\"MaxEgressCount\": {\"value\": \"42\", \"mode\": \"audit\"}}}}
   *
   */
  "securityAttributes"?: { [key: string]: { [key: string]: any } };
  /**
   * The date and time of Database SSL certificate expiration.
   */
  "timeDatabaseSslCertificateExpires"?: Date;
  /**
   * The date and time of ORDS certificate expiration.
   */
  "timeOrdsCertificateExpires"?: Date;
  /**
   * CPU cores available for allocation to Autonomous Databases. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "availableCpus"?: number;
  /**
   * CPUs that continue to be included in the count of CPUs available to the Autonomous Container Database even after one of its Autonomous Database is terminated or scaled down. You can release them to the available CPUs at its parent Autonomous VM Cluster level by restarting the Autonomous Container Database.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "reclaimableCpus"?: number;
  /**
   * The number of Autonomous Container Databases that can be created with the currently available local storage. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "availableContainerDatabases"?: number;
  /**
   * The total number of Autonomous Container Databases that can be created with the allocated local storage. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalContainerDatabases"?: number;
  /**
   * The data disk group size available for Autonomous Databases, in TBs. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "availableAutonomousDataStorageSizeInTBs"?: number;
  /**
   * The data disk group size allocated for Autonomous Databases, in TBs. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "autonomousDataStorageSizeInTBs"?: number;
  /**
   * The local node storage allocated in GBs. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "dbNodeStorageSizeInGBs"?: number;
  /**
   * The amount of memory (in GBs) enabled per OCPU or ECPU.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "memoryPerOracleComputeUnitInGBs"?: number;
  /**
   * The list of [OCIDs](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the Db servers.
   */
  "dbServers"?: Array<string>;
  /**
   * The percentage of total number of CPUs used in an Autonomous VM Cluster. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "cpuPercentage"?: number;
  /**
   * The percentage of the data storage used for the Autonomous Databases in an Autonomous VM Cluster. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "autonomousDataStoragePercentage"?: number;
  /**
   * The number of CPUs provisioned in an Autonomous VM Cluster. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "provisionedCpus"?: number;
  /**
   * The total number of CPUs in an Autonomous VM Cluster. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalCpus"?: number;
  /**
   * The total data disk group size for Autonomous Databases, in TBs. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalAutonomousDataStorageInTBs"?: number;
  /**
   * The number of CPUs reserved in an Autonomous VM Cluster. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "reservedCpus"?: number;
  /**
   * The number of provisionable Autonomous Container Databases in an Autonomous VM Cluster. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "provisionableAutonomousContainerDatabases"?: number;
  /**
   * The number of provisioned Autonomous Container Databases in an Autonomous VM Cluster. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "provisionedAutonomousContainerDatabases"?: number;
  /**
   * The number of non-provisionable Autonomous Container Databases in an Autonomous VM Cluster. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "nonProvisionableAutonomousContainerDatabases"?: number;
  /**
   * The lowest value to which exadataStorage (in TBs) can be scaled down. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "exadataStorageInTBsLowestScaledValue"?: number;
  /**
   * The lowest value to which ocpus can be scaled down. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "ocpusLowestScaledValue"?: number;
  /**
   * The lowest value to which maximum number of ACDs can be scaled down. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxAcdsLowestScaledValue"?: number;
  /**
   * System tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the subscription with which resource needs to be associated with.
   */
  "subscriptionId"?: string;
}

export namespace CloudAutonomousVmClusterSummary {
  export enum LifecycleState {
    Provisioning = "PROVISIONING",
    Available = "AVAILABLE",
    Updating = "UPDATING",
    Terminating = "TERMINATING",
    Terminated = "TERMINATED",
    Failed = "FAILED",
    MaintenanceInProgress = "MAINTENANCE_IN_PROGRESS",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum ComputeModel {
    Ecpu = "ECPU",
    Ocpu = "OCPU",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum LicenseModel {
    LicenseIncluded = "LICENSE_INCLUDED",
    BringYourOwnLicense = "BRING_YOUR_OWN_LICENSE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: CloudAutonomousVmClusterSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "maintenanceWindow": obj.maintenanceWindow
          ? model.MaintenanceWindow.getJsonObj(obj.maintenanceWindow)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CloudAutonomousVmClusterSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "maintenanceWindow": obj.maintenanceWindow
          ? model.MaintenanceWindow.getDeserializedJsonObj(obj.maintenanceWindow)
          : undefined
      }
    };

    return jsonObj;
  }
}
