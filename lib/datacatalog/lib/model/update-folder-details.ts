/**
 * Data Catalog API
 * Use the Data Catalog APIs to collect, organize, find, access, understand, enrich, and activate technical, business, and operational metadata.
For more information, see [Data Catalog](https://docs.oracle.com/iaas/data-catalog/home.htm).

 * OpenAPI spec version: 20190325
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
 * Properties used in folder update operations.
 */
export interface UpdateFolderDetails {
  /**
   * A user-friendly display name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
   * Optional user friendly business name of the folder. If set, this supplements the harvested display name of the object.
   */
  "businessName"?: string;
  /**
   * Detailed description of a folder.
   */
  "description"?: string;
  /**
   * The key of the containing folder.
   */
  "parentFolderKey"?: string;
  /**
   * The list of customized properties along with the values for this object
   */
  "customPropertyMembers"?: Array<model.CustomPropertySetUsage>;
  /**
   * A map of maps that contains the properties which are specific to the folder type. Each folder type
   * definition defines it's set of required and optional properties. The map keys are category names and the
   * values are maps of property name to property value. Every property is contained inside of a category. Most
   * folders have required properties within the \"default\" category. To determine the set of optional and
   * required properties for a folder type, a query can be done on '/types?type=folder' that returns a
   * collection of all folder types. The appropriate folder type, which includes definitions of all of
   * it's properties, can be identified from this collection.
   * Example: {@code {\"properties\": { \"default\": { \"key1\": \"value1\"}}}}
   *
   */
  "properties"?: { [key: string]: { [key: string]: string } };
  /**
   * Last modified timestamp of this object in the external system.
   */
  "timeExternal"?: Date;
  /**
   * Harvest status of the folder.
   */
  "harvestStatus"?: model.HarvestStatus;
  /**
   * The key of the last harvest process to update the metadata of this object.
   */
  "lastJobKey"?: string;
}

export namespace UpdateFolderDetails {
  export function getJsonObj(obj: UpdateFolderDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "customPropertyMembers": obj.customPropertyMembers
          ? obj.customPropertyMembers.map(item => {
              return model.CustomPropertySetUsage.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateFolderDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "customPropertyMembers": obj.customPropertyMembers
          ? obj.customPropertyMembers.map(item => {
              return model.CustomPropertySetUsage.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
