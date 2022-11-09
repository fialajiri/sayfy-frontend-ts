import { NextPage } from "next";
import { useRouter } from "next/router";
import { Fragment } from "react";
import SimpleHead from "../../../components/meta/simple-head";
import CreateNewGallery from "../../../components/pages/fotogalerie/create-new-gallery";
import LoadingSpinner from "../../../components/ui-elements/loading-spinner";
import { useAuth } from "../../../context/auth-context";

const NewGallery: NextPage = () => {
  const router = useRouter();
  const { isAdmin } = useAuth();

  if (!isAdmin) {
    typeof window !== "undefined" && router.push("/login");
    return <LoadingSpinner asOverlay />;
  } else {
    return (
      <Fragment>
        <SimpleHead
          title="Fotogalerie"
          description="Fotogalerie k minulým ročníkům cyklistického závodu Sayfyho Memorial"
          url="/fotogalerie"
        />
        <CreateNewGallery />
      </Fragment>
    );
  }
};

export default NewGallery;
