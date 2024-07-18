export class HttpError extends Error {
  status: number;

  response: Response;

  statusText: string;

  constructor(response: Response) {
    const { status, statusText } = response;

    super(statusText || String(status));

    this.name = 'HttpError';
    this.status = status;
    this.statusText = statusText;
    this.response = response;
  }
}