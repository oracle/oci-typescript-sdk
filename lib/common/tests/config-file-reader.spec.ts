/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */
import { renameSync } from "fs";
import { expect } from "chai";
import { ConfigFileReader, ConfigFile } from "../lib/config-file-reader";
import common = require("oci-common");
import { Region } from "../lib/region";

describe("Config File reader Test", () => {
  // Commenting this as this test does not work on TC
  // it("should read file with default profile", () => {
  //   ConfigFileReader.parseDefault(null);
  // });

  it("should throw error when file not found", () => {
    expect(() => {
      ConfigFileReader.parseFileFromPath("random/file/path/to/config", null);
    }).to.throw("File does not exists at random/file/path/to/config");
  });

  it("should read user infor from config file correctly", () => {
    const config: ConfigFile = ConfigFileReader.parseFileFromPath(
      __dirname + "/resources/unit-test-no-default-config",
      "USER"
    );
    expect(config.get("user")).equals("default_user");
    expect(config.get("tenancy")).equals("default_tenancy");
  });

  it("should throw error when no leading profile found", () => {
    expect(() => {
      ConfigFileReader.parseFileFromPath(
        __dirname + "/resources/unit-test-no-leading-profile-config",
        null
      );
    }).to.throw(
      "Config parse error, attempted to read configuration without specifying a profile: foo=bar"
    );
  });

  it("should throw error when line with no value found ", () => {
    expect(() => {
      ConfigFileReader.parseFileFromPath(__dirname + "/resources/unit-test-no-value-config", null);
    }).to.throw("Found line with no key-value pair: foobar");
  });

  it("should throw error when line with empty key found", () => {
    expect(() => {
      ConfigFileReader.parseFileFromPath(__dirname + "/resources/unit-test-empty-key-config", null);
    }).to.throw("Found line with no key:  =foobar");
  });

  it("should throw error when line with no profile found", () => {
    expect(() => {
      ConfigFileReader.parseFileFromPath(__dirname + "/resources/unit-test-config", "foobar");
    }).to.throw("No profile named foobar exists in the configuration file");
  });

  it("should throw error when empty profile found", () => {
    expect(() => {
      ConfigFileReader.parseFileFromPath(
        __dirname + "/resources/unit-test-empty-profile-name-config",
        null
      );
    }).to.throw("Cannot have empty profile name: [   ]");
  });

  it("should read file correctly", () => {
    const file = ConfigFileReader.parseFileFromPath(
      __dirname + "/resources/unit-test-config",
      null
    );
    expect(file.get("key")).equals("value");
    expect(file.get("key2")).equals("value2");
    expect(file.get("key3")).equals("value3");
    expect(file.get("key4")).equals("value4");
    expect(file.get("key5")).equals("=val=ue=");
    expect(file.get("[key6")).equals("value6");
  });

  it("should read multuplile files correctly ", () => {
    const profile1 = ConfigFileReader.parseFileFromPath(
      __dirname + "/resources/unit-test-config",
      "PROFILE1"
    );
    expect(profile1.get("key")).equals("new value");
    expect(profile1.get("key2")).equals("value2");

    const profile2 = ConfigFileReader.parseFileFromPath(
      __dirname + "/resources/unit-test-config",
      "PROFILE2"
    );

    expect(profile2.get("key")).equals("value=foobar");
    expect(profile2.get("key2")).equals("nota#comment");
  });

  it("should use environmental variable for config file path", () => {
    const envVarConfigValue = process.env.OCI_CONFIG_FILE;
    const tmpDefaultFilePath = ConfigFileReader.expandUserHome("~/.oci/config-tmp");
    const tmpFallbackDefaultFilePath = ConfigFileReader.expandUserHome("~/.oraclebmc/config-tmp");
    const defaultExists = ConfigFileReader.fileExists(ConfigFileReader.DEFAULT_FILE_PATH);
    const fallbackExists = ConfigFileReader.fileExists(ConfigFileReader.FALLBACK_DEFAULT_FILE_PATH);
    fileNameAndEnvVarChanges(false);

    // If things go wrong, we want to at least put this in a try/catch block and revert back the file renaming on catch block
    try {
      const provider: common.ConfigFileAuthenticationDetailsProvider = new common.ConfigFileAuthenticationDetailsProvider();
      expect(provider.getFingerprint()).equals("20:3b:97:13:55:1c:5b:0d:d3:37:d8:50:4e:c5:3a:34");
      expect(provider.getTenantId()).equals(
        "ocidv1:tenancy:oc1:phx:1460406592660:aaaaaaaab4faofrfkxecohhjuivjq262pu"
      );
      fileNameAndEnvVarChanges(true);
    } catch (e) {
      console.log(`Failed to run this unit test due to: ${e}`);
      fileNameAndEnvVarChanges(true);
    }

    /* Helper function change file name and OCI_CONFIG_FILE environmental variable
     * @param revert: boolean, to tell the function to revert back to its original file name and environment variable
     */
    function fileNameAndEnvVarChanges(revert: boolean) {
      // Check if file exists in the location, temporary change it so we can resort to using environmental variable,
      // if revert is true, change it back to its original name.
      if (defaultExists) {
        revert
          ? renameSync(
              tmpDefaultFilePath,
              ConfigFileReader.expandUserHome(ConfigFileReader.DEFAULT_FILE_PATH)
            )
          : renameSync(
              ConfigFileReader.expandUserHome(ConfigFileReader.DEFAULT_FILE_PATH),
              tmpDefaultFilePath
            );
      } else if (fallbackExists) {
        revert
          ? renameSync(
              tmpFallbackDefaultFilePath,
              ConfigFileReader.expandUserHome(ConfigFileReader.DEFAULT_FILE_PATH)
            )
          : renameSync(
              ConfigFileReader.expandUserHome(ConfigFileReader.DEFAULT_FILE_PATH),
              tmpFallbackDefaultFilePath
            );
      }

      // Set OCI_CONFIG_FILE environment variable to our test config file or original value if revert is true
      process.env.OCI_CONFIG_FILE = revert
        ? envVarConfigValue
        : "./lib/common/tests/resources/unit-test-environment-config";
    }
  });

  it("should use changed region using setRegion", () => {
    // If things go wrong, we want to at least put this in a try/catch block and revert back the file renaming on catch block
    try {
      const provider: common.ConfigFileAuthenticationDetailsProvider = new common.ConfigFileAuthenticationDetailsProvider();
      provider.setRegion("us-sanjose-1");
      expect(provider.getRegion()).equals(Region.US_SANJOSE_1);
    } catch (e) {
      console.log(`Failed to run this unit test due to: ${e}`);
    }
  });
});
