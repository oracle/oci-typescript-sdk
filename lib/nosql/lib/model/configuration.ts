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
 * A tenancy or service-level configuration. The
 * service may of the standard {@code MULTI_TENANCY} type, or of the
 * {@code HOSTED} environment type.
 *
 */
export interface Configuration {
  "environment": string;
}

export namespace Configuration {
  export function getJsonObj(obj: Configuration): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "environment" in obj && obj.environment) {
      switch (obj.environment) {
        case "MULTI_TENANCY":
          return model.MultiTenancyConfiguration.getJsonObj(
            <model.MultiTenancyConfiguration>(<object>jsonObj),
            true
          );
        case "HOSTED":
          return model.HostedConfiguration.getJsonObj(
            <model.HostedConfiguration>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.environment}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Configuration): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "environment" in obj && obj.environment) {
      switch (obj.environment) {
        case "MULTI_TENANCY":
          return model.MultiTenancyConfiguration.getDeserializedJsonObj(
            <model.MultiTenancyConfiguration>(<object>jsonObj),
            true
          );
        case "HOSTED":
          return model.HostedConfiguration.getDeserializedJsonObj(
            <model.HostedConfiguration>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.environment}`);
      }
    }
    return jsonObj;
  }
}
