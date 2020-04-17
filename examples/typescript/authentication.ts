import common = require("oci-common");

// TODO: Fill in config path / profile with appropriate values
const configurationFilePath = "~/.oci/config";
const profile = "DEFAULT";

export const provider: common.ConfigFileAuthenticationDetailsProvider = new common.ConfigFileAuthenticationDetailsProvider(
  configurationFilePath,
  profile
);
