/**
 * Web Application Acceleration and Security Services API
 * OCI Web Application Acceleration and Security Services
 * OpenAPI spec version: 20181116
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

export interface HttpRedirectTarget {
  /**
   * The protocol used for the target, http or https.
   */
  "protocol": HttpRedirectTarget.Protocol;
  /**
   * The host portion of the redirect.
   */
  "host": string;
  /**
   * Port number of the target destination of the redirect, default to match protocol Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "port"?: number;
  /**
   * The path component of the target URL (e.g., \"/path/to/resource\" in \"https://target.example.com/path/to/resource?redirected\"), which can be empty, static, or request-copying, or request-prefixing. Use of \\ is not permitted except to escape a following \\, {, or }. An empty value is treated the same as static \"/\". A static value must begin with a leading \"/\", optionally followed by other path characters. A request-copying value must exactly match \"{path}\", and will be replaced with the path component of the request URL (including its initial \"/\"). A request-prefixing value must start with \"/\" and end with a non-escaped \"{path}\", which will be replaced with the path component of the request URL (including its initial \"/\"). Only one such replacement token is allowed.
   */
  "path": string;
  /**
   * The query component of the target URL (e.g., \"?redirected\" in \"https://target.example.com/path/to/resource?redirected\"), which can be empty, static, or request-copying. Use of \\ is not permitted except to escape a following \\, {, or }. An empty value results in a redirection target URL with no query component. A static value must begin with a leading \"?\", optionally followed by other query characters. A request-copying value must exactly match \"{query}\", and will be replaced with the query component of the request URL (including a leading \"?\" if and only if the request URL includes a query component).
   */
  "query": string;
}

export namespace HttpRedirectTarget {
  export enum Protocol {
    Http = "HTTP",
    Https = "HTTPS",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: HttpRedirectTarget): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: HttpRedirectTarget): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
