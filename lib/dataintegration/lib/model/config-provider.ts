/**
 * Data Integration API
 * Use the Data Integration API to organize your data integration projects, create data flows, pipelines and tasks, and then publish, schedule, and run tasks that extract, transform, and load data. For more information, see [Data Integration](https://docs.oracle.com/iaas/data-integration/home.htm).
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * The information about the configuration provider.
 */
export interface ConfigProvider {
  /**
   * The configuration provider bindings.
   */
  "bindings"?: { [key: string]: model.ParameterValue };
  /**
   * The child providers.
   */
  "childProviders"?: { [key: string]: model.ConfigProvider };
}

export namespace ConfigProvider {
  export function getJsonObj(obj: ConfigProvider): object {
    const jsonObj = {
      ...obj,
      ...{
        "bindings": obj.bindings
          ? common.mapContainer(obj.bindings, model.ParameterValue.getJsonObj)
          : undefined,
        "childProviders": obj.childProviders
          ? common.mapContainer(obj.childProviders, model.ConfigProvider.getJsonObj)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ConfigProvider): object {
    const jsonObj = {
      ...obj,
      ...{
        "bindings": obj.bindings
          ? common.mapContainer(obj.bindings, model.ParameterValue.getDeserializedJsonObj)
          : undefined,
        "childProviders": obj.childProviders
          ? common.mapContainer(obj.childProviders, model.ConfigProvider.getDeserializedJsonObj)
          : undefined
      }
    };

    return jsonObj;
  }
}
