import { Readable } from "stream";

/*
 * Interface for UploadableBlob.
 */
export interface UploadableBlob extends Blob {
  size: number;
  type: string;
  getData(): Promise<Readable | Blob>;
  getMD5Hash(): Promise<string>;
  slice(
    start?: number | undefined,
    end?: number | undefined,
    contentType?: string | undefined
  ): UploadableBlob;
}
