/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import SessionKeySupplier from "./models/session-key-supplier";
import SecurityTokenAdapter from "./security-token-adapter";
import FederationClient from "./models/federation-client";

/**
 * This class returns a security token, supplied as a fixed value.
 */
export default class FixedContentResourcePrincipalFederationClient implements FederationClient {
  private securityTokenAdapter: SecurityTokenAdapter;

  /**
   * Constructor of FixedContentResourcePrincipalFederationClient.
   *
   * @param resourcePrincipalSessionToken the constant value for the RPST
   * @param sessionKeySupplier the associated SessionKeySupplier
   */
  constructor(resourcePrincipalSessionToken: string, sessionKeySupplier: SessionKeySupplier) {
    this.securityTokenAdapter = new SecurityTokenAdapter(
      resourcePrincipalSessionToken,
      sessionKeySupplier
    );
  }

  async getSecurityToken(): Promise<string> {
    return this.securityTokenAdapter.getSecurityToken();
  }

  async refreshAndGetSecurityToken(): Promise<string> {
    return this.securityTokenAdapter.getSecurityToken();
  }

  async getStringClaim(key: string): Promise<string | null> {
    return this.securityTokenAdapter.getStringClaim(key);
  }
}
