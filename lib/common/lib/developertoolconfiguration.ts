/*
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates. All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import path from "path";
import { Region } from "./region";
import { RegionMetadataSchema } from "./region-metadata-schema";
import fs from "fs";
import { DeveloperToolConfigurationFileSchema } from "./developer-tool-configuration-file-schema";
import { Realm } from "./realm";
import { ConfigFileReader } from "./config-file-reader";

const OCI_DEVELOPER_TOOL_CONFIGURATION_FILE_PATH: string =
  "OCI_DEVELOPER_TOOL_CONFIGURATION_FILE_PATH";
const OCI_ALLOW_ONLY_DEVELOPER_TOOL_CONFIGURATION_REGIONS: string =
  "OCI_ALLOW_ONLY_DEVELOPER_TOOL_CONFIGURATION_REGIONS";
const DEFAULT_DEVELOPER_TOOL_CONFIGURATION_FILE_PATH: string = ConfigFileReader.expandUserHome(
  path.join("~", ".oci", "developer-tool-configuration.json")
);
let ociAllowOnlyDeveloperToolConfigurationvRegions: boolean;

let developerToolConfigurationProvider: string;
let ociEnabledServiceSet: Set<string>;
let developerToolConfigurationRegions: RegionMetadataSchema[];

function getParsedServiceName(serviceName: string): string {
  return serviceName.toLowerCase().replace("/[^a-z]/", "");
}

export function getDeveloperToolConfigurationFilePath(): string {
  return (
    process.env.OCI_DEVELOPER_TOOL_CONFIGURATION_FILE_PATH ??
    DEFAULT_DEVELOPER_TOOL_CONFIGURATION_FILE_PATH
  );
}

function initializedeveloperToolConfiguration() {
  // Initialize the OciEnabledServiceSet
  ociEnabledServiceSet = new Set<string>();
  developerToolConfigurationRegions = new Array<RegionMetadataSchema>();
  developerToolConfigurationProvider = "";
  ociAllowOnlyDeveloperToolConfigurationvRegions = false;
  if (!doesDeveloperToolConfigurationFileExist()) return;
  let configFilePath: string = getDeveloperToolConfigurationFilePath();
  try {
    let content = fs.readFileSync(configFilePath, "utf8");
    if (!content) {
      return;
    }
    let developerToolConfig;
    try {
      developerToolConfig = JSON.parse(content) as DeveloperToolConfigurationFileSchema;
    } catch (error) {
      console.log(
        "Failure while parsing DeveloperToolConfiguration config file: " +
          configFilePath +
          " ex:" +
          error
      );
    }
    if (developerToolConfig !== undefined) {
      // Add configured services to OciEnabledServiceSet
      developerToolConfig?.services?.forEach((service: string) => {
        ociEnabledServiceSet.add(getParsedServiceName(service));
      });

      // Add configured Regions to developerToolConfigurationRegions
      developerToolConfig?.regions?.forEach((region: RegionMetadataSchema) => {
        developerToolConfigurationRegions.push(region);
      });

      // Initialize DeveloperToolConfiguration provider
      if (developerToolConfig.developerToolConfigurationProvider !== null) {
        developerToolConfigurationProvider = developerToolConfig.developerToolConfigurationProvider;
      }

      // Initialize ociAllowOnlyDeveloperToolConfigurationvRegions from DeveloperToolConfiguration config
      if (developerToolConfig.allowOnlyDeveloperToolConfigurationRegions !== null) {
        ociAllowOnlyDeveloperToolConfigurationvRegions = Boolean(
          developerToolConfig.allowOnlyDeveloperToolConfigurationRegions
        );
      }
    }
  } catch (error) {
    if (error.code === "ENOENT") {
      console.log(
        "DeveloperToolConfiguration config file not found at " +
          configFilePath +
          ", enabling all OCI services as default"
      );
      return;
    } else {
      console.log(
        "Enabling all OCI services as failsafe. There was an exception while trying to read or de-serialize the DeveloperToolConfiguration config file at: " +
          configFilePath +
          " ex:" +
          error
      );
    }
  }
}

export function developerToolConfiguration() {
  initializedeveloperToolConfiguration();
}

export function isServiceEnabled(service: string): boolean {
  // Convert the service name to lower case to avoid match failure in list
  service = getParsedServiceName(service);
  if (ociEnabledServiceSet == null) {
    initializedeveloperToolConfiguration();
  }
  // If OciEnabledServiceSet is empty then we enable all services.
  if (ociEnabledServiceSet.size == 0) {
    console.log("The OciEnabledServiceSet is empty, all OCI services are enabled");
    return true;
  }
  return ociEnabledServiceSet.has(service);
}

export function isociAllowOnlyDeveloperToolConfigurationRegionsEnabled(): boolean {
  let ociAllowOnlyDeveloperToolConfigurationvRegionsFromEnvironmentVariable: boolean = Boolean(
    process.env.OCI_ALLOW_ONLY_DEVELOPER_TOOL_CONFIGURATION_REGIONS ?? false
  );
  if (ociAllowOnlyDeveloperToolConfigurationvRegionsFromEnvironmentVariable != null) {
    const result: boolean = Boolean(
      ociAllowOnlyDeveloperToolConfigurationvRegionsFromEnvironmentVariable
    );
    return result;
  }
  return ociAllowOnlyDeveloperToolConfigurationvRegions;
}

export function doesDeveloperToolConfigurationFileExist(): boolean {
  return fs.existsSync(getDeveloperToolConfigurationFilePath());
}

export function useOnlyDeveloperToolConfigurationRegions(): boolean {
  return (
    !isociAllowOnlyDeveloperToolConfigurationRegionsEnabled() &&
    (doesDeveloperToolConfigurationFileExist() || developerToolConfigurationRegions.length != 0)
  );
}

export function reInitialize() {
  Region.resetDeveloperToolConfiguration();
  Realm.resetDeveloperToolConfiguration();
  initializedeveloperToolConfiguration();
}
