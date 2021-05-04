/**
 * Service Catalog API
 * Manage solutions in Oracle Cloud Infrastructure Service Catalog.
 * OpenAPI spec version: 20210527
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Collection of service catalog associations.
 */
export interface ServiceCatalogAssociationCollection {
  /**
   * Collection of service catalog and the resources associated with it.
   */
  "items": Array<model.ServiceCatalogAssociationSummary>;
}

export namespace ServiceCatalogAssociationCollection {
  export function getJsonObj(obj: ServiceCatalogAssociationCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.ServiceCatalogAssociationSummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}