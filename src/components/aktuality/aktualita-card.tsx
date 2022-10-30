import Image from "next/image";
import Link from "next/link";
import { AktualitaDoc } from "../../models/models";

interface AktualitaCardProps {
  aktualita: AktualitaDoc;
  detail?: boolean;
}

const AktualitaCard: React.FC<AktualitaCardProps> = ({ aktualita, detail }) => {
  if (detail) {
    return (
      <div className="aktualita-card-detail__container">
        <div className="aktualita-card-detail__text-container">
          <h3>{aktualita.title}</h3>
          <div className="aktualita-card-detail__datum">
            {new Date(aktualita.createdAt).toLocaleDateString("cs-CZ")}
          </div>
          <div
            className="aktualita-card-detail__perex"
            dangerouslySetInnerHTML={{ __html: aktualita.perex }}
          ></div>
        </div>
        <figure className="aktualita-card-detail__image">
          <Image src={aktualita.mainPhoto} alt={aktualita.title} layout="fill" objectFit="cover" />
        </figure>
      </div>
    );
  }

  return (
    <div className="aktualita-card__container">
      <div className="aktualita-card__text-container">
        <Link href={`aktuality/${aktualita.aktualitaUrl}`}>
          <a>
            <h3 className="heading-tertiary aktualita-card__heading">{aktualita.title}</h3>
          </a>
        </Link>
        <div className="aktualita-card__datum">
          {new Date(aktualita.createdAt).toLocaleDateString("cs-CZ")}
        </div>
      </div>

      <figure className="aktualita-card__image">
        <Image src={aktualita.mainPhoto} alt={aktualita.title} layout="fill" objectFit="cover" />
      </figure>
    </div>
  );
};

export default AktualitaCard;
