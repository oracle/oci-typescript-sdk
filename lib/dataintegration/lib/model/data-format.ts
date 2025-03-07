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
 * The data format object.
 */
export interface DataFormat {
  "formatAttribute"?:
    | model.AvroFormatAttribute
    | model.JsonFormatAttribute
    | model.CsvFormatAttribute
    | model.ParquetFormatAttribute;
  /**
   * type
   */
  "type"?: DataFormat.Type;
  "compressionConfig"?: model.Compression;
}

export namespace DataFormat {
  export enum Type {
    Xml = "XML",
    Json = "JSON",
    Csv = "CSV",
    Orc = "ORC",
    Parquet = "PARQUET",
    Avro = "AVRO",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: DataFormat): object {
    const jsonObj = {
      ...obj,
      ...{
        "formatAttribute": obj.formatAttribute
          ? model.AbstractFormatAttribute.getJsonObj(obj.formatAttribute)
          : undefined,

        "compressionConfig": obj.compressionConfig
          ? model.Compression.getJsonObj(obj.compressionConfig)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DataFormat): object {
    const jsonObj = {
      ...obj,
      ...{
        "formatAttribute": obj.formatAttribute
          ? model.AbstractFormatAttribute.getDeserializedJsonObj(obj.formatAttribute)
          : undefined,

        "compressionConfig": obj.compressionConfig
          ? model.Compression.getDeserializedJsonObj(obj.compressionConfig)
          : undefined
      }
    };

    return jsonObj;
  }
}
