/**
 * Security Attribute API
 * Use the Security Attributes API to manage security attributes and security attribute namespaces. For more information, see the documentation for [Security Attributes](https://docs.oracle.com/iaas/Content/zero-trust-packet-routing/managing-security-attributes.htm) and [Security Attribute Namespaces](https://docs.oracle.com/iaas/Content/zero-trust-packet-routing/managing-security-attribute-namespaces.htm).
 * OpenAPI spec version: 20240815
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
 * Details of the security attribute to be updated for a specific security attribute namespace.
 *
 */
export interface UpdateSecurityAttributeDetails {
  /**
   * The description of the security attribute during creation.
   */
  "description"?: string;
  /**
   * Whether the security attribute is retired.
   * See [Managing Security Attributes](https://docs.oracle.com/iaas/Content/zero-trust-packet-routing/managing-security-attributes.htm).
   *
   */
  "isRetired"?: boolean;
  "validator"?: model.EnumSecurityAttributeValidator | model.DefaultSecurityAttributeValidator;
}

export namespace UpdateSecurityAttributeDetails {
  export function getJsonObj(obj: UpdateSecurityAttributeDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "validator": obj.validator
          ? model.BaseSecurityAttributeValidator.getJsonObj(obj.validator)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateSecurityAttributeDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "validator": obj.validator
          ? model.BaseSecurityAttributeValidator.getDeserializedJsonObj(obj.validator)
          : undefined
      }
    };

    return jsonObj;
  }
}
