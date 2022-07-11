/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import { expect } from "chai";
import { existsSync, readFileSync } from "fs";
import { Realm } from "../lib/realm";
import { Region } from "../lib/region";
import { RegionMetadataSchema } from "../lib/region-metadata-schema";

describe("Test Region", () => {
  const regionId = "foo-bar-1";
  const realm: Realm = Realm.register("ocx", "ocx-cloud.com");

  const existingRegions = Region.values();

  it("all regions from regions.json should be registered", function() {
    const filePath = __dirname + "/resources/regions.json";
    expect(existsSync(filePath)).to.be.true;
    try {
      const fileContent = readFileSync(filePath, "utf8");
      const regionMetadata = JSON.parse(fileContent) as RegionMetadataSchema[];
      expect(regionMetadata && regionMetadata.length > 0 && Array.isArray(regionMetadata)).to.be
        .true;
      const regionsList = Region.values();
      regionMetadata.forEach(metadata => {
        expect(RegionMetadataSchema.isValidSchema(metadata)).to.be.true;
        expect(regionsList.map(e => e.regionId)).to.include(metadata.regionIdentifier);
        if (metadata != null) {
          expect(metadata.regionIdentifier).equals(
            Region.getRegionIdFromShortCode(metadata.regionKey)
          );
        }
      });
    } catch (error) {
      throw error;
    }
  });

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

  it("should return all the regions registered in SDK", function() {
    const regionsList = Region.values();
    expect(regionsList).to.be.an("array");
    expect(regionsList.map(e => e.regionId)).to.include("us-phoenix-1");
    expect(regionsList.map(e => e.realm)).to.include(Realm.OC1);
  });
});
