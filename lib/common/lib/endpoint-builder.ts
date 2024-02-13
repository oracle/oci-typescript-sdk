/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import { Region } from "./region";
import { Realm } from "./realm";
import { logger } from "./log";

export class EndpointBuilder {
  public static createEndpointFromRegion(
    template: string,
    region: Region,
    endpointServiceName?: string,
    serviceEndpointTemplatePerRealm?: any,
    useRealmSpecificEndpointTemplate?: boolean
  ): string {
    const regionId = region.regionId;
    const secondLevelDomain = region.realm.secondLevelDomain;
    const templateToUse = EndpointBuilder.checkAndGetEndpointTemplateToUse(
      region.realm,
      template,
      serviceEndpointTemplatePerRealm,
      useRealmSpecificEndpointTemplate
    );
    // If regionId is a dotted region, call createEndpointForDottedRegion
    if (regionId.includes(".")) {
      return EndpointBuilder.createEndpointForDottedRegion(
        templateToUse,
        regionId,
        endpointServiceName
      );
    } else {
      // Default to using regionId and secondLevelDomain
      return EndpointBuilder.createEndpointFromRegionIdAndSecondLevelDomain(
        templateToUse,
        regionId,
        secondLevelDomain
      );
    }
  }

  private static checkAndGetEndpointTemplateToUse(
    realm: Realm,
    defaultTemplate: string,
    serviceEndpointTemplatePerRealm?: any,
    useRealmSpecificEndpointTemplate?: boolean
  ): string {
    let templateToUse = defaultTemplate;
    if (useRealmSpecificEndpointTemplate) {
      templateToUse = EndpointBuilder.getEndpointTemplateToUse(
        realm,
        defaultTemplate,
        serviceEndpointTemplatePerRealm
      );
    } else if (EndpointBuilder.isRealmSpecificEndpointTemplateEnabledViaEnv()) {
      templateToUse = EndpointBuilder.getEndpointTemplateToUse(
        realm,
        defaultTemplate,
        serviceEndpointTemplatePerRealm
      );
    }
    return templateToUse;
  }
  private static getEndpointTemplateToUse(
    realm: Realm,
    defaultTemplate: string,
    serviceEndpointTemplatePerRealm?: any
  ) {
    const realmId = realm.realmId.toLowerCase();
    if (serviceEndpointTemplatePerRealm) {
      if (serviceEndpointTemplatePerRealm[realmId]) {
        logger.info(
          `Using ${serviceEndpointTemplatePerRealm[realmId]} as the realm specific endpoint template`
        );
        return serviceEndpointTemplatePerRealm[realmId];
      }
    }
    logger.info(
      `Realm specific endpoint template for realm ${realmId} does not exist. Falling back to endpoint template : ${defaultTemplate}`
    );
    return defaultTemplate;
  }

  public static createEndpointFromRegionId(
    template: string,
    regionId: string,
    endpointServiceName?: string,
    serviceEndpointTemplatePerRealm?: any,
    useRealmSpecificEndpointTemplate?: boolean
  ): string {
    // If regionId is a dotted region, call createEndpointForDottedRegion
    if (regionId.includes("."))
      return EndpointBuilder.createEndpointForDottedRegion(template, regionId, endpointServiceName);

    const region = Region.fromRegionId(regionId);
    if (region) {
      const templateToUse = EndpointBuilder.checkAndGetEndpointTemplateToUse(
        region.realm,
        template,
        serviceEndpointTemplatePerRealm,
        useRealmSpecificEndpointTemplate
      );
      return EndpointBuilder.createEndpointFromRegion(templateToUse, region, endpointServiceName);
    }

    // If regionId does not return a known region, check to see if there is a fallback second level domain from env.OCI_DEFAULT_REALM
    // If no fallback for second level domain, default it to OC1's second level domain.
    const fallbackSecondLevelDomain = process.env["OCI_DEFAULT_REALM"];
    let templateToUse = template;

    if (!fallbackSecondLevelDomain) {
      templateToUse = EndpointBuilder.checkAndGetEndpointTemplateToUse(
        Realm.OC1,
        template,
        serviceEndpointTemplatePerRealm,
        useRealmSpecificEndpointTemplate
      );
    }

    let secondLevelDomain = fallbackSecondLevelDomain
      ? fallbackSecondLevelDomain
      : Realm.OC1.secondLevelDomain;

    console.log(
      `Unknown regionId [${regionId}], falling back to using ${secondLevelDomain} as the second level domain.`
    );
    return EndpointBuilder.createEndpointFromRegionIdAndSecondLevelDomain(
      templateToUse,
      regionId,
      secondLevelDomain
    );
  }

  public static createEndpointFromRegionIdAndSecondLevelDomain(
    template: string,
    regionId: string,
    secondLevelDomain: string
  ): string {
    if (!template) throw Error("Template can not be undefined or empty");
    if (!regionId) throw Error("regionId can not be undefined or empty");
    if (!secondLevelDomain) throw Error("secondLevelDomain can not be undefined or empty");
    return template.replace("{secondLevelDomain}", secondLevelDomain).replace("{region}", regionId);
  }

  public static createEndpointForDottedRegion(
    template: string, // https://identity.{region}.oci.{secondLevelDomain}
    regionId: string,
    endpointServiceName?: string
  ): string {
    if (endpointServiceName) {
      return `https://${endpointServiceName}.${regionId}`;
    } else {
      const serviceName = template.substring(template.lastIndexOf("/") + 1, template.indexOf(".")); // Extract service name
      return `https://${serviceName}.${regionId}`;
    }
  }

  public static populateServiceParamsInEndpoint(
    endpoint: string,
    pathParams: any,
    queryParams: any,
    requiredParams: Set<string>
  ): string {
    if (!/\{.*\}/.test(endpoint)) return endpoint;
    const regexForParameters = /\{([^}]+)\}/g;
    let paramFromEndpoint;
    let populatedEndpoint = endpoint;
    while ((paramFromEndpoint = regexForParameters.exec(endpoint))) {
      let appendDotInEndpointTemplate = false;
      let paramName = paramFromEndpoint[1];
      if (paramName.indexOf("+Dot") !== -1 || paramName.indexOf(".") !== -1) {
        appendDotInEndpointTemplate = true;
        paramName = paramFromEndpoint[1].replace("+Dot", "").replace(".", "");
      }
      let value = "";
      if (requiredParams.has(paramName)) {
        value = EndpointBuilder.getParameterValueFromPathAndQueryParams(
          paramName,
          pathParams,
          queryParams
        );
      }
      if (value) {
        if (appendDotInEndpointTemplate) value += ".";
        populatedEndpoint = populatedEndpoint.replace(paramFromEndpoint[0], value);
      } else {
        populatedEndpoint = populatedEndpoint.replace(paramFromEndpoint[0], "");
      }
    }
    return populatedEndpoint;
  }

  private static getParameterValueFromPathAndQueryParams(
    parameterName: string,
    pathParams: any,
    queryParams: any
  ): string {
    let paramNameForPath = `{${parameterName}}`;
    if (pathParams[paramNameForPath] && typeof pathParams[paramNameForPath] === "string")
      return pathParams[paramNameForPath];
    if (queryParams[parameterName] && typeof queryParams[parameterName] === "string")
      return queryParams[parameterName];
    return "";
  }

  private static isRealmSpecificEndpointTemplateEnabledViaEnv(): boolean {
    if (process.env.OCI_REALM_SPECIFIC_SERVICE_ENDPOINT_TEMPLATE_ENABLED === "true") {
      return true;
    }
    return false;
  }
}
