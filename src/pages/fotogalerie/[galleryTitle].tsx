import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import { GalleryDoc } from "../../models/models";
import ImageCard from "../../components/ui-elements/image-card";
import { getGalleries, getGallery } from "../../utils/gallery/get-galleries";

interface GalleryDetailPageProps {
  gallery: GalleryDoc;
}

export interface IParams extends ParsedUrlQuery {
  galleryTitle: string;
}

const GalleryDetailPage: NextPage<GalleryDetailPageProps> = ({ gallery }) => {
  const imageOnClickHandler = () => {};

  return (
    <div className="gallery-detail__container">
      <h2 className="heading-secondary"> {gallery.title}</h2>
      <ul className="gallery-detail__image-container">
      {gallery.images.map((image) => (
        <ImageCard imageUrl={image} key={image} isKey={true} onClick={imageOnClickHandler} alt={image}/>
      ))}
      </ul>
    </div>
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
  const pathWithParams = galleries.map((gallery) => ({ params: { galleryTitle: gallery.title } }));

  return {
    paths: pathWithParams,
    fallback: false,
  };
};
