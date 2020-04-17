import { expect } from "chai";
import { ConfigFileReader, ConfigFile } from "../lib/config-file-reader";

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
});
