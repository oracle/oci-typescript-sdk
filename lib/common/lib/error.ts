export class OciError extends Error {
  constructor(
    public statusCode: number,
    public serviceCode: string,
    message: string,
    public opcRequestId: string | null
  ) {
    super(message);
  }
}
