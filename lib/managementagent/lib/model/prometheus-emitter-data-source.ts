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
 * A Prometheus data source.
 *
 */
export interface PrometheusEmitterDataSource extends model.DataSource {
  /**
   * The url through which the Prometheus Exporter publishes its metrics. (http only)
   */
  "url": string;
  /**
   * The OCI monitoring namespace to which scraped metrics should be uploaded.
   */
  "namespace": string;
  /**
   * Comma separated metric name list. The complete set of desired scraped metrics. Use this property to limit the set of metrics uploaded if required.
   */
  "allowMetrics"?: string;
  /**
   * The url of the network proxy that provides access to the Prometheus Exporter's endpoint (url required property).
   */
  "proxyUrl"?: string;
  /**
   * Number in milliseconds. The timeout for connecting to the Prometheus Exporter's endpoint. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "connectionTimeout"?: number;
  /**
   * Number in milliseconds. The timeout for reading the response from the Prometheus Exporter's endpoint. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "readTimeout"?: number;
  /**
   * Number in kilobytes. The limit on the data being sent, not to exceed the agent's fixed limit of 400 (KB). Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "readDataLimit"?: number;
  /**
   * Number in minutes. The scraping occurs at the specified interval. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "scheduleMins"?: number;
  /**
   * OCI monitoring resource group to assign the metric to.
   */
  "resourceGroup"?: string;
  /**
   * The names of other user-supplied properties expressed as fixed values to be used as dimensions for every uploaded datapoint.
   */
  "metricDimensions"?: Array<model.MetricDimension>;

  "type": string;
}

export namespace PrometheusEmitterDataSource {
  export function getJsonObj(obj: PrometheusEmitterDataSource, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DataSource.getJsonObj(obj) as PrometheusEmitterDataSource)),
      ...{
        "metricDimensions": obj.metricDimensions
          ? obj.metricDimensions.map(item => {
              return model.MetricDimension.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const type = "PROMETHEUS_EMITTER";
  export function getDeserializedJsonObj(
    obj: PrometheusEmitterDataSource,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DataSource.getDeserializedJsonObj(obj) as PrometheusEmitterDataSource)),
      ...{
        "metricDimensions": obj.metricDimensions
          ? obj.metricDimensions.map(item => {
              return model.MetricDimension.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}