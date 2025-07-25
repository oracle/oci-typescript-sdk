/**
 * Ops Insights API
 * Use the Ops Insights API to perform data extraction operations to obtain database
resource utilization, performance statistics, and reference information. For more information,
see [About Oracle Cloud Infrastructure Ops Insights](https://docs.oracle.com/iaas/en-us/iaas/operations-insights/doc/operations-insights.html).

 * OpenAPI spec version: 20200630
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
 * Summary of a database insight resource.
 */
export interface DatabaseInsightSummary {
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the database insight resource.
   */
  "id": string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the database.
   */
  "databaseId": string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId"?: string;
  /**
   * The database name. The database name is unique within the tenancy.
   */
  "databaseName"?: string;
  /**
   * The user-friendly name for the database. The name does not have to be unique.
   */
  "databaseDisplayName"?: string;
  /**
   * Ops Insights internal representation of the database type.
   */
  "databaseType"?: string;
  /**
   * The version of the database.
   */
  "databaseVersion"?: string;
  /**
   * The hostnames for the database.
   */
  "databaseHostNames"?: Array<string>;
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
   * System tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Processor count. This is the OCPU count for Autonomous Database and CPU core count for other database types. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "processorCount"?: number;
  /**
   * Indicates the status of a database insight in Operations Insights
   */
  "status"?: model.ResourceStatus;
  /**
   * The time the the database insight was first enabled. An RFC3339 formatted datetime string
   */
  "timeCreated"?: Date;
  /**
   * The time the database insight was updated. An RFC3339 formatted datetime string
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the database.
   */
  "lifecycleState"?: model.LifecycleState;
  /**
   * A message describing the current state in more detail. For example, can be used to provide actionable information for a resource in Failed state.
   */
  "lifecycleDetails"?: string;
  /**
   * A message describing the status of the database connection of this resource. For example, it can be used to provide actionable information about the permission and content validity of the database connection.
   */
  "databaseConnectionStatusDetails"?: string;

  "entitySource": string;
}

export namespace DatabaseInsightSummary {
  export function getJsonObj(obj: DatabaseInsightSummary): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "entitySource" in obj && obj.entitySource) {
      switch (obj.entitySource) {
        case "MACS_MANAGED_EXTERNAL_DATABASE":
          return model.MacsManagedExternalDatabaseInsightSummary.getJsonObj(
            <model.MacsManagedExternalDatabaseInsightSummary>(<object>jsonObj),
            true
          );
        case "AUTONOMOUS_DATABASE":
          return model.AutonomousDatabaseInsightSummary.getJsonObj(
            <model.AutonomousDatabaseInsightSummary>(<object>jsonObj),
            true
          );
        case "MACS_MANAGED_CLOUD_DATABASE":
          return model.MacsManagedCloudDatabaseInsightSummary.getJsonObj(
            <model.MacsManagedCloudDatabaseInsightSummary>(<object>jsonObj),
            true
          );
        case "MDS_MYSQL_DATABASE_SYSTEM":
          return model.MdsMySqlDatabaseInsightSummary.getJsonObj(
            <model.MdsMySqlDatabaseInsightSummary>(<object>jsonObj),
            true
          );
        case "PE_COMANAGED_DATABASE":
          return model.PeComanagedDatabaseInsightSummary.getJsonObj(
            <model.PeComanagedDatabaseInsightSummary>(<object>jsonObj),
            true
          );
        case "EM_MANAGED_EXTERNAL_DATABASE":
          return model.EmManagedExternalDatabaseInsightSummary.getJsonObj(
            <model.EmManagedExternalDatabaseInsightSummary>(<object>jsonObj),
            true
          );
        case "EXTERNAL_MYSQL_DATABASE_SYSTEM":
          return model.ExternalMysqlDatabaseInsightSummary.getJsonObj(
            <model.ExternalMysqlDatabaseInsightSummary>(<object>jsonObj),
            true
          );
        case "MACS_MANAGED_AUTONOMOUS_DATABASE":
          return model.MacsManagedAutonomousDatabaseInsightSummary.getJsonObj(
            <model.MacsManagedAutonomousDatabaseInsightSummary>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.entitySource}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DatabaseInsightSummary): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "entitySource" in obj && obj.entitySource) {
      switch (obj.entitySource) {
        case "MACS_MANAGED_EXTERNAL_DATABASE":
          return model.MacsManagedExternalDatabaseInsightSummary.getDeserializedJsonObj(
            <model.MacsManagedExternalDatabaseInsightSummary>(<object>jsonObj),
            true
          );
        case "AUTONOMOUS_DATABASE":
          return model.AutonomousDatabaseInsightSummary.getDeserializedJsonObj(
            <model.AutonomousDatabaseInsightSummary>(<object>jsonObj),
            true
          );
        case "MACS_MANAGED_CLOUD_DATABASE":
          return model.MacsManagedCloudDatabaseInsightSummary.getDeserializedJsonObj(
            <model.MacsManagedCloudDatabaseInsightSummary>(<object>jsonObj),
            true
          );
        case "MDS_MYSQL_DATABASE_SYSTEM":
          return model.MdsMySqlDatabaseInsightSummary.getDeserializedJsonObj(
            <model.MdsMySqlDatabaseInsightSummary>(<object>jsonObj),
            true
          );
        case "PE_COMANAGED_DATABASE":
          return model.PeComanagedDatabaseInsightSummary.getDeserializedJsonObj(
            <model.PeComanagedDatabaseInsightSummary>(<object>jsonObj),
            true
          );
        case "EM_MANAGED_EXTERNAL_DATABASE":
          return model.EmManagedExternalDatabaseInsightSummary.getDeserializedJsonObj(
            <model.EmManagedExternalDatabaseInsightSummary>(<object>jsonObj),
            true
          );
        case "EXTERNAL_MYSQL_DATABASE_SYSTEM":
          return model.ExternalMysqlDatabaseInsightSummary.getDeserializedJsonObj(
            <model.ExternalMysqlDatabaseInsightSummary>(<object>jsonObj),
            true
          );
        case "MACS_MANAGED_AUTONOMOUS_DATABASE":
          return model.MacsManagedAutonomousDatabaseInsightSummary.getDeserializedJsonObj(
            <model.MacsManagedAutonomousDatabaseInsightSummary>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.entitySource}`);
      }
    }
    return jsonObj;
  }
}
