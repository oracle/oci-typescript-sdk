/**
 * Copyright (c) 2020, 2026 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import { expect } from "chai";
import packageJson = require("../../../package.json");
import common = require("oci-common");
import * as core from "oci-core";
import * as identity from "oci-identity";
import * as objectstorage from "oci-objectstorage";

function expectExportedFunction(value: unknown, exportName: string): void {
  expect(value, exportName).to.be.a("function");
}

describe("Package entry points", function() {
  it("loads package metadata used by the npm entry point", function() {
    expect(packageJson.name).to.equal("oci-sdk");
    expect(packageJson.main).to.equal("./target/index.js");
    expect(packageJson.typings).to.equal("./target/index.d.ts");
    expect(packageJson.dependencies["oci-common"]).to.equal("file:lib/common");
    expect(packageJson.dependencies["oci-core"]).to.equal("file:lib/core");
    expect(packageJson.dependencies["oci-identity"]).to.equal("file:lib/identity");
    expect(packageJson.dependencies["oci-objectstorage"]).to.equal("file:lib/objectstorage");
  });

  it("loads direct service package entry points", function() {
    expectExportedFunction(
      common.ConfigFileAuthenticationDetailsProvider,
      "oci-common ConfigFileAuthenticationDetailsProvider"
    );
    expectExportedFunction(
      common.ResourcePrincipalAuthenticationDetailsProvider.builder,
      "oci-common ResourcePrincipalAuthenticationDetailsProvider.builder"
    );
    expectExportedFunction(core.ComputeClient, "oci-core ComputeClient");
    expectExportedFunction(identity.IdentityClient, "oci-identity IdentityClient");
    expectExportedFunction(
      objectstorage.ObjectStorageClient,
      "oci-objectstorage ObjectStorageClient"
    );
  });
});
