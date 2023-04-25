/**
 * GoldenGate API
 * Use the Oracle Cloud Infrastructure GoldenGate APIs to perform data replication operations.

 * OpenAPI spec version: 20200407
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Represents the metadata of a Hadoop Distributed File System Connection.
 *
 */
export interface HdfsConnection extends model.Connection {
  /**
   * The Hadoop Distributed File System technology type.
   */
  "technologyType": HdfsConnection.TechnologyType;

  "connectionType": string;
}

export namespace HdfsConnection {
  export enum TechnologyType {
    Hdfs = "HDFS",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: HdfsConnection, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Connection.getJsonObj(obj) as HdfsConnection)),
      ...{}
    };

    return jsonObj;
  }
  export const connectionType = "HDFS";
  export function getDeserializedJsonObj(obj: HdfsConnection, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Connection.getDeserializedJsonObj(obj) as HdfsConnection)),
      ...{}
    };

    return jsonObj;
  }
}