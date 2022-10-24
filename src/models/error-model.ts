export interface ErrorData {
  errors: [
    {
      message: string;
    }
  ];
}

export class HttpError extends Error {
  public status: string | undefined;  
  public messages: string[] | undefined;

  constructor(message:string | undefined, errorData: ErrorData | undefined, status: string | undefined) {
    super(message)
    if (errorData) {
      this.messages = errorData.errors.map((error) => error.message);
    } else {
      this.messages = [];
    }
    this.status = status;
  }
}
