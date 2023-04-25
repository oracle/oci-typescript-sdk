/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import { expect } from "chai";
import { Region } from "../lib/region";
import { Realm } from "../lib/realm";
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

  it("should return correct realm specific endpoint for a known region", function() {
    let serviceEndpointTemplatePerRealm = {
      "oc1": "https://oc1.{region}.{secondLevelDomain}",
      "oc8": "https://oc8.{region}.{secondLevelDomain}"
    };
    let region1 = Region.register("test_region_1", Realm.OC1);
    let region2 = Region.register("test_region_2", Realm.OC8);
    const url1 = EndpointBuilder.createEndpointFromRegion(
      template,
      region1,
      "",
      serviceEndpointTemplatePerRealm,
      true
    );
    const url2 = EndpointBuilder.createEndpointFromRegion(
      template,
      region2,
      "",
      serviceEndpointTemplatePerRealm,
      true
    );
    expect(url1).equals("https://oc1.test_region_1.oraclecloud.com");
    expect(url2).equals("https://oc8.test_region_2.oraclecloud8.com");
  });

  it("should fallback to the correct realm specific endpoint template for an unknown region falling back to oc1", function() {
    let serviceEndpointTemplatePerRealm = {
      "oc1": "https://oc1.{region}.{secondLevelDomain}"
    };
    let regionId = "unknown_region_1";
    const url = EndpointBuilder.createEndpointFromRegionId(
      template,
      regionId,
      "",
      serviceEndpointTemplatePerRealm,
      true
    );
    expect(url).equals("https://oc1.unknown_region_1.oraclecloud.com");
  });

  it("should populate the endpoint with multiple parameters from query and path params correctly", function() {
    let endpoint =
      "https://{namespaceName+Dot}{bucketName}objectstorage.us-phoenix-1.{namespaceName+Dot}oci.oraclecloud.com";
    let pathParams = {
      "{namespaceName}": "test-namespace-1"
    };
    let queryParams = {
      "bucketName": "test-bucket-1"
    };
    const requiredParams = new Set<string>(["namespaceName", "bucketName"]);
    const url = EndpointBuilder.populateServiceParamsInEndpoint(
      endpoint,
      pathParams,
      queryParams,
      requiredParams
    );
    expect(url).equals(
      "https://test-namespace-1.test-bucket-1objectstorage.us-phoenix-1.test-namespace-1.oci.oraclecloud.com"
    );
  });

  it("should populate the endpoint with multiple parameters from path params correctly with missing params", function() {
    let endpoint =
      "https://{namespaceName+Dot}{bucketName}objectstorage.us-phoenix-1.{namespaceName+Dot}oci.oraclecloud.com";
    let pathParams = {
      "{namespaceName}": "test-namespace-1"
    };
    const requiredParams = new Set<string>(["namespaceName", "bucketName"]);
    let queryParams = {};
    const url = EndpointBuilder.populateServiceParamsInEndpoint(
      endpoint,
      pathParams,
      queryParams,
      requiredParams
    );
    expect(url).equals(
      "https://test-namespace-1.objectstorage.us-phoenix-1.test-namespace-1.oci.oraclecloud.com"
    );
  });

  it("should populate the endpoint with multiple parameters from path params correctly with only required params", function() {
    let endpoint =
      "https://{namespaceName+Dot}{bucketName+Dot}objectstorage.us-phoenix-1.{namespaceName+Dot}oci.oraclecloud.com";
    let pathParams = {
      "{bucketName}": "test-bucket-1",
      "{namespaceName}": "test-namespace-1"
    };
    const requiredParams = new Set<string>(["bucketName"]);
    let queryParams = {};
    const url = EndpointBuilder.populateServiceParamsInEndpoint(
      endpoint,
      pathParams,
      queryParams,
      requiredParams
    );
    expect(url).equals("https://test-bucket-1.objectstorage.us-phoenix-1.oci.oraclecloud.com");
  });
});
