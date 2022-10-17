import { ChangeEventHandler, useEffect, useRef, useState } from "react";

export interface SingleFilePickerProps {
  inputId: string;
  accept: string;
  errorText: string;
}

const SingleFilePicker: React.FC<SingleFilePickerProps> = ({ inputId, accept, errorText }) => {
  const [file, setFile] = useState<File | null>(null);
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
      setIsValid(true);
      fileIsValid = true;
    } else {
      setIsValid(false);
      fileIsValid = false;
    }
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
      <div className="image-upload">
        <div className="image-upload__preview">
          {previewUrl && <img src={previewUrl as string} alt="preview" />}
          {!previewUrl && <p>vyberte obrázek {accept} </p>}
        </div>
        <button type="button" onClick={pickImageHandler}>
          Vyberte obrázek
        </button>
      </div>
      {!isValid && <p>{errorText}</p>}
    </div>
  );
};

export default SingleFilePicker;
