/**
 * Database Migration API
 * Use the Oracle Cloud Infrastructure Database Migration APIs to perform database migration operations.
 * OpenAPI spec version: 20230518
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
 * Represents the parameters common for all connections in list operation.
 */
export interface ConnectionSummary {
  /**
   * The OCID of the connection being referenced.
   */
  "id": string;
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName": string;
  /**
   * A user-friendly description. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "description"?: string;
  /**
   * The OCID of the compartment.
   */
  "compartmentId": string;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
   * For more information, see Resource Tags. Example: {\"Department\": \"Finance\"}
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
   * Usage of system tag keys. These predefined keys are scoped to namespaces.
   * Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Lifecycle state for connection.
   */
  "lifecycleState": string;
  /**
   * A message describing the current state in more detail. For example, can be used to provide actionable information
   * for a resource in Failed state.
   *
   */
  "lifecycleDetails"?: string;
  /**
   * The time when this resource was created.
   * An RFC3339 formatted datetime string such as {@code 2016-08-25T21:10:29.600Z}.
   *
   */
  "timeCreated": Date;
  /**
   * The time when this resource was updated.
   * An RFC3339 formatted datetime string such as {@code 2016-08-25T21:10:29.600Z}.
   *
   */
  "timeUpdated": Date;
  /**
   * OCI resource ID.
   */
  "vaultId"?: string;
  /**
   * The OCID of the key used in cryptographic operations.
   */
  "keyId"?: string;
  /**
   * OCI resource ID.
   */
  "subnetId"?: string;
  /**
   * List of ingress IP addresses from where to connect to this connection's privateIp.
   */
  "ingressIps"?: Array<model.IngressIpDetails>;
  /**
   * An array of Network Security Group OCIDs used to define network access for Connections.
   *
   */
  "nsgIds"?: Array<string>;

  "connectionType": string;
}

export namespace ConnectionSummary {
  export function getJsonObj(obj: ConnectionSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "ingressIps": obj.ingressIps
          ? obj.ingressIps.map(item => {
              return model.IngressIpDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    if (obj && "connectionType" in obj && obj.connectionType) {
      switch (obj.connectionType) {
        case "ORACLE":
          return model.OracleConnectionSummary.getJsonObj(
            <model.OracleConnectionSummary>(<object>jsonObj),
            true
          );
        case "MYSQL":
          return model.MysqlConnectionSummary.getJsonObj(
            <model.MysqlConnectionSummary>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.connectionType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ConnectionSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "ingressIps": obj.ingressIps
          ? obj.ingressIps.map(item => {
              return model.IngressIpDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    if (obj && "connectionType" in obj && obj.connectionType) {
      switch (obj.connectionType) {
        case "ORACLE":
          return model.OracleConnectionSummary.getDeserializedJsonObj(
            <model.OracleConnectionSummary>(<object>jsonObj),
            true
          );
        case "MYSQL":
          return model.MysqlConnectionSummary.getDeserializedJsonObj(
            <model.MysqlConnectionSummary>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.connectionType}`);
      }
    }
    return jsonObj;
  }
}
