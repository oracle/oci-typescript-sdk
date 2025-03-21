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
 * Multi Factor Authentication Settings for Tenant
 */
export interface AuthenticationFactorSetting {
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
  "idcsPreventedOperations"?: Array<AuthenticationFactorSetting.IdcsPreventedOperations>;
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
   * If true, indicates that the EMAIL channel is enabled for authentication
   * <p>
   **Added In:** 18.1.2
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: boolean
   *  - uniqueness: none
   */
  "emailEnabled"?: boolean;
  /**
   * If true, indicates that the Short Message Service (SMS) channel is enabled for authentication
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: true
   *  - returned: default
   *  - type: boolean
   *  - uniqueness: none
   */
  "smsEnabled": boolean;
  /**
   * If true, indicates that the phone (PHONE_CALL) channel is enabled for authentication
   * <p>
   **Added In:** 20.1.3
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: boolean
   *  - uniqueness: none
   */
  "phoneCallEnabled"?: boolean;
  /**
   * If true, indicates that the Mobile App One Time Passcode channel is enabled for authentication
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: true
   *  - returned: default
   *  - type: boolean
   *  - uniqueness: none
   */
  "totpEnabled": boolean;
  /**
   * If true, indicates that the Mobile App Push Notification channel is enabled for authentication
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: true
   *  - returned: default
   *  - type: boolean
   *  - uniqueness: none
   */
  "pushEnabled": boolean;
  /**
   * If true, indicates that Bypass Code is enabled for authentication
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: true
   *  - returned: default
   *  - type: boolean
   *  - uniqueness: none
   */
  "bypassCodeEnabled": boolean;
  /**
   * If true, indicates that Security Questions are enabled for authentication
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: true
   *  - returned: default
   *  - type: boolean
   *  - uniqueness: none
   */
  "securityQuestionsEnabled": boolean;
  /**
   * If true, indicates that the Fido Authenticator channels are enabled for authentication
   * <p>
   **Added In:** 2009232244
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: boolean
   *  - uniqueness: none
   */
  "fidoAuthenticatorEnabled"?: boolean;
  /**
   * If true, indicates that the Yubico OTP is enabled for authentication
   * <p>
   **Added In:** 2109090424
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: boolean
   *  - uniqueness: none
   */
  "yubicoOtpEnabled"?: boolean;
  /**
   * Specifies if Multi-Factor Authentication enrollment is mandatory or optional for a user
   * <p>
   **Deprecated Since: 18.1.2**
   * <p>
   **SCIM++ Properties:**
   *  - idcsCanonicalValueSourceFilter: attrName eq \"mfaEnrollmentType\" and attrValues.value eq \"$(mfaEnrollmentType)\"
   *  - idcsCanonicalValueSourceResourceType: AllowedValue
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: true
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "mfaEnrollmentType": string;
  /**
   * Specifies the category of people for whom Multi-Factor Authentication is enabled. This is a readOnly attribute which reflects the value of mfaEnabledCategory attribute in SsoSettings
   * <p>
   **Deprecated Since: 18.1.2**
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readOnly
   *  - required: false
   *  - returned: default
   *  - type: string
   *  - uniqueness: none
   */
  "mfaEnabledCategory"?: string;
  /**
   * If true, indicates that 'Show backup factor(s)' button will be hidden during authentication
   * <p>
   **Added In:** 19.3.3
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: boolean
   *  - uniqueness: none
   */
  "hideBackupFactorEnabled"?: boolean;
  /**
   * If true, indicates that email will not be enrolled as a MFA factor automatically if it a account recovery factor
   * <p>
   **Added In:** 2011192329
   * <p>
   **SCIM++ Properties:**
   *  - idcsSearchable: false
   *  - multiValued: false
   *  - mutability: readWrite
   *  - required: false
   *  - returned: default
   *  - type: boolean
   *  - uniqueness: none
   */
  "autoEnrollEmailFactorDisabled"?: boolean;
  /**
   * Factors for which enrollment should be blocked for End User
   * <p>
   **Added In:** 2012271618
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
  "userEnrollmentDisabledFactors"?: Array<
    AuthenticationFactorSetting.UserEnrollmentDisabledFactors
  >;
  "emailSettings"?: model.AuthenticationFactorSettingsEmailSettings;
  "thirdPartyFactor"?: model.AuthenticationFactorSettingsThirdPartyFactor;
  "notificationSettings": model.AuthenticationFactorSettingsNotificationSettings;
  "identityStoreSettings"?: model.AuthenticationFactorSettingsIdentityStoreSettings;
  "bypassCodeSettings": model.AuthenticationFactorSettingsBypassCodeSettings;
  "clientAppSettings": model.AuthenticationFactorSettingsClientAppSettings;
  "endpointRestrictions": model.AuthenticationFactorSettingsEndpointRestrictions;
  /**
   * Compliance Policy that defines actions to be taken when a condition is violated
   * <p>
   **SCIM++ Properties:**
   *  - idcsCompositeKey: [name]
   *  - idcsSearchable: false
   *  - multiValued: true
   *  - mutability: readWrite
   *  - required: true
   *  - returned: default
   *  - type: complex
   *  - uniqueness: none
   */
  "compliancePolicy": Array<model.AuthenticationFactorSettingsCompliancePolicy>;
  "totpSettings": model.AuthenticationFactorSettingsTotpSettings;
  "urnIetfParamsScimSchemasOracleIdcsExtensionThirdPartyAuthenticationFactorSettings"?: model.ExtensionThirdPartyAuthenticationFactorSettings;
  "urnIetfParamsScimSchemasOracleIdcsExtensionFidoAuthenticationFactorSettings"?: model.ExtensionFidoAuthenticationFactorSettings;
}

