/**
 * GoldenGate API
 * Use the Oracle Cloud Infrastructure GoldenGate APIs to perform data replication operations.

 * OpenAPI spec version: 20200407
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Options required for pipeline Initial Data Load. If enabled, copies existing data from source to target before replication.
 *
 */
export interface ReplicateSchemaChange {
  /**
   * If ENABLED, then addition or removal of schema is also replicated, apart from individual tables and records when creating or updating the pipeline.
   *
   */
  "canReplicateSchemaChange": ReplicateSchemaChange.CanReplicateSchemaChange;
  /**
   * Action upon DDL Error (active only if 'Replicate schema changes (DDL)' is selected) i.e canReplicateSchemaChange=true
   *
   */
  "actionOnDdlError"?: model.ReplicateDdlErrorAction;
  /**
   * Action upon DML Error (active only if 'Replicate schema changes (DDL)' is selected) i.e canReplicateSchemaChange=true
   *
   */
  "actionOnDmlError"?: model.ReplicateDmlErrorAction;
}

export namespace ReplicateSchemaChange {
  export enum CanReplicateSchemaChange {
    Enabled = "ENABLED",
    Disabled = "DISABLED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ReplicateSchemaChange): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ReplicateSchemaChange): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}