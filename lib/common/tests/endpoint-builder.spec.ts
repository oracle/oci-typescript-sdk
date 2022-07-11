/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import { expect } from "chai";
import { Region } from "../lib/region";
import { EndpointBuilder } from "../lib/endpoint-builder";

describe("Test EndpointBuilder ", () => {
  const template = "https://foobar.{region}.{secondLevelDomain}";
  const regionId = "us";
  const secondLevelDomain = "oraclecloud.com";
  const region = Region.US_PHOENIX_1;

  it("should create an end point url ", function() {
    const url = EndpointBuilder.createEndpointFromRegionIdAndSecondLevelDomain(
      template,
      regionId,
      secondLevelDomain
    );
    expect(url).equals("https://foobar.us.oraclecloud.com");
  });

  it("should create an end point url for given region ", function() {
    const url = EndpointBuilder.createEndpointFromRegion(template, region);
    expect(url).equals("https://foobar.us-phoenix-1.oraclecloud.com");
  });

  it("should create an end point url for regionId ", function() {
    const url = EndpointBuilder.createEndpointFromRegionId(template, regionId);
    expect(url).equals("https://foobar.us.oraclecloud.com");
  });

  it("should throw error for an empty template ", function() {
    const url = function() {
      EndpointBuilder.createEndpointFromRegionIdAndSecondLevelDomain(
        "",
        regionId,
        secondLevelDomain
      );
    };
    expect(url).to.throw("Template can not be undefined or empty");
  });

  it("should throw error for an empty regionId ", function() {
    const url = function() {
      EndpointBuilder.createEndpointFromRegionIdAndSecondLevelDomain(
        template,
        "",
        secondLevelDomain
      );
    };
    expect(url).to.throw("regionId can not be undefined or empty");
  });

  it("should throw error for an empty template ", function() {
    const url = function() {
      EndpointBuilder.createEndpointFromRegionIdAndSecondLevelDomain(template, regionId, "");
    };
    expect(url).to.throw("secondLevelDomain can not be undefined or empty");
  });

  it("should handle dotted regionId with no given endpointServiceName by extracting service name from template", function() {
    let regionId = "acmecorp.com";
    const url = EndpointBuilder.createEndpointFromRegionId(template, regionId);
    expect(url).equals("https://foobar.acmecorp.com");
  });

  it("should handle dotted regionId with given endpointServiceName by using endpointServiceName", function() {
    let regionId = "acmecorp.com";
    let endpointServiceName = "myService";
    const url = EndpointBuilder.createEndpointFromRegionId(template, regionId, endpointServiceName);
    expect(url).equals("https://myService.acmecorp.com");
  });
});
