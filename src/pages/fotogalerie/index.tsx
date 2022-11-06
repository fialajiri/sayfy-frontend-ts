import { GetStaticProps, NextPage } from "next";
import { Fragment } from "react";
import SimpleHead from "../../components/meta/simple-head";
import FotoGaleriePage from "../../components/pages/fotogalerie/fotogalerie-page";
import { GalleryDoc } from "../../models/models";
import { getGalleries } from "../../utils/gallery/get-galleries";

interface FotoGalerieProps {
  galleries: GalleryDoc[];
}

const FotoGalerie: NextPage<FotoGalerieProps> = ({ galleries }) => {
  return (
    <Fragment>
      <SimpleHead
        title="Fotogalerie"
        description="Fotogalerie Závodu Sayfyho Memorial"
        url="/fotogalerie"
      />
      <FotoGaleriePage galleries={galleries} />
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const galleries: GalleryDoc[] = await getGalleries();
  galleries.sort((a, b) => parseInt(b.title) - parseInt(a.title));

  return {
    props: {
      galleries,
    },
    revalidate: 60 * 60,
  };
};

export default FotoGalerie;
