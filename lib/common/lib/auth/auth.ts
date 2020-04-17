import { Region } from "../region";

/**
 * Copyright (c) 2019, Oracle and/or its affiliates. All rights reserved.
 */

/**
 * An interface provides the authentication details.
 */
export interface AuthenticationDetailsProvider {
  /**
   * Get the key id to sign the http request.
   */
  getKeyId(): string;

  /**
   * Get the private key to sign the http request.
   */
  getPrivateKey(): string;

  /**
   * Get the passphrase of the private key to sign the http request.
   */
  getPassphrase(): string | null;
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
    private region?: Region
  ) {}

  /**
   * Get the key id to sign the http request.
   */
  public getKeyId(): string {
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
}
