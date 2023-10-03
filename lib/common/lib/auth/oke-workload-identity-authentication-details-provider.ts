/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

/**
 * This constructs a default implementation of the {@link OkeWorkloadIdentityAuthenticationDetailsProvider}, constructed
 * in accordance with the following environment variable settings:
 * <ul>
 *
 * <li>{@code KUBERNETES_SERVICE_HOST}:
 * <p>This environment variable represents the Kubernetes service host.</p>
 * </li>
 *
 * <li>{@code KUBERNETES_SERVICE_PORT_PROXYMUX}:
 * <p>This environment variable represents the Kubernetes service port for proxymux.</p>
 * </li>
 *
 * </ul>
 */

import { loadFromFile } from "./helpers/load-from-file";
import FederationClient from "./models/federation-client";
import RefreshableOnNotAuthenticatedProvider from "./models/refreshable-on-not-authenticaticated-provider";
import AbstractRequestingAuthenticationDetailsProvider from "./abstract-requesting-authentication-detail-provider";
import SessionKeySupplier from "./models/session-key-supplier";
import X509FederationClientForOkeWorkloadIdentity from "./X509-federation-client-for-oke-workload-identity";
import SessionKeySupplierImpl from "./session-key-supplier";

const OKE_WORKLOAD_IDENTITY_DEBUG_INFORMATION_LOG =
  "OKE workload identity can only be used in Enhanced OKE clusters. See https://docs.oracle.com/en-us/iaas/Content/ContEng/Tasks/contenggrantingworkloadaccesstoresources.htm for more info.";

export default class OkeWorkloadIdentityAuthenticationDetailsProvider
  extends AbstractRequestingAuthenticationDetailsProvider
  implements RefreshableOnNotAuthenticatedProvider<String> {
  static KUBERNETES_SERVICE_HOST_ENV_VAR_NAME = "KUBERNETES_SERVICE_HOST";
  static KUBERNETES_SERVICE_PORT_PROXYMUX_ENV_VAR_NAME = "KUBERNETES_SERVICE_PORT_PROXYMUX";
  static DEFAULT_KUBERNETES_SERVICE_ACCOUNT_CERT_PATH =
    "/var/run/secrets/kubernetes.io/serviceaccount/ca.crt";
  static DEFAULT_DEFAULT_KUBERNETES_SERVICE_ACCOUNT_CERT_PATH =
    "/var/run/secrets/kubernetes.io/serviceaccount/token";

  // session key supplier
  protected _sessionKeySupplier!: SessionKeySupplier;

  // federation client
  protected _federationClient!: FederationClient;

  constructor(
    protected federationClient: FederationClient,
    protected sessionKeySupplier: SessionKeySupplier
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

  // Builder method to create OkeWorkloadIdentityAuthenticationDetailsProviderBuilder which will build
  // OkeWorkloadIdentityAuthenticationDetailsProvider
  public static builder(
    customKubernetesServiceAccountCertPath: string,
    customKubernetesServiceAccountTokenPath: string
  ): OkeWorkloadIdentityAuthenticationDetailsProvider {
    return new OkeWorkloadIdentityAuthenticationDetailsProvider.OkeWorkloadIdentityAuthenticationDetailsProviderBuilder(
      customKubernetesServiceAccountCertPath,
      customKubernetesServiceAccountTokenPath
    ).build();
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

  /**
   * Builder for OkeWorkloadIdentityAuthenticationDetailsProvider
   */
  public static OkeWorkloadIdentityAuthenticationDetailsProviderBuilder = class OkeWorkloadIdentityAuthenticationDetailsProviderBuilder {
    kubernetesServiceAccountCertPath: string;
    kubernetesServiceAccountTokenPath: string;

    constructor(
      customKubernetesServiceAccountCertPath?: string,
      customKubernetesServiceAccountTokenPath?: string
    ) {
      this.kubernetesServiceAccountCertPath =
        customKubernetesServiceAccountCertPath ||
        OkeWorkloadIdentityAuthenticationDetailsProvider.DEFAULT_KUBERNETES_SERVICE_ACCOUNT_CERT_PATH;
      this.kubernetesServiceAccountTokenPath =
        customKubernetesServiceAccountTokenPath ||
        OkeWorkloadIdentityAuthenticationDetailsProvider.DEFAULT_DEFAULT_KUBERNETES_SERVICE_ACCOUNT_CERT_PATH;
    }

    public build(): OkeWorkloadIdentityAuthenticationDetailsProvider {
      let federationClient: FederationClient;
      let sessionKeySupplier: SessionKeySupplier;

      const kubernetesServiceHost =
        process.env[
          OkeWorkloadIdentityAuthenticationDetailsProvider.KUBERNETES_SERVICE_HOST_ENV_VAR_NAME
        ];
      if (!kubernetesServiceHost) {
        throw Error(
          `${OkeWorkloadIdentityAuthenticationDetailsProvider.KUBERNETES_SERVICE_HOST_ENV_VAR_NAME} environment variable is missing. ` +
            OKE_WORKLOAD_IDENTITY_DEBUG_INFORMATION_LOG
        );
      }

      const kubernetesServiceProxymuxPort =
        process.env[
          OkeWorkloadIdentityAuthenticationDetailsProvider
            .KUBERNETES_SERVICE_PORT_PROXYMUX_ENV_VAR_NAME
        ];
      if (!kubernetesServiceProxymuxPort) {
        throw Error(
          `${OkeWorkloadIdentityAuthenticationDetailsProvider.KUBERNETES_SERVICE_PORT_PROXYMUX_ENV_VAR_NAME} environment variable is missing. ` +
            OKE_WORKLOAD_IDENTITY_DEBUG_INFORMATION_LOG
        );
      }

      let kubernetesServiceAccountCert;
      try {
        kubernetesServiceAccountCert = loadFromFile(this.kubernetesServiceAccountCertPath);
      } catch (e) {
        throw Error(
          `Failed to read ${this.kubernetesServiceAccountCertPath}. ` +
            OKE_WORKLOAD_IDENTITY_DEBUG_INFORMATION_LOG
        );
      }

      let kubernetesServiceAccountToken;
      try {
        kubernetesServiceAccountToken = loadFromFile(this.kubernetesServiceAccountTokenPath);
      } catch (e) {
        throw Error(
          `Failed to read ${this.kubernetesServiceAccountTokenPath}. ` +
            OKE_WORKLOAD_IDENTITY_DEBUG_INFORMATION_LOG
        );
      }

      // Initialize everything
      sessionKeySupplier = new SessionKeySupplierImpl();
      federationClient = new X509FederationClientForOkeWorkloadIdentity(
        `https://${kubernetesServiceHost}:${kubernetesServiceProxymuxPort}/resourcePrincipalSessionTokens`,
        kubernetesServiceAccountToken,
        kubernetesServiceAccountCert,
        sessionKeySupplier
      );

      return new OkeWorkloadIdentityAuthenticationDetailsProvider(
        federationClient,
        sessionKeySupplier
      );
    }
  };
}
