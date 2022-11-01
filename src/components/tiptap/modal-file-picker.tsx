import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Editor } from "@tiptap/react";
import { FileData } from "./tip-tap";
import Modal from "../ui-elements/modal";
import SingleFilePicker from "../form-elements/single-file-picker";
import {
  replaceImageElementWithLink,
  ALLOWED_DOCUMENTS_FILES,
  ERROR_TEXT,
  VALID_FILE_TYPES,
} from "./editor-utils";

export interface ModalFilePickerProps {
  editor: Editor | null;
  isShow: boolean;
  hide: () => void;
  setFiles: Dispatch<SetStateAction<FileData[]>>;
}

const ModalFilePicker: React.FC<ModalFilePickerProps> = ({ isShow, hide, setFiles, editor }) => {
  const [imagesValid, setImagesValid] = useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState<File>();
  const [selectedFileName, setSelectedFileName] = useState("");

  useEffect(() => {
    if (selectedFile) {
      const localUrl = URL.createObjectURL(selectedFile);
      setFiles((current) => [...current, { file: selectedFile, localUrl: localUrl }]);
      editor?.chain().focus().setImage({ src: localUrl }).run();
      if (ALLOWED_DOCUMENTS_FILES.includes(selectedFile.type)) {
        replaceImageElementWithLink(localUrl, selectedFileName);
      }
    }
  }, [selectedFile, editor, selectedFileName, setFiles]);

  const onInputHandler = (file: File | undefined, fileIsValid: boolean, fileName: string) => {
    setSelectedFile(file);
    setImagesValid(fileIsValid);
    setSelectedFileName(fileName);
  };

  const modalContent = (
    <SingleFilePicker
      onInput={onInputHandler}
      inputId="picked-file"
      accept={VALID_FILE_TYPES}
      errorText={ERROR_TEXT}
      hide={hide}
    />
  );

  return (
    <Modal
      modalContent={modalContent}
      isShow={isShow}
      header="vyberte soubor"
      hide={hide}
      bottomButtonText="zavřít"
    />
  );
};

export default ModalFilePicker;
