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
 * Details required to update a DB System.
 *
 */
export interface UpdateDbSystemDetails {
  /**
   * The user-friendly name for the DB System. It does not have to be unique.
   */
  "displayName"?: string;
  /**
   * User-provided data about the DB System.
   */
  "description"?: string;
  /**
   * The OCID of the subnet the DB System is associated with.
   *
   */
  "subnetId"?: string;
  /**
   * Network Security Group OCIDs used for the VNIC attachment.
   */
  "nsgIds"?: Array<string>;
  /**
   * The database mode indicating the types of statements that will be allowed to run in the DB system.
   * This mode will apply only to statements run by user connections. Replicated write statements will continue
   * to be allowed regardless of the DatabaseMode.
   *   - READ_WRITE: allow running read and write statements on the DB system;
   *   - READ_ONLY: only allow running read statements on the DB system.
   *
   */
  "databaseMode"?: string;
  /**
   * The access mode indicating if the database access will be restricted only to administrators or not:
   *  - UNRESTRICTED: the access to the database is not restricted;
   *  - RESTRICTED: the access will be allowed only to users with specific privileges;
   *    RESTRICTED will correspond to setting the MySQL system variable
   *    [offline_mode](https://dev.mysql.com/doc/en/server-system-variables.html#sysvar_offline_mode) to ON.
   *
   */
  "accessMode"?: string;
  "rest"?: model.UpdateRestDetails;
  /**
    * Specifies if the DB System is highly available.
* <p>
Set to true to enable high availability. Two secondary MySQL instances are created and placed in the unused
* availability or fault domains, depending on your region and subnet type.
* Set to false to disable high availability. The secondary MySQL instances are removed and the MySQL instance
* in the preferred location is used.
* 
    */
  "isHighlyAvailable"?: boolean;
  /**
    * The availability domain on which to deploy the Read/Write endpoint. This defines the preferred primary instance.
* <p>
In a failover scenario, the Read/Write endpoint is redirected to one of the other availability domains
* and the MySQL instance in that domain is promoted to the primary instance.
* This redirection does not affect the IP address of the DB System in any way.
* <p>
For a standalone DB System, this defines the availability domain in which the DB System is placed.
* 
    */
  "availabilityDomain"?: string;
  /**
    * The fault domain on which to deploy the Read/Write endpoint. This defines the preferred primary instance.
* <p>
In a failover scenario, the Read/Write endpoint is redirected to one of the other fault domains
* and the MySQL instance in that domain is promoted to the primary instance.
* This redirection does not affect the IP address of the DB System in any way.
* <p>
For a standalone DB System, this defines the fault domain in which the DB System is placed.
* 
    */
  "faultDomain"?: string;
  /**
    * The shape of the DB System. The shape determines resources
* allocated to the DB System - CPU cores and memory for VM
* shapes; CPU cores, memory and storage for non-VM (or bare metal)
* shapes. To get a list of shapes, use the
* {@link #listShapes(ListShapesRequest) listShapes}
* operation.
* <p>
Changes in Shape will result in a downtime as the MySQL DB System is
* migrated to the new Compute instance.
* 
    */
  "shapeName"?: string;
  /**
   * The specific MySQL version identifier.
   */
  "mysqlVersion"?: string;
  /**
   * The OCID of the Configuration to be used for Instances in this DB System.
   */
  "configurationId"?: string;
  /**
   * The username for the administrative user for the MySQL Instance.
   */
  "adminUsername"?: string;
  /**
   * The password for the administrative user. The password must be
   * between 8 and 32 characters long, and must contain at least 1
   * numeric character, 1 lowercase character, 1 uppercase character, and
   * 1 special (nonalphanumeric) character.
   *
   */
  "adminPassword"?: string;
  /**
    * Expands the DB System's storage to the specified value. Only supports values larger than the current DB System's
* storage size.
* <p>
DB Systems with an initial storage size of 400 GB or less can be expanded up to 32 TB.
* DB Systems with an initial storage size between 401-800 GB can be expanded up to 64 TB.
* DB Systems with an initial storage size between 801-1200 GB can be expanded up to 96 TB.
* DB Systems with an initial storage size of 1201 GB or more can be expanded up to 128 TB.
* <p>
It is not possible to decrease data storage size.
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "dataStorageSizeInGBs"?: number;
  "dataStorage"?: model.DataStorageDetails;
  /**
   * The hostname for the primary endpoint of the DB System. Used for DNS.
   * The value is the hostname portion of the primary private IP's fully qualified domain name (FQDN)
   * (for example, \"dbsystem-1\" in FQDN \"dbsystem-1.subnet123.vcn1.oraclevcn.com\").
   * Must be unique across all VNICs in the subnet and comply with RFC 952 and RFC 1123.
   *
   */
  "hostnameLabel"?: string;
  /**
   * The IP address the DB System should be configured to listen on the provided subnet.
   * It must be a free private IP address within the subnet's CIDR. If you don't specify a
   * value, Oracle automatically assigns a private IP address from the subnet. This should
   * be a \"dotted-quad\" style IPv4 address.
   *
   */
  "ipAddress"?: string;
  /**
   * The port for primary endpoint of the DB System to listen on. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "port"?: number;
  /**
   * The TCP network port on which X Plugin listens for connections. This is the X Plugin equivalent of port.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "portX"?: number;
  "backupPolicy"?: model.UpdateBackupPolicyDetails;
  "maintenance"?: model.UpdateMaintenanceDetails;
  /**
   * Simple key-value pair applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Usage of predefined tag keys. These predefined keys are scoped to namespaces.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  "deletionPolicy"?: model.UpdateDeletionPolicyDetails;
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
   * The list of customer email addresses that receive information from Oracle about the specified OCI DB System resource.
   * Oracle uses these email addresses to send notifications about planned and unplanned software maintenance updates, information about system hardware, and other information needed by administrators.
   * Up to 10 email addresses can be added to the customer contacts for a DB System.
   *
   */
  "customerContacts"?: Array<model.CustomerContact>;
  "readEndpoint"?: model.UpdateReadEndpointDetails;
}

