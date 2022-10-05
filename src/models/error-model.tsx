export class HttpError {
  public messages: string[];
  public status: number;

  constructor(messages: string[], status: number) {
    this.messages = messages;
    this.status = status;
  }
}
