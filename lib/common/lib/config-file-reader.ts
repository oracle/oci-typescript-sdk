/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import { existsSync, readFileSync } from "fs";

const CONFIG_FILE_AUTH_INFO =
  "For more info about config file and how to get required information, see https://docs.oracle.com/en-us/iaas/Content/API/Concepts/sdkconfig.htm for more info on OCI configuration files.";

export class ConfigFileReader {
  /**
   * Default location of the config file.
   */
  public static DEFAULT_FILE_PATH: string = "~/.oci/config";

  /**
   * The fallback default location of the config file. If and only if the DEFAULT_FILE_PATH does not exist,
   * this fallback default location will be used.
   */
  public static FALLBACK_DEFAULT_FILE_PATH: string = "~/.oraclebmc/config";

  static DEFAULT_PROFILE_NAME: string = "DEFAULT";

  /**
   * Creates a new ConfigFile instance using the configuration at the default location,
   * using the given profile.
   * @param profile The profile name to load, or null if you want to load the
   *            "DEFAULT" profile.
   * @return A new ConfigFile instance.
   * @throws Error, if the file could not be read.
   */
  static parseDefault(profile: string | null): ConfigFile {
    const envVarConfigFile: string | undefined = process.env.OCI_CONFIG_FILE;

    // Check if file exists in the location
    const defaultExists = ConfigFileReader.fileExists(ConfigFileReader.DEFAULT_FILE_PATH);
    const fallbackExists = ConfigFileReader.fileExists(ConfigFileReader.FALLBACK_DEFAULT_FILE_PATH);
    let configFileFromEnvVarExists = false;
    if (envVarConfigFile) {
      configFileFromEnvVarExists = ConfigFileReader.fileExists(envVarConfigFile);
    }

    // If default file exists, assign effecive file as default file, else fallback as effective file
    if (defaultExists) {
      return ConfigFileReader.parseFileFromPath(ConfigFileReader.DEFAULT_FILE_PATH, profile);
    } else if (configFileFromEnvVarExists) {
      return ConfigFileReader.parseFileFromPath(envVarConfigFile!, profile);
    } else if (fallbackExists) {
      return ConfigFileReader.parseFileFromPath(
        ConfigFileReader.FALLBACK_DEFAULT_FILE_PATH,
        profile
      );
    }
    throw new Error(
      ` Can't load the default config from ${ConfigFileReader.DEFAULT_FILE_PATH} or ${ConfigFileReader.FALLBACK_DEFAULT_FILE_PATH} because it does not exists or its not a file. ${CONFIG_FILE_AUTH_INFO}`
    );
  }

  static expandUserHome(path: string) {
    // If the home (~) shortcut is used, then attempt to determine correct path.
    // Otherwise, leave as is to allow users to always be able to specify a path
    // without the SDK modifying it.
    if (path.startsWith("~/") || path.startsWith("~\\")) {
      return (
        require("os").homedir() +
        ConfigFileReader.correctPath(process.platform === "win32", path.substring(1))
      );
    } else {
      return path;
    }
  }

  // Handle the case where somebody is copying the config file
  // between platforms (or copying examples without changing values)
  static correctPath(isWindows: boolean, path: string): string {
    if (isWindows) {
      // https://msdn.microsoft.com/en-us/library/aa365247
      // forward slash is reserved, assume its not supposed to
      // be there and replace with back slash
      path = path.replace("/", "\\");
    }
    // back slash is not a reserved character on other platforms,
    // so do not attempt to modify it
    return path;
  }

  static fileExists(filepath: string): boolean {
    return existsSync(ConfigFileReader.expandUserHome(filepath));
  }

  static parseFileFromPath(path: string, profile: string | null): ConfigFile {
    if (ConfigFileReader.fileExists(path)) {
      const fileContent = readFileSync(ConfigFileReader.expandUserHome(path), "utf8");
      return ConfigFileReader.parse(fileContent, profile);
    }
    throw Error(`File does not exists at ${path}. ${CONFIG_FILE_AUTH_INFO}`);
  }

  static parse(fileContent: string, profile: string | null): ConfigFile {
    const lines = fileContent.split("\n").filter(Boolean);
    const accumulator = new ConfigAccumulator();
    lines.forEach(l => {
      accumulator.accept(l);
    });

    if (!accumulator.foundDefaultProfile) {
      console.info("No DEFAULT profile was specified in the configuration");
    }
    if (profile !== null && !accumulator.configurationsByProfile.has(profile)) {
      throw new Error(
        "No profile named " +
          profile +
          " exists in the configuration file. " +
          CONFIG_FILE_AUTH_INFO
      );
    }

    return new ConfigFile(accumulator, profile);
  }
}

export class ConfigFile {
  profile: string | null;
  accumulator: ConfigAccumulator;

  constructor(acc: ConfigAccumulator, profile: string | null) {
    this.accumulator = acc;
    this.profile = profile;
  }

  /**
   * Gets the value associated with a given key. The value returned will
   * be the one for the selected profile (if available), else the value in
   * the DEFAULT profile (if specified), else null.
   *
   * @param key, The key to look up.
   * @return The value, or null if it didn't exist.
   */
  public get(key: string): string | null {
    if (this.profile && this.accumulator.configurationsByProfile.get(this.profile)!.has(key)) {
      return this.accumulator.configurationsByProfile.get(this.profile)!.get(key)!;
    }
    return this.accumulator.foundDefaultProfile
      ? this.accumulator.configurationsByProfile
          .get(ConfigFileReader.DEFAULT_PROFILE_NAME)!
          .get(key)!
      : null;
  }
  public get profileCredentials(): ConfigAccumulator {
    return this.accumulator;
  }
}

export class ConfigAccumulator {
  configurationsByProfile = new Map<string, Map<string, string>>();
  "currentProfile": string;
  "foundDefaultProfile": boolean = false;

  accept(line: string) {
    const trimmedLine = line.trim();

    // no blank Lines
    if (!trimmedLine) {
      return;
    }
    // skip comments
    if (trimmedLine.charAt(0) === "#") {
      return;
    }

    if (trimmedLine.charAt(0) === "[" && trimmedLine.charAt(trimmedLine.length - 1) === "]") {
      this.currentProfile = trimmedLine.substring(1, trimmedLine.length - 1).trim();
      if (!this.currentProfile) {
        throw Error(`Cannot have empty profile name: ${line}. ${CONFIG_FILE_AUTH_INFO}`);
      }
      if (this.currentProfile === ConfigFileReader.DEFAULT_PROFILE_NAME) {
        this.foundDefaultProfile = true;
      }
      if (!this.configurationsByProfile.has(this.currentProfile)) {
        this.configurationsByProfile.set(this.currentProfile, new Map<string, string>());
      }
      return;
    }

    const splitIndex: number = trimmedLine.indexOf("=");
    if (splitIndex === -1) {
      throw new Error("Found line with no key-value pair: " + line);
    }

    const key: string = trimmedLine.substring(0, splitIndex).trim();
    const value: string = trimmedLine.substring(splitIndex + 1).trim();
    if (!key) {
      throw new Error("Found line with no key: " + line);
    }

    if (!this.currentProfile) {
      throw new Error(
        `Config parse error, attempted to read configuration without specifying a profile: ${line}. ${CONFIG_FILE_AUTH_INFO}`
      );
    }
    this.configurationsByProfile.get(this.currentProfile)!.set(key, value);
  }
}
