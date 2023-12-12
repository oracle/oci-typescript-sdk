/* eslint-disable @typescript-eslint/indent */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { ConfigFileReader, Region } from "oci-common";
import { Realm } from "oci-common";
import { expect } from "chai";
import { error } from "console";

describe("DeveloperToolConfigTest", () => {
  beforeEach(() => {
    Region.resetDeveloperToolConfiguration();
  });

  it("testDeveloperToolConfigFile_regionExists", () => {
    const file = ConfigFileReader.expandUserHome(
      "~/lib/common/tests/resources/developer-tool-configuration.json"
    );
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

  it("testDeveloperToolConfigFile_regionDoesNotExists", () => {
    try {
      const file = ConfigFileReader.expandUserHome(
        "~/lib/common/tests/resources/developer-tool-configuration.json"
      );
      expect(ConfigFileReader.fileExists(file)).to.be.false;
    } catch (error) {
      expect("Error: File does not exist").equals(error);
    }
  });

  it("testDeveloperToolConfigUsingEnvVar_regionExists", () => {
    const developertoolConfigurationFile =
      "lib/common/tests/resources/developer-tool-configuration.json";
    process.env.OCI_DEVELOPER_TOOL_CONFIGURATION_FILE_PATH = developertoolConfigurationFile;
    const region = Region.fromRegionId("us-phoenix-1");
    const US_PHOENIX_1 = Region.register(
      "us-phoenix-1",
      Realm.register("oc1", "oraclecloud.com", true),
      "phx",
      true
    );
    expect(US_PHOENIX_1.realm.realmId).equals(region.realm.realmId);
  });

  it("testDeveloperToolConfigUsingEnvVar_regionDoesNotExists", () => {
    const developertoolConfigurationFile =
      "lib/common/tests/resources/developer-tool-configuration.json";
    process.env.OCI_DEVELOPER_TOOL_CONFIGURATION_FILE_PATH = developertoolConfigurationFile;
    expect(Region.fromRegionId("unknown")).equals(undefined);
  });

  it("testDeveloperToolConfigUsingEnvVar_RegisterNewRegion", () => {
    const developertoolConfigurationFile =
      "lib/common/tests/resources/developer-tool-configuration.json";
    process.env.OCI_DEVELOPER_TOOL_CONFIGURATION_FILE_PATH = developertoolConfigurationFile;
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

  it("testDeveloperToolConfigEnvVar_withoutRegionCoexist", () => {
    const developertoolConfigurationFile =
      "lib/common/tests/resources/developer-tool-configuration.json";
    process.env.OCI_DEVELOPER_TOOL_CONFIGURATION_FILE_PATH = developertoolConfigurationFile;
    const region = Region.fromRegionId("us-chicago-1");
    expect(region.regionId).equals("us-chicago-1");
    expect(Array.from(Region.values()).some(region => region === Region.US_CHICAGO_1)).to.be.false;
  });
});
