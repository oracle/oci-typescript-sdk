/**
 * Service Mesh API
 * Use the Service Mesh API to manage mesh, virtual service, access policy and other mesh related items.
 * OpenAPI spec version: 20220615
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
 * Listener configuration.
 */
export interface IngressGatewayListener {
  /**
   * Type of protocol used.
   */
  "protocol": IngressGatewayListener.Protocol;
  /**
   * Port on which ingress gateway is listening. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "port": number;
  "tls"?: model.IngressListenerTlsConfig;
}

export namespace IngressGatewayListener {
  export enum Protocol {
    Http = "HTTP",
    TlsPassthrough = "TLS_PASSTHROUGH",
    Tcp = "TCP",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: IngressGatewayListener): object {
    const jsonObj = {
      ...obj,
      ...{
        "tls": obj.tls ? model.IngressListenerTlsConfig.getJsonObj(obj.tls) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: IngressGatewayListener): object {
    const jsonObj = {
      ...obj,
      ...{
        "tls": obj.tls ? model.IngressListenerTlsConfig.getDeserializedJsonObj(obj.tls) : undefined
      }
    };

    return jsonObj;
  }
}
