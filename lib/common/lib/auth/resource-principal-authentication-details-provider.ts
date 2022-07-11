/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

/**
 * This constructs a default implementation of the {@link ResourcePrincipalAuthenticationDetailsProvider}, constructed
 * in accordance with the following environment variable settings:
 * <ul>
 *
 * <li>{@code OCI_RESOURCE_PRINCIPAL_VERSION}:
 * <p>permitted values are "2.2"</p>
 * </li>
 *
 * <li>{@code OCI_RESOURCE_PRINCIPAL_RPST}:
 * <p>If this is an absolute path, then the filesystem-supplied resource principal session token will be retrieved from
 *   that location. This mode supports token refresh (if the environment replaces the RPST in the filesystem).</p>
 * <p>Otherwise, the environment variable is taken to hold the raw value of an RPST.
 *   Under these circumstances, the RPST cannot be refreshed; consequently, this mode is only usable for short-lived
 *   executables.</p>
 * </li>
 * <li>{@code OCI_RESOURCE_PRINCIPAL_PRIVATE_PEM}:
 * <p>If this is an absolute path, then the filesystem-supplied private key will be retrieved from that location. As
 *   with the OCI_RESOURCE_PRINCIPAL_RPST, this mode supports token refresh if the environment can update the file
 *   contents.</p>
 * <p>Otherwise, the value is interpreted as the direct injection of a private key. The same considerations as to the
 *   lifetime of this value apply when directly injecting a key.</p>
 * </li>
 * <li>{@code OCI_RESOURCE_PRINCIPAL_PRIVATE_PEM_PASSPHRASE}:
 * <p>This is optional. If set, it contains either the location (as an absolute path) or the value of the passphrase
 *   associated with the private key.</p>
 * </li>
 * <li>{@code OCI_RESOURCE_PRINCIPAL_REGION}:
 * <p>If set, this holds the canonical form of the local region. This is intended to enable executables to locate their
 *   "local" OCI service endpoints.</p>
 * </li>
 * </ul>
 */

import path from "path";
import { Region } from "../region";
import { RegionProvider } from "./auth";
import FederationClient from "./models/federation-client";
import FixedContentKeySupplier from "./fixed-content-key-supplier";
import FileBasedKeySupplier from "./file-based-key-supplier";
import RefreshableOnNotAuthenticatedProvider from "./models/refreshable-on-not-authenticaticated-provider";
import AbstractRequestingAuthenticationDetailsProvider from "./abstract-requesting-authentication-detail-provider";
import SessionKeySupplier from "./models/session-key-supplier";
import FileBasedResourcePrincipalFederationClient from "./file-based-resource-principal-federation-client";
import FixedContentResourcePrincipalFederationClient from "./fixed-content-resource-principal-federation-client";

const RP_DEBUG_INFORMATION_LOG =
  "Resource principals authentication can only be used in certain OCI services. Please check that the OCI service you're running this code from supports Resource principals. See https://docs.oracle.com/en-us/iaas/Content/API/Concepts/sdk_authentication_methods.htm#sdk_authentication_methods_resource_principal for more info.";

