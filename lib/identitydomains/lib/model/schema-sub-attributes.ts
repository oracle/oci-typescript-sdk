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
 * A list specifying the contained attributes
 */
export interface SchemaSubAttributes {
  /**
   * Attribute's name
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "name"?: string;
  /**
   * If true, indicates that the attribute value must be written to the home region and requires immediate read-after-write consistency for access flows initiated from a replica region.
   * <p>
   **Added In:** 2209220956
   * <p>
   **SCIM++ Properties:**
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: never
   *  - type: boolean
   */
  "idcsRequiresImmediateReadAfterWriteForAccessFlows"?: boolean;
  /**
   * If true, indicates that the attribute value must be written to the home region for access flows initiated from a replica region.
   * <p>
   **Added In:** 2205120021
   * <p>
   **SCIM++ Properties:**
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: boolean
   *  - uniqueness: none
   */
  "idcsRequiresWriteForAccessFlows"?: boolean;
  /**
   * Localized schema attribute display name for use by UI client  for displaying attribute labels
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "idcsDisplayNameMessageId"?: string;
  /**
   * Specifies if the attributes in this schema can be displayed externally
   * <p>
   **Added In:** 19.1.4
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: boolean
   *  - uniqueness: none
   */
  "idcsRtsaHideAttribute"?: boolean;
  /**
   * Specifies whether the schema attribute is for internal use only. Internal attributes are not exposed via REST. This attribute overrides mutability for create/update if the request is internal and the attribute internal flag is set to True. This attribute overrides the return attribute while building SCIM response attributes when both the request is internal and the schema attribute is internal.
   * <p>
   **SCIM++ Properties:**
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: boolean
   */
  "idcsInternal"?: boolean;
  /**
   * Attribute's data type--for example, String
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "type"?: SchemaSubAttributes.Type;
  /**
   * Indicates the attribute's plurality
   * <p>
   **SCIM++ Properties:**
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: boolean
   */
  "multiValued"?: boolean;
  /**
   * Attribute's human-readable description
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "description"?: string;
  /**
   * Specifies if the attribute is required
   * <p>
   **SCIM++ Properties:**
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: boolean
   */
  "required"?: boolean;
  /**
   * Specifies if the attribute is required
   * <p>
   **Added In:** 2305190132
   * <p>
   **SCIM++ Properties:**
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: boolean
   */
  "idcsReturnEmptyWhenNull"?: boolean;
  /**
   * A collection of canonical values. Applicable Service Providers MUST specify the canonical types specified in the core schema specification--for example, \\\"work\\\", \\\"home\\\".
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - multiValued: true
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "canonicalValues"?: Array<string>;
  /**
   * Specifies the default value for an attribute. The value must be one from canonicalValues if defined.
   * <p>
   **Added In:** 18.1.6
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "idcsDefaultValue"?: string;
  /**
   * Specifies if the String attribute is case-sensitive
   * <p>
   **SCIM++ Properties:**
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: boolean
   */
  "caseExact"?: boolean;
  /**
   * Specifies if the attribute is mutable
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "mutability"?: SchemaSubAttributes.Mutability;
  /**
   * A single keyword that indicates when an attribute and associated values are returned in response to a GET request or in response to a PUT, POST, or PATCH request
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "returned"?: SchemaSubAttributes.Returned;
  /**
   * The attribute that defines the CSV header name for import/export
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "idcsCsvAttributeName"?: string;
  /**
   * A single keyword value that specifies how the Service Provider enforces uniqueness of attribute values. A server MAY reject an invalid value based on uniqueness by returning an HTTP response code of 400 (Bad Request). A client MAY enforce uniqueness on the client side to a greater degree than the Service Provider enforces. For example, a client could make a value unique while the server has a uniqueness of \\\"none\\\".
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "uniqueness"?: SchemaSubAttributes.Uniqueness;
  /**
   * The names of the Resource types that may be referenced--for example, User. This is only applicable for attributes that are of the \\\"reference\\\" data type.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - multiValued: true
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "referenceTypes"?: Array<string>;
  /**
   * Indicates that the schema has been deprecated since version
   * <p>
   **Deprecated Since: 19.3.3**
   * <p>
   **SCIM++ Properties:**
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: integer Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "idcsDeprecatedSinceVersion"?: number;
  /**
   * Indicates that the schema has been added since version
   * <p>
   **Deprecated Since: 19.3.3**
   * <p>
   **SCIM++ Properties:**
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: integer Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "idcsAddedSinceVersion"?: number;
  /**
   * Indicates that the schema has been deprecated since this release number
   * <p>
   **Added In:** 17.3.4
   * <p>
   **SCIM++ Properties:**
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   */
  "idcsDeprecatedSinceReleaseNumber"?: string;
  /**
   * Indicates that the schema has been added since this release number
   * <p>
   **Added In:** 17.3.4
   * <p>
   **SCIM++ Properties:**
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   */
  "idcsAddedSinceReleaseNumber"?: string;
  /**
   * Specifies the minimum length of this attribute
   * <p>
   **SCIM++ Properties:**
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: integer Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "idcsMinLength"?: number;
  /**
   * Specifies the maximum length of this attribute
   * <p>
   **SCIM++ Properties:**
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: integer Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "idcsMaxLength"?: number;
  /**
   * Specifies the minimum value of the integer attribute
   * <p>
   **SCIM++ Properties:**
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: integer Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "idcsMinValue"?: number;
  /**
   * Specifies the maximum value of the integer attribute
   * <p>
   **SCIM++ Properties:**
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: integer Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "idcsMaxValue"?: number;
  /**
   * If true, specifies that the sub attribute value can be set to true on one and only one instance of the CMVA.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: boolean
   *  - uniqueness: none
   */
  "idcsOnlyOneValueCanBeTrue"?: boolean;
  /**
   * **SCIM++ Properties:**
   * - caseExact: true
   * - multiValued: false
   * - mutability: readOnly
   * - required: false
   * - returned: default
   * - type: integer
   * - uniqueness: none
   * Specify a limit on the number of attribute-values that any caller will receive when requesting a CMVA attribute. If the no of CMVA instances exceeds the limit then Oracle Identity Cloud Service will throw exception. Users can choose to refine the filter on CMVA attribute.  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "idcsMaxValuesReturned"?: number;
  /**
   * If true, ARM will ensure atleast one of the instances of CMVA has the attribute value set to true.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: boolean
   *  - uniqueness: none
   */
  "idcsOneValueMustBeTrue"?: boolean;
  /**
   * Specifies the directly referenced Resources
   * <p>
   **SCIM++ Properties:**
   *  - multiValued: true
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   */
  "idcsRefResourceAttributes"?: Array<string>;
  /**
   * Specifies the indirectly referenced Resources
   * <p>
   **SCIM++ Properties:**
   *  - multiValued: true
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   */
  "idcsIndirectRefResourceAttributes"?: Array<string>;
  /**
   * Specifies whether the sub-attribute of the Resource attribute is persisted
   * <p>
   **SCIM++ Properties:**
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: boolean
   */
  "idcsValuePersisted"?: boolean;
  /**
   * Specifiees if the attribute should be encrypted or hashed
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "idcsSensitive"?: SchemaSubAttributes.IdcsSensitive;
  /**
   * Trims any leading and trailing blanks from String values. Default is True.
   * <p>
   **SCIM++ Properties:**
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: boolean
   */
  "idcsTrimStringValue"?: boolean;
  /**
   * Specifies whether this attribute can be included in a search filter
   * <p>
   **SCIM++ Properties:**
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: boolean
   */
  "idcsSearchable"?: boolean;
  /**
   * Specifies whether this attribute value was generated
   * <p>
   **SCIM++ Properties:**
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: boolean
   */
  "idcsGenerated"?: boolean;
  /**
   * Specifies whether changes to this attribute value will be audited
   * <p>
   **SCIM++ Properties:**
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: boolean
   */
  "idcsAuditable"?: boolean;
  /**
   * Target attribute name that this attribute gets mapped to for persistence
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "idcsTargetAttributeName"?: string;
  /**
   * Target normalized attribute name that this normalized value of attribute gets mapped to for persistence. Only set for caseExact=false & searchable attributes. Do not use by default.
   * <p>
   **Added In:** 19.1.4
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "idcsTargetNormAttributeName"?: string;
  /**
   * Old Target attribute name from child table for CSVA attribute prior to migration. This maintains this attribute used to get mapped to for persistence
   * <p>
   **Added In:** 19.2.1
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "idcsTargetAttributeNameToMigrateFrom"?: string;
  /**
   * Target index name created for this attribute for performance
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "idcsTargetUniqueConstraintName"?: string;
  /**
   * Specifies the mapper to use when mapping this attribute value to DataProvider-specific semantics
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "idcsToTargetMapper"?: string;
  /**
   * Specifies the mapper to use when mapping this attribute value from DataProvider-specific semantics
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "idcsFromTargetMapper"?: string;
  /**
   * Specifies the user-friendly displayable attribute name or catalog key used for localization
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "idcsDisplayName"?: string;
  /**
   * Specifies the Resource type to read from for dynamic canonical values
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "idcsCanonicalValueSourceResourceType"?: string;
  /**
   * Filter to use when getting canonical values for this schema attribute
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "idcsCanonicalValueSourceFilter"?: string;
  /**
   * Specifies the Resource type ID to read from for dynamic canonical values
   * <p>
   **Added In:** 17.4.4
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "idcsCanonicalValueSourceResourceTypeID"?: string;
  /**
   * Display name for the canonical value attribute name.
   * <p>
   **Added In:** 17.4.4
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "idcsCanonicalValueSourceDisplayAttrName"?: string;
  /**
   * Source key attribute for the canonical value.
   * <p>
   **Added In:** 17.4.4
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "idcsCanonicalValueSourceKeyAttrName"?: string;
  /**
   * Validate payload reference value during create, replace, and update. Default is True.
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: false
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: boolean
   *  - uniqueness: none
   */
  "idcsValidateReference"?: boolean;
  /**
   * Indicates if the attribute is scim compliant, default is true
   * <p>
   **SCIM++ Properties:**
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: boolean
   */
  "idcsScimCompliant"?: boolean;
  /**
   * Specifies if the attribute can be used for mapping with external identity sources such as AD or LDAP. If isSchemaMappable: false for the schema in which this attribute is defined, then this flag is ignored.
   * <p>
   **SCIM++ Properties:**
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: boolean
   */
  "idcsAttributeMappable"?: boolean;
  /**
   * Specifies whether the attribute is cacheable. True by default for all attributes. If attribute with idcsAttributeCachable = false, is present \\\"attributesToGet\\\" while executing GET/SEARCH on cacheable resource, Cache is missed and data is fetched from Data Provider.
   * <p>
   **Added In:** 17.3.4
   * <p>
   **SCIM++ Properties:**
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: boolean
   */
  "idcsAttributeCacheable"?: boolean;
  /**
   * Metadata used by Oracle Identity Cloud Service UI to sequence the attributes displayed on the Account Form.
   * <p>
   **Added In:** 17.4.2
   * <p>
   **SCIM++ Properties:**
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: integer Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "idcsuiOrder"?: number;
  /**
   * Metadata used by Oracle Identity Cloud Service UI to validate the attribute values using regular expressions.
   * <p>
   **Added In:** 17.4.2
   * <p>
   **SCIM++ Properties:**
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   */
  "idcsuiRegexp"?: string;
  /**
   * Metadata used by Oracle Identity Cloud Service UI to decide whether the attribute must be displayed on the Account Form.
   * <p>
   **Added In:** 17.4.2
   * <p>
   **SCIM++ Properties:**
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: boolean
   */
  "idcsuiVisible"?: boolean;
  /**
   * Metadata used by Oracle Identity Cloud Service UI to render a widget for this attribute on the Account Form.
   * <p>
   **Added In:** 17.4.2
   * <p>
   **SCIM++ Properties:**
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: string
   */
  "idcsuiWidget"?: SchemaSubAttributes.IdcsuiWidget;
  /**
   * If true, ARM should not validate the value of the attribute since it will be converted/migrated to another attribute internally by the manager which will build valid post, put, or patch payload, depending on the client requested operation
   * <p>
   **Added In:** 18.2.2
   * <p>
   **SCIM++ Properties:**
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: boolean
   */
  "idcsValuePersistedInOtherAttribute"?: boolean;
  /**
   * Specifies whether the attribute is PII (personal information). False by default for all attributes. If attribute with idcsPii = true, it's value must be obfuscated before it's written to the Oracle Identity Cloud Service system logs.
   * <p>
   **Added In:** 18.3.6
   * <p>
   **SCIM++ Properties:**
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: boolean
   */
  "idcsPii"?: boolean;
  /**
   * Specifies if the value of the attribute should be sanitized using OWASP library for HTML content
   * <p>
   **Added In:** 20.1.3
   * <p>
   **SCIM++ Properties:**
   *  - caseExact: true
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: boolean
   *  - uniqueness: none
   */
  "idcsSanitize"?: boolean;
  /**
   * Specifies whether the attribute should be excluded from the BulkApi patch generated by gradle task for upgrading OOTB resources.
   * <p>
   **Added In:** 2104150946
   * <p>
   **SCIM++ Properties:**
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: never
   *  - type: boolean
   */
  "idcsExcludeFromUpgradePatch"?: boolean;
}

export namespace SchemaSubAttributes {
  export enum Type {
    String = "string",
    Complex = "complex",
    Boolean = "boolean",
    Decimal = "decimal",
    Integer = "integer",
    DateTime = "dateTime",
    Reference = "reference",
    Binary = "binary",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Mutability {
    ReadOnly = "readOnly",
    ReadWrite = "readWrite",
    Immutable = "immutable",
    WriteOnly = "writeOnly",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Returned {
    Always = "always",
    Never = "never",
    Default = "default",
    Request = "request",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Uniqueness {
    None = "none",
    Server = "server",
    Global = "global",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum IdcsSensitive {
    Encrypt = "encrypt",
    Hash = "hash",
    HashSc = "hash_sc",
    Checksum = "checksum",
    None = "none",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum IdcsuiWidget {
    Inputtext = "inputtext",
    Checkbox = "checkbox",
    Textarea = "textarea",
    Combobox = "combobox",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: SchemaSubAttributes): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SchemaSubAttributes): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
