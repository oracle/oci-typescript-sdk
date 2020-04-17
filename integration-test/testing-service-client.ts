import * as querystring from "querystring";
import common = require("oci-common");

export class TestingServiceClient {
  private SDK_TESTING_SERVICE_BASE_URL: string = "http://localhost:9000/SDKTestingService/";
  private sessionId: string = "";
  private httpClient: common.HttpClient = new common.FetchHttpClient(null);

  /**
   * startSession
   */
  public async startSession(): Promise<string> {
    const url: string = this.SDK_TESTING_SERVICE_BASE_URL + "sessions";
    let headers = new Headers();
    headers.append("accept", "text/plain");
    headers.append("Content-Type", "application/json");
    const response = await this.httpClient.send({
      uri: url,
      method: "POST",
      headers: headers,
      body: JSON.stringify({ language: "TypeScript" })
    });

    this.sessionId = await response.text();
    return this.sessionId;
  }

  public async endSession() {
    const url: string = this.SDK_TESTING_SERVICE_BASE_URL + "sessions/" + this.sessionId;
    let headers = new Headers();

    await this.httpClient.send({ uri: url, method: "DELETE", headers: headers });
  }

  public async getTestingConfig(
    serviceName: string,
    clientName: string,
    apiName: string
  ): Promise<object> {
    const qs: string = querystring.stringify({
      sessionId: this.sessionId,
      serviceName,
      clientName,
      apiName,
      lang: "TypeScript"
    });

    const url: string = this.SDK_TESTING_SERVICE_BASE_URL + "config?" + qs;
    let headers = new Headers();
    const response = await this.httpClient.send({ uri: url, method: "GET", headers: headers });

    return await response.json();
  }

  public async getRequests(serviceName: string, apiName: string): Promise<object[]> {
    const qs: string = querystring.stringify({
      sessionId: this.sessionId,
      serviceName,
      apiName,
      lang: "TypeScript"
    });

    const url: string = this.SDK_TESTING_SERVICE_BASE_URL + "request?" + qs;
    const response = await this.httpClient.send({
      uri: url,
      method: "GET",
      headers: new Headers(),
      body: {}
    });

    if (response.ok) {
      return await response.json();
    } else {
      const body = await response.text();
      console.log(body);
      throw new Error(body);
    }
  }

  public async isApiEnabled(serviceName: string, apiName: string): Promise<boolean> {
    const qs: string = querystring.stringify({
      sessionId: this.sessionId,
      serviceName,
      apiName,
      lang: "TypeScript"
    });

    const url: string = this.SDK_TESTING_SERVICE_BASE_URL + "request/enable?" + qs;
    let headers = new Headers();
    headers.append("accept", "text/plain");
    const response = await this.httpClient.send({
      uri: url,
      method: "GET",
      headers: headers
    });

    return (await response.text()) === "true";
  }

  public async validateResponse(
    containerId: string,
    serviceName: string,
    requestName: string,
    request: any,
    responseName: string,
    response: any
  ): Promise<string> {
    const isListResponse: boolean = Array.isArray(response);

    const dataToValidate = {
      containerId,
      requestClass: "com.oracle.bmc." + serviceName + ".requests." + requestName,
      requestJson: JSON.stringify(request),
      responseClass: "com.oracle.bmc." + serviceName + ".responses." + responseName,
      responseJson: JSON.stringify(response),
      listResponse: isListResponse
    };

    const qs: string = querystring.stringify({
      sessionId: this.sessionId,
      lang: "TypeScript"
    });

    const url: string = this.SDK_TESTING_SERVICE_BASE_URL + "response?" + qs;
    let headers = new Headers();
    headers.append("accept", "text/plain");
    const resp = await this.httpClient.send({
      uri: url,
      method: "POST",
      body: JSON.stringify(dataToValidate),
      headers: headers
    });

    return await resp.text();
  }

  public async validateError(
    containerId: string,
    serviceName: string,
    requestName: string,
    request: any,
    err: common.OciError
  ): Promise<string> {
    const errorToValidate = {
      containerId,
      requestClass: "com.oracle.bmc." + serviceName + ".requests." + requestName,
      requestJson: JSON.stringify(request),
      errorJson: JSON.stringify({
        statusCode: err.statusCode,
        code: err.serviceCode,
        message: err.message
      })
    };

    const qs: string = querystring.stringify({
      sessionId: this.sessionId,
      lang: "TypeScript"
    });

    const url: string = this.SDK_TESTING_SERVICE_BASE_URL + "error?" + qs;
    let headers = new Headers();
    headers.append("accept", "text/plain");
    const resp = await this.httpClient.send({
      uri: url,
      method: "POST",
      body: JSON.stringify(errorToValidate),
      headers: headers
    });

    return await resp.text();
  }

  public async getEndPoint(serviceName: string, client: string, apiName: string) {
    const qs: string = querystring.stringify({
      sessionId: this.sessionId,
      serviceName: serviceName,
      clientName: client,
      apiName: apiName,
      lang: "Typescript"
    });

    const url: string = this.SDK_TESTING_SERVICE_BASE_URL + "endpoint?" + qs;
    let headers = new Headers();
    headers.append("accept", "text/plain");
    const resp = await this.httpClient.send({
      uri: url,
      method: "GET",
      headers: headers
    });

    return await resp.text();
  }
}
