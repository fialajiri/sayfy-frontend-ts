import axios from "axios";
import { PropoziceDoc } from "../../models/models";

export const getPropozice = async (): Promise<PropoziceDoc> => {
  const documentId = "635c21aea369bc4f74025d04";

  const { data: propozice }: { data: PropoziceDoc } = await axios.get(
    `${process.env.BACKEND_URL}/api/static-page/${documentId}`
  );

  return propozice;
};
