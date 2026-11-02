/**
 * Copyright (c) 2026 Oracle and/or its affiliates. All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import sdk = require("../target/index");
import common = require("oci-common");

const region: common.Region = sdk.common.Region.US_PHOENIX_1;
const computeClient: typeof sdk.core.ComputeClient = sdk.core.ComputeClient;
const identityClient: typeof sdk.identity.IdentityClient = sdk.identity.IdentityClient;

void region;
void computeClient;
void identityClient;
