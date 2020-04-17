import { BrowserBlob } from "./browser-blob";
import { NodeFSBlob } from "./node-fs-blob";
import { UploadOptions } from "./upload-options";
import { UploadableBlob } from "./uploadable-blob";
import { Content } from "./types";

/*
 * @Summary getBlob method to retreive proper type of blob
 *
 * @param Content
 * @param UploadOptions
 * @returns UploadableBlob Object
 */
export function getContent(content: Content, options: UploadOptions): UploadableBlob {
  const chunkSize = options.allowedMemoryUsage / options.maxConcurrentUploads;
  if (content.blob) return new BrowserBlob(content.blob, chunkSize);
  else if (content.filePath) return new NodeFSBlob(content.filePath, chunkSize);
  else throw Error("Unidentified Blob type Found");
}
