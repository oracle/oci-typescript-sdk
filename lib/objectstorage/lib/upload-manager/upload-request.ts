import { Content, RequestDetails } from "./types";

/*
 * Interface for Upload manager Request
 */
export interface UploadRequest {
  /*
   *  contains one of the ContenTypes (blob or filepath)
   */
  content: Content;
  /*
   * request details for upload manager
   */
  requestDetails: RequestDetails;
}
