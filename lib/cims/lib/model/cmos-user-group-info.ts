/**
 * Support Management API
 * Use the Support Management API to manage support requests.
For more information, see [Getting Help and Contacting Support](/iaas/Content/GSG/Tasks/contactingsupport.htm).
**Note**: Before you can create service requests with this API,
complete user registration at My Oracle Cloud Support 
and then ask your tenancy administrator to provide you authorization for the related user groups.

 * OpenAPI spec version: 20181231
 * Contact: oci_ops_cims_dev_us_grp@oracle.com
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
 * Identifier and name of the technical support request's user group ({@code userGroupId} and {@code userGroupName}).
 *
 */
export interface CmosUserGroupInfo {
  /**
   * Technical support type ({@code TECH}) only: The identifier of the support request's user group in My Oracle Cloud Support portal.
   *
   */
  "userGroupId"?: string;
  /**
   * Technical support type ({@code TECH}) only: Name of the support request's user group in My Oracle Cloud Support portal.
   *
   */
  "userGroupName"?: string;
}

export namespace CmosUserGroupInfo {
  export function getJsonObj(obj: CmosUserGroupInfo): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CmosUserGroupInfo): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}