export interface ErrorData {
  errors: [
    {
      message: string;
    }
  ];
}

export class HttpError {
  public status: string | undefined;
  public messages: string[] | undefined;

  constructor(errorData: ErrorData | undefined, status: string | undefined) {
    if (errorData) {
      this.messages = errorData.errors.map((error) => error.message);
    } else {
      this.messages = [];
    }
    this.status = status;
  }
}
