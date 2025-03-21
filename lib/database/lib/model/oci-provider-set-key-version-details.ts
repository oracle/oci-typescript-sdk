/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](https://docs.oracle.com/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
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
 * Used for setting KMS key versions
 */
export interface OciProviderSetKeyVersionDetails extends model.SetKeyVersionDetails {
  /**
   * The OCID of the key container version that is used in database transparent data encryption (TDE) operations KMS Key can have multiple key versions. If none is specified, the current key version (latest) of the Key Id is used for the operation. Autonomous Database Serverless does not use key versions, hence is not applicable for Autonomous Database Serverless instances.
   *
   */
  "kmsKeyVersionId": string;

  "provider": string;
}

export namespace OciProviderSetKeyVersionDetails {
  export function getJsonObj(
    obj: OciProviderSetKeyVersionDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.SetKeyVersionDetails.getJsonObj(obj) as OciProviderSetKeyVersionDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const provider = "OCI";
  export function getDeserializedJsonObj(
    obj: OciProviderSetKeyVersionDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.SetKeyVersionDetails.getDeserializedJsonObj(
            obj
          ) as OciProviderSetKeyVersionDetails)),
      ...{}
    };

    return jsonObj;
  }
}
