import { RequireOnlyOne } from "oci-common";
import { requests } from "oci-objectstorage";

interface ContentTypes {
  blob?: Blob;
  filePath?: string;
}

type PutObjectContent = "putObjectBody" | "contentLength";
type UploadPartContent = "uploadPartBody" | "contentLength";
type ContentMD5HashDetails<T extends { contentMD5?: string }> = Pick<T, "contentMD5">;
type uploadPartData = "uploadId" | "uploadPartNum";

export type Content = RequireOnlyOne<ContentTypes>;
export type PutObjectContentDetails = Pick<requests.PutObjectRequest, PutObjectContent>;
export type UploadPartContentDetails = Pick<requests.UploadPartRequest, UploadPartContent>;
export type PutObjectContentMD5HashDetails = ContentMD5HashDetails<requests.PutObjectRequest>;
export type UploadPartContentMD5HashDetails = ContentMD5HashDetails<requests.UploadPartRequest>;
export type UploadPartDetails = Pick<requests.UploadPartRequest, uploadPartData>;
export type RequestDetails = Omit<requests.PutObjectRequest, PutObjectContent>;
