/**
 * NoSQL Database API
 * The control plane API for NoSQL Database Cloud Service HTTPS
provides endpoints to perform NDCS operations, including creation
and deletion of tables and indexes; population and access of data
in tables; and access of table usage metrics.

 * OpenAPI spec version: 20190828
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
 * Complete metadata about a table.
 */
export interface Table {
  /**
   * Unique identifier that is immutable.
   */
  "id": string;
  /**
   * Human-friendly table name, immutable.
   */
  "name"?: string;
  /**
   * Compartment Identifier.
   */
  "compartmentId": string;
  /**
   * The time the the table was created. An RFC3339 formatted
   * datetime string.
   *
   */
  "timeCreated"?: Date;
  /**
   * The time the the table's metadata was last updated. An
   * RFC3339 formatted datetime string.
   *
   */
  "timeUpdated"?: Date;
  "tableLimits"?: model.TableLimits;
  /**
   * The state of a table.
   */
  "lifecycleState"?: Table.LifecycleState;
  /**
   * True if this table can be reclaimed after an idle period.
   */
  "isAutoReclaimable"?: boolean;
  /**
   * If lifecycleState is INACTIVE, indicates when
   * this table will be automatically removed.
   * An RFC3339 formatted datetime string.
   *
   */
  "timeOfExpiration"?: Date;
  /**
   * A message describing the current state in more detail.
   *
   */
  "lifecycleDetails"?: string;
  "schema"?: model.Schema;
  /**
   * A DDL statement representing the schema.
   */
  "ddlStatement"?: string;
  /**
   * The current state of this table's schema. Available states are
   * MUTABLE - The schema can be changed. The table is not eligible for replication.
   * FROZEN - The schema is immutable. The table is eligible for replication.
   *
   */
  "schemaState"?: Table.SchemaState;
  /**
   * True if this table is currently a member of a replication set.
   */
  "isMultiRegion"?: boolean;
  /**
   * If this table is in a replication set, this value represents
   * the progress of the initialization of the replica's data.  A
   * value of 100 indicates that initialization has completed.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "localReplicaInitializationInPercent"?: number;
  /**
   * An array of Replica listing this table's replicas, if any
   */
  "replicas"?: Array<model.Replica>;
  /**
   * Simple key-value pair that is applied without any predefined
   * name, type or scope. Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and
   * scoped to a namespace.  Example: {@code {\"foo-namespace\":
   * {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Read-only system tag. These predefined keys are scoped to
   * namespaces.  At present the only supported namespace is
   * {@code \"orcl-cloud\"}; and the only key in that namespace is
   * {@code \"free-tier-retained\"}.
   * Example: {@code {\"orcl-cloud\"\": {\"free-tier-retained\": \"true\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace Table {
  export enum LifecycleState {
    Creating = "CREATING",
    Updating = "UPDATING",
    Active = "ACTIVE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    Inactive = "INACTIVE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum SchemaState {
    Mutable = "MUTABLE",
    Frozen = "FROZEN",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Table): object {
    const jsonObj = {
      ...obj,
      ...{
        "tableLimits": obj.tableLimits ? model.TableLimits.getJsonObj(obj.tableLimits) : undefined,

        "schema": obj.schema ? model.Schema.getJsonObj(obj.schema) : undefined,

        "replicas": obj.replicas
          ? obj.replicas.map(item => {
              return model.Replica.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Table): object {
    const jsonObj = {
      ...obj,
      ...{
        "tableLimits": obj.tableLimits
          ? model.TableLimits.getDeserializedJsonObj(obj.tableLimits)
          : undefined,

        "schema": obj.schema ? model.Schema.getDeserializedJsonObj(obj.schema) : undefined,

        "replicas": obj.replicas
          ? obj.replicas.map(item => {
              return model.Replica.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
