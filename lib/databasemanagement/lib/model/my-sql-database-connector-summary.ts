/**
 * Database Management API
 * Use the Database Management API to monitor and manage resources such as
Oracle Databases, MySQL Databases, and External Database Systems. 
For more information, see [Database Management](https://docs.oracle.com/iaas/database-management/home.htm).

 * OpenAPI spec version: 20201101
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

/**
 * Details of external database connector.
 */
export interface MySqlDatabaseConnectorSummary {
  /**
   * External MySQL Database Connector Name
   */
  "name"?: string;
  /**
   * OCID of compartment for the External MySQL connector.
   */
  "compartmentId"?: string;
  /**
   * OCI Services associated with this connector.
   */
  "associatedServices"?: string;
  /**
   * OCID of MySQL Database Connector.
   */
  "id": string;
  /**
   * Connector creation time.
   */
  "timeCreated"?: Date;
  /**
   * Connector update time.
   */
  "timeUpdated"?: Date;
  /**
   * Name of MySQL Database.
   */
  "sourceDatabase"?: string;
  /**
   * Type of MySQL Database.
   */
  "sourceDatabaseType"?: model.MySqlType;
  /**
   * Connection Status.
   */
  "connectionStatus"?: string;
  /**
   * Time when connection status was last updated.
   */
  "timeConnectionStatusUpdated"?: Date;
  /**
   * Host name for Connector.
   */
  "hostName"?: string;
  /**
   * Agent Id of the MACS agent.
   */
  "macsAgentId"?: string;
  /**
   * Connector port. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "port"?: number;
  /**
   * Connector Type.
   */
  "connectorType"?: model.MySqlConnectorType;
  /**
   * Network Protocol.
   */
  "networkProtocol"?: model.MySqlNetworkProtocolType;
  /**
   * Credential type used to connect to database.
   */
  "credentialType"?: model.MySqlCredType;
  /**
    * System tags for this resource. Each key is predefined and scoped to a namespace.
* For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* System tags can be viewed by users, but can only be created by the system.
* <p>
Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
* 
    */
  "systemTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Indicates lifecycle  state of the resource.
   */
  "lifecycleState"?: model.LifecycleStates;
}

export namespace MySqlDatabaseConnectorSummary {
  export function getJsonObj(obj: MySqlDatabaseConnectorSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: MySqlDatabaseConnectorSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
