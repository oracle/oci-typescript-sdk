/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import common = require("oci-common");

/*
 * TODO: Fill in config path / profile with appropriate values to opt out of SDK
 * default config path / profile. (~/.oci/config & DEFAULT respectively.)
 *
 * NOTE: SDK, will revert to using default profile if required fields are not found from specified profile.
 */
const configurationFilePath = "<your_config_file_path>";
const profile = "<your_config_profile_name>";

export const provider: common.ConfigFileAuthenticationDetailsProvider = new common.ConfigFileAuthenticationDetailsProvider(
  configurationFilePath,
  profile
);
