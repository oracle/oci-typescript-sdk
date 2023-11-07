/* eslint-disable @typescript-eslint/indent */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { ConfigFileReader, Region } from "oci-common";
import { Realm } from "oci-common";
import { expect } from "chai";
import { error } from "console";

describe("AlloyConfigTest", () => {
  beforeEach(() => {
    Region.resetAlloyConfig();
  });

  it("testAlloyConfigFile_regionExists", () => {
    const file = ConfigFileReader.expandUserHome("~/lib/common/tests/resources/alloy-config.json");
    if (ConfigFileReader.fileExists(file)) {
      const region = Region.fromRegionId("phx");
      const US_PHOENIX_1 = Region.register(
        "us-phx-1",
        Realm.register("RTC", "foobar-oraclecloud.com"),
        "phx"
      );
      expect(US_PHOENIX_1).equals(region);
    }
  });

  it("testAlloyConfigFile_regionDoesNotExists", () => {
    try {
      const file = ConfigFileReader.expandUserHome(
        "~/lib/common/tests/resources/alloy-config.json"
      );
      expect(ConfigFileReader.fileExists(file)).to.be.false;
    } catch (error) {
      expect("Error: File does not exist").equals(error);
    }
  });

  it("testAlloyConfigUsingEnvVar_regionExists", () => {
    const alloyFile = "lib/common/tests/resources/alloy-config.json";
    process.env.OCI_ALLOY_CONFIG_FILE_PATH = alloyFile;
    const region = Region.fromRegionId("us-phoenix-1");
    const US_PHOENIX_1 = Region.register(
      "us-phoenix-1",
      Realm.register("oc1", "oraclecloud.com", true),
      "phx",
      true
    );
    expect(US_PHOENIX_1.realm.realmId).equals(region.realm.realmId);
  });

  it("testAlloyConfigUsingEnvVar_regionDoesNotExists", () => {
    const alloyFile = "lib/common/tests/resources/alloy-config.json";
    process.env.OCI_ALLOY_CONFIG_FILE_PATH = alloyFile;
    expect(Region.fromRegionId("unknown")).equals(undefined);
  });

  it("testAlloyConfigUsingEnvVar_RegisterNewRegion", () => {
    const alloyFile = "lib/common/tests/resources/alloy-config.json";
    process.env.OCI_ALLOY_CONFIG_FILE_PATH = alloyFile;
    const region = Region.fromRegionId("us-phoenix-1");
    const US_PHOENIX_1 = Region.register(
      "us-phoenix-1",
      Realm.register("oc1", "oraclecloud.com", true),
      "phx",
      true
    );
    expect(US_PHOENIX_1.realm.realmId).equals(region.realm.realmId);
    expect(Object.values(Region).some(region => region === "us-phoenix-1")).to.be.false;
  });

  it("testAlloyConfigEnvVar_withoutRegionCoexist", () => {
    const alloyFile = "lib/common/tests/resources/alloy-config.json";
    process.env.OCI_ALLOY_CONFIG_FILE_PATH = alloyFile;
    const region = Region.fromRegionId("us-chicago-1");
    expect(region.regionId).equals("us-chicago-1");
    expect(Array.from(Region.values()).some(region => region === Region.US_CHICAGO_1)).to.be.false;
  });
});
