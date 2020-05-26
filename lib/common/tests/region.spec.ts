/**
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import { expect } from "chai";
import { Region } from "../lib/region";
import { Realm } from "../lib/realm";

describe("Test Region", () => {
  const regionId = "foo-bar-1";
  const realm: Realm = Realm.register("ocx", "ocx-cloud.com");

  const existingRegions = [
    Region.AP_MUMBAI_1,
    Region.AP_SEOUL_1,
    Region.AP_SYDNEY_1,
    Region.AP_HYDERABAD_1,
    Region.AP_MELBOURNE_1,
    Region.AP_OSAKA_1,
    Region.AP_TOKYO_1,
    Region.CA_MONTREAL_1,
    Region.CA_TORONTO_1,
    Region.EU_FRANKFURT_1,
    Region.EU_ZURICH_1,
    Region.SA_SAOPAULO_1,
    Region.UK_LONDON_1,
    Region.US_ASHBURN_1,
    Region.US_PHOENIX_1,
    Region.EU_AMSTERDAM_1,
    Region.ME_JEDDAH_1,
    Region.US_LANGLEY_1,
    Region.US_LUKE_1,
    Region.US_GOV_ASHBURN_1,
    Region.US_GOV_CHICAGO_1,
    Region.US_GOV_PHOENIX_1,
    Region.UK_GOV_LONDON_1
  ];
  it("should register a region sucessfully ", function() {
    const region = Region.register(regionId, realm);
    expect(region.regionId).equals(regionId);
  });

  it("should return a region from registered region set", function() {
    const region = Region.fromRegionId(regionId);
    expect(region.regionId).to.be.ok;
    expect(region.realm).to.be.ok;
  });

  it("should not fetch region for an empty RegionId", function() {
    const region = function() {
      Region.fromRegionId("");
    };
    expect(region).to.throw("RegionId can not be empty or undefined");
  });

  it("should not register an an empty RegionId", function() {
    const region = function() {
      Region.register("", realm);
    };
    expect(region).to.throw("RegionId can not be empty or undefined");
  });

  it("should not register an existing Region", function() {
    existingRegions.map(region => {
      let regionError = function() {
        Region.register(region.regionId, realm);
      };
      expect(regionError).to.throw(
        `Region ${region.regionId} is already associated with another Realm`
      );
    });
  });
});
