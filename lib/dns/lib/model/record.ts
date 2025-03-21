/**
 * DNS API
 * API for the DNS service. Use this API to manage DNS zones, records, and other DNS resources.
For more information, see [Overview of the DNS Service](https://docs.oracle.com/iaas/Content/DNS/Concepts/dnszonemanagement.htm).

 * OpenAPI spec version: 20180115
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
 * A DNS resource record. For more information, see
 * [Supported DNS Resource Record Types](https://docs.oracle.com/iaas/Content/DNS/Reference/supporteddnsresource.htm).
 *
 */
export interface Record {
  /**
   * The fully qualified domain name where the record can be located.
   *
   */
  "domain"?: string;
  /**
   * A unique identifier for the record within its zone.
   *
   */
  "recordHash"?: string;
  /**
   * A Boolean flag indicating whether or not parts of the record
   * are unable to be explicitly managed.
   *
   */
  "isProtected"?: boolean;
  /**
   * The record's data, as whitespace-delimited tokens in
   * type-specific presentation format. All RDATA is normalized and the
   * returned presentation of your RDATA may differ from its initial input.
   * For more information about RDATA, see [Supported DNS Resource Record Types](https://docs.oracle.com/iaas/Content/DNS/Reference/supporteddnsresource.htm)
   *
   */
  "rdata"?: string;
  /**
   * The latest version of the record's zone in which its RRSet differs
   * from the preceding version.
   *
   */
  "rrsetVersion"?: string;
  /**
   * The type of DNS record, such as A or CNAME. For more information, see [Resource Record (RR) TYPEs](https://www.iana.org/assignments/dns-parameters/dns-parameters.xhtml#dns-parameters-4).
   *
   */
  "rtype"?: string;
  /**
   * The Time To Live for the record, in seconds. Using a TTL lower than 30 seconds is not recommended.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "ttl"?: number;
}

export namespace Record {
  export function getJsonObj(obj: Record): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Record): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
