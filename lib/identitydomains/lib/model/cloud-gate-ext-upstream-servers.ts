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
 * A list of upstream servers
 */
export interface CloudGateExtUpstreamServers {
  /**
   * ID of the upstream server
   * <p>
   **Added In:** 20.1.3
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: true
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "value": string;
  /**
   * URI of the upstream server
   * <p>
   **Added In:** 20.1.3
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: reference
   *  - uniqueness: none
   */
  "ref"?: string;
  /**
   * Any incoming request to cloud gate is finally sent to this host, if selected during load balancing
   * <p>
   **Added In:** 20.1.3
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "hostName"?: string;
  /**
   * Port for the Upstream Server
   * <p>
   **Added In:** 20.1.3
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: integer
   *  - uniqueness: none Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "port"?: number;
  /**
   * Any additional settings for this upstream server in nginx configuration form
   * <p>
   **Added In:** 20.1.3
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "nginxSettings"?: string;
  /**
   * Upstream Server Group instance for the upstream server. This is one of the upstreamServerGroup IDs(upstream blocks) from the associated Cloud Gate list
   * <p>
   **Added In:** 20.1.3
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "groupId"?: string;
  /**
   * Display name of upstream server
   * <p>
   **Added In:** 20.1.3
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "displayName"?: string;
}

export namespace CloudGateExtUpstreamServers {
  export function getJsonObj(obj: CloudGateExtUpstreamServers): object {
    const jsonObj = {
      ...obj,
      ...{
        "$ref": obj.ref
      }
    };

    delete (jsonObj as Partial<CloudGateExtUpstreamServers>).ref;

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CloudGateExtUpstreamServers): object {
    const jsonObj = {
      ...obj,
      ...{
        "ref": (obj as any)["$ref"]
      }
    };

    delete (jsonObj as any)["$ref"];

    return jsonObj;
  }
}
