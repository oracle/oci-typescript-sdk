import { Method } from "./request-generator";
/*
 * Interface for RequestOptions passed to Signer
 */
export interface HttpRequest {
  method: Method;
  headers: Headers;
  uri: string;
  body?: any;
}
