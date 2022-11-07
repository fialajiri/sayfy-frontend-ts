import axios from "axios";
import { AXIOS_CONFIG } from "../../models/axios-config";
import { HttpError } from "../../models/error-model";

export const deleteAktualita = async (id: string): Promise<void> => {
  try {
    await axios.delete(`${process.env.BACKEND_URL}/api/aktualita/${id}`, AXIOS_CONFIG);
  } catch (err: any) {
    throw new HttpError(err.message, err.response?.data, err.response?.status);
  }
};
