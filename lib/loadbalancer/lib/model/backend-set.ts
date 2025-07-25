/**
 * Load Balancing API
 * API for the Load Balancing service. Use this API to manage load balancers, backend sets, and related items. For more
information, see [Overview of Load Balancing](https://docs.oracle.com/iaas/Content/Balance/Concepts/balanceoverview.htm).

 * OpenAPI spec version: 20170115
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
 * The configuration of a load balancer backend set.
 * For more information on backend set configuration, see
 * [Managing Backend Sets](https://docs.oracle.com/iaas/Content/Balance/Tasks/managingbackendsets.htm).
 * <p>
 **Note:** The {@code sessionPersistenceConfiguration} (application cookie stickiness) and {@code lbCookieSessionPersistenceConfiguration}
 * (LB cookie stickiness) attributes are mutually exclusive. To avoid returning an error, configure only one of these two
 * attributes per backend set.
 * <p>
 **Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.
 *
 */
export interface BackendSet {
  /**
    * A friendly name for the backend set. It must be unique and it cannot be changed.
* <p>
Valid backend set names include only alphanumeric characters, dashes, and underscores. Backend set names cannot
* contain spaces. Avoid entering confidential information.
* <p>
Example: {@code example_backend_set}
* 
    */
  "name": string;
  /**
    * The load balancer policy for the backend set. To get a list of available policies, use the
* {@link #listPolicies(ListPoliciesRequest) listPolicies} operation.
* <p>
Example: {@code LEAST_CONNECTIONS}
* 
    */
  "policy": string;
  "backends": Array<model.Backend>;
  /**
    * The maximum number of simultaneous connections the load balancer can make to any backend
* in the backend set unless the backend has its own maxConnections setting. If this is not
* set or set to 0 then the number of simultaneous connections the load balancer can make
* to any backend in the backend set unless the backend has its own maxConnections setting
* is unlimited.
* <p>
Example: {@code 300}
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "backendMaxConnections"?: number;
  "healthChecker": model.HealthChecker;
  "sslConfiguration"?: model.SSLConfiguration;
  "sessionPersistenceConfiguration"?: model.SessionPersistenceConfigurationDetails;
  "lbCookieSessionPersistenceConfiguration"?: model.LBCookieSessionPersistenceConfigurationDetails;
}

export namespace BackendSet {
  export function getJsonObj(obj: BackendSet): object {
    const jsonObj = {
      ...obj,
      ...{
        "backends": obj.backends
          ? obj.backends.map(item => {
              return model.Backend.getJsonObj(item);
            })
          : undefined,

        "healthChecker": obj.healthChecker
          ? model.HealthChecker.getJsonObj(obj.healthChecker)
          : undefined,
        "sslConfiguration": obj.sslConfiguration
          ? model.SSLConfiguration.getJsonObj(obj.sslConfiguration)
          : undefined,
        "sessionPersistenceConfiguration": obj.sessionPersistenceConfiguration
          ? model.SessionPersistenceConfigurationDetails.getJsonObj(
              obj.sessionPersistenceConfiguration
            )
          : undefined,
        "lbCookieSessionPersistenceConfiguration": obj.lbCookieSessionPersistenceConfiguration
          ? model.LBCookieSessionPersistenceConfigurationDetails.getJsonObj(
              obj.lbCookieSessionPersistenceConfiguration
            )
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: BackendSet): object {
    const jsonObj = {
      ...obj,
      ...{
        "backends": obj.backends
          ? obj.backends.map(item => {
              return model.Backend.getDeserializedJsonObj(item);
            })
          : undefined,

        "healthChecker": obj.healthChecker
          ? model.HealthChecker.getDeserializedJsonObj(obj.healthChecker)
          : undefined,
        "sslConfiguration": obj.sslConfiguration
          ? model.SSLConfiguration.getDeserializedJsonObj(obj.sslConfiguration)
          : undefined,
        "sessionPersistenceConfiguration": obj.sessionPersistenceConfiguration
          ? model.SessionPersistenceConfigurationDetails.getDeserializedJsonObj(
              obj.sessionPersistenceConfiguration
            )
          : undefined,
        "lbCookieSessionPersistenceConfiguration": obj.lbCookieSessionPersistenceConfiguration
          ? model.LBCookieSessionPersistenceConfigurationDetails.getDeserializedJsonObj(
              obj.lbCookieSessionPersistenceConfiguration
            )
          : undefined
      }
    };

    return jsonObj;
  }
}