export namespace UpdateDbSystemDetails {
  export function getJsonObj(obj: UpdateDbSystemDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "rest": obj.rest ? model.UpdateRestDetails.getJsonObj(obj.rest) : undefined,

        "dataStorage": obj.dataStorage
          ? model.DataStorageDetails.getJsonObj(obj.dataStorage)
          : undefined,

        "backupPolicy": obj.backupPolicy
          ? model.UpdateBackupPolicyDetails.getJsonObj(obj.backupPolicy)
          : undefined,
        "maintenance": obj.maintenance
          ? model.UpdateMaintenanceDetails.getJsonObj(obj.maintenance)
          : undefined,

        "deletionPolicy": obj.deletionPolicy
          ? model.UpdateDeletionPolicyDetails.getJsonObj(obj.deletionPolicy)
          : undefined,

        "secureConnections": obj.secureConnections
          ? model.SecureConnectionDetails.getJsonObj(obj.secureConnections)
          : undefined,
        "encryptData": obj.encryptData
          ? model.EncryptDataDetails.getJsonObj(obj.encryptData)
          : undefined,
        "customerContacts": obj.customerContacts
          ? obj.customerContacts.map(item => {
              return model.CustomerContact.getJsonObj(item);
            })
          : undefined,
        "readEndpoint": obj.readEndpoint
          ? model.UpdateReadEndpointDetails.getJsonObj(obj.readEndpoint)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateDbSystemDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "rest": obj.rest ? model.UpdateRestDetails.getDeserializedJsonObj(obj.rest) : undefined,

        "dataStorage": obj.dataStorage
          ? model.DataStorageDetails.getDeserializedJsonObj(obj.dataStorage)
          : undefined,

        "backupPolicy": obj.backupPolicy
          ? model.UpdateBackupPolicyDetails.getDeserializedJsonObj(obj.backupPolicy)
          : undefined,
        "maintenance": obj.maintenance
          ? model.UpdateMaintenanceDetails.getDeserializedJsonObj(obj.maintenance)
          : undefined,

        "deletionPolicy": obj.deletionPolicy
          ? model.UpdateDeletionPolicyDetails.getDeserializedJsonObj(obj.deletionPolicy)
          : undefined,

        "secureConnections": obj.secureConnections
          ? model.SecureConnectionDetails.getDeserializedJsonObj(obj.secureConnections)
          : undefined,
        "encryptData": obj.encryptData
          ? model.EncryptDataDetails.getDeserializedJsonObj(obj.encryptData)
          : undefined,
        "customerContacts": obj.customerContacts
          ? obj.customerContacts.map(item => {
              return model.CustomerContact.getDeserializedJsonObj(item);
            })
          : undefined,
        "readEndpoint": obj.readEndpoint
          ? model.UpdateReadEndpointDetails.getDeserializedJsonObj(obj.readEndpoint)
          : undefined
      }
    };

    return jsonObj;
  }
}
