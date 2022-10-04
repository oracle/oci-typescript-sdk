import { AuthenticationDetailsProvider, RegionProvider } from "./auth";
import { DefaultRequestSigner } from "../signer";
import { FetchHttpClient } from "../http";
import { composeRequest } from "../request-generator";
import { ConfigFileAuthenticationDetailsProvider } from "./config-file-auth";
import JWT from "jsonwebtoken";
import { handleErrorBody } from "../helper";

export class SessionAuthDetailProvider extends ConfigFileAuthenticationDetailsProvider
  implements AuthenticationDetailsProvider, RegionProvider {
  private skipRefresh: Boolean = false;

  constructor(configurationFilePath?: string, profile?: string) {
    super(configurationFilePath, profile);
  }

  public async getKeyId(): Promise<string> {
    return "ST$" + (await this.getSecurityToken());
  }

  async getSecurityToken(): Promise<string> {
    if (this.isValidSessionToken() || this.skipRefresh) {
      return this.sessionToken!;
    }
    return await this.refreshSessionToken();
  }

  private isValidSessionToken(): Boolean {
    let jwt: { [key: string]: any } | null = null;
    try {
      const secondsSinceEpoch = Math.round(Date.now() / 1000);
      jwt = JWT.decode(this.sessionToken!, { complete: true }) as object;

      if (jwt == null) {
        return false;
      } else if (jwt.payload && jwt.payload.exp > secondsSinceEpoch) {
        return true;
      }
      return false;
    } catch (e) {
      throw Error(`Failed to decode token, error: ${e}`);
    }
  }

  public async refreshSessionToken(): Promise<string> {
    this.skipRefresh = true; // avoid infinite loop on calling refreshSessionToken()
    try {
      const signer = new DefaultRequestSigner(this);
      const client = new FetchHttpClient(signer);
      const region = this.getRegion().regionId;

      const request = await composeRequest({
        baseEndpoint: `https://auth.${region}.oraclecloud.com`,
        path: `/v1/authentication/refresh`,
        method: "POST",
        defaultHeaders: { "content-type": "application/json" },
        bodyContent: JSON.stringify({ currentToken: this.sessionToken })
      });

      const response = await client.send(request);
      this.skipRefresh = false;
      if (response.status === 200) {
        const tokenJson = await response.json();
        const tokenStr = (tokenJson.token as unknown) as string;
        this.sessionToken = tokenStr;
        return this.sessionToken;
      } else if (response.status === 401) {
        const errBody = await handleErrorBody(response);
        throw new Error(
          `Authentication Error calling Identity to refresh token. Error: ${JSON.stringify(
            errBody
          )}`
        );
      } else {
        const errBody = await handleErrorBody(response);
        throw new Error(`Token cannot be refreshed. Error: ${JSON.stringify(errBody)}`);
      }
    } catch (e) {
      this.skipRefresh = false;
      throw new Error(`Failed to refresh the session token due to ${e}`);
    }
  }
}
