import { useRouter } from "next/router";
import { useAuth } from "../../../context/auth-context";
import { GalleryDoc } from "../../../models/models";
import Button from "../../ui-elements/button";
import ImageCard from "../../ui-elements/image-card";

interface FotoGaleriePageProps {
  galleries: GalleryDoc[];
}

const FotoGaleriePage: React.FC<FotoGaleriePageProps> = ({ galleries }) => {
  const router = useRouter();
  const {isAdmin} = useAuth()
  const imageOnClickHandler = (e: React.MouseEvent<HTMLLIElement>, path: string) =>
    router.push(`fotogalerie/${path}`);

  return (
    <div className="fotogalerie-page__container">
      <h2 className="heading-secondary">Fotogalerie</h2>
      <ul className="fotogalerie-page__galleries-container">
        {galleries.map((gallery) => (
          <li className="fotogalerie-page__image-item" onClick={e => imageOnClickHandler(e, gallery.title)} key={gallery.id}>
            <ImageCard
              imageUrl={gallery.images[0]}
              
              isKey={true}
              title={gallery.title}
            />
          </li>
        ))}
      </ul>
      {isAdmin && <Button link="/fotogalerie/new">Navá fotogalerie</Button>}
    </div>
  );
};

export default FotoGaleriePage;
