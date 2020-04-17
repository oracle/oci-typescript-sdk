import { HttpClient } from "./http";
import { AuthenticationDetailsProvider } from "./auth/auth";

export type RequireOnlyOne<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> &
  {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Record<Exclude<Keys, K>, undefined>>;
  }[Keys];

interface ClientParams {
  httpClient?: HttpClient;
  authenticationDetailsProvider?: AuthenticationDetailsProvider;
}

/*
 * Type to intialize service clients
 */
export type AuthParams = RequireOnlyOne<ClientParams>;
