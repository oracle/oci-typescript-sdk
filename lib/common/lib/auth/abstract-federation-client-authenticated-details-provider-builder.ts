/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

/**
 * Abstract builder base class for authentication details provider extending
 * @param <B> builder class
 * @param <P> provider class
 */

import { EndpointBuilder } from "../endpoint-builder";
import { FetchHttpClient } from "../http";
import AbstractAuthenticationDetailsProvider from "./models/abstract-authentication-details-provider";
import X509CertificateSupplier from "./models/X509-certificate-supplier";
import { Region } from "../region";
import { Realm } from "../realm";
import AuthUtils from "./helpers/auth-utils";
import SessionKeySupplier from "./models/session-key-supplier";
import FederationClient from "./models/federation-client";
import X509FederationClient from "./X509-federation-client";
import SessionKeySupplierImpl from "./session-key-supplier";
import {
  URLBasedX509CertificateSupplier,
  ResourceDetails
} from "./url-based-x509-certificate-supplier";
import CircuitBreaker from "../circuit-breaker";

const INSTANCE_PRINCIPAL_GENERIC_ERROR =
  "Instance principals authentication can only be used on OCI compute instances. Please confirm this code is running on an OCI compute instance. See https://docs.oracle.com/en-us/iaas/Content/Identity/Tasks/callingservicesfrominstances.htm for more info.";

export default abstract class AbstractFederationClientAuthenticationDetailsProviderBuilder<
  B extends AbstractFederationClientAuthenticationDetailsProviderBuilder<B, P>,
  P extends AbstractAuthenticationDetailsProvider
