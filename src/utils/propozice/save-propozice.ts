import axios from "axios";
import { FileData } from "../../components/tiptap/tip-tap";
import { AXIOS_CONFIG } from "../../models/axios-config";
import { HttpError } from "../../models/error-model";
import { processFilesFromEditor } from "../process-files-from-editor";

export interface PropoziceData {
  id: string;
  title: string;
  text: string;
  filesFromEditor: FileData[];
}

export const savePropozice = async (propoziceData: PropoziceData): Promise<void> => {
  const { id, title, text, filesFromEditor } = propoziceData;

  const [editorFilesUrls, textWithReplacedFileUrls] = await processFilesFromEditor(
    text,
    filesFromEditor,
    'propozice'
  );

  const body = {
    title,
    text: textWithReplacedFileUrls,
    assets: editorFilesUrls,
  };

  try {
    await axios.put(`${process.env.BACKEND_URL}/api/static-page/${id}`, body, AXIOS_CONFIG);
  } catch (err: any) {
    throw new HttpError(err.message, err.response?.data, err.response?.status);
  }
};
