/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

/**
 * This is a helper class to generate in-memory temporary session keys.
 * <p>
 * The thread safety of this class is ensured
 */

import { generateKeyPairSync } from "crypto";
import SessionKeySupplier from "./models/session-key-supplier";
import KeyPair from "./key-pair";

export default class SessionKeySupplierImpl implements SessionKeySupplier {
  private keyPair: KeyPair;

  constructor() {
    const { privateKey, publicKey } = generateKeyPairSync("rsa", {
      modulusLength: 2048,
      publicExponent: 65537,
      publicKeyEncoding: {
        type: "spki",
        format: "pem"
      },
      privateKeyEncoding: {
        type: "pkcs8",
        format: "pem"
      }
    });
    this.keyPair = new KeyPair(publicKey, privateKey);
  }

  getKeyPair(): KeyPair {
    return this.keyPair;
  }

  refreshKeys(): void {
    const { privateKey, publicKey } = generateKeyPairSync("rsa", {
      modulusLength: 2048,
      publicExponent: 65537,
      publicKeyEncoding: {
        type: "spki",
        format: "pem"
      },
      privateKeyEncoding: {
        type: "pkcs8",
        format: "pem"
      }
    });
    this.keyPair = new KeyPair(publicKey, privateKey);
  }
}
