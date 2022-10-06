import React, { Fragment, useState } from "react";
import FloatingLabelInput from "../../form-elements/floating-label-input";
import MultipleImageUpload from "../../form-elements/multiple-image-upload";
import Button from "../../ui-elements/button";
import createNewGallery from "../../../utils/gallery/create-new-gallery";
import ErrorModal from "../../ui-elements/error-modal";
import { useAuth } from "../../../context/auth-context";
import { useRouter } from "next/router";
import LoadingSpinner from "../../ui-elements/loading-spinner";
import { HttpError } from "../../../models/error-model";

const CreateNewGallery: React.FC = () => {
  const [galleryName, setGalleryName] = useState<string>("");
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [imagesValid, setImagesValid] = useState<boolean>(false);
  const [error, setError] = useState<HttpError | null>(null);
  const { isAdmin } = useAuth();

  const router = useRouter();

  const submitFormHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await createNewGallery(galleryName, selectedImages);
    } catch (err: any) {
      console.log(err)
      setError(err);
    }
  };

  const clearError = () => {
    setError(null);
  };

  if (!isAdmin) {
    router.push("/login");
    return <LoadingSpinner asOverlay />;
  } else {
    return (
      <Fragment>
        <ErrorModal error={error} onClear={clearError} />
        <div className="new-gallery__container">
          <h3 className="heading-tertiary">Nová fotogalerie</h3>
          <form className="new-gallery__form" onSubmit={submitFormHandler}>
            <FloatingLabelInput
              id="gallery_title"
              label="Název Photogalerie"
              type="text"
              placeholder="název"
              value={galleryName}
              setValue={setGalleryName}
            />
            <MultipleImageUpload
              maxFiles={150}
              errorText="Vyberte maximálně 100 obrázků"
              inputId="images"
              isValid={imagesValid}
              setImages={setSelectedImages}
              setIsValid={setImagesValid}
            />
            <div className="new-gallery__form--button-container">
              <Button>Vytvořit</Button>
            </div>
          </form>
        </div>
      </Fragment>
    );
  }
};

export default CreateNewGallery;
