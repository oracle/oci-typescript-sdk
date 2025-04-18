/**
 * OS Management Hub API
 * Use the OS Management Hub API to manage and monitor updates and patches for instances in OCI, your private data center, or 3rd-party clouds. 
For more information, see [Overview of OS Management Hub](https://docs.oracle.com/iaas/osmh/doc/overview.htm).

 * OpenAPI spec version: 20220901
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
 * An object that defines an erratum..
 */
export interface Erratum {
  /**
   * Advisory name.
   */
  "name": string;
  /**
   * Summary description of the erratum.
   */
  "synopsis"?: string;
  /**
   * The date and time the erratum was issued (in [RFC 3339](https://tools.ietf.org/rfc/rfc3339) format).
   *
   */
  "timeIssued"?: Date;
  /**
   * Details describing the erratum.
   */
  "description"?: string;
  /**
   * The date and time the erratum was updated (in [RFC 3339](https://tools.ietf.org/rfc/rfc3339) format).
   *
   */
  "timeUpdated"?: Date;
  /**
   * Type of the erratum. This property is deprecated and it will be removed in a future API release. Please refer to the advisoryType property instead.
   */
  "classificationType"?: model.ClassificationTypes;
  /**
   * The advisory type of the erratum.
   */
  "advisoryType"?: model.AdvisoryTypes;
  /**
   * Information specifying from where the erratum was release.
   */
  "from"?: string;
  /**
   * Information describing how the erratum can be resolved.
   */
  "solution"?: string;
  /**
   * Information describing how to find more information about. the erratum.
   */
  "references"?: string;
  /**
   * List of CVEs applicable to this erratum.
   */
  "relatedCves"?: Array<string>;
  /**
   * List of repository identifiers.
   */
  "repositories"?: Array<string>;
  /**
   * List of packages affected by this erratum.
   */
  "packages"?: Array<model.SoftwarePackageSummary>;
  /**
   * List of affected OS families.
   */
  "osFamilies"?: Array<model.OsFamily>;
  /**
   * The severity for a security advisory, otherwise, null.
   */
  "advisorySeverity"?: model.AdvisorySeverity;
}

export namespace Erratum {
  export function getJsonObj(obj: Erratum): object {
    const jsonObj = {
      ...obj,
      ...{
        "packages": obj.packages
          ? obj.packages.map(item => {
              return model.SoftwarePackageSummary.getJsonObj(item);
            })
          : undefined,
        "osFamilies": obj.osFamilies
          ? obj.osFamilies.map(item => {
              return model.OsFamily.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Erratum): object {
    const jsonObj = {
      ...obj,
      ...{
        "packages": obj.packages
          ? obj.packages.map(item => {
              return model.SoftwarePackageSummary.getDeserializedJsonObj(item);
            })
          : undefined,
        "osFamilies": obj.osFamilies
          ? obj.osFamilies.map(item => {
              return model.OsFamily.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