export default class ResourcePrincipalAuthenticationDetailsProvider
  extends AbstractRequestingAuthenticationDetailsProvider
  implements RegionProvider, RefreshableOnNotAuthenticatedProvider<String> {
  static OCI_RESOURCE_PRINCIPAL_VERSION = "OCI_RESOURCE_PRINCIPAL_VERSION";
  static RP_VERSION_2_2 = "2.2";
  static OCI_RESOURCE_PRINCIPAL_RPST = "OCI_RESOURCE_PRINCIPAL_RPST";
  static OCI_RESOURCE_PRINCIPAL_PRIVATE_PEM = "OCI_RESOURCE_PRINCIPAL_PRIVATE_PEM";
  static OCI_RESOURCE_PRINCIPAL_PRIVATE_PEM_PASSPHRASE =
    "OCI_RESOURCE_PRINCIPAL_PRIVATE_PEM_PASSPHRASE";
  static OCI_RESOURCE_PRINCIPAL_REGION_ENV_VAR_NAME = "OCI_RESOURCE_PRINCIPAL_REGION";

  constructor(
    protected federationClient: FederationClient,
    protected sessionKeySupplier: SessionKeySupplier,
    protected region: Region
  ) {
    super(federationClient, sessionKeySupplier);
  }

  public static ClaimKeys = class ClaimsKey {
    /**
     * COMPARTMENT_ID is the claim name that the RPST holds for the resource compartment.
     * This can be passed to {@link #getStringClaim} to retrieve the resource's compartment OCID.
     */
    public static COMPARTMENT_ID_CLAIM_KEY = "res_compartment";

    /**
     * TENANT_ID_CLAIM_KEY is the claim name that the RPST holds for the resource tenancy.
     * This can be passed to {@link #getStringClaim} to retrieve the resource's tenancy OCID.
     */
    public static TENANT_ID_CLAIM_KEY = "res_tenant";
  };

  // Builder method to create ResourcePrincipalAuthenticationDetailsProviderBuilder which will build
  // ResourcePrincipalAuthenticationDetailsProvider
  public static builder(): ResourcePrincipalAuthenticationDetailsProvider {
    return new ResourcePrincipalAuthenticationDetailsProvider.ResourcePrincipalAuthenticationDetailsProviderBuilder().build();
  }

  /**
   * Session tokens carry JWT-like claims. Permit the retrieval of the value of those
   * claims from the token.
   * At the least, the token should carry claims for {@link ClaimKeys#COMPARTMENT_ID_CLAIM_KEY} and {@link ClaimKeys#TENANT_ID_CLAIM_KEY}
   * @param key the name of a claim in the session token
   * @return the claim value.
   */
  public async getStringClaim(key: string): Promise<string | null> {
    return await this.federationClient.getStringClaim(key);
  }

  /**
   * Refreshes the authentication data used by the provider
   * @return the refreshed authentication data
   */
  async refresh(): Promise<string> {
    return await this.federationClient.refreshAndGetSecurityToken();
  }

  // region getter
  getRegion(): Region {
    return this.region!;
  }

  /**
   * Builder for ResourcePrincipalAuthenticationDetailsProvider that understands the V2.2 configuration
   */
  public static ResourcePrincipalAuthenticationDetailsProviderBuilder = class ResourcePrincipalAuthenticationDetailsProviderBuilder {
    constructor() {}
    public build(): ResourcePrincipalAuthenticationDetailsProvider {
      const OciResourcePrincipalVersion =
        process.env[ResourcePrincipalAuthenticationDetailsProvider.OCI_RESOURCE_PRINCIPAL_VERSION];
      if (!OciResourcePrincipalVersion) {
        throw Error(
          "OCI_RESOURCE_PRINCIPAL_VERSION environment variable is missing " +
            RP_DEBUG_INFORMATION_LOG
        );
      }

      switch (OciResourcePrincipalVersion) {
        case ResourcePrincipalAuthenticationDetailsProvider.RP_VERSION_2_2:
          return ResourcePrincipalAuthenticationDetailsProviderBuilder.build_2_2();
        default:
          throw Error(
            `OCI_RESOURCE_PRINCIPAL_VERSION environment variable has an unknown value ${OciResourcePrincipalVersion}. ${RP_DEBUG_INFORMATION_LOG}`
          );
      }
    }

    /**
     * Helper method that interprets the runtime environment to build a v2.2-configured client
     * @return ResourcePrincipalAuthenticationDetailsProvider
     */
    static build_2_2(): ResourcePrincipalAuthenticationDetailsProvider {
      let federationClient: FederationClient;
      let sessionKeySupplier: SessionKeySupplier;
      let region: Region;

      const ociResourcePrincipalPrivateKey =
        process.env[
          ResourcePrincipalAuthenticationDetailsProvider.OCI_RESOURCE_PRINCIPAL_PRIVATE_PEM
        ];
      const ociResourcePrincipalPassphrase =
        process.env[
          ResourcePrincipalAuthenticationDetailsProvider
            .OCI_RESOURCE_PRINCIPAL_PRIVATE_PEM_PASSPHRASE
        ];
      const ociResourcePrincipalRPST =
        process.env[ResourcePrincipalAuthenticationDetailsProvider.OCI_RESOURCE_PRINCIPAL_RPST];
      const ociResourcePrincipalRegion =
        process.env[
          ResourcePrincipalAuthenticationDetailsProvider.OCI_RESOURCE_PRINCIPAL_REGION_ENV_VAR_NAME
        ];

      if (!ociResourcePrincipalPrivateKey) {
        throw Error(
          "OCI_RESOURCE_PRINCIPAL_PRIVATE_PEM environment variable missing. " +
            RP_DEBUG_INFORMATION_LOG
        );
      }
      if (!ociResourcePrincipalRPST) {
        throw Error(
          "OCI_RESOURCE_PRINCIPAL_RPST environment variable is missing. " + RP_DEBUG_INFORMATION_LOG
        );
      }
      if (!ociResourcePrincipalRegion) {
        throw Error(
          "OCI_RESOURCE_PRINCIPAL_REGION_ENV_VAR_NAME environment variable missing. " +
            RP_DEBUG_INFORMATION_LOG
        );
      }
      // Do a check to see if the file path of privateKey and passphrase are absolute path
      if (path.isAbsolute(ociResourcePrincipalPrivateKey)) {
        if (ociResourcePrincipalPassphrase && !path.isAbsolute(ociResourcePrincipalPassphrase)) {
          throw Error(
            "cannot mix path and constant settings for \
          OCI_RESOURCE_PRINCIPAL_PRIVATE_PEM and OCI_RESOURCE_PRINCIPAL_PRIVATE_PEM_PASSPHRASE"
          );
        }

        sessionKeySupplier = new FileBasedKeySupplier(
          ociResourcePrincipalPrivateKey,
          ociResourcePrincipalPassphrase
        );
      } else {
        sessionKeySupplier = new FixedContentKeySupplier(
          ociResourcePrincipalPrivateKey,
          ociResourcePrincipalPassphrase
        );
      }

      if (path.isAbsolute(ociResourcePrincipalRPST)) {
        federationClient = new FileBasedResourcePrincipalFederationClient(
          sessionKeySupplier,
          ociResourcePrincipalRPST
        );
      } else {
        federationClient = new FixedContentResourcePrincipalFederationClient(
          ociResourcePrincipalRPST,
          sessionKeySupplier
        );
      }

      //  The region should be something like "us-phoenix-1" but if we get "phx" then convert it.
      const regionId = Region.getRegionIdFromShortCode(ociResourcePrincipalRegion);
      region = Region.fromRegionId(regionId);
      return new ResourcePrincipalAuthenticationDetailsProvider(
        federationClient,
        sessionKeySupplier,
        region
      );
    }
  };
}
