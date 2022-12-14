import PhotoModal from "../../ui-elements/photo-modal";
import ImageCard from "../../ui-elements/image-card";
import { Fragment, useState } from "react";
import { useAuth } from "../../../context/auth-context";
import { useRouter } from "next/router";
import Button from "../../ui-elements/button";

interface GalleryDetailProps { 
  title: string;
  images: string[];
}

const GalleryDetail: React.FC<GalleryDetailProps> = ({ title, images }) => {
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [modalImagePath, setModalImagePath] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isAdmin } = useAuth();
  const router = useRouter()

  const showPhotoModalHandler = (event: React.MouseEvent<HTMLLIElement>, index: number) => {
    event.preventDefault();
    setShowPhotoModal(true);
    setCurrentIndex(index);
    setModalImagePath(images[index]);
  };

  const nextImage = () => {
    let nextIndex = currentIndex + 1;
    if (nextIndex >= images.length) {
      nextIndex = 0;
    }
    setModalImagePath(images[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const prevImage = () => {
    let prevIndex = currentIndex - 1;
    if (prevIndex < 0) {
      prevIndex = images.length - 1;
    }
    setModalImagePath(images[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  const closePhotoModalHandler = () => {
    setShowPhotoModal(false);
  };

  return (
    <Fragment>
      <PhotoModal
        hide={closePhotoModalHandler}
        imageUrl={modalImagePath}
        isShow={showPhotoModal}
        next={nextImage}
        previous={prevImage}
        title={title}
      />
      <div className="gallery-detail__container">
        <h2 className="heading-secondary"> {title} </h2>
        {isAdmin && <Button onClick={() => router.push(`/fotogalerie/edit/${title}`)}>Editovat</Button>}
        <ul className="gallery-detail__image-container">
          {images.map((image, index) => (
            <li
              className="gallery-detail__list-item"
              id={index.toString()}
              onClick={(e) => showPhotoModalHandler(e, index)}
              key={image}
            >
              <ImageCard imageUrl={image} key={image} alt={image} />
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default GalleryDetail;
