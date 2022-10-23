import React, { useState, useEffect, useRef, Fragment } from "react";
import Image from "next/image";
import Button from "../ui-elements/button";
import { createFileFromUrl } from "../../utils/create-file-from-url";

export interface MultipleImageUploadProps {
  isValid: boolean;
  maxFiles: number;
  errorText?: string;
  className?: string;
  inputId: string;
  buttonLabel: string;
  initialFilesUrl?: string[];
  setImages: (images: File[]) => void;
  setIsValid: (isValid: boolean) => void;
}

const MultipleImageUpload: React.FC<MultipleImageUploadProps> = (props) => {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const filePickerRef = useRef<any>(null);

  useEffect(() => {
    const setInitialFiles = async () => {
      const fileArray = []
      if (props.initialFilesUrl) {
        for (let i = 0; i < props.initialFilesUrl.length; i++) {
          const file = await createFileFromUrl(props.initialFilesUrl[i]);
          fileArray.push(file)
          setSelectedImages((currentImages) => [
            ...currentImages,
            URL.createObjectURL(file),
          ]);
        }
      }
      props.setImages(fileArray)
    };
    setInitialFiles();
  }, []);

  const clearImageSelection = () => {
    props.setImages([]);
    setSelectedImages([]);
  };

  const pickImageHandler = () => {
    filePickerRef.current.click();
  };

  const pickerHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > props.maxFiles) {
      alert(`Vyberte maximálně ${props.maxFiles} soubory`);
      filePickerRef.current.value = "";
      clearImageSelection();
    } else if (event.target.files && event.target.files.length <= props.maxFiles) {
      const arrayToUpload = Array.from(event.target.files);
      const fileArray = Array.from(event.target.files).map((file) => URL.createObjectURL(file));

      setSelectedImages(fileArray);
      props.setImages(arrayToUpload);
      props.setIsValid(true);
    } else {
      props.setIsValid(false);
    }
  };

  const renderPhotos = (source: string[]) => {
    return source.map((photo) => {
      return (
        <div className="multiple-image-upload__image-container" key={photo}>
          <Image src={photo} key={photo} layout="fill" objectFit="contain"  alt="Obrázek v galerii" />
        </div>
      );
    });
  };

  return (
    <Fragment>
      <div className={`${props.className} multiple-image-upload__container`}>
        <input
          id={props.inputId}
          style={{ display: "none" }}
          ref={filePickerRef}
          type="file"
          accept=".jpg,.png,.jpeg"
          multiple
          onChange={pickerHandler}
        />

        <div className="multiple-image-upload__form">
          <div className="multiple-image-upload__form__preview">
            {selectedImages && renderPhotos(selectedImages)}
            {!selectedImages && <p>vyberte obrázky (typu png/jpg/jpeg) </p>}
          </div>
          <Button
            className="multiple-image-upload__form__button"
            type="button"            
            onClick={pickImageHandler}
          >
           {props.buttonLabel}
          </Button>
        {!props.isValid && <p className="multiple-image-upload__error-text">{props.errorText}</p>}
        </div>
      </div>
    </Fragment>
  );
};

export default MultipleImageUpload;
