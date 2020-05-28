/**
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import {
  AuthenticationDetailsProvider,
  SimpleAuthenticationDetailsProvider,
  RegionProvider
} from "./auth";
import { checkNotNull } from "../utils";
import { ConfigFileReader, ConfigFile } from "../config-file-reader";
import { readFileSync } from "fs";
import { Region } from "../region";
import { Realm } from "../realm";

export class ConfigFileAuthenticationDetailsProvider
  implements AuthenticationDetailsProvider, RegionProvider {
  private delegate: SimpleAuthenticationDetailsProvider;

  /**
   * Creates a new instance using the config file at the default location,
   * see {@link ConfigFileReader#DEFAULT_FILE_PATH}.
   *
   * @param profile
   *            profile to load, optional
   * @param configurationFilePath
   *            config file path, optional
   * @throws Error
   *             if the configuration file could not be loaded
   */
  constructor(configurationFilePath?: string, profile?: string) {
    const pfl = profile || ConfigFileReader.DEFAULT_PROFILE_NAME;
    if (configurationFilePath) {
      this.delegate = this.createConfigFileAuth(
        ConfigFileReader.parseFileFromPath(configurationFilePath, pfl)
      );
    } else {
      this.delegate = this.createConfigFileAuth(ConfigFileReader.parseDefault(pfl));
    }
  }

  createConfigFileAuth(file: ConfigFile): SimpleAuthenticationDetailsProvider {
    const fingerprint = checkNotNull(file.get("fingerprint"), "missing fingerprint in config");
    const tenantId = checkNotNull(file.get("tenancy"), "missing tenancy in config");
    const user = checkNotNull(file.get("user"), "missing user in config");
    const pemFilePath = checkNotNull(file.get("key_file"), "missing key_file in config");
    const passPhrase = file.get("pass_phrase");

    const privateKey = this.getPvtKey(ConfigFileReader.expandUserHome(pemFilePath));
    let region = null;
    const regionId = file.get("region");
    if (regionId !== null) {
      try {
        region = Region.fromRegionId(regionId);
      } catch (e) {
        console.warn(
          `Found regionId ${regionId} in config file, but not supported by this version of the SDK`
        );
        // Proceed by assuming the region id in the config file belongs to OC1 realm.
        region = Region.register(regionId, Realm.OC1);
      }
    } else {
      throw Error("Region not specified in Config file. Can not proceed without setting a region.");
    }

    return new SimpleAuthenticationDetailsProvider(
      tenantId,
      user,
      fingerprint,
      privateKey,
      passPhrase,
      region
    );
  }

  getPvtKey(filePath: string): string {
    const key = readFileSync(filePath, "utf8");
    return key;
  }

  /**
   * Get the key id to sign the http request.
   */
  public getKeyId(): string {
    return this.delegate.getKeyId();
  }

  /**
   * Get the private key to sign the http request.
   */
  public getPrivateKey(): string {
    return this.delegate.getPrivateKey();
  }

  /**
   * Get the passphrase of the private key to sign the http request.
   */
  public getPassphrase(): string | null {
    return this.delegate.getPassphrase();
  }

  /**
   * Get the Tenancy
   */
  public getTenantId(): string {
    return this.delegate.getTenantId();
  }

  /**
   * Get the user
   */
  public getUser(): string {
    return this.delegate.getUser();
  }

  /**
   * Get the fingerprint
   */
  public getFingerprint(): string {
    return this.delegate.getFingerprint();
  }

  /**
   * Get the rehion
   */
  public getRegion(): Region {
    return this.delegate.getRegion();
  }
}
