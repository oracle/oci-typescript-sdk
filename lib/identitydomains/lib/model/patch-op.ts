/**
 * Identity Domains API
 * Use the Identity Domains API to manage resources within an identity domain, for example, users, dynamic resource groups, groups, and identity providers. For information about managing resources within identity domains, see [Identity and Access Management (with identity domains)](https://docs.oracle.com/iaas/Content/Identity/home.htm).
Use this pattern to construct endpoints for identity domains: {@code https://<domainURL>/admin/v1/}. See [Finding an Identity Domain URL](https://docs.oracle.com/en-us/iaas/Content/Identity/api-getstarted/locate-identity-domain-url.htm) to locate the domain URL you need.
Use the table of contents and search tool to explore the Identity Domains API.
 * OpenAPI spec version: v1
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
 * See [Section 3.5.2](https://tools.ietf.org/html/draft-ietf-scim-api-19#section-3.5.2). HTTP PATCH is an OPTIONAL server function that enables clients to update one or more attributes of a SCIM resource using a sequence of operations to \"add\", \"remove\", or \"replace\" values. Clients may discover service provider support for PATCH by querying the service provider configuration. The general form of the SCIM patch request is based on JavaScript Object Notation (JSON) Patch [RFC6902]. One difference between SCIM patch and JSON patch is that SCIM servers do not support array indexing and do not support [RFC6902] operation types relating to array element manipulation such as \"move\". A patch request, regardless of the number of operations, SHALL be treated as atomic. If a single operation encounters an error condition, the original SCIM resource MUST be restored, and a failure status SHALL be returned.
 */
export interface PatchOp {
  /**
   * The schemas attribute is an array of Strings which allows introspection of the supported schema version for a SCIM representation as well any schema extensions supported by that representation. Each String value must be a unique URI. All representations of SCIM schema MUST include a non-zero value array with value(s) of the URIs supported by that representation. Duplicate values MUST NOT be included. Value order is not specified and MUST not impact behavior. REQUIRED.
   */
  "schemas": Array<string>;
  /**
   * The body of an HTTP PATCH request MUST contain the attribute \"Operations\", whose value is an array of one or more patch operations.
   */
  "operations": Array<model.Operations>;
}

export namespace PatchOp {
  export function getJsonObj(obj: PatchOp): object {
    const jsonObj = {
      ...obj,
      ...{
        "Operations": obj.operations
          ? obj.operations.map(item => {
              return model.Operations.getJsonObj(item);
            })
          : undefined
      }
    };

    delete (jsonObj as Partial<PatchOp>).operations;

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: PatchOp): object {
    const jsonObj = {
      ...obj,
      ...{
        "operations": (obj as any)["Operations"]
          ? (obj as any)["Operations"].map((item: any) => {
              return model.Operations.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    delete (jsonObj as any)["Operations"];

    return jsonObj;
  }
}
