/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import { AuthenticationDetailsProvider } from "./auth";
import FederationClient from "./models/federation-client";
import SessionKeySupplier from "./models/session-key-supplier";

/**
 * Base class for authentication details providers that make remote requests.
 */
export default abstract class AbstractRequestingAuthenticationDetailsProvider
  implements AuthenticationDetailsProvider {
  constructor(
    protected federationClient: FederationClient,
    protected sessionKeySupplier: SessionKeySupplier
  ) {}

  async getKeyId(): Promise<string> {
    return "ST$" + (await this.federationClient.getSecurityToken());
  }

  getPrivateKey(): string {
    return this.sessionKeySupplier.getKeyPair().getPrivate();
  }

  getPassphrase(): null {
    return null;
  }
}
