/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import { Region } from "../region";
import { RegionProvider } from "./auth";
import FederationClient from "./models/federation-client";
import RefreshableOnNotAuthenticatedProvider from "./models/refreshable-on-not-authenticaticated-provider";
import AbstractRequestingAuthenticationDetailsProvider from "./abstract-requesting-authentication-detail-provider";
import AbstractFederationClientAuthenticationDetailsProviderBuilder from "./abstract-federation-client-authenticated-details-provider-builder";
import SessionKeySupplier from "./models/session-key-supplier";
import X509CertificateSupplier from "./models/X509-certificate-supplier";

class InstancePrincipalsAuthenticationDetailsProvider
  extends AbstractRequestingAuthenticationDetailsProvider
  implements RegionProvider, RefreshableOnNotAuthenticatedProvider<String> {
  constructor(
    protected federationClient: FederationClient,
    protected sessionKeySupplier: SessionKeySupplier,
    protected region: Region
  ) {
    super(federationClient, sessionKeySupplier);
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
   * Creates a new InstancePrincipalsAuthenticationDetailsProviderBuilder.
   * @return A new builder instance.
   */
  static builder(): InstancePrincipalsAuthenticationDetailsProviderBuilder {
    return new InstancePrincipalsAuthenticationDetailsProviderBuilder();
  }
}

export default class InstancePrincipalsAuthenticationDetailsProviderBuilder extends AbstractFederationClientAuthenticationDetailsProviderBuilder<
  InstancePrincipalsAuthenticationDetailsProviderBuilder,
  InstancePrincipalsAuthenticationDetailsProvider
> {
  constructor(purpose?: string) {
    super();
    if (purpose) {
      this.purpose = purpose;
    }
  }

  async build(): Promise<InstancePrincipalsAuthenticationDetailsProvider> {
    await this.autoDetectUsingMetadataUrl();
    return await super.build();
  }

  protected buildProvider(
    sessionKeySupplierToUse: SessionKeySupplier
  ): InstancePrincipalsAuthenticationDetailsProvider {
    return new InstancePrincipalsAuthenticationDetailsProvider(
      this._federationClient,
      sessionKeySupplierToUse,
      this.region
    );
  }

  set federationEndpoint(federationEndpoint: string) {
    super._federationEndpoint = federationEndpoint;
  }

  set leafCertificateSupplier(leafCertificateSupplier: X509CertificateSupplier) {
    super._leafCertificateSupplier = leafCertificateSupplier;
  }
}
