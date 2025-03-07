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
 * Schema used for Identity Propagation Trust.
 */
export interface IdentityPropagationTrust {
  /**
   * Unique identifier for the SCIM Resource as defined by the Service Provider. Each representation of the Resource MUST include a non-empty id value. This identifier MUST be unique across the Service Provider's entire set of Resources. It MUST be a stable, non-reassignable identifier that does not change when the same Resource is returned in subsequent requests. The value of the id attribute is always issued by the Service Provider and MUST never be specified by the Service Consumer. bulkId: is a reserved keyword and MUST NOT be used in the unique identifier.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: always
   *  - type: string
   *  - uniqueness: global
   */
  "id"?: string;
  /**
   * Unique OCI identifier for the SCIM Resource.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: immutable
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: global
   */
  "ocid"?: string;
  /**
   * REQUIRED. The schemas attribute is an array of Strings which allows introspection of the supported schema version for a SCIM representation as well any schema extensions supported by that representation. Each String value must be a unique URI. This specification defines URIs for User, Group, and a standard \\\"enterprise\\\" extension. All representations of SCIM schema MUST include a non-zero value array with value(s) of the URIs supported by that representation. Duplicate values MUST NOT be included. Value order is not specified and MUST not impact behavior.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: true
   *  - mutability: readWrite
   *  - required: true
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "schemas": Array<string>;
  "meta"?: model.Meta;
  "idcsCreatedBy"?: model.IdcsCreatedBy;
  "idcsLastModifiedBy"?: model.IdcsLastModifiedBy;
  /**
   * Each value of this attribute specifies an operation that only an internal client may perform on this particular resource.
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: false
   *  - multiValued: true
   *  - mutability: readOnly
   *  - required: false
   *  - returned: request
   *  - type: string
   *  - uniqueness: none
   */
  "idcsPreventedOperations"?: Array<IdentityPropagationTrust.IdcsPreventedOperations>;
  /**
   * A list of tags on this resource.
   * <p>
   **SCIM++ Properties:**
   *  - idcsCompositeKey: [key, value]
   *  - idcsSearchable: true
   *  - multiValued: true
   *  - mutability: readWrite
   *  - required: false
   *  - returned: request
   *  - type: complex
   *  - uniqueness: none
   */
  "tags"?: Array<model.Tags>;
  /**
   * A boolean flag indicating this resource in the process of being deleted. Usually set to true when synchronous deletion of the resource would take too long.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: boolean
   *  - uniqueness: none
   */
  "deleteInProgress"?: boolean;
  /**
   * The release number when the resource was upgraded.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: request
   *  - type: string
   *  - uniqueness: none
   */
  "idcsLastUpgradedInRelease"?: string;
  /**
   * OCI Domain Id (ocid) in which the resource lives.
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
  "domainOcid"?: string;
  /**
   * OCI Compartment Id (ocid) in which the resource lives.
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
  "compartmentOcid"?: string;
  /**
   * OCI Tenant Id (ocid) in which the resource lives.
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
  "tenancyOcid"?: string;
  /**
   * The name of the the Identity Propagation Trust.
   * <p>
   **SCIM++ Properties:**
   *  - type: string
   *  - caseExact: false
   *  - idcsSearchable: true
   *  - multiValued: false
   *  - required: true
   *  - mutability: immutable
   *  - returned: default
   *  - uniqueness: none
   */
  "name": string;
  /**
   * The description of the Identity Propagation Trust.
   * <p>
   **SCIM++ Properties:**
   *  - type: string
   *  - multiValued: false
   *  - required: false
   *  - mutability: readWrite
   *  - returned: default
   *  - uniqueness: none
   *  - caseExact: false
   *  - idcsSearchable: false
   */
  "description"?: string;
  /**
   * The type of the inbound token from the Identity cloud provider.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - idcsSearchable: false
   *  - required: true
   *  - mutability: readWrite
   *  - returned: default
   *  - type: string
   *  - multiValued: false
   *  - uniqueness: none
   */
  "type": IdentityPropagationTrust.Type;
  /**
   * The issuer claim of the Identity provider.
   * <p>
   **SCIM++ Properties:**
   *  - type: string
   *  - multiValued: false
   *  - required: true
   *  - mutability: readWrite
   *  - returned: always
   *  - caseExact: true
   *  - idcsSearchable: true
   *  - uniqueness: server
   */
  "issuer": string;
  /**
   * The Identity cloud provider service identifier, for example, the Azure Tenancy ID, AWS Account ID, or GCP Project ID.
   * <p>
   **SCIM++ Properties:**
   *  - type: string
   *  - multiValued: false
   *  - required: false
   *  - mutability: readWrite
   *  - returned: default
   *  - caseExact: true
   *  - idcsSearchable: true
   *  - uniqueness: none
   */
  "accountId"?: string;
  /**
   * Used for locating the subject claim from the incoming token.
   * <p>
   **SCIM++ Properties:**
   *  - type: string
   *  - multiValued: false
   *  - required: false
   *  - mutability: readWrite
   *  - returned: default
   *  - uniqueness: none
   *  - caseExact: true
   *  - idcsSearchable: false
   */
  "subjectClaimName"?: string;
  /**
   * Subject Mapping Attribute to which the value from subject claim name value would be used for identity lookup.
   * <p>
   **SCIM++ Properties:**
   *  - type: string
   *  - multiValued: false
   *  - idcsSearchable: false
   *  - required: false
   *  - mutability: readWrite
   *  - returned: default
   *  - uniqueness: none
   */
  "subjectMappingAttribute"?: string;
  /**
   * The type of the resource against which lookup will be made in the identity domain in IAM for the incoming subject claim value.
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "subjectType"?: IdentityPropagationTrust.SubjectType;
  /**
   * The claim name that identifies to whom the JWT/SAML token is issued. If AWS, then \\\"aud\\\" or \\\"client_id\\\". If Azure, then \\\"appid\\\". If GCP, then \\\"aud\\\".
   * <p>
   **SCIM++ Properties:**
   *  - type: string
   *  - multiValued: false
   *  - required: false
   *  - mutability: readWrite
   *  - returned: default
   *  - uniqueness: none
   *  - idcsSearchable: false
   */
  "clientClaimName"?: string;
  /**
   * The value that corresponds to the client claim name used to identify to whom the token is issued.
   * <p>
   **SCIM++ Properties:**
   *  - type: string
   *  - multiValued: true
   *  - required: false
   *  - mutability: readWrite
   *  - returned: default
   *  - uniqueness: none
   *  - caseExact: true
   *  - idcsSearchable: false
   */
  "clientClaimValues"?: Array<string>;
  /**
   * If true, specifies that this Identity Propagation Trust is in an enabled state. The default value is false.
   * <p>
   **SCIM++ Properties:**
   *  - type: boolean
   *  - multiValued: false
   *  - required: false
   *  - mutability: readWrite
   *  - returned: default
   *  - uniqueness: none
   *  - idcsSearchable: true
   */
  "active"?: boolean;
  /**
   * The cloud provider's public key API of SAML and OIDC providers for signature validation.
   * <p>
   **SCIM++ Properties:**
   *  - type: string
   *  - multiValued: false
   *  - required: false
   *  - mutability: readWrite
   *  - returned: default
   *  - uniqueness: none
   *  - caseExact: false
   *  - idcsSearchable: false
   */
  "publicKeyEndpoint"?: string;
  /**
   * Store the public key if public key cert.
   * <p>
   **SCIM++ Properties:**
   *  - type: string
   *  - multiValued: false
   *  - required: false
   *  - mutability: readWrite
   *  - returned: default
   *  - uniqueness: none
   *  - idcsSearchable: false
   */
  "publicCertificate"?: string;
  /**
   * The value of all the authorized OAuth Clients.
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: false
   *  - multiValued: true
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "oauthClients"?: Array<string>;
  /**
   * Allow customers to define whether the resulting token should contain the authenticated user as the subject or whether the token should impersonate another Application Principal in IAM.
   * <p>
   **SCIM++ Properties:**
   *  - type: boolean
   *  - multiValued: false
   *  - required: false
   *  - mutability: readWrite
   *  - returned: default
   *  - uniqueness: none
   *  - idcsSearchable: false
   */
  "allowImpersonation"?: boolean;
  /**
   * The clock skew (in secs) that's allowed for the token issue and expiry time.
   * <p>
   **Added In:** 2308181911
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: integer
   *  - uniqueness: none Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "clockSkewSeconds"?: number;
  /**
   * The Impersonating Principal.
   * <p>
   **SCIM++ Properties:**
   *  - idcsCompositeKey: [rule, value]
   *  - idcsSearchable: false
   *  - multiValued: true
   *  - mutability: readWrite
   *  - required: false
   *  - returned: request
   *  - type: complex
   *  - uniqueness: none
   */
  "impersonationServiceUsers"?: Array<model.IdentityPropagationTrustImpersonationServiceUsers>;
  "keytab"?: model.IdentityPropagationTrustKeytab;
}

