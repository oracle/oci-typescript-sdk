import { AuthenticationDetailsProvider, RegionProvider } from "./auth";
import { DefaultRequestSigner } from "../signer";
import { FetchHttpClient } from "../http";
import { composeRequest } from "../request-generator";
import { ConfigFileAuthenticationDetailsProvider } from "./config-file-auth";
import { handleErrorBody } from "../helper";
import { Region } from "../region";

export class SessionAuthDetailProvider extends ConfigFileAuthenticationDetailsProvider
  implements AuthenticationDetailsProvider, RegionProvider {
  constructor(configurationFilePath?: string, profile?: string) {
    super(configurationFilePath, profile);
  }

  public async getKeyId(): Promise<string> {
    return "ST$" + (await this.getSecurityToken());
  }

  async getSecurityToken(): Promise<string> {
    return this.sessionToken!;
  }

  public async refreshSessionToken(): Promise<string> {
    try {
      const signer = new DefaultRequestSigner(this);
      const client = new FetchHttpClient(signer);
      const regionId = this.getRegion().regionId;
      const region = Region.fromRegionId(regionId);
      const secondLevelDomain = region.realm.secondLevelDomain;

      const request = await composeRequest({
        baseEndpoint: `https://auth.${regionId}.${secondLevelDomain}`,
        path: `/v1/authentication/refresh`,
        method: "POST",
        defaultHeaders: { "content-type": "application/json" },
        bodyContent: JSON.stringify({ currentToken: this.sessionToken })
      });

      const response = await client.send(request);
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
      throw new Error(`Failed to refresh the session token due to ${e}`);
    }
  }
}
