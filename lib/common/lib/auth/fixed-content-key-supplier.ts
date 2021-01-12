/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import SessionKeySupplier from "./models/session-key-supplier";
import KeyPair from "./key-pair";
import { parsePrivateKey } from "sshpk";

/**
 * This is a SessionKeySupplier which fakes the ability to refresh its contained key.
 * It is initialised once with fixed values of private key and (optional) passphrase; that key is always returned.
 */

export default class FixedContentKeySupplier implements SessionKeySupplier {
  private keyPair: KeyPair;
  constructor(private privateKeyContent: string, private passphrase?: string) {
    try {
      let options = {};
      // parse privateKeyContent with passphrase (if it exist) into a PrivateKey
      if (passphrase) {
        Object.assign(options, { passphrase: passphrase });
      }
      const privateKey = parsePrivateKey(privateKeyContent, "auto", options);
      const publicKey = privateKey.toPublic();
      this.keyPair = new KeyPair(
        publicKey.toString("pem"),
        privateKey.toBuffer("pem", {}).toString()
      );
    } catch (e) {
      throw Error(`Failed to read file contents, error: ${e}`);
    }
  }

  // Getter: KeyPair
  public getKeyPair(): KeyPair {
    return this.keyPair;
  }

  // Getter: Public Key
  public get publicKey(): string {
    return this.getKeyPair().getPublic();
  }

  // Getter Private Key
  public get privateKey(): string {
    return this.getKeyPair().getPrivate();
  }

  public refreshKeys(): void {}
}
