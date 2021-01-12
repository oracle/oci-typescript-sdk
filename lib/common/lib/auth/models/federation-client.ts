/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

/**
 * Defines a basic interface for a federation endpoint that provides
 * a security token for authentication.
 * NOTE: Some class that implements this interface may not be async in nature. But
 * since some class's method are async, keep it consistent by making it async.
 */

export default interface FederationClient {
  /**
   * Gets a security token from the federation endpoint. May use a cached token if
   * it judged to still be valid.
   * @return A security token that can be used to authenticate requests.
   */
  getSecurityToken(): Promise<string>;

  /**
   * Gets a security token from the federation endpoint. This will always retreive
   * a new token from the federation endpoint and does not use a cached token.
   * @return A security token that can be used to authenticate requests.
   */
  refreshAndGetSecurityToken(): Promise<string>;

  /**
   * Get a claim embedded in the security token. May use the cached token if it is
   * judged to still be valid.
   */
  getStringClaim(key: string): Promise<string | null>;
}
