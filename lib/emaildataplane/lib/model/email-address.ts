/**
 * Email Delivery Submission API
 * Use the Email Delivery API to send high-volume and application-generated emails.
For more information, see [Overview of the Email Delivery Service](/iaas/Content/Email/Concepts/overview.htm).

 * OpenAPI spec version: 20220926
 * Contact: email-dev_us_grp@oracle.com
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
 * Email address Object that holds display name and email address.
 */
export interface EmailAddress {
  /**
   * ASCII only email address.
   */
  "email": string;
  /**
   * Display name for the email address. UTF-8 is supported for display name [RFC 2047](https://www.rfc-editor.org/rfc/rfc2047).
   */
  "name"?: string;
}

export namespace EmailAddress {
  export function getJsonObj(obj: EmailAddress): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: EmailAddress): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}