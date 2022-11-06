import { NextPage } from "next";
import { Fragment } from "react";
import SimpleHead from "../../../components/meta/simple-head";
import CreateNewGallery from "../../../components/pages/fotogalerie/create-new-gallery";

const newGallery: NextPage = () => {
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
};

export default newGallery;