export namespace AuthenticationFactorSetting {
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

  export enum UserEnrollmentDisabledFactors {
    Email = "EMAIL",
    Sms = "SMS",
    Totp = "TOTP",
    Push = "PUSH",
    Offlinetotp = "OFFLINETOTP",
    Voice = "VOICE",
    PhoneCall = "PHONE_CALL",
    Thirdparty = "THIRDPARTY",
    FidoAuthenticator = "FIDO_AUTHENTICATOR",
    YubicoOtp = "YUBICO_OTP",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: AuthenticationFactorSetting): object {
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

        "emailSettings": obj.emailSettings
          ? model.AuthenticationFactorSettingsEmailSettings.getJsonObj(obj.emailSettings)
          : undefined,
        "thirdPartyFactor": obj.thirdPartyFactor
          ? model.AuthenticationFactorSettingsThirdPartyFactor.getJsonObj(obj.thirdPartyFactor)
          : undefined,
        "notificationSettings": obj.notificationSettings
          ? model.AuthenticationFactorSettingsNotificationSettings.getJsonObj(
              obj.notificationSettings
            )
          : undefined,
        "identityStoreSettings": obj.identityStoreSettings
          ? model.AuthenticationFactorSettingsIdentityStoreSettings.getJsonObj(
              obj.identityStoreSettings
            )
          : undefined,
        "bypassCodeSettings": obj.bypassCodeSettings
          ? model.AuthenticationFactorSettingsBypassCodeSettings.getJsonObj(obj.bypassCodeSettings)
          : undefined,
        "clientAppSettings": obj.clientAppSettings
          ? model.AuthenticationFactorSettingsClientAppSettings.getJsonObj(obj.clientAppSettings)
          : undefined,
        "endpointRestrictions": obj.endpointRestrictions
          ? model.AuthenticationFactorSettingsEndpointRestrictions.getJsonObj(
              obj.endpointRestrictions
            )
          : undefined,
        "compliancePolicy": obj.compliancePolicy
          ? obj.compliancePolicy.map(item => {
              return model.AuthenticationFactorSettingsCompliancePolicy.getJsonObj(item);
            })
          : undefined,
        "totpSettings": obj.totpSettings
          ? model.AuthenticationFactorSettingsTotpSettings.getJsonObj(obj.totpSettings)
          : undefined,
        "urn:ietf:params:scim:schemas:oracle:idcs:extension:thirdParty:AuthenticationFactorSettings": obj.urnIetfParamsScimSchemasOracleIdcsExtensionThirdPartyAuthenticationFactorSettings
          ? model.ExtensionThirdPartyAuthenticationFactorSettings.getJsonObj(
              obj.urnIetfParamsScimSchemasOracleIdcsExtensionThirdPartyAuthenticationFactorSettings
            )
          : undefined,
        "urn:ietf:params:scim:schemas:oracle:idcs:extension:fido:AuthenticationFactorSettings": obj.urnIetfParamsScimSchemasOracleIdcsExtensionFidoAuthenticationFactorSettings
          ? model.ExtensionFidoAuthenticationFactorSettings.getJsonObj(
              obj.urnIetfParamsScimSchemasOracleIdcsExtensionFidoAuthenticationFactorSettings
            )
          : undefined
      }
    };

    delete (jsonObj as Partial<AuthenticationFactorSetting>)
      .urnIetfParamsScimSchemasOracleIdcsExtensionThirdPartyAuthenticationFactorSettings;
    delete (jsonObj as Partial<AuthenticationFactorSetting>)
      .urnIetfParamsScimSchemasOracleIdcsExtensionFidoAuthenticationFactorSettings;

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AuthenticationFactorSetting): object {
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

        "emailSettings": obj.emailSettings
          ? model.AuthenticationFactorSettingsEmailSettings.getDeserializedJsonObj(
              obj.emailSettings
            )
          : undefined,
        "thirdPartyFactor": obj.thirdPartyFactor
          ? model.AuthenticationFactorSettingsThirdPartyFactor.getDeserializedJsonObj(
              obj.thirdPartyFactor
            )
          : undefined,
        "notificationSettings": obj.notificationSettings
          ? model.AuthenticationFactorSettingsNotificationSettings.getDeserializedJsonObj(
              obj.notificationSettings
            )
          : undefined,
        "identityStoreSettings": obj.identityStoreSettings
          ? model.AuthenticationFactorSettingsIdentityStoreSettings.getDeserializedJsonObj(
              obj.identityStoreSettings
            )
          : undefined,
        "bypassCodeSettings": obj.bypassCodeSettings
          ? model.AuthenticationFactorSettingsBypassCodeSettings.getDeserializedJsonObj(
              obj.bypassCodeSettings
            )
          : undefined,
        "clientAppSettings": obj.clientAppSettings
          ? model.AuthenticationFactorSettingsClientAppSettings.getDeserializedJsonObj(
              obj.clientAppSettings
            )
          : undefined,
        "endpointRestrictions": obj.endpointRestrictions
          ? model.AuthenticationFactorSettingsEndpointRestrictions.getDeserializedJsonObj(
              obj.endpointRestrictions
            )
          : undefined,
        "compliancePolicy": obj.compliancePolicy
          ? obj.compliancePolicy.map(item => {
              return model.AuthenticationFactorSettingsCompliancePolicy.getDeserializedJsonObj(
                item
              );
            })
          : undefined,
        "totpSettings": obj.totpSettings
          ? model.AuthenticationFactorSettingsTotpSettings.getDeserializedJsonObj(obj.totpSettings)
          : undefined,
        "urnIetfParamsScimSchemasOracleIdcsExtensionThirdPartyAuthenticationFactorSettings": (obj as any)[
          "urn:ietf:params:scim:schemas:oracle:idcs:extension:thirdParty:AuthenticationFactorSettings"
        ]
          ? model.ExtensionThirdPartyAuthenticationFactorSettings.getDeserializedJsonObj(
              (obj as any)[
                "urn:ietf:params:scim:schemas:oracle:idcs:extension:thirdParty:AuthenticationFactorSettings"
              ]
            )
          : undefined,
        "urnIetfParamsScimSchemasOracleIdcsExtensionFidoAuthenticationFactorSettings": (obj as any)[
          "urn:ietf:params:scim:schemas:oracle:idcs:extension:fido:AuthenticationFactorSettings"
        ]
          ? model.ExtensionFidoAuthenticationFactorSettings.getDeserializedJsonObj(
              (obj as any)[
                "urn:ietf:params:scim:schemas:oracle:idcs:extension:fido:AuthenticationFactorSettings"
              ]
            )
          : undefined
      }
    };

    delete (jsonObj as any)[
      "urn:ietf:params:scim:schemas:oracle:idcs:extension:thirdParty:AuthenticationFactorSettings"
    ];
    delete (jsonObj as any)[
      "urn:ietf:params:scim:schemas:oracle:idcs:extension:fido:AuthenticationFactorSettings"
    ];

    return jsonObj;
  }
}
