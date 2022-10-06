import { useEffect } from "react";
import { GalleryDoc } from "../../../models/models";
import { getGalleries } from "../../../utils/gallery/get-galleries";
import Button from "../../ui-elements/button";

interface FotoGaleriePageProps {
  galleries:GalleryDoc[]
}

const FotoGaleriePage: React.FC<FotoGaleriePageProps> = ({galleries}) => {
 console.log(galleries)
  
  return (
    <div>
      <Button link="/fotogalerie/new">Navá photogalerie</Button>
    </div>
  );
};

export default FotoGaleriePage;
