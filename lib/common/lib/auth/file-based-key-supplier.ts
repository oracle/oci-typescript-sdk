/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import SessionKeySupplier from "./models/session-key-supplier";
import KeyPair from "./key-pair";
import { loadPrivateKeyFromFile } from "./helpers/load-private-key-from-file";

export default class FileBasedKeySupplier implements SessionKeySupplier {
  private keyPair!: KeyPair;

  constructor(private privateKeyPath: string, private passphrasePath?: string) {
    this.refreshKeys();
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

  public refreshKeys(): void {
    if (!this.privateKeyPath) {
      throw Error("privateKeyPath not set");
    }

    // Try to create a privateKey & publicKey from the given privateKeyPath & passphrasePath
    try {
      const { publicKey, privateKey } = loadPrivateKeyFromFile(
        this.privateKeyPath,
        this.passphrasePath
      );
      this.keyPair = new KeyPair(publicKey, privateKey);
    } catch (e) {
      throw Error(`Problem occured trying to create KeyPairs from given paths with error: ${e}`);
    }
  }
}
