/**
 * Application Performance Monitoring Synthetic Monitoring API
 * Use the Application Performance Monitoring Synthetic Monitoring API to query synthetic scripts and monitors. For more information, see [Application Performance Monitoring](https://docs.oracle.com/iaas/application-performance-monitoring/index.html).
 * OpenAPI spec version: 20200630
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
 * Password.
 */
export interface PasswordInText extends model.Password {
  /**
   * Password.
   */
  "password": string;

  "passwordType": string;
}

export namespace PasswordInText {
  export function getJsonObj(obj: PasswordInText, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Password.getJsonObj(obj) as PasswordInText)),
      ...{}
    };

    return jsonObj;
  }
  export const passwordType = "IN_TEXT";
  export function getDeserializedJsonObj(obj: PasswordInText, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Password.getDeserializedJsonObj(obj) as PasswordInText)),
      ...{}
    };

    return jsonObj;
  }
}