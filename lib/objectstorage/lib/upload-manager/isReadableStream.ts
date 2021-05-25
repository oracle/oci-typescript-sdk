export default function isReadableStream(body: any): Boolean {
  // Check if the body object contains all property of a ReadableStream
  if (body.cancel && body.getReader && body.pipeThrough && body.pipeTo && body.tee) {
    return true;
  }
  return false;
}
