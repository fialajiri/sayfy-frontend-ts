import Modal from "./modal";
import MultipleImageUpload from "../form-elements/multiple-image-upload";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FileData } from "../tiptap/tip-tap";
import { Editor } from "@tiptap/react";

export interface ModalFilePickerProps {
  editor: Editor | null;
  isShow: boolean;
  hide: () => void;
  setFiles: Dispatch<SetStateAction<FileData[]>>;
}

const ModalFilePicker: React.FC<ModalFilePickerProps> = ({ isShow, hide, setFiles, editor }) => {
  const [imagesValid, setImagesValid] = useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState<File[]>([]);
  const header = "Vyberte soubor, který chcete vložit";
  const errorText = "Vyberte maximálně 1 soubor.";
  const inputId = "modal-file-picker";

  useEffect(() => {
    if (selectedFile[0]) {
      const localUrl = URL.createObjectURL(selectedFile[0]);     
      setFiles((current) => [...current, { file: selectedFile[0], localUrl: localUrl }]);
      editor
        ?.chain()
        .focus()
        .setImage({ src: localUrl })
        .run();
    }
  }, [selectedFile]);

  const modalContent = (
    <MultipleImageUpload
      maxFiles={1}
      errorText={errorText}
      inputId={inputId}
      isValid={imagesValid}
      setImages={setSelectedFile}
      setIsValid={setImagesValid}
    />
  );

  return <Modal modalContent={modalContent} isShow={isShow} header={header} hide={hide} />;
};

export default ModalFilePicker;
