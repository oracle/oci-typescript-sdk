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
 * A managed container for security attributes. A security attribute namespace is unique in a tenancy. For more information,
 * see [Managing Security Attributes Namespaces](https://docs.oracle.com/iaas/Content/zero-trust-packet-routing/managing-security-attribute-namespaces.htm).
 * <p>
 **Warning:** Oracle recommends that you avoid using any confidential information when you supply string values
 * using the API.
 *
 */
export interface SecurityAttributeNamespace {
  /**
   * The OCID of the security attribute namespace.
   */
  "id": string;
  /**
   * The OCID of the compartment that contains the namespace.
   */
  "compartmentId": string;
  /**
   * The name of the namespace. It must be unique across all namespaces in the tenancy and cannot be changed.
   *
   */
  "name": string;
  /**
   * The description you assign to the security attribute namespace.
   */
  "description": string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Department\": \"Finance\"}}
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace.
* For more information, see [Resource Tags](https://docs.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
    * System tags for this resource. Each key is predefined and scoped to a namespace.
* <p>
Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
* 
    */
  "systemTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Indicates whether the security attribute namespace is retired.
   * See [Managing Security Attribute Namespaces](https://docs.oracle.com/iaas/Content/zero-trust-packet-routing/managing-security-attribute-namespaces.htm).
   *
   */
  "isRetired": boolean;
  /**
   * Indicates possible modes the security attributes in this namespace can be set to.
   * This is not accepted from the user. Currently the supported values are enforce and audit.
   *
   */
  "mode"?: Array<string>;
  /**
   * The security attribute namespace's current state. After creating a security attribute namespace, make sure its {@code lifecycleState} is ACTIVE before using it. After retiring a security attribute namespace, make sure its {@code lifecycleState} is INACTIVE.
   */
  "lifecycleState"?: SecurityAttributeNamespace.LifecycleState;
  /**
   * Date and time the security attribute namespace was created, in the format defined by RFC3339.
   * Example: {@code 2016-08-25T21:10:29.600Z}
   *
   */
  "timeCreated": Date;
}

export namespace SecurityAttributeNamespace {
  export enum LifecycleState {
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: SecurityAttributeNamespace): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SecurityAttributeNamespace): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
