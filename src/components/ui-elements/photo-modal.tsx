import Image from "next/image";
import { ArrowLeft, ArrowRight, X } from "phosphor-react";
import { Fragment } from "react";
import Backdrop from "./backdrop";
import Modal from "./modal";

interface PhotoModalProps {
  title: string;
  isShow: boolean;
  imageUrl: string;
  next(): void;
  previous(): void;
  hide(): void;
}

const PhotoModal: React.FC<PhotoModalProps> = ({
  imageUrl,
  isShow,
  title,
  next,
  previous,
  hide,
}) => {
  const header = `Živé Teplice ${title}`;

  const imagePath = imageUrl.includes('https') ? imageUrl : `${process.env.IMAGE_DOMAIN}/${imageUrl}`

  const modalContent = (
    <div className="photo-modal">
      <figure className="photo-modal__image--container">
        <Image src={imagePath} alt="gallery photo" layout="fill" objectFit="cover" />

        <div className="photo-modal__buttons">
          <button className="photo-modal__button photo-modal__button--left" onClick={previous}>
            <ArrowLeft className="photo-modal__icon" weight="bold" />
          </button>
          <button className="photo-modal__button photo-modal__button--right" onClick={next}>
            <ArrowRight className="photo-modal__icon" weight="bold" />
          </button>
          <button className="photo-modal__button photo-modal__button--close" onClick={hide}>
            <X className="photo-modal__icon" weight="bold" />
          </button>
        </div>
      </figure>
    </div>
  );

  return (
    <Fragment>
      {isShow && <Backdrop onClick={hide} />}
      {isShow && modalContent}
    </Fragment>
  );

  return <Modal isShow={isShow} header={""} modalContent={modalContent} hide={hide} />;
};

export default PhotoModal;
