/**
 * Network Firewall API
 * Use the Network Firewall API to create network firewalls and configure policies that regulates network traffic in and across VCNs.
 * OpenAPI spec version: 20230501
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
 * A Service which can be used to identify the running service. It uses port & protocol information.
 *
 */
export interface Service {
  /**
   * Name of the service.
   */
  "name": string;
  /**
   * OCID of the Network Firewall Policy this service belongs to.
   */
  "parentResourceId": string;

  "type": string;
}

export namespace Service {
  export function getJsonObj(obj: Service): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "TCP_SERVICE":
          return model.TcpService.getJsonObj(<model.TcpService>(<object>jsonObj), true);
        case "UDP_SERVICE":
          return model.UdpService.getJsonObj(<model.UdpService>(<object>jsonObj), true);
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Service): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "TCP_SERVICE":
          return model.TcpService.getDeserializedJsonObj(<model.TcpService>(<object>jsonObj), true);
        case "UDP_SERVICE":
          return model.UdpService.getDeserializedJsonObj(<model.UdpService>(<object>jsonObj), true);
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
}
