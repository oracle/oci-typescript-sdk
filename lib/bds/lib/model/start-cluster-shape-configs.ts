/**
 * Big Data Service API
 * REST API for Oracle Big Data Service. Use this API to build, deploy, and manage fully elastic Big Data Service clusters. Build on Hadoop, Spark and Data Science distributions, which can be fully integrated with existing enterprise data in Oracle Database and Oracle applications.

 * OpenAPI spec version: 20190531
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
 * The shape configuration to be used to start the cluster. If the value is not set, the start cluster operation will try to start the cluster as is.
 */
export interface StartClusterShapeConfigs {
  /**
   * Shape configurations for each node type.
   */
  "nodeTypeShapeConfigs": Array<model.NodeTypeShapeConfig>;
}

export namespace StartClusterShapeConfigs {
  export function getJsonObj(obj: StartClusterShapeConfigs): object {
    const jsonObj = {
      ...obj,
      ...{
        "nodeTypeShapeConfigs": obj.nodeTypeShapeConfigs
          ? obj.nodeTypeShapeConfigs.map(item => {
              return model.NodeTypeShapeConfig.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: StartClusterShapeConfigs): object {
    const jsonObj = {
      ...obj,
      ...{
        "nodeTypeShapeConfigs": obj.nodeTypeShapeConfigs
          ? obj.nodeTypeShapeConfigs.map(item => {
              return model.NodeTypeShapeConfig.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
