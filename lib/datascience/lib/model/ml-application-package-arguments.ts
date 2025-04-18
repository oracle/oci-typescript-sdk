/**
 * Data Science API
 * Use the Data Science API to organize your data science work, access data and computing resources, and build, train, deploy and manage models and model deployments. For more information, see [Data Science](https://docs.oracle.com/iaas/data-science/using/data-science.htm).

 * OpenAPI spec version: 20190101
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
 * List of ML Application package arguments provided during ML Application package upload.
 */
export interface MlApplicationPackageArguments {
  /**
   * Array of the ML Application package arguments
   */
  "arguments"?: Array<model.MlApplicationPackageArgumentDetails>;
}

export namespace MlApplicationPackageArguments {
  export function getJsonObj(obj: MlApplicationPackageArguments): object {
    const jsonObj = {
      ...obj,
      ...{
        "arguments": obj.arguments
          ? obj.arguments.map(item => {
              return model.MlApplicationPackageArgumentDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: MlApplicationPackageArguments): object {
    const jsonObj = {
      ...obj,
      ...{
        "arguments": obj.arguments
          ? obj.arguments.map(item => {
              return model.MlApplicationPackageArgumentDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
