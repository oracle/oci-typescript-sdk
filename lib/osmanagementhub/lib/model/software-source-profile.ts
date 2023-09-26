/**
 * OS Management Hub API
 * Use the OS Management Hub API to manage and monitor updates and patches for the operating system environments in your private data centers through a single management console. For more information, see [Overview of OS Management Hub](https://docs.cloud.oracle.com/iaas/osmh/doc/overview.htm).

 * OpenAPI spec version: 20220901
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Definition of a registration profile of type SoftwareSource.
 */
export interface SoftwareSourceProfile extends model.Profile {
  /**
   * The list of software sources that the registration profile will use.
   */
  "softwareSources": Array<model.SoftwareSourceDetails>;

  "profileType": string;
}

export namespace SoftwareSourceProfile {
  export function getJsonObj(obj: SoftwareSourceProfile, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Profile.getJsonObj(obj) as SoftwareSourceProfile)),
      ...{
        "softwareSources": obj.softwareSources
          ? obj.softwareSources.map(item => {
              return model.SoftwareSourceDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const profileType = "SOFTWARESOURCE";
  export function getDeserializedJsonObj(
    obj: SoftwareSourceProfile,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.Profile.getDeserializedJsonObj(obj) as SoftwareSourceProfile)),
      ...{
        "softwareSources": obj.softwareSources
          ? obj.softwareSources.map(item => {
              return model.SoftwareSourceDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}