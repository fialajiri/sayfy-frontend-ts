import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import { GalleryDoc } from "../../models/models";
import SimpleHead from "../../components/meta/simple-head";
import GalleryDetail from "../../components/pages/fotogalerie/gallery-detail";
import { getGalleries, getGallery } from "../../utils/gallery/get-galleries";
import { Fragment } from "react";

interface GalleryDetailPageProps {
  gallery: GalleryDoc;
}

export interface IParams extends ParsedUrlQuery {
  galleryTitle: string;
}

const GalleryDetailPage: NextPage<GalleryDetailPageProps> = ({ gallery }) => {
  return (
    <Fragment>
      <SimpleHead
        title={`Fotogalerie ${gallery.title}`}
        description={`Fotogalerie k cyklistichému závodu Sayfyho Memorial z roku ${gallery.title}`}
        url={`/fotogalerie/${gallery.title}`}
      />
      <GalleryDetail title={gallery.title} images={gallery.images} />
    </Fragment>
  );
};

export default GalleryDetailPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const { galleryTitle } = context.params as IParams;
  const gallery = await getGallery(galleryTitle);

  return {
    props: {
      gallery,
    },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const galleries = await getGalleries();
  const pathWithParams = galleries.map((gallery) => ({
    params: { galleryTitle: gallery.galleryUrl },
  }));

  return {
    paths: pathWithParams,
    fallback: false,
  };
};
