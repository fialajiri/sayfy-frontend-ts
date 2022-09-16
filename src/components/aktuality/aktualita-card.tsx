import Image from "next/image";
import { AktualitaDoc } from "../../interfaces/models";

interface AktualitaCardProps {
  aktualita: AktualitaDoc;
}

const AktualitaCard: React.FC<AktualitaCardProps> = ({ aktualita }) => {
  return (
    <div className="aktualita-card__container">
      <div className="aktualita-card__text-container">
        <div className="aktualita-card__heading">{aktualita.title}</div>
        <div className="aktualita-card__datum">{aktualita.date}</div>
        <div
          className="aktualita-card__text"
          dangerouslySetInnerHTML={{ __html: aktualita.perex }}
        ></div>
      </div>

      <figure className="aktualita-card__image">
        <Image
          src={aktualita.image.imageUrl}
          alt={aktualita.title}
          layout="fill"
          objectFit="cover"
        />
      </figure>
    </div>
  );
};

export default AktualitaCard;
