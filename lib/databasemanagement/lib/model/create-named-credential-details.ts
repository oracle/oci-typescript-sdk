/**
 * Database Management API
 * Use the Database Management API to monitor and manage resources such as
Oracle Databases, MySQL Databases, and External Database Systems. 
For more information, see [Database Management](https://docs.oracle.com/iaas/database-management/home.htm).

 * OpenAPI spec version: 20201101
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
 * The details required to create a named credential.
 */
export interface CreateNamedCredentialDetails {
  /**
   * The name of the named credential. Valid characters are uppercase or
   * lowercase letters, numbers, and \"_\". The name of the named credential
   * cannot be modified. It must be unique in the compartment and must begin with
   * an alphabetic character.
   *
   */
  "name": string;
  /**
   * The information specified by the user about the named credential.
   */
  "description"?: string;
  /**
   * The scope of the named credential.
   */
  "scope": model.NamedCredentialScope;
  /**
   * The type of resource associated with the named credential.
   */
  "type": model.ResourceType;
  "content": model.BasicNamedCredentialContent;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment
   * in which the named credential resides.
   *
   */
  "compartmentId": string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the resource that
   * is associated to the named credential.
   *
   */
  "associatedResource"?: string;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {\"Department\": \"Finance\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateNamedCredentialDetails {
  export function getJsonObj(obj: CreateNamedCredentialDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "content": obj.content ? model.NamedCredentialContent.getJsonObj(obj.content) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateNamedCredentialDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "content": obj.content
          ? model.NamedCredentialContent.getDeserializedJsonObj(obj.content)
          : undefined
      }
    };

    return jsonObj;
  }
}
