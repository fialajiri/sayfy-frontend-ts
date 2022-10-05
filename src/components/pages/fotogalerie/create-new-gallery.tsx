import React, { Fragment, useState } from "react";
import FloatingLabelInput from "../../form-elements/floating-label-input";
import MultipleImageUpload from "../../form-elements/multiple-image-upload";
import Button from "../../ui-elements/button";
import createNewGallery from "../../../utils/gallery-utils/create-new-gallery";
import { ErrorDoc, GalleryDoc } from "../../../models/models";
import { transformAxiosError } from "../../../utils/error/error";
import ErrorModal from "../../ui-elements/error-modal";
import { useAuth } from "../../../context/auth-context";
import Router from "next/router";
import LoadingSpinner from "../../ui-elements/loading-spinner";

const CreateNewGallery: React.FC = () => {
  const [galleryName, setGalleryName] = useState<string>("");
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [imagesValid, setImagesValid] = useState<boolean>(false);
  const [error, setError] = useState<ErrorDoc | null>(null);
  const { isAdmin } = useAuth();

  const submitFormHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let newGallery: GalleryDoc | null;
    try {
      newGallery = await createNewGallery(galleryName, selectedImages);
      console.log(newGallery);
    } catch (err) {
      setError(transformAxiosError(err));
    }
  };

  const clearError = () => {
    setError(null);
  };

  if (!isAdmin) {
    Router.push("/login");
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
              maxFiles={50}
              errorText="Vyberte maximálně 50 obrázků"
              inputId="images"
              isValid={imagesValid}
              setImages={setSelectedImages}
              setIsValid={setImagesValid}
            />
            <div className="new-gallery--button-container">
              <Button>submit</Button>
            </div>
          </form>
        </div>
      </Fragment>
    );
  }
};

export default CreateNewGallery;
