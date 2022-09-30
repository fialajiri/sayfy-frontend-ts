import React, { useState } from "react";
import FloatingLabelInput from "../../form-elements/floating-label-input";
import MultipleImageUpload from "../../form-elements/multiple-image-upload";
import Button from "../../ui-elements/button";
import axios from "axios";

const CreateNewGallery: React.FC = () => {
  const [galleryName, setGalleryName] = useState<string>("");
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [imagesValid, setImagesValid] = useState<boolean>(false);

  const submitFormHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    selectedImages.forEach(async (image) => {
      const imageName = image.name;
      const imageType = image.type;
      console.log(imageType);

      const { data } = await axios.post("http://localhost:5000/api/upload", {
        fileName: imageName,
        fileType: imageType,
      });

      console.log(data);

      try {
        await axios.put(data.signedUrl, image, {
          headers: {
            "Content-Type": imageType,
          },
        });
      } catch (err) {
        console.log(err);
      }
    });
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
