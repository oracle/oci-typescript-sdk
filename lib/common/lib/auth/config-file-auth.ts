/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import {
  AuthenticationDetailsProvider,
  SimpleAuthenticationDetailsProvider,
  RegionProvider
} from "./auth";
import { checkNotNull } from "../utils";
import { ConfigFileReader, ConfigFile, ConfigAccumulator } from "../config-file-reader";
import { readFileSync } from "fs";
import { Region } from "../region";
import { Realm } from "../realm";

const CONFIG_FILE_AUTH_INFO =
  "For more info about config file and how to get required information, see https://docs.oracle.com/en-us/iaas/Content/API/Concepts/sdkconfig.htm for more info on OCI configuration files.";

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

  /**
   * Get a region based on regionId, if corresponding region is not found from regionId,
   * create a new region by registering regionId with Realm.OC1
   *
   * @param regionId: string
   * @param region: any
   * @return: Region
   */
  retrieveRegionFromRegionId(regionId: string): Region {
    let region: Region;
    try {
      region = Region.fromRegionId(regionId);
      if (!region) {
        console.warn(
          `Found regionId ${regionId} in config file, but not supported by this version of the SDK`
        );
        const fallbackSecondLevelDomain = process.env["OCI_DEFAULT_REALM"];
        // Before defaulting to Realm.OC1, check if user defined a second level domain for unknown region fallback.
        // If so, create a dummy realm with the second level domain set from the env.OCI_DEFAULT_REALM. Else default to OC1 realm.
        if (fallbackSecondLevelDomain) {
          console.warn(`Falling back to using second level domain: ${fallbackSecondLevelDomain}`);
          const unknownRealm = Realm.register("unknown", fallbackSecondLevelDomain);
          region = Region.register(regionId, unknownRealm);
        } else {
          // Proceed by assuming the region id in the config file belongs to OC1 realm.
          console.warn(`Falling back to using OC1 realm.`);
          region = Region.register(regionId, Realm.OC1);
        }
      }
      return region;
    } catch (e) {
      throw new Error(
        `Error from retrying to retrieve region from regionId: ${e}. ${CONFIG_FILE_AUTH_INFO}`
      );
    }
  }

  createConfigFileAuth(file: ConfigFile): SimpleAuthenticationDetailsProvider {
    const authType = file.get("authentication_type");
    const tenantId = checkNotNull(file.get("tenancy"), "missing tenancy in config");
    const delegationTokenPath = file.get("delegation_token_file");
    let delegationToken = "";
    let region = null;
    const regionEnvVar = process.env.OCI_REGION;

    let regionId = file.get("region") || regionEnvVar;
    if (regionId) {
      region = this.retrieveRegionFromRegionId(regionId!);
    } else {
      throw Error(
        "Region not specified in Config file or OCI_REGION env variable. Can not proceed without setting a region. " +
          CONFIG_FILE_AUTH_INFO
      );
    }

    if (delegationTokenPath) {
      delegationToken = readFileSync(delegationTokenPath, "utf8").replace(/\n/g, "");
    }
    // If authType exist that means we are not doing file based authentication, return early.
    // This also assumes that a delegationTokenPath exists.
    if (authType) {
      return new SimpleAuthenticationDetailsProvider(
        tenantId,
        "",
        "",
        "",
        "",
        region,
        authType,
        delegationToken
      );
    }

    const fingerprint = checkNotNull(file.get("fingerprint"), "missing fingerprint in config");
    const pemFilePath = checkNotNull(file.get("key_file"), "missing key_file in config");
    const passPhrase = file.get("pass_phrase");
    const privateKey = this.getPvtKey(ConfigFileReader.expandUserHome(pemFilePath));
    const profileCredentials = file.profileCredentials;

    const sessionTokenPath = file.get("security_token_file");

    const sessionToken = sessionTokenPath
      ? this.getPvtKey(ConfigFileReader.expandUserHome(sessionTokenPath))
      : undefined;

    const user = sessionToken ? "" : checkNotNull(file.get("user"), "missing user in config");

    return new SimpleAuthenticationDetailsProvider(
      tenantId,
      user,
      fingerprint,
      privateKey,
      passPhrase,
      region,
      undefined,
      undefined,
      profileCredentials,
      sessionToken
    );
  }

  getPvtKey(filePath: string): string {
    try {
      const key = readFileSync(filePath, "utf8");
      return key;
    } catch (e) {
      throw "Failed to read private key from file path. " + CONFIG_FILE_AUTH_INFO;
    }
  }

  /**
   * Get the key id to sign the http request.
   */
  public async getKeyId(): Promise<string> {
    return await this.delegate.getKeyId();
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
   * Get the region
   */
  public getRegion(): Region {
    return this.delegate.getRegion();
  }

  /**
   * Set the region
   */
  public setRegion(regionId: string): void {
    this.delegate.setRegion(this.retrieveRegionFromRegionId(regionId));
  }

  /**
   * Get the authType
   */
  public getAuthType(): string | undefined {
    return this.delegate.getAuthType();
  }

  /**
   * Set the provider
   */
  public setProvider(provider: AuthenticationDetailsProvider): void {
    this.delegate.setProvider(provider);
  }

  /**
   * Get the provider
   */
  public getProvider(): AuthenticationDetailsProvider {
    return this.delegate.getProvider();
  }

  public getDelegationToken(): string | undefined {
    return this.delegate.getDelegationToken();
  }

  public getProfileCredentials(): ConfigAccumulator | undefined {
    return this.delegate.getProfileCredentials();
  }

  public get sessionToken(): string | undefined {
    return this.delegate.sessionToken;
  }

  public set sessionToken(token) {
    this.delegate.sessionToken = token;
  }
}
