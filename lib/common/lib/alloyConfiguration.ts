/*
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates. All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import path from "path";
import { Region } from "./region";
import { RegionMetadataSchema } from "./region-metadata-schema";
import fs from "fs";
import { AlloyConfigFileSchema } from "./allow-config-file-schema";
import { Realm } from "./realm";
import { ConfigFileReader } from "./config-file-reader";

const OCI_ALLOY_CONFIG_FILE_PATH: string = "OCI_ALLOY_CONFIG_FILE_PATH";
const OCI_ALLOY_REGION_COEXIST: string = "OCI_ALLOY_REGION_COEXIST";
const DEFAULT_ALLOY_CONFIG_FILE_PATH: string = ConfigFileReader.expandUserHome(
  path.join("~", ".oci", "alloy-config.json")
);
let ociRegionCoexist: boolean;

let ociAlloyProvider: string;
let ociEnabledServiceSet: Set<string>;
let alloyConfiguredRegions: RegionMetadataSchema[];

function getParsedServiceName(serviceName: string): string {
  return serviceName.toLowerCase().replace("/[^a-z]/", "");
}

export function getAlloyConfigFilePath(): string {
  return process.env.OCI_ALLOY_CONFIG_FILE_PATH ?? DEFAULT_ALLOY_CONFIG_FILE_PATH;
}

function initializeAlloyConfiguration() {
  // Initialize the OciEnabledServiceSet
  ociEnabledServiceSet = new Set<string>();
  alloyConfiguredRegions = new Array<RegionMetadataSchema>();
  ociAlloyProvider = "";
  ociRegionCoexist = false;
  let configFilePath: string = getAlloyConfigFilePath();
  try {
    let content = fs.readFileSync(configFilePath, "utf8");
    if (!content) {
      return;
    }
    let alloyConfig;
    try {
      alloyConfig = JSON.parse(content) as AlloyConfigFileSchema;
    } catch (error) {
      console.log("Failure while parsing alloy config file: " + configFilePath + " ex:" + error);
    }
    if (alloyConfig !== undefined) {
      // Add configured services to OciEnabledServiceSet
      alloyConfig?.services?.forEach((service: string) => {
        ociEnabledServiceSet.add(getParsedServiceName(service));
      });

      // Add configured Regions to AlloyConfiguredRegions
      alloyConfig?.regions?.forEach((region: RegionMetadataSchema) => {
        alloyConfiguredRegions.push(region);
      });

      // Initialize Alloy provider
      if (alloyConfig.alloyProvider !== null) {
        ociAlloyProvider = alloyConfig.alloyProvider;
      }

      // Initialize ociRegionCoexist from Alloy config
      if (alloyConfig.ociRegionCoexist !== null) {
        ociRegionCoexist = Boolean(alloyConfig.ociRegionCoexist);
      }
    }
  } catch (error) {
    if (error.code === "ENOENT") {
      console.log(
        "Alloy config file not found at " +
          { configFilePath } +
          ", enabling all OCI services as default"
      );
      return;
    } else {
      console.log(
        "Enabling all OCI services as failsafe. There was an exception while trying to read or de-serialize the alloy config file at: " +
          configFilePath +
          " ex:" +
          error
      );
    }
  }
}

export function alloyConfiguration() {
  initializeAlloyConfiguration();
}

export function isServiceEnabled(service: string): boolean {
  // Convert the service name to lower case to avoid match failure in list
  service = getParsedServiceName(service);
  if (ociEnabledServiceSet == null) {
    initializeAlloyConfiguration();
  }
  // If OciEnabledServiceSet is empty then we enable all services.
  if (ociEnabledServiceSet.size == 0) {
    console.log("The OciEnabledServiceSet is empty, all OCI services are enabled");
    return true;
  }
  return ociEnabledServiceSet.has(service);
}

export function isOCIAlloyRegionCoexistEnabled(): boolean {
  let ociRegionCoexistFromEnvironmentVariable: boolean = Boolean(
    process.env.OCI_ALLOY_REGION_COEXIST ?? false
  );
  if (ociRegionCoexistFromEnvironmentVariable != null) {
    console.log(
      "The environment variable OCI_ALLOY_REGION_COEXIST is set to " +
        ociRegionCoexistFromEnvironmentVariable
    );
    const result: boolean = Boolean(ociRegionCoexistFromEnvironmentVariable);
    return result;
  }
  return ociRegionCoexist;
}

export function doesAlloyConfigFileExist(): boolean {
  return fs.existsSync(getAlloyConfigFilePath());
}

export function useOnlyAlloyRegions(): boolean {
  return (
    !isOCIAlloyRegionCoexistEnabled() &&
    (doesAlloyConfigFileExist() || alloyConfiguredRegions.length != 0)
  );
}

export function reInitialize() {
  Region.resetAlloyConfig();
  Realm.resetAlloyConfig();
  initializeAlloyConfiguration();
}
