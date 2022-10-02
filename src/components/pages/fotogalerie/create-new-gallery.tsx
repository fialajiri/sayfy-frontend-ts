import React, { useState } from "react";
import FloatingLabelInput from "../../form-elements/floating-label-input";
import MultipleImageUpload from "../../form-elements/multiple-image-upload";
import Button from "../../ui-elements/button";
import createNewGallery from "../../../utils/gallery-utils/create-new-gallery";
import { GalleryDoc } from "../../../interfaces/models";

const CreateNewGallery: React.FC = () => {
  const [galleryName, setGalleryName] = useState<string>("");
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [imagesValid, setImagesValid] = useState<boolean>(false);

  const submitFormHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let newGallery: GalleryDoc | null;
    let key;
    console.log(key);
    try {
      newGallery = await createNewGallery(galleryName, selectedImages);
      console.log(newGallery);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={submitFormHandler}>
      <FloatingLabelInput
        id="gallery_title"
        label="Název Photogalerie"
        type="text"
        placeholder="název"
        value={galleryName}
        setValue={setGalleryName}
      />
      <MultipleImageUpload
        maxFiles={50}
        errorText="Vyberte maximálně 50 obrázků"
        inputId="images"
        isValid={imagesValid}
        setImages={setSelectedImages}
        setIsValid={setImagesValid}
      />
      <Button>submit</Button>
    </form>
  );
};

export default CreateNewGallery;
