import axios from "axios";
import { HttpError } from "../../models/error-model";
import { AktualitaDoc } from "../../models/models";

export const getAktuality = async () => {
  let aktuality: AktualitaDoc[];

  try {
    const data = await axios.get(`${process.env.BACKEND_URL}/api/aktualita`);
    aktuality = data.data;
  } catch (err: any) {
    throw new HttpError(err.message, err.response?.data, err.response?.status);
  }

  return aktuality;
};

export const getAktualita = async (idOrTitle: string) => {
  let aktualita: AktualitaDoc;

  try {
    const data = await axios.get(`${process.env.BACKEND_URL}/api/aktualita/${idOrTitle}`);
    aktualita = data.data;
  } catch (err: any) {
    throw new HttpError(err.message, err.response?.data, err.response?.status);
  }

  return aktualita;
};
