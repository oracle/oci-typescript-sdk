/**
 * Big Data Service API
 * REST API for Oracle Big Data Service. Use this API to build, deploy, and manage fully elastic Big Data Service clusters. Build on Hadoop, Spark and Data Science distributions, which can be fully integrated with existing enterprise data in Oracle Database and Oracle applications.

 * OpenAPI spec version: 20190531
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
 * Details of node type level used to trigger the creation of a new node backup configuration and node replacement configuration.
 */
export interface NodeTypeLevelDetails extends model.LevelTypeDetails {
  /**
   * Type of the node or nodes of the node backup configuration or node replacement configuration which are going to be created.
   */
  "nodeType": string;

  "levelType": string;
}

export namespace NodeTypeLevelDetails {
  export function getJsonObj(obj: NodeTypeLevelDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.LevelTypeDetails.getJsonObj(obj) as NodeTypeLevelDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const levelType = "NODE_TYPE_LEVEL";
  export function getDeserializedJsonObj(
    obj: NodeTypeLevelDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.LevelTypeDetails.getDeserializedJsonObj(obj) as NodeTypeLevelDetails)),
      ...{}
    };

    return jsonObj;
  }
}