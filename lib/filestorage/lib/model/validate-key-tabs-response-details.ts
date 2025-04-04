/**
 * File Storage API
 * Use the File Storage service API to manage file systems, mount targets, and snapshots.
For more information, see [Overview of File Storage](https://docs.oracle.com/iaas/Content/File/Concepts/filestorageoverview.htm).

 * OpenAPI spec version: 20171215
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
 * Validate keytabs response details.
 */
export interface ValidateKeyTabsResponseDetails {
  /**
   * An array of keytab entries (principal, encryptionType, keyVersionNumber).
   */
  "currentKerberosKeytabEntries": Array<model.KerberosKeytabEntry>;
  /**
   * An array of keytab entries (principal, encryptionType, keyVersionNumber).
   */
  "backupKerberosKeytabEntries"?: Array<model.KerberosKeytabEntry>;
}

export namespace ValidateKeyTabsResponseDetails {
  export function getJsonObj(obj: ValidateKeyTabsResponseDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "currentKerberosKeytabEntries": obj.currentKerberosKeytabEntries
          ? obj.currentKerberosKeytabEntries.map(item => {
              return model.KerberosKeytabEntry.getJsonObj(item);
            })
          : undefined,
        "backupKerberosKeytabEntries": obj.backupKerberosKeytabEntries
          ? obj.backupKerberosKeytabEntries.map(item => {
              return model.KerberosKeytabEntry.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ValidateKeyTabsResponseDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "currentKerberosKeytabEntries": obj.currentKerberosKeytabEntries
          ? obj.currentKerberosKeytabEntries.map(item => {
              return model.KerberosKeytabEntry.getDeserializedJsonObj(item);
            })
          : undefined,
        "backupKerberosKeytabEntries": obj.backupKerberosKeytabEntries
          ? obj.backupKerberosKeytabEntries.map(item => {
              return model.KerberosKeytabEntry.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
