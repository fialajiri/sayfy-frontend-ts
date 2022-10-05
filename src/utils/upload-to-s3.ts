import axios from "axios";
import { AXIOS_CONFIG } from "../models/axios-config";

interface iData {
  key: string;
  signedUrl: string;
}

export const uploadFileToS3 = async (file: File, folderName: string): Promise<string> => {
  const filePath = `${folderName}/${file.name}`;
  const fileType = file.type;

  const {
    data: { key, signedUrl },
  }: { data: iData } = await axios.post(
    `${process.env.BACKEND_URL}/api/upload`,
    {
      filePath,
      fileType,
    },
    AXIOS_CONFIG
  );

  await axios.put(signedUrl, file, { headers: { "Content-Type": fileType } });

  return key;
};

export default uploadFileToS3
