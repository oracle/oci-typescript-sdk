/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */
import { readFileSync } from "fs";
import FederationClient from "./models/federation-client";
import SessionKeySupplier from "./models/session-key-supplier";
import SecurityTokenAdapter from "./security-token-adapter";

/**
 * This class gets a security token from file.
 */
export default class FileBasedResourcePrincipalFederationClient implements FederationClient {
  private securityTokenAdapter: SecurityTokenAdapter;
  constructor(
    private sessionKeySupplier: SessionKeySupplier,
    private resourcePrincipalSessionTokenPath: string
  ) {
    this.sessionKeySupplier = sessionKeySupplier;
    this.securityTokenAdapter = new SecurityTokenAdapter("", sessionKeySupplier);
    this.resourcePrincipalSessionTokenPath = resourcePrincipalSessionTokenPath;
  }

  /**
   * Gets a security token. If there is already a valid token cached, it will be returned. Else this will make a call
   * to the auth service to get a new token, using the provided suppliers.
   *
   * This method is thread-safe.
   * @return the security token
   * @throws OciError If there is any issue with getting a token from the auth server
   */
  async getSecurityToken(): Promise<string> {
    if (this.securityTokenAdapter.isValid()) {
      return this.securityTokenAdapter.getSecurityToken();
    }
    return await this.refreshAndGetSecurityTokenInner(true);
  }

  /**
   * Return a claim embedded in the security token
   * @param key the name of the claim
   * @return the value of the claim or null if unable to find
   */
  async getStringClaim(key: string): Promise<string | null> {
    await this.refreshAndGetSecurityToken();
    return this.securityTokenAdapter.getStringClaim(key);
  }

  async refreshAndGetSecurityToken(): Promise<string> {
    return await this.refreshAndGetSecurityTokenInner(false);
  }

  private async refreshAndGetSecurityTokenInner(
    doFinalTokenValidityCheck: boolean
  ): Promise<string> {
    // Check again to see if the JWT is still invalid, unless we want to skip that check
    if (!doFinalTokenValidityCheck || !this.securityTokenAdapter.isValid()) {
      this.sessionKeySupplier.refreshKeys();
      this.securityTokenAdapter = this.getSecurityTokenFromFile();
      return this.securityTokenAdapter.getSecurityToken();
    }
    return this.securityTokenAdapter.getSecurityToken();
  }

  /**
   * Gets a security token from file
   * @return the security token, which is basically a JWT token string
   */
  protected getSecurityTokenFromFile(): SecurityTokenAdapter {
    const keyPair = this.sessionKeySupplier.getKeyPair();
    if (!keyPair) {
      throw Error("Keypair for session was not provided");
    }
    let securityToken = "";
    try {
      securityToken = readFileSync(this.resourcePrincipalSessionTokenPath, "utf8");
    } catch (e) {
      throw Error(`Failed to read token due to error: ${e}`);
    }
    return new SecurityTokenAdapter(securityToken, this.sessionKeySupplier);
  }
}
