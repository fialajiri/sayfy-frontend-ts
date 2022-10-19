import { Fragment, useEffect, useRef, useState } from "react";
import { Plus } from "phosphor-react";
import Button from "../ui-elements/button";
import Image from "next/image";
import FloatingLabelInput from "./floating-label-input";

export interface SingleFilePickerProps {
  inputId: string;
  accept?: string;
  errorText: string;
  onInput: (file: File | undefined, fileIsValid: boolean, fileName: string) => void;
  hide: () => void;
}

const SingleFilePicker: React.FC<SingleFilePickerProps> = ({
  inputId,
  accept,
  errorText,
  onInput,
  hide,
}) => {
  const [file, setFile] = useState<File | undefined>();
  const [fileName, setFileName] = useState<string>("");
  const [fileType, setFileType] = useState<string>("");
  const [previewUrl, setPreviewUrl] = useState<string | ArrayBuffer | null>();
  const [isValid, setIsValid] = useState(false);

  const filePickerRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!file) {
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }, [file]);

  const pickImageHandler = () => {
    filePickerRef.current?.click();
  };

  const pickedHandler = (event: React.FormEvent<HTMLInputElement>) => {
    let pickedFile;
    let fileIsValid = isValid;
    event.currentTarget.files;

    if (event.currentTarget.files && event.currentTarget.files.length === 1) {
      pickedFile = event.currentTarget.files[0];
      setFile(pickedFile);
      setFileType(pickedFile.type.split("/")[0]);
      setIsValid(true);
      fileIsValid = true;
    } else {
      setIsValid(false);
      fileIsValid = false;
    }
  };

  const confirmFileHandler = () => {
    onInput(file, isValid, fileName);
    hide();
  };

  return (
    <div>
      <input
        id={inputId}
        style={{ display: "none" }}
        ref={filePickerRef}
        type="file"
        accept={accept}
        onChange={pickedHandler}
      />
      <div className="single-file-picker__container">
        {previewUrl && fileType === "image" && (
          <Image
            src={previewUrl as string}
            alt="preview"
            width={300}
            height={200}
            layout="fixed"
            objectFit="contain"
          />
        )}

        {file && !file.type.includes("image") && (
          <div className="single-file-picker__file-input-container">
            <FloatingLabelInput
              id="file-name"
              placeholder="jméno souboru"
              label="Text odkazu"
              type="text"
              value={fileName}
              setValue={setFileName}
            />
            <p className="single-file-picker__file-name">{file.name}</p>
          </div>
        )}
        <Button size="small" type="button" inverse onClick={pickImageHandler}>
          <Plus size={24} weight="bold" />
        </Button>
        {file && (
          <Button size="small" type="button" onClick={confirmFileHandler}>
            Vložit soubor
          </Button>
        )}
        {!isValid && <p className="single-file-picker__error">{errorText}</p>}
      </div>
    </div>
  );
};

export default SingleFilePicker;
