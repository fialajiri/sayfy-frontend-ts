import { useRouter } from "next/router";
import React, { Fragment, useState } from "react";
import { HttpError } from "../../../models/error-model";
import { GalleryDoc } from "../../../models/models";
import FloatingLabelInput from "../../form-elements/floating-label-input";
import MultipleImageUpload from "../../form-elements/multiple-image-upload";
import Button from "../../ui-elements/button";
import ImageCard from "../../ui-elements/image-card";
import { X } from "phosphor-react";
import LoadingSpinner from "../../ui-elements/loading-spinner";
import ErrorModal from "../../ui-elements/error-modal";
import { updateExistingGallery } from "../../../utils/gallery/create-new-gallery";

interface UpdateGalleryProps {
  gallery: GalleryDoc;
}

const UpdateGallery: React.FC<UpdateGalleryProps> = ({ gallery }) => {
  const [galleryName, setGalleryName] = useState(gallery.title);
  const [galleryImages, setGalleryImages] = useState(gallery.images);
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [imagesValid, setImagesValid] = useState<boolean>(false);
  const [error, setError] = useState<HttpError | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const deleteImageHandler = (image: string) => {
    setGalleryImages((currestate) => currestate.filter((img) => img !== image));
  };

  const updateGalleryHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      await updateExistingGallery(gallery.id, galleryName, galleryImages, selectedImages);
      router.push("/fotogalerie");
      setIsLoading(false);
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
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && <LoadingSpinner asOverlay />}
      <div className="edit-gallery__container">
        <h3 className="heading-tertiary">Upravit Fotogalerii</h3>
        <form className="edit-gallery__form" onSubmit={updateGalleryHandler}>
          <FloatingLabelInput
            id="gallery-title"
            label="Název Fotogalerie"
            type="text"
            value={galleryName}
            setValue={setGalleryName}
          />
          <MultipleImageUpload
            maxFiles={100}
            errorText="Vyberte maximálně 100 obrázků"
            inputId="images"
            isValid={imagesValid}
            setImages={setSelectedImages}
            setIsValid={setImagesValid}
            buttonLabel="Vyberte fotografie"
          />
          <div className="edit-gallery__form--button-container">
            <Button>Upravit</Button>
          </div>
        </form>
        <ul className="edit-gallery__image-list">
          {galleryImages.map((image, index) => (
            <li className="edit-gallery__image-list--item" id={index.toString()} key={image}>
              <ImageCard imageUrl={image} key={image} alt={image} />
              <X
                onClick={deleteImageHandler.bind(this, image)}
                className="edit-gallery__image-list--icon"
                size={40}
                weight="bold"
                alt="delete icon"
              />
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default UpdateGallery;
