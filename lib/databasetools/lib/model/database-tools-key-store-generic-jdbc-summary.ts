/**
 * Database Tools
 * Use the Database Tools API to manage connections, private endpoints, and work requests in the Database Tools service.
 * OpenAPI spec version: 20201005
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
 * The summary of the key store.
 */
export interface DatabaseToolsKeyStoreGenericJdbcSummary {
  /**
   * The key store type.
   */
  "keyStoreType"?: model.KeyStoreTypeGenericJdbc;
  "keyStoreContent"?: model.DatabaseToolsKeyStoreContentSecretIdGenericJdbcSummary;
  "keyStorePassword"?: model.DatabaseToolsKeyStorePasswordSecretIdGenericJdbcSummary;
}

export namespace DatabaseToolsKeyStoreGenericJdbcSummary {
  export function getJsonObj(obj: DatabaseToolsKeyStoreGenericJdbcSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "keyStoreContent": obj.keyStoreContent
          ? model.DatabaseToolsKeyStoreContentGenericJdbcSummary.getJsonObj(obj.keyStoreContent)
          : undefined,
        "keyStorePassword": obj.keyStorePassword
          ? model.DatabaseToolsKeyStorePasswordGenericJdbcSummary.getJsonObj(obj.keyStorePassword)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DatabaseToolsKeyStoreGenericJdbcSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "keyStoreContent": obj.keyStoreContent
          ? model.DatabaseToolsKeyStoreContentGenericJdbcSummary.getDeserializedJsonObj(
              obj.keyStoreContent
            )
          : undefined,
        "keyStorePassword": obj.keyStorePassword
          ? model.DatabaseToolsKeyStorePasswordGenericJdbcSummary.getDeserializedJsonObj(
              obj.keyStorePassword
            )
          : undefined
      }
    };

    return jsonObj;
  }
}
