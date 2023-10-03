/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import { rootCertificates } from "tls";
import { Agent as httpsAgent } from "https";
import FederationClient from "./models/federation-client";
import SessionKeySupplier from "./models/session-key-supplier";
import SecurityTokenAdapter from "./security-token-adapter";
import AuthUtils from "./helpers/auth-utils";
import { HttpRequest } from "../http-request";
import { FetchHttpClient } from "../http";

/**
 * This class gets a security token from the OKE Proxymux service by authenticating the request with the kubernetes service account,
 * passing along a temporary public key that is bounded to the service account.
 */

const OKE_WORKLOAD_IDENTITY_GENERIC_ERROR =
  "Failed to get a RPST token from Proxymux. See https://docs.oracle.com/en-us/iaas/Content/ContEng/Tasks/contenggrantingworkloadaccesstoresources.htm for more info.";

export default class X509FederationClientForOkeWorkloadIdentity implements FederationClient {
  securityTokenAdapter: SecurityTokenAdapter;
  private retry = 0;

  constructor(
    private proxymuxEndpoint: string,
    private kubernetesServiceAccountToken: string,
    private kubernetesServiceAccountCert: string,
    private sessionKeySupplier: SessionKeySupplier
  ) {
    this.securityTokenAdapter = new SecurityTokenAdapter("", this.sessionKeySupplier);
  }

  /**
   * Gets a security token. If there is already a valid token cached, it will be returned. Else this will make a call
   * to the OKE Proxymux service to get a new token, using the provided suppliers.
   *
   * This method is thread-safe.
   * @return the security token
   * @throws OciError If there is any issue with getting a token from the OKE Proxymux server
   */
  async getSecurityToken(): Promise<string> {
    if (this.securityTokenAdapter.isValid()) {
      return this.securityTokenAdapter.getSecurityToken();
    }
    return await this.refreshAndGetSecurityTokenInner(true);
  }

  /**
   * Return a claim embedded in the security token
   * @param key the name of the claim
   * @return the value of the claim or null if unable to find
   */
  async getStringClaim(key: string): Promise<string | null> {
    await this.refreshAndGetSecurityTokenInner(true);
    return this.securityTokenAdapter.getStringClaim(key);
  }

  async refreshAndGetSecurityToken(): Promise<string> {
    return await this.refreshAndGetSecurityTokenInner(false);
  }

  private async refreshAndGetSecurityTokenInner(
    doFinalTokenValidityCheck: boolean
  ): Promise<string> {
    // Check again to see if the JWT is still invalid, unless we want to skip that check
    if (!doFinalTokenValidityCheck || !this.securityTokenAdapter.isValid()) {
      this.sessionKeySupplier.refreshKeys();

      this.securityTokenAdapter = await this.getSecurityTokenFromServer();

      return this.securityTokenAdapter.getSecurityToken();
    }
    return this.securityTokenAdapter.getSecurityToken();
  }

  /**
   * Gets a security token from the OKE Proxymux service
   * @return the security token, which is basically a JWT token string
   */
  private async getSecurityTokenFromServer(): Promise<SecurityTokenAdapter> {
    const keyPair = this.sessionKeySupplier.getKeyPair();
    if (!keyPair) {
      throw Error("keyPair for session was not provided");
    }
    const publicKey = keyPair.getPublic();
    if (!publicKey) {
      throw Error("Public key is not present");
    }

    try {
      // Create request body and call auth service.
      const url = this.proxymuxEndpoint;
      const requestPayload = {
        podKey: AuthUtils.sanitizeCertificateString(publicKey)
      };

      let jsonPayload = JSON.stringify(requestPayload);
      jsonPayload = jsonPayload.replace(/\\n/g, "");

      const requestObj: HttpRequest = {
        uri: url,
        body: jsonPayload,
        method: "POST",
        headers: new Headers({
          "Authorization": `Bearer ${this.kubernetesServiceAccountToken}`,
          "Content-Type": "application/json"
        })
      };

      const httpOptions: { [key: string]: any } | undefined = {};
      httpOptions.agent = new httpsAgent({
        ca: [...rootCertificates, this.kubernetesServiceAccountCert]
      });

      const httpClient = new FetchHttpClient(null, null, httpOptions);

      // Call OKE Proxymux Service to get a base64 encoded JSON object which contains the auth token
      const response = await httpClient.send(requestObj);
      //TODO: Implement retry here
      // retry here
      if (response.status !== 200) {
        if (this.retry < 3) {
          this.retry += 1;
          return await this.getSecurityTokenFromServer();
        } else {
          throw Error(
            `Failed to call Proxymux for RPST token. Status: ${response.status}. ${OKE_WORKLOAD_IDENTITY_GENERIC_ERROR}`
          );
        }
      }
      this.retry = 0;

      // The response is a base64 blob of a json object, we need to decode and parse it
      let responseBody;
      try {
        responseBody = await response.text();
      } catch (e) {
        throw Error(
          `Failed to read response body from Proxymux. ${OKE_WORKLOAD_IDENTITY_GENERIC_ERROR}`
        );
      }

      let decodedBodyStr;
      try {
        decodedBodyStr = Buffer.from(responseBody, "base64").toString("utf8");
      } catch (e) {
        throw Error(
          `Invalid JSON response received from Proxymux. ${OKE_WORKLOAD_IDENTITY_GENERIC_ERROR}`
        );
      }

      let parsedBody;
      try {
        parsedBody = JSON.parse(decodedBodyStr);
      } catch (e) {
        throw Error(
          `Invalid JSON response received from Proxymux. ${OKE_WORKLOAD_IDENTITY_GENERIC_ERROR}`
        );
      }
      if (!parsedBody) {
        throw Error(
          `Invalid (undefined) RPST token received from Proxymux. ${OKE_WORKLOAD_IDENTITY_GENERIC_ERROR}`
        );
      }
      if (typeof parsedBody.token !== "string") {
        throw Error(
          `Invalid (string) RPST token received from Proxymux. ${OKE_WORKLOAD_IDENTITY_GENERIC_ERROR}`
        );
      }

      const token = parsedBody.token;
      if (!token || token.length === 0) {
        throw Error(
          `Invalid (empty) RPST token received from Proxymux. ${OKE_WORKLOAD_IDENTITY_GENERIC_ERROR}`
        );
      }
      if (token.length < 3) {
        throw Error(
          `Invalid RPST token received from Proxymux. ${OKE_WORKLOAD_IDENTITY_GENERIC_ERROR}`
        );
      }

      return new SecurityTokenAdapter(token.slice(3), this.sessionKeySupplier);
    } catch (e) {
      throw Error(`Failed to call Proxymux, error: ${e}. ${OKE_WORKLOAD_IDENTITY_GENERIC_ERROR}`);
    }
  }
}
