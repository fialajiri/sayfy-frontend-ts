import axios from "axios";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import UpdateGallery from "../../../components/pages/fotogalerie/update-gallery";
import LoadingSpinner from "../../../components/ui-elements/loading-spinner";
import { useAuth } from "../../../context/auth-context";
import { GalleryDoc } from "../../../models/models";

const EditGalleryPage: NextPage = () => {
  const [gallery, setGallery] = useState<GalleryDoc | undefined>(undefined);
  const router = useRouter();
  const { isAdmin } = useAuth();

  useEffect(() => {
    const getGallery = async (galleryTitle: string) => {
      const { data: gallery }: { data: GalleryDoc } = await axios.get(
        `${process.env.BACKEND_URL}/api/gallery/${galleryTitle}`
      );

      setGallery(gallery);
    };

    getGallery(router.query.galleryTitle as string);
  }, [router.query.galleryTitle]);

  if (!isAdmin) {
    typeof window !== "undefined" && router.push("/login");
    return <LoadingSpinner asOverlay />;
  } else {
    return (
      <Fragment>
        {!gallery && <LoadingSpinner />}
        {gallery && <UpdateGallery gallery={gallery} />}
      </Fragment>
    );
  }
};

export default EditGalleryPage;
