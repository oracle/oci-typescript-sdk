/**
 * MySQL Database Service API
 * The API for the MySQL Database Service
 * OpenAPI spec version: 20190415
 * Contact: mysql-cloud-dev_ww_grp@oracle.com
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
 * Snapshot of the DbSystem details at the time of the backup
 *
 */
export interface DbSystemSnapshot {
  /**
   * The OCID of the DB System.
   */
  "id": string;
  /**
   * The user-friendly name for the DB System. It does not have to be unique.
   */
  "displayName": string;
  /**
   * User-provided data about the DB System.
   */
  "description"?: string;
  /**
   * The OCID of the compartment the DB System belongs in.
   */
  "compartmentId": string;
  /**
   * The OCID of the subnet the DB System is associated with.
   *
   */
  "subnetId": string;
  /**
   * Network Security Group OCIDs used for the VNIC attachment.
   */
  "nsgIds"?: Array<string>;
  /**
   * The Availability Domain where the primary DB System should be located.
   *
   */
  "availabilityDomain"?: string;
  /**
   * The name of the Fault Domain the DB System is located in.
   *
   */
  "faultDomain"?: string;
  /**
   * The shape of the primary instances of the DB System. The shape
   * determines resources allocated to a DB System - CPU cores
   * and memory for VM shapes; CPU cores, memory and storage for non-VM
   * (or bare metal) shapes. To get a list of shapes, use (the
   * {@link #listShapes(ListShapesRequest) listShapes} operation.
   *
   */
  "shapeName"?: string;
  /**
   * Name of the MySQL Version in use for the DB System.
   */
  "mysqlVersion": string;
  /**
   * The username for the administrative user.
   */
  "adminUsername"?: string;
  "backupPolicy"?: model.BackupPolicy;
  /**
   * The OCID of the Configuration to be used for Instances in this DB System.
   */
  "configurationId"?: string;
  /**
   * DEPRECATED: User specified size of the data volume. May be less than current allocatedStorageSizeInGBs.
   * Replaced by dataStorage.dataStorageSizeInGBs.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "dataStorageSizeInGBs": number;
  "dataStorage"?: model.DataStorage;
  /**
   * The hostname for the primary endpoint of the DB System. Used for DNS.
   * The value is the hostname portion of the primary private IP's fully qualified domain name (FQDN)
   * (for example, \"dbsystem-1\" in FQDN \"dbsystem-1.subnet123.vcn1.oraclevcn.com\").
   * Must be unique across all VNICs in the subnet and comply with RFC 952 and RFC 1123.
   *
   */
  "hostnameLabel"?: string;
  /**
   * The IP address the DB System is configured to listen on. A private
   * IP address of the primary endpoint of the DB System. Must be an
   * available IP address within the subnet's CIDR. This will be a
   * \"dotted-quad\" style IPv4 address.
   *
   */
  "ipAddress"?: string;
  /**
   * The port for primary endpoint of the DB System to listen on. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "port"?: number;
  /**
   * The network port on which X Plugin listens for TCP/IP connections. This is the X Plugin equivalent of port.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "portX"?: number;
  "rest"?: model.RestDetails;
  /**
   * Specifies if the DB System is highly available.
   *
   */
  "isHighlyAvailable"?: boolean;
  /**
   * The network endpoints available for this DB System.
   *
   */
  "endpoints"?: Array<model.DbSystemEndpoint>;
  "maintenance": model.MaintenanceDetails;
  "deletionPolicy": model.DeletionPolicyDetails;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Whether to run the DB System with InnoDB Redo Logs and the Double Write Buffer enabled or disabled,
   * and whether to enable or disable syncing of the Binary Logs.
   *
   */
  "crashRecovery"?: model.CrashRecoveryStatus;
  /**
   * Whether to enable monitoring via the Database Management service.
   *
   */
  "databaseManagement"?: model.DatabaseManagementStatus;
  "secureConnections"?: model.SecureConnectionDetails;
  "encryptData"?: model.EncryptDataDetails;
  /**
   * The region identifier of the region where the DB system exists.
   * For more information, please see [Regions and Availability Domains](https://docs.oracle.com/en-us/iaas/Content/General/Concepts/regions.htm).
   *
   */
  "region"?: string;
  "readEndpoint"?: model.ReadEndpointDetails;
}

export namespace DbSystemSnapshot {
  export function getJsonObj(obj: DbSystemSnapshot): object {
    const jsonObj = {
      ...obj,
      ...{
        "backupPolicy": obj.backupPolicy
          ? model.BackupPolicy.getJsonObj(obj.backupPolicy)
          : undefined,

        "dataStorage": obj.dataStorage ? model.DataStorage.getJsonObj(obj.dataStorage) : undefined,

        "rest": obj.rest ? model.RestDetails.getJsonObj(obj.rest) : undefined,

        "endpoints": obj.endpoints
          ? obj.endpoints.map(item => {
              return model.DbSystemEndpoint.getJsonObj(item);
            })
          : undefined,
        "maintenance": obj.maintenance
          ? model.MaintenanceDetails.getJsonObj(obj.maintenance)
          : undefined,
        "deletionPolicy": obj.deletionPolicy
          ? model.DeletionPolicyDetails.getJsonObj(obj.deletionPolicy)
          : undefined,

        "secureConnections": obj.secureConnections
          ? model.SecureConnectionDetails.getJsonObj(obj.secureConnections)
          : undefined,
        "encryptData": obj.encryptData
          ? model.EncryptDataDetails.getJsonObj(obj.encryptData)
          : undefined,

        "readEndpoint": obj.readEndpoint
          ? model.ReadEndpointDetails.getJsonObj(obj.readEndpoint)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DbSystemSnapshot): object {
    const jsonObj = {
      ...obj,
      ...{
        "backupPolicy": obj.backupPolicy
          ? model.BackupPolicy.getDeserializedJsonObj(obj.backupPolicy)
          : undefined,

        "dataStorage": obj.dataStorage
          ? model.DataStorage.getDeserializedJsonObj(obj.dataStorage)
          : undefined,

        "rest": obj.rest ? model.RestDetails.getDeserializedJsonObj(obj.rest) : undefined,

        "endpoints": obj.endpoints
          ? obj.endpoints.map(item => {
              return model.DbSystemEndpoint.getDeserializedJsonObj(item);
            })
          : undefined,
        "maintenance": obj.maintenance
          ? model.MaintenanceDetails.getDeserializedJsonObj(obj.maintenance)
          : undefined,
        "deletionPolicy": obj.deletionPolicy
          ? model.DeletionPolicyDetails.getDeserializedJsonObj(obj.deletionPolicy)
          : undefined,

        "secureConnections": obj.secureConnections
          ? model.SecureConnectionDetails.getDeserializedJsonObj(obj.secureConnections)
          : undefined,
        "encryptData": obj.encryptData
          ? model.EncryptDataDetails.getDeserializedJsonObj(obj.encryptData)
          : undefined,

        "readEndpoint": obj.readEndpoint
          ? model.ReadEndpointDetails.getDeserializedJsonObj(obj.readEndpoint)
          : undefined
      }
    };

    return jsonObj;
  }
}
