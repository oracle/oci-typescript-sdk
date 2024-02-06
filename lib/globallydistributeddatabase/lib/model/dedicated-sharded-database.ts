/**
 * Globally Distributed Database
 * Use the Globally Distributed Database service APIs to create and manage distributed databases.
 * OpenAPI spec version: 20230301
 *
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
 * Details of ATP-D based sharded database.
 */
export interface DedicatedShardedDatabase extends model.ShardedDatabase {
  /**
   * The certificate common name used in all cloudAutonomousVmClusters for the sharded database topology. Eg. Production.
   * All the clusters used in one sharded database topology shall have same CABundle setup. Valid characterset for
   * clusterCertificateCommonName include uppercase or lowercase letters, numbers, hyphens, underscores, and period.
   *
   */
  "clusterCertificateCommonName"?: string;
  /**
   * The character set for the database.
   */
  "characterSet": string;
  /**
   * The national character set for the database.
   */
  "ncharacterSet": string;
  /**
   * The default number of unique chunks in a shardspace. The value of chunks must be
   * greater than 2 times the size of the largest shardgroup in any shardspace.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "chunks"?: number;
  /**
   * Possible workload types.
   */
  "dbWorkload"?: DedicatedShardedDatabase.DbWorkload;
  /**
   * Sharding Method.
   */
  "shardingMethod": DedicatedShardedDatabase.ShardingMethod;
  /**
   * Oracle Database version number.
   */
  "dbVersion": string;
  /**
   * The GSM listener port number. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "listenerPort"?: number;
  /**
   * The TLS listener port number for sharded database. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "listenerPortTls"?: number;
  /**
   * Ons local port number. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "onsPortLocal"?: number;
  /**
   * Ons remote port number. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "onsPortRemote"?: number;
  /**
   * Unique prefix for the sharded database.
   */
  "prefix": string;
  /**
   * The OCID of private endpoint being used by the sharded database.
   */
  "privateEndpoint"?: string;
  "connectionStrings"?: model.ConnectionString;
  /**
   * Timezone associated with the sharded database.
   */
  "timeZone"?: string;
  /**
   * Details of GSM instances for the sharded database.
   */
  "gsms"?: Array<model.GsmDetails>;
  /**
   * Details of ATP-D based shards.
   */
  "shardDetails"?: Array<model.DedicatedShardDetails>;
  /**
   * Details of ATP-D based catalogs.
   */
  "catalogDetails"?: Array<model.DedicatedCatalogDetails>;

  "dbDeploymentType": string;
}

export namespace DedicatedShardedDatabase {
  export enum DbWorkload {
    Oltp = "OLTP",
    Dw = "DW",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum ShardingMethod {
    User = "USER",
    System = "SYSTEM",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: DedicatedShardedDatabase, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ShardedDatabase.getJsonObj(obj) as DedicatedShardedDatabase)),
      ...{
        "connectionStrings": obj.connectionStrings
          ? model.ConnectionString.getJsonObj(obj.connectionStrings)
          : undefined,

        "gsms": obj.gsms
          ? obj.gsms.map(item => {
              return model.GsmDetails.getJsonObj(item);
            })
          : undefined,
        "shardDetails": obj.shardDetails
          ? obj.shardDetails.map(item => {
              return model.DedicatedShardDetails.getJsonObj(item);
            })
          : undefined,
        "catalogDetails": obj.catalogDetails
          ? obj.catalogDetails.map(item => {
              return model.DedicatedCatalogDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const dbDeploymentType = "DEDICATED";
  export function getDeserializedJsonObj(
    obj: DedicatedShardedDatabase,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ShardedDatabase.getDeserializedJsonObj(obj) as DedicatedShardedDatabase)),
      ...{
        "connectionStrings": obj.connectionStrings
          ? model.ConnectionString.getDeserializedJsonObj(obj.connectionStrings)
          : undefined,

        "gsms": obj.gsms
          ? obj.gsms.map(item => {
              return model.GsmDetails.getDeserializedJsonObj(item);
            })
          : undefined,
        "shardDetails": obj.shardDetails
          ? obj.shardDetails.map(item => {
              return model.DedicatedShardDetails.getDeserializedJsonObj(item);
            })
          : undefined,
        "catalogDetails": obj.catalogDetails
          ? obj.catalogDetails.map(item => {
              return model.DedicatedCatalogDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}