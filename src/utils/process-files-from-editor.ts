import { FileData } from "../components/tiptap/tip-tap";
import { uploadFileToS3 } from "./upload-to-s3";

export const processFilesFromEditor = async (
  editorText: string,
  editorFiles: FileData[],
  folderName: string
): Promise<[editorFilesUrls: string[], textWithReplacedUrls: string]> => {
  const editorFilesUrls: string[] = [];
  let textWithReplacedFileUrls = editorText;

  for (const file of editorFiles) {
    const fileUrl = await uploadFileToS3(file.file, `aktuality/${folderName}`);
    textWithReplacedFileUrls = textWithReplacedFileUrls.replace(file.localUrl, fileUrl);
    editorFilesUrls.push(fileUrl);
  }

  return [editorFilesUrls, textWithReplacedFileUrls];
};