> {
  // url template for auth service.
  protected template = "https://auth.{region}.{secondLevelDomain}";

  // Default base url of metadata service.
  protected METADATA_SERVICE_BASE_URL = "http://169.254.169.254/opc/v2/";

  // The Authorization header value to be sent for requests to the metadata service.
  private METADATA_AUTH_HEADERS = "Bearer Oracle";
  private AUTHORIZATION = "Authorization";

  // Base url of metadata service.
  protected _metadataBaseUrl = this.METADATA_SERVICE_BASE_URL;

  // The federation endpoint url.
  protected _federationEndpoint: string = "";

  // The leaf certificate, or null if detecting from instance metadata.
  protected _leafCertificateSupplier!: X509CertificateSupplier;

  //Tenancy OCI, or empty string if detecting from instance metadata.
  protected _tenancyId: string = "";

  // Purpose: Specifies the non-default purpose of the session token to be requested. For internal use only.
  private _purpose: string = "DEFAULT";

  // Detected region
  protected region!: Region;

  // session key supplier
  protected _sessionKeySupplier!: SessionKeySupplier;

  // federation client
  protected _federationClient!: FederationClient;

  // intermediate certificate supplier
  protected _intermediateCertificateSuppliers!: X509CertificateSupplier[];

  protected _circuitBreaker = new CircuitBreaker({
    timeout: 10000, // If our function takes longer than 10 seconds, trigger a failure
    errorThresholdPercentage: 50, // When 50% of requests fail, trip the circuit
    resetTimeout: 30000 // After 30 seconds, try again.
  }).circuit;

  // metadataBaseUrl getter
  get metadataBaseUrl(): string {
    return this._metadataBaseUrl;
  }

  // federationEndpoint getter
  get federationEndpoint(): string {
    return this._federationEndpoint;
  }

  // LeafCertificateSupplier getter
  get leafCertificateSupplier(): X509CertificateSupplier {
    return this._leafCertificateSupplier;
  }

  // tenancyId getter
  get tenancyId(): string {
    return this._tenancyId;
  }

  get circuitBreaker(): CircuitBreaker {
    return this._circuitBreaker;
  }

  // region getter
  getRegion(): Region {
    return this.region;
  }

  // Configure the metadata endpoint to use when retrieving the instance data and principal for federation.
  set metadataBaseUrl(metadataBaseUrl: string) {
    this._metadataBaseUrl = metadataBaseUrl;
    if (this._metadataBaseUrl.substr(-1) != "/") {
      this._metadataBaseUrl += "/";
    }
  }

  // Configures the custom federationEndpoint to use.
  set federationEndpoint(federationEndpoint: string) {
    this._federationEndpoint = federationEndpoint;
  }

  // Configures the custom leafCertificateSupplier to use.
  set leafCertificateSupplier(leafCertificateSupplier: X509CertificateSupplier) {
    this._leafCertificateSupplier = leafCertificateSupplier;
  }

  // Configure the custom tenancyId to use.
  set tenancyId(tenancyId: string) {
    this._tenancyId = tenancyId;
  }

  // Configure the purpose to use.
  set purpose(purpose: string) {
    this._purpose = purpose;
  }

  // Configures the custom sessionKeySupplier to use.
  set sessionKeySupplier(sessionKeySupplier: SessionKeySupplier) {
    this._sessionKeySupplier = sessionKeySupplier;
  }

  // Configures the set of intermediate certificate suppliers to use, if any.
  set intermediateCertificateSuppliers(
    intermediateCertificateSuppliers: [X509CertificateSupplier]
  ) {
    this._intermediateCertificateSuppliers = intermediateCertificateSuppliers;
  }

  /**
   * Build a new AuthenticationDetailsProvider that uses the FederationClient.
   *
   * @return A new provider instance.
   */
  async build(): Promise<P> {
    const sessionKeySupplierToUse = this._sessionKeySupplier || new SessionKeySupplierImpl();
    this._sessionKeySupplier = sessionKeySupplierToUse;
    this._federationClient = this.createFederationClient(this._sessionKeySupplier);
    return this.buildProvider(this._sessionKeySupplier);
  }

  /**
   * Build the actual provider.
   * @param sessionKeySupplierToUse
   * @return authentication details provider
   */
  protected abstract buildProvider(sessionKeySupplierToUse: SessionKeySupplier): P;

  /**
   * Build the Federation Client
   * @param sessionKeySupplier
   * @return Federation Client
   */
  protected createFederationClient(sessionKeySupplier: SessionKeySupplier): FederationClient {
    return new X509FederationClient(
      this._federationEndpoint,
      this._tenancyId,
      this._leafCertificateSupplier,
      sessionKeySupplier,
      this._intermediateCertificateSuppliers,
      this._purpose,
      this.circuitBreaker
    );
  }

  /**
   * Auto-detect endpoint and certificate information using Instance metadata.
   */
  protected async autoDetectUsingMetadataUrl(): Promise<void> {
    await this.autoDetectEndpointUsingMetadataUrl();
    await this.autoDetectCertificatesUsingMetadataUrl();
  }
  /**
   * Auto detects the endpoint that should be used when talking to OCI Auth, if no endpoint
   * has been configured already.
   * @return The auto-detected, or currently set, auth endpoint.
   */
  protected async autoDetectEndpointUsingMetadataUrl(): Promise<string> {
    if (this._federationEndpoint === "") {
      const url: string = this._metadataBaseUrl + "instance/region";
      let headers = new Headers();
      headers.append("accept", "text/plain");
      headers.append("Content-Type", "application/json");
      headers.append(this.AUTHORIZATION, this.METADATA_AUTH_HEADERS);
      const httpClient = new FetchHttpClient(null, this.circuitBreaker);
      const response = await httpClient.send({
        uri: url,
        method: "GET",
        headers: headers
      });
      // regionStr can be a shortCode or regionId
      const regionStr: string = await response.text();

      const regionId: string = Region.getRegionIdFromShortCode(regionStr);
      try {
        // Try to get region off regionId
        this.region = Region.fromRegionId(regionId);
      } catch (e) {
        console.log(`
          failed reason: ${e},
          Region not supported by this version of the SDK, registering region ${regionId} under OC1
        `);
        this.region = Region.register(regionId, Realm.OC1);
      }

      try {
        const endpoint = EndpointBuilder.createEndpointFromRegion(
          this.template,
          this.region //TODO: Find out why there is a type mismatch
        );
        this._federationEndpoint = endpoint;
      } catch (e) {
        throw Error(
          `Endpoint for auth service is not known in region ${this.region}. ${INSTANCE_PRINCIPAL_GENERIC_ERROR}`
        );
      }
    }
    return this._federationEndpoint;
  }
  /**
   * Auto detects and configures the certificates needed using Instance metadata.
   *
   */
  protected async autoDetectCertificatesUsingMetadataUrl(): Promise<void> {
    try {
      if (!this._leafCertificateSupplier) {
        this._leafCertificateSupplier = await new URLBasedX509CertificateSupplier(
          this.getMetaDataResourceDetail("identity/cert.pem", this.circuitBreaker),
          this.getMetaDataResourceDetail("identity/key.pem", this.circuitBreaker),
          null
        ).refresh();
      }

      if (this._tenancyId === "") {
        this._tenancyId = AuthUtils.getTenantIdFromCertificate(
          this._leafCertificateSupplier.getCertificateAndKeyPair().getCertificate()
        );
      }

      if (!this._intermediateCertificateSuppliers) {
        this._intermediateCertificateSuppliers = [
          await new URLBasedX509CertificateSupplier(
            this.getMetaDataResourceDetail("identity/intermediate.pem", this.circuitBreaker),
            null,
            null
          ).refresh()
        ];
      }
    } catch (e) {
      throw Error(
        "Failed to autoDetectCertificatesUsingMetadataUrl. " + INSTANCE_PRINCIPAL_GENERIC_ERROR
      );
    }
  }

  getMetaDataResourceDetail(path: string, circuitBreaker: CircuitBreaker) {
    const url: string = this._metadataBaseUrl + path;
    let headers = new Headers();
    headers.append(this.AUTHORIZATION, this.METADATA_AUTH_HEADERS);
    return new ResourceDetails(url, headers, circuitBreaker);
  }
}
