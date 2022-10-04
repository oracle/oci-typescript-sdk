/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import { Region } from "../region";
import AbstractAuthenticationDetailsProvider from "./models/abstract-authentication-details-provider";
import { ConfigAccumulator } from "../config-file-reader";

/**
 * An interface provides the authentication details.
 */
export interface AuthenticationDetailsProvider extends AbstractAuthenticationDetailsProvider {
  /**
   * Get the key id to sign the http request.
   */
  getKeyId(): Promise<string>;

  /**
   * Get the private key to sign the http request.
   */
  getPrivateKey(): string;

  /**
   * Get the passphrase of the private key to sign the http request.
   */
  getPassphrase(): string | null;

  /**
   * Get the auth type of this authentication provider
   */
  getAuthType?(): string | undefined;

  /**
   * Get the true authentication provider
   */
  getProvider?(): AuthenticationDetailsProvider;

  /**
   * Set the provider
   */
  setProvider?(provider: AuthenticationDetailsProvider): void;

  /**
   * Get the delegation token
   */
  getDelegationToken?(): string | undefined;
}

/*
 * Interface that provide region info.
 */
export interface RegionProvider {
  /**
   * Returns the region.
   *
   * @return Region object.
   */
  getRegion(): Region;
}

/*
 * User Defined type guard function to check if the object is of type RegionProvider
 * https://basarat.gitbooks.io/typescript/content/docs/types/typeGuard.html
 */
export function isRegionProvider(arg: any): arg is RegionProvider {
  return arg.getRegion !== undefined;
}

/**
 * The API based authentication details provider which implements [[AuthenticationDetailsProvider]].
 */
export class SimpleAuthenticationDetailsProvider
  implements AuthenticationDetailsProvider, RegionProvider {
  // provider is a member variable that may or may not store the actual AuthenticationDetailsProvider.
  // In case of Cloud shell, provider would be the true AuthenticationDetailsProvider.
  private provider: AuthenticationDetailsProvider = (null as unknown) as AuthenticationDetailsProvider;
  /**
   * Construct an instance of [[SimpleAuthenticationDetailsProvider]].
   * @param tenancy   tenancy id.
   * @param user  user id.
   * @param fingerprint   user's fingerprint.
   * @param privateKey    private key to sign the request.
   * @param passphrase    the passphrase of private key.
   */
  constructor(
    private tenancy: string,
    private user: string,
    private fingerprint: string,
    private privateKey: string,
    private passphrase: string | null,
    private region?: Region,
    private authType?: string | undefined,
    private delegationToken?: string | undefined,
    private profileCredentials?: ConfigAccumulator | undefined,
    private _sessionToken?: string | undefined
  ) {}

  /**
   * Get the key id to sign the http request.
   */
  public async getKeyId(): Promise<string> {
    return this.tenancy + "/" + this.user + "/" + this.fingerprint;
  }

  /**
   * Get the private key to sign the http request.
   */
  public getPrivateKey(): string {
    return this.privateKey;
  }

  /**
   * Get the passphrase of the private key to sign the http request.
   */
  public getPassphrase(): string | null {
    return this.passphrase;
  }

  /**
   * Get the Tenancy
   */
  public getTenantId(): string {
    return this.tenancy;
  }

  /**
   * Get the user
   */
  public getUser(): string {
    return this.user;
  }

  /**
   * Get the fingerprint
   */
  public getFingerprint(): string {
    return this.fingerprint;
  }

  /**
   * Get the region
   */
  public getRegion(): Region {
    return this.region!;
  }

  /**
   * Set the region
   */
  public setRegion(region: Region): void {
    this.region = region;
  }

  /**
   * Get the authType
   */
  public getAuthType(): string | undefined {
    return this.authType;
  }

  /**
   * Set the provider
   */
  public setProvider(provider: AuthenticationDetailsProvider): void {
    this.provider = provider;
  }

  /**
   * Get the provider
   */
  public getProvider(): AuthenticationDetailsProvider {
    return this.provider;
  }

  /**
   * Get the delegation token
   */
  public getDelegationToken(): string | undefined {
    return this.delegationToken;
  }

  public getProfileCredentials(): ConfigAccumulator | undefined {
    return this.profileCredentials;
  }

  public get sessionToken(): string | undefined {
    return this._sessionToken;
  }

  public set sessionToken(token) {
    this._sessionToken = token;
  }
}
