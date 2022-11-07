import axios from "axios";
import { FileData } from "../../components/tiptap/tip-tap";
import { MethodEnum } from "../../hooks/http-hook";
import { AXIOS_CONFIG } from "../../models/axios-config";
import { HttpError } from "../../models/error-model";
import { processFiles, uploadFileToS3 } from "../upload-to-s3";

export interface aktualitaData {
  id?: string;
  title: string;
  perex: string;
  text: string;
  mainPhoto: File[];
  photoGallery: File[];
  filesFromEditor: FileData[];
}

export const saveAktualita = async (aktualitaData: aktualitaData): Promise<void> => {
  const { id, title, perex, text, mainPhoto, photoGallery, filesFromEditor } = aktualitaData;
  const editorFilesUrls: string[] = [];
  let textWithReplacedFileUrls = text;

  for (const file of filesFromEditor) {
    const fileUrl = await uploadFileToS3(file.file, `aktuality/${title}`);
    textWithReplacedFileUrls = textWithReplacedFileUrls.replace(file.localUrl, fileUrl);
    editorFilesUrls.push(fileUrl);
  }

  const photoGalleryUrls = await processFiles(photoGallery, `aktuality/${title}`);
  const mainPhotoUrl = await uploadFileToS3(mainPhoto[0], `aktuality/${title}`);

  

  const body = {
    title,
    perex,
    text: textWithReplacedFileUrls,
    mainPhoto: mainPhotoUrl,
    photoGallery: photoGalleryUrls,
    filesFromEditor: editorFilesUrls,
  };

  const url = id
    ? `${process.env.BACKEND_URL}/api/aktualita/${id}`
    : `${process.env.BACKEND_URL}/api/aktualita`;
  const method = id ? MethodEnum.PUT : MethodEnum.POST;

  try {
    await axios(url, {
      method,
      data: body,
      headers: AXIOS_CONFIG.headers,
      withCredentials: AXIOS_CONFIG.withCredentials,
    });
  } catch (err: any) {
    throw new HttpError(err.message, err.response?.data, err.response?.status);
  }
};
