import React, { Fragment, useState } from "react";
import FloatingLabelInput from "../../form-elements/floating-label-input";
import MultipleImageUpload from "../../form-elements/multiple-image-upload";
import Button from "../../ui-elements/button";
import createNewGallery from "../../../utils/gallery/create-new-gallery";
import ErrorModal from "../../ui-elements/error-modal";
import { useRouter } from "next/router";
import LoadingSpinner from "../../ui-elements/loading-spinner";
import { HttpError } from "../../../models/error-model";

const CreateNewGallery: React.FC = () => {
  const [galleryName, setGalleryName] = useState("");
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [imagesValid, setImagesValid] = useState(false);
  const [error, setError] = useState<HttpError | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const submitFormHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(false);

    try {
      await createNewGallery(galleryName, selectedImages);
      setIsLoading(false);
      router.push("/fotogalerie");
    } catch (err: any) {
      setError(err);
      setIsLoading(false);
    }
  };

  const clearError = () => {
    setError(null);
  };

  return (
    <Fragment>
      {isLoading && <LoadingSpinner asOverlay />}
      <ErrorModal error={error} onClear={clearError} />
      <div className="new-gallery__container">
        <h3 className="heading-tertiary">Nová fotogalerie</h3>
        <form className="new-gallery__form" onSubmit={submitFormHandler}>
          <FloatingLabelInput
            id="gallery_title"
            label="Název Fotogalerie"
            type="text"
            placeholder="název"
            value={galleryName}
            setValue={setGalleryName}
          />
          <MultipleImageUpload
            maxFiles={200}
            errorText="Vyberte maximálně 200 obrázků"
            inputId="images"
            isValid={imagesValid}
            setImages={setSelectedImages}
            setIsValid={setImagesValid}
            buttonLabel="Vyberte fotografie"
          />
          <div className="new-gallery__form--button-container">
            <Button>Vytvořit</Button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default CreateNewGallery;
