/**
 * Management Agent API
 * Use the Management Agent API to manage your infrastructure's management agents, including their plugins and install keys.
For more information, see [Management Agent](https://docs.cloud.oracle.com/iaas/management-agents/index.html).

 * OpenAPI spec version: 20200202
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
 * Type of the data source
 * KUBERNETES_CLUSTER represents an Kubernetes cluster.
 * PROMETHEUS_EMITTER represents a Prometheus metric collector.
 *
 **/
export enum DataSourceTypes {
  KubernetesCluster = "KUBERNETES_CLUSTER",
  PrometheusEmitter = "PROMETHEUS_EMITTER",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace DataSourceTypes {
  export function getJsonObj(obj: DataSourceTypes): DataSourceTypes {
    return obj;
  }
  export function getDeserializedJsonObj(obj: DataSourceTypes): DataSourceTypes {
    return obj;
  }
}