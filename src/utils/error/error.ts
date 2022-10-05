import { ErrorDoc } from "../../models/models";

interface errMsg {
  message: string;
}

export const transformAxiosError = (error: any) => {
  const status: number = error.response.status;
  const messages: string[] = [];

  error.response?.data?.errors?.forEach((msg: errMsg) => messages.push(msg.message));

  const errorDoc: ErrorDoc = {
    messages,
    status,
  };

  return errorDoc;
};