export namespace IdentityPropagationTrust {
  export enum IdcsPreventedOperations {
    Replace = "replace",
    Update = "update",
    Delete = "delete",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Type {
    Jwt = "JWT",
    Saml = "SAML",
    Spnego = "SPNEGO",
    Aws = "AWS",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum SubjectType {
    User = "User",
    App = "App",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: IdentityPropagationTrust): object {
    const jsonObj = {
      ...obj,
      ...{
        "meta": obj.meta ? model.Meta.getJsonObj(obj.meta) : undefined,
        "idcsCreatedBy": obj.idcsCreatedBy
          ? model.IdcsCreatedBy.getJsonObj(obj.idcsCreatedBy)
          : undefined,
        "idcsLastModifiedBy": obj.idcsLastModifiedBy
          ? model.IdcsLastModifiedBy.getJsonObj(obj.idcsLastModifiedBy)
          : undefined,

        "tags": obj.tags
          ? obj.tags.map(item => {
              return model.Tags.getJsonObj(item);
            })
          : undefined,

        "impersonationServiceUsers": obj.impersonationServiceUsers
          ? obj.impersonationServiceUsers.map(item => {
              return model.IdentityPropagationTrustImpersonationServiceUsers.getJsonObj(item);
            })
          : undefined,
        "keytab": obj.keytab
          ? model.IdentityPropagationTrustKeytab.getJsonObj(obj.keytab)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: IdentityPropagationTrust): object {
    const jsonObj = {
      ...obj,
      ...{
        "meta": obj.meta ? model.Meta.getDeserializedJsonObj(obj.meta) : undefined,
        "idcsCreatedBy": obj.idcsCreatedBy
          ? model.IdcsCreatedBy.getDeserializedJsonObj(obj.idcsCreatedBy)
          : undefined,
        "idcsLastModifiedBy": obj.idcsLastModifiedBy
          ? model.IdcsLastModifiedBy.getDeserializedJsonObj(obj.idcsLastModifiedBy)
          : undefined,

        "tags": obj.tags
          ? obj.tags.map(item => {
              return model.Tags.getDeserializedJsonObj(item);
            })
          : undefined,

        "impersonationServiceUsers": obj.impersonationServiceUsers
          ? obj.impersonationServiceUsers.map(item => {
              return model.IdentityPropagationTrustImpersonationServiceUsers.getDeserializedJsonObj(
                item
              );
            })
          : undefined,
        "keytab": obj.keytab
          ? model.IdentityPropagationTrustKeytab.getDeserializedJsonObj(obj.keytab)
          : undefined
      }
    };

    return jsonObj;
  }
}
