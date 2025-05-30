/**
 * Language API
 * OCI Language Service solutions can help enterprise customers integrate AI into their products immediately using our proven,
pre-trained and custom models or containers, without a need to set up an house team of AI and ML experts.
This allows enterprises to focus on business drivers and development work rather than AI and ML operations, which shortens the time to market.

 * OpenAPI spec version: 20221001
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
 * The documents details for text classification call.
 */
export interface BatchDetectLanguageTextClassificationDetails {
  /**
   * Unique name across user tenancy in a region to identify an endpoint to be used for inferencing.
   */
  "alias"?: string;
  /**
   * The [OCID](https://docs.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment that calls the API, inference will be served from pre trained model
   */
  "compartmentId"?: string;
  /**
   * The endpoint which have to be used for inferencing. If endpointId and compartmentId is provided, then inference will be served from custom model which is mapped to this Endpoint.
   */
  "endpointId"?: string;
  /**
   * List of Documents for detect text classification.
   */
  "documents": Array<model.TextDocument>;
}

export namespace BatchDetectLanguageTextClassificationDetails {
  export function getJsonObj(obj: BatchDetectLanguageTextClassificationDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "documents": obj.documents
          ? obj.documents.map(item => {
              return model.TextDocument.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(
    obj: BatchDetectLanguageTextClassificationDetails
  ): object {
    const jsonObj = {
      ...obj,
      ...{
        "documents": obj.documents
          ? obj.documents.map(item => {
              return model.TextDocument.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
