/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import { readFileSync } from "fs";
import { parsePrivateKey } from "sshpk";

/**
 * loadPrivateKeyFromFile will take in a privateKeyPath and optional passphrasePath
 * It will use these 2 path information to read the files and create a privateKey and publicKey
 * @param privateKeyPath, the path to the privateKey PEM file
 * @param passphrasePath?, the path to the passphrase PEM file
 * @return object that contains: { privateKey, publicKey }
 */

interface RSAKeyPair {
  publicKey: string;
  privateKey: string;
}

export function loadPrivateKeyFromFile(
  privateKeyPath: string,
  passphrasePath?: string
): RSAKeyPair {
  try {
    let options = {};
    let passphraseFileContent: string;
    const privateKeyFileContent = readFileSync(privateKeyPath, "utf8");
    if (passphrasePath) {
      passphraseFileContent = readFileSync(passphrasePath, "utf8");
      Object.assign(options, { passphrase: passphraseFileContent });
    }

    // parse privateKeyFileContent with passphraseFileContent (if it exist) into a PrivateKey
    const privateKey = parsePrivateKey(privateKeyFileContent, "auto", options);
    const publicKey = privateKey.toPublic();

    return {
      publicKey: publicKey.toString("pem"),
      privateKey: privateKey.toBuffer("pem", {}).toString()
    };
  } catch (e) {
    throw Error(`Failed to read file contents, error: ${e}`);
  }
}
