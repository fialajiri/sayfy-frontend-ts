import Image from "next/image";
import { AktualitaDoc } from "../../models/models";
import ImageCard from "../ui-elements/image-card";

interface AktualitaDetailProps {
  aktualita: AktualitaDoc;
}

const AktualitaDetail: React.FC<AktualitaDetailProps> = ({ aktualita }) => {
  const { title, createdAt, mainPhoto, perex, text, photoGallery } = aktualita;

  console.log(photoGallery.length)

  return (
    <div className="aktualita-detail__container">
      <h2>{title}</h2>
      <time className="aktualita-detail__date">
        {new Date(createdAt).toLocaleDateString("cs-CZ")}
      </time>
      <div className="aktualita-detail__perex" dangerouslySetInnerHTML={{ __html: perex }}></div>
      <figure className="aktualita-detail__main-image">
        <Image src={mainPhoto} alt={title} layout="fill" />
      </figure>

      <div className="aktualita-detail__text" dangerouslySetInnerHTML={{ __html: text }}></div>
      {photoGallery.length > 0 && <h3>Fotogalerie</h3>}
      {photoGallery.length > 0 && (
        <div className="aktualita-detail__gallery">
          {photoGallery.map((image) => (
            <ImageCard imageUrl={image} key={image} alt={image}  />
          ))}
        </div>
      )}
    </div>
  );
};

export default AktualitaDetail;
