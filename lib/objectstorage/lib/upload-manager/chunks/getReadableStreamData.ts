import { Buffer } from "buffer";

export async function* getReadableStreamData(data: ReadableStream): AsyncGenerator<Buffer> {
  const reader = data.getReader();

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) return;
      yield Buffer.from(value);
    }
  } catch (e) {
    throw e;
  } finally {
    reader.releaseLock();
  }
}
